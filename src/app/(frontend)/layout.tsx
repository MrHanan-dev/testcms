import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import { SiteSettingsProvider } from "@/components/site/SiteSettingsProvider";
import { CustomCodeHead, CustomCodeBodyStart, CustomCodeFooter } from "@/components/CustomCodeInjector";
import { getSiteSettings, getGlobal, getMenuByLocation } from "@/lib/payload";
import { resolveSiteSettings } from "@/lib/resolveSiteSettings";
import { getActivePopups, getAppearanceCss } from "@/lib/cmsCollections";
import { serializePopups } from "@/lib/serializeCmsUi";
import CmsUiLayer from "@/components/cms/CmsUiLayer";


const inter = Inter({
    subsets: ["latin"],
    variable: '--font-inter'
});

const outfit = Outfit({
    subsets: ["latin"],
    variable: '--font-outfit',
});

export const metadata: Metadata = {
    metadataBase: new URL("https://theagilenest.com"),
    title: {
        template: '%s | TheAgileNest',
        default: 'PMP Training & Project Management Consulting NZ | TheAgileNest',
    },
    description: "NZ-based PMP certification training, construction cost estimation & project management consulting. PMI Authorised Training Partner serving professionals globally.",
    keywords: ["TheAgileNest", "PMP Certification Training", "Construction Cost Estimation", "Project Management Consulting", "PMO Services", "AI Cost Advisory", "Professional Project Training"],
    openGraph: {
        title: "TheAgileNest | Professional Project Management Services",
        description: "Expert PMP training and AI powered construction estimation services by TheAgileNest.",
        type: "website",
        locale: 'en_US',
        siteName: 'TheAgileNest',
        images: [
            {
                url: '/favicon.png',
                width: 1200,
                height: 630,
                alt: 'TheAgileNest Project Management & Cost Estimation',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'TheAgileNest',
        description: 'Premier PMP Training and AI Construction Estimation by TheAgileNest.',
        images: ['/favicon.png'],
    },
    icons: {
        icon: '/favicon.png',
        shortcut: '/favicon.png',
        apple: '/favicon.png',
    },
    verification: {
        google: 'p5T02ffFOO32y-ROE3jITb_vU4YCRX_m9xbcLLv0SLw',
        other: {
            'ahrefs-site-verification': 'ea610847118d22cdb8f150326dea32b5a4012f706bc914ad815c41691715cd1f',
        },
    },
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // Pull editable site-wide settings (logo, contact) so the Header/Footer can
    // render them. Null-safe: if Payload is unreachable, the UI falls back to
    // the existing hardcoded defaults.
    const [settings, customCode, headerMenu, footerServicesMenu, footerTrainingMenu, footerResourcesMenu, popups, appearanceCss] =
        await Promise.all([
            getSiteSettings(),
            getGlobal("customCode") as Promise<Record<string, unknown> | null>,
            getMenuByLocation("header-primary"),
            getMenuByLocation("footer-1"),
            getMenuByLocation("footer-2"),
            getMenuByLocation("footer-3"),
            getActivePopups(),
            getAppearanceCss(),
        ]);

    const siteSettings = resolveSiteSettings(settings as Record<string, unknown> | null, {
        headerMenu: headerMenu as unknown,
        footerServicesMenu: footerServicesMenu as unknown,
        footerTrainingMenu: footerTrainingMenu as unknown,
        footerResourcesMenu: footerResourcesMenu as unknown,
    });

    const popupData = serializePopups(popups as Record<string, unknown>[]);

    return (
        <html lang="en">
            <head>
                {appearanceCss ? <style dangerouslySetInnerHTML={{ __html: appearanceCss }} /> : null}
                <CustomCodeHead data={customCode} />
                <Script src="https://analytics.ahrefs.com/analytics.js" data-key="C3Lwx1SjSRD/434Thq3gkw" strategy="afterInteractive" />
            </head>
            <body className={`${inter.variable} ${outfit.variable} antialiased`} suppressHydrationWarning={true}>
                <CustomCodeBodyStart data={customCode} />
                <SiteSettingsProvider value={siteSettings}>
                    <JsonLd
                        orgName={siteSettings.schemaOrgName}
                        orgType={siteSettings.schemaOrgType}
                        description={siteSettings.schemaOrgDescription}
                        logoUrl={siteSettings.logoUrl || siteSettings.faviconUrl || undefined}
                        imageUrl={siteSettings.schemaOrgImageUrl || undefined}
                        phone={siteSettings.phone || siteSettings.footerPhones[0]}
                        priceRange={siteSettings.schemaPriceRange}
                        streetAddress={siteSettings.schemaStreetAddress}
                        city={siteSettings.schemaCity}
                        region={siteSettings.schemaRegion}
                        postalCode={siteSettings.schemaPostalCode}
                        country={siteSettings.schemaCountry}
                        latitude={siteSettings.schemaLatitude || undefined}
                        longitude={siteSettings.schemaLongitude || undefined}
                        foundingDate={siteSettings.schemaFoundingDate}
                        founderName={siteSettings.schemaFounderName}
                        ratingValue={siteSettings.schemaRatingValue}
                        reviewCount={siteSettings.schemaReviewCount}
                        bestRating={siteSettings.schemaBestRating}
                        services={siteSettings.schemaServices}
                        socialLinks={siteSettings.socials.map((x) => x.url!).filter(Boolean)}
                    />
                    {children}
                    <CmsUiLayer popups={popupData} />
                    <WhatsAppFAB />
                </SiteSettingsProvider>
                <CustomCodeFooter data={customCode} />
            </body>
        </html>
    );
}
