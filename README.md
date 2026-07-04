# Aisle IX

**The ninth aisle — a virtual marketplace that feels like a grocery store at night.**

Consumers discover emerging brands through founder-led video stories. Products glow in neon against dark aisles. Brands pay a small slotting fee, sell on consignment, and fulfill every order through their own Shopify.

**Live site:** https://deeterj27.github.io/aisle-ix/

## Quick start (< 10 minutes)

```bash
git clone https://github.com/deeterj27/aisle-ix.git
cd aisle-ix
npm ci          # Node 22+
npm run dev     # http://localhost:3000
```

That's it. No env vars, no database, no API keys required for the v1 storefront — all data is seeded in `src/lib/data.ts`.

Other commands:

```bash
npm run build   # static export to out/
npm test        # vitest — data-integrity suite
npm run lint    # eslint
```

## What's here (v1)

| Route | What it is |
|---|---|
| `/` | Store entrance — the night-store moment, day/night contrast, featured shelf |
| `/aisles` | Store directory |
| `/aisles/[slug]` | One aisle's shelf |
| `/brands/[slug]` | **Brand story page** — founder video, narrative, pull-quote, then products |
| `/cohorts/[slug]` | Cohort showcase (e.g. Launch Lab Cohort 01) |
| `/for-brands` | Supply-side pitch: apply → fee → Shopify → story page → consign |
| `/about` | What is this |

## Architecture

- **Next.js 16 (App Router) + TypeScript + Tailwind v4**, fully static export (`output: "export"`)
- Deployed to **GitHub Pages** via GitHub Actions on every push to `main`
- Seed data in `src/lib/data.ts` typed by `src/lib/types.ts` — designed to swap to Postgres + Shopify sync in Phase 2 without changing component contracts
- Design system: night-store tokens + neon utilities in `src/app/globals.css` (see `docs/DESIGN_SYSTEM.md`)

Read the docs:

- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — system overview and phase plan
- [`docs/adr/ADR-001-commerce-architecture.md`](docs/adr/ADR-001-commerce-architecture.md) — how money moves (Shopify consignment)
- [`docs/DATA_MODEL.md`](docs/DATA_MODEL.md) — entities and Phase-2 schema
- [`docs/BRAND_ONBOARDING.md`](docs/BRAND_ONBOARDING.md) — the seamless add-a-brand runbook
- [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md) — the night-store visual language
- [`docs/ROADMAP.md`](docs/ROADMAP.md) — what's deliberately deferred and why

## Business model (fixed)

Pop-Up Grocer style: brands pay a **small slotting fee** to get on the shelf, then **consignment** — Aisle IX takes a % of sales (target 20–30%). Brands keep their own Shopify and fulfill every order. Aisle IX holds zero inventory.

---

© 2026 Aisle IX — open all night
