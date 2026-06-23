import { NextResponse, type NextRequest } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";
import { PMICP_CONTENT } from "@/data/pmicpContent";

/** Seed the PMI-CP page global from PMICP_CONTENT. Dev-only, secret-guarded, ?force=1.
 *  The eligibility callout rich-text override is intentionally NOT seeded (code fallback). */
export async function GET(req: NextRequest) {
  if (process.env.NODE_ENV === "production") return new NextResponse("Disabled in production", { status: 403 });
  if (req.nextUrl.searchParams.get("secret") !== process.env.PAYLOAD_SECRET) return new NextResponse("Unauthorized", { status: 401 });

  try {
    const payload = await getPayload({ config });
    const force = req.nextUrl.searchParams.get("force") === "1";
    const existing = await payload.findGlobal({ slug: "pmicpPage" });
    if (Array.isArray(existing?.faqItems) && existing.faqItems.length > 0 && !force) {
      return NextResponse.json({ skipped: true, reason: "Already seeded (use ?force=1)." });
    }

    const k = PMICP_CONTENT;
    const textList = (arr: readonly string[]) => arr.map((text) => ({ text }));

    await payload.updateGlobal({
      slug: "pmicpPage",
      data: {
        heroTitle: k.heroTitle, heroSubtitle: k.heroSubtitle, heroDescription: k.heroDescription,
        detailsBadge: k.detailsBadge, detailsHeading: k.detailsHeading, detailsParagraph: k.detailsParagraph,
        benefits: k.benefits, whoHeading: k.whoHeading, whoIntro: k.whoIntro, whoAudience: textList(k.whoAudience),
        eligibilityHeading: k.eligibilityHeading, eligibilityIntro: k.eligibilityIntro,
        tracks: k.tracks.map((t) => ({ title: t.title, subtitle: t.subtitle, items: textList(t.items) })),
        eligibilityCalloutLead: k.eligibilityCalloutLead, eligibilityCalloutBody: k.eligibilityCalloutBody,
        curriculumHeading: k.curriculumHeading, curriculumSubtitle: k.curriculumSubtitle, curriculum: k.curriculum,
        includedHeading: k.includedHeading, included: textList(k.included), includedButton: k.includedButton,
        examFormatHeading: k.examFormatHeading, examFormat: k.examFormat,
        whyTrainEyebrow: k.whyTrainEyebrow, whyTrainHeading: k.whyTrainHeading,
        whyTrainPara1: k.whyTrainPara1, whyTrainPara2: k.whyTrainPara2, whyTrainFeatures: k.whyTrainFeatures,
        investEyebrow: k.investEyebrow, investHeading: k.investHeading, investSubtitle: k.investSubtitle,
        trainingOptions: k.trainingOptions, prepHeading: k.prepHeading, prepMaterials: textList(k.prepMaterials),
        examFeeHeading: k.examFeeHeading, memberFee: k.memberFee, nonMemberFee: k.nonMemberFee, feeNote: k.feeNote,
        courseFeesHeading: k.courseFeesHeading, courseFeesIntro: k.courseFeesIntro,
        contactEmail: k.contactEmail, contactPhone: k.contactPhone, discounts: textList(k.discounts),
        importantNoteLabel: k.importantNoteLabel, importantNoteBody: k.importantNoteBody,
        registerCardPara: k.registerCardPara, registerCardButton: k.registerCardButton,
        testimonialQuote: k.testimonialQuote, testimonialAuthor: k.testimonialAuthor,
        faqTitle: k.faqTitle, faqSubtitle: k.faqSubtitle, faqDescription: k.faqDescription, faqItems: k.faqItems,
      } as never,
    });

    return NextResponse.json({ seeded: true });
  } catch (err) {
    console.error("[seed-pmicp] failed:", (err as Error).message);
    return new NextResponse((err as Error).message, { status: 500 });
  }
}
