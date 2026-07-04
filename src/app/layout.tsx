import type { Metadata } from "next";
import { Archivo_Black, Space_Grotesk, Space_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const display = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
});

const mono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Aisle IX — the store is open all night",
  description:
    "A virtual marketplace where you meet the founder before you meet the price. Emerging brands, founder-led stories, glowing on the shelf after dark.",
  openGraph: {
    title: "Aisle IX",
    description: "The ninth aisle. Founder-led brands, open all night.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} min-h-dvh`}
      >
        <header className="sticky top-0 z-50 border-b border-white/10 bg-night/85 backdrop-blur-md">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
            <Link
              href="/"
              className="font-[family-name:var(--font-display)] text-lg tracking-wide"
            >
              <span className="text-bone">AISLE</span>{" "}
              <span className="neon-text-acid hum">IX</span>
            </Link>
            <div className="flex items-center gap-4 text-sm sm:gap-6">
              <Link
                href="/aisles"
                className="text-fog transition-colors hover:text-bone"
              >
                the aisles
              </Link>
              <Link
                href="/cohorts/launch-lab-01"
                className="hidden text-fog transition-colors hover:text-bone sm:block"
              >
                now launching
              </Link>
              <Link
                href="/for-brands"
                className="rounded-full border border-white/20 px-3.5 py-1.5 text-bone transition-colors hover:border-acid hover:text-acid"
              >
                get on the shelf
              </Link>
            </div>
          </nav>
        </header>
        {children}
        <footer className="border-t border-white/10 px-4 py-10 sm:px-6">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-[family-name:var(--font-display)] text-lg">
                AISLE <span className="neon-text-acid">IX</span>
              </p>
              <p className="mt-2 max-w-sm text-sm text-fog">
                The ninth aisle. Where the next generation of brands is stocked
                after dark. Brands fulfill every order; we keep the lights on.
              </p>
            </div>
            <div className="flex gap-6 text-sm text-fog">
              <Link href="/aisles" className="hover:text-bone">
                shop
              </Link>
              <Link href="/for-brands" className="hover:text-bone">
                for brands
              </Link>
              <Link href="/about" className="hover:text-bone">
                what is this
              </Link>
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-6xl font-[family-name:var(--font-mono)] text-xs text-fog/60">
            © 2026 Aisle IX — open all night
          </p>
        </footer>
      </body>
    </html>
  );
}
