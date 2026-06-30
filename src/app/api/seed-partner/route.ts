import { NextResponse, type NextRequest } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";
import { PARTNER_CONTENT } from "@/data/partnerContent";

const orUndef = (v: unknown): string | undefined => (typeof v === "string" && v.length > 0 ? v : undefined);

/** Seed the Partner page global from PARTNER_CONTENT. Dev-only, secret-guarded, ?force=1. */
export async function GET(req: NextRequest) {
  if (process.env.NODE_ENV === "production") return new NextResponse("Disabled in production", { status: 403 });
  if (req.nextUrl.searchParams.get("secret") !== process.env.PAYLOAD_SECRET) return new NextResponse("Unauthorized", { status: 401 });

  try {
    const payload = await getPayload({ config });
    const force = req.nextUrl.searchParams.get("force") === "1";
    const existing = await payload.findGlobal({ slug: "partnerPage" });
    if (orUndef(existing?.heroTitleAccent) && !force) {
      return NextResponse.json({ skipped: true, reason: "Already seeded (use ?force=1)." });
    }

    const k = PARTNER_CONTENT;
    const textList = (arr: readonly string[]) => arr.map((text) => ({ text }));

    await payload.updateGlobal({
      slug: "partnerPage",
      data: {
        heroEyebrow: k.heroEyebrow,
        heroTitleLead: k.heroTitleLead,
        heroTitleAccent: k.heroTitleAccent,
        heroDescription: k.heroDescription,
        heroButton: k.heroButton,
        introHeading: k.introHeading,
        introPara1: k.introPara1,
        introPara2: k.introPara2,
        introQuote: k.introQuote,
        introQuoteLabel: k.introQuoteLabel,
        whoEyebrow: k.whoEyebrow,
        whoHeading: k.whoHeading,
        whoCards: k.whoCards,
        whoBannerHeading: k.whoBannerHeading,
        whoBannerPara: k.whoBannerPara,
        benefitsEyebrow: k.benefitsEyebrow,
        benefitsHeading: k.benefitsHeading,
        benefits: k.benefits,
        leadHeading: k.leadHeading,
        leadPara: k.leadPara,
        leadButton: k.leadButton,
        formHeading: k.formHeading,
        formIntro: k.formIntro,
        formSteps: textList(k.formSteps),
        successHeading: k.successHeading,
        successParaBody: k.successParaBody,
        successButton: k.successButton,
        submitButton: k.submitButton,
        submittingButton: k.submittingButton,
      } as never,
    });

    return NextResponse.json({ seeded: true });
  } catch (err) {
    console.error("[seed-partner] failed:", (err as Error).message);
    return new NextResponse((err as Error).message, { status: 500 });
  }
}
