# Design System — the night store

## The idea
The site is a **place**: a grocery store after hours. The store is dark; the products glow. Legacy brands live in daylight (beige, muted); challengers glow in neon. Every design decision reinforces the day/night, legacy/challenger contrast.

## Tokens (globals.css `@theme`)

| Token | Value | Use |
|---|---|---|
| `night` | `#07070b` | page background |
| `night-soft` | `#0d0d14` | section alternation |
| `shelf` | `#14141d` | card surfaces |
| `shelf-edge` | `#1f1f2c` | card borders (non-neon) |
| `fog` | `#9b9bb0` | secondary text |
| `bone` | `#f2f0ea` | primary text |
| `daylight` / `daylight-ink` | `#e8e4da` / `#55524a` | the legacy world |
| `acid` | `#aaff00` | primary neon (brand color) |
| `neon-pink` | `#ff3ec8` | launches / cohorts |
| `neon-cyan` | `#00f0ff` | beverage / directory |
| `neon-violet` | `#a26bff` | frozen / about |
| `butter` | `#ffe94a` | pantry / fresh |
| `tangerine` | `#ff7a1a` | wellness |

## Type
- Display: **Archivo Black** — headlines, brand names, aisle numbers. Always available via `font-[family-name:var(--font-display)]`.
- Body: **Space Grotesk**.
- Mono: **Space Mono** — wayfinding labels (aisle numbers, metadata, "open 24 hours"), always uppercase + tracked out.

## Neon utilities
- `.neon-text-{color}` — layered text-shadow glow (6/24/64px falloff).
- `.neon-box-{color}` — glowing border + inner glow for cards.
- `.flicker` / `.flicker-slow` — fluorescent-tube flicker; use on AT MOST one element per view.
- `.hum` — 4s opacity pulse for "live" labels.
- `.store-floor` — faint 44px grid, the tiled floor.
- `.shelf-card` — hover lift.
- `.daylight` — flips a section into the legacy world.

## Rules
1. Neon is earned: each brand has ONE neon color; each view flickers at most once.
2. Story before shelf: on brand pages, video + narrative always precede products.
3. Legacy brands never glow.
4. Respect `prefers-reduced-motion` (all animation disabled).
5. Mobile is the pitch surface — verify 390px and 430px before any push.
