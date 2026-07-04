import Link from "next/link";
import type { Brand, NeonColor } from "@/lib/types";

const textCls: Record<NeonColor, string> = {
  acid: "neon-text-acid",
  pink: "neon-text-pink",
  cyan: "neon-text-cyan",
  violet: "neon-text-violet",
  butter: "neon-text-butter",
  tangerine: "neon-text-tangerine",
};

const boxCls: Record<NeonColor, string> = {
  acid: "neon-box-acid",
  pink: "neon-box-pink",
  cyan: "neon-box-cyan",
  violet: "neon-box-violet",
  butter: "neon-box-butter",
  tangerine: "neon-box-tangerine",
};

export function neonText(c: NeonColor) {
  return textCls[c];
}
export function neonBox(c: NeonColor) {
  return boxCls[c];
}

export function BrandCard({ brand }: { brand: Brand }) {
  const legacy = brand.era === "legacy";
  if (legacy) {
    return (
      <Link
        href={`/brands/${brand.slug}`}
        className="shelf-card daylight block rounded-xl border border-black/10 p-5"
      >
        <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest opacity-60">
          legacy shelf
        </p>
        <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl">
          {brand.name}
        </h3>
        <p className="mt-1 text-sm opacity-70">{brand.tagline}</p>
        <p className="mt-4 text-xs opacity-50">est. {brand.founded}</p>
      </Link>
    );
  }
  return (
    <Link
      href={`/brands/${brand.slug}`}
      className={`shelf-card block rounded-xl border bg-shelf p-5 ${boxCls[brand.neon]}`}
    >
      <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest text-fog">
        {brand.hometown} · est. {brand.founded}
      </p>
      <h3
        className={`mt-2 font-[family-name:var(--font-display)] text-xl ${textCls[brand.neon]}`}
      >
        {brand.name}
      </h3>
      <p className="mt-1 text-sm text-bone/80">{brand.tagline}</p>
      <p className="mt-4 line-clamp-2 text-xs leading-relaxed text-fog">
        {brand.story.hook}
      </p>
      <p className="mt-4 font-[family-name:var(--font-mono)] text-[11px] text-fog/70">
        {brand.videos.length > 0
          ? `▶ ${brand.videos.length} founder ${brand.videos.length === 1 ? "video" : "videos"}`
          : "—"}{" "}
        · {brand.products.length} products
      </p>
    </Link>
  );
}
