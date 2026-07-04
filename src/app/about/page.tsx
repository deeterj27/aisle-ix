export const metadata = { title: "What is this — Aisle IX" };

export default function AboutPage() {
  return (
    <main className="store-floor">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-fog">
          what is this
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-3xl leading-tight sm:text-5xl">
          THE <span className="neon-text-violet flicker-slow">NINTH AISLE</span>
        </h1>
        <div className="mt-8 space-y-6 text-base leading-relaxed text-bone/80 sm:text-lg">
          <p>
            Every grocery store has eight aisles of the same thing. The ninth
            aisle is the one that shows up after dark — where the products
            glow, the founders are on the shelf next to their goods, and
            nothing got there by paying a category manager.
          </p>
          <p>
            Aisle IX is a curated virtual marketplace for emerging brands.
            Brands pay a small slotting fee to get on the shelf, sell on
            consignment, and fulfill every order themselves through their own
            Shopify. What we add is the thing the daytime shelf can&apos;t: a
            story-first storefront where you meet the person who made it
            before you meet the price.
          </p>
          <p>
            The store is open all night. The lights hum. Walk slow.
          </p>
        </div>
      </div>
    </main>
  );
}
