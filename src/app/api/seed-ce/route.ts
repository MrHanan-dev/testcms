import { join } from "node:path";
import { existsSync } from "node:fs";
import { NextResponse, type NextRequest } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";
import { CE_CONTENT } from "@/data/ceContent";

/**
 * Seed the Cost Estimation page global from CE_CONTENT (same source the page
 * renders). Uploads local service images into Media; remote/missing images keep
 * their current src via the page fallback. Dev-only, secret-guarded, ?force=1.
 */
export async function GET(req: NextRequest) {
  if (process.env.NODE_ENV === "production") {
    return new NextResponse("Disabled in production", { status: 403 });
  }
  if (req.nextUrl.searchParams.get("secret") !== process.env.PAYLOAD_SECRET) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const payload = await getPayload({ config });
    const force = req.nextUrl.searchParams.get("force") === "1";
    const existing = await payload.findGlobal({ slug: "costEstimationPage" });
    if (Array.isArray(existing?.mainServices) && existing.mainServices.length > 0 && !force) {
      return NextResponse.json({ skipped: true, reason: "Already seeded (use ?force=1)." });
    }

    // Upload a local public image (skip remote URLs); reuse if already present.
    const uploadLocal = async (src: string, alt: string): Promise<string | number | undefined> => {
      if (/^https?:\/\//i.test(src)) return undefined;
      const filename = src.split("/").pop() || src;
      const filePath = join(process.cwd(), "public", src.replace(/^\//, ""));
      if (!existsSync(filePath)) return undefined;
      const found = await payload.find({ collection: "media", where: { filename: { equals: filename } }, limit: 1 });
      const media = found.docs[0] ?? (await payload.create({ collection: "media", data: { alt }, filePath }));
      return media.id;
    };

    const mainServices = [];
    for (const s of CE_CONTENT.mainServices) {
      const image = await uploadLocal(s.image, s.title);
      mainServices.push({ title: s.title, desc: s.desc, ...(image ? { image } : {}), containImage: s.containImage });
    }

    await payload.updateGlobal({
      slug: "costEstimationPage",
      data: {
        heroTitle: CE_CONTENT.heroTitle,
        heroDescription: CE_CONTENT.heroDescription,
        heroBreadcrumb: CE_CONTENT.heroBreadcrumb,
        introEyebrow: CE_CONTENT.introEyebrow,
        introHeading: CE_CONTENT.introHeading,
        introParagraph: CE_CONTENT.introParagraph,
        mainServices,
        whyEyebrow: CE_CONTENT.whyEyebrow,
        whyHeadingLine1: CE_CONTENT.whyHeadingLine1,
        whyHeadingLine2: CE_CONTENT.whyHeadingLine2,
        whyParagraph: CE_CONTENT.whyParagraph,
        whyChecklist: CE_CONTENT.whyChecklist.map((text) => ({ text })),
        sectorsEyebrow: CE_CONTENT.sectorsEyebrow,
        sectorsHeadingLead: CE_CONTENT.sectorsHeadingLead,
        sectorsHeadingMuted: CE_CONTENT.sectorsHeadingMuted,
        sectorsParagraph: CE_CONTENT.sectorsParagraph,
        industries: CE_CONTENT.industries.map((name) => ({ name })),
        testEyebrow: CE_CONTENT.testEyebrow,
        testHeading: CE_CONTENT.testHeading,
        testimonials: CE_CONTENT.testimonials,
        faqTitle: CE_CONTENT.faqTitle,
        faqSubtitle: CE_CONTENT.faqSubtitle,
        faqItems: CE_CONTENT.faqItems,
        formEyebrow: CE_CONTENT.formEyebrow,
        formHeading: CE_CONTENT.formHeading,
        formParagraph: CE_CONTENT.formParagraph,
        feature1Title: CE_CONTENT.feature1Title,
        feature1Text: CE_CONTENT.feature1Text,
        feature2Title: CE_CONTENT.feature2Title,
        feature2Text: CE_CONTENT.feature2Text,
        urgentTitle: CE_CONTENT.urgentTitle,
        urgentText: CE_CONTENT.urgentText,
        urgentPhone: CE_CONTENT.urgentPhone,
        careerEyebrow: CE_CONTENT.careerEyebrow,
        careerHeading: CE_CONTENT.careerHeading,
        careerParagraph: CE_CONTENT.careerParagraph,
        careerButtonText: CE_CONTENT.careerButtonText,
      } as never,
    });

    return NextResponse.json({ seeded: true });
  } catch (err) {
    console.error("[seed-ce] failed:", (err as Error).message);
    return new NextResponse((err as Error).message, { status: 500 });
  }
}
