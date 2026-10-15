import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { UnitFactory } from './unitFactory.js';
import { FACTIONS } from '../data/factions.js';
import { soundEngine } from '../audio/soundEngine.js';

export class CombatArena {
  constructor(container, onSquareClick, onSquareHover) {
    this.container = container;
    this.onSquareClick = onSquareClick;
    this.onSquareHover = onSquareHover;

    this.unitFactory = new UnitFactory();
    this.unitMeshes = new Map(); // pieceId -> THREE.Group
    this.tileMeshes = []; // 8x8 array
    this.highlightMeshes = [];
    this.particles = [];
    this.projectiles = [];
    this.shockwaves = [];
    this.lightningBolts = [];
    this.braziers = [];

    this.isAnimating = false;
    this.skipRequested = false;
    this.autoActionCam = true;
    this.screenShake = 0;

    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.hoveredSquare = null;

    this.initScene();
    this.buildBoard();
    this.setupInteraction();
    this.animate();
  }

  initScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x090b10);
    this.scene.fog = new THREE.FogExp2(0x090b10, 0.032);

    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    this.camera.position.set(0, 8.8, 8.8);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.25;
    this.container.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.07;
    this.controls.maxPolarAngle = Math.PI / 2 - 0.06;
    this.controls.minDistance = 3.2;
    this.controls.maxDistance = 20;
    this.controls.target.set(0, 0.3, 0);

    // Grimdark Atmospheric Lighting
    const ambient = new THREE.AmbientLight(0x3a465e, 1.35);
    this.scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xfff0dd, 2.4);
    keyLight.position.set(6, 14, 8);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    keyLight.shadow.camera.near = 1;
    keyLight.shadow.camera.far = 32;
    const d = 6.5;
    keyLight.shadow.camera.left = -d;
    keyLight.shadow.camera.right = d;
    keyLight.shadow.camera.top = d;
    keyLight.shadow.camera.bottom = -d;
    keyLight.shadow.bias = -0.0005;
    this.scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x4477ff, 1.1);
    rimLight.position.set(-8, 9, -7);
    this.scene.add(rimLight);

    // Dynamic combat flash light
    this.combatLight = new THREE.PointLight(0xffaa00, 0, 7);
    this.combatLight.position.set(0, 1.5, 0);
    this.scene.add(this.combatLight);

    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  boardToWorld(r, c) {
    return new THREE.Vector3(c - 3.5, 0, r - 3.5);
  }

  buildBoard() {
    this.boardGroup = new THREE.Group();
    this.scene.add(this.boardGroup);

    // Gothic Plinth Frame
    const plinthGeo = new THREE.BoxGeometry(9.4, 0.5, 9.4);
    const plinthMat = new THREE.MeshStandardMaterial({
      color: 0x161920,
      roughness: 0.7,
      metalness: 0.45
    });
    const plinth = new THREE.Mesh(plinthGeo, plinthMat);
    plinth.position.y = -0.28;
    plinth.receiveShadow = true;
    this.boardGroup.add(plinth);

    // Brass Filigree Border
    const trimGeo = new THREE.BoxGeometry(8.5, 0.16, 8.5);
    const trimMat = new THREE.MeshStandardMaterial({
      color: 0x9c7a38,
      roughness: 0.35,
      metalness: 0.85
    });
    const trim = new THREE.Mesh(trimGeo, trimMat);
    trim.position.y = -0.06;
    trim.receiveShadow = true;
    this.boardGroup.add(trim);

    // 8x8 Sector Imperialis Tiles
    const tileGeo = new THREE.BoxGeometry(0.96, 0.1, 0.96);
    const lightTileMat = new THREE.MeshStandardMaterial({
      color: 0x4c525e,
      roughness: 0.55,
      metalness: 0.35
    });
    const darkTileMat = new THREE.MeshStandardMaterial({
      color: 0x1d212a,
      roughness: 0.65,
      metalness: 0.45
    });

    this.tileMeshes = Array.from({ length: 8 }, () => Array(8).fill(null));

    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const isLight = (r + c) % 2 === 0;
        const tile = new THREE.Mesh(tileGeo, isLight ? lightTileMat.clone() : darkTileMat.clone());
        const pos = this.boardToWorld(r, c);
        tile.position.set(pos.x, -0.05, pos.z);
        tile.receiveShadow = true;
        tile.userData = { isTile: true, r, c, baseColor: tile.material.color.clone() };
        this.boardGroup.add(tile);
        this.tileMeshes[r][c] = tile;
      }
    }

    // 4 Corner Gothic Braziers with flickering fire
    const corners = [
      [-4.4, -4.4],
      [4.4, -4.4],
      [-4.4, 4.4],
      [4.4, 4.4]
    ];

    corners.forEach(([cx, cz]) => {
      const pillar = new THREE.Mesh(
        new THREE.CylinderGeometry(0.28, 0.36, 0.9, 8),
        trimMat
      );
      pillar.position.set(cx, 0.2, cz);
      pillar.castShadow = true;
      this.boardGroup.add(pillar);

      const bowl = new THREE.Mesh(
        new THREE.CylinderGeometry(0.38, 0.2, 0.22, 10),
        plinthMat
      );
      bowl.position.set(cx, 0.72, cz);
      this.boardGroup.add(bowl);

      const fireMat = new THREE.MeshBasicMaterial({ color: 0xff6600 });
      const fireCone = new THREE.Mesh(new THREE.ConeGeometry(0.24, 0.48, 7), fireMat);
      fireCone.position.set(cx, 0.98, cz);
      this.boardGroup.add(fireCone);

      const fireLight = new THREE.PointLight(0xff5500, 1.8, 6.5);
      fireLight.position.set(cx, 1.2, cz);
      this.boardGroup.add(fireLight);

      this.braziers.push({ fireCone, fireLight, x: cx, z: cz, phase: Math.random() * 10 });
    });

    // Highlight container
    this.highlightGroup = new THREE.Group();
    this.scene.add(this.highlightGroup);
  }

  setupInteraction() {
    let pointerDownPos = { x: 0, y: 0 };

    this.renderer.domElement.addEventListener('pointerdown', (e) => {
      pointerDownPos = { x: e.clientX, y: e.clientY };
    });

    this.renderer.domElement.addEventListener('pointerup', (e) => {
      const dx = e.clientX - pointerDownPos.x;
      const dy = e.clientY - pointerDownPos.y;
      if (Math.hypot(dx, dy) > 6) return; // Ignore camera drag
      if (this.isAnimating) return;

      const hit = this.pickSquare(e);
      if (hit && this.onSquareClick) {
        this.onSquareClick(hit.r, hit.c);
      }
    });

    this.renderer.domElement.addEventListener('pointermove', (e) => {
      if (this.isAnimating) return;
      const hit = this.pickSquare(e);
      if (hit) {
        if (!this.hoveredSquare || this.hoveredSquare.r !== hit.r || this.hoveredSquare.c !== hit.c) {
          this.hoveredSquare = hit;
          this.renderer.domElement.style.cursor = 'pointer';
          if (this.onSquareHover) this.onSquareHover(hit.r, hit.c);
        }
      } else if (this.hoveredSquare) {
        this.hoveredSquare = null;
        this.renderer.domElement.style.cursor = 'default';
        if (this.onSquareHover) this.onSquareHover(null, null);
      }
    });
  }

  pickSquare(event) {
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);

    // Check units first, then tiles
    const unitRoots = Array.from(this.unitMeshes.values());
    const unitHits = this.raycaster.intersectObjects(unitRoots, true);
    if (unitHits.length > 0) {
      let obj = unitHits[0].object;
      while (obj && !obj.userData?.pieceId) {
        obj = obj.parent;
      }
      if (obj && obj.userData?.gridPos) {
        return obj.userData.gridPos;
      }
    }

    const flatTiles = this.tileMeshes.flat();
    const tileHits = this.raycaster.intersectObjects(flatTiles, false);
    if (tileHits.length > 0) {
      const { r, c } = tileHits[0].object.userData;
      return { r, c };
    }
    return null;
  }

  syncBoardPieces(engine) {
    // Remove meshes no longer on the board
    const activeIds = new Set();
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const p = engine.board[r][c];
        if (p) {
          activeIds.add(p.id);
          let mesh = this.unitMeshes.get(p.id);
          // Rebuild mesh if faction or type changed (e.g. promotion or faction swap)
          if (
            mesh &&
            (mesh.userData.type !== p.type || mesh.userData.faction !== p.faction)
          ) {
            this.scene.remove(mesh);
            this.unitMeshes.delete(p.id);
            mesh = null;
          }
          if (!mesh) {
            mesh = this.unitFactory.createUnitMesh(p);
            this.scene.add(mesh);
            this.unitMeshes.set(p.id, mesh);
          }
          const worldPos = this.boardToWorld(r, c);
          mesh.position.set(worldPos.x, 0, worldPos.z);
          mesh.rotation.set(0, mesh.userData.defaultRotY, 0);
          mesh.userData.gridPos = { r, c };
          this.updateUnitHealthRing(mesh, p, engine.mode);
        }
      }
    }

    for (const [id, mesh] of this.unitMeshes.entries()) {
      if (!activeIds.has(id)) {
        this.scene.remove(mesh);
        this.unitMeshes.delete(id);
      }
    }
  }

  updateUnitHealthRing(mesh, piece, mode) {
    const rig = mesh.userData.rig;
    if (!rig || !rig.hpRing) return;

    if (mode === 'classic') {
      rig.hpRing.material.color.setHex(piece.side === 'w' ? 0x2299ff : 0xff3333);
      rig.hpRing.scale.setScalar(1);
    } else {
      const ratio = Math.max(0, piece.hp / piece.maxHp);
      if (ratio > 0.6) {
        rig.hpRing.material.color.setHex(piece.side === 'w' ? 0x22ee88 : 0xff5533);
      } else if (ratio > 0.3) {
        rig.hpRing.material.color.setHex(0xffbb00);
      } else {
        rig.hpRing.material.color.setHex(0xff1122);
      }
    }
  }

  setHighlights(selectedSq, legalMoves = [], stratagemTargetSquares = [], lastMove = null) {
    while (this.highlightGroup.children.length > 0) {
      this.highlightGroup.remove(this.highlightGroup.children[0]);
    }

    // Last move subtle amber markers
    if (lastMove) {
      [
        { r: lastMove.fromR, c: lastMove.fromC },
        { r: lastMove.finalAttackerR, c: lastMove.finalAttackerC }
      ].forEach((sq) => {
        if (sq.r === undefined) return;
        const pos = this.boardToWorld(sq.r, sq.c);
        const marker = new THREE.Mesh(
          new THREE.PlaneGeometry(0.9, 0.9),
          new THREE.MeshBasicMaterial({
            color: 0xd4af37,
            transparent: true,
            opacity: 0.18,
            side: THREE.DoubleSide
          })
        );
        marker.rotation.x = -Math.PI / 2;
        marker.position.set(pos.x, 0.01, pos.z);
        this.highlightGroup.add(marker);
      });
    }

    // Selected square
    if (selectedSq) {
      const pos = this.boardToWorld(selectedSq.r, selectedSq.c);
      const selPlane = new THREE.Mesh(
        new THREE.PlaneGeometry(0.92, 0.92),
        new THREE.MeshBasicMaterial({
          color: 0x00d2ff,
          transparent: true,
          opacity: 0.38,
          side: THREE.DoubleSide
        })
      );
      selPlane.rotation.x = -Math.PI / 2;
      selPlane.position.set(pos.x, 0.015, pos.z);
      this.highlightGroup.add(selPlane);
    }

    // Legal moves
    legalMoves.forEach((m) => {
      const pos = this.boardToWorld(m.toR, m.toC);
      if (m.isAttack) {
        // Pulsing Crimson Target Crosshair
        const ring = new THREE.Mesh(
          new THREE.RingGeometry(0.34, 0.46, 24),
          new THREE.MeshBasicMaterial({
            color: 0xff2222,
            transparent: true,
            opacity: 0.85,
            side: THREE.DoubleSide
          })
        );
        ring.rotation.x = -Math.PI / 2;
        ring.position.set(pos.x, 0.025, pos.z);
        this.highlightGroup.add(ring);

        const inner = new THREE.Mesh(
          new THREE.PlaneGeometry(0.88, 0.88),
          new THREE.MeshBasicMaterial({
            color: 0xff1111,
            transparent: true,
            opacity: 0.25,
            side: THREE.DoubleSide
          })
        );
        inner.rotation.x = -Math.PI / 2;
        inner.position.set(pos.x, 0.014, pos.z);
        this.highlightGroup.add(inner);
      } else {
        // Tactical Move Beacon
        const dot = new THREE.Mesh(
          new THREE.CircleGeometry(0.18, 20),
          new THREE.MeshBasicMaterial({
            color: 0x22ff88,
            transparent: true,
            opacity: 0.75,
            side: THREE.DoubleSide
          })
        );
        dot.rotation.x = -Math.PI / 2;
        dot.position.set(pos.x, 0.02, pos.z);
        this.highlightGroup.add(dot);
      }
    });

    // Stratagem target squares
    stratagemTargetSquares.forEach((sq) => {
      const pos = this.boardToWorld(sq.r, sq.c);
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(0.32, 0.45, 24),
        new THREE.MeshBasicMaterial({
          color: sq.color || 0xffcc00,
          transparent: true,
          opacity: 0.9,
          side: THREE.DoubleSide
        })
      );
      ring.rotation.x = -Math.PI / 2;
      ring.position.set(pos.x, 0.03, pos.z);
      this.highlightGroup.add(ring);
    });
  }

  setCameraPreset(preset) {
    if (preset === 'white') {
      this.tweenCamera(new THREE.Vector3(0, 8.5, 8.8), new THREE.Vector3(0, 0.2, 0), 650);
    } else if (preset === 'black') {
      this.tweenCamera(new THREE.Vector3(0, 8.5, -8.8), new THREE.Vector3(0, 0.2, 0), 650);
    } else if (preset === 'top') {
      this.tweenCamera(new THREE.Vector3(0, 13.5, 0.01), new THREE.Vector3(0, 0, 0), 650);
    } else if (preset === 'cinematic') {
      this.tweenCamera(new THREE.Vector3(6.8, 5.8, 6.8), new THREE.Vector3(0, 0.4, 0), 650);
    }
  }

  tweenCamera(targetPos, targetLookAt, duration = 600) {
    const startPos = this.camera.position.clone();
    const startLook = this.controls.target.clone();
    const startTime = performance.now();

    return new Promise((resolve) => {
      const step = (now) => {
        const t = Math.min(1, (now - startTime) / duration);
        const ease = 1 - Math.pow(1 - t, 3);
        this.camera.position.lerpVectors(startPos, targetPos, ease);
        this.controls.target.lerpVectors(startLook, targetLookAt, ease);
        this.controls.update();
        if (t < 1 && !this.skipRequested) {
          requestAnimationFrame(step);
        } else {
          resolve();
        }
      };
      requestAnimationFrame(step);
    });
  }

  sleep(ms) {
    if (this.skipRequested) return Promise.resolve();
    return new Promise((resolve) => {
      const start = performance.now();
      const check = (now) => {
        if (this.skipRequested || now - start >= ms) {
          resolve();
        } else {
          requestAnimationFrame(check);
        }
      };
      requestAnimationFrame(check);
    });
  }

  skipCurrentAnimation() {
    if (this.isAnimating) {
      this.skipRequested = true;
    }
  }

  // Particle & Visual FX Spawners
  spawnSparks(pos, colorHex = 0xffaa00, count = 18, speed = 3.5, size = 0.045) {
    const geo = new THREE.BoxGeometry(size, size, size);
    for (let i = 0; i < count; i++) {
      const mat = new THREE.MeshBasicMaterial({ color: colorHex, transparent: true, opacity: 1 });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.copy(pos);
      const vel = new THREE.Vector3(
        (Math.random() - 0.5) * speed,
        Math.random() * speed * 0.9 + 0.8,
        (Math.random() - 0.5) * speed
      );
      this.scene.add(mesh);
      this.particles.push({
        mesh,
        vel,
        gravity: 9.5,
        life: 0.45 + Math.random() * 0.35,
        maxLife: 0.8,
        spin: new THREE.Vector3(Math.random() * 8, Math.random() * 8, Math.random() * 8)
      });
    }
  }

  spawnShatterExplosion(pos, factionKey) {
    soundEngine.playExplosion();
    this.screenShake = 0.28;
    const f = FACTIONS[factionKey];
    const colors = [
      new THREE.Color(f.themeColor),
      new THREE.Color(f.accentColor),
      new THREE.Color(f.glowColor),
      new THREE.Color(0xff5500)
    ];

    // 28 Armor chunks + glowing debris
    for (let i = 0; i < 28; i++) {
      const s = 0.05 + Math.random() * 0.09;
      const geo = new THREE.DodecahedronGeometry(s, 0);
      const col = colors[i % colors.length];
      const mat = new THREE.MeshStandardMaterial({
        color: col,
        emissive: col,
        emissiveIntensity: i % 3 === 0 ? 1.8 : 0.2,
        roughness: 0.4,
        metalness: 0.7,
        transparent: true,
        opacity: 1
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.copy(pos).add(new THREE.Vector3(0, 0.35, 0));

      const angle = Math.random() * Math.PI * 2;
      const spd = 1.5 + Math.random() * 4.2;
      const vel = new THREE.Vector3(
        Math.cos(angle) * spd,
        2.2 + Math.random() * 4.0,
        Math.sin(angle) * spd
      );
      this.scene.add(mesh);
      this.particles.push({
        mesh,
        vel,
        gravity: 11.0,
        bounceFloor: true,
        life: 1.1 + Math.random() * 0.5,
        maxLife: 1.6,
        spin: new THREE.Vector3(Math.random() * 12, Math.random() * 12, Math.random() * 12)
      });
    }

    this.spawnShockwave(pos, f.glowColor, 1.8);
  }

  spawnShockwave(pos, colorStr = '#ffaa00', maxRadius = 1.4) {
    const geo = new THREE.RingGeometry(0.1, 0.22, 32);
    geo.rotateX(-Math.PI / 2);
    const mat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(colorStr),
      transparent: true,
      opacity: 0.9,
      side: THREE.DoubleSide
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(pos.x, 0.04, pos.z);
    this.scene.add(mesh);
    this.shockwaves.push({ mesh, age: 0, duration: 0.45, maxRadius });
  }

  spawnLightningArc(startPos, endPos, colorHex = 0x00d2ff, duration = 0.28) {
    const segments = 10;
    const points = [];
    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const pt = new THREE.Vector3().lerpVectors(startPos, endPos, t);
      if (i > 0 && i < segments) {
        pt.x += (Math.random() - 0.5) * 0.28;
        pt.y += (Math.random() - 0.5) * 0.28;
        pt.z += (Math.random() - 0.5) * 0.28;
      }
      points.push(pt);
    }
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    const mat = new THREE.LineBasicMaterial({ color: colorHex, linewidth: 3 });
    const line = new THREE.Line(geo, mat);
    this.scene.add(line);
    this.lightningBolts.push({ line, life: duration });
  }

  /**
   * Animates a non-combat move or castling
   */
  async animateMove(moveResult, engine) {
    this.isAnimating = true;
    this.skipRequested = false;

    const mesh = this.unitMeshes.get(moveResult.attackerId);
    if (!mesh) {
      this.isAnimating = false;
      return;
    }

    const startWorld = this.boardToWorld(moveResult.fromR, moveResult.fromC);
    const endWorld = this.boardToWorld(moveResult.toR, moveResult.toC);
    const isJump = moveResult.attackerSnapshot.type === 'n';

    await this.moveUnitAlongPath(mesh, startWorld, endWorld, isJump ? 480 : 380, isJump);

    // Handle Castling Rook animation
    if (moveResult.rookMove) {
      const rookMesh = this.unitMeshes.get(moveResult.rookMove.rookId);
      if (rookMesh) {
        const rStart = this.boardToWorld(moveResult.rookMove.fromR, moveResult.rookMove.fromC);
        const rEnd = this.boardToWorld(moveResult.rookMove.toR, moveResult.rookMove.toC);
        await this.moveUnitAlongPath(rookMesh, rStart, rEnd, 300, false);
      }
    }

    this.syncBoardPieces(engine);
    this.isAnimating = false;
  }

  async moveUnitAlongPath(mesh, startPos, endPos, duration = 420, isJumpPack = false) {
    if (this.skipRequested) {
      mesh.position.copy(endPos);
      return;
    }

    const rig = mesh.userData.rig;
    const dx = endPos.x - startPos.x;
    const dz = endPos.z - startPos.z;
    const targetAngle = Math.atan2(dx, dz) + Math.PI;
    mesh.rotation.y = targetAngle;

    if (isJumpPack) {
      soundEngine.playJumpPack();
    } else {
      soundEngine.playStep(mesh.userData.type === 'r');
    }

    const startTime = performance.now();
    await new Promise((resolve) => {
      const tick = (now) => {
        const t = Math.min(1, (now - startTime) / duration);
        const ease = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

        mesh.position.lerpVectors(startPos, endPos, ease);

        if (isJumpPack) {
          // High parabolic rocket/jump-pack arc!
          const jumpHeight = Math.sin(t * Math.PI) * 1.65;
          mesh.position.y = jumpHeight;
          if (rig) {
            rig.bodyPivot.rotation.x = Math.sin(t * Math.PI) * 0.35;
          }
          if (Math.random() < 0.55) {
            this.spawnSparks(
              mesh.position.clone().add(new THREE.Vector3(0, 0.2, 0)),
              0xff7700,
              2,
              1.2,
              0.035
            );
          }
        } else if (rig) {
          // Articulated walk stride!
          const stride = Math.sin(t * Math.PI * 4) * 0.55;
          rig.leftLeg.rotation.x = stride;
          rig.rightLeg.rotation.x = -stride;
          rig.leftArm.rotation.x = -stride * 0.5;
          rig.rightArm.rotation.x = stride * 0.5;
          rig.bodyPivot.position.y = rig.baseY + Math.abs(Math.sin(t * Math.PI * 4)) * 0.05;
        }

        if (t < 1 && !this.skipRequested) {
          requestAnimationFrame(tick);
        } else {
          mesh.position.copy(endPos);
          mesh.position.y = 0;
          if (rig) {
            rig.leftLeg.rotation.set(0, 0, 0);
            rig.rightLeg.rotation.set(0, 0, 0);
            rig.leftArm.rotation.set(0, 0, 0);
            rig.rightArm.rotation.set(0, 0, 0);
            rig.bodyPivot.rotation.set(0, 0, 0);
            rig.bodyPivot.position.y = rig.baseY;
          }
          resolve();
        }
      };
      requestAnimationFrame(tick);
    });
  }

  /**
   * FULL 3D CHOREOGRAPHED BATTLE BETWEEN TWO PIECES!
   * Includes:
   * 1. Action Camera Swoop
   * 2. Charge / Jump-Pack Leap into combat range
   * 3. Ranged Weapon Salvo / Psychic Warp-Lightning Blast
   * 4. Melee Chainsword / Power Sword / Dreadnought Fist Clash
   * 5. Defender Counter-Attack (if surviving in Wargame mode) OR Role-Specific Brutal 3D Execution Finisher & Shatter!
   */
  async animateCombat(moveResult, engine, uiCallbacks = {}) {
    this.isAnimating = true;
    this.skipRequested = false;

    const atkMesh = this.unitMeshes.get(moveResult.attackerId);
    const defMesh = this.unitMeshes.get(moveResult.defenderId);

    if (!atkMesh || !defMesh) {
      this.syncBoardPieces(engine);
      this.isAnimating = false;
      return;
    }

    const atkRig = atkMesh.userData.rig;
    const defRig = defMesh.userData.rig;
    const atkPiece = moveResult.attackerSnapshot;
    const defPiece = moveResult.defenderSnapshot;
    const atkFaction = FACTIONS[atkPiece.faction];
    const defFaction = FACTIONS[defPiece.faction];
    const combat = moveResult.combat;

    const startWorld = this.boardToWorld(moveResult.fromR, moveResult.fromC);
    const targetWorld = defMesh.position.clone();

    // Calculate melee clash point (0.68 units in front of the defender)
    const dirVec = new THREE.Vector3().subVectors(targetWorld, startWorld);
    const totalDist = dirVec.length();
    dirVec.normalize();

    const isRangedPsyker = atkPiece.type === 'b' && totalDist > 1.8 && combat.defenderSurvived;
    const clashPos = isRangedPsyker
      ? startWorld.clone().addScaledVector(dirVec, 0.45)
      : targetWorld.clone().addScaledVector(dirVec, -0.68);

    // Orient both pieces to face each other directly
    const atkFaceAngle = Math.atan2(-dirVec.x, -dirVec.z);
    const defFaceAngle = Math.atan2(dirVec.x, dirVec.z);
    atkMesh.rotation.y = atkFaceAngle;
    defMesh.rotation.y = defFaceAngle;

    // Save camera state & swoop into Action Duel Cam
    const savedCamPos = this.camera.position.clone();
    const savedCamTarget = this.controls.target.clone();

    if (this.autoActionCam) {
      const midPoint = new THREE.Vector3().lerpVectors(clashPos, targetWorld, 0.5);
      midPoint.y = 0.55;
      // Perpendicular side-angle for dramatic duel framing
      const perp = new THREE.Vector3(-dirVec.z, 0, dirVec.x).normalize();
      const camOffset = perp.multiplyScalar(2.65).add(new THREE.Vector3(0, 1.95, 0)).addScaledVector(dirVec, -0.8);
      const duelCamPos = midPoint.clone().add(camOffset);
      // Clamp inside arena bounds
      duelCamPos.x = Math.max(-7, Math.min(7, duelCamPos.x));
      duelCamPos.z = Math.max(-7, Math.min(7, duelCamPos.z));
      await this.tweenCamera(duelCamPos, midPoint, 480);
    }

    // 1. CHARGE / JUMP-PACK LEAP TO CLASH POINT
    const isJump = atkPiece.type === 'n';
    await this.moveUnitAlongPath(atkMesh, startWorld, clashPos, isJump ? 460 : 380, isJump);
    atkMesh.rotation.y = atkFaceAngle;
    defMesh.rotation.y = defFaceAngle;

    // 2. RANGED VOLLEY OR PSYCHIC WARP-LIGHTNING SALVO
    if (!this.skipRequested) {
      if (atkPiece.type === 'b') {
        // Psychic Staff Smite / Eldritch Lightning!
        if (uiCallbacks.onPhaseText) uiCallbacks.onPhaseText(`⚡ ${atkPiece.name} channels Warp Lightning!`);
        soundEngine.playPsychicBlast();

        if (atkRig) {
          atkRig.rightArm.rotation.x = -0.85;
        }
        const staffPos = new THREE.Vector3();
        if (atkRig?.muzzlePoint) {
          atkRig.muzzlePoint.getWorldPosition(staffPos);
        } else {
          staffPos.copy(atkMesh.position).add(new THREE.Vector3(0, 0.8, 0));
        }
        const chestPos = targetWorld.clone().add(new THREE.Vector3(0, 0.55, 0));

        const glowCol = new THREE.Color(atkFaction.glowColor).getHex();
        for (let i = 0; i < 4; i++) {
          this.spawnLightningArc(staffPos, chestPos, glowCol, 0.25);
          this.spawnSparks(chestPos, glowCol, 10, 2.8, 0.04);
          await this.sleep(85);
        }
      } else {
        // Bolter / Gauss / Melta / Dakka Salvo!
        if (uiCallbacks.onPhaseText) {
          uiCallbacks.onPhaseText(`🔫 ${atkPiece.name} fires opening salvo!`);
        }
        if (atkRig) {
          atkRig.leftArm.rotation.x = -0.75;
        }

        const shots = atkPiece.type === 'r' ? 4 : 3;
        const projCol = new THREE.Color(atkFaction.glowColor).getHex();

        for (let s = 0; s < shots; s++) {
          if (this.skipRequested) break;
          soundEngine.playBolterShot();

          const muzzleWorld = new THREE.Vector3();
          if (atkRig?.muzzlePoint) {
            atkRig.muzzlePoint.getWorldPosition(muzzleWorld);
          } else {
            muzzleWorld.copy(atkMesh.position).add(new THREE.Vector3(0, 0.55, 0));
          }
          const hitWorld = targetWorld.clone().add(
            new THREE.Vector3((Math.random() - 0.5) * 0.15, 0.45 + Math.random() * 0.2, (Math.random() - 0.5) * 0.15)
          );

          // Tracer beam
          this.spawnLightningArc(muzzleWorld, hitWorld, projCol, 0.09);
          this.spawnSparks(hitWorld, 0xffaa22, 8, 2.5, 0.035);

          // Defender flinches on each shot
          if (defRig) {
            defRig.torso.rotation.x = -0.22;
            setTimeout(() => {
              if (defRig) defRig.torso.rotation.x = 0;
            }, 65);
          }
          await this.sleep(95);
        }
        if (atkRig) atkRig.leftArm.rotation.x = 0;
      }
    }

    // 3. MELEE CLASH (Unless ranged psyker poking from afar)
    if (!isRangedPsyker && !this.skipRequested) {
      if (uiCallbacks.onPhaseText) {
        uiCallbacks.onPhaseText(`⚔️ Brutal Melee Clash! Rolling ${atkPiece.atkDice}D6...`);
      }
      soundEngine.playDiceRoll();
      if (atkPiece.type === 'p' || atkPiece.faction === 'orks') {
        soundEngine.playChainswordRev(0.42);
      }

      // 2 fierce melee weapon swings with parry sparks
      for (let swing = 0; swing < 2; swing++) {
        if (this.skipRequested) break;
        const dirSign = swing % 2 === 0 ? 1 : -1;

        await this.animateMeleeSwing(atkRig, defRig, targetWorld, atkFaction.glowColor, dirSign);
        soundEngine.playSwordClash();
      }
    }

    // Trigger floating damage banner on Defender
    if (uiCallbacks.onDamagePopup) {
      uiCallbacks.onDamagePopup(
        targetWorld.clone().add(new THREE.Vector3(0, 1.1, 0)),
        `-${combat.damageDealt} HP${combat.isCrit ? ' CRIT!' : ''}`,
        combat.isCrit ? '#ffcc00' : '#ff3333'
      );
    }

    // 4. OUTCOME: DEFENDER SURVIVES & COUNTER-ATTACKS OR FINISHER EXECUTION!
    if (combat.defenderSurvived) {
      // DEFENDER SURVIVES!
      this.updateUnitHealthRing(defMesh, { ...defPiece, hp: combat.defenderRemainingHp }, engine.mode);

      if (combat.counterAttack && !this.skipRequested) {
        if (uiCallbacks.onPhaseText) {
          uiCallbacks.onPhaseText(`🛡️ ${defPiece.name} survives (${combat.defenderRemainingHp} HP) & Counter-Attacks!`);
        }
        await this.sleep(220);

        // Defender lunges and strikes back!
        soundEngine.playSwordClash();
        await this.animateMeleeSwing(defRig, atkRig, clashPos, defFaction.glowColor, 1);

        if (uiCallbacks.onDamagePopup) {
          uiCallbacks.onDamagePopup(
            clashPos.clone().add(new THREE.Vector3(0, 1.1, 0)),
            `COUNTER -${combat.counterAttack.damage} HP`,
            '#ff8800'
          );
        }

        await this.sleep(260);

        if (combat.attackerDiedInCounter) {
          if (uiCallbacks.onPhaseText) {
            uiCallbacks.onPhaseText(`💀 ${atkPiece.name} was slain by ${defPiece.name}'s counter-strike!`);
          }
          this.spawnShatterExplosion(clashPos, atkPiece.faction);
          this.scene.remove(atkMesh);
          this.unitMeshes.delete(moveResult.attackerId);
          await this.sleep(450);
        } else {
          // Surviving Attacker falls back to fallback square!
          const fallbackWorld = this.boardToWorld(moveResult.finalAttackerR, moveResult.finalAttackerC);
          if (uiCallbacks.onPhaseText) {
            uiCallbacks.onPhaseText(`↩️ ${atkPiece.name} falls back to regroup (${combat.attackerRemainingHp} HP).`);
          }
          await this.moveUnitAlongPath(atkMesh, clashPos, fallbackWorld, 340, false);
        }
      }
    } else {
      // LETHAL KILL! EXECUTE ROLE-SPECIFIC 3D FINISHER!
      const finisherTitle = atkFaction.units[atkPiece.type].finisherName;
      if (uiCallbacks.onPhaseText) {
        uiCallbacks.onPhaseText(`💀 FINISHER: ${finisherTitle.toUpperCase()}!`);
      }

      await this.executeRoleFinisher(atkMesh, defMesh, atkPiece, defPiece, targetWorld);

      // Shatter Defender into 3D armor shrapnel!
      this.spawnShatterExplosion(targetWorld, defPiece.faction);
      this.scene.remove(defMesh);
      this.unitMeshes.delete(moveResult.defenderId);

      // Attacker strides onto conquered square and strikes a victory pose!
      await this.moveUnitAlongPath(atkMesh, atkMesh.position.clone(), targetWorld, 260, false);
      if (atkRig && !this.skipRequested) {
        atkRig.rightArm.rotation.x = -2.2;
        await this.sleep(320);
        atkRig.rightArm.rotation.x = 0;
      }
    }

    // Restore camera smoothly
    if (this.autoActionCam) {
      await this.tweenCamera(savedCamPos, savedCamTarget, 450);
    }

    this.syncBoardPieces(engine);
    this.isAnimating = false;
  }

  async animateMeleeSwing(attackerRig, defenderRig, defenderWorldPos, glowColorStr, dirSign = 1) {
    if (!attackerRig || this.skipRequested) return;
    const duration = 180;
    const start = performance.now();

    await new Promise((resolve) => {
      const step = (now) => {
        const t = Math.min(1, (now - start) / duration);
        const swingPhase = Math.sin(t * Math.PI);
        attackerRig.rightArm.rotation.x = -1.7 * swingPhase;
        attackerRig.rightArm.rotation.z = dirSign * 0.45 * swingPhase;
        attackerRig.torso.rotation.y = dirSign * 0.35 * swingPhase;

        if (defenderRig && t > 0.45) {
          defenderRig.torso.rotation.x = -0.28 * swingPhase;
        }

        if (t < 1 && !this.skipRequested) {
          requestAnimationFrame(step);
        } else {
          attackerRig.rightArm.rotation.set(0, 0, 0);
          attackerRig.torso.rotation.set(0, 0, 0);
          if (defenderRig) defenderRig.torso.rotation.set(0, 0, 0);
          resolve();
        }
      };
      requestAnimationFrame(step);
    });

    const sparkPos = defenderWorldPos.clone().add(new THREE.Vector3(0, 0.55, 0));
    this.spawnSparks(sparkPos, new THREE.Color(glowColorStr).getHex(), 14, 3.2, 0.045);
    this.screenShake = 0.09;
  }

  async executeRoleFinisher(atkMesh, defMesh, atkPiece, defPiece, targetWorld) {
    if (this.skipRequested) return;
    const atkRig = atkMesh.userData.rig;
    const defRig = defMesh.userData.rig;
    const atkFaction = FACTIONS[atkPiece.faction];
    const glowHex = new THREE.Color(atkFaction.glowColor).getHex();

    if (atkPiece.type === 'r') {
      // DREADNOUGHT / HELBRUTE / DEFF DREAD HYDRAULIC CRUSH!
      soundEngine.playChainswordRev(0.35);
      const start = performance.now();
      await new Promise((resolve) => {
        const step = (now) => {
          const t = Math.min(1, (now - start) / 380);
          if (t < 0.55) {
            // Wind up both massive arms high
            const w = t / 0.55;
            if (atkRig) {
              atkRig.rightArm.rotation.x = -2.2 * w;
              atkRig.leftArm.rotation.x = -1.8 * w;
              atkRig.torso.rotation.x = 0.25 * w;
            }
          } else {
            // Smash down!
            const s = (t - 0.55) / 0.45;
            if (atkRig) {
              atkRig.rightArm.rotation.x = -2.2 + 2.8 * s;
              atkRig.leftArm.rotation.x = -1.8 + 2.2 * s;
              atkRig.torso.rotation.x = 0.25 - 0.55 * s;
            }
            if (defRig) {
              defMesh.scale.y = Math.max(0.25, 1 - s * 0.7);
            }
          }
          if (t < 1 && !this.skipRequested) requestAnimationFrame(step);
          else resolve();
        };
        requestAnimationFrame(step);
      });
    } else if (atkPiece.type === 'n') {
      // JUMP PACK / STORMBOY AERIAL METEOR SLAM!
      soundEngine.playJumpPack();
      const basePos = atkMesh.position.clone();
      const start = performance.now();
      await new Promise((resolve) => {
        const step = (now) => {
          const t = Math.min(1, (now - start) / 420);
          atkMesh.position.lerpVectors(basePos, targetWorld, t);
          atkMesh.position.y = Math.sin(t * Math.PI) * 1.9;
          if (atkRig) {
            atkRig.bodyPivot.rotation.x = t * Math.PI * 2;
            atkRig.rightArm.rotation.x = -2.0;
          }
          if (t < 1 && !this.skipRequested) requestAnimationFrame(step);
          else {
            atkMesh.position.y = 0;
            if (atkRig) atkRig.bodyPivot.rotation.x = 0;
            resolve();
          }
        };
        requestAnimationFrame(step);
      });
    } else if (atkPiece.type === 'b') {
      // PSYKER / WEIRDBOY / CRYPTEK EMPYRIC LEVITATION & BRAIN-BURST!
      soundEngine.playPsychicBlast();
      const start = performance.now();
      await new Promise((resolve) => {
        const step = (now) => {
          const t = Math.min(1, (now - start) / 450);
          // Levitate and spin the helpless defender in midair!
          defMesh.position.y = t * 0.95;
          defMesh.rotation.y += 0.28;
          if (Math.random() < 0.45) {
            this.spawnLightningArc(
              atkMesh.position.clone().add(new THREE.Vector3(0, 0.85, 0)),
              defMesh.position.clone().add(new THREE.Vector3(0, 0.5, 0)),
              glowHex,
              0.12
            );
          }
          if (t < 1 && !this.skipRequested) requestAnimationFrame(step);
          else resolve();
        };
        requestAnimationFrame(step);
      });
    } else {
      // PAWN / QUEEN / KING HEROIC WHIRLWIND EXECUTION CLEAVE!
      soundEngine.playChainswordRev(0.38);
      const start = performance.now();
      await new Promise((resolve) => {
        const step = (now) => {
          const t = Math.min(1, (now - start) / 360);
          if (atkRig) {
            atkRig.bodyPivot.rotation.y = t * Math.PI * 2;
            atkRig.rightArm.rotation.x = -1.6;
            atkRig.rightArm.rotation.z = 0.8;
          }
          if (t < 1 && !this.skipRequested) requestAnimationFrame(step);
          else {
            if (atkRig) {
              atkRig.bodyPivot.rotation.y = 0;
              atkRig.rightArm.rotation.set(0, 0, 0);
            }
            resolve();
          }
        };
        requestAnimationFrame(step);
      });
    }
  }

  /**
   * Animates Orbital Bombardment / Healing Stratagem effects in 3D
   */
  async animateStratagemEffect(type, r, c, killed = false, factionKey = 'ultramarines') {
    const pos = this.boardToWorld(r, c);
    if (type === 'heal') {
      soundEngine.playPsychicBlast();
      this.spawnShockwave(pos, '#22ff88', 1.2);
      this.spawnSparks(pos.clone().add(new THREE.Vector3(0, 0.4, 0)), 0x22ff88, 24, 2.5, 0.05);
    } else if (type === 'orbital') {
      soundEngine.playExplosion();
      // Sky beam cylinder
      const beamGeo = new THREE.CylinderGeometry(0.32, 0.32, 16, 16);
      const beamMat = new THREE.MeshBasicMaterial({
        color: 0x00ffff,
        transparent: true,
        opacity: 0.85
      });
      const beam = new THREE.Mesh(beamGeo, beamMat);
      beam.position.set(pos.x, 8, pos.z);
      this.scene.add(beam);

      this.spawnShockwave(pos, '#00ffff', 2.2);
      this.spawnSparks(pos.clone().add(new THREE.Vector3(0, 0.5, 0)), 0x00ffff, 32, 4.5, 0.06);
      this.screenShake = 0.35;

      if (killed) {
        this.spawnShatterExplosion(pos, factionKey);
      }

      setTimeout(() => {
        this.scene.remove(beam);
      }, 420);
    }
  }

  projectToScreen(worldPos) {
    const vec = worldPos.clone().project(this.camera);
    return {
      x: (vec.x * 0.5 + 0.5) * window.innerWidth,
      y: (-vec.y * 0.5 + 0.5) * window.innerHeight,
      visible: vec.z < 1
    };
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    const dt = 0.016;
    const now = performance.now() * 0.001;

    // 1. Update Idle Unit Breathing & Hover
    if (!this.isAnimating) {
      for (const mesh of this.unitMeshes.values()) {
        const rig = mesh.userData.rig;
        if (rig) {
          const bob = Math.sin(now * 2.6 + rig.animPhase) * 0.018;
          rig.bodyPivot.position.y = rig.baseY + bob;
          rig.rightArm.rotation.z = Math.sin(now * 1.8 + rig.animPhase) * 0.04;
        }
      }
    }

    // 2. Flickering Corner Braziers & Embers
    this.braziers.forEach((b) => {
      const flicker = 0.88 + Math.sin(now * 11 + b.phase) * 0.15 + Math.cos(now * 19) * 0.08;
      b.fireCone.scale.set(1, flicker, 1);
      b.fireLight.intensity = 1.6 * flicker;
      if (Math.random() < 0.08) {
        this.spawnSparks(new THREE.Vector3(b.x, 1.05, b.z), 0xff6600, 1, 0.8, 0.028);
      }
    });

    // 3. Update Particles & Shrapnel
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life -= dt;
      if (p.life <= 0) {
        this.scene.remove(p.mesh);
        this.particles.splice(i, 1);
        continue;
      }
      p.vel.y -= p.gravity * dt;
      p.mesh.position.addScaledVector(p.vel, dt);
      if (p.bounceFloor && p.mesh.position.y < 0.04) {
        p.mesh.position.y = 0.04;
        p.vel.y = Math.abs(p.vel.y) * 0.42;
        p.vel.x *= 0.75;
        p.vel.z *= 0.75;
      }
      p.mesh.rotation.x += p.spin.x * dt;
      p.mesh.rotation.y += p.spin.y * dt;
      p.mesh.material.opacity = Math.min(1, p.life / (p.maxLife * 0.4));
    }

    // 4. Update Shockwaves
    for (let i = this.shockwaves.length - 1; i >= 0; i--) {
      const sw = this.shockwaves[i];
      sw.age += dt;
      const t = sw.age / sw.duration;
      if (t >= 1) {
        this.scene.remove(sw.mesh);
        this.shockwaves.splice(i, 1);
        continue;
      }
      const scale = 1 + t * sw.maxRadius * 4.5;
      sw.mesh.scale.setScalar(scale);
      sw.mesh.material.opacity = (1 - t) * 0.85;
    }

    // 5. Update Lightning Arcs
    for (let i = this.lightningBolts.length - 1; i >= 0; i--) {
      const lb = this.lightningBolts[i];
      lb.life -= dt;
      if (lb.life <= 0) {
        this.scene.remove(lb.line);
        this.lightningBolts.splice(i, 1);
      }
    }

    // 6. Screen Shake decay
    if (this.screenShake > 0.005) {
      this.camera.position.x += (Math.random() - 0.5) * this.screenShake;
      this.camera.position.y += (Math.random() - 0.5) * this.screenShake;
      this.screenShake *= 0.84;
    } else {
      this.screenShake = 0;
    }

    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }
}
