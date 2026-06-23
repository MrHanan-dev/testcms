import { getGlobal } from "@/lib/payload";
import { PARTNER_CONTENT as K } from "@/data/partnerContent";
import PartnerPageClient, { type PartnerPageContent } from "./PartnerPageClient";

const orUndef = (v: unknown): string | undefined => (typeof v === "string" && v.length > 0 ? v : undefined);

export default async function PartnerPage() {
  const g = await getGlobal("partnerPage");
  const f = <T,>(key: string, fallback: T): T => (orUndef(g[key]) as T) ?? fallback;
  const arr = <T,>(key: string, fallback: T[]): T[] => {
    const v = g[key] as T[] | undefined;
    return v && v.length > 0 ? v : fallback;
  };
  const listArr = (key: string, fallback: string[]): string[] => {
    const v = g[key] as { text: string }[] | undefined;
    return v && v.length > 0 ? v.map((x) => x.text) : fallback;
  };

  const content: PartnerPageContent = {
    heroEyebrow: f("heroEyebrow", K.heroEyebrow),
    heroTitleLead: f("heroTitleLead", K.heroTitleLead),
    heroTitleAccent: f("heroTitleAccent", K.heroTitleAccent),
    heroDescription: f("heroDescription", K.heroDescription),
    heroButton: f("heroButton", K.heroButton),
    introHeading: f("introHeading", K.introHeading),
    introPara1: f("introPara1", K.introPara1),
    introPara2: f("introPara2", K.introPara2),
    introQuote: f("introQuote", K.introQuote),
    introQuoteLabel: f("introQuoteLabel", K.introQuoteLabel),
    whoEyebrow: f("whoEyebrow", K.whoEyebrow),
    whoHeading: f("whoHeading", K.whoHeading),
    whoCards: arr("whoCards", K.whoCards),
    whoBannerHeading: f("whoBannerHeading", K.whoBannerHeading),
    whoBannerPara: f("whoBannerPara", K.whoBannerPara),
    benefitsEyebrow: f("benefitsEyebrow", K.benefitsEyebrow),
    benefitsHeading: f("benefitsHeading", K.benefitsHeading),
    benefits: arr("benefits", K.benefits),
    leadHeading: f("leadHeading", K.leadHeading),
    leadPara: f("leadPara", K.leadPara),
    leadButton: f("leadButton", K.leadButton),
    formHeading: f("formHeading", K.formHeading),
    formIntro: f("formIntro", K.formIntro),
    formSteps: listArr("formSteps", K.formSteps),
    successHeading: f("successHeading", K.successHeading),
    successParaBody: f("successParaBody", K.successParaBody),
    successButton: f("successButton", K.successButton),
    submitButton: f("submitButton", K.submitButton),
    submittingButton: f("submittingButton", K.submittingButton),
  };

  return <PartnerPageClient content={content} />;
}
