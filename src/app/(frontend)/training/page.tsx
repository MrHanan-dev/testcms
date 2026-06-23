import Header from '@/components/Header';
import FAQ from '@/components/FAQ';
import TrainingSchedule from '@/components/TrainingSchedule';
import Footer from '@/components/Footer';
import ServiceHero from '@/components/ServiceHero';
import { Files, Award, Star, Laptop, Users, Globe, GraduationCap, ArrowRight, MessageSquare, Search } from 'lucide-react';
import { Metadata } from 'next';
import { getGlobal } from '@/lib/payload';
import { TR_CONTENT } from '@/data/trContent';

export const metadata: Metadata = {
    title: "PMP & PMI Certification Training NZ | Professional Development",
    description: "PMI Authorised Training Partner offering PMP, CAPM & PMI-CP certification training in NZ. Live online & classroom. Enroll in our next cohort!",
};

const orUndef = (v: unknown): string | undefined => (typeof v === 'string' && v.length > 0 ? v : undefined);

const CATEGORY_ICONS = [Files, Award, Star];
const BESPOKE_ICONS = [Laptop, Users, Globe];
const RESOURCE_META = [
    { icon: MessageSquare, box: "bg-blue-50 text-blue-600" },
    { icon: Search, box: "bg-teal-50 text-teal-600" },
    { icon: Files, box: "bg-purple-50 text-purple-600" },
];

export default async function TrainingPage() {
    const c = await getGlobal('trainingPage');

    const heroTitle = orUndef(c.heroTitle) ?? TR_CONTENT.heroTitle;
    const heroDescription = orUndef(c.heroDescription) ?? TR_CONTENT.heroDescription;
    const heroBreadcrumb = orUndef(c.heroBreadcrumb) ?? TR_CONTENT.heroBreadcrumb;
    const introEyebrow = orUndef(c.introEyebrow) ?? TR_CONTENT.introEyebrow;
    const introHeadingLine1 = orUndef(c.introHeadingLine1) ?? TR_CONTENT.introHeadingLine1;
    const introHeadingLine2 = orUndef(c.introHeadingLine2) ?? TR_CONTENT.introHeadingLine2;
    const introParagraph = orUndef(c.introParagraph) ?? TR_CONTENT.introParagraph;

    const cmsCats = c.categories as { title?: string; desc?: string; links?: { text: string }[] }[] | undefined;
    const categories = TR_CONTENT.categories.map((base, i) => {
        const s = cmsCats?.[i];
        return {
            icon: CATEGORY_ICONS[i],
            title: s?.title || base.title,
            desc: s?.desc || base.desc,
            links: s?.links && s.links.length > 0 ? s.links.map((l) => l.text) : base.links,
        };
    });

    const bespokeHeading = orUndef(c.bespokeHeading) ?? TR_CONTENT.bespokeHeading;
    const bespokeParagraph = orUndef(c.bespokeParagraph) ?? TR_CONTENT.bespokeParagraph;
    const cmsBespoke = c.bespokeServices as { title?: string; desc?: string }[] | undefined;
    const bespokeServices = TR_CONTENT.bespokeServices.map((base, i) => ({
        icon: BESPOKE_ICONS[i],
        title: cmsBespoke?.[i]?.title || base.title,
        desc: cmsBespoke?.[i]?.desc || base.desc,
    }));
    const bespokeBadgeTitle = orUndef(c.bespokeBadgeTitle) ?? TR_CONTENT.bespokeBadgeTitle;
    const bespokeBadgeText = orUndef(c.bespokeBadgeText) ?? TR_CONTENT.bespokeBadgeText;

    const cmsRes = c.resources as { title?: string; desc?: string }[] | undefined;
    const resources = RESOURCE_META.map((meta, i) => ({
        ...meta,
        title: cmsRes?.[i]?.title || TR_CONTENT.resources[i].title,
        desc: cmsRes?.[i]?.desc || TR_CONTENT.resources[i].desc,
    }));

    const scheduleItems = c.scheduleItems as { month: string; course: string; dates: string; time: string; format: string; status: string }[] | undefined;

    return (
        <>
            <Header variant="transparent" />
            <main className="min-h-screen bg-white">
                <ServiceHero
                    title={heroTitle}
                    description={heroDescription}
                    gradientClass="bg-gradient-to-br from-[#1479be] to-[#31acee]"
                    breadcrumb={heroBreadcrumb}
                />

                {/* Introduction */}
                <section className="py-24 container-custom">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <span className="label-tag mx-auto">{introEyebrow}</span>
                        <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight tracking-tight">
                            {introHeadingLine1}<br />{introHeadingLine2}
                        </h2>
                        <p className="text-slate-600 text-xl leading-relaxed font-medium">
                            {introParagraph}
                        </p>
                    </div>
                </section>

                {/* Categories Grid */}
                <section className="py-24 bg-slate-50">
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-3 gap-8">
                            {categories.map((cat, i) => (
                                <div key={i} className="bg-white p-12 rounded-[50px] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                                    <div className="bg-blue-50 text-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                        <cat.icon size={32} />
                                    </div>
                                    <h3 className="text-2xl font-black text-primary mb-4">{cat.title}</h3>
                                    <p className="text-slate-500 mb-8 leading-relaxed font-medium">
                                        {cat.desc}
                                    </p>
                                    <ul className="space-y-3">
                                        {cat.links.map((link, j) => (
                                            <li key={j} className="flex items-center gap-3 text-primary font-bold hover:text-blue-600 transition-colors cursor-pointer group/link">
                                                <ArrowRight size={16} className="text-blue-500 group-hover/link:translate-x-1 transition-transform" />
                                                {link}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Bespoke Solutions */}
                <section className="py-32 bg-white">
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <h2 className="text-3xl md:text-4xl font-black text-primary leading-tight">
                                    {bespokeHeading}
                                </h2>
                                <p className="text-slate-500 text-lg leading-relaxed">
                                    {bespokeParagraph}
                                </p>
                                <div className="space-y-6">
                                    {bespokeServices.map((service, i) => (
                                        <div key={i} className="flex gap-6 items-start">
                                            <div className="bg-slate-50 p-4 rounded-2xl text-blue-600 shrink-0">
                                                <service.icon size={24} />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-primary mb-1">{service.title}</h4>
                                                <p className="text-slate-500 text-sm">{service.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-square bg-slate-100 rounded-[80px] overflow-hidden">
                                    {/* Image Placeholder with Icon */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <GraduationCap size={160} className="text-slate-200" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
                                </div>
                                <div className="absolute -bottom-8 -left-8 bg-primary text-white p-10 rounded-[40px] shadow-2xl">
                                    <h4 className="text-2xl font-black mb-2">{bespokeBadgeTitle}</h4>
                                    <p className="text-blue-100/70 text-sm font-medium">{bespokeBadgeText}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Resources Callout */}
                <section className="py-24 bg-slate-50">
                    <div className="container-custom">
                        <div className="bg-white p-12 md:p-20 rounded-[60px] border border-slate-100 shadow-sm">
                            <div className="grid md:grid-cols-3 gap-12 text-center">
                                {resources.map((res, i) => (
                                    <div key={i} className="group space-y-4">
                                        <div className={`mx-auto ${res.box} w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                            <res.icon size={28} />
                                        </div>
                                        <h4 className="text-xl font-black text-primary">{res.title}</h4>
                                        <p className="text-slate-500 text-sm">{res.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <TrainingSchedule
                eyebrow={orUndef(c.scheduleEyebrow)}
                heading={orUndef(c.scheduleHeading)}
                paragraph={orUndef(c.scheduleParagraph)}
                items={scheduleItems}
            />
            <FAQ />
            <Footer />
        </>
    );
}
