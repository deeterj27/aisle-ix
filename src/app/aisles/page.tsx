import Link from "next/link";
import { aisles, brandsInAisle } from "@/lib/data";
import { neonText } from "@/components/BrandCard";

export const metadata = { title: "The Aisles — Aisle IX" };

export default function AislesPage() {
  return (
    <main className="store-floor">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-fog">
          store directory
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-3xl sm:text-5xl">
          WALK THE <span className="neon-text-cyan flicker-slow">AISLES</span>
        </h1>
        <div className="mt-10 space-y-4">
          {aisles.map((a) => {
            const count = brandsInAisle(a.slug).length;
            return (
              <Link
                key={a.slug}
                href={`/aisles/${a.slug}`}
                className="shelf-card flex items-center justify-between rounded-xl border border-white/10 bg-shelf px-5 py-6 sm:px-8"
              >
                <div className="flex items-center gap-5 sm:gap-8">
                  <span
                    className={`font-[family-name:var(--font-display)] text-2xl sm:text-4xl ${neonText(a.neon)}`}
                  >
                    {String(a.number).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-[family-name:var(--font-display)] text-lg sm:text-2xl">
                      {a.name.toUpperCase()}
                    </p>
                    <p className="text-xs text-fog sm:text-sm">{a.vibe}</p>
                  </div>
                </div>
                <span className="font-[family-name:var(--font-mono)] text-xs text-fog">
                  {count} {count === 1 ? "brand" : "brands"} →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
