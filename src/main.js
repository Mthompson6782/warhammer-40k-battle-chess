import * as THREE from 'three';
import { FACTIONS, ROLE_LABELS } from './data/factions.js';
import { BattleChessEngine } from './chess/gameEngine.js';
import { CombatArena } from './scene/combatArena.js';
import { soundEngine } from './audio/soundEngine.js';

class WarhammerBattleChessApp {
  constructor() {
    this.engine = new BattleChessEngine('wargame', 'ultramarines', 'chaos');
    this.opponentMode = 'ai_medium'; // 'ai_easy' | 'ai_medium' | 'ai_hard' | 'pvp' | 'ai_vs_ai'

    this.selectedSquare = null;
    this.legalMoves = [];
    this.pendingStratagem = null; // null | 'heal' | 'orbital'
    this.lastMoveResult = null;
    this.inspectedPiece = null;
    this.hpBarElements = new Map(); // pieceId -> DOM element

    this.arenaContainer = document.getElementById('arena-container');
    this.worldUiLayer = document.getElementById('world-ui-layer');

    this.arena = new CombatArena(
      this.arenaContainer,
      (r, c) => this.handleSquareClick(r, c),
      (r, c) => this.handleSquareHover(r, c)
    );

    this.bindUI();
    this.startNewBattle();
    this.startWorldUILoop();
  }

  bindUI() {
    // Mode Switchers
    const btnWargame = document.getElementById('btn-mode-wargame');
    const btnClassic = document.getElementById('btn-mode-classic');

    btnWargame.addEventListener('click', () => {
      btnWargame.classList.add('active');
      btnClassic.classList.remove('active');
      this.engine.setMode('wargame');
      document.getElementById('stratagems-card').classList.remove('hidden');
      document.getElementById('cp-bar-container').classList.remove('hidden');
      this.logMessage('⚔️ Switched to WARGAME MODE: Units use Wounds (HP), Armor Saves, Dice Rolls & Counter-Attacks!', 'strat');
      this.arena.syncBoardPieces(this.engine);
      this.updateHUD();
    });

    btnClassic.addEventListener('click', () => {
      btnClassic.classList.add('active');
      btnWargame.classList.remove('active');
      this.engine.setMode('classic');
      this.pendingStratagem = null;
      document.getElementById('stratagems-card').classList.add('hidden');
      document.getElementById('cp-bar-container').classList.add('hidden');
      this.logMessage('♟️ Switched to CLASSIC BATTLE CHESS: Standard chess rules with guaranteed 3D execution finishers!', 'strat');
      this.arena.syncBoardPieces(this.engine);
      this.updateHUD();
    });

    // Faction Selectors
    const selWhite = document.getElementById('select-white-faction');
    const selBlack = document.getElementById('select-black-faction');

    const onFactionChange = () => {
      this.engine.setFactions(selWhite.value, selBlack.value);
      this.arena.syncBoardPieces(this.engine);
      this.updateHUD();
      const fw = FACTIONS[selWhite.value].name;
      const fb = FACTIONS[selBlack.value].name;
      this.logMessage(`⚜️ Army Matchup updated: ${fw} vs. ${fb}`, 'strat');
    };

    selWhite.addEventListener('change', onFactionChange);
    selBlack.addEventListener('change', onFactionChange);

    // Opponent Selector
    const selOpponent = document.getElementById('select-opponent');
    selOpponent.addEventListener('change', () => {
      this.opponentMode = selOpponent.value;
      this.checkAndTriggerAITurn();
    });

    // New Game & Play Again
    document.getElementById('btn-new-game').addEventListener('click', () => this.startNewBattle());
    document.getElementById('btn-play-again').addEventListener('click', () => {
      document.getElementById('victory-modal').classList.add('hidden');
      this.startNewBattle();
    });

    // Sound Toggle
    const btnSound = document.getElementById('btn-sound');
    btnSound.addEventListener('click', () => {
      const muted = soundEngine.toggleMute();
      btnSound.textContent = muted ? '🔇' : '🔊';
    });

    // Camera Presets
    document.querySelectorAll('.cam-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.arena.setCameraPreset(btn.dataset.cam);
      });
    });

    const btnDuelCam = document.getElementById('btn-toggle-duelcam');
    btnDuelCam.addEventListener('click', () => {
      this.arena.autoActionCam = !this.arena.autoActionCam;
      btnDuelCam.classList.toggle('active', this.arena.autoActionCam);
      btnDuelCam.textContent = `🎬 Auto Action Duel Cam: ${this.arena.autoActionCam ? 'ON' : 'OFF'}`;
    });

    document.getElementById('btn-skip-anim').addEventListener('click', () => {
      this.arena.skipCurrentAnimation();
    });

    // Stratagem Buttons
    document.getElementById('btn-strat-overcharge').addEventListener('click', () => {
      if (this.arena.isAnimating || !this.isHumanTurn()) return;
      if (this.engine.useOverchargeStratagem()) {
        soundEngine.playPsychicBlast();
        const stratName = FACTIONS[this.engine.factions[this.engine.turn]].stratagems.overcharge.name;
        this.logMessage(`⚡ STRATAGEM ACTIVATED: ${stratName} (+5 DMG & +2 Armor Pierce on next combat!)`, 'strat');
        this.updateHUD();
      }
    });

    document.getElementById('btn-strat-heal').addEventListener('click', () => {
      if (this.arena.isAnimating || !this.isHumanTurn()) return;
      if (this.pendingStratagem === 'heal') {
        this.pendingStratagem = null;
      } else {
        this.pendingStratagem = 'heal';
        this.selectedSquare = null;
        this.legalMoves = [];
      }
      this.refreshBoardHighlights();
      this.updateHUD();
    });

    document.getElementById('btn-strat-orbital').addEventListener('click', () => {
      if (this.arena.isAnimating || !this.isHumanTurn()) return;
      if (this.pendingStratagem === 'orbital') {
        this.pendingStratagem = null;
      } else {
        this.pendingStratagem = 'orbital';
        this.selectedSquare = null;
        this.legalMoves = [];
      }
      this.refreshBoardHighlights();
      this.updateHUD();
    });
  }

  startNewBattle() {
    this.arena.skipCurrentAnimation();
    this.selectedSquare = null;
    this.legalMoves = [];
    this.pendingStratagem = null;
    this.lastMoveResult = null;
    this.inspectedPiece = null;

    this.engine.reset();
    this.arena.clearBattleScars();
    this.arena.syncBoardPieces(this.engine);
    this.arena.setHighlights(null, [], [], null);

    document.getElementById('combat-log').innerHTML = '';
    document.getElementById('victory-modal').classList.add('hidden');
    document.getElementById('duel-overlay').classList.add('hidden');

    soundEngine.playWarhorn();

    const fw = FACTIONS[this.engine.factions.w];
    const fb = FACTIONS[this.engine.factions.b];
    this.logMessage(`⚜️ BATTLE JOINED: ${fw.name} (${fw.subname}) vs. ${fb.name} (${fb.subname})!`, 'strat');
    this.logMessage(`💡 Select any friendly miniature to view legal moves and initiate 3D combat.`, 'normal');

    // Inspect White King by default
    const wKing = this.engine.findKing('w');
    if (wKing) this.renderUnitDataslate(wKing.piece);

    this.updateHUD();
    this.checkAndTriggerAITurn();
  }

  isHumanTurn() {
    if (this.engine.gameOver) return false;
    if (this.opponentMode === 'ai_vs_ai') return false;
    if (this.opponentMode === 'pvp') return true;
    return this.engine.turn === 'w';
  }

  handleSquareHover(r, c) {
    if (r === null || c === null) {
      if (this.selectedSquare) {
        const selPiece = this.engine.getPiece(this.selectedSquare.r, this.selectedSquare.c);
        if (selPiece) this.renderUnitDataslate(selPiece);
      }
      return;
    }
    const p = this.engine.getPiece(r, c);
    if (p) {
      this.renderUnitDataslate(p);
    }
  }

  async handleSquareClick(r, c) {
    if (this.arena.isAnimating || !this.isHumanTurn()) return;

    // 1. Check if executing a targeted Stratagem ('heal' or 'orbital')
    if (this.pendingStratagem === 'heal') {
      const res = this.engine.useHealStratagem(r, c);
      if (res) {
        this.pendingStratagem = null;
        this.refreshBoardHighlights();
        await this.arena.animateStratagemEffect('heal', r, c, false);
        const worldPos = this.arena.boardToWorld(r, c).add(new THREE.Vector3(0, 1.1, 0));
        this.spawnFloatingDamage(worldPos, `+${res.healedAmount} HP`, '#22ff88');
        this.logMessage(`💉 ${res.pieceName} healed for +${res.healedAmount} Wounds (${res.newHp}/${res.maxHp} HP).`, 'strat');
        this.arena.syncBoardPieces(this.engine);
        this.updateHUD();
        return;
      }
    } else if (this.pendingStratagem === 'orbital') {
      const targetPiece = this.engine.getPiece(r, c);
      const res = this.engine.useOrbitalStratagem(r, c);
      if (res) {
        this.pendingStratagem = null;
        this.refreshBoardHighlights();
        await this.arena.animateStratagemEffect('orbital', r, c, res.killed, targetPiece?.faction);
        const worldPos = this.arena.boardToWorld(r, c).add(new THREE.Vector3(0, 1.1, 0));
        this.spawnFloatingDamage(worldPos, `ORBITAL -${res.damage} HP!`, '#00ffff');
        this.logMessage(
          `☄️ Orbital Strike hit ${res.pieceName} for ${res.damage} DMG! ${res.killed ? 'TARGET VAPORIZED!' : `(${res.remainingHp} HP left)`}`,
          res.killed ? 'kill' : 'strat'
        );
        this.arena.syncBoardPieces(this.engine);
        this.updateHUD();
        if (this.engine.gameOver) {
          this.showVictoryModal();
        }
        return;
      }
    }

    // 2. Check if clicked square is a legal move for currently selected unit
    if (this.selectedSquare) {
      const move = this.legalMoves.find((m) => m.toR === r && m.toC === c);
      if (move) {
        this.selectedSquare = null;
        this.legalMoves = [];
        this.arena.setHighlights(null, [], [], this.lastMoveResult);

        // Check if Pawn promotion choice is needed
        const movingPiece = this.engine.getPiece(move.fromR, move.fromC);
        const promoRow = movingPiece.side === 'w' ? 0 : 7;
        let promoType = 'q';
        if (movingPiece.type === 'p' && move.toR === promoRow) {
          // If non-attack or classic attack or lethal wargame attack, ask promotion rank
          promoType = await this.promptPromotionChoice(movingPiece.side);
        }

        await this.executeAndAnimateMove(move, promoType);
        return;
      }
    }

    // 3. Select a friendly unit
    const clickedPiece = this.engine.getPiece(r, c);
    if (clickedPiece && clickedPiece.side === this.engine.turn) {
      this.pendingStratagem = null;
      this.selectedSquare = { r, c };
      this.legalMoves = this.engine.getLegalMoves(r, c);
      this.renderUnitDataslate(clickedPiece);
      this.refreshBoardHighlights();
      soundEngine.playStep(false);
    } else {
      this.selectedSquare = null;
      this.legalMoves = [];
      if (clickedPiece) this.renderUnitDataslate(clickedPiece);
      this.refreshBoardHighlights();
    }
  }

  refreshBoardHighlights() {
    const stratSquares = [];
    if (this.pendingStratagem === 'heal') {
      const units = this.engine.getAllPieces(this.engine.turn);
      units.forEach((u) => {
        if (u.hp < u.maxHp) {
          stratSquares.push({ r: u.r, c: u.c, color: 0x22ff88 });
        }
      });
    } else if (this.pendingStratagem === 'orbital') {
      const enemySide = this.engine.turn === 'w' ? 'b' : 'w';
      const enemies = this.engine.getAllPieces(enemySide);
      enemies.forEach((u) => {
        if (u.type !== 'k') {
          stratSquares.push({ r: u.r, c: u.c, color: 0x00ffff });
        }
      });
    }

    this.arena.setHighlights(this.selectedSquare, this.legalMoves, stratSquares, this.lastMoveResult);
  }

  promptPromotionChoice(side) {
    return new Promise((resolve) => {
      const modal = document.getElementById('promotion-modal');
      const f = FACTIONS[this.engine.factions[side]];
      const buttons = modal.querySelectorAll('.promo-btn');
      buttons.forEach((btn) => {
        const t = btn.dataset.type;
        btn.textContent = `${f.units[t].name} (${t.toUpperCase()})`;
        btn.onclick = () => {
          modal.classList.add('hidden');
          resolve(t);
        };
      });
      modal.classList.remove('hidden');
    });
  }

  async executeAndAnimateMove(move, promoType = 'q') {
    const res = this.engine.executeMove(move, promoType);
    if (!res) return;
    this.lastMoveResult = res;

    if (!res.isAttack) {
      // Standard Move or Castling
      const coord = this.formatSquare(res.toR, res.toC);
      this.logMessage(
        `🥾 <strong>${res.attackerSnapshot.name}</strong> advances to <strong>${coord}</strong>${res.isCastle ? ' (Castled)' : ''}.`,
        'normal'
      );
      await this.arena.animateMove(res, this.engine);
    } else {
      // 3D CHOREOGRAPHED COMBAT DUEL!
      this.showDuelOverlay(res);
      await this.arena.animateCombat(res, this.engine, {
        onPhaseText: (txt) => {
          document.getElementById('duel-phase-text').textContent = txt;
        },
        onDamagePopup: (worldPos, text, color) => {
          this.spawnFloatingDamage(worldPos, text, color);
          this.updateDuelOverlayLiveHP(res);
        }
      });
      this.hideDuelOverlay();
      this.logCombatOutcome(res);
    }

    if (res.promotedTo) {
      this.logMessage(`👑 ASCENSION! Promoted to <strong>${res.promotedTo.name}</strong>!`, 'kill');
    }

    this.arena.setHighlights(null, [], [], this.lastMoveResult);
    this.updateHUD();

    if (this.engine.gameOver) {
      soundEngine.playWarhorn();
      this.showVictoryModal();
      return;
    }

    await this.checkAndTriggerAITurn();
  }

  showDuelOverlay(res) {
    const overlay = document.getElementById('duel-overlay');
    const atk = res.attackerSnapshot;
    const def = res.defenderSnapshot;
    const atkUnit = FACTIONS[atk.faction].units[atk.type];
    const defUnit = FACTIONS[def.faction].units[def.type];
    const combat = res.combat;

    document.getElementById('duel-atk-name').textContent = atk.name;
    document.getElementById('duel-atk-weapon').textContent = atkUnit.weapon;
    document.getElementById('duel-atk-hp-bar').style.width = `${(atk.hp / atk.maxHp) * 100}%`;
    document.getElementById('duel-atk-hp-text').textContent = `${atk.hp} / ${atk.maxHp} HP`;

    const diceStr = combat.diceRolls.map((d) => `[${d}]`).join(' ');
    document.getElementById('duel-atk-dice').textContent = `🎲 ${diceStr} + ${atk.atkBase}${combat.overcharged ? ' ⚡+5' : ''}`;

    document.getElementById('duel-def-name').textContent = def.name;
    document.getElementById('duel-def-weapon').textContent = defUnit.weapon;
    document.getElementById('duel-def-hp-bar').style.width = `${(def.hp / def.maxHp) * 100}%`;
    document.getElementById('duel-def-hp-text').textContent = `${def.hp} / ${def.maxHp} HP`;
    document.getElementById('duel-def-armor').textContent = `🛡️ Armor ${def.armor}`;

    document.getElementById('duel-phase-text').textContent = `${atk.name} charges ${def.name}!`;
    overlay.classList.remove('hidden');
  }

  updateDuelOverlayLiveHP(res) {
    const atk = res.attackerSnapshot;
    const def = res.defenderSnapshot;
    const combat = res.combat;

    const defPct = Math.max(0, (combat.defenderRemainingHp / def.maxHp) * 100);
    document.getElementById('duel-def-hp-bar').style.width = `${defPct}%`;
    document.getElementById('duel-def-hp-text').textContent = `${combat.defenderRemainingHp} / ${def.maxHp} HP`;

    const atkPct = Math.max(0, (combat.attackerRemainingHp / atk.maxHp) * 100);
    document.getElementById('duel-atk-hp-bar').style.width = `${atkPct}%`;
    document.getElementById('duel-atk-hp-text').textContent = `${combat.attackerRemainingHp} / ${atk.maxHp} HP`;
  }

  hideDuelOverlay() {
    document.getElementById('duel-overlay').classList.add('hidden');
  }

  logCombatOutcome(res) {
    const atk = res.attackerSnapshot;
    const def = res.defenderSnapshot;
    const c = res.combat;
    const finName = FACTIONS[atk.faction].units[atk.type].finisherName;

    if (!c.defenderSurvived) {
      this.logMessage(
        `💀 <strong>${atk.name}</strong> executed <strong>${def.name}</strong> with <em>${finName}</em> (-${c.damageDealt} DMG)!`,
        'kill'
      );
    } else {
      let msg = `⚔️ <strong>${atk.name}</strong> dealt <strong>${c.damageDealt} DMG</strong> to <strong>${def.name}</strong> (${c.defenderRemainingHp}/${def.maxHp} HP left).`;
      if (c.counterAttack) {
        msg += ` 🛡️ Counter-attack dealt <strong>${c.counterAttack.damage} DMG</strong> back!`;
      }
      if (c.attackerDiedInCounter) {
        msg += ` 💀 <strong>${atk.name}</strong> was slain in counter-combat!`;
      }
      this.logMessage(msg, 'combat');
    }
  }

  async checkAndTriggerAITurn() {
    if (this.engine.gameOver || this.arena.isAnimating) return;

    const shouldRunAI =
      this.opponentMode === 'ai_vs_ai' ||
      (this.opponentMode.startsWith('ai_') && this.engine.turn === 'b');

    if (!shouldRunAI) return;

    const diff =
      this.opponentMode === 'ai_easy'
        ? 'easy'
        : this.opponentMode === 'ai_hard'
        ? 'hard'
        : 'medium';

    await new Promise((r) => setTimeout(r, 380));
    if (this.engine.gameOver) return;

    const decision = this.engine.chooseAIMove(diff);
    if (!decision || !decision.move) return;

    if (decision.aiStratagemEvent) {
      const ev = decision.aiStratagemEvent;
      if (ev.type === 'heal') {
        const d = ev.data;
        await this.arena.animateStratagemEffect('heal', d.r, d.c, false);
        this.logMessage(`🤖 AI used Repair Stratagem on <strong>${d.pieceName}</strong> (+${d.healedAmount} HP)!`, 'strat');
      } else if (ev.type === 'overcharge') {
        this.logMessage(`🤖 AI activated Overcharge Weapons Stratagem (+5 DMG)!`, 'strat');
      }
      this.updateHUD();
    }

    await this.executeAndAnimateMove(decision.move, 'q');
  }

  updateHUD() {
    const turnSide = this.engine.turn;
    const fKey = this.engine.factions[turnSide];
    const faction = FACTIONS[fKey];

    document.getElementById('turn-icon').textContent = faction.icon;
    document.getElementById('turn-number-label').textContent = `TURN ${this.engine.turnNumber} • ${
      turnSide === 'w' ? 'SOUTH COMMAND' : 'NORTH COMMAND'
    }`;
    document.getElementById('turn-faction-name').textContent = faction.name;
    document.getElementById('turn-motto').textContent = `"${faction.motto}"`;
    document.getElementById('cp-value').textContent = `⚡ ${this.engine.cp[turnSide]} / 6`;

    // Check / Warlord Threat Warning
    const inCheck = this.engine.isInCheck(turnSide);
    document.getElementById('check-warning').classList.toggle('hidden', !inCheck);

    // Update Stratagems names & states
    const strats = faction.stratagems;
    document.getElementById('strat-overcharge-name').textContent = strats.overcharge.name;
    document.getElementById('strat-heal-name').textContent = strats.heal.name;
    document.getElementById('strat-orbital-name').textContent = strats.orbital.name;

    const cp = this.engine.cp[turnSide];
    const isHuman = this.isHumanTurn();
    const overcharged = this.engine.activeBuffs[turnSide].overcharge;

    const btnOver = document.getElementById('btn-strat-overcharge');
    const btnHeal = document.getElementById('btn-strat-heal');
    const btnOrb = document.getElementById('btn-strat-orbital');

    btnOver.disabled = !isHuman || cp < 1 || overcharged;
    btnOver.classList.toggle('active', overcharged);

    btnHeal.disabled = !isHuman || cp < 2;
    btnHeal.classList.toggle('active', this.pendingStratagem === 'heal');

    btnOrb.disabled = !isHuman || cp < 3;
    btnOrb.classList.toggle('active', this.pendingStratagem === 'orbital');

    const statusTag = document.getElementById('stratagem-status-tag');
    if (this.pendingStratagem === 'heal') {
      statusTag.textContent = 'SELECT FRIENDLY UNIT';
    } else if (this.pendingStratagem === 'orbital') {
      statusTag.textContent = 'SELECT ENEMY TARGET';
    } else if (overcharged) {
      statusTag.textContent = 'OVERCHARGED!';
    } else {
      statusTag.textContent = `${cp} CP READY`;
    }
  }

  renderUnitDataslate(piece) {
    if (!piece) return;
    this.inspectedPiece = piece;
    const f = FACTIONS[piece.faction];
    const u = f.units[piece.type];

    document.getElementById('unit-role-badge').textContent = ROLE_LABELS[piece.type].toUpperCase();
    const hpPct = Math.max(0, Math.round((piece.hp / piece.maxHp) * 100));

    const container = document.getElementById('unit-inspector-content');
    container.innerHTML = `
      <div class="unit-title-block">
        <h3>${f.icon} ${piece.name}</h3>
        <div class="unit-subtitle">${u.title} • ${f.name}</div>
      </div>

      <div>
        <div style="display:flex; justify-content:space-between; font-size:12px; font-weight:700;">
          <span>WOUNDS (HP)</span>
          <span>${this.engine.mode === 'classic' ? '1-HIT LETHAL (CLASSIC)' : `${piece.hp} / ${piece.maxHp} HP`}</span>
        </div>
        <div class="hp-bar-outer">
          <div class="hp-bar-inner" style="width: ${hpPct}%"></div>
        </div>
      </div>

      <div class="stat-grid">
        <div class="stat-box">
          <span>ATTACK ROLL</span>
          <strong>🎲 ${piece.atkDice}D6 + ${piece.atkBase}</strong>
        </div>
        <div class="stat-box">
          <span>ARMOR SAVE</span>
          <strong>🛡️ ${piece.armor} ${piece.armorPierce ? `(AP -${piece.armorPierce})` : ''}</strong>
        </div>
        <div class="stat-box">
          <span>COUNTER-STRIKE</span>
          <strong>⚔️ 1D6 + ${piece.counterBase}</strong>
        </div>
        <div class="stat-box">
          <span>FINISHER</span>
          <strong>💀 ${u.finisherName}</strong>
        </div>
      </div>

      <div class="stat-box">
        <span>ARMAMENT</span>
        <strong style="color:#fff; font-size:12px;">${u.weapon}</strong>
      </div>

      <p class="unit-lore">"${u.lore}"</p>
    `;
  }

  spawnFloatingDamage(worldPos, text, color = '#ff3333') {
    const screen = this.arena.projectToScreen(worldPos);
    if (!screen.visible) return;

    const el = document.createElement('div');
    el.className = 'floating-dmg';
    el.style.left = `${screen.x}px`;
    el.style.top = `${screen.y}px`;
    el.style.color = color;
    el.textContent = text;
    this.worldUiLayer.appendChild(el);

    setTimeout(() => {
      el.remove();
    }, 1250);
  }

  startWorldUILoop() {
    const updateLabels = () => {
      requestAnimationFrame(updateLabels);

      if (this.engine.mode !== 'wargame') {
        for (const el of this.hpBarElements.values()) {
          el.style.opacity = '0';
        }
        return;
      }

      const activeIds = new Set();
      for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
          const p = this.engine.board[r][c];
          if (!p) continue;
          activeIds.add(p.id);

          let el = this.hpBarElements.get(p.id);
          if (!el) {
            el = document.createElement('div');
            el.className = 'world-hp-tag';
            el.innerHTML = `<div class="world-hp-num"></div><div class="world-hp-fill"></div>`;
            this.worldUiLayer.appendChild(el);
            this.hpBarElements.set(p.id, el);
          }

          const mesh = this.arena.unitMeshes.get(p.id);
          if (!mesh) continue;

          // Only show floating badge if unit is damaged, King, or hovered/selected
          const isDamaged = p.hp < p.maxHp;
          const isKing = p.type === 'k';
          const isSelected =
            this.selectedSquare && this.selectedSquare.r === r && this.selectedSquare.c === c;

          if (!isDamaged && !isKing && !isSelected) {
            el.style.opacity = '0';
            continue;
          }

          const headWorld = mesh.position.clone().add(new THREE.Vector3(0, 1.15, 0));
          const screen = this.arena.projectToScreen(headWorld);
          if (!screen.visible) {
            el.style.opacity = '0';
            continue;
          }

          el.style.opacity = '1';
          el.style.left = `${screen.x}px`;
          el.style.top = `${screen.y}px`;

          const pct = Math.max(0, Math.round((p.hp / p.maxHp) * 100));
          const fill = el.querySelector('.world-hp-fill');
          const num = el.querySelector('.world-hp-num');
          num.textContent = `${p.hp}/${p.maxHp}`;
          fill.style.width = `${pct}%`;
          fill.style.background =
            pct > 60 ? '#22ee88' : pct > 30 ? '#ffbb00' : '#ff2233';
        }
      }

      for (const [id, el] of this.hpBarElements.entries()) {
        if (!activeIds.has(id)) {
          el.remove();
          this.hpBarElements.delete(id);
        }
      }
    };
    requestAnimationFrame(updateLabels);
  }

  showVictoryModal() {
    const modal = document.getElementById('victory-modal');
    const winSide = this.engine.winner;
    if (winSide === 'w' || winSide === 'b') {
      const f = FACTIONS[this.engine.factions[winSide]];
      document.getElementById('victory-icon').textContent = f.icon;
      document.getElementById('victory-title').textContent = `${f.name.toUpperCase()} TRIUMPH!`;
    } else {
      document.getElementById('victory-icon').textContent = '⚔️';
      document.getElementById('victory-title').textContent = 'GRIMDARK STALEMATE';
    }
    document.getElementById('victory-reason').textContent = this.engine.winReason;
    modal.classList.remove('hidden');
  }

  formatSquare(r, c) {
    const files = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    return `${files[c]}${8 - r}`;
  }

  logMessage(html, type = 'normal') {
    const log = document.getElementById('combat-log');
    const div = document.createElement('div');
    div.className = `log-entry ${type}`;
    div.innerHTML = html;
    log.prepend(div);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.battleChessApp = new WarhammerBattleChessApp();
});
