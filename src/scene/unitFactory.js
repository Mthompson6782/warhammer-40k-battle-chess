import * as THREE from 'three';
import { FACTIONS } from '../data/factions.js';

export class UnitFactory {
  constructor() {
    this.sharedGeometries = {
      baseCylinder: new THREE.CylinderGeometry(0.43, 0.49, 0.11, 28),
      baseInner: new THREE.CylinderGeometry(0.4, 0.4, 0.12, 24),
      selectRing: new THREE.RingGeometry(0.5, 0.57, 36),
      rivet: new THREE.SphereGeometry(0.014, 6, 6),
      skull: new THREE.SphereGeometry(0.038, 8, 8)
    };
    this.sharedGeometries.selectRing.rotateX(-Math.PI / 2);
  }

  createMaterials(factionKey) {
    const f = FACTIONS[factionKey];
    return {
      armor: new THREE.MeshStandardMaterial({
        color: new THREE.Color(f.themeColor),
        roughness: factionKey === 'necrons' ? 0.26 : 0.36,
        metalness: factionKey === 'necrons' ? 0.88 : 0.62
      }),
      armorSecondary: new THREE.MeshStandardMaterial({
        color: new THREE.Color(f.themeColor).multiplyScalar(0.72),
        roughness: 0.45,
        metalness: 0.55
      }),
      trim: new THREE.MeshStandardMaterial({
        color: new THREE.Color(f.accentColor),
        roughness: 0.24,
        metalness: 0.92
      }),
      metal: new THREE.MeshStandardMaterial({
        color: new THREE.Color(f.metalColor),
        roughness: 0.32,
        metalness: 0.88
      }),
      darkMetal: new THREE.MeshStandardMaterial({
        color: 0x181b20,
        roughness: 0.48,
        metalness: 0.8
      }),
      cloth: new THREE.MeshStandardMaterial({
        color: new THREE.Color(f.clothColor),
        roughness: 0.82,
        metalness: 0.08,
        side: THREE.DoubleSide
      }),
      parchment: new THREE.MeshStandardMaterial({
        color: 0xe6dcc5,
        roughness: 0.85,
        metalness: 0.05,
        side: THREE.DoubleSide
      }),
      wax: new THREE.MeshStandardMaterial({
        color: 0xaa1122,
        roughness: 0.4,
        metalness: 0.2
      }),
      skin: new THREE.MeshStandardMaterial({
        color: new THREE.Color(f.skinColor || '#c99b72'),
        roughness: 0.62,
        metalness: 0.05
      }),
      glow: new THREE.MeshStandardMaterial({
        color: new THREE.Color(f.glowColor),
        emissive: new THREE.Color(f.glowColor),
        emissiveIntensity: 2.6,
        roughness: 0.15
      }),
      eyes: new THREE.MeshStandardMaterial({
        color: new THREE.Color(f.eyeColor),
        emissive: new THREE.Color(f.eyeColor),
        emissiveIntensity: 3.2
      }),
      bone: new THREE.MeshStandardMaterial({
        color: 0xdcd2be,
        roughness: 0.52,
        metalness: 0.12
      }),
      hazard: new THREE.MeshStandardMaterial({
        color: 0xe5a918,
        roughness: 0.45,
        metalness: 0.35
      }),
      baseRim: new THREE.MeshStandardMaterial({
        color: new THREE.Color(f.baseRimColor),
        roughness: 0.45,
        metalness: 0.35
      }),
      baseTop: new THREE.MeshStandardMaterial({
        color: 0x262930,
        roughness: 0.88,
        metalness: 0.18
      })
    };
  }

  createUnitMesh(piece) {
    const { side, type, faction } = piece;
    const f = FACTIONS[faction];
    const unitProf = f.units[type];
    const mats = this.createMaterials(faction);

    const root = new THREE.Group();
    root.userData = {
      pieceId: piece.id,
      side,
      type,
      faction
    };

    // 1. Detailed Citadel Wargame Scenic Base
    this.buildScenicBase(root, type, faction, mats);

    // 3D Health Bar Arc Ring around base
    const hpRingMat = new THREE.MeshBasicMaterial({
      color: side === 'w' ? 0x22dd88 : 0xff4444,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85
    });
    const hpRing = new THREE.Mesh(this.sharedGeometries.selectRing, hpRingMat);
    hpRing.position.y = 0.02;
    root.add(hpRing);

    // 2. Articulated Body Pivot
    const bodyPivot = new THREE.Group();
    const baseOffset = type === 'k' ? 0.2 : type === 'q' ? 0.17 : 0.12;
    bodyPivot.position.y = baseOffset;
    const scale = unitProf.scale || 1.0;
    bodyPivot.scale.setScalar(scale);
    root.add(bodyPivot);

    // Rig references for combat choreography
    const rig = {
      root,
      bodyPivot,
      torso: new THREE.Group(),
      head: new THREE.Group(),
      leftArm: new THREE.Group(),
      rightArm: new THREE.Group(),
      leftLeg: new THREE.Group(),
      rightLeg: new THREE.Group(),
      muzzlePoint: new THREE.Object3D(),
      bladeTip: new THREE.Object3D(),
      bladeBase: new THREE.Object3D(),
      thrusters: [],
      chainswordTeeth: [],
      orbitingShards: [],
      gatlingBarrel: null,
      hpRing,
      mats,
      baseY: baseOffset,
      baseScale: scale,
      animPhase: Math.random() * Math.PI * 2
    };

    if (type === 'r') {
      this.buildSculptedWalkerRook(rig, faction, mats);
    } else if (type === 'n' && faction === 'necrons') {
      this.buildSkorpekhDestroyer(rig, mats);
    } else {
      this.buildSculptedWarrior(rig, type, faction, mats);
    }

    root.traverse((obj) => {
      if (obj.isMesh && obj !== hpRing) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });

    root.rotation.y = side === 'w' ? 0 : Math.PI;
    root.userData.defaultRotY = root.rotation.y;
    root.userData.rig = rig;

    return root;
  }

  buildScenicBase(root, type, faction, mats) {
    const baseRim = new THREE.Mesh(this.sharedGeometries.baseCylinder, mats.baseRim);
    baseRim.position.y = 0.055;
    root.add(baseRim);

    const baseTop = new THREE.Mesh(this.sharedGeometries.baseInner, mats.baseTop);
    baseTop.position.y = 0.062;
    root.add(baseTop);

    // Textured slate rubble slabs & miniature battlefield skulls on the base
    const slabCount = type === 'k' || type === 'q' ? 3 : 2;
    for (let i = 0; i < slabCount; i++) {
      const slab = new THREE.Mesh(
        new THREE.BoxGeometry(0.28 - i * 0.05, 0.045, 0.24 - i * 0.04),
        mats.baseTop
      );
      slab.position.set((i - 0.5) * 0.08, 0.11 + i * 0.03, (i % 2 === 0 ? 1 : -1) * 0.05);
      slab.rotation.y = i * 0.7;
      root.add(slab);
    }

    // Add a tiny trophy skull on base
    const bSkull = this.createMiniSkull(mats.bone);
    bSkull.position.set(0.22, 0.13, 0.18);
    bSkull.rotation.set(-0.2, 0.5, 0.2);
    root.add(bSkull);

    if (faction === 'necrons') {
      // Glowing green Necron crystal shards growing from base
      for (let c = 0; c < 2; c++) {
        const crys = new THREE.Mesh(new THREE.ConeGeometry(0.032, 0.14, 5), mats.glow);
        crys.position.set(-0.24 + c * 0.08, 0.16, -0.18);
        crys.rotation.z = 0.25 - c * 0.4;
        root.add(crys);
      }
    }
  }

  createMiniSkull(boneMat) {
    const g = new THREE.Group();
    const cranium = new THREE.Mesh(this.sharedGeometries.skull, boneMat);
    const jaw = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.03, 0.04), boneMat);
    jaw.position.set(0, -0.025, -0.015);
    g.add(cranium, jaw);
    return g;
  }

  createPuritySeal(mats) {
    const seal = new THREE.Group();
    const wax = new THREE.Mesh(new THREE.CylinderGeometry(0.024, 0.024, 0.012, 8), mats.wax);
    wax.rotation.x = Math.PI / 2;
    seal.add(wax);
    for (const s of [-0.01, 0.01]) {
      const strip = new THREE.Mesh(new THREE.BoxGeometry(0.022, 0.09, 0.004), mats.parchment);
      strip.position.set(s, -0.045, -0.002);
      strip.rotation.z = s * 4;
      seal.add(strip);
    }
    return seal;
  }

  /**
   * High-Detail Heavy Walkers (Rooks):
   * - Ultramarines: Redemptor Dreadnought with Sarcophagus Scrollwork, 6-Barrel Gatling Cannon & Articulated Power Fist
   * - Chaos: Helbrute with Fleshy Horned Sarcophagus, Twin Multi-Melta & Crushing Scourge Hammer
   * - Orks: Deff Dread with Jagged Iron Gob, 4 Smokestacks, Kustom Mega-Blasta & Piston Klaws
   * - Necrons: Canoptek Doomstalker with Tall Tripod Struts & Overhead Doomsday Cannon
   */
  buildSculptedWalkerRook(rig, faction, mats) {
    const { bodyPivot, torso, head, leftArm, rightArm, leftLeg, rightLeg, muzzlePoint, bladeTip, bladeBase } = rig;

    // 1. Multi-jointed Hydraulic Walker Legs
    leftLeg.position.set(-0.2, 0.3, 0);
    rightLeg.position.set(0.2, 0.3, 0);

    [leftLeg, rightLeg].forEach((leg, idx) => {
      const sideSign = idx === 0 ? -1 : 1;
      // Hip hydraulic cylinder
      const hip = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.14, 10), mats.metal);
      hip.rotation.z = Math.PI / 2;
      leg.add(hip);

      // Upper thigh strut
      const thigh = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.16, 0.14), mats.darkMetal);
      thigh.position.set(0, -0.08, 0.02);
      thigh.rotation.x = -0.2;
      leg.add(thigh);

      // Heavy armored shin greave
      const greave = new THREE.Mesh(new THREE.BoxGeometry(0.17, 0.2, 0.18), mats.armor);
      greave.position.set(0, -0.19, -0.01);
      leg.add(greave);

      const kneeTrim = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.05, 0.2), mats.trim);
      kneeTrim.position.set(0, -0.11, -0.01);
      leg.add(kneeTrim);

      // Piston rod on side of leg
      const piston = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.22, 6), mats.metal);
      piston.position.set(sideSign * 0.09, -0.16, 0.06);
      leg.add(piston);

      // 3-Toed Splayed Walker Foot
      const footBase = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.06, 0.24), mats.darkMetal);
      footBase.position.set(0, -0.28, -0.03);
      leg.add(footBase);

      for (const angle of [-0.35, 0, 0.35]) {
        const toe = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.05, 0.12), mats.trim);
        toe.position.set(Math.sin(angle) * 0.08, -0.285, -0.15);
        toe.rotation.y = -angle;
        leg.add(toe);
      }

      bodyPivot.add(leg);
    });

    // Pelvis & Groin Banner
    const pelvis = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.12, 0.24), mats.darkMetal);
    pelvis.position.set(0, 0.34, 0);
    bodyPivot.add(pelvis);

    const groinPlate = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.18, 0.04), mats.cloth);
    groinPlate.position.set(0, 0.25, -0.13);
    bodyPivot.add(groinPlate);

    // 2. Massive Sarcophagus Torso
    torso.position.set(0, 0.58, 0);
    bodyPivot.add(torso);

    if (faction === 'necrons') {
      // Canoptek Doomstalker Construct
      const spine = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.18, 0.56, 10), mats.metal);
      torso.add(spine);

      // Ribbed Necrodermis Carapace
      for (let i = 0; i < 4; i++) {
        const rib = new THREE.Mesh(new THREE.TorusGeometry(0.2 - i * 0.015, 0.035, 8, 16, Math.PI), mats.armor);
        rib.position.set(0, -0.1 + i * 0.09, 0.04);
        rib.rotation.x = Math.PI / 2 + 0.2;
        torso.add(rib);
      }

      const powerCore = new THREE.Mesh(new THREE.OctahedronGeometry(0.15, 1), mats.glow);
      powerCore.position.set(0, 0.04, -0.08);
      torso.add(powerCore);
      rig.orbitingShards.push(powerCore);

      // Towering Overhead Doomsday Blaster
      const cannonHousing = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.18, 0.68), mats.armor);
      cannonHousing.position.set(0, 0.38, -0.1);
      torso.add(cannonHousing);

      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.085, 0.78, 12), mats.darkMetal);
      barrel.rotation.x = Math.PI / 2;
      barrel.position.set(0, 0.38, -0.24);
      torso.add(barrel);

      for (let r = 0; r < 5; r++) {
        const coil = new THREE.Mesh(new THREE.TorusGeometry(0.085, 0.018, 6, 14), mats.glow);
        coil.position.set(0, 0.38, -0.05 - r * 0.11);
        torso.add(coil);
      }
    } else {
      // Dreadnought / Helbrute / Deff Dread Armored Hull
      const centerHull = new THREE.Mesh(new THREE.BoxGeometry(0.58, 0.48, 0.4), mats.armor);
      torso.add(centerHull);

      // Sloped Front Armor Plates (Left & Right)
      for (const sx of [-0.19, 0.19]) {
        const plate = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.42, 0.08), mats.armor);
        plate.position.set(sx, 0, -0.2);
        plate.rotation.y = sx > 0 ? 0.15 : -0.15;
        torso.add(plate);

        const trimStrip = new THREE.Mesh(new THREE.BoxGeometry(0.19, 0.05, 0.09), mats.trim);
        trimStrip.position.set(sx, 0.16, -0.2);
        torso.add(trimStrip);
      }

      // Central Sarcophagus Coffin
      const coffin = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.34, 0.1), mats.trim);
      coffin.position.set(0, 0.02, -0.19);
      torso.add(coffin);

      // Glowing Vision Slit / Dreadnought Helmet Inside
      const visorRecess = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.07, 0.11), mats.darkMetal);
      visorRecess.position.set(0, 0.09, -0.195);
      torso.add(visorRecess);

      const visorGlow = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.032, 0.12), mats.eyes);
      visorGlow.position.set(0, 0.09, -0.198);
      torso.add(visorGlow);

      // Twin Reactor Smokestacks on Back
      for (const sx of [-0.16, 0.16]) {
        const boiler = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.09, 0.34, 10), mats.darkMetal);
        boiler.position.set(sx, 0.04, 0.24);
        torso.add(boiler);

        const stack = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.045, 0.32, 8), mats.metal);
        stack.position.set(sx, 0.28, 0.24);
        torso.add(stack);

        const brazierTop = new THREE.Mesh(new THREE.CylinderGeometry(0.052, 0.04, 0.05, 8), mats.trim);
        brazierTop.position.set(sx, 0.44, 0.24);
        torso.add(brazierTop);
      }

      if (faction === 'ultramarines') {
        const seal = this.createPuritySeal(mats);
        seal.position.set(-0.2, -0.05, -0.25);
        torso.add(seal);
      } else if (faction === 'chaos') {
        // Chaos Horned Tusk Frame & Spikes
        for (const sx of [-0.22, -0.08, 0.08, 0.22]) {
          const spike = new THREE.Mesh(new THREE.ConeGeometry(0.032, 0.24, 6), mats.trim);
          spike.position.set(sx, 0.34, -0.04);
          spike.rotation.z = -sx * 0.6;
          torso.add(spike);
        }
      } else if (faction === 'orks') {
        // Deff Dread Jagged Iron Jaw & Big Horns
        const jaw = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.14, 0.16), mats.metal);
        jaw.position.set(0, -0.14, -0.23);
        torso.add(jaw);
        for (let t = -2; t <= 2; t++) {
          const tooth = new THREE.Mesh(new THREE.ConeGeometry(0.032, 0.09, 4), mats.bone);
          tooth.position.set(t * 0.075, -0.05, -0.28);
          torso.add(tooth);
        }
      }
    }

    torso.add(head);

    // 3. Left Arm: 6-Barrel Rotating Gatling / Multi-Melta / Mega-Blasta
    leftArm.position.set(-0.38, 0.06, 0);
    torso.add(leftArm);

    const lHousing = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.24, 0.28), mats.armor);
    leftArm.add(lHousing);
    const lTrim = new THREE.Mesh(new THREE.BoxGeometry(0.21, 0.06, 0.29), mats.trim);
    lTrim.position.y = 0.09;
    leftArm.add(lTrim);

    const gatlingGroup = new THREE.Group();
    gatlingGroup.position.set(-0.02, -0.06, -0.26);
    leftArm.add(gatlingGroup);
    rig.gatlingBarrel = gatlingGroup;

    // 6 Individual Rotating Barrels!
    for (let b = 0; b < 6; b++) {
      const ang = (b / 6) * Math.PI * 2;
      const bMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.44, 6), mats.metal);
      bMesh.rotation.x = Math.PI / 2;
      bMesh.position.set(Math.cos(ang) * 0.048, Math.sin(ang) * 0.048, 0);
      gatlingGroup.add(bMesh);
    }
    const clampRing = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.05, 12), mats.trim);
    clampRing.rotation.x = Math.PI / 2;
    clampRing.position.z = -0.16;
    gatlingGroup.add(clampRing);

    const muzzleGlow = new THREE.Mesh(new THREE.SphereGeometry(0.045, 8, 8), mats.glow);
    muzzleGlow.position.set(-0.02, -0.06, -0.49);
    leftArm.add(muzzleGlow);

    muzzlePoint.position.set(-0.02, -0.06, -0.54);
    leftArm.add(muzzlePoint);

    // 4. Right Arm: Articulated 4-Fingered Dreadnought Power Fist / Crushing Klaw
    rightArm.position.set(0.38, 0.06, 0);
    torso.add(rightArm);

    const rHousing = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.24, 0.28), mats.armor);
    rightArm.add(rHousing);

    const forearm = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.2, 0.34), mats.armor);
    forearm.position.set(0.03, -0.08, -0.18);
    rightArm.add(forearm);

    const wristTrim = new THREE.Mesh(new THREE.BoxGeometry(0.23, 0.21, 0.06), mats.trim);
    wristTrim.position.set(0.03, -0.08, -0.32);
    rightArm.add(wristTrim);

    // 4 Energy Claws / Hydraulic Fingers
    for (const [fx, fy] of [[-0.06, 0.06], [0.06, 0.06], [-0.06, -0.06], [0.06, -0.06]]) {
      const claw = new THREE.Mesh(new THREE.ConeGeometry(0.032, 0.18, 4), mats.glow);
      claw.rotation.x = -Math.PI / 2;
      claw.position.set(0.03 + fx, -0.08 + fy, -0.43);
      rightArm.add(claw);
    }

    bladeBase.position.set(0.03, -0.08, -0.25);
    bladeTip.position.set(0.03, -0.08, -0.52);
    rightArm.add(bladeBase, bladeTip);
  }

  /**
   * Necron Skorpekh Destroyer (Knight):
   * Authentic Tripod Cyber-Arachnid Lower Body + Twin Hyperphase Reap-Blades!
   */
  buildSkorpekhDestroyer(rig, mats) {
    const { bodyPivot, torso, head, leftArm, rightArm, leftLeg, rightLeg, muzzlePoint, bladeTip, bladeBase } = rig;

    // Tripod Stalking Legs
    const angles = [-0.7, 0.7, Math.PI];
    angles.forEach((ang, idx) => {
      const legHolder = idx === 0 ? leftLeg : idx === 1 ? rightLeg : new THREE.Group();
      if (idx === 2) bodyPivot.add(legHolder);
      else bodyPivot.add(legHolder);

      legHolder.position.set(Math.sin(ang) * 0.14, 0.26, Math.cos(ang) * 0.12);

      const upper = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.025, 0.24, 6), mats.metal);
      upper.position.set(Math.sin(ang) * 0.08, 0.02, Math.cos(ang) * 0.08);
      upper.rotation.z = -Math.sin(ang) * 0.6;
      legHolder.add(upper);

      const lower = new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.32, 6), mats.armor);
      lower.rotation.x = Math.PI;
      lower.position.set(Math.sin(ang) * 0.16, -0.14, Math.cos(ang) * 0.16);
      legHolder.add(lower);
    });

    // Pelvis Core
    const core = new THREE.Mesh(new THREE.SphereGeometry(0.1, 10, 10), mats.glow);
    core.position.set(0, 0.28, 0);
    bodyPivot.add(core);

    // Torso
    torso.position.set(0, 0.46, 0);
    bodyPivot.add(torso);
    this.buildDetailedTorsoAndHead(rig, 'n', 'necrons', mats);

    // Twin Hyperphase Reap-Blades on Left & Right Arms
    leftArm.position.set(-0.24, 0.1, 0);
    rightArm.position.set(0.24, 0.1, 0);
    torso.add(leftArm, rightArm);

    [leftArm, rightArm].forEach((arm, idx) => {
      const s = idx === 0 ? -1 : 1;
      const pauldron = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.14, 0.18), mats.trim);
      arm.add(pauldron);

      const strut = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.24, 6), mats.metal);
      strut.position.set(s * 0.04, -0.1, -0.1);
      strut.rotation.x = 0.7;
      arm.add(strut);

      // Massive Glowing Green Hyperphase Scythe Blade
      const reapBlade = new THREE.Mesh(new THREE.BoxGeometry(0.024, 0.46, 0.14), mats.glow);
      reapBlade.position.set(s * 0.04, -0.12, -0.28);
      reapBlade.rotation.x = Math.PI / 3;
      arm.add(reapBlade);

      const spine = new THREE.Mesh(new THREE.BoxGeometry(0.032, 0.44, 0.05), mats.darkMetal);
      spine.position.set(s * 0.04, -0.11, -0.24);
      spine.rotation.x = Math.PI / 3;
      arm.add(spine);
    });

    muzzlePoint.position.set(0, -0.12, -0.45);
    leftArm.add(muzzlePoint);
    bladeBase.position.set(0.04, -0.05, -0.18);
    bladeTip.position.set(0.04, -0.25, -0.48);
    rightArm.add(bladeBase, bladeTip);
  }

  /**
   * Intricate Anatomical & Armored Warriors (Pawns, Knights, Bishops, Queens, Kings)
   */
  buildSculptedWarrior(rig, type, faction, mats) {
    const { bodyPivot, torso, leftArm, rightArm, leftLeg, rightLeg } = rig;

    // 1. Sculpted Multi-Part Legs (Thighs, Knee Pads, Flared Greaves, Sabatons)
    leftLeg.position.set(-0.115, 0.3, 0);
    rightLeg.position.set(0.115, 0.3, 0);

    [leftLeg, rightLeg].forEach((leg) => {
      if (faction === 'necrons') {
        const thigh = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.028, 0.14, 8), mats.metal);
        thigh.position.y = -0.05;
        const knee = new THREE.Mesh(new THREE.SphereGeometry(0.038, 8, 8), mats.trim);
        knee.position.y = -0.12;
        const shin = new THREE.Mesh(new THREE.CylinderGeometry(0.038, 0.025, 0.16, 8), mats.armor);
        shin.position.y = -0.2;
        const foot = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.05, 0.16), mats.metal);
        foot.position.set(0, -0.27, -0.03);
        leg.add(thigh, knee, shin, foot);
      } else {
        // Thigh armor (Cuisse)
        const thigh = new THREE.Mesh(new THREE.CylinderGeometry(0.068, 0.062, 0.14, 10), mats.armorSecondary);
        thigh.position.y = -0.05;
        // Sculpted Knee-Pad (Poleyn) with trim rim
        const kneePad = new THREE.Mesh(new THREE.SphereGeometry(0.058, 8, 8), mats.trim);
        kneePad.position.set(0, -0.12, -0.035);
        kneePad.scale.set(1.1, 1.0, 0.7);
        // Flared Astartes/Chaos/Ork Lower Greave
        const greave = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.085, 0.16, 10), mats.armor);
        greave.position.y = -0.2;
        // Heavy Armored Boot (Sabaton)
        const boot = new THREE.Mesh(new THREE.BoxGeometry(0.115, 0.075, 0.2), mats.darkMetal);
        boot.position.set(0, -0.265, -0.035);
        const toeCap = new THREE.Mesh(new THREE.SphereGeometry(0.058, 8, 8), mats.armor);
        toeCap.position.set(0, -0.265, -0.11);
        toeCap.scale.set(1, 0.65, 1);

        leg.add(thigh, kneePad, greave, boot, toeCap);
      }
      bodyPivot.add(leg);
    });

    // Segmented Waist & Belt with Buckle & Grenades
    const waist = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.135, 0.1, 10), mats.darkMetal);
    waist.position.set(0, 0.33, 0);
    bodyPivot.add(waist);

    const beltBuckle = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.065, 0.04), mats.trim);
    beltBuckle.position.set(0, 0.33, -0.13);
    bodyPivot.add(beltBuckle);

    // 2. Detailed Torso, Chest Heraldry, Head/Helmet & Backpack
    torso.position.set(0, 0.48, 0);
    bodyPivot.add(torso);
    this.buildDetailedTorsoAndHead(rig, type, faction, mats);

    // 3. Layered Oversized Pauldrons, Arms & Iconic Weapons
    const shoulderX = type === 'k' || type === 'q' ? 0.23 : 0.195;
    leftArm.position.set(-shoulderX, 0.1, 0);
    rightArm.position.set(shoulderX, 0.1, 0);
    torso.add(leftArm, rightArm);

    this.buildPauldronAndArm(leftArm, -1, type, faction, mats);
    this.buildPauldronAndArm(rightArm, 1, type, faction, mats);

    this.attachWeapons(rig, type, faction, mats);
  }

  buildDetailedTorsoAndHead(rig, type, faction, mats) {
    const { torso, head, thrusters } = rig;
    const isHeavy = type === 'k' || type === 'q';
    const chestW = isHeavy ? 0.34 : 0.28;

    // Main Plastron Chestplate
    const chest = new THREE.Mesh(new THREE.BoxGeometry(chestW, 0.28, 0.21), mats.armor);
    torso.add(chest);

    // High Gorget Collar (Terminator / Mk X)
    const gorget = new THREE.Mesh(
      new THREE.CylinderGeometry(0.11, 0.125, 0.08, 12, 1, true, -Math.PI * 0.75, Math.PI * 1.5),
      mats.trim
    );
    gorget.position.set(0, 0.15, 0.01);
    torso.add(gorget);

    // Faction-Specific Sculpted Chest Relief!
    if (faction === 'ultramarines') {
      // Sculpted Golden Imperial Aquila (Central Skull + Left/Right Feathered Wings)
      const aqCenter = this.createMiniSkull(mats.trim);
      aqCenter.position.set(0, 0.04, -0.115);
      torso.add(aqCenter);
      for (const sx of [-1, 1]) {
        for (let f = 0; f < 3; f++) {
          const feather = new THREE.Mesh(new THREE.BoxGeometry(0.09 - f * 0.02, 0.024, 0.025), mats.trim);
          feather.position.set(sx * (0.065 + f * 0.01), 0.055 - f * 0.026, -0.11);
          feather.rotation.z = sx * (0.22 - f * 0.08);
          torso.add(feather);
        }
      }
      // Purity Seal on chest
      const seal = this.createPuritySeal(mats);
      seal.position.set(-0.09, -0.04, -0.115);
      torso.add(seal);
    } else if (faction === 'chaos') {
      // Chaos 8-Pointed Star & Brass Ribbing on Chest
      for (let a = 0; a < 4; a++) {
        const ray = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.022, 0.025), mats.trim);
        ray.position.set(0, 0.03, -0.11);
        ray.rotation.z = (a * Math.PI) / 4;
        torso.add(ray);
      }
      const eyeGem = new THREE.Mesh(new THREE.SphereGeometry(0.03, 8, 8), mats.glow);
      eyeGem.position.set(0, 0.03, -0.12);
      torso.add(eyeGem);
    } else if (faction === 'orks') {
      // Checkered Iron Bosspole Plate & Crossed Bullet Bandoliers
      const ironPlate = new THREE.Mesh(new THREE.BoxGeometry(chestW * 0.85, 0.14, 0.04), mats.metal);
      ironPlate.position.set(0, 0.03, -0.1);
      torso.add(ironPlate);
      const glyph = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.1, 4), mats.trim);
      glyph.position.set(0, 0.03, -0.13);
      glyph.rotation.x = Math.PI / 2;
      torso.add(glyph);
    } else if (faction === 'necrons') {
      // Glowing Green Recessed Ribcage & Pharaonic Ankh
      for (let r = -1; r <= 1; r++) {
        const ribGlow = new THREE.Mesh(new THREE.BoxGeometry(0.19, 0.024, 0.22), mats.glow);
        ribGlow.position.set(0, 0.03 + r * 0.055, 0);
        torso.add(ribGlow);
      }
      const ankh = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.16, 0.23), mats.trim);
      ankh.position.set(0, 0.02, 0);
      torso.add(ankh);
    }

    // Tabard & Flowing Commander Mantle
    if (type === 'b' || type === 'q' || type === 'k') {
      const tabard = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.3, 0.025), mats.parchment);
      tabard.position.set(0, -0.22, -0.115);
      torso.add(tabard);
    }
    if (isHeavy || type === 'b') {
      // Multi-pleated sweeping cape
      const capeGroup = new THREE.Group();
      capeGroup.position.set(0, 0.1, 0.12);
      capeGroup.rotation.x = 0.22;
      for (let p = -1; p <= 1; p++) {
        const fold = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.54, 0.028), mats.cloth);
        fold.position.set(p * 0.12, -0.24, Math.abs(p) * -0.02);
        fold.rotation.y = p * 0.18;
        capeGroup.add(fold);
      }
      torso.add(capeGroup);
    }

    // 3. Detailed Sculpted Helmet / Head
    head.position.set(0, 0.22, -0.01);
    torso.add(head);

    if (faction === 'orks') {
      // Hulking Greenskin Head + Heavy Iron Gob (Jaw) + Tusks
      const cranium = new THREE.Mesh(new THREE.SphereGeometry(0.1, 10, 10), mats.skin);
      head.add(cranium);
      const brow = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.04, 0.09), mats.skin);
      brow.position.set(0, 0.035, -0.065);
      head.add(brow);
      // Iron Gob Jawplate
      const gob = new THREE.Mesh(new THREE.BoxGeometry(0.145, 0.075, 0.11), mats.metal);
      gob.position.set(0, -0.045, -0.065);
      head.add(gob);
      // Protruding Ivory Tusks
      for (const tx of [-0.048, 0.048]) {
        const tusk = new THREE.Mesh(new THREE.ConeGeometry(0.02, 0.075, 5), mats.bone);
        tusk.position.set(tx, -0.005, -0.115);
        tusk.rotation.x = 0.2;
        head.add(tusk);
      }
      // Horned Ork Boss Helm
      const helmCap = new THREE.Mesh(new THREE.SphereGeometry(0.104, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.5), mats.darkMetal);
      head.add(helmCap);
      const topSpike = new THREE.Mesh(new THREE.ConeGeometry(0.025, 0.11, 6), mats.metal);
      topSpike.position.set(0, 0.14, 0);
      head.add(topSpike);
    } else if (faction === 'necrons') {
      // Elongated Necron Deathmask Skull + Mandible + Pharaonic Headdress
      const skullTop = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.065, 0.14, 8), mats.trim);
      skullTop.position.y = 0.02;
      head.add(skullTop);
      const jawBar = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.06, 0.08), mats.metal);
      jawBar.position.set(0, -0.055, -0.03);
      head.add(jawBar);
      if (isHeavy || type === 'b') {
        const crest = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.18, 0.035), mats.trim);
        crest.position.set(0, 0.13, 0.02);
        head.add(crest);
        const crestGlow = new THREE.Mesh(new THREE.SphereGeometry(0.035, 8, 8), mats.glow);
        crestGlow.position.set(0, 0.15, -0.01);
        head.add(crestGlow);
      }
    } else {
      // Adeptus Astartes Mk X / Chaos Heretic Helmet with Angled Respirator Faceplate
      const dome = new THREE.Mesh(new THREE.SphereGeometry(0.102, 12, 12), mats.armor);
      head.add(dome);
      // Top Helmet Crest Ridge
      const ridge = new THREE.Mesh(new THREE.BoxGeometry(0.038, 0.045, 0.17), mats.trim);
      ridge.position.set(0, 0.085, 0);
      head.add(ridge);
      // Angled Vox-Respirator Snout
      const faceplate = new THREE.Mesh(new THREE.ConeGeometry(0.078, 0.11, 4), mats.armor);
      faceplate.rotation.x = -Math.PI / 2;
      faceplate.rotation.z = Math.PI / 4;
      faceplate.position.set(0, -0.025, -0.075);
      head.add(faceplate);
      // Ear Pods
      for (const ex of [-0.098, 0.098]) {
        const ear = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.03, 8), mats.metal);
        ear.rotation.z = Math.PI / 2;
        ear.position.set(ex, -0.01, 0);
        head.add(ear);
      }

      if (faction === 'chaos') {
        // Sweeping Curved Ceramite Chaos Horns
        for (const sx of [-1, 1]) {
          const hornBase = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.032, 0.1, 6), mats.bone);
          hornBase.position.set(sx * 0.095, 0.05, -0.01);
          hornBase.rotation.z = -sx * 0.85;
          head.add(hornBase);

          const hornTip = new THREE.Mesh(new THREE.ConeGeometry(0.022, 0.14, 6), mats.bone);
          hornTip.position.set(sx * 0.14, 0.12, -0.03);
          hornTip.rotation.z = -sx * 0.25;
          hornTip.rotation.x = 0.3;
          head.add(hornTip);
        }
        // Abaddon Topknot on Champions/King
        if (isHeavy) {
          const knotMount = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.028, 0.07, 6), mats.trim);
          knotMount.position.set(0, 0.13, 0);
          const plume = new THREE.Mesh(new THREE.ConeGeometry(0.055, 0.2, 8), mats.cloth);
          plume.position.set(0, 0.24, 0.02);
          plume.rotation.x = -0.25;
          head.add(knotMount, plume);
        }
      } else if (faction === 'ultramarines' && isHeavy) {
        // Roman Centurion Transverse Crest Plume!
        const crestArc = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.11, 0.035), mats.cloth);
        crestArc.position.set(0, 0.15, 0);
        const crestBase = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.03, 0.045), mats.trim);
        crestBase.position.set(0, 0.1, 0);
        head.add(crestArc, crestBase);
      }
    }

    // Glowing Recessed Eye Lenses
    for (const ex of [-0.038, 0.038]) {
      const lens = new THREE.Mesh(new THREE.BoxGeometry(0.034, 0.018, 0.035), mats.eyes);
      lens.position.set(ex, 0.012, -0.092);
      lens.rotation.z = ex > 0 ? -0.15 : 0.15;
      head.add(lens);
    }

    // Psychic Hood for Bishops
    if (type === 'b') {
      const hood = new THREE.Mesh(
        new THREE.SphereGeometry(0.135, 12, 10, 0, Math.PI * 2, 0, Math.PI * 0.55),
        mats.trim
      );
      hood.position.set(0, 0.02, 0.025);
      hood.rotation.x = -0.35;
      head.add(hood);
    }

    // 4. Sculpted Backpacks, Jump Turbines, Iron Halos & Trophy Racks
    if (type === 'n') {
      // Jump Pack / Stormboy Rokkit
      if (faction === 'orks') {
        const rokkit = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.11, 0.44, 12), mats.trim);
        rokkit.position.set(0, 0.08, 0.16);
        const nose = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.18, 12), mats.hazard);
        nose.position.set(0, 0.39, 0.16);
        const nozzle = new THREE.Mesh(new THREE.SphereGeometry(0.075, 8, 8), mats.glow);
        nozzle.position.set(0, -0.15, 0.16);
        torso.add(rokkit, nose, nozzle);
        thrusters.push(nozzle);
      } else {
        for (const tx of [-0.12, 0.12]) {
          const turbine = new THREE.Mesh(new THREE.CylinderGeometry(0.088, 0.075, 0.38, 12), mats.armor);
          turbine.position.set(tx, 0.09, 0.15);
          const intakeRim = new THREE.Mesh(new THREE.TorusGeometry(0.088, 0.016, 6, 12), mats.trim);
          intakeRim.rotation.x = Math.PI / 2;
          intakeRim.position.set(tx, 0.27, 0.15);
          const nozzle = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 8), mats.glow);
          nozzle.position.set(tx, -0.11, 0.15);
          torso.add(turbine, intakeRim, nozzle);
          thrusters.push(nozzle);
        }
      }
    } else if (faction !== 'necrons') {
      // Iconic Astartes / Chaos Power Pack with Twin Stabilizer Vents
      const packMain = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.25, 0.13), mats.armor);
      packMain.position.set(0, 0.04, 0.14);
      torso.add(packMain);

      for (const vx of [-0.12, 0.12]) {
        const ventArm = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.032, 0.12, 8), mats.metal);
        ventArm.position.set(vx, 0.16, 0.14);
        ventArm.rotation.z = vx > 0 ? -0.45 : 0.45;
        const ventSphere = new THREE.Mesh(new THREE.SphereGeometry(0.052, 10, 10), mats.trim);
        ventSphere.position.set(vx * 1.25, 0.21, 0.14);
        torso.add(ventArm, ventSphere);
      }
    }

    // Commander Iron Halo / Trophy Racks / Bosspole / Pharaonic Orb
    if (isHeavy) {
      const hY = type === 'k' ? 0.32 : 0.26;
      if (faction === 'ultramarines') {
        const haloRing = new THREE.Mesh(new THREE.TorusGeometry(0.13, 0.02, 8, 20), mats.trim);
        haloRing.position.set(0, hY, 0.11);
        torso.add(haloRing);
        for (let s = 0; s < 7; s++) {
          const ang = (s / 6) * Math.PI - Math.PI / 2;
          const spike = new THREE.Mesh(new THREE.ConeGeometry(0.016, 0.08, 4), mats.trim);
          spike.position.set(Math.sin(ang) * 0.16, hY + Math.cos(ang) * 0.16, 0.11);
          spike.rotation.z = -ang;
          torso.add(spike);
        }
      } else if (faction === 'chaos') {
        for (const rx of [-0.11, 0.11]) {
          const pike = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.018, 0.34, 6), mats.metal);
          pike.position.set(rx, hY, 0.12);
          pike.rotation.z = rx * -0.8;
          const trophySkull = this.createMiniSkull(mats.bone);
          trophySkull.position.set(rx * 1.15, hY + 0.12, 0.12);
          torso.add(pike, trophySkull);
        }
      } else if (faction === 'orks') {
        const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.38, 8), mats.metal);
        pole.position.set(0, hY, 0.12);
        const jawTotem = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.12, 0.05), mats.trim);
        jawTotem.position.set(0, hY + 0.16, 0.12);
        torso.add(pole, jawTotem);
      } else if (faction === 'necrons') {
        const spineArc = new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.022, 8, 16, Math.PI), mats.trim);
        spineArc.position.set(0, hY - 0.04, 0.08);
        const resOrb = new THREE.Mesh(new THREE.SphereGeometry(0.068, 12, 12), mats.glow);
        resOrb.position.set(0, hY + 0.04, 0.08);
        torso.add(spineArc, resOrb);
      }
    }
  }

  buildPauldronAndArm(armGroup, sideSign, type, faction, mats) {
    // Double-layered Curved Citadel Pauldron
    const pScale = type === 'k' || type === 'q' ? 1.15 : 1.0;
    const pauldronDome = new THREE.Mesh(
      new THREE.SphereGeometry(0.115 * pScale, 12, 10, 0, Math.PI * 2, 0, Math.PI * 0.62),
      mats.armor
    );
    pauldronDome.position.y = 0.025;
    pauldronDome.rotation.z = sideSign * -0.25;
    armGroup.add(pauldronDome);

    // Raised Gold/Brass Trim Rim around Pauldron
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.108 * pScale, 0.02, 8, 16), mats.trim);
    rim.rotation.x = Math.PI / 2;
    rim.rotation.y = sideSign * -0.25;
    armGroup.add(rim);

    // Pauldron Studs / Spikes
    if (faction === 'chaos' || faction === 'orks') {
      const spike = new THREE.Mesh(new THREE.ConeGeometry(0.024, 0.11, 6), mats.trim);
      spike.position.set(sideSign * 0.06, 0.13, 0);
      spike.rotation.z = sideSign * -0.4;
      armGroup.add(spike);
    }

    // Upper Arm & Vambrace Forearm
    const vambrace = new THREE.Mesh(
      new THREE.CylinderGeometry(0.052, 0.046, 0.22, 8),
      faction === 'orks' ? mats.skin : mats.armor
    );
    vambrace.position.set(0, -0.1, -0.065);
    vambrace.rotation.x = Math.PI / 3;
    armGroup.add(vambrace);

    const cuff = new THREE.Mesh(new THREE.CylinderGeometry(0.056, 0.056, 0.05, 8), mats.trim);
    cuff.position.set(0, -0.15, -0.12);
    cuff.rotation.x = Math.PI / 3;
    armGroup.add(cuff);
  }

  attachWeapons(rig, type, faction, mats) {
    const { leftArm, rightArm, muzzlePoint, bladeTip, bladeBase } = rig;

    // 1. LEFT HAND WEAPON (Bolter / Gauss Flayer / Dispersion Shield / Gauntlet)
    if (type === 'q' && (faction === 'necrons' || faction === 'ultramarines')) {
      // Ornate Crux Terminatus / Dispersion Tower Shield!
      const shield = new THREE.Group();
      shield.position.set(-0.06, -0.12, -0.16);
      const plate = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.42, 0.26), mats.armor);
      const border = new THREE.Mesh(new THREE.BoxGeometry(0.042, 0.45, 0.28), mats.trim);
      border.position.x = 0.005;
      const boss = new THREE.Mesh(new THREE.OctahedronGeometry(0.055, 0), mats.glow);
      boss.position.x = -0.025;
      shield.add(plate, border, boss);
      leftArm.add(shield);

      muzzlePoint.position.set(0, -0.12, -0.34);
      leftArm.add(muzzlePoint);
    } else {
      // Sculpted Bolt Rifle / Gauss Flayer / Slugga with Magazine, Barrel Shroud & Scope
      const gunGroup = new THREE.Group();
      gunGroup.position.set(0, -0.14, -0.22);
      leftArm.add(gunGroup);

      const isGauss = faction === 'necrons';
      const receiverLen = isGauss ? 0.36 : 0.26;

      // Receiver Body
      const receiver = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.095, receiverLen), mats.darkMetal);
      gunGroup.add(receiver);

      // Faction Casing Side-Plates
      const casing = new THREE.Mesh(
        new THREE.BoxGeometry(0.062, 0.065, receiverLen * 0.75),
        faction === 'chaos' ? mats.trim : mats.armor
      );
      casing.position.y = 0.01;
      gunGroup.add(casing);

      // Curved Sickle Magazine (or Gauss Underslung Rod)
      if (isGauss) {
        const gaussRod = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.3, 8), mats.glow);
        gaussRod.rotation.x = Math.PI / 2;
        gaussRod.position.set(0, -0.03, -0.04);
        const bayonet = new THREE.Mesh(new THREE.BoxGeometry(0.015, 0.08, 0.16), mats.trim);
        bayonet.position.set(0, -0.06, -0.18);
        gunGroup.add(gaussRod, bayonet);
      } else {
        const mag = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.11, 0.055), mats.metal);
        mag.position.set(0, -0.08, -0.03);
        mag.rotation.x = 0.25;
        const scope = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.11, 8), mats.metal);
        scope.rotation.x = Math.PI / 2;
        scope.position.set(0, 0.065, 0);
        const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.1, 8), mats.metal);
        barrel.rotation.x = Math.PI / 2;
        barrel.position.set(0, 0.015, -receiverLen * 0.5 - 0.03);
        gunGroup.add(mag, scope, barrel);
      }

      muzzlePoint.position.set(0, -0.13, -0.22 - receiverLen * 0.65);
      leftArm.add(muzzlePoint);
    }

    // 2. RIGHT HAND MELEE / PSYCHIC WEAPON
    if (type === 'b') {
      // Ornate Psychic Force Stave / Weirdboy Totem / Cryptek Staff of Light
      const staffGroup = new THREE.Group();
      staffGroup.position.set(0, 0.04, -0.18);
      staffGroup.rotation.x = 0.18;
      rightArm.add(staffGroup);

      const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.024, 0.86, 8), mats.trim);
      staffGroup.add(shaft);

      // Ornate Halo Headpiece + Floating Psychic Crystal
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.016, 8, 16), mats.trim);
      ring.position.y = 0.45;
      const crystal = new THREE.Mesh(new THREE.OctahedronGeometry(0.065, 0), mats.glow);
      crystal.position.y = 0.45;
      staffGroup.add(ring, crystal);
      rig.orbitingShards.push(crystal);

      muzzlePoint.position.set(0, 0.48, -0.26);
      bladeBase.position.set(0, 0.1, -0.2);
      bladeTip.position.set(0, 0.5, -0.28);
      rightArm.add(muzzlePoint, bladeBase, bladeTip);
    } else if (type === 'k' && (faction === 'ultramarines' || faction === 'orks')) {
      // Gauntlets of Ultramar / Warboss Mega-Klaw!
      const klawGroup = new THREE.Group();
      klawGroup.position.set(0, -0.14, -0.2);
      rightArm.add(klawGroup);

      const gauntletBody = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.16, 0.28), mats.armor);
      const goldTrim = new THREE.Mesh(new THREE.BoxGeometry(0.17, 0.17, 0.08), mats.trim);
      goldTrim.position.z = -0.08;
      klawGroup.add(gauntletBody, goldTrim);

      for (let f = -1; f <= 1; f++) {
        const blade = new THREE.Mesh(new THREE.ConeGeometry(0.028, 0.18, 4), mats.glow);
        blade.rotation.x = -Math.PI / 2;
        blade.position.set(f * 0.045, 0.02, -0.21);
        klawGroup.add(blade);
      }

      bladeBase.position.set(0, -0.14, -0.18);
      bladeTip.position.set(0, -0.14, -0.44);
      rightArm.add(bladeBase, bladeTip);
    } else if (faction === 'necrons' && (type === 'q' || type === 'k')) {
      // Necron Warscythe / Voidscythe!
      const scytheGroup = new THREE.Group();
      scytheGroup.position.set(0, 0.02, -0.2);
      scytheGroup.rotation.x = 0.35;
      rightArm.add(scytheGroup);

      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.022, 0.84, 8), mats.metal);
      const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.032, 0.12, 8), mats.trim);
      collar.position.y = 0.32;
      // Curved Scythe Energy Blade
      const scytheBlade = new THREE.Mesh(new THREE.BoxGeometry(0.022, 0.34, 0.16), mats.glow);
      scytheBlade.position.set(0, 0.38, -0.09);
      scytheBlade.rotation.x = -0.55;
      scytheGroup.add(pole, collar, scytheBlade);

      bladeBase.position.set(0, 0.1, -0.22);
      bladeTip.position.set(0, 0.46, -0.38);
      rightArm.add(bladeBase, bladeTip);
    } else {
      // Sculpted Chainsword / Chainaxe / Choppa / Relic Power Sword!
      const swordGroup = new THREE.Group();
      swordGroup.position.set(0, -0.15, -0.16);
      swordGroup.rotation.x = Math.PI / 4;
      rightArm.add(swordGroup);

      // Grip & Crossguard
      const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.022, 0.15, 8), mats.darkMetal);
      const pommel = new THREE.Mesh(new THREE.SphereGeometry(0.028, 8, 8), mats.trim);
      pommel.position.y = -0.08;
      const crossguard = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.032, 0.055), mats.trim);
      crossguard.position.y = 0.075;
      swordGroup.add(grip, pommel, crossguard);

      const isPowerSword = type === 'q' || type === 'k' || type === 'n';
      const bladeLen = type === 'q' || type === 'k' ? 0.54 : 0.42;

      if (isPowerSword) {
        // Blazing Relic Power Blade with fuller & power-node
        const blade = new THREE.Mesh(new THREE.BoxGeometry(0.02, bladeLen, 0.075), mats.glow);
        blade.position.y = 0.08 + bladeLen * 0.5;
        const fuller = new THREE.Mesh(new THREE.BoxGeometry(0.026, bladeLen * 0.75, 0.025), mats.trim);
        fuller.position.y = 0.08 + bladeLen * 0.4;
        swordGroup.add(blade, fuller);
      } else if (faction === 'chaos' || faction === 'orks') {
        // Brutal Chainaxe / Jagged Ork Choppa!
        const haft = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, bladeLen, 8), mats.metal);
        haft.position.y = 0.08 + bladeLen * 0.5;
        const axeHead = new THREE.Mesh(new THREE.BoxGeometry(0.028, 0.22, 0.16), mats.armor);
        axeHead.position.set(0, 0.08 + bladeLen * 0.72, -0.06);
        const axeEdge = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.24, 0.05), mats.metal);
        axeEdge.position.set(0, 0.08 + bladeLen * 0.72, -0.14);
        swordGroup.add(haft, axeHead, axeEdge);

        // Individual Saw Teeth along the Chainaxe edge!
        for (let t = 0; t < 6; t++) {
          const tooth = new THREE.Mesh(new THREE.ConeGeometry(0.016, 0.038, 4), mats.trim);
          tooth.rotation.x = -Math.PI / 2;
          tooth.position.set(0, 0.08 + bladeLen * 0.52 + t * 0.038, -0.165);
          swordGroup.add(tooth);
          rig.chainswordTeeth.push(tooth);
        }
      } else {
        // Iconic Astartes Chainsword with Motor Housing & Individual Saw-Teeth!
        const shroud = new THREE.Mesh(new THREE.BoxGeometry(0.034, bladeLen, 0.068), mats.armor);
        shroud.position.y = 0.08 + bladeLen * 0.5;
        const spine = new THREE.Mesh(new THREE.BoxGeometry(0.038, bladeLen * 0.95, 0.025), mats.trim);
        spine.position.set(0, 0.08 + bladeLen * 0.5, 0.025);
        swordGroup.add(shroud, spine);

        for (let t = 0; t < 8; t++) {
          const tooth = new THREE.Mesh(new THREE.ConeGeometry(0.015, 0.035, 4), mats.metal);
          tooth.rotation.x = -Math.PI / 2;
          tooth.position.set(0, 0.12 + t * 0.045, -0.045);
          swordGroup.add(tooth);
          rig.chainswordTeeth.push(tooth);
        }
      }

      bladeBase.position.set(0, -0.08, -0.22);
      bladeTip.position.set(0, 0.24, -0.52);
      rightArm.add(bladeBase, bladeTip);
    }
  }
}
