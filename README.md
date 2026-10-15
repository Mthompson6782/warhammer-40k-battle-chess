# ⚜️ Warhammer 40,000: Regicide 3D (Battle Chess)

A 3D Warhammer 40,000 Battle Chess & Tactical Regicide game built with **Three.js** and **Web Audio API**, where the pieces actually fight on a Sector Imperialis battlefield.

🔗 **Play Live in Browser:** [https://mthompson6782.github.io/warhammer-40k-battle-chess/](https://mthompson6782.github.io/warhammer-40k-battle-chess/)

---

## ⚔️ Features

- **4 Playable Warhammer 40k Armies** (Mix & Match any matchup):
  - 🦅 **Adeptus Astartes (Ultramarines)** — *Intercessors, Redemptor Dreadnoughts, Jump Pack Assault, Primaris Librarians, Terminator Champions, Chapter Master Calgar*
  - ✴️ **Heretic Astartes (Black Legion Chaos)** — *Chaos Legionaries, Helbrutes, Warp Talons, Master of Possession, Daemon Prince Herald, Warmaster Abaddon*
  - 💀 **Ork Waaagh! (Goff Clan)** — *Ork Boyz, Deff Dreads, Rokkit Stormboyz, Weirdboyz, Meganobz, Warboss Ghazghkull*
  - ☥ **Necron Dynasties (Szarekhan)** — *Necron Warriors, Canoptek Doomstalkers, Skorpekh Destroyers, Technomancer Crypteks, Lychguard, Necron Overlord*
- **Pieces Actually Fight in 3D**:
  - **Action Duel Camera** swoops in when units clash.
  - **Ranged Salvos & Psychic Lightning**: Bolter bursts, Multi-Melta beams, Dakka, Gauss Flayers, and Warp Lightning arcs.
  - **Melee Clashes & Role-Specific Finishers**: Chainswords, Power Swords, Chainaxes, and Dreadnought Klaws clash with sparks, blood/energy bursts, and brutal executions that shatter defeated pieces into 3D armor debris.
- **Dual Game Modes**:
  - **⚔️ Wargame Mode (HP, Dice Rolls & Counter-Attacks)**: Pieces have Wounds (HP), Armor Saves, and Attack Dice (`2D6` / `3D6 + Base`). Surviving defenders hold their ground and counter-attack! Includes **Command Points (CP)** and 3 faction **Stratagems** (*Overcharge Weapons*, *Apothecary/Reanimation Heal*, *Orbital Strike*).
  - **♟️ Classic Battle Chess Mode**: Standard chess rules (Check, Checkmate, Castling, En Passant, Promotion) where every capture triggers a guaranteed 3D execution.
- **Opponent Modes**:
  - **VS Cogitator AI** (*Initiate*, *Veteran*, *Warmaster*)
  - **2P Pass & Play**
  - **AI vs. AI Spectate Mode**

---

## 🚀 Run Locally

```bash
git clone https://github.com/Mthompson6782/warhammer-40k-battle-chess.git
cd warhammer-40k-battle-chess
npm install
npm run dev
```
