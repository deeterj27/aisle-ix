# Brand Onboarding — the seamless add-a-brand runbook

## The promise
A brand goes from "found us" to "live on the shelf with their story" with zero developer involvement.

## v1 (manual, today)
1. Brand emails via /for-brands CTA.
2. Jonathan approves (curation is a feature — every brand glows for a reason).
3. Add a `Brand` entry to `src/lib/data.ts`: story blocks written from a 20-minute founder call or their existing social content; videos = paste their TikTok/IG/YouTube links.
4. `git push` → CI deploys. Brand is live in ~3 minutes.

Time per brand: under 1 hour including the story pass. This is fine up to ~25 brands.

## Phase 2 (self-serve Brand OS)
1. **Apply** — /apply form: brand basics, socials, why-you.
2. **Approve** — admin reviews; approval email with magic link.
3. **Pay slotting fee** — Shopify product / Stripe payment link, one-time.
4. **Connect Shopify** — brand accepts Aisle IX's Shopify Collective invitation; products import with commission margin set.
5. **Build story page** — /studio: write story blocks, paste video links (YouTube/TikTok/IG render natively) or upload direct (Mux). Live preview in the night-store style. Publish button.
6. **Live** — page deploys instantly; brand can update videos/story anytime.

## Video rules
- Social-first: pasting a link is the primary flow (brands already make this content).
- YouTube renders as embedded player (nocookie). TikTok/IG render as glowing link-out tiles (embed APIs are unstable and heavy; link-outs also drive their social growth — brands like this).
- Direct upload (Mux) only when a brand asks for it.
