"use client";

import { useState } from 'react';
import { ChevronDown, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactLink from '@/components/ContactLink';
import { HOME_FAQ_ITEMS, HOME_FAQ_META } from '@/data/homeContent';

interface FAQItem {
    question: string;
    answer: string;
}

const defaultFaqs: FAQItem[] = [...HOME_FAQ_ITEMS];

type FAQProps = {
    items?: FAQItem[];
    eyebrow?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    contactPrompt?: string;
    contactLinkText?: string;
    contactSuffix?: string;
};

export default function FAQ({ 
    items, 
    eyebrow = HOME_FAQ_META.faqEyebrow,
    title = HOME_FAQ_META.faqTitle, 
    subtitle = HOME_FAQ_META.faqSubtitle, 
    description = HOME_FAQ_META.faqDescription, 
    contactPrompt = HOME_FAQ_META.faqContactPrompt, 
    contactLinkText = HOME_FAQ_META.faqContactLinkText,
    contactSuffix = HOME_FAQ_META.faqContactSuffix,
}: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const displayFaqs = items || defaultFaqs;

    return (
        <section className="py-20 md:py-32 bg-white relative overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="mb-12 md:mb-20 text-center max-w-3xl mx-auto">
                    <span className="label-tag mb-4 block mx-auto">{eyebrow}</span>
                    <h2 className="text-3xl md:text-6xl font-black text-primary tracking-tight mb-6">
                        {title} <br />
                        <span className="text-slate-400">{subtitle}</span>
                    </h2>
                    <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed">
                        {description || (items ? "Clear answers to common questions about this service." : HOME_FAQ_META.faqDescription)}
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-4">
                    {displayFaqs.map((faq, index) => (
                        <div key={index} className="rounded-[24px] md:rounded-[32px] border border-slate-100 overflow-hidden bg-slate-50/30">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 md:p-8 text-left transition-all duration-300 hover:bg-slate-50"
                            >
                                <span className="text-base md:text-xl font-bold text-primary pr-4">{faq.question}</span>
                                <ChevronDown className={`w-6 h-6 text-accent transition-transform duration-500 ${openIndex === index ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <div className="px-6 md:px-8 pb-6 md:pb-8 text-slate-600 text-sm md:text-lg leading-relaxed font-medium">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <div className="mt-16 md:mt-20 text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-4 sm:p-1.5 sm:pr-6 bg-primary rounded-[24px] sm:rounded-full shadow-xl shadow-primary/20 max-w-2xl mx-auto">
                        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary">
                            <Mail size={18} />
                        </div>
                        <span className="text-sm md:text-base font-bold text-white px-2">
                            {contactPrompt} <ContactLink className="text-accent hover:underline ml-1">{contactLinkText}</ContactLink> {contactSuffix}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

