# 🌸 Flowers & Cross-Pollination

← [Back to README](../README.md)

Quick-reference guide for Hanamori flower breeding. Built for speed — scan tables, not paragraphs.

---

## How Breeding Works

| Step | What happens |
|---|---|
| 1. Plant | Two same-species flowers adjacent (partner range: 5×5 grid) |
| 2. Water | Triggers 5% base breed chance per flower at 5am |
| 3. Selection | Game randomly selects eligible flowers; each locks for the day once chosen |
| 4. Breed or Clone | Partner nearby → breeds (mixed genetics). Isolated → clones itself exactly |
| 5. Spawn | Offspring appears in an empty adjacent tile around either parent |
| 6. Bad-luck bonus | +5% per failed day, stacking up to +85% after 20 days — cannot be stuck forever |

---

## Watering & Breed Probability

| Watered by | Breed chance | Sparkle |
|---|---|---|
| Rain or self only | 5% | None |
| 1 unique visitor | 25% | White |
| 2 unique visitors | 35% | White ×2 |
| 3 unique visitors | 50% | Silver/blue |
| 4 unique visitors | 65% | Silver/blue |
| 5+ unique visitors | **80%** | **Golden** (visible to all) |

- 96% effective pair chance with 5 visitors (each flower has an independent 80% chance)
- ⚠️ Digging up a watered flower **resets its visitor bonus**

---

## Quick Rules

| Question | Answer |
|---|---|
| 🏃 Running through flowers? | Knocks blooms off → stem stage → **cannot breed** until re-bloomed (3 growth cycles). **PRO TIP:** run through your patches before guests arrive — buds still breed, so guests cannot accidentally pluck them |
| ✂️ Flowers picked/plucked? | Reverts to stem. **Stems cannot breed.** Must regrow through bud stage first. Never pick from breeding patches |
| 🌱 Growth stages? | Sprout → Stem → **Bud** → **Bloom**. Only Bud and Bloom breed/clone |
| 🔒 Locking mechanic? | Once a flower breeds or clones, it is locked for that day |
| 📐 Partner range? | 5×5 grid around the parent — not just the immediate 3×3 |
| 👯 Cloning? | Isolated flower with no same-species neighbour → always clones itself |
| 🌟 Gold Rose? | Water black rose with golden watering can → flags it. ~50% chance to spawn gold rose next morning. **Cannot clone gold roses** |
| 📊 Daily cap? | No cap. More watering + more pairs = more new flowers per day |

---

## Layout Guide

### Glossary

| Layout | Use when | Visitors |
|---|---|---|
| 2×2 Square | Same-parent, limited space | Any |
| Hex-hole | Same-parent, solo play | 0–1 |
| Turtle | Same-parent, small plot | Any |
| Super Turtle | Same-parent, mass production | 3–5 |
| Alternating Cols | Different-parent, long space | Any |
| Checkerboard | Different-parent, odd-shaped space | Any |
| **Isolated Pairs** | Different-parent where offspring = one parent's colour | Any |
| Cloning (isolated) | Duplicating a single rare hybrid | Any |
| Interleaved Cloning | Duplicating 2–4 rare hybrids at once | Any |

### Decision Flow

```
Same-colour parents?
  └── Solo player              → Hex-hole or Turtle
  └── 3–5 visitors            → Super Turtle
  └── Tiny space              → 2×2 Square

Different-colour parents?
  └── Offspring = third colour → Alternating Cols or Checkerboard
  └── Offspring = one parent  → ⚠️ ISOLATED PAIRS (mandatory)

Duplicating a rare hybrid     → Cloning — fully isolate
```

### ⚠️ Isolation Cheat Sheet

Isolated pairs are **non-negotiable** for these steps — offspring is visually indistinguishable from one parent.

| Species | Step requiring isolation | Why |
|---|---|---|
| 🌹 Roses | Steps 2–4 of blue rose chain | Hybrid red = seed red visually |
| 🌸 Pansies | Blue × Seed Red → Hybrid Red | Hybrid red = seed red visually |
| 🌀 Windflowers | Blue × Seed Red → Hybrid Red | Hybrid red = seed red visually |
| 💐 Hyacinths | Orange-line blues vs white-line blues | Both look like plain blue hyacinths |
| 🌻 Mums | Purple (HY) vs Purple (W) | Both look like plain purple mums — only HY line → green |
| 🌷 Tulips | Clone oranges before purple step | Need enough pairs for 12% rate |
| 🌺 Cosmos | None needed | All outputs visually distinct |
| 🌸 Lilies | None needed | All outputs visually distinct |

---

## Per-Species Reference

### 🌸 Lilies — Simplest chain, no isolation needed

Seeds: Red · Yellow · White → Hybrids: **Pink · Orange · Black**

| Stage | Parent A | Parent B | Result | Rate | Layout |
|---|---|---|---|---|---|
| 1 | Red (seed) | White (seed) | Pink | 50% | Alternating cols |
| 1 | Red (seed) | Yellow (seed) | Orange | 50% | Alternating cols |
| 1 | Red (seed) | Red (seed) | Black | 25% | 2×2 or hex-hole |

- Red pulls triple duty — run all 3 pairs in one combined patch

---

### 🌺 Cosmos — Central column method, no isolation needed

Seeds: Red · Yellow · White → Hybrids: **Pink · Orange · Black**

| Stage | Parent A | Parent B | Result | Rate | Layout |
|---|---|---|---|---|---|
| 1 | Red (centre col) | White (left col) | Pink | 100% | 3-column grid |
| 1 | Red (centre col) | Yellow (right col) | Orange | 100% | 3-column grid |
| 2 | Orange (hybrid) | Orange (hybrid) | Black | **6%** | Many isolated pairs |

- Red in the centre services both sides simultaneously
- Stage 2: use many orange pairs — 6% is slow with just one pair

---

### 🌷 Tulips — Clone oranges before going for purple

Seeds: Red · Yellow · White → Hybrids: **Pink · Orange · Black · Purple**

| Stage | Parent A | Parent B | Result | Rate | Layout |
|---|---|---|---|---|---|
| 1 | Red (seed) | Yellow (seed) | Orange | 50% | Combined patch |
| 1 | Red (seed) | White (seed) | Pink | 50% | Combined patch |
| 1 | Red (seed) | Red (seed) | Black | 25% | 2×2 or hex-hole |
| 2 | Orange | Orange | Purple | **12%** | Clone first → 2×2 pairs |

- Clone oranges until you have 6+ before attempting purple

---

### 💐 Hyacinths — Keep orange-line blues separate from white-line blues

Seeds: Red · Yellow · White → Hybrids: **Pink · Orange · Blue · Purple**

| Stage | Parent A | Parent B | Result | Rate | Layout |
|---|---|---|---|---|---|
| 1 | Red (seed) | White (seed) | Pink | 50% | Combined patch |
| 1 | Red (seed) | Yellow (seed) | Orange | 50% | Combined patch |
| 1 | White (seed) | White (seed) | Blue (W-line) | 25% | 2×2 — **label** |
| 2 | Orange | Orange | Blue (O-line) or Purple | **6% each** | Separate section |
| 3 | Blue (O-line) | Blue (O-line) | Purple | 25% | 2×2 or turtle |

- ⚠️ Blue from White×White and Blue from Orange×Orange look **identical** but are genetically different
- Only Orange-line Blues → Purple. Label sections clearly with custom designs or mannequins

---

### 🌸 Pansies — Isolated pairs mandatory at hybrid-red step

Seeds: Red · Yellow · White → Hybrids: **Orange · Blue · Hybrid Red · Purple**

| Stage | Parent A | Parent B | Result | Rate | Layout |
|---|---|---|---|---|---|
| 1 | Red (seed) | Yellow (seed) | Orange | 100% | Tight alternating cols |
| 1 | White (seed) | White (seed) | Blue | 25% | 2×2 or hex-hole |
| 2 | Blue (hybrid) | Red (seed) | Hybrid Red | 25% | ⚠️ **Isolated Pairs** |
| 3 | Hybrid Red | Hybrid Red | Purple | **6%** | Multiple 2×2 blocks |

- ⚠️ Hybrid Red looks exactly like seed Red — use isolated pairs at step 3

---

### 🌀 Windflowers — Uses ORANGE seed, not yellow

Seeds: Red · **Orange** · White → Hybrids: **Pink · Blue · Hybrid Red · Purple**

| Stage | Parent A | Parent B | Result | Rate | Layout |
|---|---|---|---|---|---|
| 1 | Red (seed) | Orange (seed) | Pink | 100% | Tight alternating cols |
| 1 | White (seed) | White (seed) | Blue | 25% | 2×2 or hex-hole |
| 2 | Blue (hybrid) | Red (seed) | Hybrid Red | 25% | ⚠️ **Isolated Pairs** |
| 3 | Hybrid Red | Hybrid Red | Purple | **6%** | Multiple 2×2 blocks |

- Only species using Orange seeds (not Yellow) — no yellow seed bags needed
- Same hybrid-red isolation trap as Pansies

---

### 🌻 Mums — Two purple types that must never mix

Seeds: Red · Yellow · White → Hybrids: **Pink · Purple(W) · Hybrid Yellow · Purple(HY) · Green**

| Stage | Parent A | Parent B | Result | Rate | Layout |
|---|---|---|---|---|---|
| 1 | Red (seed) | White (seed) | Pink | 100% | Combined patch |
| 1 | White (seed) | White (seed) | Purple (W) | 25% | 2×2 — **label W** |
| 1 | Red (seed) | Yellow (seed) | Hybrid Yellow | 100% | Combined patch |
| 2 | Hybrid Yellow | Hybrid Yellow | Green or Purple (HY) | 6% / 25% | Separate section |
| 3 | Purple (HY) | Purple (HY) | Green | 25% | Third separate area |

- ⚠️ Purple(W) and Purple(HY) are **visually identical** — only Purple(HY) leads to green
- Use path tiles or mannequins as dividers between sections. Never mix

---

### 🌹 Roses — Most complex; blue rose requires 5-step chain

Seeds: Red · Yellow · White → Hybrids: **Pink · Orange · Purple · Black · Blue (special) · Gold (special)**

#### Standard Hybrids

| Stage | Parent A | Parent B | Result | Rate | Layout |
|---|---|---|---|---|---|
| 1 | Red (seed) | White (seed) | Pink | 50% | Combined patch |
| 1 | Red (seed) | Yellow (seed) | Orange | 50% | Combined patch |
| 1 | White (seed) | White (seed) | Purple | 25% | 2×2 |
| 1 | Red (seed) | Red (seed) | Black | 25% | 2×2 or hex-hole |

#### Blue Rose — Short Method (recommended, 25% final rate)

| Step | Action | Layout |
|---|---|---|
| 1 | White × White → Purple | 2×2 block |
| 2 | Purple × Red (seed) → Pink | Isolated pairs |
| 3 | Pink × Yellow (seed) → Red* (special) | ⚠️ **Isolated pairs** — Red* looks like seed Red |
| 4 | Clone Red* until enough stock | Isolate each — no same-species neighbour |
| 5 | Red* × Red* → Blue Rose | 25% — multiple 2×2 blocks |

- Long method (9 steps) = only 1.6% rate. Short method strongly recommended
- Label every step with signs or mannequins

#### Gold Rose

| Step | Action |
|---|---|
| 1 | Isolate a black rose — no other roses touching it |
| 2 | Water individually with a Golden Watering Can → flags it |
| 3 | ~50% chance to spawn a Gold Rose next morning |
| 4 | Re-flag daily until gold spawns |
| — | ⚠️ Gold roses **cannot be cloned** |

---

## Master Probability Table

| Species | Pair | Result | Rate | Isolation? |
|---|---|---|---|---|
| Lily | Red × White | Pink | 50% | No |
| | Red × Yellow | Orange | 50% | No |
| | Red × Red | Black | 25% | No |
| Cosmos | Red × White | Pink | 100% | No |
| | Red × Yellow | Orange | 100% | No |
| | Orange × Orange | Black | **6%** | No |
| Tulip | Red × Yellow | Orange | 50% | No |
| | Red × White | Pink | 50% | No |
| | Red × Red | Black | 25% | No |
| | Orange × Orange | Purple | **12%** | Clone first |
| Pansy | Red × Yellow | Orange | 100% | No |
| | White × White | Blue | 25% | No |
| | Blue × Red (seed) | Hybrid Red | 25% | ⚠️ YES |
| | Hybrid Red × Hybrid Red | Purple | **6%** | No |
| Hyacinth | Red × White | Pink | 50% | No |
| | Red × Yellow | Orange | 50% | No |
| | White × White | Blue (W-line) | 25% | Label separately |
| | Orange × Orange | Blue(O) or Purple | **6% each** | Separate section |
| | Blue(O) × Blue(O) | Purple | 25% | No |
| Windflower | Red × Orange (seed) | Pink | 100% | No |
| | White × White | Blue | 25% | No |
| | Blue × Red (seed) | Hybrid Red | 25% | ⚠️ YES |
| | Hybrid Red × Hybrid Red | Purple | **6%** | No |
| Mum | Red × White | Pink | 100% | No |
| | White × White | Purple (W) | 25% | Label W |
| | Red × Yellow | Hybrid Yellow | 100% | No |
| | Hybrid Yellow × Hybrid Yellow | Green or Purple (HY) | 6% / 25% | Separate section |
| | Purple(HY) × Purple(HY) | Green | 25% | No |
| Rose | Red × White | Pink | 50% | No |
| | Red × Yellow | Orange | 50% | No |
| | White × White | Purple | 25% | No |
| | Red × Red | Black | 25% | No |
| | Red* × Red* | Blue Rose | 25% | ⚠️ YES — multi-step |
| | Black + Golden can | Gold Rose | ~50% | Isolate; no cloning |

---

## Early-Game Checklist — Hanamori Start Order

- [ ] Get 3 visitors to water daily (50% breed chance vs 5% solo)
- [ ] Start **Lilies & Cosmos** first — no isolation, no chain complexity
- [ ] Run through breeding patches before guests arrive (prevents accidental plucking)
- [ ] Label every hybrid section with signs or mannequins
- [ ] Clone oranges (Tulip/Cosmos/Hyacinth) before pairing for rare colours
- [ ] Run **Windflower and Pansy** chains together — same 4-step structure
- [ ] Blue Rose last — needs intermediate species completed first

---

## Sources

- [Animal Crossing Wiki — Flower Mechanics](https://animalcrossing.fandom.com/wiki/Flowers/New_Horizons_mechanics)
- [Bell Tree Forums — ACNH Guide on Hybrids](https://www.belltreeforums.com/threads/acnh-guide-on-hybrids.516964/)
- [mtmmo.com — Breeding Layouts & Cloning Guide 2026](https://www.mtmmo.com/news/2219--acnh-flower-breeding-layouts--hybrid-cloning-guide-2026)
- [AC Flower Factory — Breeding Patterns](https://skent259.github.io/ac-flower-factory/breeding-patterns/)
- [Reddit r/ACNHGardening — Running through flowers](https://www.reddit.com/r/ACNHGardening/comments/g7ftq8/what_happens_when_running_over_flowers/)
