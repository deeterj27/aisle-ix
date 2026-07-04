import Link from "next/link";
import { notFound } from "next/navigation";
import { brands, getAisle, getBrand } from "@/lib/data";
import { neonBox, neonText } from "@/components/BrandCard";
import { VideoBlock } from "@/components/VideoBlock";

export function generateStaticParams() {
  return brands.map((b) => ({ slug: b.slug }));
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) notFound();
  const aisle = getAisle(brand.aisle);
  const featuredVideo = brand.videos.find((v) => v.featured) ?? brand.videos[0];
  const otherVideos = brand.videos.filter((v) => v !== featuredVideo);
  const legacy = brand.era === "legacy";

  return (
    <main className={legacy ? "daylight" : "store-floor"}>
      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
        {aisle && (
          <Link
            href={`/aisles/${aisle.slug}`}
            className={`font-[family-name:var(--font-mono)] text-xs ${legacy ? "opacity-60 hover:opacity-100" : "text-fog hover:text-bone"}`}
          >
            ← aisle {String(aisle.number).padStart(2, "0")} · {aisle.name}
          </Link>
        )}

        {/* neon sign */}
        <p
          className={`mt-8 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] ${legacy ? "opacity-60" : "text-fog"}`}
        >
          {brand.hometown} · est. {brand.founded}
        </p>
        <h1
          className={`mt-3 font-[family-name:var(--font-display)] text-4xl sm:text-6xl ${legacy ? "" : `${neonText(brand.neon)} flicker-slow`}`}
        >
          {brand.name.toUpperCase()}
        </h1>
        <p
          className={`mt-3 text-lg ${legacy ? "opacity-70" : "text-bone/85"}`}
        >
          {brand.tagline}
        </p>

        {/* story hook */}
        <p
          className={`mt-10 font-[family-name:var(--font-display)] text-xl leading-snug sm:text-2xl ${legacy ? "opacity-80" : ""}`}
        >
          {brand.story.hook}
        </p>

        {/* featured founder video — the heart of the page */}
        {featuredVideo && (
          <div className="mt-8">
            <VideoBlock video={featuredVideo} />
          </div>
        )}

        {/* story body */}
        <div
          className={`mt-8 space-y-5 text-base leading-relaxed sm:text-lg ${legacy ? "opacity-75" : "text-bone/80"}`}
        >
          {brand.story.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* founder pull-quote */}
        {brand.story.quote && (
          <blockquote
            className={`mt-10 rounded-xl border bg-shelf p-6 sm:p-8 ${legacy ? "border-black/10 bg-white/40" : neonBox(brand.neon)}`}
          >
            <p
              className={`font-[family-name:var(--font-display)] text-lg leading-snug sm:text-xl ${legacy ? "" : neonText(brand.neon)}`}
            >
              “{brand.story.quote}”
            </p>
            <footer
              className={`mt-4 text-sm ${legacy ? "opacity-60" : "text-fog"}`}
            >
              — {brand.founder.name}, {brand.founder.title}
            </footer>
          </blockquote>
        )}

        {/* more videos */}
        {otherVideos.length > 0 && (
          <section className="mt-12">
            <h2 className="font-[family-name:var(--font-display)] text-xl">
              MORE FROM THE {legacy ? "SHELF" : "BACK ROOM"}
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {otherVideos.map((v) => (
                <VideoBlock key={v.id} video={v} />
              ))}
            </div>
          </section>
        )}

        {/* socials */}
        {Object.keys(brand.socials).length > 0 && (
          <div className="mt-10 flex flex-wrap gap-3">
            {Object.entries(brand.socials).map(([k, url]) => (
              <a
                key={k}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-full border px-4 py-2 font-[family-name:var(--font-mono)] text-xs transition-colors ${legacy ? "border-black/20 hover:bg-black/5" : "border-white/20 text-fog hover:border-white/50 hover:text-bone"}`}
              >
                {k} ↗
              </a>
            ))}
          </div>
        )}

        {/* THE SHELF — products come after the story earns it */}
        <section className="mt-14">
          <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl">
            NOW THAT YOU KNOW {legacy ? "THE CATEGORY" : "THE STORY"} —{" "}
            <span className={legacy ? "" : neonText(brand.neon)}>
              THE SHELF
            </span>
          </h2>
          <div className="mt-6 space-y-3">
            {brand.products.map((p) => (
              <div
                key={p.id}
                className={`shelf-card flex items-center justify-between gap-4 rounded-xl border p-5 ${legacy ? "border-black/10 bg-white/40" : "border-white/10 bg-shelf"}`}
              >
                <div>
                  <p className="font-medium">
                    {p.name}
                    {p.badge && (
                      <span
                        className={`ml-2 rounded-full border px-2 py-0.5 font-[family-name:var(--font-mono)] text-[10px] uppercase ${legacy ? "border-black/20" : `${neonText(brand.neon)} border-current`}`}
                      >
                        {p.badge}
                      </span>
                    )}
                  </p>
                  <p
                    className={`mt-1 text-sm ${legacy ? "opacity-60" : "text-fog"}`}
                  >
                    {p.description}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-[family-name:var(--font-mono)] text-lg">
                    ${p.price}
                  </p>
                  <button
                    className={`mt-2 rounded-full px-4 py-1.5 text-xs font-semibold transition-transform hover:scale-[1.04] ${legacy ? "bg-black/80 text-white" : "bg-bone text-night"}`}
                    title="Checkout connects to the brand's Shopify in Phase 2"
                  >
                    add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <p
            className={`mt-4 font-[family-name:var(--font-mono)] text-xs ${legacy ? "opacity-50" : "text-fog/70"}`}
          >
            fulfilled by {brand.name} · powered by their own Shopify
          </p>
        </section>
      </div>
    </main>
  );
}
