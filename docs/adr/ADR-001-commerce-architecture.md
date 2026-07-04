# ADR-001 — Commerce Architecture: Shopify-connected consignment

**Status:** Proposed (needs Jonathan's confirmation before real-money wiring — Phase 2)
**Date:** 2026-07-04

## Context

Aisle IX's business model is fixed: brands pay a small slotting fee, sell on consignment (Aisle IX takes ~20–30% of sales), keep their own Shopify stores, and fulfill their own orders. Aisle IX holds zero inventory and must never become a payments company or a logistics company.

The commerce layer must answer: **when a shopper hits "buy" on Aisle IX, whose checkout runs, who is merchant of record, and how does the commission get collected?**

## Options considered

### Option A — Shopify Collective (recommended)
Aisle IX runs its own Shopify store. Each brand's store connects via **Shopify Collective** (Shopify's native retailer↔supplier network):
- Brand (supplier) lists products to Aisle IX (retailer); products import with a negotiated margin (our commission, expressed as the retailer margin).
- Shopper checks out **on Aisle IX's Shopify checkout** — one cart, multiple brands possible.
- Order auto-splits: each brand receives their portion as an order **in their own Shopify admin**, fulfills it, and tracking syncs back automatically.
- Payments flow through Shopify Collective's built-in payment terms — the margin (commission) is retained automatically. No custom payout engine.

**Pros:** purpose-built for exactly this model; brands stay in their own Shopify; commission = margin, enforced by the platform; multi-brand carts; no custom payments code; merchant-of-record questions handled inside Shopify's rails.
**Cons:** US-only (fine — launch market is US); both sides need Shopify (acceptable — Shopify connection is already a listing requirement); Collective eligibility requirements on the retailer store (solvable; worst case start with Headless/Buy Button hybrid below).

### Option B — Custom storefront + per-brand Shopify Storefront API
Keep the Next.js storefront, create carts via each brand's Storefront API, redirect to each brand's own checkout. Commission tracked via order attributes/webhooks + monthly invoicing.
**Pros:** zero marketplace infrastructure; brands are unambiguous merchant of record.
**Cons:** no unified cart across brands; commission collection is by invoice (chasing brands for money); weaker shopper UX; attribution is honor-system fragile.

### Option C — Single Aisle IX Shopify store with consignment SKUs + Stripe Connect payouts
Aisle IX lists everything on its own store, becomes merchant of record, pays brands out via Stripe Connect.
**Pros:** full control.
**Cons:** Aisle IX becomes MoR (sales tax, refunds, chargebacks, liability), builds a payout engine — exactly what we said we'd never build. Rejected.

## Decision

**Option A: Shopify Collective**, with the Next.js night-store as a **headless layer on top of the Aisle IX Shopify store** (Storefront API for cart/checkout handoff). If Collective eligibility blocks us at setup, fall back to Option B for the first cohort and migrate.

## Consequences

- Phase 2 work = create Aisle IX Shopify store, enable Collective, connect one real test brand store, wire Storefront API cart into the Next.js front end, verify a test-mode purchase end-to-end (order lands in brand admin, margin retained).
- Slotting fee is separate and simple: a Shopify product ("Shelf Slot") or Stripe payment link — one-time, no infrastructure.
- The static v1 site ships with `add to cart` as a visual affordance; real cart wiring lands in Phase 2 behind the same UI.
- Commission % lives per-brand in the Collective price-list/margin config — no custom ledger needed for v1; the admin ledger becomes a *reporting* view, not a money-moving system.
