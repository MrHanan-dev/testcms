"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "What is the exam success rate for TotalPMP's students?",
        answer: "We are proud to maintain a 100% first-attempt pass rate for our PMP® certification training. Our curriculum is tailored based on actual industrial situations and includes comprehensive mock testing."
    },
    {
        question: "Do you offer tailored project management consulting for enterprises?",
        answer: "Yes, TotalPMP specializes in bespoke consultancy for high-stakes projects. From masterplanning to sustainability advice, we help organizations navigate complex delivery hurdles."
    },
    {
        question: "Is the training available globally or only in New Zealand?",
        answer: "While we have deep roots in New Zealand, we offer both on-site and highly interactive online certifications that follow international standards, accessible to professionals worldwide."
    },
    {
        question: "How does the consultancy approach differ from others?",
        answer: "Our approach is independent and expert-led, focusing on providing high-fidelity development and commercial advice that ensures project success from inception to delivery."
    },
    {
        question: "What industries do your consultancy services cover?",
        answer: "We have extensive experience in large-scale infrastructure, commercial developments, and industrial construction projects across diverse sectors."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="section bg-white border-t border-slate-100">
            <div className="container-custom">
                <div className="max-w-3xl mb-20">
                    <span className="text-accent font-extrabold tracking-[0.2em] uppercase text-[10px] mb-6 block">Common Queries</span>
                    <h2 className="h2 max-w-2xl">Answers to fuel your project journey.</h2>
                </div>

                <div className="max-w-4xl space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`rounded-[32px] overflow-hidden transition-all duration-700 ${openIndex === index ? 'glass-crystal shadow-premium border-accent/20' : 'bg-slate-50/50 hover:bg-slate-50 border border-transparent'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-8 text-left transition-all duration-500"
                            >
                                <span className={`font-bold text-lg tracking-tight ${openIndex === index ? 'text-accent' : 'text-primary'}`}>{faq.question}</span>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${openIndex === index ? 'bg-accent text-white rotate-180' : 'bg-primary/5 text-primary'}`}>
                                    <ChevronUp size={18} />
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <div className="px-8 pb-8 text-slate-500 text-[15px] leading-relaxed font-medium opacity-80 pt-2">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
