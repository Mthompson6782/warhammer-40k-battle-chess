import { FACTIONS } from '../data/factions.js';

export class BattleChessEngine {
  constructor(mode = 'wargame', whiteFaction = 'ultramarines', blackFaction = 'chaos') {
    this.mode = mode; // 'wargame' | 'classic'
    this.factions = {
      w: whiteFaction,
      b: blackFaction
    };
    this.reset();
  }

  reset() {
    this.board = Array.from({ length: 8 }, () => Array(8).fill(null));
    this.turn = 'w';
    this.turnNumber = 1;
    this.pieceIdCounter = 1;
    this.enPassantTarget = null; // { r, c, pawnR, pawnC }
    this.gameOver = false;
    this.winner = null; // 'w' | 'b' | 'draw'
    this.winReason = '';
    this.moveHistory = [];
    this.captured = { w: [], b: [] }; // pieces lost by w and b
    this.cp = { w: 2, b: 2 };
    this.activeBuffs = {
      w: { overcharge: false },
      b: { overcharge: false }
    };

    const backRank = ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'];

    // Setup Black (top, row 0 and 1)
    for (let c = 0; c < 8; c++) {
      this.board[0][c] = this.createPiece('b', backRank[c], 0, c);
      this.board[1][c] = this.createPiece('b', 'p', 1, c);
    }

    // Setup White (bottom, row 7 and 6)
    for (let c = 0; c < 8; c++) {
      this.board[6][c] = this.createPiece('w', 'p', 6, c);
      this.board[7][c] = this.createPiece('w', backRank[c], 7, c);
    }
  }

  createPiece(side, type, r, c) {
    const factionKey = this.factions[side];
    const unitProfile = FACTIONS[factionKey].units[type];
    return {
      id: `${side}_${type}_${this.pieceIdCounter++}`,
      side,
      type,
      faction: factionKey,
      name: unitProfile.name,
      maxHp: unitProfile.maxHp,
      hp: unitProfile.maxHp,
      atkDice: unitProfile.atkDice,
      atkBase: unitProfile.atkBase,
      armor: unitProfile.armor,
      armorPierce: unitProfile.armorPierce || 0,
      counterBase: unitProfile.counterBase,
      hasMoved: false,
      r,
      c
    };
  }

  setFactions(whiteFaction, blackFaction) {
    this.factions.w = whiteFaction;
    this.factions.b = blackFaction;
    // Update existing pieces if mid-game
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const p = this.board[r][c];
        if (p) {
          const fKey = this.factions[p.side];
          const prof = FACTIONS[fKey].units[p.type];
          const hpRatio = p.hp / p.maxHp;
          p.faction = fKey;
          p.name = prof.name;
          p.maxHp = prof.maxHp;
          p.hp = Math.max(1, Math.round(prof.maxHp * hpRatio));
          p.atkDice = prof.atkDice;
          p.atkBase = prof.atkBase;
          p.armor = prof.armor;
          p.armorPierce = prof.armorPierce || 0;
          p.counterBase = prof.counterBase;
        }
      }
    }
  }

  setMode(newMode) {
    this.mode = newMode;
  }

  getPiece(r, c) {
    if (r < 0 || r > 7 || c < 0 || c > 7) return null;
    return this.board[r][c];
  }

  getAllPieces(side = null) {
    const list = [];
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const p = this.board[r][c];
        if (p && (!side || p.side === side)) {
          list.push(p);
        }
      }
    }
    return list;
  }

  findKing(side, boardState = this.board) {
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const p = boardState[r][c];
        if (p && p.side === side && p.type === 'k') {
          return { r, c, piece: p };
        }
      }
    }
    return null;
  }

  isSquareAttacked(targetR, targetC, bySide, boardState = this.board) {
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const p = boardState[r][c];
        if (!p || p.side !== bySide) continue;
        const pseudoMoves = this.getPseudoLegalMovesForPiece(r, c, boardState, true);
        if (pseudoMoves.some((m) => m.toR === targetR && m.toC === targetC)) {
          return true;
        }
      }
    }
    return false;
  }

  isInCheck(side, boardState = this.board) {
    const king = this.findKing(side, boardState);
    if (!king) return true;
    const enemySide = side === 'w' ? 'b' : 'w';
    return this.isSquareAttacked(king.r, king.c, enemySide, boardState);
  }

  getPseudoLegalMovesForPiece(r, c, boardState = this.board, attacksOnly = false) {
    const piece = boardState[r][c];
    if (!piece) return [];

    const moves = [];
    const { side, type } = piece;
    const dir = side === 'w' ? -1 : 1;
    const startRow = side === 'w' ? 6 : 1;

    const inBounds = (row, col) => row >= 0 && row <= 7 && col >= 0 && col <= 7;

    if (type === 'p') {
      if (!attacksOnly) {
        // 1 step forward
        const nextR = r + dir;
        if (inBounds(nextR, c) && !boardState[nextR][c]) {
          moves.push({ fromR: r, fromC: c, toR: nextR, toC: c, isAttack: false });
          // 2 steps from start
          const doubleR = r + dir * 2;
          if (r === startRow && inBounds(doubleR, c) && !boardState[doubleR][c]) {
            moves.push({ fromR: r, fromC: c, toR: doubleR, toC: c, isAttack: false, isDoublePawn: true });
          }
        }
      }
      // Diagonal captures
      for (const dc of [-1, 1]) {
        const capR = r + dir;
        const capC = c + dc;
        if (!inBounds(capR, capC)) continue;
        const target = boardState[capR][capC];
        if (attacksOnly) {
          moves.push({ fromR: r, fromC: c, toR: capR, toC: capC, isAttack: true });
        } else if (target && target.side !== side) {
          moves.push({ fromR: r, fromC: c, toR: capR, toC: capC, isAttack: true, targetPiece: target });
        } else if (
          this.enPassantTarget &&
          this.enPassantTarget.r === capR &&
          this.enPassantTarget.c === capC
        ) {
          const epPawn = boardState[this.enPassantTarget.pawnR]?.[this.enPassantTarget.pawnC];
          if (epPawn && epPawn.side !== side) {
            moves.push({
              fromR: r,
              fromC: c,
              toR: capR,
              toC: capC,
              isAttack: true,
              isEnPassant: true,
              targetPiece: epPawn,
              epR: this.enPassantTarget.pawnR,
              epC: this.enPassantTarget.pawnC
            });
          }
        }
      }
    } else if (type === 'n') {
      const jumps = [
        [-2, -1], [-2, 1], [-1, -2], [-1, 2],
        [1, -2], [1, 2], [2, -1], [2, 1]
      ];
      for (const [dr, dc] of jumps) {
        const nr = r + dr;
        const nc = c + dc;
        if (!inBounds(nr, nc)) continue;
        const target = boardState[nr][nc];
        if (!target) {
          if (!attacksOnly) moves.push({ fromR: r, fromC: c, toR: nr, toC: nc, isAttack: false });
        } else if (target.side !== side) {
          moves.push({ fromR: r, fromC: c, toR: nr, toC: nc, isAttack: true, targetPiece: target });
        }
      }
    } else if (type === 'k') {
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          if (dr === 0 && dc === 0) continue;
          const nr = r + dr;
          const nc = c + dc;
          if (!inBounds(nr, nc)) continue;
          const target = boardState[nr][nc];
          if (!target) {
            if (!attacksOnly) moves.push({ fromR: r, fromC: c, toR: nr, toC: nc, isAttack: false });
          } else if (target.side !== side) {
            moves.push({ fromR: r, fromC: c, toR: nr, toC: nc, isAttack: true, targetPiece: target });
          }
        }
      }

      // Castling
      if (!attacksOnly && !piece.hasMoved && !this.isInCheck(side, boardState)) {
        const enemySide = side === 'w' ? 'b' : 'w';
        // Kingside (col 7)
        const rookK = boardState[r][7];
        if (
          rookK &&
          rookK.type === 'r' &&
          rookK.side === side &&
          !rookK.hasMoved &&
          !boardState[r][5] &&
          !boardState[r][6] &&
          !this.isSquareAttacked(r, 5, enemySide, boardState) &&
          !this.isSquareAttacked(r, 6, enemySide, boardState)
        ) {
          moves.push({
            fromR: r,
            fromC: c,
            toR: r,
            toC: 6,
            isAttack: false,
            isCastle: 'kingside',
            rookFromC: 7,
            rookToC: 5
          });
        }
        // Queenside (col 0)
        const rookQ = boardState[r][0];
        if (
          rookQ &&
          rookQ.type === 'r' &&
          rookQ.side === side &&
          !rookQ.hasMoved &&
          !boardState[r][1] &&
          !boardState[r][2] &&
          !boardState[r][3] &&
          !this.isSquareAttacked(r, 3, enemySide, boardState) &&
          !this.isSquareAttacked(r, 2, enemySide, boardState)
        ) {
          moves.push({
            fromR: r,
            fromC: c,
            toR: r,
            toC: 2,
            isAttack: false,
            isCastle: 'queenside',
            rookFromC: 0,
            rookToC: 3
          });
        }
      }
    } else {
      // Sliding pieces: r, b, q
      const dirs = [];
      if (type === 'r' || type === 'q') {
        dirs.push([-1, 0], [1, 0], [0, -1], [0, 1]);
      }
      if (type === 'b' || type === 'q') {
        dirs.push([-1, -1], [-1, 1], [1, -1], [1, 1]);
      }

      for (const [dr, dc] of dirs) {
        let nr = r + dr;
        let nc = c + dc;
        let prevR = r;
        let prevC = c;
        while (inBounds(nr, nc)) {
          const target = boardState[nr][nc];
          if (!target) {
            if (!attacksOnly) {
              moves.push({ fromR: r, fromC: c, toR: nr, toC: nc, isAttack: false });
            }
          } else {
            if (target.side !== side) {
              moves.push({
                fromR: r,
                fromC: c,
                toR: nr,
                toC: nc,
                isAttack: true,
                targetPiece: target,
                fallbackR: prevR,
                fallbackC: prevC
              });
            }
            break;
          }
          prevR = nr;
          prevC = nc;
          nr += dr;
          nc += dc;
        }
      }
    }

    return moves;
  }

  getLegalMoves(r, c) {
    const piece = this.getPiece(r, c);
    if (!piece || piece.side !== this.turn || this.gameOver) return [];

    const pseudo = this.getPseudoLegalMovesForPiece(r, c, this.board, false);

    // In Classic Mode, strictly filter out moves that leave own King in check
    // In Wargame Mode, also prevent suiciding the King into an immediate lethal attack, or filter check if Classic
    if (this.mode === 'classic') {
      return pseudo.filter((m) => !this.wouldLeaveKingInCheck(m, piece.side));
    } else {
      // In Wargame Mode, you can't attack an enemy King and fail to kill it while standing on its square,
      // wait—our fallback mechanic automatically moves surviving attackers back to fallbackR/fallbackC!
      // Still, prevent moving your King directly into an attacked square if King has <= 12 HP.
      return pseudo.filter((m) => {
        if (piece.type === 'k' && piece.hp <= 12) {
          return !this.wouldLeaveKingInCheck(m, piece.side);
        }
        return true;
      });
    }
  }

  wouldLeaveKingInCheck(move, side) {
    const clone = this.board.map((row) => row.slice());
    const movingPiece = clone[move.fromR][move.fromC];
    clone[move.fromR][move.fromC] = null;
    if (move.isEnPassant) {
      clone[move.epR][move.epC] = null;
    }
    clone[move.toR][move.toC] = movingPiece;
    return this.isInCheck(side, clone);
  }

  getAllLegalMovesForSide(side = this.turn) {
    const prevTurn = this.turn;
    this.turn = side;
    const all = [];
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const p = this.board[r][c];
        if (p && p.side === side) {
          const ms = this.getLegalMoves(r, c);
          all.push(...ms);
        }
      }
    }
    this.turn = prevTurn;
    return all;
  }

  /**
   * Resolves a move or combat encounter and returns a detailed outcome object
   * so the 3D Combat Choreographer can animate every shot, slash, counter-attack, and finisher!
   */
  executeMove(move, promotionType = 'q') {
    const attacker = this.board[move.fromR][move.fromC];
    if (!attacker) return null;

    const targetR = move.isEnPassant ? move.epR : move.toR;
    const targetC = move.isEnPassant ? move.epC : move.toC;
    const defender = move.isAttack ? this.board[targetR][targetC] : null;

    const fallbackR = move.fallbackR !== undefined ? move.fallbackR : move.fromR;
    const fallbackC = move.fallbackC !== undefined ? move.fallbackC : move.fromC;

    const result = {
      move,
      attackerId: attacker.id,
      attackerSnapshot: { ...attacker },
      defenderId: defender ? defender.id : null,
      defenderSnapshot: defender ? { ...defender } : null,
      fromR: move.fromR,
      fromC: move.fromC,
      toR: move.toR,
      toC: move.toC,
      finalAttackerR: move.toR,
      finalAttackerC: move.toC,
      isAttack: !!defender,
      isCastle: move.isCastle || null,
      rookMove: null,
      combat: null,
      promotedTo: null,
      gameOver: false,
      winner: null,
      winReason: ''
    };

    // Reset en passant unless double pawn push
    this.enPassantTarget = null;
    if (move.isDoublePawn) {
      const dir = attacker.side === 'w' ? -1 : 1;
      this.enPassantTarget = {
        r: move.fromR + dir,
        c: move.fromC,
        pawnR: move.toR,
        pawnC: move.toC
      };
    }

    if (!defender) {
      // Non-combat movement
      this.board[move.fromR][move.fromC] = null;
      this.board[move.toR][move.toC] = attacker;
      attacker.r = move.toR;
      attacker.c = move.toC;
      attacker.hasMoved = true;

      if (move.isCastle) {
        const rook = this.board[move.fromR][move.rookFromC];
        if (rook) {
          this.board[move.fromR][move.rookFromC] = null;
          this.board[move.fromR][move.rookToC] = rook;
          rook.r = move.fromR;
          rook.c = move.rookToC;
          rook.hasMoved = true;
          result.rookMove = {
            rookId: rook.id,
            fromR: move.fromR,
            fromC: move.rookFromC,
            toR: move.fromR,
            toC: move.rookToC
          };
        }
      }
    } else {
      // COMBAT RESOLUTION!
      const overcharged = this.activeBuffs[attacker.side].overcharge;
      this.activeBuffs[attacker.side].overcharge = false;

      if (this.mode === 'classic') {
        // Classic Battle Chess: Guaranteed Lethal Execution
        const diceRolls = Array.from({ length: attacker.atkDice }, () => Math.floor(Math.random() * 6) + 1);
        const damageDealt = defender.hp;
        defender.hp = 0;

        this.board[move.fromR][move.fromC] = null;
        if (move.isEnPassant) {
          this.board[move.epR][move.epC] = null;
        }
        this.board[move.toR][move.toC] = attacker;
        attacker.r = move.toR;
        attacker.c = move.toC;
        attacker.hasMoved = true;
        this.captured[defender.side].push(defender);

        result.combat = {
          mode: 'classic',
          overcharged,
          diceRolls,
          rawAttack: damageDealt,
          armorMitigated: 0,
          damageDealt,
          isCrit: true,
          defenderSurvived: false,
          defenderRemainingHp: 0,
          counterAttack: null,
          attackerDiedInCounter: false,
          attackerRemainingHp: attacker.hp
        };
      } else {
        // Warhammer 40k Wargame / Regicide Mode: Roll Dice, Armor Save, Counter-Attack!
        const diceRolls = Array.from({ length: attacker.atkDice }, () => Math.floor(Math.random() * 6) + 1);
        const diceSum = diceRolls.reduce((a, b) => a + b, 0);
        const isCrit = diceRolls.includes(6);
        const critBonus = isCrit ? 2 : 0;
        const overchargeBonus = overcharged ? 5 : 0;

        const rawAttack = diceSum + attacker.atkBase + critBonus + overchargeBonus;
        const pierce = (attacker.armorPierce || 0) + (overcharged ? 2 : 0);
        const effectiveArmor = Math.max(0, defender.armor - pierce);
        const damageDealt = Math.max(2, rawAttack - effectiveArmor);

        defender.hp = Math.max(0, defender.hp - damageDealt);
        const defenderSurvived = defender.hp > 0;

        let counterAttack = null;
        let attackerDiedInCounter = false;

        if (!defenderSurvived) {
          // Defender SLAIN! Attacker claims the square!
          this.board[move.fromR][move.fromC] = null;
          if (move.isEnPassant) {
            this.board[move.epR][move.epC] = null;
          }
          this.board[move.toR][move.toC] = attacker;
          attacker.r = move.toR;
          attacker.c = move.toC;
          attacker.hasMoved = true;
          this.captured[defender.side].push(defender);
        } else {
          // Defender SURVIVES and holds the square!
          // Defender executes a Counter-Attack!
          const counterDie = Math.floor(Math.random() * 6) + 1;
          const rawCounter = counterDie + defender.counterBase;
          const counterArmor = Math.max(0, attacker.armor - (defender.armorPierce || 0));
          const counterDmg = Math.max(1, rawCounter - counterArmor);

          // Warlord (King) cannot self-destruct on its own offensive turn; survives at 1 HP minimum
          if (attacker.type === 'k') {
            attacker.hp = Math.max(1, attacker.hp - counterDmg);
          } else {
            attacker.hp = Math.max(0, attacker.hp - counterDmg);
          }

          counterAttack = {
            die: counterDie,
            damage: counterDmg,
            defenderName: defender.name
          };

          if (attacker.hp <= 0) {
            // Attacker was slain by the defender's counter-attack!
            attackerDiedInCounter = true;
            this.board[move.fromR][move.fromC] = null;
            this.captured[attacker.side].push(attacker);
            result.finalAttackerR = fallbackR;
            result.finalAttackerC = fallbackC;
          } else {
            // Attacker falls back to the last open tile along its charge path (or origin square)
            this.board[move.fromR][move.fromC] = null;
            this.board[fallbackR][fallbackC] = attacker;
            attacker.r = fallbackR;
            attacker.c = fallbackC;
            attacker.hasMoved = true;
            result.finalAttackerR = fallbackR;
            result.finalAttackerC = fallbackC;
          }
        }

        result.combat = {
          mode: 'wargame',
          overcharged,
          diceRolls,
          rawAttack,
          armorMitigated: effectiveArmor,
          damageDealt,
          isCrit,
          defenderSurvived,
          defenderRemainingHp: defender.hp,
          counterAttack,
          attackerDiedInCounter,
          attackerRemainingHp: attacker.hp
        };
      }
    }

    // Check Pawn Promotion (if attacker is alive and reached back rank)
    const promoRow = attacker.side === 'w' ? 0 : 7;
    if (
      attacker.hp > 0 &&
      attacker.type === 'p' &&
      attacker.r === promoRow &&
      this.board[attacker.r][attacker.c] === attacker
    ) {
      this.promotePiece(attacker, promotionType);
      result.promotedTo = {
        type: attacker.type,
        name: attacker.name,
        maxHp: attacker.maxHp,
        hp: attacker.hp
      };
    }

    // Advance turn & check victory conditions
    const nextSide = this.turn === 'w' ? 'b' : 'w';
    this.turn = nextSide;
    if (nextSide === 'w') {
      this.turnNumber++;
    }
    this.cp[nextSide] = Math.min(6, this.cp[nextSide] + 1);
    this.activeBuffs[nextSide].overcharge = false;

    this.evaluateGameEnd();
    result.gameOver = this.gameOver;
    result.winner = this.winner;
    result.winReason = this.winReason;

    this.moveHistory.push(result);
    return result;
  }

  promotePiece(piece, newType = 'q') {
    const fKey = this.factions[piece.side];
    const prof = FACTIONS[fKey].units[newType];
    piece.type = newType;
    piece.name = prof.name;
    piece.maxHp = prof.maxHp;
    piece.hp = prof.maxHp;
    piece.atkDice = prof.atkDice;
    piece.atkBase = prof.atkBase;
    piece.armor = prof.armor;
    piece.armorPierce = prof.armorPierce || 0;
    piece.counterBase = prof.counterBase;
  }

  // Stratagems for Wargame Mode
  useOverchargeStratagem(side = this.turn) {
    if (this.mode !== 'wargame' || this.cp[side] < 1 || this.activeBuffs[side].overcharge) {
      return false;
    }
    this.cp[side] -= 1;
    this.activeBuffs[side].overcharge = true;
    return true;
  }

  useHealStratagem(r, c, side = this.turn) {
    if (this.mode !== 'wargame' || this.cp[side] < 2) return null;
    const p = this.getPiece(r, c);
    if (!p || p.side !== side || p.hp >= p.maxHp) return null;

    this.cp[side] -= 2;
    const oldHp = p.hp;
    p.hp = Math.min(p.maxHp, p.hp + 10);
    return {
      pieceId: p.id,
      pieceName: p.name,
      r,
      c,
      healedAmount: p.hp - oldHp,
      newHp: p.hp,
      maxHp: p.maxHp
    };
  }

  useOrbitalStratagem(r, c, side = this.turn) {
    if (this.mode !== 'wargame' || this.cp[side] < 3) return null;
    const p = this.getPiece(r, c);
    if (!p || p.side === side || p.type === 'k') return null;

    this.cp[side] -= 3;
    const dmg = 9;
    p.hp = Math.max(0, p.hp - dmg);
    const killed = p.hp <= 0;
    if (killed) {
      this.board[r][c] = null;
      this.captured[p.side].push(p);
      this.evaluateGameEnd();
    }
    return {
      pieceId: p.id,
      pieceName: p.name,
      r,
      c,
      damage: dmg,
      killed,
      remainingHp: p.hp
    };
  }

  evaluateGameEnd() {
    const whiteKing = this.findKing('w');
    const blackKing = this.findKing('b');

    if (!whiteKing) {
      this.gameOver = true;
      this.winner = 'b';
      this.winReason = 'Regicide! White Warlord Slain in Combat';
      return;
    }
    if (!blackKing) {
      this.gameOver = true;
      this.winner = 'w';
      this.winReason = 'Regicide! Enemy Warlord Slain in Combat';
      return;
    }

    const legalMoves = this.getAllLegalMovesForSide(this.turn);
    if (legalMoves.length === 0) {
      this.gameOver = true;
      if (this.isInCheck(this.turn)) {
        this.winner = this.turn === 'w' ? 'b' : 'w';
        this.winReason = 'Checkmate! Enemy Warlord Cornered';
      } else {
        this.winner = 'draw';
        this.winReason = 'Stalemate on the Battlefield';
      }
    }
  }

  // Cogitator Tactical AI
  chooseAIMove(difficulty = 'medium') {
    if (this.gameOver) return null;
    const side = this.turn;
    const moves = this.getAllLegalMovesForSide(side);
    if (moves.length === 0) return null;

    // Optional AI Stratagem usage in Wargame mode on Medium/Hard
    let aiStratagemEvent = null;
    if (this.mode === 'wargame' && difficulty !== 'easy') {
      // Check if AI King is low HP and can heal
      const king = this.findKing(side);
      if (king && king.piece.hp <= king.piece.maxHp - 10 && this.cp[side] >= 2) {
        const healRes = this.useHealStratagem(king.r, king.c, side);
        if (healRes) aiStratagemEvent = { type: 'heal', data: healRes };
      } else if (this.cp[side] >= 2 && !this.activeBuffs[side].overcharge) {
        // If AI has a strong attack available, activate Overcharge
        const hasAttack = moves.some((m) => m.isAttack);
        if (hasAttack) {
          this.useOverchargeStratagem(side);
          aiStratagemEvent = { type: 'overcharge' };
        }
      }
    }

    if (difficulty === 'easy') {
      const attacks = moves.filter((m) => m.isAttack);
      if (attacks.length > 0 && Math.random() < 0.65) {
        return { move: attacks[Math.floor(Math.random() * attacks.length)], aiStratagemEvent };
      }
      return { move: moves[Math.floor(Math.random() * moves.length)], aiStratagemEvent };
    }

    const roleValues = { p: 100, n: 320, b: 340, r: 520, q: 950, k: 10000 };

    // Score each move tactically
    let bestScore = -Infinity;
    let bestMoves = [];

    for (const m of moves) {
      const attacker = this.board[m.fromR][m.fromC];
      let score = 0;

      // Center control bonus
      const centerDist = Math.abs(3.5 - m.toR) + Math.abs(3.5 - m.toC);
      score += (7 - centerDist) * 4;

      // Advance pawns
      if (attacker.type === 'p') {
        const progress = side === 'w' ? 6 - m.toR : m.toR - 1;
        score += progress * 8;
      }

      if (m.isAttack && m.targetPiece) {
        const target = m.targetPiece;
        const baseVal = roleValues[target.type] || 100;

        if (this.mode === 'classic') {
          score += baseVal - roleValues[attacker.type] * 0.12;
        } else {
          // Estimate expected damage in Wargame mode
          const expectedRoll = attacker.atkDice * 3.5 + attacker.atkBase + (this.activeBuffs[side].overcharge ? 5 : 0);
          const effArmor = Math.max(0, target.armor - (attacker.armorPierce || 0));
          const expectedDmg = Math.max(2, expectedRoll - effArmor);

          if (expectedDmg >= target.hp) {
            // Likely lethal kill! Huge priority!
            score += baseVal * 1.4;
          } else {
            // Chip damage vs counter-attack risk
            const dmgRatio = expectedDmg / target.maxHp;
            score += baseVal * dmgRatio * 0.65;

            const expectedCounter = Math.max(1, 3.5 + target.counterBase - attacker.armor);
            if (expectedCounter >= attacker.hp && attacker.type !== 'k') {
              score -= roleValues[attacker.type] * 0.9; // Avoid suiciding into counter-attack
            } else {
              score -= (expectedCounter / attacker.maxHp) * roleValues[attacker.type] * 0.3;
            }
          }
        }
      }

      // On Hard difficulty, check if destination square is heavily defended by enemy
      if (difficulty === 'hard') {
        const enemySide = side === 'w' ? 'b' : 'w';
        const clone = this.board.map((row) => row.slice());
        clone[m.fromR][m.fromC] = null;
        clone[m.toR][m.toC] = attacker;
        if (this.isSquareAttacked(m.toR, m.toC, enemySide, clone)) {
          score -= roleValues[attacker.type] * (this.mode === 'classic' ? 0.55 : 0.25);
        }
      }

      // Slight jitter to prevent identical games
      score += (Math.random() - 0.5) * 6;

      if (score > bestScore) {
        bestScore = score;
        bestMoves = [m];
      } else if (Math.abs(score - bestScore) < 4) {
        bestMoves.push(m);
      }
    }

    const chosen = bestMoves[Math.floor(Math.random() * bestMoves.length)] || moves[0];
    return { move: chosen, aiStratagemEvent };
  }
}
