"use client";

import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "Senior Project Manager at BuildCorp",
        content: "TotalPMP transformed how we handle budget estimations. Their AI platform predicted our project costs with incredible accuracy, saving us millions in potential overruns.",
        rating: 5
    },
    {
        name: "Dr. Michael Chen",
        role: "Infrastructure Director",
        content: "The PMP training was exceptional. I've taken many courses, but TotalPMP's precision-focused approach made complex PMBOK concepts easy to grasp and pass on the first try.",
        rating: 5
    },
    {
        name: "Elena Rodriguez",
        role: "COO, Nexus Technical",
        content: "Strategic consulting from TotalPMP helped us restructure our PMO. The synergy between their cost management and leadership training is a game-changer for any growth-oriented company.",
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <section className="section bg-white border-t border-gray-50">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="h2 mb-4">What Our Clients Say</h2>
                    <p className="text-xl text-gray-600">Join the ranks of successful project leaders and precision-driven firms.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col relative group"
                        >
                            <div className="absolute top-6 right-8 text-primary/5 group-hover:text-accent/10 transition-colors">
                                <Quote size={48} />
                            </div>
                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-accent text-accent" />
                                ))}
                            </div>
                            <p className="text-gray-700 italic mb-8 leading-relaxed z-10 flex-1">
                                "{testimonial.content}"
                            </p>
                            <div className="pt-6 border-t border-gray-200">
                                <h4 className="font-bold text-primary">{testimonial.name}</h4>
                                <p className="text-xs text-gray-500 font-medium">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
