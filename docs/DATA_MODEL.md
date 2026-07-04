# Data Model

## v1 (seed data, `src/lib/data.ts`)

- **Brand** — slug, name, tagline, neon color, aisle, era (`challenger` | `legacy`), founder, story {hook, body[], quote}, videos[], products[], socials, cohort?, founded, hometown
- **BrandVideo** — source: `upload` | `youtube` | `tiktok` | `instagram`; url; featured flag. Social-linked video is a first-class citizen, not a fallback.
- **Product** — name, price, description, `shopifyHandle?` (the Phase-2 sync key), badge
- **Aisle** — number, name, vibe, neon
- **Cohort** — name, subtitle, description, launchDate, partner

## Phase 2 (Postgres)

Same entities, plus:

```
brands            (id, slug, status: applied|approved|live|paused,
                   shopify_domain, collective_connection_id,
                   commission_pct, slotting_fee_paid_at, ...)
brand_users       (brand_id, email, role)         -- studio auth
videos            (brand_id, source, url, mux_asset_id?, position, featured)
story_blocks      (brand_id, type: hook|paragraph|quote, content, position)
orders_mirror     (shopify_order_id, brand_id, gross, commission, status)
                                                   -- reporting only; money moves in Shopify
cohorts           (slug, partner, launch_date, ...)
applications      (brand info, status, reviewed_by, notes)
```

Rule: **no table ever moves money.** `orders_mirror` is a reporting mirror of Shopify webhook data for the brand dashboard and admin ledger. Shopify Collective's margin is the source of truth for commission (ADR-001).
