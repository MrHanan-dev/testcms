import { NextResponse, type NextRequest } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";
import { TR_CONTENT } from "@/data/trContent";

/** Seed the Training page global from TR_CONTENT. Dev-only, secret-guarded, ?force=1. */
export async function GET(req: NextRequest) {
  if (process.env.NODE_ENV === "production") return new NextResponse("Disabled in production", { status: 403 });
  if (req.nextUrl.searchParams.get("secret") !== process.env.PAYLOAD_SECRET) return new NextResponse("Unauthorized", { status: 401 });

  try {
    const payload = await getPayload({ config });
    const force = req.nextUrl.searchParams.get("force") === "1";
    const existing = await payload.findGlobal({ slug: "trainingPage" });
    if (Array.isArray(existing?.categories) && existing.categories.length > 0 && !force) {
      return NextResponse.json({ skipped: true, reason: "Already seeded (use ?force=1)." });
    }

    await payload.updateGlobal({
      slug: "trainingPage",
      data: {
        heroTitle: TR_CONTENT.heroTitle,
        heroDescription: TR_CONTENT.heroDescription,
        heroBreadcrumb: TR_CONTENT.heroBreadcrumb,
        introEyebrow: TR_CONTENT.introEyebrow,
        introHeadingLine1: TR_CONTENT.introHeadingLine1,
        introHeadingLine2: TR_CONTENT.introHeadingLine2,
        introParagraph: TR_CONTENT.introParagraph,
        categories: TR_CONTENT.categories.map((cat) => ({
          title: cat.title,
          desc: cat.desc,
          links: cat.links.map((link) => ({ text: link.text })),
        })),
        bespokeHeading: TR_CONTENT.bespokeHeading,
        bespokeParagraph: TR_CONTENT.bespokeParagraph,
        bespokeServices: TR_CONTENT.bespokeServices,
        bespokeBadgeTitle: TR_CONTENT.bespokeBadgeTitle,
        bespokeBadgeText: TR_CONTENT.bespokeBadgeText,
        resources: TR_CONTENT.resources,
        scheduleEyebrow: TR_CONTENT.scheduleEyebrow,
        scheduleHeading: TR_CONTENT.scheduleHeading,
        scheduleParagraph: TR_CONTENT.scheduleParagraph,
        scheduleItems: TR_CONTENT.scheduleItems,
        faqTitle: TR_CONTENT.faqTitle,
        faqSubtitle: TR_CONTENT.faqSubtitle,
        faqDescription: TR_CONTENT.faqDescription,
        faqItems: TR_CONTENT.faqItems,
      } as never,
    });

    return NextResponse.json({ seeded: true });
  } catch (err) {
    console.error("[seed-training] failed:", (err as Error).message);
    return new NextResponse((err as Error).message, { status: 500 });
  }
}
