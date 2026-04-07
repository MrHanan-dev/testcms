"use client";

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Sarah Mitchell",
        role: "Senior PM, Infrastructure NZ",
        initials: "SM",
        content: "TheAgileNest didn't just prepare me for the PMP exam. They transformed how I approach project delivery. The real world case studies were invaluable.",
    },
    {
        name: "James Chen",
        role: "Director of Costs, Lendlease",
        initials: "JC",
        content: "The cost estimation advisory saved us $2.4M on a single project. Their precision approach is genuinely ahead of the curve.",
    },
    {
        name: "Priya Sharma",
        role: "PMO Lead, Spark NZ",
        initials: "PS",
        content: "Their PMO establishment service gave us structure without bureaucracy. Our delivery velocity improved by 40% in the first quarter.",
    },
];

export default function Testimonials() {
    return (
        <section className="section bg-surface">
            <div className="container-custom">
                <div className="max-w-lg mb-16">
                    <span className="label-tag mb-3 block">Testimonials</span>
                    <h2 className="h2">What our clients say.</h2>
                </div>

                <motion.div
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.15
                            }
                        }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-3 gap-12 lg:gap-16"
                >
                    {testimonials.map((t) => (
                        <motion.div
                            key={t.name}
                            variants={{
                                hidden: { opacity: 0, y: 24 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                                }
                            }}
                            className="flex gap-6"
                        >
                            {/* Vertical accent line */}
                            <div className="w-[1.5px] bg-accent/30 flex-shrink-0" />

                            <div className="flex flex-col py-1">
                                {/* Quote */}
                                <p className="text-foreground/80 text-[16px] lg:text-[17px] leading-[1.8] font-medium mb-8 flex-1">
                                    &ldquo;{t.content}&rdquo;
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4 mt-auto">
                                    <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 shadow-subtle group hover:scale-105 transition-transform duration-300">
                                        <span className="text-white text-[13px] font-bold tracking-tight">{t.initials}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="font-bold text-foreground text-[14px] leading-none mb-1.5">{t.name}</p>
                                        <p className="text-foreground/40 text-[11px] font-bold uppercase tracking-wider">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
