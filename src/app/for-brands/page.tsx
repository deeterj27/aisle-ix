import Link from "next/link";

export const metadata = { title: "Get on the Shelf — Aisle IX" };

const steps = [
  {
    n: "01",
    title: "Apply",
    body: "Tell us who you are, what you make, and why. We curate the shelf — every brand here glows for a reason.",
    neon: "neon-text-acid",
  },
  {
    n: "02",
    title: "Pay the slotting fee",
    body: "A small one-time fee gets you on the shelf — the same way a pop-up grocer works. No retainers, no subscriptions.",
    neon: "neon-text-cyan",
  },
  {
    n: "03",
    title: "Connect your Shopify",
    body: "Your products, prices, and inventory sync from your own store. Orders route straight to you — you fulfill everything.",
    neon: "neon-text-butter",
  },
  {
    n: "04",
    title: "Build your story page",
    body: "Upload founder videos or link them straight from TikTok, Instagram, or YouTube. Update whenever you want — no developer, no waiting.",
    neon: "neon-text-pink",
  },
  {
    n: "05",
    title: "Sell on consignment",
    body: "We take a percentage when you sell — that's it. Your shelf, your fulfillment, your customer. Our lights.",
    neon: "neon-text-violet",
  },
];

export default function ForBrandsPage() {
  return (
    <main className="store-floor">
      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-fog">
          for brands
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-3xl leading-tight sm:text-5xl">
          GET ON THE SHELF THAT{" "}
          <span className="neon-text-acid flicker-slow">GLOWS</span>
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-fog sm:text-lg">
          The daytime shelf buries you between legacy boxes. Aisle IX stocks
          your product next to your story — the founder video, the why, the
          thing that makes someone care before they see the price.
        </p>

        <div className="mt-12 space-y-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="shelf-card flex gap-5 rounded-xl border border-white/10 bg-shelf p-5 sm:gap-8 sm:p-7"
            >
              <span
                className={`font-[family-name:var(--font-display)] text-2xl sm:text-3xl ${s.neon}`}
              >
                {s.n}
              </span>
              <div>
                <h2 className="font-[family-name:var(--font-display)] text-lg sm:text-xl">
                  {s.title.toUpperCase()}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-fog sm:text-base">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-acid/40 bg-shelf p-8 neon-box-acid sm:p-10">
          <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl">
            APPLY FOR A SHELF
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-fog">
            We&apos;re stocking the first shelves now. Applications are
            reviewed by a human who has eaten, drunk, or tried everything on
            this shelf.
          </p>
          <a
            href="mailto:jonathan@pickleadvisors.com?subject=Aisle%20IX%20shelf%20application"
            className="mt-6 inline-block rounded-full bg-acid px-6 py-3 font-[family-name:var(--font-display)] text-sm text-night transition-transform hover:scale-[1.03]"
          >
            APPLY NOW
          </a>
          <p className="mt-4 font-[family-name:var(--font-mono)] text-xs text-fog/70">
            self-serve onboarding launches with the first cohort
          </p>
        </div>

        <p className="mt-10 text-sm text-fog">
          Running an accelerator or brand cohort?{" "}
          <Link
            href="/cohorts/launch-lab-01"
            className="text-neon-pink hover:underline"
          >
            See how cohort launches work →
          </Link>
        </p>
      </div>
    </main>
  );
}
