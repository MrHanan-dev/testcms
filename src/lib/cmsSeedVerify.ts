import type { Payload } from "payload";

export type SeedCheck = {
  id: string;
  label: string;
  ok: boolean;
  detail: string;
};

type GlobalCheck = { slug: string; label: string; test: (doc: Record<string, unknown>) => boolean; hint: string };

const GLOBAL_CHECKS: GlobalCheck[] = [
  { slug: "siteSettings", label: "Site Settings", test: (d) => Array.isArray(d.navCategories) && d.navCategories.length > 0, hint: "Run seed-site-settings" },
  { slug: "home", label: "Home Page", test: (d) => Array.isArray(d.featureItems) && d.featureItems.length > 0 && Array.isArray(d.faqItems) && d.faqItems.length > 0, hint: "Run seed-home" },
  { slug: "about", label: "About Page", test: (d) => Array.isArray(d.whyCards) && d.whyCards.length > 0, hint: "Run seed-about" },
  { slug: "projectManagementPage", label: "Project Management", test: (d) => Array.isArray(d.subServices) && d.subServices.length > 0, hint: "Run seed-pm" },
  { slug: "costEstimationPage", label: "Cost Estimation", test: (d) => Array.isArray(d.mainServices) && d.mainServices.length > 0, hint: "Run seed-ce" },
  { slug: "consultingPage", label: "Consulting", test: (d) => Array.isArray(d.serviceCards) && d.serviceCards.length > 0 && Array.isArray(d.faqItems) && d.faqItems.length > 0, hint: "Run seed-consulting" },
  { slug: "contractManagementPage", label: "Contract Management", test: (d) => Array.isArray(d.serviceCards) && d.serviceCards.length > 0, hint: "Run seed-contract" },
  { slug: "trainingPage", label: "Training", test: (d) => Array.isArray(d.categories) && d.categories.length > 0 && Array.isArray(d.faqItems) && d.faqItems.length > 0, hint: "Run seed-training" },
  { slug: "pmpPage", label: "PMP Page", test: (d) => Array.isArray(d.faqItems) && d.faqItems.length > 0, hint: "Run seed-pmp" },
  { slug: "capmPage", label: "CAPM Page", test: (d) => Array.isArray(d.faqItems) && d.faqItems.length > 0, hint: "Run seed-capm" },
  { slug: "pmicpPage", label: "PMI-CP Page", test: (d) => Array.isArray(d.faqItems) && d.faqItems.length > 0, hint: "Run seed-pmicp" },
  { slug: "partnerPage", label: "Partner Page", test: (d) => typeof d.heroTitleAccent === "string" && d.heroTitleAccent.length > 0, hint: "Run seed-partner" },
  { slug: "privacyPage", label: "Privacy Policy", test: (d) => Array.isArray(d.sections) && d.sections.length > 0, hint: "Run seed-privacy" },
  { slug: "termsPage", label: "Terms of Service", test: (d) => Array.isArray(d.sections) && d.sections.length > 0, hint: "Run seed-terms" },
];

const COLLECTION_CHECKS: { slug: string; label: string; min: number }[] = [
  { slug: "testimonials", label: "Testimonials", min: 3 },
  { slug: "faqs", label: "FAQs", min: 10 },
  { slug: "team-members", label: "Team Members", min: 1 },
  { slug: "forms", label: "Forms", min: 2 },
  { slug: "menus", label: "Menus", min: 4 },
  { slug: "posts", label: "Blog Posts (published)", min: 10 },
];

export async function verifyCmsSeed(payload: Payload): Promise<{
  passed: number;
  failed: number;
  checks: SeedCheck[];
}> {
  const checks: SeedCheck[] = [];

  for (const g of GLOBAL_CHECKS) {
    try {
      const doc = (await payload.findGlobal({ slug: g.slug })) as Record<string, unknown>;
      const ok = g.test(doc ?? {});
      checks.push({ id: `global:${g.slug}`, label: g.label, ok, detail: ok ? "Seeded" : g.hint });
    } catch (e) {
      checks.push({ id: `global:${g.slug}`, label: g.label, ok: false, detail: String(e) });
    }
  }

  for (const c of COLLECTION_CHECKS) {
    try {
      const where =
        c.slug === "posts"
          ? { and: [{ status: { equals: "published" } }, { isDeleted: { not_equals: true } }] }
          : undefined;
      const result = await payload.find({
        collection: c.slug as never,
        limit: 0,
        ...(where ? { where: where as never } : {}),
      });
      const ok = result.totalDocs >= c.min;
      checks.push({
        id: `collection:${c.slug}`,
        label: c.label,
        ok,
        detail: ok ? `${result.totalDocs} records` : `Expected ≥${c.min}, found ${result.totalDocs}`,
      });
    } catch (e) {
      checks.push({ id: `collection:${c.slug}`, label: c.label, ok: false, detail: String(e) });
    }
  }

  const passed = checks.filter((c) => c.ok).length;
  return { passed, failed: checks.length - passed, checks };
}
