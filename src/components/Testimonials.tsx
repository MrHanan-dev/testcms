"use client";

import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: "James Wilson",
        role: "Project Director, NZ Infrastructure",
        content: "TotalPMP transformed our approach to construction oversight. Their consultancy expertise in masterplanning was instrumental in delivering our project ahead of schedule.",
        rating: 5,
    },
    {
        name: "Dr. Sarah Miller",
        role: "Certified PMP® Graduate",
        content: "Exceptional training experience. The focus on real-world industrial situations made passing the PMP® exam straightforward and practical for my daily leadership roles.",
        rating: 5,
    },
    {
        name: "Robert Cheng",
        role: "COO, Pacific Development",
        content: "Strategic advisory from TotalPMP helped us navigate complex land acquisition and project financing hurdles with high-fidelity commercial advice.",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="section bg-background overflow-hidden">
            <div className="container-custom">
                <div className="max-w-3xl mb-16">
                    <span className="label-tag mb-5 block">Client Success</span>
                    <h2 className="h2 max-w-2xl">
                        Trusted by leaders in <span className="text-accent">industry and project excellence.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bento-card flex flex-col relative group"
                        >
                            <div className="absolute top-8 right-8 text-primary/5 group-hover:text-accent/15 transition-colors duration-500">
                                <Quote size={36} />
                            </div>

                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={14} className="fill-accent text-accent" />
                                ))}
                            </div>

                            <p className="text-foreground/70 mb-8 leading-relaxed flex-1 text-[15px] font-medium">
                                &ldquo;{testimonial.content}&rdquo;
                            </p>

                            <div className="pt-6 border-t border-slate-100">
                                <h4 className="font-extrabold text-primary tracking-tight text-base">
                                    {testimonial.name}
                                </h4>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.15em] mt-1">
                                    {testimonial.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
