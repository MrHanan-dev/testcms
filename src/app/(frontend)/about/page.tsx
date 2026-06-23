import Image from 'next/image';
import Header from '@/components/Header';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import EvolutionTimeline from '@/components/EvolutionTimeline';
import type { Metadata } from 'next';
import Features from '@/components/Features';
import CourseSuccessQuotes from '@/components/CourseSuccessQuotes';
import { getAbout } from '@/lib/payload';

export const metadata: Metadata = {
    title: "About TheAgileNest | PMP Training & Consulting Experts NZ",
    description: "Learn about TheAgileNest's 17-year journey in PM excellence. PMI ATP, expert consultants, and training serving NZ, Australia & global clients.",
};

const orUndef = (v: unknown): string | undefined => (typeof v === 'string' && v.length > 0 ? v : undefined);

const DEFAULT_WHY_CARDS = [
    { title: "Real-World Expertise", description: "Learn from certified industry experts with decades of hands on experience in construction, operations, and leadership. We share what truly works   not just theory." },
    { title: "Global Knowledge, Local Focus", description: "Trained at world leading universities like KTH (Sweden) and Massey University (New Zealand), we combine international best practices with local industry insight." },
    { title: "Practical, Impactful Learning", description: "Our training is designed around real projects, real tools, and real challenges   ensuring you can apply your learning immediately." },
    { title: "Personal Mentorship", description: "We guide every learner through their professional growth journey, offering support, mentoring, and career coaching beyond the classroom." },
    { title: "Lifelong Learning Culture", description: "TheAgileNest is more than a training provider   it’s a learning community. We inspire continuous growth, innovation, and excellence." },
];

export default async function AboutPage() {
    const about = await getAbout();
    const a = (about ?? {}) as Record<string, unknown>;

    const heroHeadline = orUndef(a.heroHeadline) ?? "Where Knowledge Meets Experience";
    const heroSubheading = orUndef(a.heroSubheading) ?? "Transforming project management into a strategic advantage for teams and leaders worldwide.";
    const storyEyebrow = orUndef(a.storyEyebrow) ?? "Our Founder's Story";
    const storyHeading = orUndef(a.storyHeading) ?? "Passion, Purpose, and 17 Years of Delivery";
    const storyParagraphs = a.storyParagraphs as { text: string }[] | undefined;
    const founderImage = a.founderImage && typeof a.founderImage === 'object' ? (a.founderImage as { url?: string }).url : undefined;
    const founderSrc = founderImage ?? "/images/founder_amjad.webp";
    const founderName = orUndef(a.founderName) ?? "Engr. Syed Amjad Iqbal";
    const founderTitle = orUndef(a.founderTitle) ?? "CEO & Certified Trainer";
    const whyEyebrow = orUndef(a.whyEyebrow) ?? "Who We Are";
    const whyHeading = orUndef(a.whyHeading) ?? "Why Choose TheAgileNest";
    const whyIntro = orUndef(a.whyIntro) ?? "At TheAgileNest, we don’t just teach project management   we transform professionals into confident, TheAgileNest leaders ready to deliver real results.";
    const whyCards = (a.whyCards as { title: string; description: string }[] | undefined)?.length
        ? (a.whyCards as { title: string; description: string }[])
        : DEFAULT_WHY_CARDS;
    const whyQuote = orUndef(a.whyQuote) ?? "TheAgileNest   Where knowledge meets experience, and every project takes flight.";
    const evoEyebrow = orUndef(a.evoEyebrow) ?? "Our Evolution";
    const evoHeading = orUndef(a.evoHeading) ?? "A 17-Year Journey in Project Management";
    const evoSubtitle = orUndef(a.evoSubtitle) ?? "From PMBOK 3rd to 8th Edition. Embracing Passion, Purpose, and Technology.";

    return (
        <>
            <Header variant="transparent" />
            <main className="min-h-screen bg-slate-50">
                {/* Hero section specifically for About page */}
                <section className="pt-40 pb-20 bg-[#0b3b5c] text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
                    <div className="container-custom relative z-10">
                        <div className="max-w-4xl">
                            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
                                {heroHeadline}
                            </h1>
                            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed font-medium">
                                {heroSubheading}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Story Section */}
                <section className="py-24 bg-white">
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-2 gap-20 items-start">
                            <div className="space-y-8">
                                <span className="label-tag">{storyEyebrow}</span>
                                <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight">
                                    {storyHeading}
                                </h2>
                                <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                                    {storyParagraphs && storyParagraphs.length > 0 ? (
                                        storyParagraphs.map((p, i) => <p key={i}>{p.text}</p>)
                                    ) : (
                                        <>
                                            <p>
                                                With over 17 years of professional experience in construction and project management, <strong>Engr. Syed Amjad Iqbal</strong> is a passionate leader, educator, and industry expert.
                                            </p>
                                            <p>
                                                His unwavering dedication to empowering the next generation of project professionals is a source of inspiration and motivation for all who work with him. After earning his Bachelor’s in Engineering in 2003, Syed began his career in the construction industry, successfully delivering major infrastructure and commercial projects.
                                            </p>
                                            <p>
                                                In 2008, he completed his Master’s in Engineering. He pursued a <strong>Master’s in Project Management and Operational Management</strong> from <strong>KTH Royal Institute of Technology, Sweden</strong>, one of Europe’s top universities and a Nobel Prize institution. His academic journey, combined with hands-on industry experience, shaped a unique blend of practical and theoretical expertise. He later completed a <strong>Master’s in Construction Management</strong> at <strong>Massey University in New Zealand</strong>.
                                            </p>
                                            <p>
                                                He achieved the <strong>PMI-CP (Construction Professional)</strong>, a globally recognised credential from the Project Management Institute (PMI), a prestigious certification focused on construction. As a CEO, consultant, and certified trainer, Syed has mentored hundreds of professionals worldwide in Project Management, Construction Management, and TheAgileNest practices.
                                            </p>
                                            <p>
                                                His commitment to continuous learning, which keeps him up to date with the latest industry standards, inspired the creation of <strong>TheAgileNest</strong>   an institute dedicated to transferring knowledge, practical experience, and global standards to individuals and organisations seeking to manage projects with excellence and confidence.
                                            </p>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-[4/5] bg-slate-100 rounded-[60px] overflow-hidden shadow-2xl relative group">
                                    <Image
                                        src={founderSrc}
                                        alt={`${founderName}, ${founderTitle}`}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        unoptimized={Boolean(founderImage)}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                    <div className="absolute bottom-10 left-10 text-white">
                                        <div className="text-2xl font-black">{founderName}</div>
                                        <div className="text-blue-200 font-bold">{founderTitle}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose TheAgileNest Section */}
                <section className="py-24 bg-slate-50">
                    <div className="container-custom">
                        <div className="text-center mb-16 space-y-4">
                            <span className="label-tag mx-auto">{whyEyebrow}</span>
                            <h2 className="text-4xl md:text-5xl font-black text-primary">{whyHeading}</h2>
                            <p className="text-slate-500 text-xl font-medium max-w-3xl mx-auto">
                                {whyIntro}
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {whyCards.map((item, i) => (
                                <div key={i} className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all h-full border border-slate-100">
                                    <h4 className="text-xl font-black text-primary mb-4">{item.title}</h4>
                                    <p className="text-slate-500 leading-relaxed font-medium">{item.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-16 text-center">
                            <p className="text-2xl font-black text-primary italic">
                                {whyQuote}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Evolution Section */}
                <section className="py-32 bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-20 max-w-4xl mx-auto space-y-6">
                            <span className="label-tag mx-auto">{evoEyebrow}</span>
                            <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tight">
                                {evoHeading}
                            </h2>
                            <p className="text-slate-500 text-xl font-medium">
                                {evoSubtitle}
                            </p>
                        </div>

                        <EvolutionTimeline />


                    </div>
                </section>
            </main>
            <Features titleSuffix="Certification Journey" descriptionSuffix="certification training programs" />
            <CourseSuccessQuotes />
            <FAQ />
            <Footer />
        </>
    );
}
