import * as THREE from 'three';
import { FACTIONS } from '../data/factions.js';

export class UnitFactory {
  constructor() {
    this.sharedGeometries = {
      baseCylinder: new THREE.CylinderGeometry(0.42, 0.48, 0.12, 24),
      baseInner: new THREE.CylinderGeometry(0.38, 0.38, 0.13, 20),
      selectRing: new THREE.RingGeometry(0.49, 0.56, 32)
    };
    this.sharedGeometries.selectRing.rotateX(-Math.PI / 2);
  }

  createMaterials(factionKey) {
    const f = FACTIONS[factionKey];
    return {
      armor: new THREE.MeshStandardMaterial({
        color: new THREE.Color(f.themeColor),
        roughness: factionKey === 'necrons' ? 0.3 : 0.42,
        metalness: factionKey === 'necrons' ? 0.85 : 0.55
      }),
      trim: new THREE.MeshStandardMaterial({
        color: new THREE.Color(f.accentColor),
        roughness: 0.28,
        metalness: 0.88
      }),
      metal: new THREE.MeshStandardMaterial({
        color: new THREE.Color(f.metalColor),
        roughness: 0.38,
        metalness: 0.82
      }),
      darkMetal: new THREE.MeshStandardMaterial({
        color: 0x1e2226,
        roughness: 0.5,
        metalness: 0.75
      }),
      cloth: new THREE.MeshStandardMaterial({
        color: new THREE.Color(f.clothColor),
        roughness: 0.8,
        metalness: 0.1,
        side: THREE.DoubleSide
      }),
      skin: new THREE.MeshStandardMaterial({
        color: new THREE.Color(f.skinColor || '#d2a679'),
        roughness: 0.65,
        metalness: 0.05
      }),
      glow: new THREE.MeshStandardMaterial({
        color: new THREE.Color(f.glowColor),
        emissive: new THREE.Color(f.glowColor),
        emissiveIntensity: 2.2,
        roughness: 0.2
      }),
      eyes: new THREE.MeshStandardMaterial({
        color: new THREE.Color(f.eyeColor),
        emissive: new THREE.Color(f.eyeColor),
        emissiveIntensity: 2.8
      }),
      bone: new THREE.MeshStandardMaterial({
        color: 0xd8ceb8,
        roughness: 0.6,
        metalness: 0.1
      }),
      baseRim: new THREE.MeshStandardMaterial({
        color: new THREE.Color(f.baseRimColor),
        roughness: 0.5,
        metalness: 0.3
      }),
      baseTop: new THREE.MeshStandardMaterial({
        color: 0x2a2c30,
        roughness: 0.9,
        metalness: 0.15
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

    // 1. Citadel Wargame Base
    const baseRim = new THREE.Mesh(this.sharedGeometries.baseCylinder, mats.baseRim);
    baseRim.position.y = 0.06;
    baseRim.castShadow = true;
    baseRim.receiveShadow = true;
    root.add(baseRim);

    const baseTop = new THREE.Mesh(this.sharedGeometries.baseInner, mats.baseTop);
    baseTop.position.y = 0.065;
    baseTop.receiveShadow = true;
    root.add(baseTop);

    // Add tactical rocks on base for Kings/Queens
    if (type === 'k' || type === 'q') {
      const rockGeo = new THREE.DodecahedronGeometry(0.22, 0);
      const rock = new THREE.Mesh(rockGeo, mats.baseTop);
      rock.scale.set(1.4, 0.45, 1.2);
      rock.position.set(0, 0.14, 0);
      root.add(rock);
    }

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
    bodyPivot.position.y = type === 'k' || type === 'q' ? 0.18 : 0.12;
    const scale = unitProf.scale || 1.0;
    bodyPivot.scale.setScalar(scale);
    root.add(bodyPivot);

    // Rig references for animation
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
      thrusters: [],
      hpRing,
      mats,
      baseY: bodyPivot.position.y,
      animPhase: Math.random() * Math.PI * 2
    };

    if (type === 'r') {
      this.buildHeavyWalkerRook(rig, faction, mats);
    } else {
      this.buildHumanoidUnit(rig, type, faction, mats);
    }

    // Enable shadows on all child meshes
    root.traverse((obj) => {
      if (obj.isMesh && obj !== hpRing) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });

    // Orient White toward -Z (row 0), Black toward +Z (row 7)
    root.rotation.y = side === 'w' ? 0 : Math.PI;
    root.userData.defaultRotY = root.rotation.y;
    root.userData.rig = rig;

    return root;
  }

  /**
   * Builds towering Rook walkers:
   * Redemptor Dreadnought (Ultramarines), Helbrute (Chaos), Deff Dread (Orks), Canoptek Doomstalker (Necrons)
   */
  buildHeavyWalkerRook(rig, faction, mats) {
    const { bodyPivot, torso, head, leftArm, rightArm, leftLeg, rightLeg, muzzlePoint, bladeTip } = rig;

    // Legs
    leftLeg.position.set(-0.18, 0.24, 0);
    rightLeg.position.set(0.18, 0.24, 0);

    const legGeo = new THREE.BoxGeometry(0.14, 0.26, 0.16);
    const footGeo = new THREE.BoxGeometry(0.18, 0.07, 0.24);

    [leftLeg, rightLeg].forEach((leg) => {
      const shin = new THREE.Mesh(legGeo, mats.armor);
      shin.position.y = -0.1;
      leg.add(shin);

      const foot = new THREE.Mesh(footGeo, mats.trim);
      foot.position.set(0, -0.22, -0.03);
      leg.add(foot);
      bodyPivot.add(leg);
    });

    // Massive Sarcophagus Torso
    torso.position.set(0, 0.52, 0);
    bodyPivot.add(torso);

    if (faction === 'necrons') {
      // Tall Canoptek Doomstalker Construct
      const spine = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.2, 0.55, 8), mats.metal);
      torso.add(spine);

      const core = new THREE.Mesh(new THREE.SphereGeometry(0.16, 12, 12), mats.glow);
      core.position.set(0, 0.05, -0.08);
      torso.add(core);

      const carapace = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.45, 0.36), mats.armor);
      carapace.position.set(0, 0.1, 0);
      torso.add(carapace);

      // Overhead Doomsday Blaster Cannon
      const cannon = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.11, 0.65, 10), mats.darkMetal);
      cannon.rotation.x = Math.PI / 2;
      cannon.position.set(0, 0.38, -0.15);
      torso.add(cannon);

      const glowBarrel = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.5, 8), mats.glow);
      glowBarrel.rotation.x = Math.PI / 2;
      glowBarrel.position.set(0, 0.38, -0.22);
      torso.add(glowBarrel);
    } else {
      // Dreadnought / Helbrute / Deff Dread Box Chassis
      const hull = new THREE.Mesh(new THREE.BoxGeometry(0.54, 0.46, 0.38), mats.armor);
      torso.add(hull);

      const sarcophagus = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.32, 0.42), mats.trim);
      torso.add(sarcophagus);

      // Vision slit / Eye glow
      const visor = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.05, 0.44), mats.eyes);
      visor.position.y = 0.06;
      torso.add(visor);

      // Exhaust smokestacks on back
      for (const sx of [-0.14, 0.14]) {
        const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.05, 0.35, 8), mats.metal);
        pipe.position.set(sx, 0.22, 0.2);
        torso.add(pipe);
      }

      if (faction === 'orks') {
        // Jagged Ork Iron Jaw & Horns on Deff Dread
        const jaw = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.12, 0.12), mats.metal);
        jaw.position.set(0, -0.12, -0.22);
        torso.add(jaw);
      } else if (faction === 'chaos') {
        // Chaos spikes on Helbrute hull
        for (const sx of [-0.2, 0, 0.2]) {
          const spike = new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.22, 6), mats.trim);
          spike.position.set(sx, 0.32, 0);
          torso.add(spike);
        }
      }
    }

    torso.add(head);

    // Left Arm: Heavy Ranged Cannon (Gatling / Multi-Melta / Mega-Blasta)
    leftArm.position.set(-0.34, 0.08, 0);
    torso.add(leftArm);

    const lShoulder = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.2, 0.22), mats.trim);
    leftArm.add(lShoulder);

    const gunBarrel = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.08, 0.48, 10), mats.metal);
    gunBarrel.rotation.x = Math.PI / 2;
    gunBarrel.position.set(-0.04, -0.06, -0.22);
    leftArm.add(gunBarrel);

    const gunTip = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.08, 10), mats.glow);
    gunTip.rotation.x = Math.PI / 2;
    gunTip.position.set(-0.04, -0.06, -0.46);
    leftArm.add(gunTip);

    muzzlePoint.position.set(-0.04, -0.06, -0.52);
    leftArm.add(muzzlePoint);

    // Right Arm: Massive Dreadnought Power Fist / Crushing Klaw
    rightArm.position.set(0.34, 0.08, 0);
    torso.add(rightArm);

    const rShoulder = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.2, 0.22), mats.trim);
    rightArm.add(rShoulder);

    const gauntlet = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.2, 0.36), mats.armor);
    gauntlet.position.set(0.04, -0.08, -0.18);
    rightArm.add(gauntlet);

    const klawGlow = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.22, 4), mats.glow);
    klawGlow.rotation.x = -Math.PI / 2;
    klawGlow.position.set(0.04, -0.08, -0.4);
    rightArm.add(klawGlow);

    bladeTip.position.set(0.04, -0.08, -0.48);
    rightArm.add(bladeTip);
  }

  /**
   * Builds Articulated Infantry, Jump-Knights, Psyker-Bishops, Champion-Queens, and Warlord-Kings
   */
  buildHumanoidUnit(rig, type, faction, mats) {
    const { bodyPivot, torso, head, leftArm, rightArm, leftLeg, rightLeg, muzzlePoint, bladeTip, thrusters } = rig;

    // 1. Legs
    leftLeg.position.set(-0.11, 0.28, 0);
    rightLeg.position.set(0.11, 0.28, 0);

    const legWidth = faction === 'necrons' ? 0.065 : 0.115;
    const legGeo = new THREE.CylinderGeometry(legWidth * 0.85, legWidth, 0.28, 8);
    const bootGeo = new THREE.BoxGeometry(legWidth * 1.2, 0.08, 0.18);

    [leftLeg, rightLeg].forEach((leg) => {
      const greave = new THREE.Mesh(legGeo, faction === 'necrons' ? mats.metal : mats.armor);
      greave.position.y = -0.12;
      leg.add(greave);

      const boot = new THREE.Mesh(bootGeo, mats.darkMetal);
      boot.position.set(0, -0.25, -0.02);
      leg.add(boot);
      bodyPivot.add(leg);
    });

    // 2. Torso
    torso.position.set(0, 0.44, 0);
    bodyPivot.add(torso);

    const chestW = type === 'k' || type === 'q' ? 0.34 : 0.28;
    const chestH = 0.32;
    const chestD = 0.2;

    const chest = new THREE.Mesh(new THREE.BoxGeometry(chestW, chestH, chestD), mats.armor);
    torso.add(chest);

    // Chest Emblem / Ribcage Glow
    if (faction === 'necrons') {
      const ankh = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.16, 0.21), mats.glow);
      ankh.position.y = 0.03;
      torso.add(ankh);
    } else {
      const breastplate = new THREE.Mesh(new THREE.BoxGeometry(chestW * 0.72, 0.12, chestD + 0.02), mats.trim);
      breastplate.position.y = 0.05;
      torso.add(breastplate);
    }

    // Cloth Tabard / Loincloth for Bishops, Queens, Kings
    if (type === 'b' || type === 'q' || type === 'k') {
      const tabard = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.28, 0.03), mats.cloth);
      tabard.position.set(0, -0.2, -0.11);
      torso.add(tabard);
    }

    // Flowing Commander Cape for Kings & Queens
    if (type === 'k' || type === 'q') {
      const capeGeo = new THREE.BoxGeometry(0.38, 0.52, 0.03);
      const cape = new THREE.Mesh(capeGeo, mats.cloth);
      cape.position.set(0, -0.06, 0.13);
      cape.rotation.x = 0.18;
      torso.add(cape);
    }

    // 3. Head & Helmet
    head.position.set(0, 0.23, 0);
    torso.add(head);

    const helmMat = faction === 'orks' ? mats.skin : faction === 'necrons' ? mats.trim : mats.armor;
    const headMesh = new THREE.Mesh(new THREE.SphereGeometry(0.105, 12, 12), helmMat);
    head.add(headMesh);

    // Glowing Eyes
    for (const ex of [-0.04, 0.04]) {
      const eye = new THREE.Mesh(new THREE.BoxGeometry(0.032, 0.022, 0.04), mats.eyes);
      eye.position.set(ex, 0.01, -0.095);
      head.add(eye);
    }

    // Faction & Role Head Customizations
    if (faction === 'chaos') {
      // Chaos Horns
      for (const sideSign of [-1, 1]) {
        const horn = new THREE.Mesh(new THREE.ConeGeometry(0.025, 0.16, 6), mats.bone);
        horn.position.set(sideSign * 0.09, 0.09, -0.02);
        horn.rotation.z = -sideSign * 0.45;
        head.add(horn);
      }
    } else if (faction === 'orks') {
      // Ork Iron Gob (Jaw)
      const gob = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.07, 0.1), mats.metal);
      gob.position.set(0, -0.05, -0.06);
      head.add(gob);
    } else if (faction === 'necrons' && (type === 'k' || type === 'q')) {
      // Necron Pharaonic Crown
      const crown = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.2, 4), mats.trim);
      crown.position.set(0, 0.15, 0);
      head.add(crown);
    }

    // Psychic Hood for Bishops
    if (type === 'b') {
      const hood = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.14, 0.14, 10, 1, true, 0, Math.PI), mats.trim);
      hood.position.set(0, 0.03, 0.02);
      head.add(hood);
    }

    // Iron Halo / Trophy Rack / Bosspole for Kings & Queens
    if (type === 'k' || type === 'q') {
      const haloHeight = type === 'k' ? 0.26 : 0.2;
      if (faction === 'ultramarines') {
        const halo = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.02, 8, 16), mats.trim);
        halo.position.set(0, haloHeight, 0.08);
        torso.add(halo);
      } else if (faction === 'chaos') {
        for (const sx of [-0.1, 0, 0.1]) {
          const rack = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.018, 0.28, 6), mats.trim);
          rack.position.set(sx, haloHeight, 0.08);
          torso.add(rack);
        }
      } else if (faction === 'orks') {
        const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.34, 6), mats.metal);
        pole.position.set(0, haloHeight, 0.09);
        torso.add(pole);
        const emblem = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.12, 0.04), mats.trim);
        emblem.position.set(0, haloHeight + 0.14, 0.09);
        torso.add(emblem);
      } else if (faction === 'necrons') {
        const orb = new THREE.Mesh(new THREE.SphereGeometry(0.075, 12, 12), mats.glow);
        orb.position.set(0, haloHeight + 0.06, 0.06);
        torso.add(orb);
      }
    }

    // 4. Backpack or Jump Pack / Rokkit Pack
    if (type === 'n') {
      // Jump Pack / Rokkit Pack
      if (faction === 'orks') {
        const rokkit = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.11, 0.42, 10), mats.trim);
        rokkit.position.set(0, 0.08, 0.16);
        torso.add(rokkit);
        const cone = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.16, 10), mats.metal);
        cone.position.set(0, 0.35, 0.16);
        torso.add(cone);
        const exhaust = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 8), mats.glow);
        exhaust.position.set(0, -0.14, 0.16);
        torso.add(exhaust);
        thrusters.push(exhaust);
      } else {
        for (const tx of [-0.11, 0.11]) {
          const turbine = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.07, 0.36, 10), mats.armor);
          turbine.position.set(tx, 0.08, 0.15);
          torso.add(turbine);
          const nozzle = new THREE.Mesh(new THREE.SphereGeometry(0.055, 8, 8), mats.glow);
          nozzle.position.set(tx, -0.1, 0.15);
          torso.add(nozzle);
          thrusters.push(nozzle);
        }
      }
    } else if (faction !== 'necrons') {
      // Power Pack
      const pack = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.24, 0.12), mats.armor);
      pack.position.set(0, 0.04, 0.14);
      torso.add(pack);
    }

    // 5. Left & Right Arms + Iconic Weapons
    const shoulderOffset = chestW * 0.5 + 0.07;
    leftArm.position.set(-shoulderOffset, 0.09, 0);
    rightArm.position.set(shoulderOffset, 0.09, 0);
    torso.add(leftArm);
    torso.add(rightArm);

    // Oversized Pauldrons (Shoulder Pads)
    const pauldronGeo = new THREE.SphereGeometry(0.115, 10, 10, 0, Math.PI * 2, 0, Math.PI * 0.65);
    const lPauldron = new THREE.Mesh(pauldronGeo, mats.armor);
    const rPauldron = new THREE.Mesh(pauldronGeo, mats.armor);
    lPauldron.position.y = 0.02;
    rPauldron.position.y = 0.02;
    leftArm.add(lPauldron);
    rightArm.add(rPauldron);

    const rimGeo = new THREE.TorusGeometry(0.11, 0.018, 6, 14);
    rimGeo.rotateX(Math.PI / 2);
    const lRim = new THREE.Mesh(rimGeo, mats.trim);
    const rRim = new THREE.Mesh(rimGeo, mats.trim);
    leftArm.add(lRim);
    rightArm.add(rRim);

    // Forearms
    const armGeo = new THREE.CylinderGeometry(0.048, 0.045, 0.22, 8);
    const lForearm = new THREE.Mesh(armGeo, faction === 'orks' ? mats.skin : mats.armor);
    lForearm.position.set(0, -0.1, -0.06);
    lForearm.rotation.x = Math.PI / 3;
    leftArm.add(lForearm);

    const rForearm = new THREE.Mesh(armGeo, faction === 'orks' ? mats.skin : mats.armor);
    rForearm.position.set(0, -0.1, -0.06);
    rForearm.rotation.x = Math.PI / 3;
    rightArm.add(rForearm);

    // Left Hand Weapon (Bolter / Gauss Flayer / Shield / Pistol)
    if (type === 'q' && faction === 'necrons') {
      // Dispersion Shield
      const shield = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.36, 0.22), mats.trim);
      shield.position.set(-0.06, -0.12, -0.14);
      leftArm.add(shield);
      muzzlePoint.position.set(0, -0.12, -0.35);
      leftArm.add(muzzlePoint);
    } else {
      // Gun / Bolter / Gauss Rifle
      const gunLen = faction === 'necrons' && type === 'p' ? 0.36 : 0.24;
      const gunBody = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.09, gunLen), mats.darkMetal);
      gunBody.position.set(0, -0.14, -0.2);
      leftArm.add(gunBody);

      if (faction === 'necrons' || type === 'n') {
        const energyTube = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, gunLen * 0.85, 8), mats.glow);
        energyTube.rotation.x = Math.PI / 2;
        energyTube.position.set(0, -0.13, -0.22);
        leftArm.add(energyTube);
      }

      muzzlePoint.position.set(0, -0.14, -0.2 - gunLen * 0.55);
      leftArm.add(muzzlePoint);
    }

    // Right Hand Melee / Psychic Weapon
    if (type === 'b') {
      // Tall Psychic Force Stave / Weirdboy Staff / Staff of Light
      const staff = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.022, 0.78, 8), mats.trim);
      staff.position.set(0, 0.05, -0.16);
      staff.rotation.x = 0.2;
      rightArm.add(staff);

      const staffHead = new THREE.Mesh(new THREE.OctahedronGeometry(0.085, 0), mats.glow);
      staffHead.position.set(0, 0.42, -0.24);
      rightArm.add(staffHead);

      // Bishops fire psychic blasts from the top of their staff!
      muzzlePoint.position.set(0, 0.44, -0.26);
      rightArm.add(muzzlePoint);
      bladeTip.position.set(0, 0.44, -0.26);
      rightArm.add(bladeTip);
    } else if (type === 'k' && (faction === 'ultramarines' || faction === 'orks')) {
      // Power Gauntlet / Da Killa Klaw
      const fist = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.16, 0.26), mats.trim);
      fist.position.set(0, -0.14, -0.2);
      rightArm.add(fist);

      const fistGlow = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.06, 0.12), mats.glow);
      fistGlow.position.set(0, -0.14, -0.32);
      rightArm.add(fistGlow);

      bladeTip.position.set(0, -0.14, -0.36);
      rightArm.add(bladeTip);
    } else {
      // Chainsword / Power Sword / Relic Blade / Chainaxe / Choppa / Warscythe
      const hilt = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.14, 6), mats.trim);
      hilt.position.set(0, -0.15, -0.16);
      hilt.rotation.x = Math.PI / 4;
      rightArm.add(hilt);

      const isPowerWeapon = type === 'q' || type === 'k' || type === 'n' || faction === 'necrons';
      const bladeLen = type === 'q' || type === 'k' ? 0.48 : 0.36;
      const bladeW = faction === 'orks' ? 0.09 : 0.055;

      const bladeMat = isPowerWeapon ? mats.glow : mats.metal;
      const blade = new THREE.Mesh(new THREE.BoxGeometry(0.022, bladeLen, bladeW), bladeMat);
      blade.position.set(0, 0.04, -0.32);
      blade.rotation.x = Math.PI / 4;
      rightArm.add(blade);

      if (!isPowerWeapon) {
        // Chainsword / Chainaxe teeth trim
        const casing = new THREE.Mesh(new THREE.BoxGeometry(0.028, bladeLen * 0.9, bladeW * 0.6), mats.armor);
        casing.position.copy(blade.position);
        casing.rotation.copy(blade.rotation);
        rightArm.add(casing);
      }

      bladeTip.position.set(0, 0.18, -0.46);
      rightArm.add(bladeTip);
    }
  }
}
