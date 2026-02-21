"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const insights = [
    {
        tag: "Training",
        title: "How to maintain a 100% first-attempt PMP® pass rate.",
        snippet: "A breakdown of our data-driven 준비 curriculum designed by industry practitioners for busy professionals.",
        date: "Feb 2026",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop&q=80"
    },
    {
        tag: "Cost Advisory",
        title: "Precision in construction: The role of AI in QS.",
        snippet: "Leveraging machine learning to reduce cost variance from 12% to under 3% on complex builds.",
        date: "Jan 2026",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=800&h=600&fit=crop&q=80"
    },
    {
        tag: "Strategy",
        title: "From zero to delivery: The high-speed PMO playbook.",
        snippet: "Strategic lessons from establishing PMOs that drive 40% improvements in delivery velocity.",
        date: "Dec 2025",
        image: "https://images.apache.org/photo-1454165833767-1314389c0b21?w=800&h=600&fit=crop&q=80"
    },
];

export default function Insights() {
    return (
        <section className="section bg-white overflow-hidden">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-xl">
                        <span className="label-tag mb-4 block">Latest Insights</span>
                        <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight leading-tight text-foreground">
                            Ideas that move projects forward.
                        </h2>
                    </div>
                    <Link
                        href="#insights"
                        className="inline-flex items-center gap-2 group text-[13px] font-bold uppercase tracking-widest text-primary/40 hover:text-primary transition-all duration-300"
                    >
                        View Publication <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <motion.div
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.12
                            }
                        }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-3 gap-10 lg:gap-14"
                >
                    {insights.map((item) => (
                        <motion.div
                            key={item.title}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                                }
                            }}
                        >
                            <Link href="#" className="block group h-full">
                                <div className="flex flex-col h-full bg-white transition-all duration-500">
                                    {/* Cover */}
                                    <div className="aspect-[4/3] bg-surface rounded-xl mb-8 relative overflow-hidden shadow-subtle group-hover:shadow-card-hover transition-all duration-500">
                                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                        <img
                                            src={item.image || "https://images.unsplash.com/photo-1454165833767-1314389c0b21?w=800&h=600&fit=crop&q=80"}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute top-5 left-5 z-20">
                                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary bg-accent px-3 py-1.5 rounded-md shadow-sm">
                                                {item.tag}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-[20px] font-bold text-foreground tracking-tight leading-[1.3] mb-4 group-hover:text-primary transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-foreground/50 text-[15px] leading-relaxed mb-6 flex-1">
                                        {item.snippet}
                                    </p>
                                    <div className="flex items-center justify-between pt-6 border-t border-border mt-auto">
                                        <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-foreground/30">
                                            {item.date}
                                        </span>
                                        <span className="text-[12px] font-bold text-accent opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                                            Read More →
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
