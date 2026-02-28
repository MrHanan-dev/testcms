"use client";

import { Target, Globe, BookOpen, Rocket, ArrowRight } from 'lucide-react';
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
        description: "Learn from certified industry experts with decades of hands-on experience in construction, operations, and leadership."
    },
    {
        icon: Globe,
        iconColor: "text-primary",
        title: "Global Knowledge",
        description: "Combining international best practices with deep local industry insight to deliver world-class project outcomes."
    },
    {
        icon: BookOpen,
        iconColor: "text-primary",
        title: "Impactful Learning",
        description: "Our training is designed around real projects, real tools, and real challenges for immediate application."
    }
];

export default function AboutUsSummary() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/2 rounded-full blur-[100px] pointer-events-none" />

            <div className="container-custom relative z-10">
                {/* Header Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={FADE_IN_UP}
                    className="max-w-4xl mx-auto text-center mb-24"
                >
                    <span className="label-tag mx-auto block">Who We Are</span>
                    <h2 className="text-4xl md:text-6xl font-black text-primary mt-6 mb-8 tracking-tighter leading-tight">
                        Transforming Knowledge Into <span className="text-slate-400">Project Excellence</span>
                    </h2>

                    <div className="bg-slate-50/50 backdrop-blur-md p-10 md:p-14 rounded-[40px] border border-slate-100 text-left relative overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000" />
                        <h3 className="text-2xl font-black text-primary mb-6 flex items-center gap-3">
                            <Rocket className="text-accent" /> Our Mission
                        </h3>
                        <p className="text-xl md:text-2xl text-slate-700 italic leading-relaxed font-medium">
                            "At TotalPMP, we deliver immersive training and consultancy that transforms project management into a strategic advantage for teams and leaders."
                        </p>
                    </div>
                </motion.div>

                {/* Why Choose Us & Edge */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 mb-32 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={FADE_IN_UP}
                    >
                        <h3 className="text-3xl md:text-5xl font-black text-primary mb-8 tracking-tighter">
                            Why Choose TotalPMP
                        </h3>
                        <p className="text-xl text-slate-500 leading-relaxed mb-10 font-medium">
                            We don't just teach project management - we transform professionals into confident leaders ready to deliver high-stakes results.
                        </p>

                        <Link
                            href="/about"
                            className="inline-flex items-center gap-2 px-10 py-5 bg-primary text-white rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 group"
                        >
                            Read Our Full Story
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={STAGGER_CONTAINER}
                        className="space-y-10 bg-slate-50/30 backdrop-blur-sm p-10 md:p-14 rounded-[50px] border border-slate-100"
                    >
                        <h3 className="text-2xl font-black text-primary mb-2">
                            The TotalPMP Edge
                        </h3>
                        <div className="space-y-10">
                            {differentiators.map((item) => (
                                <motion.div key={item.title} variants={FADE_IN_UP} className="flex gap-6 group">
                                    <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                                        <item.icon size={28} className={item.iconColor} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-primary mb-2">
                                            {item.title}
                                        </h4>
                                        <p className="text-slate-500 leading-relaxed font-medium">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Evolution Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={FADE_IN_UP}
                    className="bg-primary rounded-[60px] p-10 md:p-20 shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
                    <div className="relative z-10 text-center mb-16">
                        <span className="label-tag mb-6 block">
                            Our Heritage
                        </span>
                        <h3 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
                            A 17-Year Journey
                        </h3>
                        <p className="text-xl text-blue-100/70 max-w-3xl mx-auto font-medium">
                            From PMBOK 3rd to 8th Edition - Evolving passion with purpose and technological foresight.
                        </p>
                    </div>



                    <div className="text-center mt-12">
                        <Link
                            href="/about#evolution"
                            className="text-accent font-bold hover:text-white transition-colors flex items-center justify-center gap-2 group"
                        >
                            View the Interactive Timeline
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
