import { NextResponse, type NextRequest } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";
import { CONTRACT_CONTENT } from "@/data/contractContent";

/** Seed the Contract Management page global from CONTRACT_CONTENT. Dev-only, ?force=1. */
export async function GET(req: NextRequest) {
  if (process.env.NODE_ENV === "production") return new NextResponse("Disabled in production", { status: 403 });
  if (req.nextUrl.searchParams.get("secret") !== process.env.PAYLOAD_SECRET) return new NextResponse("Unauthorized", { status: 401 });

  try {
    const payload = await getPayload({ config });
    const force = req.nextUrl.searchParams.get("force") === "1";
    const existing = await payload.findGlobal({ slug: "contractManagementPage" });
    if (Array.isArray(existing?.serviceCards) && existing.serviceCards.length > 0 && !force) {
      return NextResponse.json({ skipped: true, reason: "Already seeded (use ?force=1)." });
    }

    const k = CONTRACT_CONTENT;
    await payload.updateGlobal({
      slug: "contractManagementPage",
      data: {
        heroTitle: k.heroTitle,
        heroDescription: k.heroDescription,
        heroBreadcrumb: k.heroBreadcrumb,
        introEyebrow: k.introEyebrow,
        introHeadingLine1: k.introHeadingLine1,
        introHeadingLine2: k.introHeadingLine2,
        introParagraph: k.introParagraph,
        serviceCards: k.serviceCards,
        outcomeBadgeHeading: k.outcomeBadgeHeading,
        outcomeBadgeText: k.outcomeBadgeText,
        outcomeHeading: k.outcomeHeading,
        outcomeParagraph: k.outcomeParagraph,
        outcomeChecklist: k.outcomeChecklist.map((text) => ({ text })),
        outcomeButtonText: k.outcomeButtonText,
      } as never,
    });

    return NextResponse.json({ seeded: true });
  } catch (err) {
    console.error("[seed-contract] failed:", (err as Error).message);
    return new NextResponse((err as Error).message, { status: 500 });
  }
}
