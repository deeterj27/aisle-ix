import Link from "next/link";
import { notFound } from "next/navigation";
import { aisles, brandsInAisle, getAisle } from "@/lib/data";
import { BrandCard, neonText } from "@/components/BrandCard";

export function generateStaticParams() {
  return aisles.map((a) => ({ slug: a.slug }));
}

export default async function AislePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const aisle = getAisle(slug);
  if (!aisle) notFound();
  const shelf = brandsInAisle(aisle.slug);

  return (
    <main className="store-floor">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <Link
          href="/aisles"
          className="font-[family-name:var(--font-mono)] text-xs text-fog hover:text-bone"
        >
          ← store directory
        </Link>
        <p className="mt-6 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-fog">
          aisle {String(aisle.number).padStart(2, "0")}
        </p>
        <h1
          className={`mt-3 font-[family-name:var(--font-display)] text-3xl sm:text-5xl ${neonText(aisle.neon)} flicker-slow`}
        >
          {aisle.name.toUpperCase()}
        </h1>
        <p className="mt-2 text-sm text-fog sm:text-base">{aisle.vibe}</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shelf.map((b) => (
            <BrandCard key={b.slug} brand={b} />
          ))}
        </div>
        {shelf.length === 0 && (
          <p className="mt-10 text-fog">
            This shelf is being restocked. Check back after dark.
          </p>
        )}
      </div>
    </main>
  );
}
