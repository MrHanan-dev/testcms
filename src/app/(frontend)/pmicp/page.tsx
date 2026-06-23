import Header from '@/components/Header';
import FAQ from '@/components/FAQ';
import TrainingSchedule from '@/components/TrainingSchedule';
import Footer from '@/components/Footer';
import CertificationHero from '@/components/CertificationHero';
import { Check, HardHat, BookOpen, Users, Target, Clock, Layout, Award, Briefcase, Globe, Mail, Phone, Building2, AlertCircle } from 'lucide-react';
import BookingForm from '@/components/BookingForm';
import CourseSuccessQuotes from '@/components/CourseSuccessQuotes';
import ScrollButton from '@/components/ScrollButton';
import ContactLink from '@/components/ContactLink';
import type { Metadata } from 'next';
import JsonLdCourse from '@/components/JsonLdCourse';
import JsonLdFaq from '@/components/JsonLdFaq';
import { RichText } from '@payloadcms/richtext-lexical/react';
import { getGlobal } from '@/lib/payload';
import { PMICP_CONTENT as K } from '@/data/pmicpContent';
import { generateSeoMetadata } from '@/lib/generateSeoMetadata';

export async function generateMetadata(): Promise<Metadata> {
    const c = await getGlobal('pmicpPage');
    return generateSeoMetadata({
        data: c,
        fallbackTitle: "PMI-CP Certification NZ | Construction Management Credential",
        fallbackDescription: "Earn the PMI Construction Professional (PMI-CP)® certification in NZ. 35 contact hours, construction-specific training, exam support. Enroll now!",
        path: "/pmicp",
        keywords: ["PMI-CP certification NZ", "construction management", "PMI construction professional", "construction PM training"],
    });
}

const orUndef = (v: unknown): string | undefined => (typeof v === 'string' && v.length > 0 ? v : undefined);
const hasRich = (v: unknown): v is object => Boolean(v && typeof v === 'object' && 'root' in (v as Record<string, unknown>));

// Eligibility track styling is fixed by position; only text is editable.
const TRACK_STYLE = [
    { wrap: "rounded-2xl border-2 border-accent/30 bg-accent/5 p-8 flex flex-col gap-5", badge: "bg-accent/20", check: "bg-accent/30" },
    { wrap: "rounded-2xl border-2 border-primary/20 bg-primary/5 p-8 flex flex-col gap-5", badge: "bg-primary/10", check: "bg-primary/20" },
];
// Curriculum card styling fixed by position; only text/percent is editable.
const CURRICULUM_STYLE = [
    { wrap: "bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow", icon: Award, iconClass: "text-accent", title: "text-primary", badge: "bg-accent/20 text-primary", body: "text-slate-600" },
    { wrap: "bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow", icon: Target, iconClass: "text-primary", title: "text-primary", badge: "bg-slate-100 text-primary", body: "text-slate-600" },
    { wrap: "bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow", icon: Users, iconClass: "text-accent", title: "text-primary", badge: "bg-accent/10 text-primary", body: "text-slate-600" },
    { wrap: "bg-slate-800 text-white p-6 rounded-2xl", icon: Briefcase, iconClass: "text-accent", title: "text-white", badge: "bg-slate-700 text-slate-300", body: "text-slate-300 text-sm" },
];
const examFormatIcons = [Target, Clock, Layout];
const optionIcons = [Building2, Users, Globe];

export default async function PmiCpPage() {
    const c = await getGlobal('pmicpPage');
    const training = await getGlobal('trainingPage');
    const f = <T,>(key: string, fallback: T): T => (orUndef(c[key]) as T) ?? fallback;
    const imageUrl = (key: string): string | undefined => {
        const v = c[key];
        return v && typeof v === 'object' && 'url' in v ? (v as { url: string }).url : undefined;
    };
    const arr = <T,>(key: string, fallback: T[]): T[] => {
        const v = c[key] as T[] | undefined;
        return v && v.length > 0 ? v : fallback;
    };
    const listArr = (key: string, fallback: string[]): string[] => {
        const v = c[key] as { text: string }[] | undefined;
        return v && v.length > 0 ? v.map((x) => x.text) : fallback;
    };

    const benefits = arr('benefits', K.benefits) as { title: string; desc: string }[];
    const whoAudience = listArr('whoAudience', K.whoAudience);
    const tracks = arr('tracks', K.tracks) as { title: string; subtitle: string; items: ({ text: string } | string)[] }[];
    const curriculum = arr('curriculum', K.curriculum) as { title: string; percent: string; desc: string }[];
    const included = listArr('included', K.included);
    const examFormat = arr('examFormat', K.examFormat) as { title: string; desc: string }[];
    const whyTrainFeatures = arr('whyTrainFeatures', K.whyTrainFeatures) as { title: string; desc: string }[];
    const trainingOptions = arr('trainingOptions', K.trainingOptions) as { title: string; desc: string }[];
    const prepMaterials = listArr('prepMaterials', K.prepMaterials);
    const discounts = listArr('discounts', K.discounts);
    const faqItems = arr('faqItems', K.faqItems) as { question: string; answer: string }[];
    const calloutRich = c.eligibilityCalloutRich;
    const trackItems = (t: { items: ({ text: string } | string)[] }): string[] =>
        t.items.map((x) => (typeof x === 'string' ? x : x.text));

    return (
        <>
            <Header variant="transparent" />
            <JsonLdCourse
                name="PMI Construction Professional (PMI-CP)® Certification"
                description="Construction-specific PMI-CP® certification training with 35+ contact hours, expert-led sessions, and comprehensive exam support."
                url="https://theagilenest.com/pmicp"
                courseCode="PMI-CP"
                duration="P2M"
                offers={[
                    { price: "405", priceCurrency: "USD", description: "PMI Member exam fee" },
                    { price: "655", priceCurrency: "USD", description: "Non-Member exam fee" }
                ]}
            />
            <main className="min-h-screen bg-slate-50 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-100/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                <CertificationHero
                    title={f('heroTitle', K.heroTitle)}
                    subtitle={f('heroSubtitle', K.heroSubtitle)}
                    description={f('heroDescription', K.heroDescription)}
                    prev={{ name: "PMP", href: "/pmp" }}
                    next={{ name: "CAPM", href: "/capm" }}
                    gradientClass="from-primary to-primary-700"
                    buttonColorText="text-primary"
                    badgeImage={imageUrl('heroBadgeImage') ?? "/certifications/pmi-cp.webp"}
                    downloadLink="/PMICP Exam-Content-Outline.pdf"
                />

                <div className="container-custom mt-20 space-y-24">

                    {/* Description Section - matches PMP/CAPM layout */}
                    <section id="details" className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-primary font-bold text-2xl md:text-3xl mb-6">
                                <HardHat size={16} /> {f('detailsBadge', K.detailsBadge)}
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
                                {f('detailsHeading', K.detailsHeading)}
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                {f('detailsParagraph', K.detailsParagraph)}
                            </p>
                            <div className="space-y-4">
                                {benefits.map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1 bg-accent/20 text-primary p-1 rounded-full shrink-0">
                                            <Check size={16} strokeWidth={3} />
                                        </div>
                                        <div>
                                            <strong className="text-primary block mb-1">{item.title}</strong>
                                            <span className="text-slate-600 text-sm leading-relaxed">{item.desc}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/5 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
                            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100">
                                <h3 className="text-2xl font-bold text-primary border-b border-slate-100 pb-4 mb-6">{f('whoHeading', K.whoHeading)}</h3>
                                <p className="text-slate-600 mb-6 text-sm">{f('whoIntro', K.whoIntro)}</p>
                                <ul className="space-y-3">
                                    {whoAudience.map((audience, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                            <div className="w-2 h-2 rounded-full bg-accent shrink-0"></div>
                                            {audience}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* ── PMI-CP Eligibility Requirements ── */}
                    <section className="bg-white rounded-3xl border border-slate-100 shadow-sm p-10 md:p-14">
                        <div className="mb-10">
                            <h2 className="text-3xl md:text-5xl font-black text-primary mb-4">{f('eligibilityHeading', K.eligibilityHeading)}</h2>
                            <p className="text-slate-500 text-lg font-medium max-w-2xl">
                                {f('eligibilityIntro', K.eligibilityIntro)}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-10">
                            {tracks.map((track, i) => {
                                const s = TRACK_STYLE[i] ?? TRACK_STYLE[0];
                                return (
                                    <div key={i} className={s.wrap}>
                                        <div className={`w-12 h-12 rounded-xl ${s.badge} flex items-center justify-center text-primary font-black text-lg`}>{i + 1}</div>
                                        <div>
                                            <h3 className="text-xl font-black text-primary mb-1">{track.title}</h3>
                                            <p className="text-slate-500 text-sm font-medium">{track.subtitle}</p>
                                        </div>
                                        <ul className="space-y-3">
                                            {trackItems(track).map((req, j) => (
                                                <li key={j} className="flex items-start gap-3 text-slate-700 font-medium text-sm">
                                                    <div className={`mt-1 ${s.check} text-primary p-0.5 rounded-full shrink-0`}><Check size={14} strokeWidth={3} /></div>
                                                    {req}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex items-start gap-4">
                            <Globe size={22} className="text-accent shrink-0 mt-0.5" />
                            {hasRich(calloutRich) ? (
                                <div className="text-slate-600 font-medium text-sm leading-relaxed"><RichText data={calloutRich as never} /></div>
                            ) : (
                                <p className="text-slate-600 font-medium text-sm leading-relaxed">
                                    <strong className="text-primary">{f('eligibilityCalloutLead', K.eligibilityCalloutLead)}</strong> Our PMI-CP training course fulfils the <strong className="text-primary">35 contact hours</strong> requirement for both tracks. Construction experience must be documented in your PMI application.
                                </p>
                            )}
                        </div>
                    </section>

                    {/* Curriculum / Syllabus & Features - matches PMP/CAPM 3+2 grid */}
                    <section className="grid lg:grid-cols-5 gap-12">
                        <div className="lg:col-span-3">
                            <h2 className="text-3xl font-bold text-primary mb-2">{f('curriculumHeading', K.curriculumHeading)}</h2>
                            <p className="text-slate-500 mb-8">{f('curriculumSubtitle', K.curriculumSubtitle)}</p>

                            <div className="space-y-6">
                                {curriculum.map((item, i) => {
                                    const s = CURRICULUM_STYLE[i] ?? CURRICULUM_STYLE[0];
                                    const Icon = s.icon;
                                    return (
                                        <div key={i} className={s.wrap}>
                                            <div className="flex justify-between items-start mb-4">
                                                <h4 className={`text-xl font-bold ${s.title} flex items-center gap-2`}>
                                                    <Icon className={s.iconClass} /> {item.title}
                                                </h4>
                                                <span className={`${s.badge} font-bold px-3 py-1 rounded-full text-sm`}>{item.percent}</span>
                                            </div>
                                            <p className={`${s.body} leading-relaxed`}>
                                                {item.desc}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right side - What you get & Exam Format */}
                        <div className="lg:col-span-2 space-y-8">
                            <div className="bg-primary rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -mr-20 -mt-20"></div>

                                <h3 className="text-2xl font-bold mb-6 relative z-10">{f('includedHeading', K.includedHeading)}</h3>
                                <ul className="space-y-5 relative z-10">
                                    {included.map((item, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <div className="mt-1 bg-accent/20 text-accent p-1 rounded-full shrink-0">
                                                <Check size={14} strokeWidth={3} />
                                            </div>
                                            <span className="font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <ScrollButton
                                    targetId="register"
                                    className="w-full mt-10 bg-accent hover:bg-accent-hover text-white font-bold py-4 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1 relative z-10"
                                >
                                    {f('includedButton', K.includedButton)}
                                </ScrollButton>
                            </div>

                            {/* Exam Format Box */}
                            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-10">
                                <h3 className="text-2xl font-bold text-primary mb-6">{f('examFormatHeading', K.examFormatHeading)}</h3>
                                <ul className="space-y-5">
                                    {examFormat.map((item, i) => {
                                        const Icon = examFormatIcons[i] ?? Target;
                                        return (
                                            <li key={i} className="flex items-start gap-4">
                                                <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-accent shrink-0 border border-slate-100">
                                                    <Icon size={20} />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-primary">{item.title}</p>
                                                    <p className="text-slate-500 text-sm">{item.desc}</p>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Why Train with TheAgileNest Section */}
                    <section className="bg-white rounded-[50px] p-10 md:p-20 border border-slate-100 shadow-xl text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-primary"></div>

                        <div className="max-w-4xl mx-auto mb-20">
                            <span className="text-accent font-black tracking-[0.3em] uppercase text-2xl md:text-3xl mb-6 block">{f('whyTrainEyebrow', K.whyTrainEyebrow)}</span>
                            <h2 className="text-4xl md:text-5xl font-black text-primary mb-8">{f('whyTrainHeading', K.whyTrainHeading)}</h2>
                            <p className="text-slate-600 text-xl leading-relaxed font-bold italic mb-6">
                                {f('whyTrainPara1', K.whyTrainPara1)}
                            </p>
                            <p className="text-slate-500 text-lg leading-relaxed font-medium">
                                {f('whyTrainPara2', K.whyTrainPara2)}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 text-left">
                            {whyTrainFeatures.map((feature, i) => (
                                <div key={i} className="flex gap-5 p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-accent transition-all group">
                                    <div className="w-10 h-10 rounded-full bg-accent/20 text-primary flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                                        <Check size={20} strokeWidth={3} />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-primary text-lg mb-2">{feature.title}</h4>
                                        <p className="text-slate-500 text-sm font-medium leading-relaxed">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Training Options & Investment Section */}
                    <section className="space-y-20 pt-24">
                        <div className="text-center max-w-3xl mx-auto space-y-4">
                            <span className="label-tag mx-auto">{f('investEyebrow', K.investEyebrow)}</span>
                            <h2 className="text-4xl font-black text-primary tracking-tight">{f('investHeading', K.investHeading)}</h2>
                            <p className="text-slate-500 font-medium">{f('investSubtitle', K.investSubtitle)}</p>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {trainingOptions.map((option, i) => {
                                const Icon = optionIcons[i] ?? Building2;
                                return (
                                    <div key={i} className="bg-white border border-slate-100 p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all group relative overflow-hidden">
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
                            {/* Materials & Support */}
                            <div className="bg-slate-900 text-white p-12 rounded-[50px] shadow-2xl relative overflow-hidden">
                                <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-32 -mb-32"></div>
                                <h3 className="text-3xl font-black mb-8 flex items-center gap-3">
                                    {f('prepHeading', K.prepHeading)}
                                    <div className="h-1 w-12 bg-accent rounded-full"></div>
                                </h3>
                                <ul className="grid sm:grid-cols-2 gap-6 relative z-10">
                                    {prepMaterials.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 group">
                                            <div className="bg-accent/20 text-accent p-1.5 rounded-lg group-hover:bg-accent group-hover:text-primary transition-all">
                                                <Check size={16} strokeWidth={3} />
                                            </div>
                                            <span className="font-bold text-slate-300 group-hover:text-white transition-colors">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Investment & Fees */}
                            <div className="bg-slate-50 border border-slate-200 p-12 rounded-[50px] space-y-10">
                                <div>
                                    <h3 className="text-2xl font-black text-primary mb-6 flex items-center gap-3">
                                        {f('examFeeHeading', K.examFeeHeading)}
                                        <div className="h-px flex-1 bg-slate-200"></div>
                                    </h3>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">PMI Member</p>
                                            <p className="text-3xl font-black text-primary">{f('memberFee', K.memberFee)}</p>
                                        </div>
                                        <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Non-Member</p>
                                            <p className="text-3xl font-black text-primary">{f('nonMemberFee', K.nonMemberFee)}</p>
                                        </div>
                                    </div>
                                    <p className="mt-4 text-xs font-medium text-slate-500 italic">
                                        {f('feeNote', K.feeNote)}
                                    </p>
                                </div>

                                <div className="pt-8 border-t border-slate-200">
                                    <h3 className="text-2xl font-black text-primary mb-6">{f('courseFeesHeading', K.courseFeesHeading)}</h3>
                                    <div className="space-y-4 mb-8">
                                        <p className="text-slate-600 font-medium">{f('courseFeesIntro', K.courseFeesIntro)}</p>
                                        <div className="flex flex-wrap gap-4">
                                            <a href={`mailto:${f('contactEmail', K.contactEmail)}`} className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-slate-200 text-primary font-bold hover:border-accent transition-colors">
                                                <Mail size={18} className="text-accent" /> {f('contactEmail', K.contactEmail)}
                                            </a>
                                            <a href="https://wa.me/64273537774" className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-slate-200 text-primary font-bold hover:border-accent transition-colors">
                                                <Phone size={18} className="text-accent" /> {f('contactPhone', K.contactPhone)}
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

                        <div className="bg-accent/5 border border-accent/20 p-8 rounded-[32px] text-center max-w-4xl mx-auto">
                            <p className="text-primary font-bold text-lg leading-relaxed flex flex-col md:flex-row items-center justify-center gap-2">
                                <AlertCircle className="text-accent" size={24} />
                                <span className="text-accent">{f('importantNoteLabel', K.importantNoteLabel)}</span>
                                {f('importantNoteBody', K.importantNoteBody)}
                            </p>
                        </div>
                    </section>

                    <CourseSuccessQuotes />

                    <section id="register" className="grid md:grid-cols-5 gap-16 items-start">
                        <div className="md:col-span-3">
                            <BookingForm
                                courseName="PMI-CP® Certification"
                                formTitle={f('bookingFormTitle', 'Register Now')}
                                formSubtitle={orUndef(c.bookingFormSubtitle)}
                                submitButtonText={f('bookingSubmitButton', 'Confirm Registration')}
                                successTitle={f('bookingSuccessTitle', 'Booking Received!')}
                                successMessage={orUndef(c.bookingSuccessMessage)}
                                footerNote={f('bookingFooterNote', 'No upfront payment required to register')}
                            />
                        </div>
                        <div className="md:col-span-2 space-y-8">
                            <div className="bg-slate-800 text-white p-10 rounded-[40px] shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-bl-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                                <h3 className="text-2xl font-bold mb-6 relative z-10">{f('registerCardHeading', 'Advance your construction career')}</h3>
                                <p className="text-slate-300 mb-8 relative z-10 font-medium">{f('registerCardPara', K.registerCardPara)}</p>
                                <ContactLink
                                    className="inline-flex items-center justify-center py-6 px-16 bg-white text-primary font-black text-xl rounded-2xl hover:scale-105 transition-all shadow-2xl"
                                >
                                    {f('registerCardButton', K.registerCardButton)}
                                </ContactLink>
                            </div>

                            <div className="p-8 border-2 border-dashed border-slate-200 rounded-[40px] text-center">
                                <p className="text-slate-500 font-medium italic">
                                    &quot;{f('testimonialQuote', K.testimonialQuote)}&quot;
                                </p>
                                <div className="mt-4 font-bold text-primary">  {f('testimonialAuthor', K.testimonialAuthor)}</div>
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
                title={f('faqTitle', K.faqTitle)}
                subtitle={f('faqSubtitle', K.faqSubtitle)}
                description={f('faqDescription', K.faqDescription)}
                items={faqItems}
            />
            <Footer />
        </>
    );
}
