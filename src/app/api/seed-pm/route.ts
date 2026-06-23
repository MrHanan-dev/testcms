import { NextResponse, type NextRequest } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";
import { PM_CONTENT } from "@/data/pmContent";

/**
 * Seed the Project Management page global from the shared PM_CONTENT (same
 * source the page renders), so seeded content matches the page exactly.
 * Dev-only, secret-guarded, idempotent (?force=1).
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
    const existing = await payload.findGlobal({ slug: "projectManagementPage" });
    if (Array.isArray(existing?.subServices) && existing.subServices.length > 0 && !force) {
      return NextResponse.json({ skipped: true, reason: "Already seeded (use ?force=1)." });
    }

    await payload.updateGlobal({
      slug: "projectManagementPage",
      data: {
        heroTitle: PM_CONTENT.heroTitle,
        heroDescription: PM_CONTENT.heroDescription,
        heroBreadcrumb: PM_CONTENT.heroBreadcrumb,
        helpEyebrow: PM_CONTENT.helpEyebrow,
        helpHeadingLine1: PM_CONTENT.helpHeadingLine1,
        helpHeadingLine2: PM_CONTENT.helpHeadingLine2,
        helpIntro: PM_CONTENT.helpIntro,
        helpLeftPara1: PM_CONTENT.helpLeftPara1,
        helpLeftPara2: PM_CONTENT.helpLeftPara2,
        helpButtonText: PM_CONTENT.helpButtonText,
        sectorTitle: PM_CONTENT.sectorTitle,
        sectorText: PM_CONTENT.sectorText,
        gridHeading: PM_CONTENT.gridHeading,
        gridSubtitle: PM_CONTENT.gridSubtitle,
        subServices: PM_CONTENT.subServices.map((s) => ({
          title: s.title,
          desc: s.desc,
          bullets: s.bullets.map((text) => ({ text })),
        })),
        consEyebrow: PM_CONTENT.consEyebrow,
        consHeadingLine1: PM_CONTENT.consHeadingLine1,
        consHeadingLine2: PM_CONTENT.consHeadingLine2,
        consPara1: PM_CONTENT.consPara1,
        consPara2: PM_CONTENT.consPara2,
        consCards: PM_CONTENT.consCards,
        faqEyebrow: PM_CONTENT.faqEyebrow,
        faqHeadingLine1: PM_CONTENT.faqHeadingLine1,
        faqHeadingLine2: PM_CONTENT.faqHeadingLine2,
        faqItems: PM_CONTENT.faqItems,
        ctaHeading: PM_CONTENT.ctaHeading,
        ctaParagraph: PM_CONTENT.ctaParagraph,
        ctaButtonText: PM_CONTENT.ctaButtonText,
      } as never,
    });

    return NextResponse.json({ seeded: true });
  } catch (err) {
    console.error("[seed-pm] failed:", (err as Error).message);
    return new NextResponse((err as Error).message, { status: 500 });
  }
}
