"use client";

import { motion } from 'framer-motion';
import { GraduationCap, Calculator, Briefcase, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const cards = [
    {
        tag: "The Agile Nest",
        title: "Training & Certifications",
        description: "World-class PMP®, CAPM®, and Agile training programs rooted in real industrial situations. 100% first-attempt pass rate with PMI-accredited curriculum.",
        icon: GraduationCap,
        highlights: ["PMP® Certification", "CAPM® Foundation", "Agile / ACP®", "Corporate Workshops"],
        color: "accent",
        href: "#training",
    },
    {
        tag: "Total QS",
        title: "Quantity Surveying & Cost Advisory",
        description: "Precision AI-driven cost estimation and quantity surveying for construction, software, and infrastructure projects. From feasibility to final account.",
        icon: Calculator,
        highlights: ["Construction Estimating", "Life Cycle Costing", "Risk & Contingency", "AI Cost Analytics"],
        color: "primary",
        href: "#estimation",
    },
    {
        tag: "Millpond",
        title: "Strategic Consulting & Delivery",
        description: "End-to-end project advisory — from masterplanning and PMO establishment to agile transformation and independent project audit.",
        icon: Briefcase,
        highlights: ["PMO Establishment", "Agile Transformation", "Project Audit", "Strategic Advisory"],
        color: "accent",
        href: "#consultancy",
    },
];

export default function BentoGrid() {
    return (
        <section id="services" className="section bg-background">
            <div className="container-custom">
                <div className="max-w-3xl mb-16">
                    <span className="label-tag mb-5 block">The Trinity</span>
                    <h2 className="h2 mb-6">
                        Three pillars. <span className="text-accent">One mission.</span>
                    </h2>
                    <p className="text-lg text-foreground/60 font-medium leading-relaxed max-w-2xl">
                        TotalPMP brings together training, cost intelligence, and strategic consulting to deliver complete project excellence.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.tag}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link href={card.href} className="bento-card flex flex-col h-full group cursor-pointer">
                                {/* Tag + Icon */}
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent bg-accent/8 px-3 py-1.5 rounded-full">
                                        {card.tag}
                                    </span>
                                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                                        <card.icon size={20} />
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl md:text-2xl font-extrabold text-primary mb-3 tracking-tight leading-tight group-hover:text-accent transition-colors duration-300">
                                    {card.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-foreground/60 leading-relaxed font-medium mb-6 flex-1">
                                    {card.description}
                                </p>

                                {/* Highlights */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {card.highlights.map((h) => (
                                        <span
                                            key={h}
                                            className="text-[10px] font-bold text-foreground/50 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100"
                                        >
                                            {h}
                                        </span>
                                    ))}
                                </div>

                                {/* Link */}
                                <div className="flex items-center text-accent text-[12px] font-black uppercase tracking-[0.15em] group-hover:gap-3 gap-2 transition-all duration-300 mt-auto">
                                    Explore <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
