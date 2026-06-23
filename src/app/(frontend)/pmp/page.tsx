import Header from '@/components/Header';
import FAQ from '@/components/FAQ';
import TrainingSchedule from '@/components/TrainingSchedule';
import Footer from '@/components/Footer';
import { Check, Star, ArrowRight, TrendingUp, ShieldCheck, Globe, Users, Building2, Target, Clock, Layout, BookOpen, Briefcase, GraduationCap, AlertCircle, List, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import CertificationHero from '@/components/CertificationHero';
import BookingForm from '@/components/BookingForm';
import ScrollButton from '@/components/ScrollButton';
import ContactLink from '@/components/ContactLink';
import JsonLdCourse from '@/components/JsonLdCourse';
import JsonLdFaq from '@/components/JsonLdFaq';
import { RichText } from '@payloadcms/richtext-lexical/react';
import { getGlobal } from '@/lib/payload';
import { PMP_CONTENT } from '@/data/pmpContent';
import { generateSeoMetadata } from '@/lib/generateSeoMetadata';
import { payloadUploadUrlWithFallback } from '@/lib/resolveMediaUrl';

export async function generateMetadata(): Promise<Metadata> {
    const c = await getGlobal('pmpPage');
    return generateSeoMetadata({
        data: c,
        fallbackTitle: "PMP Certification Training NZ | PMI Authorised Partner",
        fallbackDescription: "Join NZ's premier PMP® certification training. PMI ATP, 35 contact hours, live virtual classes, mock exams & first-attempt support. Enroll now!",
        path: "/pmp",
        keywords: ["PMP certification NZ", "PMP training", "PMI ATP", "project management professional", "PMP exam preparation"],
    });
}

const orUndef = (v: unknown): string | undefined => (typeof v === 'string' && v.length > 0 ? v : undefined);
const hasRich = (v: unknown): v is object => Boolean(v && typeof v === 'object' && 'root' in (v as Record<string, unknown>));

// Eligibility: design metadata fixed by position; edu/mandatory notes fall back
// to the exact built-in markup below (with their standards links).
const PATHWAY_META = [
    { border: 'border-l-accent', badge: 'bg-accent text-white' },
    { border: 'border-l-primary', badge: 'bg-primary text-white' },
    { border: 'border-l-accent', badge: 'bg-accent text-white' },
    { border: 'border-l-primary', badge: 'bg-primary text-white' },
];
const ECO_LINK = "https://www.pmi.org/-/media/pmi/documents/public/pdf/certifications/new-pmp-examination-content-outline-2026.pdf?rev=b274ffaa9ffa4635924169cbc6bcdfae";
const EQF = "https://europa.eu/europass/en/description-eight-eqf-levels";
const ISCED = "https://ec.europa.eu/eurostat/statistics-explained/index.php?title=International_Standard_Classification_of_Education_(ISCED)";

const EDU_FALLBACKS = [
    <p key="0" className="text-slate-600 text-sm leading-relaxed">Completion of upper-secondary/secondary school (e.g., High School Diploma, GED-type secondary equivalency, Upper-Secondary/School Leaving Certificate) mapped to <a href={EQF} target="_blank" className="text-accent font-bold hover:underline">EQF Level 4 Description of the eight EQF levels | Europass</a> / <a href={ISCED} target="_blank" className="text-accent font-bold hover:underline">International Standard Classification of Education (ISCED) - Statistics Explained - Eurostat</a> ISCED 3–4 (or the national framework level for upper-secondary completion).</p>,
    <p key="1" className="text-slate-600 text-sm leading-relaxed">Completion of a recognised associate-level qualification, higher certificate, or advanced technical/vocational program mapped to <a href={EQF} target="_blank" className="text-accent font-bold hover:underline">EQF Level 5</a> / <a href={ISCED} target="_blank" className="text-accent font-bold hover:underline">ISCED 5</a> (or national framework level designated as post-secondary, short-cycle tertiary).</p>,
    <p key="2" className="text-slate-600 text-sm leading-relaxed">Bachelor’s degree (or higher) from a recognised / authorised institution; or an advanced professional/vocational qualification formally mapped to <a href={EQF} target="_blank" className="text-accent font-bold hover:underline">EQF Level 6</a> / <a href={ISCED} target="_blank" className="text-accent font-bold hover:underline">ISCED 6</a> (or the national framework level designated as bachelor-equivalent).</p>,
    <p key="3" className="text-slate-600 text-sm leading-relaxed">Bachelor’s or postgraduate degree awarded by a program accredited by <a href="https://www.pmi.org/global-accreditation-center" target="_blank" className="text-accent font-bold hover:underline">PMI’s Global Accreditation Center (GAC)</a>. (GAC accreditation is a program quality designation and does not, by itself, change the degree level required for eligibility).</p>,
];
const MandatoryFallback = () => (
    <>
        <p className="text-slate-500 text-xs leading-relaxed">Must also complete 35 hours of formal training aligned with the <a href={ECO_LINK} target="_blank" className="text-accent font-bold hover:underline">PMP Certification Exam Content Outline (ECO)</a>.</p>
        <p className="text-[10px] text-primary font-bold mt-2 flex items-center gap-1"><Check size={10} strokeWidth={4} /> The Agile Nest provides 35 contact hours &amp; completion certificate.</p>
    </>
);

export default async function PmpPage() {
    const c = await getGlobal('pmpPage');
    const training = await getGlobal('trainingPage');
    const f = <T,>(key: string, fallback: T): T => (orUndef(c[key]) as T) ?? fallback;
    const imageUrl = (key: string, fallback?: string): string | undefined =>
        payloadUploadUrlWithFallback(c[key], fallback);
    // Generic array fallback: prefer CMS array if non-empty.
    const arr = <T,>(key: string, fallback: T[]): T[] => {
        const v = c[key] as T[] | undefined;
        return v && v.length > 0 ? v : fallback;
    };
    const listArr = (key: string, fallback: string[]): string[] => {
        const v = c[key] as { text: string }[] | undefined;
        return v && v.length > 0 ? v.map((x) => x.text) : fallback;
    };

    const descParagraphs = listArr('descParagraphs', PMP_CONTENT.descParagraphs);
    const gameChangerItems = arr('gameChangerItems', PMP_CONTENT.gameChangerItems) as { title: string; desc: string }[];
    const whoAudience = listArr('whoAudience', PMP_CONTENT.whoAudience);
    const pathways = arr('pathways', PMP_CONTENT.pathwayLabels.map((label, i) => ({ label, experience: PMP_CONTENT.pathwayExperience[i] }))) as { label: string; experience?: string; eduBackground?: unknown; mandatoryNote?: unknown }[];
    const domainFeatures = arr('domainFeatures', PMP_CONTENT.domainFeatures) as { title: string; desc: string }[];
    const domainIcons = [Users, Target, Briefcase, Layout];
    const whatWeOffer = listArr('whatWeOffer', PMP_CONTENT.whatWeOffer);
    const examFormat = arr('examFormat', PMP_CONTENT.examFormat) as { title: string; subtitle: string; desc: string }[];
    const examFormatIcons = [Target, Clock, AlertCircle, TrendingUp];
    const questionTypes = arr('questionTypes', PMP_CONTENT.questionTypes) as { title: string; desc: string }[];
    const qIcons = [Check, List, Layout, Target, BookOpen];
    const whyTrainFeatures = arr('whyTrainFeatures', PMP_CONTENT.whyTrainFeatures) as { title: string; desc: string }[];
    const rightItems = arr('rightItems', PMP_CONTENT.rightItems) as { title: string; desc: string }[];
    const trainingOptions = arr('trainingOptions', PMP_CONTENT.trainingOptions) as { title: string; desc: string }[];
    const optionIcons = [Building2, Users, Globe];
    const prepMaterials = listArr('prepMaterials', PMP_CONTENT.prepMaterials);
    const discounts = listArr('discounts', PMP_CONTENT.discounts);
    const faqItems = arr('faqItems', PMP_CONTENT.faqItems) as { question: string; answer: string }[];

    return (
        <>
            <Header variant="transparent" />
            <JsonLdCourse
                name="PMP® Certification Training"
                description="Comprehensive PMP® certification training with 35 contact hours, expert-led live virtual classes, mock exams, and first-attempt support. PMI Authorised Training Partner."
                url="https://theagilenest.com/pmp"
                courseCode="PMP"
                duration="P2M"
                offers={[
                    { price: "405", priceCurrency: "USD", description: "PMI Member exam fee" },
                    { price: "655", priceCurrency: "USD", description: "Non-Member exam fee" }
                ]}
            />
            <main className="min-h-screen bg-white relative overflow-hidden">
                <CertificationHero
                    title={f('heroTitle', PMP_CONTENT.heroTitle)}
                    subtitle={f('heroSubtitle', PMP_CONTENT.heroSubtitle)}
                    description={f('heroDescription', PMP_CONTENT.heroDescription)}
                    prev={{ name: "CAPM", href: "/capm" }}
                    next={{ name: "PMI-CP", href: "/pmicp" }}
                    gradientClass="from-primary to-primary-700"
                    buttonColorText="text-primary"
                    badgeImage={imageUrl('heroBadgeImage', '/certifications/pmp.webp')}
                    downloadLink={ECO_LINK}
                />

                <div className="container-custom mt-12 md:mt-20 space-y-20 md:space-y-32">

                    {/* Description Section */}
                    <section id="details" className="grid lg:grid-cols-5 gap-16 lg:gap-24 items-start">
                        <div className="lg:col-span-3">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-primary font-bold text-2xl md:text-3xl mb-6">
                                <ShieldCheck size={16} /> {f('descEyebrow', PMP_CONTENT.descEyebrow)}
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-primary mb-4 leading-tight">
                                {f('descHeading', PMP_CONTENT.descHeading)}
                            </h2>
                            <p className="text-xl md:text-2xl font-bold text-accent mb-8 leading-snug">
                                {f('descSubtitle', PMP_CONTENT.descSubtitle)}
                            </p>
                            <div className="text-slate-600 text-lg leading-relaxed mb-10 space-y-6">
                                {descParagraphs.map((p, i) => (<p key={i}>{p}</p>))}
                                <p className="font-bold text-primary text-xl border-l-4 border-accent pl-6 py-2 bg-slate-50 rounded-r-2xl">
                                    {f('descCallout', PMP_CONTENT.descCallout)}
                                </p>
                            </div>

                            <div className="bg-white rounded-3xl border border-slate-100 p-6 md:p-10 shadow-sm">
                                <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
                                    <TrendingUp className="text-accent" /> {f('gameChangerHeading', PMP_CONTENT.gameChangerHeading)}
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
                                    {gameChangerItems.map((item, i) => (
                                        <div key={i} className="flex gap-4 items-start group">
                                            <div className="bg-accent/10 text-primary p-2 rounded-xl shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                                                <Check size={16} strokeWidth={3} />
                                            </div>
                                            <div>
                                                <span className="text-primary font-bold block mb-1">{item.title}</span>
                                                <span className="text-slate-500 text-sm leading-tight">{item.desc}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-2 sticky top-32">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/5 rounded-[40px] transform rotate-2 scale-105 -z-10"></div>
                                <div className="bg-white p-8 md:p-12 rounded-[32px] md:rounded-[40px] shadow-2xl border border-slate-100 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16"></div>

                                    <h3 className="text-2xl font-black text-primary border-b border-slate-100 pb-6 mb-8">{f('whoHeading', PMP_CONTENT.whoHeading)}</h3>
                                    <p className="text-slate-600 mb-8 text-base font-medium leading-relaxed">{f('whoIntro', PMP_CONTENT.whoIntro)}</p>
                                    <ul className="space-y-4">
                                        {whoAudience.map((audience, i) => (
                                            <li key={i} className="flex items-center gap-4 text-slate-700 font-semibold group">
                                                <div className="w-2.5 h-2.5 rounded-full bg-accent group-hover:scale-150 transition-transform shrink-0"></div>
                                                {audience}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-12 pt-8 border-t border-slate-100">
                                        <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                                <ShieldCheck size={24} />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-primary">{f('atpTitle', PMP_CONTENT.atpTitle)}</div>
                                                <div className="text-xs text-slate-500 font-medium">{f('atpSubtitle', PMP_CONTENT.atpSubtitle)}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Eligibility */}
                    <section className="bg-white rounded-[32px] md:rounded-[40px] border border-slate-100 shadow-sm p-6 sm:p-10 md:p-16">
                        <div className="mb-12">
                            <h2 className="text-3xl md:text-5xl font-black text-primary mb-4">{f('eligibilityHeading', PMP_CONTENT.eligibilityHeading)}</h2>
                            <p className="text-slate-500 text-lg font-medium max-w-3xl mt-4">
                                {f('eligibilityIntro', PMP_CONTENT.eligibilityIntro)}
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8">
                            {pathways.map((pw, i) => {
                                const meta = PATHWAY_META[i] ?? PATHWAY_META[0];
                                return (
                                    <div key={i} className={`rounded-3xl border border-slate-100 bg-slate-50/50 p-8 flex flex-col gap-6 hover:shadow-xl transition-all border-l-4 ${meta.border} group`}>
                                        <div className="flex justify-between items-start">
                                            <div className={`w-10 h-10 rounded-xl ${meta.badge} flex items-center justify-center font-bold`}>{i + 1}</div>
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">{pw.label}</span>
                                        </div>
                                        <div className="space-y-6">
                                            <div className="flex gap-4">
                                                <div className="mt-1 bg-white text-accent p-2 rounded-xl shadow-sm shrink-0 h-fit"><BookOpen size={18} /></div>
                                                <div>
                                                    <h4 className="font-bold text-primary mb-1">Educational Background</h4>
                                                    {hasRich(pw.eduBackground) ? <RichText data={pw.eduBackground as never} /> : EDU_FALLBACKS[i]}
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="mt-1 bg-white text-primary p-2 rounded-xl shadow-sm shrink-0 h-fit"><Briefcase size={18} /></div>
                                                <div>
                                                    <h4 className="font-bold text-primary mb-1">Professional Experience</h4>
                                                    <p className="text-slate-600 text-sm leading-relaxed">
                                                        Minimum <strong>{pw.experience ?? PMP_CONTENT.pathwayExperience[i]}</strong> of non-overlapping experience leading projects within the past 10 years.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4 pt-4 border-t border-slate-200/60">
                                                <div className="mt-1 bg-primary/10 text-primary p-2 rounded-xl shrink-0 h-fit"><GraduationCap size={18} /></div>
                                                <div>
                                                    <h4 className="font-bold text-primary mb-1 text-sm uppercase tracking-wider">Mandatory Training</h4>
                                                    {hasRich(pw.mandatoryNote) ? <RichText data={pw.mandatoryNote as never} /> : <MandatoryFallback />}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* Curriculum / Syllabus */}
                    <section className="grid lg:grid-cols-5 gap-12">
                        <div className="lg:col-span-3">
                            <h2 className="text-3xl font-black text-primary mb-2">{f('curriculumHeading', PMP_CONTENT.curriculumHeading)}</h2>
                            <p className="text-slate-500 font-medium mb-10 italic">{f('curriculumSubtitle', PMP_CONTENT.curriculumSubtitle)}</p>

                            <div className="bg-slate-50 rounded-[32px] md:rounded-[40px] p-6 sm:p-8 mb-10 border border-slate-100 flex flex-col md:flex-row items-center gap-8">
                                <div className="relative w-48 h-48 shrink-0">
                                    <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                                        <circle cx="50" cy="50" r="40" fill="transparent" stroke="#EAB308" strokeWidth="12" strokeDasharray="251.3" strokeDashoffset="148.3" strokeLinecap="round" />
                                        <circle cx="50" cy="50" r="40" fill="transparent" stroke="#0F172A" strokeWidth="12" strokeDasharray="251.3" strokeDashoffset="168.4" style={{ transform: 'rotate(147.6deg)', transformOrigin: '50% 50%' }} strokeLinecap="round" />
                                        <circle cx="50" cy="50" r="40" fill="transparent" stroke="#94A3B8" strokeWidth="12" strokeDasharray="251.3" strokeDashoffset="186.0" style={{ transform: 'rotate(266.4deg)', transformOrigin: '50% 50%' }} strokeLinecap="round" />
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                        <span className="text-2xl font-black text-primary">100%</span>
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Exam Weight</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-4 w-full">
                                    <div className="flex items-center justify-between p-3 bg-white rounded-2xl border border-slate-100">
                                        <div className="flex items-center gap-3"><div className="w-3 h-3 rounded-full bg-[#0F172A]"></div><span className="font-bold text-slate-700">People</span></div>
                                        <span className="font-black text-primary">33%</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-white rounded-2xl border border-slate-100">
                                        <div className="flex items-center gap-3"><div className="w-3 h-3 rounded-full bg-[#EAB308]"></div><span className="font-bold text-slate-700">Process</span></div>
                                        <span className="font-black text-primary">41%</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-white rounded-2xl border border-slate-100">
                                        <div className="flex items-center gap-3"><div className="w-3 h-3 rounded-full bg-[#94A3B8]"></div><span className="font-bold text-slate-700">Business Env.</span></div>
                                        <span className="font-black text-primary">26%</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <ul className="grid md:grid-cols-2 gap-6">
                                    {domainFeatures.map((feature, i) => {
                                        const Icon = domainIcons[i] ?? Users;
                                        return (
                                            <li key={feature.title} className="flex flex-col gap-4 group bg-slate-50/50 p-6 rounded-[32px] border border-transparent hover:border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300">
                                                <div className="bg-white border border-slate-100 shadow-sm p-3 rounded-2xl text-primary shrink-0 h-14 w-14 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                                                    <Icon size={28} strokeWidth={1.5} />
                                                </div>
                                                <div>
                                                    <h4 className="font-black text-primary text-xl mb-2">{feature.title}</h4>
                                                    <p className="text-slate-500 text-sm leading-relaxed font-medium">{feature.desc}</p>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>

                        <div className="lg:col-span-2 space-y-8">
                            <div className="bg-primary rounded-[32px] md:rounded-[40px] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl -ml-10 -mb-10"></div>
                                <h3 className="text-3xl font-black mb-8 relative z-10 flex items-center gap-3">
                                    {f('whatWeOfferHeading', PMP_CONTENT.whatWeOfferHeading)}
                                    <div className="h-1 w-12 bg-accent rounded-full"></div>
                                </h3>
                                <ul className="space-y-6 relative z-10">
                                    {whatWeOffer.map((item, i) => (
                                        <li key={i} className="flex items-start gap-4 group">
                                            <div className="mt-1 bg-accent text-primary p-1 rounded-full shrink-0 group-hover:scale-125 transition-transform"><Check size={14} strokeWidth={4} /></div>
                                            <span className="font-bold text-slate-100 leading-tight">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <ScrollButton targetId="register" className="w-full mt-12 bg-accent hover:bg-white hover:text-primary text-white font-black py-5 rounded-2xl transition-all hover:shadow-xl hover:-translate-y-1 relative z-10 flex items-center justify-center gap-2 group/btn">
                                    {f('syllabusButton', PMP_CONTENT.syllabusButton)}
                                    <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                                </ScrollButton>
                            </div>
                        </div>
                    </section>

                    {/* Exam Format Banner */}
                    <div className="bg-white border border-slate-200 rounded-[32px] md:rounded-[40px] p-6 md:p-12 relative overflow-hidden group shadow-sm">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-accent/5 transition-colors"></div>
                        <div className="max-w-5xl mx-auto">
                            <h3 className="text-2xl font-black text-primary mb-10 text-center relative z-10 flex items-center justify-center gap-4">
                                <div className="h-px w-12 bg-slate-200"></div>
                                {f('examFormatHeading', PMP_CONTENT.examFormatHeading)}
                                <div className="h-px w-12 bg-slate-200"></div>
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                                {examFormat.map((item, i) => {
                                    const Icon = examFormatIcons[i] ?? Target;
                                    return (
                                        <div key={i} className="flex flex-col items-center text-center p-8 rounded-[32px] bg-slate-50/50 border border-slate-100 hover:border-accent/20 hover:bg-white hover:shadow-xl transition-all duration-300 group/item">
                                            <div className="w-16 h-16 rounded-[24px] bg-white shadow-md flex items-center justify-center text-accent mb-6 border border-slate-100 group-hover/item:scale-110 transition-transform">
                                                <Icon size={32} />
                                            </div>
                                            <p className="font-black text-primary text-4xl leading-none mb-2">{item.title}</p>
                                            <p className="text-slate-900 font-black text-sm uppercase tracking-widest mb-4">{item.subtitle}</p>
                                            <div className="h-1 w-8 bg-accent/30 rounded-full mb-4"></div>
                                            <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-[200px]">{item.desc}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Question Types */}
                    <div className="pt-10">
                        <div className="text-center mb-10">
                            <h3 className="text-2xl font-black text-primary mb-3">{f('questionTypesHeading', PMP_CONTENT.questionTypesHeading)}</h3>
                            <p className="text-slate-500 font-medium italic">{f('questionTypesSubtitle', PMP_CONTENT.questionTypesSubtitle)}</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                            {questionTypes.map((type, i) => {
                                const Icon = qIcons[i] ?? Check;
                                return (
                                    <div key={i} className="bg-white border border-slate-100 p-6 rounded-[32px] shadow-sm hover:shadow-md transition-all group border-b-4 border-b-transparent hover:border-b-accent">
                                        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                                            <Icon size={20} />
                                        </div>
                                        <h4 className="font-black text-primary text-sm mb-2">{type.title}</h4>
                                        <p className="text-slate-500 text-xs font-medium leading-relaxed">{type.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Why Train with TheAgileNest */}
                    <section className="bg-white rounded-[32px] md:rounded-[50px] p-6 sm:p-10 md:p-20 border border-slate-100 shadow-xl text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-primary"></div>
                        <div className="max-w-4xl mx-auto mb-20">
                            <span className="text-accent font-black tracking-[0.3em] uppercase text-2xl md:text-3xl mb-6 block">{f('whyTrainEyebrow', PMP_CONTENT.whyTrainEyebrow)}</span>
                            <h2 className="text-4xl md:text-5xl font-black text-primary mb-8">{f('whyTrainHeading', PMP_CONTENT.whyTrainHeading)}</h2>
                            <h3 className="text-xl font-bold text-slate-400 mb-10 uppercase tracking-widest">{f('whyTrainSubheading', PMP_CONTENT.whyTrainSubheading)}</h3>
                            <div className="space-y-6">
                                <p className="text-slate-600 text-xl leading-relaxed font-bold italic">{f('whyTrainPara1', PMP_CONTENT.whyTrainPara1)}</p>
                                <p className="text-slate-500 text-lg leading-relaxed">{f('whyTrainPara2', PMP_CONTENT.whyTrainPara2)}</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 text-left max-w-6xl mx-auto">
                            {whyTrainFeatures.map((feature, i) => (
                                <div key={i} className="bg-slate-50/50 p-6 md:p-8 rounded-[24px] md:rounded-[32px] border border-slate-100 flex gap-4 md:gap-6 hover:shadow-2xl hover:bg-white transition-all duration-300 group">
                                    <div className="mt-1 bg-white shadow-md text-accent p-2 rounded-2xl shrink-0 h-12 w-12 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                                        <Check size={24} strokeWidth={4} />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-primary text-lg mb-2 group-hover:text-accent transition-colors leading-tight">{feature.title}</h4>
                                        <p className="text-slate-500 font-medium text-sm leading-relaxed">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-20 pt-10 border-t border-slate-100 max-w-2xl mx-auto">
                            <h4 className="text-2xl font-black text-primary mb-4">{f('whyTrainCtaHeading', PMP_CONTENT.whyTrainCtaHeading)}</h4>
                            <p className="text-slate-500 font-medium mb-10">{f('whyTrainCtaPara', PMP_CONTENT.whyTrainCtaPara)}</p>
                            <ScrollButton targetId="register" className="px-10 py-5 bg-accent text-white font-black rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center gap-2 mx-auto group">
                                {f('whyTrainCtaButton', PMP_CONTENT.whyTrainCtaButton)}
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </ScrollButton>
                        </div>
                    </section>

                    {/* Why PMP is Right for You */}
                    <section className="bg-primary rounded-[32px] md:rounded-[60px] p-8 md:p-24 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 -skew-x-12 translate-x-1/2"></div>
                        <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                            <div className="space-y-10">
                                <h2 className="text-3xl md:text-6xl font-black leading-tight">
                                    {f('rightHeadingLead', PMP_CONTENT.rightHeadingLead)}<span className="text-accent">{f('rightHeadingAccent', PMP_CONTENT.rightHeadingAccent)}</span>
                                </h2>
                                <p className="text-slate-300 text-xl font-medium leading-relaxed opacity-90">{f('rightParagraph', PMP_CONTENT.rightParagraph)}</p>
                                <div className="grid gap-8">
                                    {rightItems.map((item, i) => (
                                        <div key={i} className="flex gap-6 group">
                                            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                                                <Target size={28} />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-black mb-2 text-white">{item.title}</h4>
                                                <p className="text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-white p-8 md:p-12 rounded-[32px] md:rounded-[50px] shadow-2xl space-y-8 md:space-y-12">
                                <div className="space-y-6">
                                    <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center text-accent"><TrendingUp size={40} /></div>
                                    <h3 className="text-3xl font-black text-primary">{f('rightCardHeading', PMP_CONTENT.rightCardHeading)}</h3>
                                    <p className="text-slate-600 text-lg font-medium leading-relaxed">{f('rightCardPara', PMP_CONTENT.rightCardPara)}</p>
                                </div>
                                <div className="pt-10 border-t border-slate-100 grid grid-cols-2 gap-8">
                                    <div>
                                        <div className="text-5xl font-black text-accent mb-2">{f('rightStat1Value', PMP_CONTENT.rightStat1Value)}</div>
                                        <div className="text-xs font-bold uppercase tracking-widest text-slate-400">{f('rightStat1Label', PMP_CONTENT.rightStat1Label)}</div>
                                    </div>
                                    <div>
                                        <div className="text-5xl font-black text-primary mb-2">{f('rightStat2Value', PMP_CONTENT.rightStat2Value)}</div>
                                        <div className="text-xs font-bold uppercase tracking-widest text-slate-400">{f('rightStat2Label', PMP_CONTENT.rightStat2Label)}</div>
                                    </div>
                                </div>
                                <Link href="#register" className="btn-primary w-full py-6 rounded-2xl text-center flex items-center justify-center gap-3 font-black text-lg group">
                                    {f('rightCardButton', PMP_CONTENT.rightCardButton)}
                                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* Training & Investment */}
                    <section className="space-y-20">
                        <div className="text-center max-w-3xl mx-auto space-y-4">
                            <span className="label-tag mx-auto">{f('investEyebrow', PMP_CONTENT.investEyebrow)}</span>
                            <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tight">{f('investHeading', PMP_CONTENT.investHeading)}</h2>
                            <p className="text-slate-500 font-medium">{f('investSubtitle', PMP_CONTENT.investSubtitle)}</p>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {trainingOptions.map((option, i) => {
                                const Icon = optionIcons[i] ?? Building2;
                                return (
                                    <div key={i} className="bg-white border border-slate-100 p-8 md:p-10 rounded-[32px] md:rounded-[40px] shadow-sm hover:shadow-xl transition-all group relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-full -mr-12 -mt-12 group-hover:bg-accent/10 transition-colors"></div>
                                        <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                                            <Icon size={32} />
                                        </div>
                                        <h4 className="text-2xl font-black text-primary mb-4">{option.title}</h4>
                                        <p className="text-slate-500 font-medium leading-relaxed">{option.desc}</p>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12">
                            <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[32px] md:rounded-[50px] shadow-2xl relative overflow-hidden">
                                <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-32 -mb-32"></div>
                                <h3 className="text-3xl font-black mb-8 flex items-center gap-3">
                                    {f('prepHeading', PMP_CONTENT.prepHeading)}
                                    <div className="h-1 w-12 bg-accent rounded-full"></div>
                                </h3>
                                <ul className="grid sm:grid-cols-2 gap-6 relative z-10">
                                    {prepMaterials.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 group">
                                            <div className="bg-accent/20 text-accent p-1.5 rounded-lg group-hover:bg-accent group-hover:text-primary transition-all"><Check size={16} strokeWidth={3} /></div>
                                            <span className="font-bold text-slate-300 group-hover:text-white transition-colors">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 p-8 md:p-12 rounded-[32px] md:rounded-[50px] space-y-10">
                                <div>
                                    <h3 className="text-2xl font-black text-primary mb-6 flex items-center gap-3">
                                        {f('examFeeHeading', PMP_CONTENT.examFeeHeading)}
                                        <div className="h-px flex-1 bg-slate-200"></div>
                                    </h3>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">PMI Member</p>
                                            <p className="text-3xl font-black text-primary">{f('memberFee', PMP_CONTENT.memberFee)}</p>
                                        </div>
                                        <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Non-Member</p>
                                            <p className="text-3xl font-black text-primary">{f('nonMemberFee', PMP_CONTENT.nonMemberFee)}</p>
                                        </div>
                                    </div>
                                    <p className="mt-4 text-xs font-medium text-slate-500 italic">{f('feeNote', PMP_CONTENT.feeNote)}</p>
                                </div>

                                <div className="pt-8 border-t border-slate-200">
                                    <h3 className="text-2xl font-black text-primary mb-6">{f('courseFeesHeading', PMP_CONTENT.courseFeesHeading)}</h3>
                                    <div className="space-y-4 mb-8">
                                        <p className="text-slate-600 font-medium">{f('courseFeesIntro', PMP_CONTENT.courseFeesIntro)}</p>
                                        <div className="flex flex-wrap gap-4">
                                            <a href={`mailto:${f('contactEmail', PMP_CONTENT.contactEmail)}`} className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-slate-200 text-primary font-bold hover:border-accent transition-colors">
                                                <Mail size={18} className="text-accent" /> {f('contactEmail', PMP_CONTENT.contactEmail)}
                                            </a>
                                            <a href="https://wa.me/64273537774" className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-slate-200 text-primary font-bold hover:border-accent transition-colors">
                                                <Phone size={18} className="text-accent" /> {f('contactPhone', PMP_CONTENT.contactPhone)}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                                        {discounts.map((d, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm font-bold text-slate-500">
                                                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div> {d}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-accent/5 border border-accent/20 p-6 md:p-8 rounded-[24px] md:rounded-[32px] text-center max-w-4xl mx-auto">
                            <p className="text-primary font-bold text-lg leading-relaxed flex flex-col md:flex-row items-center justify-center gap-2">
                                <AlertCircle className="text-accent" size={24} />
                                <span className="text-accent">Important Note:</span>
                                {f('importantNote', PMP_CONTENT.importantNote)}
                            </p>
                        </div>
                    </section>

                    {/* Registration */}
                    <section id="register" className="grid lg:grid-cols-5 gap-20 items-start py-10">
                        <div className="lg:col-span-3">
                            <BookingForm
                                courseName="PMP® Certification"
                                formTitle={f('bookingFormTitle', 'Register Now')}
                                formSubtitle={orUndef(c.bookingFormSubtitle)}
                                submitButtonText={f('bookingSubmitButton', 'Confirm Registration')}
                                successTitle={f('bookingSuccessTitle', 'Booking Received!')}
                                successMessage={orUndef(c.bookingSuccessMessage)}
                                footerNote={f('bookingFooterNote', 'No upfront payment required to register')}
                            />
                        </div>
                        <div className="lg:col-span-2 space-y-10">
                            <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[32px] md:rounded-[50px] shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-accent/20 rounded-bl-full blur-[80px] group-hover:scale-150 transition-transform duration-1000"></div>
                                <h4 className="text-accent font-black uppercase tracking-[0.2em] text-sm mb-6 relative z-10">{f('corporateEyebrow', PMP_CONTENT.corporateEyebrow)}</h4>
                                <h3 className="text-3xl font-black mb-8 relative z-10 leading-tight">{f('corporateHeading', PMP_CONTENT.corporateHeading)}</h3>
                                <p className="text-slate-400 mb-10 relative z-10 text-lg font-medium leading-relaxed">{f('corporatePara', PMP_CONTENT.corporatePara)}</p>
                                <ContactLink className="inline-flex items-center justify-center py-6 px-16 bg-white text-primary font-black text-xl rounded-2xl hover:scale-105 transition-all shadow-2xl">
                                    {f('corporateButton', PMP_CONTENT.corporateButton)}
                                </ContactLink>
                            </div>

                            <div className="p-8 md:p-12 bg-slate-50 border border-slate-100 rounded-[32px] md:rounded-[50px] text-center space-y-6">
                                <p className="text-slate-600 text-xl font-medium italic leading-relaxed">
                                    "{f('testimonialQuote', PMP_CONTENT.testimonialQuote)}"
                                </p>
                                <div className="pt-6 flex flex-col items-center">
                                    <div className="flex gap-1 text-accent mb-3">
                                        {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                                    </div>
                                    <div className="font-black text-primary text-lg">{f('testimonialAuthor', PMP_CONTENT.testimonialAuthor)}</div>
                                    <div className="text-slate-400 font-bold uppercase tracking-widest text-sm">{f('testimonialRole', PMP_CONTENT.testimonialRole)}</div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <TrainingSchedule
                eyebrow={orUndef(training?.scheduleEyebrow)}
                heading={orUndef(training?.scheduleHeading)}
                paragraph={orUndef(training?.scheduleParagraph)}
                items={training?.scheduleItems as { month: string; course: string; dates: string; time: string; format: string; status: string }[] | undefined}
            />
            <JsonLdFaq items={faqItems} />
            <FAQ
                title={f('faqTitle', PMP_CONTENT.faqTitle)}
                subtitle={f('faqSubtitle', PMP_CONTENT.faqSubtitle)}
                description={f('faqDescription', PMP_CONTENT.faqDescription)}
                items={faqItems}
            />
            <Footer />
        </>
    );
}
