// Aisle IX — core domain types
// v1 data layer is file-based (seed data) and swaps to Postgres in Phase 2
// without changing these shapes.

export type NeonColor =
  | "acid" // acid green
  | "pink" // electric pink
  | "cyan" // fluorescent cyan
  | "violet" // ultraviolet
  | "butter" // neon yellow
  | "tangerine"; // neon orange

export interface BrandVideo {
  id: string;
  title: string;
  /** 'upload' = hosted file, 'youtube' | 'tiktok' | 'instagram' = social link */
  source: "upload" | "youtube" | "tiktok" | "instagram";
  url: string;
  /** poster/thumb for the shelf; falls back to brand glow tile */
  posterHint?: string;
  featured?: boolean;
}

export interface Product {
  id: string;
  name: string;
  price: number; // USD
  description: string;
  /** Shopify product handle on the brand's own store (Phase 2 sync) */
  shopifyHandle?: string;
  badge?: string; // "new" | "best seller" | etc.
}

export interface Brand {
  slug: string;
  name: string;
  tagline: string;
  neon: NeonColor;
  aisle: string; // aisle slug
  founder: {
    name: string;
    title: string;
  };
  /** The story blocks — a brand page is a story, not a shelf */
  story: {
    hook: string; // one-line neon sign above the story
    body: string[]; // paragraphs
    quote?: string; // founder pull-quote
  };
  videos: BrandVideo[];
  products: Product[];
  socials: Partial<Record<"instagram" | "tiktok" | "youtube" | "site", string>>;
  /** legacy = the daytime world; challenger = glows at night */
  era: "challenger" | "legacy";
  cohort?: string; // cohort slug if launched as part of one
  founded: string; // year
  hometown: string;
}

export interface Aisle {
  slug: string;
  number: number; // aisle number on the sign
  name: string;
  vibe: string; // the aisle sign subtitle
  neon: NeonColor;
}

export interface Cohort {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  launchDate: string;
  partner: string;
}
