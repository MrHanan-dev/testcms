import { NextResponse, type NextRequest } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";
import { SITE_SETTINGS_CONTENT } from "@/data/siteSettingsContent";

/** Seed siteSettings nav/footer fields from SITE_SETTINGS_CONTENT. Dev-only, ?force=1. */
export async function GET(req: NextRequest) {
  if (process.env.NODE_ENV === "production") return new NextResponse("Disabled in production", { status: 403 });
  if (req.nextUrl.searchParams.get("secret") !== process.env.PAYLOAD_SECRET) return new NextResponse("Unauthorized", { status: 401 });

  try {
    const payload = await getPayload({ config });
    const force = req.nextUrl.searchParams.get("force") === "1";
    const existing = await payload.findGlobal({ slug: "siteSettings" });
    if (Array.isArray(existing?.navCategories) && existing.navCategories.length > 0 && !force) {
      return NextResponse.json({ skipped: true, reason: "Already seeded (use ?force=1)." });
    }

    const k = SITE_SETTINGS_CONTENT;
    const textList = (arr: readonly string[]) => arr.map((text) => ({ text }));

    await payload.updateGlobal({
      slug: "siteSettings",
      data: {
        contactButton: k.contactButton,
        navCategories: k.navCategories,
        contactEyebrow: k.contactEyebrow,
        contactHeading: k.contactHeading,
        contactIntro: k.contactIntro,
        clientsHeading: k.clientsHeading,
        companyBioHeadingLead: k.companyBioHeadingLead,
        companyBioHeadingAccent: k.companyBioHeadingAccent,
        companyBioParagraphs: textList(k.companyBioParagraphs),
        companyBioFeatures: k.companyBioFeatures,
        footerBrandPara1: k.footerBrandPara1,
        footerTagline: k.footerTagline,
        footerBrandPara2: k.footerBrandPara2,
        footerOurServicesHeading: k.footerOurServicesHeading,
        footerOurServices: k.footerOurServices,
        footerTrainingHeading: k.footerTrainingHeading,
        footerTraining: k.footerTraining,
        footerResourcesHeading: k.footerResourcesHeading,
        footerResources: k.footerResources,
        footerContactHeading: k.footerContactHeading,
        offices: k.offices,
        footerPhones: textList(k.footerPhones),
        footerEmail: k.footerEmail,
        copyrightText: k.copyrightText,
        privacyLabel: k.privacyLabel,
        privacyHref: k.privacyHref,
        termsLabel: k.termsLabel,
        termsHref: k.termsHref,
      } as never,
    });

    return NextResponse.json({ seeded: true });
  } catch (err) {
    console.error("[seed-site-settings] failed:", (err as Error).message);
    return new NextResponse((err as Error).message, { status: 500 });
  }
}
