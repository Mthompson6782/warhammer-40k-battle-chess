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
    this.particles = [];
    this.shockwaves = [];
    this.lightningBolts = [];
    this.slashArcs = [];
    this.braziers = [];

    this.isAnimating = false;
    this.skipRequested = false;
    this.autoActionCam = true;
    this.screenShake = 0;
    this.duelOrbitTarget = null;
    this.duelOrbitRadius = 2.6;
    this.duelOrbitAngle = 0;
    this.duelOrbitHeight = 1.6;
    this.duelOrbitSpeed = 0;

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
    this.scene.background = new THREE.Color(0x080a0f);
    this.scene.fog = new THREE.FogExp2(0x080a0f, 0.03);

    this.camera = new THREE.PerspectiveCamera(
      44,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    this.camera.position.set(0, 8.6, 8.6);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.3;
    this.container.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.07;
    this.controls.maxPolarAngle = Math.PI / 2 - 0.05;
    this.controls.minDistance = 2.2;
    this.controls.maxDistance = 20;
    this.controls.target.set(0, 0.3, 0);

    // Grimdark Atmospheric Lighting
    this.ambientLight = new THREE.AmbientLight(0x3d4b66, 1.4);
    this.scene.add(this.ambientLight);

    this.keyLight = new THREE.DirectionalLight(0xfff2e0, 2.5);
    this.keyLight.position.set(6, 14, 8);
    this.keyLight.castShadow = true;
    this.keyLight.shadow.mapSize.width = 2048;
    this.keyLight.shadow.mapSize.height = 2048;
    this.keyLight.shadow.camera.near = 1;
    this.keyLight.shadow.camera.far = 32;
    const d = 6.5;
    this.keyLight.shadow.camera.left = -d;
    this.keyLight.shadow.camera.right = d;
    this.keyLight.shadow.camera.top = d;
    this.keyLight.shadow.camera.bottom = -d;
    this.keyLight.shadow.bias = -0.0005;
    this.scene.add(this.keyLight);

    const rimLight = new THREE.DirectionalLight(0x4488ff, 1.25);
    rimLight.position.set(-8, 9, -7);
    this.scene.add(rimLight);

    // Dynamic Duel Spotlight
    this.combatLight = new THREE.PointLight(0xffaa33, 0, 6.5);
    this.combatLight.position.set(0, 2.2, 0);
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

    // Gothic Plinth Fortress Base
    const plinthGeo = new THREE.BoxGeometry(9.5, 0.55, 9.5);
    const plinthMat = new THREE.MeshStandardMaterial({
      color: 0x151820,
      roughness: 0.68,
      metalness: 0.48
    });
    const plinth = new THREE.Mesh(plinthGeo, plinthMat);
    plinth.position.y = -0.3;
    plinth.receiveShadow = true;
    this.boardGroup.add(plinth);

    // Brass Filigree Border
    const trimGeo = new THREE.BoxGeometry(8.56, 0.16, 8.56);
    const trimMat = new THREE.MeshStandardMaterial({
      color: 0xa4803c,
      roughness: 0.32,
      metalness: 0.88
    });
    const trim = new THREE.Mesh(trimGeo, trimMat);
    trim.position.y = -0.06;
    trim.receiveShadow = true;
    this.boardGroup.add(trim);

    // 8x8 Sector Imperialis Tiles
    const tileGeo = new THREE.BoxGeometry(0.96, 0.1, 0.96);
    const lightTileMat = new THREE.MeshStandardMaterial({
      color: 0x4d5462,
      roughness: 0.52,
      metalness: 0.38
    });
    const darkTileMat = new THREE.MeshStandardMaterial({
      color: 0x1c2029,
      roughness: 0.62,
      metalness: 0.48
    });

    this.tileMeshes = Array.from({ length: 8 }, () => Array(8).fill(null));

    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const isLight = (r + c) % 2 === 0;
        const tile = new THREE.Mesh(tileGeo, isLight ? lightTileMat.clone() : darkTileMat.clone());
        const pos = this.boardToWorld(r, c);
        tile.position.set(pos.x, -0.05, pos.z);
        tile.receiveShadow = true;
        tile.userData = { isTile: true, r, c };
        this.boardGroup.add(tile);
        this.tileMeshes[r][c] = tile;
      }
    }

    // 4 Corner Gothic Braziers
    const corners = [
      [-4.45, -4.45],
      [4.45, -4.45],
      [-4.45, 4.45],
      [4.45, 4.45]
    ];

    corners.forEach(([cx, cz]) => {
      const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.36, 0.92, 8), trimMat);
      pillar.position.set(cx, 0.2, cz);
      pillar.castShadow = true;
      this.boardGroup.add(pillar);

      const bowl = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.2, 0.22, 10), plinthMat);
      bowl.position.set(cx, 0.72, cz);
      this.boardGroup.add(bowl);

      const fireMat = new THREE.MeshBasicMaterial({ color: 0xff6600 });
      const fireCone = new THREE.Mesh(new THREE.ConeGeometry(0.24, 0.5, 7), fireMat);
      fireCone.position.set(cx, 0.98, cz);
      this.boardGroup.add(fireCone);

      const fireLight = new THREE.PointLight(0xff5500, 1.9, 6.8);
      fireLight.position.set(cx, 1.25, cz);
      this.boardGroup.add(fireLight);

      this.braziers.push({ fireCone, fireLight, x: cx, z: cz, phase: Math.random() * 10 });
    });

    this.highlightGroup = new THREE.Group();
    this.scene.add(this.highlightGroup);

    this.scarGroup = new THREE.Group();
    this.scene.add(this.scarGroup);
  }

  clearBattleScars() {
    while (this.scarGroup.children.length > 0) {
      this.scarGroup.remove(this.scarGroup.children[0]);
    }
  }

  spawnBattleScar(worldPos, colorHex = 0x880808, radius = 0.34) {
    const scarGeo = new THREE.CircleGeometry(radius, 14);
    scarGeo.rotateX(-Math.PI / 2);
    const scarMat = new THREE.MeshBasicMaterial({
      color: colorHex,
      transparent: true,
      opacity: 0.52,
      depthWrite: false
    });
    const scar = new THREE.Mesh(scarGeo, scarMat);
    scar.position.set(
      worldPos.x + (Math.random() - 0.5) * 0.16,
      0.006,
      worldPos.z + (Math.random() - 0.5) * 0.16
    );
    scar.rotation.z = Math.random() * Math.PI * 2;
    this.scarGroup.add(scar);
  }

  setupInteraction() {
    let pointerDownPos = { x: 0, y: 0 };

    this.renderer.domElement.addEventListener('pointerdown', (e) => {
      pointerDownPos = { x: e.clientX, y: e.clientY };
    });

    this.renderer.domElement.addEventListener('pointerup', (e) => {
      const dx = e.clientX - pointerDownPos.x;
      const dy = e.clientY - pointerDownPos.y;
      if (Math.hypot(dx, dy) > 6) return;
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
    const activeIds = new Set();
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const p = engine.board[r][c];
        if (p) {
          activeIds.add(p.id);
          let mesh = this.unitMeshes.get(p.id);
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
          mesh.scale.setScalar(1);
          mesh.rotation.set(0, mesh.userData.defaultRotY, 0);
          mesh.userData.gridPos = { r, c };
          const rig = mesh.userData.rig;
          if (rig) {
            rig.bodyPivot.position.set(0, rig.baseY, 0);
            rig.bodyPivot.rotation.set(0, 0, 0);
            rig.torso.rotation.set(0, 0, 0);
            rig.leftArm.rotation.set(0, 0, 0);
            rig.rightArm.rotation.set(0, 0, 0);
            rig.leftLeg.rotation.set(0, 0, 0);
            rig.rightLeg.rotation.set(0, 0, 0);
          }
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

    legalMoves.forEach((m) => {
      const pos = this.boardToWorld(m.toR, m.toC);
      if (m.isAttack) {
        const ring = new THREE.Mesh(
          new THREE.RingGeometry(0.34, 0.46, 24),
          new THREE.MeshBasicMaterial({
            color: 0xff2222,
            transparent: true,
            opacity: 0.88,
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
        const dot = new THREE.Mesh(
          new THREE.CircleGeometry(0.18, 20),
          new THREE.MeshBasicMaterial({
            color: 0x22ff88,
            transparent: true,
            opacity: 0.78,
            side: THREE.DoubleSide
          })
        );
        dot.rotation.x = -Math.PI / 2;
        dot.position.set(pos.x, 0.02, pos.z);
        this.highlightGroup.add(dot);
      }
    });

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
    this.duelOrbitTarget = null;
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

  tweenCamera(targetPos, targetLookAt, duration = 550) {
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

  // Particle, Shell Casing, Slash Ribbon & Dismemberment Spawners
  spawnSparks(pos, colorHex = 0xffaa00, count = 18, speed = 3.5, size = 0.042) {
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
        gravity: 9.8,
        life: 0.45 + Math.random() * 0.35,
        maxLife: 0.8,
        spin: new THREE.Vector3(Math.random() * 10, Math.random() * 10, Math.random() * 10)
      });
    }
  }

  spawnShellCasings(muzzlePos, count = 3) {
    const casingGeo = new THREE.CylinderGeometry(0.012, 0.012, 0.04, 6);
    for (let i = 0; i < count; i++) {
      const mat = new THREE.MeshStandardMaterial({
        color: 0xd4af37,
        roughness: 0.25,
        metalness: 0.9,
        transparent: true,
        opacity: 1
      });
      const mesh = new THREE.Mesh(casingGeo, mat);
      mesh.position.copy(muzzlePos);
      const vel = new THREE.Vector3(
        (Math.random() - 0.5) * 1.8,
        1.8 + Math.random() * 1.2,
        (Math.random() - 0.5) * 1.8
      );
      this.scene.add(mesh);
      this.particles.push({
        mesh,
        vel,
        gravity: 11.5,
        bounceFloor: true,
        life: 0.9,
        maxLife: 0.9,
        spin: new THREE.Vector3(16, 12, 20)
      });
    }
  }

  /**
   * Spawns a glowing 3D crescent weapon slash ribbon in the air!
   */
  spawnSlashArc(centerPos, facingAngle, tiltZ = 0.4, colorStr = '#00d2ff', radius = 0.48) {
    const arcGeo = new THREE.RingGeometry(radius * 0.65, radius, 18, 1, -Math.PI * 0.65, Math.PI * 1.3);
    const mat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(colorStr),
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.92
    });
    const mesh = new THREE.Mesh(arcGeo, mat);
    mesh.position.copy(centerPos).add(new THREE.Vector3(0, 0.52, 0));
    mesh.rotation.y = facingAngle;
    mesh.rotation.x = Math.PI / 2;
    mesh.rotation.z = tiltZ;
    this.scene.add(mesh);
    this.slashArcs.push({ mesh, age: 0, duration: 0.24 });
  }

  /**
   * Spawns full Dismemberment (flying helmet, pauldrons, limbs) + 32 armor shrapnel pieces!
   */
  spawnShatterExplosion(pos, factionKey) {
    soundEngine.playExplosion();
    this.screenShake = 0.34;
    const f = FACTIONS[factionKey];
    const colors = [
      new THREE.Color(f.themeColor),
      new THREE.Color(f.accentColor),
      new THREE.Color(f.glowColor),
      new THREE.Color(0xff4400)
    ];

    // Leave permanent battle scar on the tile!
    const scarCol = factionKey === 'necrons' ? 0x00aa44 : 0x770a12;
    this.spawnBattleScar(pos, scarCol, 0.38);

    // 1. Flying Dismembered Parts (Helmet, Pauldrons, Weapon Arm)
    const partGeos = [
      new THREE.SphereGeometry(0.1, 10, 10), // Severed Helmet
      new THREE.SphereGeometry(0.11, 8, 8, 0, Math.PI * 2, 0, Math.PI * 0.6), // Left Pauldron
      new THREE.SphereGeometry(0.11, 8, 8, 0, Math.PI * 2, 0, Math.PI * 0.6), // Right Pauldron
      new THREE.BoxGeometry(0.06, 0.32, 0.08) // Severed Weapon Arm
    ];

    partGeos.forEach((geo, idx) => {
      const mat = new THREE.MeshStandardMaterial({
        color: idx === 0 ? new THREE.Color(f.accentColor) : new THREE.Color(f.themeColor),
        roughness: 0.35,
        metalness: 0.75,
        transparent: true,
        opacity: 1
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.copy(pos).add(new THREE.Vector3(0, 0.5, 0));
      const ang = (idx / partGeos.length) * Math.PI * 2 + Math.random() * 0.5;
      const vel = new THREE.Vector3(Math.cos(ang) * 2.6, 3.4 + Math.random() * 2.0, Math.sin(ang) * 2.6);
      this.scene.add(mesh);
      this.particles.push({
        mesh,
        vel,
        gravity: 11.0,
        bounceFloor: true,
        life: 1.55,
        maxLife: 1.55,
        spin: new THREE.Vector3(10, 14, 9)
      });
    });

    // 2. 32 Glowing Armor Shrapnel & Blood/Plasma droplets
    for (let i = 0; i < 32; i++) {
      const s = 0.04 + Math.random() * 0.08;
      const geo = new THREE.DodecahedronGeometry(s, 0);
      const col = colors[i % colors.length];
      const mat = new THREE.MeshStandardMaterial({
        color: col,
        emissive: col,
        emissiveIntensity: i % 3 === 0 ? 2.2 : 0.3,
        roughness: 0.35,
        metalness: 0.75,
        transparent: true,
        opacity: 1
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.copy(pos).add(new THREE.Vector3(0, 0.38, 0));

      const angle = Math.random() * Math.PI * 2;
      const spd = 1.6 + Math.random() * 4.6;
      const vel = new THREE.Vector3(
        Math.cos(angle) * spd,
        2.4 + Math.random() * 4.2,
        Math.sin(angle) * spd
      );
      this.scene.add(mesh);
      this.particles.push({
        mesh,
        vel,
        gravity: 11.2,
        bounceFloor: true,
        life: 1.2 + Math.random() * 0.5,
        maxLife: 1.7,
        spin: new THREE.Vector3(Math.random() * 14, Math.random() * 14, Math.random() * 14)
      });
    }

    this.spawnShockwave(pos, f.glowColor, 2.0);
  }

  spawnShockwave(pos, colorStr = '#ffaa00', maxRadius = 1.5) {
    const geo = new THREE.RingGeometry(0.1, 0.24, 36);
    geo.rotateX(-Math.PI / 2);
    const mat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(colorStr),
      transparent: true,
      opacity: 0.92,
      side: THREE.DoubleSide
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(pos.x, 0.035, pos.z);
    this.scene.add(mesh);
    this.shockwaves.push({ mesh, age: 0, duration: 0.48, maxRadius });
  }

  spawnLightningArc(startPos, endPos, colorHex = 0x00d2ff, duration = 0.26) {
    const segments = 12;
    const points = [];
    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const pt = new THREE.Vector3().lerpVectors(startPos, endPos, t);
      if (i > 0 && i < segments) {
        pt.x += (Math.random() - 0.5) * 0.26;
        pt.y += (Math.random() - 0.5) * 0.26;
        pt.z += (Math.random() - 0.5) * 0.26;
      }
      points.push(pt);
    }
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    const mat = new THREE.LineBasicMaterial({ color: colorHex, linewidth: 3 });
    const line = new THREE.Line(geo, mat);
    this.scene.add(line);
    this.lightningBolts.push({ line, life: duration });
  }

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
      mesh.position.y = 0;
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
          const jumpHeight = Math.sin(t * Math.PI) * 1.75;
          mesh.position.y = jumpHeight;
          if (rig) {
            rig.bodyPivot.rotation.x = Math.sin(t * Math.PI) * 0.4;
          }
          if (Math.random() < 0.65) {
            this.spawnSparks(
              mesh.position.clone().add(new THREE.Vector3(0, 0.25, 0)),
              0xff7700,
              2,
              1.4,
              0.038
            );
          }
        } else if (rig) {
          const stride = Math.sin(t * Math.PI * 4) * 0.6;
          rig.leftLeg.rotation.x = stride;
          rig.rightLeg.rotation.x = -stride;
          rig.leftArm.rotation.x = -stride * 0.55;
          rig.rightArm.rotation.x = stride * 0.55;
          rig.bodyPivot.position.y = rig.baseY + Math.abs(Math.sin(t * Math.PI * 4)) * 0.055;
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
   * DAWN-OF-WAR STYLE CINEMATIC SYNC-KILL COMBAT CHOREOGRAPHER!
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

    const dirVec = new THREE.Vector3().subVectors(targetWorld, startWorld);
    const totalDist = dirVec.length();
    dirVec.normalize();

    const isRangedPsyker = atkPiece.type === 'b' && totalDist > 1.8 && combat.defenderSurvived;
    const clashPos = isRangedPsyker
      ? startWorld.clone().addScaledVector(dirVec, 0.45)
      : targetWorld.clone().addScaledVector(dirVec, -0.72);

    const atkFaceAngle = Math.atan2(-dirVec.x, -dirVec.z);
    const defFaceAngle = Math.atan2(dirVec.x, dirVec.z);
    atkMesh.rotation.y = atkFaceAngle;
    defMesh.rotation.y = defFaceAngle;

    // Activate dramatic Duel Spotlight
    const midPoint = new THREE.Vector3().lerpVectors(clashPos, targetWorld, 0.5);
    midPoint.y = 0.52;
    this.combatLight.position.set(midPoint.x, 2.2, midPoint.z);
    this.combatLight.color.set(atkFaction.glowColor);
    this.combatLight.intensity = 4.2;

    const savedCamPos = this.camera.position.clone();
    const savedCamTarget = this.controls.target.clone();

    // CAMERA CUT 1: Low Over-the-Shoulder Charge / Firefight Shot!
    if (this.autoActionCam) {
      const perp = new THREE.Vector3(-dirVec.z, 0, dirVec.x).normalize();
      const cut1Pos = clashPos
        .clone()
        .addScaledVector(dirVec, -1.55)
        .addScaledVector(perp, 1.35)
        .add(new THREE.Vector3(0, 1.35, 0));
      cut1Pos.x = Math.max(-7.5, Math.min(7.5, cut1Pos.x));
      cut1Pos.z = Math.max(-7.5, Math.min(7.5, cut1Pos.z));
      await this.tweenCamera(cut1Pos, midPoint, 420);
    }

    // PHASE 1: CHARGE / JUMP-PACK LEAP INTO COMBAT RANGE
    const isJump = atkPiece.type === 'n';
    await this.moveUnitAlongPath(atkMesh, startWorld, clashPos, isJump ? 460 : 360, isJump);
    atkMesh.rotation.y = atkFaceAngle;
    defMesh.rotation.y = defFaceAngle;

    // Defender braces for impact (raises shield/weapon in guard stance)
    if (defRig && !this.skipRequested) {
      defRig.leftArm.rotation.x = -0.65;
      defRig.rightArm.rotation.x = -0.45;
    }

    // PHASE 2: RANGED VOLLEY OR PSYCHIC LIGHTNING DUEL
    if (!this.skipRequested) {
      if (atkPiece.type === 'b') {
        if (uiCallbacks.onPhaseText) uiCallbacks.onPhaseText(`⚡ ${atkPiece.name} unleashes Immaterium Lightning!`);
        soundEngine.playPsychicBlast();

        // Summon glowing Psychic Rune Circle under both fighters
        this.spawnShockwave(clashPos, atkFaction.glowColor, 1.1);
        this.spawnShockwave(targetWorld, atkFaction.glowColor, 1.1);

        if (atkRig) atkRig.rightArm.rotation.x = -0.95;
        const staffPos = new THREE.Vector3();
        if (atkRig?.muzzlePoint) atkRig.muzzlePoint.getWorldPosition(staffPos);
        else staffPos.copy(atkMesh.position).add(new THREE.Vector3(0, 0.85, 0));

        const chestPos = targetWorld.clone().add(new THREE.Vector3(0, 0.55, 0));
        const glowCol = new THREE.Color(atkFaction.glowColor).getHex();

        for (let i = 0; i < 5; i++) {
          this.spawnLightningArc(staffPos, chestPos, glowCol, 0.22);
          this.spawnSparks(chestPos, glowCol, 12, 3.0, 0.042);
          if (defRig) {
            defRig.torso.rotation.z = (i % 2 === 0 ? 1 : -1) * 0.2;
          }
          await this.sleep(80);
        }
        if (defRig) defRig.torso.rotation.z = 0;
      } else {
        if (uiCallbacks.onPhaseText) {
          uiCallbacks.onPhaseText(`🔫 ${atkPiece.name} fires point-blank salvo!`);
        }
        if (atkRig) atkRig.leftArm.rotation.x = -0.82;

        const shots = atkPiece.type === 'r' ? 5 : 3;
        const projCol = new THREE.Color(atkFaction.glowColor).getHex();

        for (let s = 0; s < shots; s++) {
          if (this.skipRequested) break;
          soundEngine.playBolterShot();

          // Spin Dreadnought Gatling Barrel!
          if (atkRig?.gatlingBarrel) {
            atkRig.gatlingBarrel.rotation.z += 1.2;
          }

          const muzzleWorld = new THREE.Vector3();
          if (atkRig?.muzzlePoint) atkRig.muzzlePoint.getWorldPosition(muzzleWorld);
          else muzzleWorld.copy(atkMesh.position).add(new THREE.Vector3(0, 0.55, 0));

          if (atkPiece.faction !== 'necrons') {
            this.spawnShellCasings(muzzleWorld, 1);
          }

          const hitWorld = targetWorld.clone().add(
            new THREE.Vector3((Math.random() - 0.5) * 0.16, 0.45 + Math.random() * 0.22, (Math.random() - 0.5) * 0.16)
          );

          this.spawnLightningArc(muzzleWorld, hitWorld, projCol, 0.08);
          this.spawnSparks(hitWorld, 0xffaa22, 9, 2.8, 0.036);

          if (defRig) {
            defRig.torso.rotation.x = -0.25;
            setTimeout(() => {
              if (defRig) defRig.torso.rotation.x = 0;
            }, 60);
          }
          await this.sleep(85);
        }
        if (atkRig) atkRig.leftArm.rotation.x = 0;
      }
    }

    // CAMERA CUT 2: Start Smooth Cinematic Orbit around the Melee Clash!
    if (this.autoActionCam && !this.skipRequested) {
      this.duelOrbitTarget = midPoint.clone();
      this.duelOrbitRadius = 2.35;
      this.duelOrbitHeight = 1.45;
      this.duelOrbitAngle = Math.atan2(
        this.camera.position.z - midPoint.z,
        this.camera.position.x - midPoint.x
      );
      this.duelOrbitSpeed = 0.65;
    }

    // PHASE 3: CHOREOGRAPHED MELEE EXCHANGE (Weapon Clashes, Parries & Staggers!)
    if (!isRangedPsyker && !this.skipRequested) {
      if (uiCallbacks.onPhaseText) {
        uiCallbacks.onPhaseText(`⚔️ Blade-to-Blade Duel! Rolling ${atkPiece.atkDice}D6...`);
      }
      soundEngine.playDiceRoll();
      if (atkPiece.type === 'p' || atkPiece.faction === 'orks') {
        soundEngine.playChainswordRev(0.45);
      }

      // Beat 1: Attacker slashes, Defender parries with a burst of sparks!
      await this.animateMeleeSwing(atkRig, defRig, targetWorld, atkFaceAngle, atkFaction.glowColor, 1);
      soundEngine.playSwordClash();

      // Beat 2: Defender swings a fierce riposte, Attacker ducks/blocks!
      await this.animateMeleeSwing(defRig, atkRig, clashPos, defFaceAngle, defFaction.glowColor, -1);
      soundEngine.playSwordClash();

      // Beat 3: Attacker delivers a heavy shoulder-barge / crushing blow that staggers Defender!
      await this.animateMeleeSwing(atkRig, defRig, targetWorld, atkFaceAngle, atkFaction.glowColor, -1);
      soundEngine.playSwordClash();
    }

    if (uiCallbacks.onDamagePopup) {
      uiCallbacks.onDamagePopup(
        targetWorld.clone().add(new THREE.Vector3(0, 1.15, 0)),
        `-${combat.damageDealt} HP${combat.isCrit ? ' CRIT!' : ''}`,
        combat.isCrit ? '#ffcc00' : '#ff3333'
      );
    }

    // PHASE 4: SURVIVAL COUNTER-ATTACK OR ROLE-SPECIFIC SYNC-KILL EXECUTION!
    if (combat.defenderSurvived) {
      // Leave light blood/scorch mark
      this.spawnBattleScar(targetWorld, 0x331111, 0.22);
      this.updateUnitHealthRing(defMesh, { ...defPiece, hp: combat.defenderRemainingHp }, engine.mode);

      if (combat.counterAttack && !this.skipRequested) {
        if (uiCallbacks.onPhaseText) {
          uiCallbacks.onPhaseText(`🛡️ ${defPiece.name} holds the line (${combat.defenderRemainingHp} HP) & Counter-Strikes!`);
        }
        await this.sleep(200);

        soundEngine.playSwordClash();
        await this.animateMeleeSwing(defRig, atkRig, clashPos, defFaceAngle, defFaction.glowColor, 1);

        if (uiCallbacks.onDamagePopup) {
          uiCallbacks.onDamagePopup(
            clashPos.clone().add(new THREE.Vector3(0, 1.15, 0)),
            `COUNTER -${combat.counterAttack.damage} HP`,
            '#ff8800'
          );
        }

        await this.sleep(240);
        this.duelOrbitTarget = null;

        if (combat.attackerDiedInCounter) {
          if (uiCallbacks.onPhaseText) {
            uiCallbacks.onPhaseText(`💀 ${atkPiece.name} was cut down by ${defPiece.name}'s counter-attack!`);
          }
          this.spawnShatterExplosion(clashPos, atkPiece.faction);
          this.scene.remove(atkMesh);
          this.unitMeshes.delete(moveResult.attackerId);
          await this.sleep(450);
        } else {
          const fallbackWorld = this.boardToWorld(moveResult.finalAttackerR, moveResult.finalAttackerC);
          if (uiCallbacks.onPhaseText) {
            uiCallbacks.onPhaseText(`↩️ ${atkPiece.name} falls back (${combat.attackerRemainingHp} HP).`);
          }
          await this.moveUnitAlongPath(atkMesh, clashPos, fallbackWorld, 340, false);
        }
      }
    } else {
      // LETHAL SYNC-KILL FINISHER!
      const finisherTitle = atkFaction.units[atkPiece.type].finisherName;
      if (uiCallbacks.onPhaseText) {
        uiCallbacks.onPhaseText(`💀 SYNC-KILL: ${finisherTitle.toUpperCase()}!`);
      }

      // CAMERA CUT 3: Close-up Heroic Finisher Angle!
      if (this.autoActionCam && !this.skipRequested) {
        this.duelOrbitRadius = 1.95;
        this.duelOrbitHeight = 1.05;
        this.duelOrbitSpeed = 1.15;
      }

      await this.executeRoleSyncKill(atkMesh, defMesh, atkPiece, defPiece, clashPos, targetWorld, dirVec, atkFaceAngle);

      this.duelOrbitTarget = null;

      // Explode & Dismember Defender!
      this.spawnShatterExplosion(targetWorld, defPiece.faction);
      this.scene.remove(defMesh);
      this.unitMeshes.delete(moveResult.defenderId);

      // Attacker claims the square & raises weapon in victory roar!
      await this.moveUnitAlongPath(atkMesh, atkMesh.position.clone(), targetWorld, 260, false);
      if (atkRig && !this.skipRequested) {
        atkRig.rightArm.rotation.x = -2.35;
        atkRig.leftArm.rotation.x = -1.2;
        await this.sleep(360);
        atkRig.rightArm.rotation.x = 0;
        atkRig.leftArm.rotation.x = 0;
      }
    }

    this.duelOrbitTarget = null;
    this.combatLight.intensity = 0;

    if (this.autoActionCam) {
      await this.tweenCamera(savedCamPos, savedCamTarget, 450);
    }

    this.syncBoardPieces(engine);
    this.isAnimating = false;
  }

  async animateMeleeSwing(attackerRig, defenderRig, defenderWorldPos, facingAngle, glowColorStr, dirSign = 1) {
    if (!attackerRig || this.skipRequested) return;
    const duration = 185;
    const start = performance.now();

    // Spawn glowing 3D weapon slash ribbon!
    this.spawnSlashArc(defenderWorldPos, facingAngle, dirSign * 0.45, glowColorStr, 0.52);

    await new Promise((resolve) => {
      const step = (now) => {
        const t = Math.min(1, (now - start) / duration);
        const swingPhase = Math.sin(t * Math.PI);
        attackerRig.rightArm.rotation.x = -1.85 * swingPhase;
        attackerRig.rightArm.rotation.z = dirSign * 0.55 * swingPhase;
        attackerRig.torso.rotation.y = dirSign * 0.42 * swingPhase;

        if (defenderRig && t > 0.4) {
          defenderRig.torso.rotation.x = -0.32 * swingPhase;
          defenderRig.torso.rotation.z = -dirSign * 0.18 * swingPhase;
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
    this.spawnSparks(sparkPos, new THREE.Color(glowColorStr).getHex(), 15, 3.4, 0.044);
    this.screenShake = 0.1;
  }

  /**
   * 6 Unique Role-Specific Dawn-of-War Sync-Kill Executions!
   */
  async executeRoleSyncKill(atkMesh, defMesh, atkPiece, defPiece, clashPos, targetWorld, dirVec, atkFaceAngle) {
    if (this.skipRequested) return;
    const atkRig = atkMesh.userData.rig;
    const defRig = defMesh.userData.rig;
    const atkFaction = FACTIONS[atkPiece.faction];
    const glowHex = new THREE.Color(atkFaction.glowColor).getHex();

    if (atkPiece.type === 'p') {
      // PAWN SYNC-KILL: CHAINSWORD CHEST IMPALE, REV & UPPERCUT RIP (or Gauss Point-Blank Vaporize!)
      soundEngine.playChainswordRev(0.55);
      const lungePos = targetWorld.clone().addScaledVector(dirVec, -0.42);
      const start = performance.now();

      await new Promise((resolve) => {
        const step = (now) => {
          const t = Math.min(1, (now - start) / 520);
          if (t < 0.7) {
            // Impale and rev chainsword inside enemy torso!
            atkMesh.position.lerpVectors(clashPos, lungePos, Math.min(1, t * 2.5));
            if (atkRig) {
              atkRig.rightArm.rotation.x = -1.45 + Math.sin(t * 60) * 0.08;
              atkRig.torso.rotation.x = 0.25;
            }
            if (defRig) {
              defRig.torso.rotation.x = -0.35 + Math.sin(t * 50) * 0.06;
              defMesh.position.y = 0.12;
            }
            if (Math.random() < 0.7) {
              this.spawnSparks(
                targetWorld.clone().add(new THREE.Vector3(0, 0.55, 0)),
                atkPiece.faction === 'necrons' ? 0x00ff66 : 0xff1122,
                3,
                2.8,
                0.042
              );
            }
          } else {
            // Rip upward!
            const u = (t - 0.7) / 0.3;
            if (atkRig) {
              atkRig.rightArm.rotation.x = -1.45 - u * 1.1;
            }
            defMesh.position.y = 0.12 + u * 0.55;
          }
          if (t < 1 && !this.skipRequested) requestAnimationFrame(step);
          else resolve();
        };
        requestAnimationFrame(step);
      });
    } else if (atkPiece.type === 'r') {
      // ROOK SYNC-KILL: DREADNOUGHT HYDRAULIC GRAB, LIFT IN THE AIR, CRUSH & SLAM!
      soundEngine.playChainswordRev(0.48);
      const start = performance.now();
      await new Promise((resolve) => {
        const step = (now) => {
          const t = Math.min(1, (now - start) / 620);
          if (t < 0.65) {
            // Lift enemy high into the air in the Dreadnought's Power Klaw!
            const w = t / 0.65;
            if (atkRig) {
              atkRig.rightArm.rotation.x = -2.1 * w;
              atkRig.leftArm.rotation.x = -0.9 * w;
            }
            defMesh.position.y = w * 1.15;
            defMesh.rotation.z = Math.sin(t * 45) * 0.25;
            if (Math.random() < 0.5) {
              this.spawnSparks(defMesh.position.clone().add(new THREE.Vector3(0, 0.4, 0)), 0xffaa00, 3, 2.2, 0.04);
            }
          } else {
            // Violent ground slam + point-blank cannon shot!
            const s = (t - 0.65) / 0.35;
            if (atkRig) {
              atkRig.rightArm.rotation.x = -2.1 + 2.6 * s;
            }
            defMesh.position.y = Math.max(0, 1.15 * (1 - s));
            defMesh.scale.y = Math.max(0.3, 1 - s * 0.65);
          }
          if (t < 1 && !this.skipRequested) requestAnimationFrame(step);
          else resolve();
        };
        requestAnimationFrame(step);
      });
      soundEngine.playBolterShot();
    } else if (atkPiece.type === 'n') {
      // KNIGHT SYNC-KILL: SKYHAMMER THRUSTER ASCENT & GUILLOTINE METEOR DIVE!
      soundEngine.playJumpPack();
      const basePos = atkMesh.position.clone();
      const start = performance.now();
      await new Promise((resolve) => {
        const step = (now) => {
          const t = Math.min(1, (now - start) / 520);
          if (t < 0.55) {
            // Boost straight up into the sky on roaring thrusters!
            const u = t / 0.55;
            atkMesh.position.y = u * 2.3;
            if (atkRig) atkRig.bodyPivot.rotation.x = u * Math.PI * 2;
            this.spawnSparks(atkMesh.position.clone(), 0xff6600, 2, 1.8, 0.045);
          } else {
            // Meteor guillotine dive straight down onto target!
            const d = (t - 0.55) / 0.45;
            atkMesh.position.lerpVectors(basePos, targetWorld, d);
            atkMesh.position.y = 2.3 * (1 - d);
            if (atkRig) atkRig.rightArm.rotation.x = -2.4;
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
      this.spawnSlashArc(targetWorld, atkFaceAngle, 0, atkFaction.glowColor, 0.75);
    } else if (atkPiece.type === 'b') {
      // BISHOP SYNC-KILL: IMMATERIUM TELEKINETIC LEVITATION & SINGULARITY IMPLOSION!
      soundEngine.playPsychicBlast();
      this.spawnShockwave(targetWorld, atkFaction.glowColor, 1.6);
      const start = performance.now();
      await new Promise((resolve) => {
        const step = (now) => {
          const t = Math.min(1, (now - start) / 560);
          defMesh.position.y = Math.sin(t * Math.PI * 0.65) * 1.35;
          defMesh.rotation.y += 0.35;
          defMesh.rotation.x = t * 0.8;
          if (defRig) {
            defRig.leftArm.rotation.z = -1.2;
            defRig.rightArm.rotation.z = 1.2;
          }
          if (t > 0.75) {
            // Singularity implosion!
            const shrink = Math.max(0.15, 1 - (t - 0.75) * 3.2);
            defMesh.scale.setScalar(shrink);
          }
          if (Math.random() < 0.6) {
            this.spawnLightningArc(
              atkMesh.position.clone().add(new THREE.Vector3(0, 0.9, 0)),
              defMesh.position.clone().add(new THREE.Vector3(0, 0.4, 0)),
              glowHex,
              0.12
            );
          }
          if (t < 1 && !this.skipRequested) requestAnimationFrame(step);
          else resolve();
        };
        requestAnimationFrame(step);
      });
    } else if (atkPiece.type === 'q') {
      // QUEEN SYNC-KILL: CHAMPION'S LIGHTNING DASH-THROUGH X-CLEAVE + HIT-STOP!
      soundEngine.playSwordClash();
      const dashPastPos = targetWorld.clone().addScaledVector(dirVec, 0.55);
      // Spawn crossed X-slash ribbons on Defender!
      this.spawnSlashArc(targetWorld, atkFaceAngle, 0.65, atkFaction.glowColor, 0.68);
      this.spawnSlashArc(targetWorld, atkFaceAngle, -0.65, atkFaction.glowColor, 0.68);

      const start = performance.now();
      await new Promise((resolve) => {
        const step = (now) => {
          const t = Math.min(1, (now - start) / 280);
          atkMesh.position.lerpVectors(clashPos, dashPastPos, t);
          if (atkRig) {
            atkRig.bodyPivot.rotation.x = 0.35;
            atkRig.rightArm.rotation.z = 1.3;
          }
          if (t < 1 && !this.skipRequested) requestAnimationFrame(step);
          else resolve();
        };
        requestAnimationFrame(step);
      });
      // Dramatic Hit-Stop pause before enemy shatters!
      await this.sleep(220);
      if (atkRig) {
        atkRig.bodyPivot.rotation.x = 0;
        atkRig.rightArm.rotation.z = 0;
      }
    } else {
      // KING SYNC-KILL: WARLORD UPPERCUT LAUNCH & ORBITAL PILLAR OF JUDGMENT!
      soundEngine.playWarhorn();
      const start = performance.now();
      await new Promise((resolve) => {
        const step = (now) => {
          const t = Math.min(1, (now - start) / 560);
          if (t < 0.5) {
            // Titanic uppercut launches enemy into the air!
            const u = t / 0.5;
            if (atkRig) atkRig.rightArm.rotation.x = -2.4 * u;
            defMesh.position.y = Math.sin(u * Math.PI * 0.5) * 1.45;
            defMesh.rotation.x = -u * 1.2;
          } else {
            // Two-handed ground-shattering judgment slam!
            const d = (t - 0.5) / 0.5;
            if (atkRig) {
              atkRig.rightArm.rotation.x = -2.4 + 2.8 * d;
              atkRig.leftArm.rotation.x = -2.0 + 2.4 * d;
            }
            defMesh.position.y = 1.45 * (1 - d);
          }
          if (t < 1 && !this.skipRequested) requestAnimationFrame(step);
          else resolve();
        };
        requestAnimationFrame(step);
      });

      // Spawn Pillar of Judgment light beam!
      const beam = new THREE.Mesh(
        new THREE.CylinderGeometry(0.35, 0.35, 12, 16),
        new THREE.MeshBasicMaterial({
          color: new THREE.Color(atkFaction.glowColor),
          transparent: true,
          opacity: 0.8
        })
      );
      beam.position.set(targetWorld.x, 6, targetWorld.z);
      this.scene.add(beam);
      setTimeout(() => this.scene.remove(beam), 380);
    }
  }

  async animateStratagemEffect(type, r, c, killed = false, factionKey = 'ultramarines') {
    const pos = this.boardToWorld(r, c);
    if (type === 'heal') {
      soundEngine.playPsychicBlast();
      this.spawnShockwave(pos, '#22ff88', 1.2);
      this.spawnSparks(pos.clone().add(new THREE.Vector3(0, 0.4, 0)), 0x22ff88, 24, 2.5, 0.05);
    } else if (type === 'orbital') {
      soundEngine.playExplosion();
      const beamGeo = new THREE.CylinderGeometry(0.34, 0.34, 16, 16);
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

    // 1. Update Idle Unit Breathing, Psychic Shards & Chainsword Idle Hum
    for (const mesh of this.unitMeshes.values()) {
      const rig = mesh.userData.rig;
      if (!rig) continue;
      if (!this.isAnimating) {
        const bob = Math.sin(now * 2.6 + rig.animPhase) * 0.018;
        rig.bodyPivot.position.y = rig.baseY + bob;
        rig.rightArm.rotation.z = Math.sin(now * 1.8 + rig.animPhase) * 0.04;
      }
      // Spin orbiting psychic crystals / power cores
      if (rig.orbitingShards) {
        rig.orbitingShards.forEach((s) => {
          s.rotation.y += 0.04;
          s.rotation.x += 0.02;
        });
      }
    }

    // 2. Active Cinematic Duel Camera Orbit
    if (this.duelOrbitTarget && this.autoActionCam) {
      this.duelOrbitAngle += this.duelOrbitSpeed * dt;
      const desiredX = this.duelOrbitTarget.x + Math.cos(this.duelOrbitAngle) * this.duelOrbitRadius;
      const desiredZ = this.duelOrbitTarget.z + Math.sin(this.duelOrbitAngle) * this.duelOrbitRadius;
      const desiredY = this.duelOrbitTarget.y + this.duelOrbitHeight;

      this.camera.position.lerp(new THREE.Vector3(desiredX, desiredY, desiredZ), 0.12);
      this.controls.target.lerp(this.duelOrbitTarget, 0.18);
    }

    // 3. Flickering Corner Braziers
    this.braziers.forEach((b) => {
      const flicker = 0.88 + Math.sin(now * 11 + b.phase) * 0.15 + Math.cos(now * 19) * 0.08;
      b.fireCone.scale.set(1, flicker, 1);
      b.fireLight.intensity = 1.7 * flicker;
      if (Math.random() < 0.08) {
        this.spawnSparks(new THREE.Vector3(b.x, 1.05, b.z), 0xff6600, 1, 0.8, 0.028);
      }
    });

    // 4. Update Particles & Dismembered Parts
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
      if (p.bounceFloor && p.mesh.position.y < 0.05) {
        p.mesh.position.y = 0.05;
        p.vel.y = Math.abs(p.vel.y) * 0.44;
        p.vel.x *= 0.76;
        p.vel.z *= 0.76;
      }
      p.mesh.rotation.x += p.spin.x * dt;
      p.mesh.rotation.y += p.spin.y * dt;
      p.mesh.material.opacity = Math.min(1, p.life / (p.maxLife * 0.35));
    }

    // 5. Update Slash Ribbon Arcs
    for (let i = this.slashArcs.length - 1; i >= 0; i--) {
      const sa = this.slashArcs[i];
      sa.age += dt;
      const t = sa.age / sa.duration;
      if (t >= 1) {
        this.scene.remove(sa.mesh);
        this.slashArcs.splice(i, 1);
        continue;
      }
      sa.mesh.scale.setScalar(1 + t * 0.45);
      sa.mesh.material.opacity = (1 - t) * 0.92;
    }

    // 6. Update Shockwaves
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

    // 7. Update Lightning Arcs
    for (let i = this.lightningBolts.length - 1; i >= 0; i--) {
      const lb = this.lightningBolts[i];
      lb.life -= dt;
      if (lb.life <= 0) {
        this.scene.remove(lb.line);
        this.lightningBolts.splice(i, 1);
      }
    }

    // 8. Screen Shake decay
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
