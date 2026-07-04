# Architecture

## v1 (shipped)

```
Next.js 16 App Router (TypeScript, Tailwind v4)
└── fully static export (output: "export")
    ├── src/lib/types.ts      — domain types (Brand, Aisle, Cohort, Product, BrandVideo)
    ├── src/lib/data.ts       — seed data + lookups (the "database" for v1)
    ├── src/components/       — BrandCard, VideoBlock (neon system components)
    └── src/app/              — routes (all SSG via generateStaticParams)

CI/CD: GitHub Actions → lint + test + build → GitHub Pages
```

Design principle: **the data contracts are the API.** Components consume `Brand`/`Aisle`/`Cohort` shapes only. Phase 2 swaps `data.ts` for Postgres + Shopify sync behind the same shapes — zero component rewrites.

## Phase 2 (next)

```
Storefront (this repo)
  ├── cart/checkout → Aisle IX Shopify store (Storefront API)
  └── brand pages   → DB-backed (Postgres via Drizzle/Prisma)

Brand OS (new routes, same repo)
  ├── /apply             — application form
  ├── /studio            — brand self-serve: story blocks, video upload/social links
  └── /studio/dashboard  — sales, commission, page traffic

Commerce: Shopify Collective (see ADR-001)
  ├── brand Shopify (supplier) ↔ Aisle IX Shopify (retailer)
  ├── commission = retailer margin, retained automatically
  └── brands fulfill from their own admin

Video: social embeds (YouTube nocookie iframe, TikTok/IG link-outs) in v1;
       direct upload via Mux when a brand has no social presence.
```

## Hosting decision

GitHub Pages (static) for v1 — zero cost, already authenticated (`deeterj27`), same rails as pickleadvisors.com. Vercel CLI on this machine has no valid token; rather than block on auth, v1 is fully static anyway. Phase 2's server-side needs (webhooks, DB) move the app to Vercel/Fly — the repo is standard Next.js, so the move is `vercel link && vercel deploy`.

## Deliberate non-goals for v1

- No AI features. None.
- No consumer accounts, no email/SMS.
- No payments engine — Shopify rails only (ADR-001).
- No CMS — seed data until the Brand OS exists.
