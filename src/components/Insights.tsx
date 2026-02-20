"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const insights = [
    {
        tag: "Training",
        title: "Why 97% of PMP Candidates Fail — And How to Beat the Odds",
        snippet: "Our data-driven approach to PMP prep has maintained a 100% first-attempt pass rate for three consecutive years.",
        date: "Feb 2026",
        color: "bg-accent/5",
    },
    {
        tag: "Cost Advisory",
        title: "AI in Construction Estimation: A $50M Case Study",
        snippet: "How Total QS leveraged machine learning to reduce cost variance from 12% to under 3% on a major infrastructure project.",
        date: "Jan 2026",
        color: "bg-primary/5",
    },
    {
        tag: "Consulting",
        title: "Building a PMO From Zero: The Spark NZ Playbook",
        snippet: "A step-by-step breakdown of how we established a high-performing PMO that improved delivery velocity by 40%.",
        date: "Dec 2025",
        color: "bg-accent/5",
    },
];

export default function Insights() {
    return (
        <section className="section bg-white">
            <div className="container-custom">
                <div className="flex items-end justify-between mb-16">
                    <div>
                        <span className="label-tag mb-4 block">Latest Insights</span>
                        <h2 className="h2">
                            Ideas that <span className="text-accent">move projects.</span>
                        </h2>
                    </div>
                    <Link
                        href="#insights"
                        className="hidden md:flex items-center gap-2 text-sm font-bold text-charcoal hover:text-accent transition-colors"
                    >
                        View All <ArrowUpRight size={14} />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {insights.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                        >
                            <Link href="#" className="block group h-full">
                                <div className="flex flex-col h-full border border-slate-200/60 rounded-lg overflow-hidden hover:shadow-bento-hover transition-all duration-500">
                                    {/* Cover image placeholder */}
                                    <div className={`h-48 ${item.color} relative overflow-hidden`}>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-6xl font-black text-charcoal/[0.03] tracking-tighter select-none">
                                                {item.tag}
                                            </span>
                                        </div>
                                        <div className="absolute top-4 left-4">
                                            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-accent bg-white px-3 py-1.5 rounded-sm">
                                                {item.tag}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-1">
                                        <h3 className="text-lg font-bold text-charcoal tracking-dense leading-tight mb-3 group-hover:text-accent transition-colors duration-300">
                                            {item.title}
                                        </h3>
                                        <p className="text-foreground/45 text-sm leading-relaxed mb-4 flex-1">
                                            {item.snippet}
                                        </p>
                                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/25 mt-auto">
                                            {item.date}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
