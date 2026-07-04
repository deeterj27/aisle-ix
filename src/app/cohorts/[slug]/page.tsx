import { notFound } from "next/navigation";
import { brandsInCohort, cohorts, getCohort } from "@/lib/data";
import { BrandCard } from "@/components/BrandCard";

export function generateStaticParams() {
  return cohorts.map((c) => ({ slug: c.slug }));
}

export default async function CohortPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cohort = getCohort(slug);
  if (!cohort) notFound();
  const shelf = brandsInCohort(cohort.slug);

  return (
    <main className="store-floor">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="hum font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-neon-pink">
          ● now launching · in partnership with {cohort.partner}
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-3xl sm:text-5xl">
          {cohort.name.toUpperCase()}
        </h1>
        <p className="mt-2 font-[family-name:var(--font-display)] text-lg text-neon-pink sm:text-xl">
          {cohort.subtitle}
        </p>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-fog sm:text-base">
          {cohort.description}
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shelf.map((b) => (
            <BrandCard key={b.slug} brand={b} />
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-neon-pink/40 bg-shelf p-8 neon-box-pink sm:p-10">
          <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl">
            RUN A COHORT? LAUNCH IT HERE.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-fog">
            Accelerators and brand programs get their own end-cap: every
            cohort brand onboarded together, story pages built, launch drop
            scheduled, first customers in the door. One aisle, one moment,
            every founder lit up.
          </p>
          <a
            href="mailto:jonathan@pickleadvisors.com?subject=Cohort%20launch%20on%20Aisle%20IX"
            className="mt-6 inline-block rounded-full bg-neon-pink px-6 py-3 font-[family-name:var(--font-display)] text-sm text-night transition-transform hover:scale-[1.03]"
          >
            TALK TO US
          </a>
        </div>
      </div>
    </main>
  );
}
