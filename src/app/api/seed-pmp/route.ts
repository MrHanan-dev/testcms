import { join } from "node:path";
import { existsSync } from "node:fs";
import { NextResponse, type NextRequest } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";
import { PMP_CONTENT } from "@/data/pmpContent";

/** Seed the PMP page global from PMP_CONTENT. Dev-only, secret-guarded, ?force=1.
 *  Eligibility rich-text overrides are intentionally NOT seeded (code fallback). */
export async function GET(req: NextRequest) {
  if (process.env.NODE_ENV === "production") return new NextResponse("Disabled in production", { status: 403 });
  if (req.nextUrl.searchParams.get("secret") !== process.env.PAYLOAD_SECRET) return new NextResponse("Unauthorized", { status: 401 });

  try {
    const payload = await getPayload({ config });
    const force = req.nextUrl.searchParams.get("force") === "1";
    const existing = await payload.findGlobal({ slug: "pmpPage" });
    if (Array.isArray(existing?.faqItems) && existing.faqItems.length > 0 && !force) {
      return NextResponse.json({ skipped: true, reason: "Already seeded (use ?force=1)." });
    }

    const uploadImage = async (dir: string, filename: string, alt: string) => {
      const filePath = join(process.cwd(), "public", dir, filename);
      if (!existsSync(filePath)) return undefined;
      const found = await payload.find({ collection: "media", where: { filename: { equals: filename } }, limit: 1 });
      const media = found.docs[0] ?? (await payload.create({ collection: "media", data: { alt }, filePath }));
      return media.id;
    };

    const heroBadgeImage = await uploadImage("certifications", "pmp.webp", "PMP Certification Badge");

    const k = PMP_CONTENT;
    const textList = (arr: string[]) => arr.map((text) => ({ text }));

    await payload.updateGlobal({
      slug: "pmpPage",
      data: {
        heroTitle: k.heroTitle, heroSubtitle: k.heroSubtitle, heroDescription: k.heroDescription,
        ...(heroBadgeImage ? { heroBadgeImage } : {}),
        descEyebrow: k.descEyebrow, descHeading: k.descHeading, descSubtitle: k.descSubtitle,
        descParagraphs: textList(k.descParagraphs), descCallout: k.descCallout,
        gameChangerHeading: k.gameChangerHeading, gameChangerItems: k.gameChangerItems,
        whoHeading: k.whoHeading, whoIntro: k.whoIntro, whoAudience: textList(k.whoAudience),
        atpTitle: k.atpTitle, atpSubtitle: k.atpSubtitle,
        eligibilityHeading: k.eligibilityHeading, eligibilityIntro: k.eligibilityIntro,
        pathways: k.pathwayLabels.map((label, i) => ({ label, experience: k.pathwayExperience[i] })),
        curriculumHeading: k.curriculumHeading, curriculumSubtitle: k.curriculumSubtitle,
        domainFeatures: k.domainFeatures, whatWeOfferHeading: k.whatWeOfferHeading,
        whatWeOffer: textList(k.whatWeOffer), syllabusButton: k.syllabusButton,
        examFormatHeading: k.examFormatHeading, examFormat: k.examFormat,
        questionTypesHeading: k.questionTypesHeading, questionTypesSubtitle: k.questionTypesSubtitle, questionTypes: k.questionTypes,
        whyTrainEyebrow: k.whyTrainEyebrow, whyTrainHeading: k.whyTrainHeading, whyTrainSubheading: k.whyTrainSubheading,
        whyTrainPara1: k.whyTrainPara1, whyTrainPara2: k.whyTrainPara2, whyTrainFeatures: k.whyTrainFeatures,
        whyTrainCtaHeading: k.whyTrainCtaHeading, whyTrainCtaPara: k.whyTrainCtaPara, whyTrainCtaButton: k.whyTrainCtaButton,
        rightHeadingLead: k.rightHeadingLead, rightHeadingAccent: k.rightHeadingAccent, rightParagraph: k.rightParagraph,
        rightItems: k.rightItems, rightCardHeading: k.rightCardHeading, rightCardPara: k.rightCardPara,
        rightStat1Value: k.rightStat1Value, rightStat1Label: k.rightStat1Label,
        rightStat2Value: k.rightStat2Value, rightStat2Label: k.rightStat2Label, rightCardButton: k.rightCardButton,
        investEyebrow: k.investEyebrow, investHeading: k.investHeading, investSubtitle: k.investSubtitle,
        trainingOptions: k.trainingOptions, prepHeading: k.prepHeading, prepMaterials: textList(k.prepMaterials),
        examFeeHeading: k.examFeeHeading, memberFee: k.memberFee, nonMemberFee: k.nonMemberFee, feeNote: k.feeNote,
        courseFeesHeading: k.courseFeesHeading, courseFeesIntro: k.courseFeesIntro,
        contactEmail: k.contactEmail, contactPhone: k.contactPhone, discounts: textList(k.discounts), importantNote: k.importantNote,
        corporateEyebrow: k.corporateEyebrow, corporateHeading: k.corporateHeading, corporatePara: k.corporatePara, corporateButton: k.corporateButton,
        testimonialQuote: k.testimonialQuote, testimonialAuthor: k.testimonialAuthor, testimonialRole: k.testimonialRole,
        faqTitle: k.faqTitle, faqSubtitle: k.faqSubtitle, faqDescription: k.faqDescription, faqItems: k.faqItems,
      } as never,
    });

    return NextResponse.json({ seeded: true });
  } catch (err) {
    console.error("[seed-pmp] failed:", (err as Error).message);
    return new NextResponse((err as Error).message, { status: 500 });
  }
}
