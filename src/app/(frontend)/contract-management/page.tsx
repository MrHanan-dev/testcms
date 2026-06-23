import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceHero from '@/components/ServiceHero';
import { Check, FileText, Scale, ShieldCheck, FileSearch, HelpCircle, Briefcase } from 'lucide-react';
import { Metadata } from 'next';
import ContactLink from '@/components/ContactLink';
import { getGlobal } from '@/lib/payload';
import { generateSeoMetadata } from '@/lib/generateSeoMetadata';

export async function generateMetadata(): Promise<Metadata> {
    const c = await getGlobal('contractManagementPage');
    return generateSeoMetadata({
        data: c,
        fallbackTitle: "Construction Contract Management NZ | Dispute Resolution",
        fallbackDescription: "Expert construction contract management, formulation, and dispute resolution services in NZ for complex infrastructure and commercial projects.",
        path: "/contract-management",
    });
}

const orUndef = (v: unknown): string | undefined => (typeof v === 'string' && v.length > 0 ? v : undefined);

const DEFAULT_SERVICES = [
    { title: "Contract Formulation", desc: "Drafting, reviewing, and negotiating robust contracts tailored to your specific project needs and risks.", icon: FileText, color: "text-blue-600", bgColor: "bg-blue-50" },
    { title: "Risk Mitigation", desc: "Identifying potential contractual loopholes and structuring agreements to protect your commercial interests.", icon: ShieldCheck, color: "text-emerald-600", bgColor: "bg-emerald-50" },
    { title: "Dispute Resolution", desc: "Expert guidance in mediation, arbitration, and resolving claims efficiently to avoid costly litigation.", icon: Scale, color: "text-orange-600", bgColor: "bg-orange-50" },
    { title: "Claims Management", desc: "Preparation, defense, and negotiation of extension of time (EOT) and disruption claims.", icon: FileSearch, color: "text-purple-600", bgColor: "bg-purple-50" },
    { title: "Advisory Services", desc: "Ongoing strategic advice on contract administration and compliance throughout the project lifecycle.", icon: Briefcase, color: "text-teal-600", bgColor: "bg-teal-50" },
    { title: "Contract Audits", desc: "Independent reviews to ensure obligations are being met and commercial performance is maximized.", icon: HelpCircle, color: "text-blue-600", bgColor: "bg-blue-50" },
];

const DEFAULT_CHECKLIST = [
    "Clear allocation of risk",
    "Streamlined variation processes",
    "Compliance monitoring",
    "Defensible claims strategy",
];

export default async function ContractManagementPage() {
    const c = await getGlobal('contractManagementPage');

    const heroTitle = orUndef(c.heroTitle) ?? "Construction Contracts";
    const heroDescription = orUndef(c.heroDescription) ?? "Expert contract management, formulation, and dispute resolution. We safeguard your commercial interests through rigorous administration and strategic advisory.";
    const heroBreadcrumb = orUndef(c.heroBreadcrumb) ?? "Our Services";
    const introEyebrow = orUndef(c.introEyebrow) ?? "Commercial Protection";
    const introHeadingLine1 = orUndef(c.introHeadingLine1) ?? "Securing Your";
    const introHeadingLine2 = orUndef(c.introHeadingLine2) ?? "Agreements";
    const introParagraph = orUndef(c.introParagraph) ?? "Robust contracts are the foundation of successful projects. Our experts ensure your agreements are clear, equitable, and structured to mitigate unforeseen risks.";

    const cmsCards = c.serviceCards as { title?: string; desc?: string }[] | undefined;
    const mainServices = DEFAULT_SERVICES.map((base, i) => {
        const card = cmsCards?.[i];
        return card ? { ...base, title: card.title || base.title, desc: card.desc || base.desc } : base;
    });

    const outcomeBadgeHeading = orUndef(c.outcomeBadgeHeading) ?? "Legal Clarity";
    const outcomeBadgeText = orUndef(c.outcomeBadgeText) ?? "Providing robust frameworks to prevent disputes before they arise.";
    const outcomeHeading = orUndef(c.outcomeHeading) ?? "Expert Contract Administration";
    const outcomeParagraph = orUndef(c.outcomeParagraph) ?? "We support both contractors and clients with rigorous contract management to ensure obligations are met and rights are protected throughout the project journey.";
    const outcomeChecklist = (c.outcomeChecklist as { text: string }[] | undefined)?.length
        ? (c.outcomeChecklist as { text: string }[]).map((x) => x.text)
        : DEFAULT_CHECKLIST;
    const outcomeButtonText = orUndef(c.outcomeButtonText) ?? "Enquire Now";

    return (
        <>
            <Header variant="transparent" />
            <main className="min-h-screen bg-white">
                <ServiceHero
                    title={heroTitle}
                    description={heroDescription}
                    gradientClass="bg-gradient-to-br from-[#1a365d] to-[#2a4365]"
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
                            <div className="relative aspect-square bg-[#1a365d] rounded-[100px] flex items-center justify-center p-20 text-white overflow-hidden shadow-2xl">
                                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-10" />
                                <div className="text-center space-y-6 relative z-10">
                                    <Scale size={120} className="mx-auto text-accent" />
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
                                    <ContactLink className="inline-block py-6 px-12 bg-primary text-white font-black text-xl rounded-2xl hover:scale-105 transition-all shadow-xl">
                                        {outcomeButtonText}
                                    </ContactLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
