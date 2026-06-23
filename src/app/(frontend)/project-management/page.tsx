import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceHero from '@/components/ServiceHero';
import ContactLink from '@/components/ContactLink';
import PMFAQ from '@/components/PMFAQ';
import { Check, Users, Target, Briefcase, BarChart3, ShieldCheck, Network, Layout, RefreshCw, Zap, Search, FileCheck } from 'lucide-react';
import { Metadata } from 'next';
import { getGlobal } from '@/lib/payload';
import { PM_CONTENT } from '@/data/pmContent';
import { generateSeoMetadata } from '@/lib/generateSeoMetadata';

export async function generateMetadata(): Promise<Metadata> {
    const c = await getGlobal('projectManagementPage');
    return generateSeoMetadata({
        data: c,
        fallbackTitle: "Construction Project Management NZ | PM Services",
        fallbackDescription: "End-to-end construction project management services in NZ. Planning, feasibility, delivery, and PMO support for infrastructure and commercial projects.",
        path: "/project-management",
    });
}

const orUndef = (v: unknown): string | undefined => (typeof v === 'string' && v.length > 0 ? v : undefined);

// Icons/colours are the design (fixed by position); all text comes from PM_CONTENT.
const SUB_META = [
    { icon: Target, color: "text-blue-600", bgColor: "bg-blue-50" },
    { icon: Layout, color: "text-teal-600", bgColor: "bg-teal-50" },
    { icon: Search, color: "text-purple-600", bgColor: "bg-purple-50" },
    { icon: Briefcase, color: "text-orange-600", bgColor: "bg-orange-50" },
    { icon: BarChart3, color: "text-green-600", bgColor: "bg-green-50" },
    { icon: RefreshCw, color: "text-red-600", bgColor: "bg-red-50" },
    { icon: ShieldCheck, color: "text-indigo-600", bgColor: "bg-indigo-50" },
    { icon: Users, color: "text-pink-600", bgColor: "bg-pink-50" },
    { icon: FileCheck, color: "text-cyan-600", bgColor: "bg-cyan-50" },
];
const CONS_ICONS = [Briefcase, Network, Zap, FileCheck];

export default async function ProjectManagementPage() {
    const c = await getGlobal('projectManagementPage');

    const heroTitle = orUndef(c.heroTitle) ?? PM_CONTENT.heroTitle;
    const heroDescription = orUndef(c.heroDescription) ?? PM_CONTENT.heroDescription;
    const heroBreadcrumb = orUndef(c.heroBreadcrumb) ?? PM_CONTENT.heroBreadcrumb;
    const helpEyebrow = orUndef(c.helpEyebrow) ?? PM_CONTENT.helpEyebrow;
    const helpHeadingLine1 = orUndef(c.helpHeadingLine1) ?? PM_CONTENT.helpHeadingLine1;
    const helpHeadingLine2 = orUndef(c.helpHeadingLine2) ?? PM_CONTENT.helpHeadingLine2;
    const helpIntro = orUndef(c.helpIntro) ?? PM_CONTENT.helpIntro;
    const helpLeftPara1 = orUndef(c.helpLeftPara1) ?? PM_CONTENT.helpLeftPara1;
    const helpLeftPara2 = orUndef(c.helpLeftPara2) ?? PM_CONTENT.helpLeftPara2;
    const helpButtonText = orUndef(c.helpButtonText) ?? PM_CONTENT.helpButtonText;
    const sectorTitle = orUndef(c.sectorTitle) ?? PM_CONTENT.sectorTitle;
    const sectorText = orUndef(c.sectorText) ?? PM_CONTENT.sectorText;

    const gridHeading = orUndef(c.gridHeading) ?? PM_CONTENT.gridHeading;
    const gridSubtitle = orUndef(c.gridSubtitle) ?? PM_CONTENT.gridSubtitle;
    const cmsSub = c.subServices as { title?: string; desc?: string; bullets?: { text: string }[] }[] | undefined;
    const subServices = PM_CONTENT.subServices.map((base, i) => {
        const s = cmsSub?.[i];
        const meta = SUB_META[i];
        return {
            ...meta,
            title: s?.title || base.title,
            desc: s?.desc || base.desc,
            bullets: s?.bullets && s.bullets.length > 0 ? s.bullets.map((b) => b.text) : base.bullets,
        };
    });

    const consEyebrow = orUndef(c.consEyebrow) ?? PM_CONTENT.consEyebrow;
    const consHeadingLine1 = orUndef(c.consHeadingLine1) ?? PM_CONTENT.consHeadingLine1;
    const consHeadingLine2 = orUndef(c.consHeadingLine2) ?? PM_CONTENT.consHeadingLine2;
    const consPara1 = orUndef(c.consPara1) ?? PM_CONTENT.consPara1;
    const consPara2 = orUndef(c.consPara2) ?? PM_CONTENT.consPara2;
    const cmsCons = c.consCards as { title?: string; desc?: string }[] | undefined;
    const consultancyServices = PM_CONTENT.consCards.map((base, i) => ({
        icon: CONS_ICONS[i],
        title: cmsCons?.[i]?.title || base.title,
        desc: cmsCons?.[i]?.desc || base.desc,
    }));

    const faqItems = (c.faqItems as { question: string; answer: string }[] | undefined);
    const ctaHeading = orUndef(c.ctaHeading) ?? PM_CONTENT.ctaHeading;
    const ctaParagraph = orUndef(c.ctaParagraph) ?? PM_CONTENT.ctaParagraph;
    const ctaButtonText = orUndef(c.ctaButtonText) ?? PM_CONTENT.ctaButtonText;

    return (
        <>
            <Header variant="transparent" />
            <main className="min-h-screen bg-white">
                <ServiceHero
                    title={heroTitle}
                    description={heroDescription}
                    gradientClass="bg-gradient-to-br from-[#0b5c92] to-[#1479be]"
                    breadcrumb={heroBreadcrumb}
                />

                {/* How We Can Help Section */}
                <section className="py-24 bg-white">
                    <div className="container-custom">
                        <div className="text-center space-y-8 mb-20">
                            <span className="label-tag mx-auto">{helpEyebrow}</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-tight tracking-tight">
                                {helpHeadingLine1}<br className="hidden md:block" /> {helpHeadingLine2}
                            </h2>
                            <p className="text-slate-600 text-xl md:text-2xl leading-relaxed font-medium max-w-4xl mx-auto">
                                {helpIntro}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <p className="text-slate-500 text-lg leading-relaxed">
                                    {helpLeftPara1}
                                </p>
                                <p className="text-slate-500 text-lg leading-relaxed">
                                    {helpLeftPara2}
                                </p>
                                <ContactLink
                                    className="inline-flex items-center justify-center py-5 px-10 bg-primary text-white font-black rounded-2xl hover:opacity-90 transition-all hover:scale-105 shadow-xl"
                                >
                                    {helpButtonText}
                                </ContactLink>
                            </div>
                            <div className="bg-slate-50 p-12 rounded-[50px] border border-slate-100 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/30 rounded-bl-full pointer-events-none" />
                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <div className="w-20 h-20 bg-white rounded-3xl shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Briefcase size={40} className="text-blue-600" />
                                    </div>
                                    <h3 className="text-2xl font-black text-primary mb-4">{sectorTitle}</h3>
                                    <p className="text-slate-500 font-medium">{sectorText}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-24 bg-slate-50 overflow-hidden">
                    <div className="container-custom">
                        <div className="mb-16">
                            <h2 className="text-3xl md:text-5xl font-black text-primary tracking-tight">
                                {gridHeading}
                            </h2>
                            <p className="text-slate-500 mt-4 text-xl font-medium">{gridSubtitle}</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {subServices.map((service, i) => (
                                <div key={i} className="bg-white p-8 xl:p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col h-full">
                                    <div className={`${service.bgColor} ${service.color} w-16 h-16 rounded-[24px] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shrink-0`}>
                                        <service.icon size={32} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-black text-primary mb-4 leading-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-500 leading-relaxed font-medium mb-8">
                                        {service.desc}
                                    </p>

                                    <div className="mt-auto pt-6 border-t border-slate-100">
                                        <p className="text-sm font-bold text-slate-800 mb-4">Our services include:</p>
                                        <ul className="space-y-3">
                                            {service.bullets.map((bullet, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                                                    <Check size={16} className="text-accent shrink-0 mt-0.5" />
                                                    <span>{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Consultancy Services Section */}
                <section className="py-32 bg-white">
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-5 gap-16 items-start">
                            <div className="lg:col-span-2 space-y-8">
                                <span className="label-tag">{consEyebrow}</span>
                                <h2 className="text-4xl md:text-5xl font-black text-primary leading-[1.1] tracking-tight">
                                    {consHeadingLine1}<br />{consHeadingLine2}
                                </h2>
                                <p className="text-slate-500 text-lg leading-relaxed">
                                    {consPara1}
                                </p>
                                <p className="text-slate-500 text-lg leading-relaxed">
                                    {consPara2}
                                </p>
                            </div>

                            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-8">
                                {consultancyServices.map((service, i) => (
                                    <div key={i} className="p-8 rounded-[40px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all group">
                                        <div className="bg-white p-4 w-16 h-16 rounded-2xl shadow-sm mb-6 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                            <service.icon size={28} />
                                        </div>
                                        <h3 className="text-xl font-black text-primary mb-3">{service.title}</h3>
                                        <p className="text-slate-500 leading-relaxed text-sm font-medium">{service.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <PMFAQ
                    eyebrow={orUndef(c.faqEyebrow)}
                    headingLine1={orUndef(c.faqHeadingLine1)}
                    headingLine2={orUndef(c.faqHeadingLine2)}
                    items={faqItems}
                />

                {/* Get In Touch CTA */}
                <section className="py-24 container-custom px-4">
                    <div className="bg-[#0b5c92] p-12 md:p-24 rounded-[60px] md:rounded-[100px] text-center text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                        <div className="relative z-10 max-w-4xl mx-auto space-y-10">
                            <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
                                {ctaHeading}
                            </h2>
                            <p className="text-blue-100 text-xl md:text-2xl font-medium">
                                {ctaParagraph}
                            </p>
                            <div className="pt-4">
                                <ContactLink
                                    className="inline-flex items-center justify-center py-6 px-16 bg-white text-primary font-black text-xl rounded-2xl hover:scale-105 transition-all shadow-2xl"
                                >
                                    {ctaButtonText}
                                </ContactLink>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
