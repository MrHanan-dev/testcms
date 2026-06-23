import type { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { getHome } from '@/lib/payload';
import { generateSeoMetadata } from '@/lib/generateSeoMetadata';
import FeatureStrip from '@/components/FeatureStrip';
import TrustBar from '@/components/TrustBar';
import BentoGrid from '@/components/BentoGrid';
import CertificationLogos from '@/components/CertificationLogos';
import AboutUsSummary from '@/components/AboutUsSummary';
import ResultsStats from '@/components/ResultsStats';
import Testimonials from '@/components/Testimonials';
import GoogleReviews from '@/components/GoogleReviews';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import JsonLdFaq from '@/components/JsonLdFaq';
import { payloadUploadUrlWithFallback } from '@/lib/resolveMediaUrl';

export async function generateMetadata(): Promise<Metadata> {
    const home = await getHome();
    return generateSeoMetadata({
        data: home,
        fallbackTitle: "TheAgileNest | PMP Training & Project Management Consulting NZ",
        fallbackDescription: "Premium PMP certification training, quantity surveying, and project management consulting services in New Zealand, Australia, and Pakistan.",
        path: "/",
        keywords: ["PMP certification", "project management training", "CAPM", "PMI-CP", "quantity surveying", "cost estimation", "New Zealand"],
    });
}

type HeroSlideDoc = {
    variant?: 'image' | 'infographic' | 'collage';
    image?: { url?: string } | string | null;
    alt?: string;
    tag?: string;
    headline?: string;
    description?: string;
};

/** Empty string -> undefined so a component's built-in default takes over. */
const orUndef = (v: unknown): string | undefined => (typeof v === 'string' && v.length > 0 ? v : undefined);
/** Resolve a Payload upload field to its URL string. */
const mediaUrl = (v: unknown, fallback?: string): string | undefined =>
    payloadUploadUrlWithFallback(v, fallback);

export default async function Home() {
    // Every section reads from the CMS Home global; each component falls back to
    // its built-in content when the corresponding field is empty.
    const home = await getHome();
    const h = (home ?? {}) as Record<string, unknown>;

    const faqItems = (h.faqItems as { question: string; answer: string }[] | undefined) ?? undefined;

    const heroSlides = ((h.heroSlides as HeroSlideDoc[]) ?? []).map((s) => ({
        src: s.image && typeof s.image === 'object' ? s.image.url ?? '' : '',
        alt: s.alt ?? '',
        tag: s.tag ?? '',
        headline: s.headline ?? '',
        description: s.description ?? '',
        isInfographic: s.variant === 'infographic',
        isCollage: s.variant === 'collage',
    }));

    const featureItems = (h.featureItems as { text: string }[] | undefined)?.map((f) => f.text);
    const certDefaults = ['/certifications/pmp.webp', '/certifications/capm.webp', '/certifications/pmi-cp.webp'];
    const certItems = (h.certItems as Record<string, unknown>[] | undefined)?.map((c, i) => ({
        name: c.name as string,
        title: c.title as string,
        href: c.href as string,
        image: mediaUrl(c.image, certDefaults[i]),
    }));
    const col1Items = (h.aboutCol1Items as { text: string }[] | undefined)?.map((x) => x.text);

    return (
        <>
            <Header variant="transparent" />
            <main>
                <Hero 
                    slides={heroSlides}
                    primaryCtaText={orUndef(h.heroPrimaryCtaText)}
                    primaryCtaUrl={orUndef(h.heroPrimaryCtaUrl)}
                    secondaryCtaText={orUndef(h.heroSecondaryCtaText)}
                    secondaryCtaUrl={orUndef(h.heroSecondaryCtaUrl)}
                />
                <FeatureStrip items={featureItems} />
                {/* <TrustBar /> */}
                <BentoGrid
                    eyebrow={orUndef(h.expertiseEyebrow)}
                    headingLead={orUndef(h.expertiseHeadingLead)}
                    headingMuted={orUndef(h.expertiseHeadingMuted)}
                    cards={h.expertiseCards as never}
                />
                <CertificationLogos
                    eyebrow={orUndef(h.certEyebrow)}
                    headingLead={orUndef(h.certHeadingLead)}
                    headingMuted={orUndef(h.certHeadingMuted)}
                    items={certItems}
                />
                <AboutUsSummary
                    headingLead={orUndef(h.aboutHeadingLead)}
                    headingMuted={orUndef(h.aboutHeadingMuted)}
                    identityTitle={orUndef(h.aboutIdentityTitle)}
                    paragraphs={h.aboutParagraphs as never}
                    col1Title={orUndef(h.aboutCol1Title)}
                    col1Items={col1Items}
                    col2Title={orUndef(h.aboutCol2Title)}
                    col2Text={orUndef(h.aboutCol2Text)}
                    whyHeading={orUndef(h.whyHeading)}
                    whyItems={h.whyItems as never}
                    heritageEyebrow={orUndef(h.heritageEyebrow)}
                    heritageHeading={orUndef(h.heritageHeading)}
                    heritageText={orUndef(h.heritageText)}
                    heritageLinkText={orUndef(h.heritageLinkText)}
                    heritageLinkHref={orUndef(h.heritageLinkHref)}
                />
                <ResultsStats items={h.stats as never} />
                <Testimonials
                    eyebrow={orUndef(h.testimonialsEyebrow)}
                    headingLead={orUndef(h.testimonialsHeadingLead)}
                    headingMuted={orUndef(h.testimonialsHeadingMuted)}
                    items={h.testimonials as never}
                />
                <GoogleReviews
                    eyebrow={orUndef(h.reviewsEyebrow)}
                    heading={orUndef(h.reviewsHeading)}
                    rating={orUndef(h.reviewsRating)}
                    googleUrl={orUndef(h.reviewsGoogleUrl)}
                    items={h.reviewItems as never}
                />
                {faqItems && faqItems.length > 0 && <JsonLdFaq items={faqItems} />}
                <FAQ 
                    eyebrow={orUndef(h.faqEyebrow)}
                    title={orUndef(h.faqTitle)}
                    subtitle={orUndef(h.faqSubtitle)}
                    description={orUndef(h.faqDescription)}
                    items={h.faqItems as never}
                    contactPrompt={orUndef(h.faqContactPrompt)}
                    contactLinkText={orUndef(h.faqContactLinkText)}
                    contactSuffix={orUndef(h.faqContactSuffix)}
                />
                <FinalCTA
                    headingLead={orUndef(h.ctaHeadingLead)}
                    headingAccent={orUndef(h.ctaHeadingAccent)}
                    paragraph={orUndef(h.ctaParagraph)}
                    primaryText={orUndef(h.ctaPrimaryText)}
                    secondaryText={orUndef(h.ctaSecondaryText)}
                />
            </main>
            <Footer />
        </>
    );
}
