"use client";

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { HOME_TESTIMONIALS } from '@/data/homeContent';

type Testimonial = { quote: string; author?: string; role?: string; company?: string };

const DEFAULT_TESTIMONIALS: Testimonial[] = [...HOME_TESTIMONIALS];

type TestimonialsProps = {
    eyebrow?: string;
    headingLead?: string;
    headingMuted?: string;
    items?: Testimonial[];
};

export default function Testimonials({
    eyebrow = "Testimonials",
    headingLead = "Voice of ",
    headingMuted = "Excellence",
    items,
}: TestimonialsProps = {}) {
    const testimonials = items && items.length > 0 ? items : DEFAULT_TESTIMONIALS;
    return (
        <section className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
            <div className="container-custom">
                <div className="mb-12 md:mb-20 text-center">
                    <span className="label-tag mb-4 block">{eyebrow}</span>
                    <h2 className="text-3xl md:text-6xl font-black text-primary tracking-tight">
                        {headingLead}<span className="text-slate-400">{headingMuted}</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="bg-white p-8 md:p-12 rounded-[32px] md:rounded-[48px] border border-slate-100 shadow-sm relative group hover:shadow-xl transition-all duration-500"
                        >
                            <Quote className="text-accent/20 absolute top-10 right-10 group-hover:text-accent/40 transition-colors" size={48} />
                             <p className="text-base sm:text-lg md:text-xl text-slate-700 font-medium italic leading-relaxed mb-8 md:mb-10 relative z-10">
                                "{t.quote}"
                            </p>
                            <div>
                                <div className="font-black text-primary text-lg">{t.author}</div>
                                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">
                                    {t.role} • {t.company}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
