"use client";

import { Target, Globe, BookOpen, Rocket, ArrowRight, Briefcase, ShieldCheck, GraduationCap, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Constants for Clean Code
const FADE_IN_UP = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
};

const STAGGER_CONTAINER = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const differentiators = [
    {
        icon: Target,
        iconColor: "text-primary",
        title: "Real-World Expertise",
        description: "Learn from certified industry experts with decades of hands on experience in construction, operations, and leadership."
    },
    {
        icon: Globe,
        iconColor: "text-primary",
        title: "Global Knowledge",
        description: "Combining international best practices with deep local industry insight to deliver world class project outcomes."
    },
    {
        icon: BookOpen,
        iconColor: "text-primary",
        title: "Impactful Learning",
        description: "Our training is designed around real projects, real tools, and real challenges for immediate application."
    }
];

const WHY_DEFAULTS = [
    { title: "Proven real-world project delivery experience", description: "Our consultants have decades of hands-on experience leading and recovering high-stakes projects across multiple industries.", icon: Target },
    { title: "Strong commercial and contractual expertise", description: "We provide meticulous cost management and quantity surveying to ensure your projects remain profitable and contractually secure.", icon: Briefcase },
    { title: "Clear reporting, governance, and accountability", description: "We implement robust frameworks that provide total transparency, enabling informed decision-making at every project stage.", icon: ShieldCheck },
    { title: "Practical training built on industry experience", description: "Our certification programs move beyond theory, teaching practical applications that build capable, high-performing teams.", icon: GraduationCap },
    { title: "Trusted support with a client-first approach", description: "We partner closely with you, aligning our strategies directly with your organizational goals to ensure mutual success.", icon: Users },
    { title: "Focused on measurable outcomes and value", description: "Every methodology we apply is designed to deliver tangible ROI, optimize efficiency, and drive sustainable growth.", icon: Rocket },
];

const COL1_DEFAULTS = ["PMP® Certification", "CAPM® Certification", "PMI-CP® Construction"];

type AboutProps = {
    headingLead?: string;
    headingMuted?: string;
    identityTitle?: string;
    paragraphs?: { text: string }[];
    col1Title?: string;
    col1Items?: string[];
    col2Title?: string;
    col2Text?: string;
    whyHeading?: string;
    whyItems?: { title?: string; description?: string }[];
    heritageEyebrow?: string;
    heritageHeading?: string;
    heritageText?: string;
    heritageLinkText?: string;
    heritageLinkHref?: string;
};

export default function AboutUsSummary({
    headingLead = "Your Strategic Partner in ",
    headingMuted = "Project Excellence",
    identityTitle = "Our Identity",
    paragraphs,
    col1Title = "Certification Training",
    col1Items,
    col2Title = "Tailored Consultancy",
    col2Text = "PMO Setup • Project Controls • Cost Estimation • Commercial Advisory • Contract Management",
    whyHeading = "Why Clients Choose The Agile Nest",
    whyItems: whyItemsProp,
    heritageEyebrow = "Our Heritage",
    heritageHeading = "A 17-Year Journey",
    heritageText = "From PMBOK 3rd to 8th Edition. Evolving passion with purpose and technological foresight.",
    heritageLinkText = "View the Interactive Timeline",
    heritageLinkHref = "/about#evolution",
}: AboutProps = {}) {
    const whyItems = WHY_DEFAULTS.map((base, i) => {
        const c = whyItemsProp?.[i];
        return c ? { ...base, title: c.title || base.title, description: c.description || base.description } : base;
    });
    const col1 = col1Items && col1Items.length > 0 ? col1Items : COL1_DEFAULTS;
    return (
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/2 rounded-full blur-[100px] pointer-events-none" />

            <div className="container-custom relative z-10">
                {/* Header Section - Task 5 */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={FADE_IN_UP}
                    className="max-w-5xl mx-auto text-center mb-16 md:mb-24"
                >
                    <span className="label-tag mx-auto block mb-6 uppercase tracking-widest">WHO WE ARE</span>
                    <h2 className="text-[clamp(32px,8vw,64px)] font-black text-primary tracking-tighter leading-[1.1] mb-8 md:mb-12 w-full">
                        {headingLead}<br />
                        <span className="text-slate-400">{headingMuted}</span>
                    </h2>

                    <div className="bg-slate-50/50 backdrop-blur-md p-6 sm:p-10 md:p-14 rounded-[32px] md:rounded-[48px] border border-slate-100 text-left relative overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000" />
                        <h3 className="text-2xl font-black text-primary mb-6 flex items-center gap-3">
                            <Rocket className="text-accent" /> {identityTitle}
                        </h3>
                        <div className="space-y-6 text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed font-medium max-w-4xl">
                            {paragraphs && paragraphs.length > 0 ? (
                                paragraphs.map((p, i) => <p key={i}>{p.text}</p>)
                            ) : (
                                <>
                                    <p>
                                        Built on the principles of precision, performance, and continuous value delivery, <span className="text-primary font-black">The Agile Nest</span> is a trusted provider of professional project management training and consultancy services. We bridge the gap between theory and the practical realities of today’s fast-moving industries.
                                    </p>
                                    <p>
                                        Whether you are managing complex construction projects, leading business transformations, or building your career, we provide the knowledge and expert support needed to perform at the highest level.
                                    </p>
                                </>
                            )}
                        </div>
                        
                        <div className="mt-8 md:mt-10 pt-8 md:pt-10 border-t border-slate-200/60 grid md:grid-cols-2 gap-8 md:gap-10">
                            <div>
                                <h4 className="text-primary font-black uppercase tracking-widest text-base mb-4">{col1Title}</h4>
                                <div className="space-y-3">
                                    {col1.map((c, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm font-bold text-slate-600">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent"></div> {c}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-primary font-black uppercase tracking-widest text-base mb-4">{col2Title}</h4>
                                <div className="space-y-3 text-sm font-bold text-slate-600">
                                    <p>{col2Text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Why Choose Us - Task 6 */}
                <div className="mb-20 md:mb-32">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={FADE_IN_UP}
                        className="text-center mb-16"
                    >
                        <h3 className="text-3xl md:text-5xl font-black text-primary tracking-tighter mb-6">
                            {whyHeading}
                        </h3>
                        <div className="w-20 h-1.5 bg-accent mx-auto rounded-full" />
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                        {whyItems.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                                className="flex items-start gap-5 p-6 lg:p-8 bg-slate-50/50 rounded-[24px] border border-slate-100 hover:border-accent/30 hover:bg-white hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <item.icon size={28} strokeWidth={2} />
                                </div>
                                <div className="flex flex-col pt-1">
                                    <h4 className="text-[18px] lg:text-[20px] font-bold text-slate-800 mb-2 group-hover:text-primary transition-colors leading-tight">
                                        {item.title}
                                    </h4>
                                    <p className="text-[15px] text-slate-600 leading-relaxed font-medium">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Evolution Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={FADE_IN_UP}
                    className="bg-primary rounded-[40px] md:rounded-[60px] p-8 md:p-20 shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
                    <div className="relative z-10 text-center mb-16">
                        <span className="label-tag mb-6 block">
                            {heritageEyebrow}
                        </span>
                        <h3 className="text-3xl md:text-6xl font-black text-white mb-6 md:mb-8 tracking-tighter">
                            {heritageHeading}
                        </h3>
                        <p className="text-lg md:text-xl text-blue-100/70 max-w-3xl mx-auto font-medium">
                            {heritageText}
                        </p>
                    </div>



                    <div className="text-center mt-12">
                        <Link
                            href={heritageLinkHref}
                            className="text-accent font-bold hover:text-white transition-colors flex items-center justify-center gap-2 group"
                        >
                            {heritageLinkText}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
