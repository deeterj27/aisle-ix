import Link from "next/link";
import { aisles, brands, brandsInCohort, cohorts } from "@/lib/data";
import { BrandCard, neonText } from "@/components/BrandCard";

export default function Home() {
  const cohort = cohorts[0];
  const cohortBrands = brandsInCohort(cohort.slug);
  const featured = brands.filter((b) => b.era === "challenger").slice(0, 6);

  return (
    <main>
      {/* ============ THE ENTRANCE ============ */}
      <section className="store-floor relative overflow-hidden">
        {/* ambient glow pools */}
        <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(170,255,0,0.14),transparent_65%)]" />
        <div className="pointer-events-none absolute -right-24 top-40 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,62,200,0.12),transparent_65%)]" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-96 rounded-full bg-[radial-gradient(circle,rgba(0,240,255,0.08),transparent_65%)]" />

        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24">
          <p className="hum font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-fog">
            open 24 hours · the lights stay on
          </p>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl leading-[1.05] sm:text-6xl md:text-7xl">
            THE STORE IS <span className="neon-text-acid flicker">CLOSED</span>.
            <br />
            THE <span className="neon-text-pink">GOOD AISLE</span>{" "}
            ISN&apos;T.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-fog sm:text-lg">
            Aisle IX is the ninth aisle — the one that only shows up after
            dark. Emerging brands, stocked next to the stories of the people
            who make them. Meet the founder before you meet the price.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/aisles"
              className="rounded-full bg-acid px-6 py-3 font-[family-name:var(--font-display)] text-sm text-night transition-transform hover:scale-[1.03]"
            >
              WALK THE AISLES
            </Link>
            <Link
              href="/for-brands"
              className="rounded-full border border-white/25 px-6 py-3 text-sm text-bone transition-colors hover:border-neon-pink hover:text-neon-pink"
            >
              stock your brand →
            </Link>
          </div>
        </div>
      </section>

      {/* ============ DAY VS NIGHT ============ */}
      <section className="grid md:grid-cols-2">
        <div className="daylight px-4 py-14 sm:px-10">
          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest opacity-60">
            daytime — the old shelf
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl sm:text-3xl">
            Fluorescent lights. Familiar boxes. Nothing to say.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed opacity-70">
            The daytime aisle is fine. It&apos;s been fine since 1962. Products
            without people, categories without character, price tags without a
            pulse.
          </p>
        </div>
        <div className="store-floor px-4 py-14 sm:px-10">
          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-fog">
            nighttime — aisle ix
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl sm:text-3xl">
            After dark, the{" "}
            <span className="neon-text-cyan">new shelf</span> hums.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-fog">
            Every product here glows because somebody made it on purpose. A
            baker who couldn&apos;t sleep. An EMT with a formula. A
            third-generation fermenter. Their stories are on the shelf, not
            behind it.
          </p>
        </div>
      </section>

      {/* ============ THE AISLES ============ */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="flex items-end justify-between">
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl">
            THE AISLES
          </h2>
          <Link
            href="/aisles"
            className="text-sm text-fog hover:text-bone"
          >
            see all →
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {aisles.map((a) => (
            <Link
              key={a.slug}
              href={`/aisles/${a.slug}`}
              className="shelf-card rounded-xl border border-white/10 bg-shelf p-4 sm:p-5"
            >
              <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest text-fog">
                aisle {a.number}
              </p>
              <p
                className={`mt-1 font-[family-name:var(--font-display)] text-lg sm:text-xl ${neonText(a.neon)}`}
              >
                {a.name}
              </p>
              <p className="mt-1 text-xs text-fog">{a.vibe}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ============ NOW LAUNCHING (cohort) ============ */}
      <section className="border-y border-white/10 bg-night-soft">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="hum font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-neon-pink">
            ● now launching
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl sm:text-3xl">
            {cohort.name}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-fog sm:text-base">
            {cohort.description}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cohortBrands.slice(0, 3).map((b) => (
              <BrandCard key={b.slug} brand={b} />
            ))}
          </div>
          <Link
            href={`/cohorts/${cohort.slug}`}
            className="mt-8 inline-block rounded-full border border-neon-pink/60 px-6 py-3 text-sm text-neon-pink transition-colors hover:bg-neon-pink hover:text-night"
          >
            see the whole cohort →
          </Link>
        </div>
      </section>

      {/* ============ FRESH ON THE SHELF ============ */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl">
          FRESH ON THE <span className="neon-text-butter">SHELF</span>
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((b) => (
            <BrandCard key={b.slug} brand={b} />
          ))}
        </div>
      </section>

      {/* ============ FOR BRANDS STRIP ============ */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="rounded-2xl border border-acid/40 bg-shelf p-8 sm:p-12 neon-box-acid">
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-4xl">
              YOUR BRAND BELONGS ON{" "}
              <span className="whitespace-nowrap">A{" "}</span>
              <span className="neon-text-acid">SHELF THAT GLOWS</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-fog sm:text-base">
              Small slotting fee. Consignment after that — you only pay when
              you sell. You keep your Shopify, you fulfill your orders, and
              your story finally gets the shelf space it deserves.
            </p>
            <Link
              href="/for-brands"
              className="mt-8 inline-block rounded-full bg-acid px-6 py-3 font-[family-name:var(--font-display)] text-sm text-night transition-transform hover:scale-[1.03]"
            >
              GET ON THE SHELF
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
