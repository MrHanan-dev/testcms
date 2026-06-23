import Header from '@/components/Header';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import ServiceHero from '@/components/ServiceHero';
import Image from 'next/image';
import * as motion from 'framer-motion/client';
import { ArrowRight, FileText, Upload, CheckCircle2, Building2, LayoutDashboard, ShoppingBag, HardHat, Hammer, Factory, School, Quote } from 'lucide-react';
import Link from 'next/link';
import ContactLink from '@/components/ContactLink';
import CostEstimationForm from '@/components/CostEstimationForm';
import type { Metadata } from 'next';
import { getGlobal } from '@/lib/payload';
import { CE_CONTENT } from '@/data/ceContent';

export const metadata: Metadata = {
    title: "Quantity Surveying NZ | Construction Cost Estimation",
    description: "NZ quantity surveying & construction cost estimation services. BOQ, tendering, value engineering & cost management for builders and developers.",
};

const orUndef = (v: unknown): string | undefined => (typeof v === 'string' && v.length > 0 ? v : undefined);
const mediaUrl = (v: unknown): string | undefined => (v && typeof v === 'object' && 'url' in v ? (v as { url?: string }).url ?? undefined : undefined);

const INDUSTRY_ICONS = [Building2, Building2, LayoutDashboard, ShoppingBag, HardHat, Hammer, Factory, School];

export default async function CostEstimationPage() {
    const c = await getGlobal('costEstimationPage');

    const heroTitle = orUndef(c.heroTitle) ?? CE_CONTENT.heroTitle;
    const heroDescription = orUndef(c.heroDescription) ?? CE_CONTENT.heroDescription;
    const heroBreadcrumb = orUndef(c.heroBreadcrumb) ?? CE_CONTENT.heroBreadcrumb;
    const introEyebrow = orUndef(c.introEyebrow) ?? CE_CONTENT.introEyebrow;
    const introHeading = orUndef(c.introHeading) ?? CE_CONTENT.introHeading;
    const introParagraph = orUndef(c.introParagraph) ?? CE_CONTENT.introParagraph;

    const cmsServices = c.mainServices as { title?: string; desc?: string; image?: unknown; containImage?: boolean }[] | undefined;
    const mainServices = CE_CONTENT.mainServices.map((base, i) => {
        const s = cmsServices?.[i];
        return {
            title: s?.title || base.title,
            desc: s?.desc || base.desc,
            image: mediaUrl(s?.image) || base.image,
            containImage: s ? Boolean(s.containImage) : base.containImage,
        };
    });

    const whyEyebrow = orUndef(c.whyEyebrow) ?? CE_CONTENT.whyEyebrow;
    const whyHeadingLine1 = orUndef(c.whyHeadingLine1) ?? CE_CONTENT.whyHeadingLine1;
    const whyHeadingLine2 = orUndef(c.whyHeadingLine2) ?? CE_CONTENT.whyHeadingLine2;
    const whyParagraph = orUndef(c.whyParagraph) ?? CE_CONTENT.whyParagraph;
    const whyChecklist = (c.whyChecklist as { text: string }[] | undefined)?.length
        ? (c.whyChecklist as { text: string }[]).map((x) => x.text)
        : CE_CONTENT.whyChecklist;

    const sectorsEyebrow = orUndef(c.sectorsEyebrow) ?? CE_CONTENT.sectorsEyebrow;
    const sectorsHeadingLead = orUndef(c.sectorsHeadingLead) ?? CE_CONTENT.sectorsHeadingLead;
    const sectorsHeadingMuted = orUndef(c.sectorsHeadingMuted) ?? CE_CONTENT.sectorsHeadingMuted;
    const sectorsParagraph = orUndef(c.sectorsParagraph) ?? CE_CONTENT.sectorsParagraph;
    const cmsIndustries = c.industries as { name: string }[] | undefined;
    const industries = INDUSTRY_ICONS.map((icon, i) => ({
        icon,
        name: cmsIndustries?.[i]?.name || CE_CONTENT.industries[i],
    }));

    const testEyebrow = orUndef(c.testEyebrow) ?? CE_CONTENT.testEyebrow;
    const testHeading = orUndef(c.testHeading) ?? CE_CONTENT.testHeading;
    const testimonials = (c.testimonials as { quote: string; author?: string }[] | undefined)?.length
        ? (c.testimonials as { quote: string; author?: string }[])
        : CE_CONTENT.testimonials;

    const faqTitle = orUndef(c.faqTitle) ?? CE_CONTENT.faqTitle;
    const faqSubtitle = orUndef(c.faqSubtitle) ?? CE_CONTENT.faqSubtitle;
    const faqItems = (c.faqItems as { question: string; answer: string }[] | undefined)?.length
        ? (c.faqItems as { question: string; answer: string }[])
        : CE_CONTENT.faqItems;

    const formEyebrow = orUndef(c.formEyebrow) ?? CE_CONTENT.formEyebrow;
    const formHeading = orUndef(c.formHeading) ?? CE_CONTENT.formHeading;
    const formParagraph = orUndef(c.formParagraph) ?? CE_CONTENT.formParagraph;
    const feature1Title = orUndef(c.feature1Title) ?? CE_CONTENT.feature1Title;
    const feature1Text = orUndef(c.feature1Text) ?? CE_CONTENT.feature1Text;
    const feature2Title = orUndef(c.feature2Title) ?? CE_CONTENT.feature2Title;
    const feature2Text = orUndef(c.feature2Text) ?? CE_CONTENT.feature2Text;
    const urgentTitle = orUndef(c.urgentTitle) ?? CE_CONTENT.urgentTitle;
    const urgentText = orUndef(c.urgentText) ?? CE_CONTENT.urgentText;
    const urgentPhone = orUndef(c.urgentPhone) ?? CE_CONTENT.urgentPhone;

    const careerEyebrow = orUndef(c.careerEyebrow) ?? CE_CONTENT.careerEyebrow;
    const careerHeading = orUndef(c.careerHeading) ?? CE_CONTENT.careerHeading;
    const careerParagraph = orUndef(c.careerParagraph) ?? CE_CONTENT.careerParagraph;
    const careerButtonText = orUndef(c.careerButtonText) ?? CE_CONTENT.careerButtonText;

    return (
        <>
            <Header variant="transparent" />
            <main className="min-h-screen bg-white">
                <ServiceHero
                    title={heroTitle}
                    description={heroDescription}
                    gradientClass="bg-gradient-to-br from-[#0f293e] to-[#1e4a6d]"
                    breadcrumb={heroBreadcrumb}
                />

                {/* Excellence Introduction */}
                <section className="py-24 bg-slate-50">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center space-y-8">
                            <span className="label-tag mx-auto">{introEyebrow}</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary tracking-tight leading-tight">
                                {introHeading}
                            </h2>
                            <p className="text-slate-600 text-xl font-medium leading-relaxed">
                                {introParagraph}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Vertical Alternating Services */}
                <div className="bg-white">
                    {mainServices.map((service, i) => {
                        return (
                            <section key={i} className={`py-24 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                                <div className="container-custom">
                                    <div className={`flex flex-col gap-12 lg:gap-24 ${i % 2 === 0 ? 'lg:flex-row lg:items-start' : 'lg:flex-row-reverse lg:items-start'
                                        }`}>
                                        {/* Image Side */}
                                        <motion.div
                                            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            className="flex-1"
                                        >
                                            <div className="relative group">
                                                <div className="absolute -inset-4 bg-accent/10 rounded-[40px] blur-2xl group-hover:bg-accent/20 transition-all duration-500" />
                                                <div className="relative h-[400px] md:h-[500px] border border-slate-100 w-full rounded-[32px] overflow-hidden shadow-2xl flex items-center justify-center">
                                                    <Image
                                                        src={service.image}
                                                        alt={service.title}
                                                        fill
                                                        className={`transition-transform duration-700 group-hover:scale-105 ${service.containImage ? 'object-contain p-4' : 'object-cover'}`}
                                                    />
                                                </div>
                                            </div>
                                        </motion.div>

                                        {/* Text Side */}
                                        <motion.div
                                            initial={{ opacity: 0, x: i % 2 === 0 ? 40 : -40 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            className="flex-1 space-y-8"
                                        >
                                            <div className={i % 2 === 0 ? 'text-left' : 'lg:text-right'}>
                                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary leading-tight mb-6">
                                                    {service.title}
                                                </h3>
                                                <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
                                                    {service.desc}
                                                </p>
                                                <div className={`pt-8 ${i % 2 === 0 ? '' : 'lg:ml-auto'}`}>
                                                    <Link
                                                        href="#estimate-form"
                                                        className="inline-flex items-center gap-3 text-primary font-bold hover:gap-5 transition-all group"
                                                    >
                                                        Learn More
                                                        <ArrowRight className="text-accent group-hover:translate-x-1 transition-transform" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </section>
                        );
                    })}
                </div>

                {/* Why Choose Us Section */}
                <section className="py-32 bg-slate-50">
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-8"
                            >
                                <span className="label-tag">{whyEyebrow}</span>
                                <h2 className="text-4xl md:text-6xl font-black text-primary leading-tight">
                                    {whyHeadingLine1}<br />
                                    <span className="text-slate-400">{whyHeadingLine2}</span>
                                </h2>
                                <p className="text-slate-600 text-xl font-medium leading-relaxed">
                                    {whyParagraph}
                                </p>
                            </motion.div>

                            <div className="grid gap-6">
                                {whyChecklist.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                                            <CheckCircle2 size={18} />
                                        </div>
                                        <span className="text-lg font-bold text-primary">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Industries Section */}
                <section className="py-32 bg-white">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                            <span className="label-tag mx-auto">{sectorsEyebrow}</span>
                            <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tight">
                                {sectorsHeadingLead}<span className="text-slate-400">{sectorsHeadingMuted}</span>
                            </h2>
                            <p className="text-slate-500 text-xl font-medium">
                                {sectorsParagraph}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {industries.map((industry, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="p-8 bg-slate-50 rounded-[32px] border border-slate-100 hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all group"
                                >
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                                        <industry.icon size={28} />
                                    </div>
                                    <h4 className="text-xl font-black text-primary leading-snug">{industry.name}</h4>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="py-32 bg-primary relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent rounded-full blur-[120px]" />
                        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent rounded-full blur-[120px]" />
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="text-center mb-20">
                            <span className="label-tag border-white/20 text-white mx-auto">{testEyebrow}</span>
                            <h2 className="text-4xl md:text-6xl font-black text-white mt-6">{testHeading}</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {testimonials.map((t, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-10 bg-white/5 backdrop-blur-md rounded-[40px] border border-white/10 relative group hover:bg-white/10 transition-all"
                                >
                                    <Quote className="text-accent mb-8 opacity-40" size={48} />
                                    <p className="text-xl text-white/90 font-medium leading-relaxed mb-8 italic">
                                        "{t.quote}"
                                    </p>
                                    <div className="pt-8 border-t border-white/10">
                                        <p className="font-black text-accent tracking-widest text-sm uppercase">{t.author}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <FAQ
                    title={faqTitle}
                    subtitle={faqSubtitle}
                    items={faqItems}
                />

                {/* Quote Form Section */}
                <section id="estimate-form" className="py-32 bg-slate-950 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="space-y-10">
                                <div>
                                    <span className="label-tag mb-6 block border-white/20 text-white">{formEyebrow}</span>
                                    <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight mb-8">
                                        {formHeading}
                                    </h2>
                                    <p className="text-slate-400 text-xl leading-relaxed mb-10">
                                        {formParagraph}
                                    </p>

                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                                            <div className="w-12 h-12 bg-accent text-primary rounded-xl flex items-center justify-center mb-6">
                                                <FileText size={24} />
                                            </div>
                                            <h4 className="font-bold text-white mb-2 text-xl">{feature1Title}</h4>
                                            <p className="text-slate-400">{feature1Text}</p>
                                        </div>
                                        <div className="p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                                            <div className="w-12 h-12 bg-emerald-500 text-white rounded-xl flex items-center justify-center mb-6">
                                                <Upload size={24} />
                                            </div>
                                            <h4 className="font-bold text-white mb-2 text-xl">{feature2Title}</h4>
                                            <p className="text-slate-400">{feature2Text}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-10 bg-primary text-white rounded-[40px] shadow-2xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-bl-full blur-2xl"></div>
                                    <h3 className="text-2xl font-bold mb-4">{urgentTitle}</h3>
                                    <p className="text-blue-100/70 mb-6">{urgentText}</p>
                                    <div className="text-2xl font-black text-accent tracking-widest">{urgentPhone}</div>
                                </div>
                            </div>

                            <div className="bg-white rounded-[40px] p-2 overflow-hidden shadow-2xl">
                                <div className="p-8 md:p-12 text-primary">
                                    <CostEstimationForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Career Section */}
                <section className="py-24 bg-white border-t border-slate-100">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center space-y-8">
                            <span className="label-tag mx-auto">{careerEyebrow}</span>
                            <h2 className="text-3xl md:text-5xl font-black text-primary leading-tight">{careerHeading}</h2>
                            <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
                                {careerParagraph}
                            </p>
                            <div className="pt-4">
                                <ContactLink
                                    className="inline-flex items-center justify-center py-6 px-16 bg-white text-primary font-black text-xl rounded-2xl hover:scale-105 transition-all shadow-2xl"
                                >
                                    {careerButtonText}
                                </ContactLink>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer hideContactForm={true} hideClients={true} />
        </>
    );
}
