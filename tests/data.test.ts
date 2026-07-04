import { describe, expect, it } from "vitest";
import {
  aisles,
  brands,
  brandsInAisle,
  brandsInCohort,
  cohorts,
  getBrand,
} from "../src/lib/data";

describe("seed data integrity", () => {
  it("brand slugs are unique", () => {
    const slugs = brands.map((b) => b.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("every brand belongs to a real aisle", () => {
    const aisleSlugs = new Set(aisles.map((a) => a.slug));
    for (const b of brands) {
      expect(aisleSlugs.has(b.aisle), `${b.slug} -> ${b.aisle}`).toBe(true);
    }
  });

  it("every cohort reference resolves", () => {
    const cohortSlugs = new Set(cohorts.map((c) => c.slug));
    for (const b of brands) {
      if (b.cohort) {
        expect(cohortSlugs.has(b.cohort), `${b.slug} -> ${b.cohort}`).toBe(
          true
        );
      }
    }
  });

  it("every challenger brand has at least one video and one product", () => {
    for (const b of brands.filter((x) => x.era === "challenger")) {
      expect(b.videos.length, `${b.slug} videos`).toBeGreaterThan(0);
      expect(b.products.length, `${b.slug} products`).toBeGreaterThan(0);
    }
  });

  it("product prices are positive numbers", () => {
    for (const b of brands) {
      for (const p of b.products) {
        expect(p.price, `${b.slug}/${p.id}`).toBeGreaterThan(0);
      }
    }
  });

  it("cohort showcase has brands", () => {
    expect(brandsInCohort("launch-lab-01").length).toBeGreaterThanOrEqual(4);
  });

  it("every aisle has at least one brand stocked", () => {
    for (const a of aisles) {
      expect(brandsInAisle(a.slug).length, a.slug).toBeGreaterThan(0);
    }
  });

  it("lookups behave", () => {
    expect(getBrand("moonmilk")?.name).toBe("Moonmilk");
    expect(getBrand("does-not-exist")).toBeUndefined();
  });
});
