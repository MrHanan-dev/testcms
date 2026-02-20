"use client";

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Sarah Mitchell",
        role: "Senior PM, Infrastructure NZ",
        initials: "SM",
        content: "TotalPMP didn't just prepare me for the PMP exam — they transformed how I approach project delivery. The real-world case studies were invaluable.",
        rating: 5,
    },
    {
        name: "James Chen",
        role: "Director of Costs, Lendlease",
        initials: "JC",
        content: "The cost estimation advisory from Total QS saved us $2.4M on a single project. Their AI-driven approach is genuinely ahead of the curve.",
        rating: 5,
    },
    {
        name: "Priya Sharma",
        role: "PMO Lead, Spark NZ",
        initials: "PS",
        content: "Millpond's PMO establishment service gave us structure without bureaucracy. Our delivery velocity improved by 40% in the first quarter.",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="section bg-warm-50">
            <div className="container-custom">
                <div className="max-w-2xl mb-16">
                    <span className="label-tag mb-4 block">Testimonials</span>
                    <h2 className="h2 mb-4">
                        Trusted by <span className="text-accent">industry leaders.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="relative"
                        >
                            {/* Blockquote card */}
                            <div className="flex gap-6 h-full">
                                {/* Vertical gold line */}
                                <div className="w-[2px] bg-accent/30 flex-shrink-0 rounded-full" />

                                <div className="flex flex-col py-1">
                                    {/* Stars */}
                                    <div className="flex gap-0.5 mb-4">
                                        {Array.from({ length: t.rating }).map((_, i) => (
                                            <Star key={i} size={14} className="fill-accent text-accent" />
                                        ))}
                                    </div>

                                    {/* Quote — large typography */}
                                    <p className="text-foreground/70 leading-relaxed text-[16px] font-medium mb-8 flex-1">
                                        &ldquo;{t.content}&rdquo;
                                    </p>

                                    {/* Profile */}
                                    <div className="flex items-center gap-3 mt-auto">
                                        {/* Circular headshot placeholder */}
                                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                                            <span className="text-white font-bold text-xs tracking-wider">{t.initials}</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-charcoal text-sm">{t.name}</p>
                                            <p className="text-[11px] text-foreground/35 font-medium">{t.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
