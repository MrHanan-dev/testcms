"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { usePathname } from 'next/navigation';
import { globalFaqs } from '@/lib/faqData';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const pathname = usePathname();

    // Safely determine which FAQ set to load based on the URL path.
    const routeKey = pathname === '/' ? 'home' : pathname.replace(/^\//, '').split('/')[0];
    const activeFaqs = globalFaqs[routeKey] || globalFaqs['default'];

    return (
        <section className="section bg-white border-t border-slate-100">
            <div className="container-custom">
                <div className="max-w-3xl mb-20">
                    <span className="text-accent font-extrabold tracking-[0.2em] uppercase text-[10px] mb-6 block">Common Queries</span>
                    <h2 className="h2 max-w-2xl">Answers to fuel your project journey.</h2>
                </div>

                <div className="max-w-4xl space-y-4">
                    {activeFaqs.map((faq, index) => (
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
