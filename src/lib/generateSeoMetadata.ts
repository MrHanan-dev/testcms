import type { Metadata } from "next";

type SeoFields = {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: { url?: string } | null;
  noIndex?: boolean;
  noFollow?: boolean;
  canonicalUrl?: string;
};

type GenerateSeoOptions = {
  /** CMS data containing SEO fields */
  data: Record<string, unknown> | null | undefined;
  /** Fallback title if CMS field is empty */
  fallbackTitle: string;
  /** Fallback description if CMS field is empty */
  fallbackDescription: string;
  /** Page path for Open Graph URL (e.g., "/about") */
  path?: string;
  /** Additional keywords */
  keywords?: string[];
};

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://theagilenest.co.nz";
const SITE_NAME = "TheAgileNest";

/**
 * Generate Next.js Metadata from CMS SEO fields with fallbacks.
 * Use in `generateMetadata` function of any page.
 */
export function generateSeoMetadata({
  data,
  fallbackTitle,
  fallbackDescription,
  path = "",
  keywords = [],
}: GenerateSeoOptions): Metadata {
  const seo = (data ?? {}) as SeoFields;
  
  const title = seo.metaTitle || fallbackTitle;
  const description = seo.metaDescription || fallbackDescription;
  const ogImageUrl = seo.ogImage?.url || `${SITE_URL}/og-image.png`;
  const canonicalUrl = seo.canonicalUrl || `${SITE_URL}${path}`;
  
  const robots: string[] = [];
  if (seo.noIndex) robots.push("noindex");
  if (seo.noFollow) robots.push("nofollow");
  
  return {
    title,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: robots.length > 0 ? robots.join(", ") : undefined,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_NZ",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };
}

/**
 * Default metadata for pages without CMS SEO fields.
 */
export const defaultMetadata: Metadata = {
  title: {
    default: "TheAgileNest | PMP Training & Project Management Consulting NZ",
    template: "%s | TheAgileNest",
  },
  description:
    "Premium PMP certification training, quantity surveying, and project management consulting services in New Zealand, Australia, and Pakistan.",
  keywords: [
    "PMP certification",
    "project management training",
    "CAPM certification",
    "PMI-CP",
    "quantity surveying",
    "cost estimation",
    "project management consulting",
    "New Zealand",
  ],
  authors: [{ name: "TheAgileNest" }],
  creator: "TheAgileNest",
  publisher: "TheAgileNest",
  metadataBase: new URL(SITE_URL),
};
