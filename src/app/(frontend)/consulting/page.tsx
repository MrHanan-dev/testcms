import Header from '@/components/Header';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import ServiceHero from '@/components/ServiceHero';
import { Check, ShieldCheck, BarChart3, Search, FileSearch } from 'lucide-react';
import { Metadata } from 'next';
import { getGlobal } from '@/lib/payload';

export const metadata: Metadata = {
    title: "Project Management Consulting NZ | Expert PM Advisory",
    description: "Expert project management consulting in NZ and globally. PMO setup, masterplanning, risk management, and contract administration for infrastructure projects.",
};

const orUndef = (v: unknown): string | undefined => (typeof v === 'string' && v.length > 0 ? v : undefined);

// Icons/colours are part of the design; the CMS overlays title/desc by position.
const DEFAULT_SERVICES = [
    { title: "Business Analysis", desc: "Bridging the gap between business needs and project delivery through stakeholder engagement and requirements engineering.", icon: Search, color: "text-blue-600", bgColor: "bg-blue-50" },
    { title: "Quality Assurance & Testing", desc: "Independent validation of project outputs to ensure they meet quality standards and user requirements.", icon: ShieldCheck, color: "text-emerald-600", bgColor: "bg-emerald-50" },
    { title: "Post Implementation Review", desc: "External, independent PIRs to capture lessons learned and validate that business cases were actually achieved.", icon: FileSearch, color: "text-orange-600", bgColor: "bg-orange-50" },
    { title: "Governance Frameworks", desc: "Designing and implementing robust decision-making models to de-risk portfolios and satisfy audit requirements.", icon: ListChecks, color: "text-teal-600", bgColor: "bg-teal-50" },
];

const DEFAULT_CHECKLIST = [
    "Objective, independent reviews",
    "Tailored governance frameworks",
    "On-demand specialized talent",
    "Clear roadmap for maturity",
];

export default async function ConsultingPage() {
    const c = await getGlobal('consultingPage');

    const heroTitle = orUndef(c.heroTitle) ?? "Consulting";
    const heroDescription = orUndef(c.heroDescription) ?? "Improving client project management maturity through consulting to create appropriate structure around project delivery, governance, process and tools.";
    const heroBreadcrumb = orUndef(c.heroBreadcrumb) ?? "Our Services";
    const introEyebrow = orUndef(c.introEyebrow) ?? "Project Maturity";
    const introHeadingLine1 = orUndef(c.introHeadingLine1) ?? "Creating Calm Across";
    const introHeadingLine2 = orUndef(c.introHeadingLine2) ?? "Your Projects";
    const introParagraph = orUndef(c.introParagraph) ?? "No matter the breadth and complexity, we help create the momentum you need to move your organisation forward.";

    const cmsCards = c.serviceCards as { title?: string; desc?: string }[] | undefined;
    const mainServices = DEFAULT_SERVICES.map((base, i) => {
        const card = cmsCards?.[i];
        return card ? { ...base, title: card.title || base.title, desc: card.desc || base.desc } : base;
    });

    const outcomeBadgeHeading = orUndef(c.outcomeBadgeHeading) ?? "Strategic Value";
    const outcomeBadgeText = orUndef(c.outcomeBadgeText) ?? "We bridge the gap between technical delivery and executive expectations.";
    const outcomeHeading = orUndef(c.outcomeHeading) ?? "Delivering Exceptional Results";
    const outcomeParagraph = orUndef(c.outcomeParagraph) ?? "Our consulting services are designed to address the root causes of project failure, ensuring your organisation’s project management maturity grows with every initiative.";
    const outcomeChecklist = (c.outcomeChecklist as { text: string }[] | undefined)?.length
        ? (c.outcomeChecklist as { text: string }[]).map((x) => x.text)
        : DEFAULT_CHECKLIST;
    const outcomeButtonText = orUndef(c.outcomeButtonText) ?? "Discuss Your Roadmap";

    return (
        <>
            <Header variant="transparent" />
            <main className="min-h-screen bg-white">
                <ServiceHero
                    title={heroTitle}
                    description={heroDescription}
                    gradientClass="bg-gradient-to-br from-[#0b3b5c] to-[#0b5c92]"
                    breadcrumb={heroBreadcrumb}
                />

                {/* Excellence Introduction */}
                <section className="py-24 container-custom">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <div className="text-center space-y-6">
                            <span className="label-tag mx-auto">{introEyebrow}</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary tracking-tight">
                                {introHeadingLine1}<br />{introHeadingLine2}
                            </h2>
                            <p className="text-slate-600 text-xl font-medium leading-relaxed">
                                {introParagraph}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Detailed Services Grid */}
                <section className="py-24 bg-slate-50">
                    <div className="container-custom">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {mainServices.map((service, i) => (
                                <div key={i} className="bg-white p-12 rounded-[50px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group">
                                    <div className={`${service.bgColor} ${service.color} w-20 h-20 rounded-[30px] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                                        <service.icon size={36} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-2xl font-black text-primary mb-6 leading-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-500 leading-relaxed font-medium">
                                        {service.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Outcome Focus Section */}
                <section className="py-32 bg-white">
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="relative aspect-square bg-[#0b5c92] rounded-[100px] flex items-center justify-center p-20 text-white overflow-hidden shadow-2xl">
                                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-10" />
                                <div className="text-center space-y-6 relative z-10">
                                    <BarChart3 size={120} className="mx-auto text-accent" />
                                    <h3 className="text-4xl font-black">{outcomeBadgeHeading}</h3>
                                    <p className="text-blue-100/80 text-lg font-medium">{outcomeBadgeText}</p>
                                </div>
                            </div>
                            <div className="space-y-10">
                                <div>
                                    <h2 className="text-3xl md:text-5xl font-black text-primary leading-tight tracking-tight mb-8">
                                        {outcomeHeading}
                                    </h2>
                                    <p className="text-slate-500 text-lg leading-relaxed mb-6">
                                        {outcomeParagraph}
                                    </p>
                                    <ul className="space-y-5">
                                        {outcomeChecklist.map((item, i) => (
                                            <li key={i} className="flex gap-4 items-center text-primary font-bold">
                                                <div className="bg-teal-50 text-teal-600 p-1 rounded-full"><Check size={18} strokeWidth={3} /></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="pt-6">
                                    <button className="py-6 px-12 bg-primary text-white font-black text-xl rounded-2xl hover:scale-105 transition-all shadow-xl">
                                        {outcomeButtonText}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <FAQ />
            <Footer />
        </>
    );
}

// Helper icon since it was missing in lucide-react default imports for this block
function ListChecks({ size, strokeWidth }: { size: number, strokeWidth: number }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m3 17 2 2 4-4" />
            <path d="m3 7 2 2 4-4" />
            <path d="M13 6h8" />
            <path d="M13 12h8" />
            <path d="M13 18h8" />
        </svg>
    )
}
