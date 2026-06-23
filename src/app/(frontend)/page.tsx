import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { getHome } from '@/lib/payload';
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
const mediaUrl = (v: unknown): string | undefined =>
    v && typeof v === 'object' && 'url' in v ? ((v as { url?: string }).url ?? undefined) : undefined;

export default async function Home() {
    // Every section reads from the CMS Home global; each component falls back to
    // its built-in content when the corresponding field is empty.
    const home = await getHome();
    const h = (home ?? {}) as Record<string, unknown>;

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
    const certItems = (h.certItems as Record<string, unknown>[] | undefined)?.map((c) => ({
        name: c.name as string,
        title: c.title as string,
        href: c.href as string,
        image: mediaUrl(c.image),
    }));
    const col1Items = (h.aboutCol1Items as { text: string }[] | undefined)?.map((x) => x.text);

    return (
        <>
            <Header variant="transparent" />
            <main>
                <Hero slides={heroSlides} />
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
                />
                <JsonLdFaq items={[
                    { question: "What is the exam success rate for TheAgileNest's students?", answer: "We are incredibly proud to maintain an exceptional first-attempt pass rate for our PMP® certification training programs. This success is not accidental; it is the result of a meticulously designed curriculum that is tailored based on actual industrial situations and includes comprehensive mock testing, personalized mentorship, and a deep-dive into the PMBOK® Guide's principles. We don't just teach you to pass; we teach you to excel." },
                    { question: "Do you offer tailored project management consulting for enterprises?", answer: "Absolutely. TheAgileNest specializes in bespoke consultancy services designed for high-stakes, large-scale projects. From helping you establish a robust Project Management Office (PMO) to providing expert masterplanning and sustainability advice, we help organizations navigate complex delivery hurdles with confidence. We work as an extension of your team, ensuring that every project activity is aligned with your broader strategic objectives." },
                    { question: "What industries do your consultancy services cover?", answer: "While our core strength lies in large-scale infrastructure, commercial developments, and industrial construction projects, our methodologies are versatile and have been successfully applied in sectors such as energy, manufacturing, and technology. We bring a cross-disciplinary perspective to every engagement, allowing us to identify unique opportunities for efficiency and risk mitigation that others might overlook." },
                    { question: "Can you handle remote or international projects?", answer: "Yes, our operational model is built for the global economy. We provide comprehensive digital cost estimation, remote project management consulting, and virtual training services to clients across several continents. By leveraging secure cloud-based collaboration tools and a global mindset, we ensure that our international clients receive the same level of dedicated support and expertise as our local New Zealand partners." },
                    { question: "What is your approach to risk management?", answer: "Risk management is woven into everything we do. We utilize a proactive approach, identifying potential project risks early in the lifecycle through multi-disciplinary analysis and predictive modeling. We then develop robust, actionable mitigation strategies to safeguard your project's financial stability and scheduling success. Our goal is to transform uncertainty into manageable variables, providing you with the clarity needed to make bold project decisions." }
                ]} />
                <FAQ />
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
