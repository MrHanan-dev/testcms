import {
  SITE_SETTINGS_CONTENT as K,
  type FooterLink,
  type NavCategory,
  type Office,
} from "@/data/siteSettingsContent";
import { resolveMediaUrl } from "./resolveMediaUrl";

/** Type for menu item from Menus collection */
type MenuItem = {
  label?: string;
  url?: string;
  description?: string;
  type?: "link" | "dropdown" | "divider" | "heading";
  children?: { label?: string; url?: string; description?: string }[];
};

/** Type for the fetched menu from Menus collection */
type MenuData = {
  items?: MenuItem[];
} | null;

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

/**
 * Transform Menus collection data to navCategories format.
 * Menus use dropdown items with children; navCategories uses a flat structure.
 */
const transformMenuToNavCategories = (menu: MenuData): NavCategory[] | null => {
  if (!menu?.items || menu.items.length === 0) return null;

  return menu.items
    .filter((item) => item.type === "dropdown" || item.type === "link" || !item.type)
    .map((item) => {
      const children = item.children || [];
      return {
        title: item.label || "",
        href: item.url || "#",
        items: children.map((child) => ({
          name: child.label || "",
          desc: child.description || "",
          href: child.url || "#",
        })),
      };
    })
    .filter((cat) => cat.title);
};

/**
 * Transform Menus collection data to footer links format.
 */
const transformMenuToFooterLinks = (menu: MenuData): FooterLink[] | null => {
  if (!menu?.items || menu.items.length === 0) return null;

  return menu.items
    .filter((item) => item.type === "link" || !item.type)
    .map((item) => ({
      label: item.label || "",
      href: item.url || "#",
    }))
    .filter((link) => link.label);
};

type ClientLogo = { image?: { url?: string }; name?: string };

const clientLogosArr = (raw: Record<string, unknown>): { src: string; alt: string }[] => {
  const v = raw.clientLogos as ClientLogo[] | undefined;
  if (v && v.length > 0) {
    return v
      .filter((c) => c.image?.url)
      .map((c) => ({
        src: resolveMediaUrl(c.image!.url!) ?? c.image!.url!,
        alt: c.name || "Client logo",
      }));
  }
  return K.clientLogos;
};

const imageUrl = (obj: unknown): string | null => {
  if (typeof obj !== "object" || !obj) return null;
  const rawUrl = (obj as { url?: string }).url;
  if (!rawUrl) return null;
  return resolveMediaUrl(rawUrl) ?? rawUrl;
};

/** Options for menu overrides from the Menus collection */
export type MenuOverrides = {
  headerMenu?: MenuData | unknown;
  footerServicesMenu?: MenuData | unknown;
  footerTrainingMenu?: MenuData | unknown;
  footerResourcesMenu?: MenuData | unknown;
};

/** Merge a raw Payload siteSettings global with built-in fallbacks and optional menu overrides. */
export function resolveSiteSettings(
  raw: Record<string, unknown> | null | undefined,
  menus?: MenuOverrides
) {
  const s = raw ?? {};

  // Transform menu data if available
  const headerNavFromMenu = menus?.headerMenu
    ? transformMenuToNavCategories(menus.headerMenu as MenuData)
    : null;
  const footerServicesFromMenu = menus?.footerServicesMenu
    ? transformMenuToFooterLinks(menus.footerServicesMenu as MenuData)
    : null;
  const footerTrainingFromMenu = menus?.footerTrainingMenu
    ? transformMenuToFooterLinks(menus.footerTrainingMenu as MenuData)
    : null;
  const footerResourcesFromMenu = menus?.footerResourcesMenu
    ? transformMenuToFooterLinks(menus.footerResourcesMenu as MenuData)
    : null;

  return {
    logoUrl: imageUrl(s.logo),
    logoLightUrl: imageUrl(s.logoLight),
    faviconUrl: imageUrl(s.favicon),
    pmiBadgeUrl: imageUrl(s.pmiBadge),
    pmiBadgeAlt: str(s, "pmiBadgeAlt", "PMI Authorized Training Partner Premier"),
    clientLogos: clientLogosArr(s),
    companyName: orUndef(s.companyName) ?? null,
    phone: orUndef(s.phone) ?? null,
    email: orUndef(s.email) ?? null,
    whatsapp: orUndef(s.whatsapp) ?? null,
    whatsappMessage: str(s, "whatsappMessage", "Hello TheAgileNest, I'd like to inquire about your services."),
    whatsappTooltip: str(s, "whatsappTooltip", "NEED HELP? CHAT NOW"),
    socials: (() => {
      const v = s.socials as { platform?: string; url?: string }[] | undefined;
      return v && v.length > 0 ? v.filter((x) => x.url) : [{ platform: "LinkedIn", url: "https://www.linkedin.com/company/theagilenest" }];
    })(),
    contactButton: str(s, "contactButton", K.contactButton),
    navCategories: headerNavFromMenu?.length ? headerNavFromMenu : navArr(s),
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
    footerOurServices: footerServicesFromMenu?.length ? footerServicesFromMenu : linkArr(s, "footerOurServices", K.footerOurServices),
    footerTrainingHeading: str(s, "footerTrainingHeading", K.footerTrainingHeading),
    footerTraining: footerTrainingFromMenu?.length ? footerTrainingFromMenu : linkArr(s, "footerTraining", K.footerTraining),
    footerResourcesHeading: str(s, "footerResourcesHeading", K.footerResourcesHeading),
    footerResources: footerResourcesFromMenu?.length ? footerResourcesFromMenu : linkArr(s, "footerResources", K.footerResources),
    footerContactHeading: str(s, "footerContactHeading", K.footerContactHeading),
    offices: officeArr(s),
    footerPhones: textList(s, "footerPhones", K.footerPhones),
    footerEmail: str(s, "footerEmail", K.footerEmail),
    copyrightText: str(s, "copyrightText", K.copyrightText),
    privacyLabel: str(s, "privacyLabel", K.privacyLabel),
    privacyHref: str(s, "privacyHref", K.privacyHref),
    termsLabel: str(s, "termsLabel", K.termsLabel),
    termsHref: str(s, "termsHref", K.termsHref),
    contactFormTitle: str(s, "contactFormTitle", "Get in touch"),
    contactFormSubtitle: str(s, "contactFormSubtitle", "Have questions about our training or consultancy services? We're here to help."),
    contactFormTestimonial: str(s, "contactFormTestimonial", "TheAgileNest helped us navigate complex project hurdles with ease."),
    contactFormTestimonialAuthor: str(s, "contactFormTestimonialAuthor", "Project Lead, Auckland"),
    contactFormButtonText: str(s, "contactFormButtonText", "Send Message"),
    contactFormSuccessTitle: str(s, "contactFormSuccessTitle", "Message Sent!"),
    contactFormSuccessMessage: str(s, "contactFormSuccessMessage", "Thank you for reaching out to TheAgileNest. Our advisors will review your message and get back to you within 24 hours."),
    contactFormSidebarLabel: str(s, "contactFormSidebarLabel", "Advisor Support"),
    contactFormNameLabel: str(s, "contactFormNameLabel", "Name"),
    contactFormEmailLabel: str(s, "contactFormEmailLabel", "Email"),
    contactFormMessageLabel: str(s, "contactFormMessageLabel", "Message"),
    contactFormNamePlaceholder: str(s, "contactFormNamePlaceholder", "Your name"),
    contactFormEmailPlaceholder: str(s, "contactFormEmailPlaceholder", "your@email.com"),
    contactFormMessagePlaceholder: str(s, "contactFormMessagePlaceholder", "How can we help you?"),
    contactFormSendingText: str(s, "contactFormSendingText", "Sending..."),
    contactFormResendText: str(s, "contactFormResendText", "Send another message"),
    // Structured data (JSON-LD)
    schemaOrgName: str(s, "schemaOrgName", "TheAgileNest"),
    schemaOrgType: str(s, "schemaOrgType", "ProfessionalService"),
    schemaOrgDescription: str(s, "schemaOrgDescription", "Premium PMP certification training, quantity surveying, and project management consulting services."),
    schemaOrgImageUrl: imageUrl(s.schemaOrgImage),
    schemaFoundingDate: str(s, "schemaFoundingDate", "2007"),
    schemaFounderName: str(s, "schemaFounderName", "Engr. Syed Amjad Iqbal"),
    schemaPriceRange: str(s, "schemaPriceRange", "$$"),
    schemaStreetAddress: str(s, "schemaStreetAddress", "15 Idlewild Ave Mangere"),
    schemaCity: str(s, "schemaCity", "Auckland"),
    schemaRegion: str(s, "schemaRegion", "Auckland"),
    schemaPostalCode: str(s, "schemaPostalCode", "2022"),
    schemaCountry: str(s, "schemaCountry", "NZ"),
    schemaLatitude: orUndef(s.schemaLatitude) ?? null,
    schemaLongitude: orUndef(s.schemaLongitude) ?? null,
    schemaRatingValue: str(s, "schemaRatingValue", "4.9"),
    schemaReviewCount: str(s, "schemaReviewCount", "127"),
    schemaBestRating: str(s, "schemaBestRating", "5"),
    schemaServices: (() => {
      const v = s.schemaServices as { name?: string; description?: string; url?: string }[] | undefined;
      if (v && v.length > 0) return v.filter((x) => x.name).map((x) => ({ name: x.name!, description: x.description, url: x.url }));
      return [
        { name: "PMP Certification Training", description: "Expert-led PMP exam preparation course", url: "/pmp" },
        { name: "CAPM Certification Training", description: "Entry-level project management certification", url: "/capm" },
        { name: "PMI-CP Certification Training", description: "Construction project management certification", url: "/pmicp" },
        { name: "Construction Cost Management", description: "Precision cost management and quantity surveying", url: "/cost-estimation" },
        { name: "Project Management Consulting", description: "Expert PM advisory and consulting services", url: "/consulting" },
      ];
    })(),
  };
}

export type ResolvedSiteSettings = ReturnType<typeof resolveSiteSettings>;
