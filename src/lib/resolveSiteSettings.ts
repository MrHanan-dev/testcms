import {
  SITE_SETTINGS_CONTENT as K,
  type FooterLink,
  type NavCategory,
  type Office,
} from "@/data/siteSettingsContent";

const orUndef = (v: unknown): string | undefined => (typeof v === "string" && v.length > 0 ? v : undefined);

const str = (raw: Record<string, unknown>, key: string, fallback: string) => orUndef(raw[key]) ?? fallback;

const textList = (raw: Record<string, unknown>, key: string, fallback: string[]): string[] => {
  const v = raw[key] as { text: string }[] | undefined;
  return v && v.length > 0 ? v.map((x) => x.text) : fallback;
};

const linkArr = (raw: Record<string, unknown>, key: string, fallback: FooterLink[]): FooterLink[] => {
  const v = raw[key] as FooterLink[] | undefined;
  return v && v.length > 0 ? v : fallback;
};

const cardArr = <T extends { title: string }>(raw: Record<string, unknown>, key: string, fallback: T[]): T[] => {
  const v = raw[key] as T[] | undefined;
  return v && v.length > 0 ? v : fallback;
};

const navArr = (raw: Record<string, unknown>): NavCategory[] => {
  const v = raw.navCategories as NavCategory[] | undefined;
  if (!v || v.length === 0) return K.navCategories;
  return v.map((cat, i) => {
    const fb = K.navCategories[i] ?? K.navCategories[0];
    const items = cat.items && cat.items.length > 0 ? cat.items : fb.items;
    return {
      title: cat.title || fb.title,
      href: cat.href || fb.href,
      items: items.map((item, j) => {
        const fbItem = fb.items[j] ?? fb.items[0];
        return {
          name: item.name || fbItem.name,
          desc: item.desc || fbItem.desc,
          href: item.href || fbItem.href,
        };
      }),
    };
  });
};

const officeArr = (raw: Record<string, unknown>): Office[] => {
  const v = raw.offices as Office[] | undefined;
  return v && v.length > 0 ? v : K.offices;
};

/** Merge a raw Payload siteSettings global with built-in fallbacks. */
export function resolveSiteSettings(raw: Record<string, unknown> | null | undefined) {
  const s = raw ?? {};
  return {
    logoUrl:
      typeof s.logo === "object" && s.logo ? ((s.logo as { url?: string }).url ?? null) : null,
    companyName: orUndef(s.companyName) ?? null,
    phone: orUndef(s.phone) ?? null,
    email: orUndef(s.email) ?? null,
    whatsapp: orUndef(s.whatsapp) ?? null,
    contactButton: str(s, "contactButton", K.contactButton),
    navCategories: navArr(s),
    contactEyebrow: str(s, "contactEyebrow", K.contactEyebrow),
    contactHeading: str(s, "contactHeading", K.contactHeading),
    contactIntro: str(s, "contactIntro", K.contactIntro),
    clientsHeading: str(s, "clientsHeading", K.clientsHeading),
    companyBioHeadingLead: str(s, "companyBioHeadingLead", K.companyBioHeadingLead),
    companyBioHeadingAccent: str(s, "companyBioHeadingAccent", K.companyBioHeadingAccent),
    companyBioParagraphs: textList(s, "companyBioParagraphs", K.companyBioParagraphs),
    companyBioFeatures: cardArr(s, "companyBioFeatures", K.companyBioFeatures),
    footerBrandPara1: str(s, "footerBrandPara1", K.footerBrandPara1),
    footerTagline: str(s, "footerTagline", K.footerTagline),
    footerBrandPara2: str(s, "footerBrandPara2", K.footerBrandPara2),
    footerOurServicesHeading: str(s, "footerOurServicesHeading", K.footerOurServicesHeading),
    footerOurServices: linkArr(s, "footerOurServices", K.footerOurServices),
    footerTrainingHeading: str(s, "footerTrainingHeading", K.footerTrainingHeading),
    footerTraining: linkArr(s, "footerTraining", K.footerTraining),
    footerResourcesHeading: str(s, "footerResourcesHeading", K.footerResourcesHeading),
    footerResources: linkArr(s, "footerResources", K.footerResources),
    footerContactHeading: str(s, "footerContactHeading", K.footerContactHeading),
    offices: officeArr(s),
    footerPhones: textList(s, "footerPhones", K.footerPhones),
    footerEmail: str(s, "footerEmail", K.footerEmail),
    copyrightText: str(s, "copyrightText", K.copyrightText),
    privacyLabel: str(s, "privacyLabel", K.privacyLabel),
    privacyHref: str(s, "privacyHref", K.privacyHref),
    termsLabel: str(s, "termsLabel", K.termsLabel),
    termsHref: str(s, "termsHref", K.termsHref),
  };
}

export type ResolvedSiteSettings = ReturnType<typeof resolveSiteSettings>;
