import type { Aisle, Brand, Cohort } from "./types";

// ============================================================
// SEED DATA — 10 demo brands, 6 aisles, 1 cohort showcase.
// All brands are fictional but realistic. The pitch demo never
// depends on live signups.
// ============================================================

export const aisles: Aisle[] = [
  { slug: "beverage", number: 1, name: "Beverage", vibe: "cold drinks, glowing", neon: "cyan" },
  { slug: "snacks", number: 2, name: "Snacks", vibe: "the good shelf", neon: "acid" },
  { slug: "pantry", number: 3, name: "Pantry", vibe: "staples with a pulse", neon: "butter" },
  { slug: "sweets", number: 4, name: "Sweets", vibe: "after-hours sugar", neon: "pink" },
  { slug: "frozen", number: 5, name: "Frozen", vibe: "the cold section hums", neon: "violet" },
  { slug: "wellness", number: 6, name: "Wellness", vibe: "feel something", neon: "tangerine" },
];

export const cohorts: Cohort[] = [
  {
    slug: "launch-lab-01",
    name: "Launch Lab · Cohort 01",
    subtitle: "Now stocking the ninth aisle",
    description:
      "Six founder-led brands entering the store together. Every cohort gets its own end-cap: story pages, launch drop, and first customers — all in one aisle.",
    launchDate: "2026-07",
    partner: "Launch Lab",
  },
];

export const brands: Brand[] = [
  {
    slug: "moonmilk",
    name: "Moonmilk",
    tagline: "sleep soda for the wide awake",
    neon: "violet",
    aisle: "beverage",
    era: "challenger",
    cohort: "launch-lab-01",
    founded: "2024",
    hometown: "Brooklyn, NY",
    founder: { name: "Ana Reyes", title: "founder & recovering insomniac" },
    story: {
      hook: "she made it because she couldn't sleep",
      body: [
        "Ana spent four years working overnight shifts at a Brooklyn bakery, wired at 4am and asleep at noon. Melatonin made her groggy. Tea did nothing. So she started brewing her own thing in the bakery's off-hours — tart cherry, magnesium, passionflower, carbonated because flat drinks felt like medicine.",
        "Moonmilk is that recipe, unchanged except for the label. It's sold from bakery counters and bodega fridges across the borough, mostly by word of mouth from other night-shift people.",
      ],
      quote: "Every can is for somebody who's still up. I know exactly who I make this for.",
    },
    videos: [
      { id: "mm-1", title: "Why I started Moonmilk", source: "youtube", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", featured: true },
      { id: "mm-2", title: "Night shift stories", source: "tiktok", url: "https://www.tiktok.com/@moonmilk" },
    ],
    products: [
      { id: "mm-p1", name: "Moonmilk Original — 12 pack", price: 42, description: "Tart cherry + magnesium + passionflower. The one that started it.", badge: "best seller" },
      { id: "mm-p2", name: "Moonmilk Lavender — 12 pack", price: 42, description: "Softer, floral, for the almost-asleep." },
    ],
    socials: { instagram: "https://instagram.com/moonmilk", tiktok: "https://tiktok.com/@moonmilk" },
  },
  {
    slug: "static-snacks",
    name: "Static",
    tagline: "chips that bite back",
    neon: "acid",
    aisle: "snacks",
    era: "challenger",
    cohort: "launch-lab-01",
    founded: "2023",
    hometown: "Queens, NY",
    founder: { name: "Dev Patel", title: "founder, flavor maximalist" },
    story: {
      hook: "the flavor his family was told to tone down",
      body: [
        "Dev's family ran a snack counter in Jackson Heights for nineteen years. Distributors kept telling his dad the flavors were 'too much for the mainstream shelf.' Dev took that as a spec sheet.",
        "Static is chaat masala, gunpowder chili, and mango pickle — on a kettle chip, at full volume. No 'inspired by' hedging on the label. The bag says exactly what it is.",
      ],
      quote: "Too much for the shelf was the whole point. So we found a different shelf.",
    },
    videos: [
      { id: "st-1", title: "19 years at the counter", source: "youtube", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", featured: true },
      { id: "st-2", title: "Flavor lab: gunpowder batch 12", source: "instagram", url: "https://instagram.com/staticsnacks" },
    ],
    products: [
      { id: "st-p1", name: "Gunpowder Chili — 6 bags", price: 28, description: "The loud one. Kettle-cooked, unapologetic.", badge: "best seller" },
      { id: "st-p2", name: "Mango Pickle — 6 bags", price: 28, description: "Sweet, sour, hot. In that order." },
      { id: "st-p3", name: "Chaat Party Mix — 4 bags", price: 24, description: "The family recipe, bagged." },
    ],
    socials: { instagram: "https://instagram.com/staticsnacks", tiktok: "https://tiktok.com/@staticsnacks" },
  },
  {
    slug: "brine-and-vine",
    name: "Brine & Vine",
    tagline: "pickles with a pulse",
    neon: "cyan",
    aisle: "pantry",
    era: "challenger",
    founded: "2022",
    hometown: "Gowanus, Brooklyn",
    founder: { name: "Marta Kowalski", title: "third-generation fermenter" },
    story: {
      hook: "her grandmother's crock, her rules",
      body: [
        "Marta learned to ferment in her grandmother's basement in Greenpoint — the same ceramic crocks, the same patience. What changed is everything else: yuzu kosho pickles, black garlic kraut, hot honey dills that sell out at every market she works.",
        "Brine & Vine still ferments in small batches in a shared Gowanus kitchen. Every jar is dated and signed by whoever packed it.",
      ],
      quote: "Fermentation is just patience you can eat.",
    },
    videos: [
      { id: "bv-1", title: "The crock that started it", source: "youtube", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", featured: true },
    ],
    products: [
      { id: "bv-p1", name: "Hot Honey Dills", price: 14, description: "The market sell-out. Sweet heat, real crunch.", badge: "best seller" },
      { id: "bv-p2", name: "Yuzu Kosho Spears", price: 15, description: "Citrus, chili, brine. Unreasonably good on sandwiches." },
      { id: "bv-p3", name: "Black Garlic Kraut", price: 13, description: "Deep, savory, slightly sweet ferment." },
    ],
    socials: { instagram: "https://instagram.com/brineandvine" },
  },
  {
    slug: "velvet-hour",
    name: "Velvet Hour",
    tagline: "dessert for adults who stayed up",
    neon: "pink",
    aisle: "sweets",
    era: "challenger",
    cohort: "launch-lab-01",
    founded: "2024",
    hometown: "Harlem, NY",
    founder: { name: "Simone Baptiste", title: "pastry chef gone rogue" },
    story: {
      hook: "fine-dining dessert, corner-store price",
      body: [
        "Simone ran pastry at two Michelin-starred kitchens before deciding the desserts she loved most shouldn't require a reservation. Velvet Hour makes single-serve chocolate cremeux cups — the texture of a $19 plated dessert, in a fridge pack.",
        "She still tempers every batch of chocolate herself, in a Harlem commissary, usually after midnight. The name is the hour she works best.",
      ],
      quote: "Luxury isn't the price tag. It's the texture.",
    },
    videos: [
      { id: "vh-1", title: "From Michelin to the bodega fridge", source: "youtube", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", featured: true },
      { id: "vh-2", title: "Midnight tempering", source: "tiktok", url: "https://tiktok.com/@velvethour" },
    ],
    products: [
      { id: "vh-p1", name: "Dark Cremeux Cup — 4 pack", price: 22, description: "72% single-origin, salted. The flagship.", badge: "best seller" },
      { id: "vh-p2", name: "Praline Cloud — 4 pack", price: 24, description: "Hazelnut praline under whipped ganache." },
    ],
    socials: { instagram: "https://instagram.com/velvethour", tiktok: "https://tiktok.com/@velvethour" },
  },
  {
    slug: "glacier-line",
    name: "Glacier Line",
    tagline: "dumplings from the cold case",
    neon: "violet",
    aisle: "frozen",
    era: "challenger",
    founded: "2023",
    hometown: "Sunset Park, Brooklyn",
    founder: { name: "Wei Chen", title: "founder, dumpling lifer" },
    story: {
      hook: "his mother's fold, flash-frozen",
      body: [
        "Wei's mother folded dumplings for thirty years in a Sunset Park restaurant that closed during the pandemic. Glacier Line exists so the fold doesn't disappear: same pleating, same filling ratios, flash-frozen the same day they're made.",
        "The bags are numbered by batch. Wei's mother still inspects the first tray of every run.",
      ],
      quote: "You can freeze a dumpling. You can't fake a fold.",
    },
    videos: [
      { id: "gl-1", title: "The fold", source: "youtube", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", featured: true },
    ],
    products: [
      { id: "gl-p1", name: "Pork & Chive — 24 count", price: 26, description: "The original. Batch-numbered.", badge: "best seller" },
      { id: "gl-p2", name: "Shrimp & Ginger — 24 count", price: 29, description: "Bright, clean, hand-pleated." },
    ],
    socials: { instagram: "https://instagram.com/glacierline" },
  },
  {
    slug: "hum",
    name: "HUM",
    tagline: "electrolytes without the influencer",
    neon: "tangerine",
    aisle: "wellness",
    era: "challenger",
    cohort: "launch-lab-01",
    founded: "2025",
    hometown: "Ridgewood, Queens",
    founder: { name: "Jordan Okafor", title: "ex-EMT, founder" },
    story: {
      hook: "built from an ambulance, not a marketing deck",
      body: [
        "Jordan spent six years as an EMT handing out oral rehydration salts. Every sports drink on the shelf was either candy or a supplement pyramid scheme. HUM is the clinical formula — sodium, potassium, glucose in actual rehydration ratios — flavored like something you'd want.",
        "No proprietary blends. The full formula is printed on the front of the packet, in the biggest type on the label.",
      ],
      quote: "The formula isn't secret. It's the whole product. That's the point.",
    },
    videos: [
      { id: "hm-1", title: "What the back of an ambulance teaches you", source: "youtube", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", featured: true },
    ],
    products: [
      { id: "hm-p1", name: "HUM Citrus — 30 packets", price: 32, description: "The clinical ratio, lemon-lime.", badge: "best seller" },
      { id: "hm-p2", name: "HUM Berry — 30 packets", price: 32, description: "Same salts, darker fruit." },
    ],
    socials: { instagram: "https://instagram.com/drinkhum", tiktok: "https://tiktok.com/@drinkhum" },
  },
  {
    slug: "night-owl-coffee",
    name: "Night Owl",
    tagline: "cold brew for the second shift",
    neon: "butter",
    aisle: "beverage",
    era: "challenger",
    founded: "2022",
    hometown: "Bushwick, Brooklyn",
    founder: { name: "Rosa Delgado", title: "founder & third-shift veteran" },
    story: {
      hook: "coffee brewed by people who actually work nights",
      body: [
        "Rosa ran the overnight window at a 24-hour diner for eight years. Night Owl started as the cold brew she kegged for her coworkers — strong enough to matter at 3am, smooth enough to drink fast.",
        "The roastery hires night-shift workers first and pays shift differential, because Rosa remembers.",
      ],
      quote: "Daytime coffee culture had enough brands. Ours clock in at 11pm.",
    },
    videos: [
      { id: "no-1", title: "Eight years at the window", source: "youtube", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", featured: true },
    ],
    products: [
      { id: "no-p1", name: "Second Shift Cold Brew — 4 pack", price: 24, description: "The keg recipe, canned.", badge: "best seller" },
      { id: "no-p2", name: "Last Call Decaf — 4 pack", price: 24, description: "For the ride home." },
    ],
    socials: { instagram: "https://instagram.com/nightowlbrew" },
  },
  {
    slug: "cloud-nine-mochi",
    name: "Cloud Nine",
    tagline: "mochi donuts, open late",
    neon: "pink",
    aisle: "sweets",
    era: "challenger",
    cohort: "launch-lab-01",
    founded: "2024",
    hometown: "Flushing, Queens",
    founder: { name: "Grace Lin", title: "founder, texture obsessive" },
    story: {
      hook: "the chew is the whole thing",
      body: [
        "Grace tested 41 flour blends to get the chew right — that specific mochi bounce that survives a freezer and a toaster oven. Cloud Nine ships par-baked rings you finish at home in six minutes.",
        "Flavor drops are announced only on the brand's IG story, usually at midnight, usually sold out by morning.",
      ],
      quote: "41 blends. I still have the spreadsheets. Nobody gets to call that luck.",
    },
    videos: [
      { id: "cn-1", title: "Blend #41", source: "youtube", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", featured: true },
      { id: "cn-2", title: "Midnight drop culture", source: "instagram", url: "https://instagram.com/cloudninemochi" },
    ],
    products: [
      { id: "cn-p1", name: "Original Glaze — 6 rings", price: 21, description: "The blend-41 chew, classic glaze.", badge: "best seller" },
      { id: "cn-p2", name: "Black Sesame — 6 rings", price: 23, description: "Toasty, nutty, not too sweet." },
    ],
    socials: { instagram: "https://instagram.com/cloudninemochi", tiktok: "https://tiktok.com/@cloudninemochi" },
  },
  {
    slug: "ferro",
    name: "Ferro",
    tagline: "pasta from a one-room shop",
    neon: "butter",
    aisle: "pantry",
    era: "challenger",
    cohort: "launch-lab-01",
    founded: "2023",
    hometown: "Carroll Gardens, Brooklyn",
    founder: { name: "Nico Ferrante", title: "founder, bronze-die loyalist" },
    story: {
      hook: "one room, one extruder, one standard",
      body: [
        "Ferro is a one-room pasta shop with a bronze-die extruder Nico bought at an estate sale from a shuttered Bensonhurst pastificio. The die is older than he is. The rough texture it cuts is why sauce actually sticks.",
        "He makes four shapes. He will not make a fifth until the four are perfect everywhere they're sold.",
      ],
      quote: "Scale is easy. Standards are hard. We're doing standards first.",
    },
    videos: [
      { id: "fe-1", title: "The estate sale die", source: "youtube", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", featured: true },
    ],
    products: [
      { id: "fe-p1", name: "Rigatoni — 3 boxes", price: 27, description: "The flagship cut. Rough, thick, sauce-hungry.", badge: "best seller" },
      { id: "fe-p2", name: "Casarecce — 3 boxes", price: 27, description: "The twist that holds everything." },
    ],
    socials: { instagram: "https://instagram.com/ferropasta" },
  },
  {
    slug: "general-foods-classic",
    name: "Grandline Foods",
    tagline: "the daytime aisle",
    neon: "cyan",
    aisle: "pantry",
    era: "legacy",
    founded: "1962",
    hometown: "Everywhere, USA",
    founder: { name: "The Category", title: "est. 1962" },
    story: {
      hook: "this is what the daytime shelf looks like",
      body: [
        "Grandline is a stand-in for the legacy shelf: fine products, fluorescent-office packaging, nothing to say. It exists in the store as contrast — the daylight world the challengers are walking out of.",
        "Every aisle needs its 'before' picture.",
      ],
    },
    videos: [],
    products: [
      { id: "gf-p1", name: "Standard Crackers", price: 4, description: "They are crackers." },
    ],
    socials: {},
  },
];

// ---------- lookups ----------

export function getBrand(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}

export function getAisle(slug: string): Aisle | undefined {
  return aisles.find((a) => a.slug === slug);
}

export function getCohort(slug: string): Cohort | undefined {
  return cohorts.find((c) => c.slug === slug);
}

export function brandsInAisle(aisleSlug: string): Brand[] {
  return brands.filter((b) => b.aisle === aisleSlug);
}

export function brandsInCohort(cohortSlug: string): Brand[] {
  return brands.filter((b) => b.cohort === cohortSlug);
}

export function challengerBrands(): Brand[] {
  return brands.filter((b) => b.era === "challenger");
}
