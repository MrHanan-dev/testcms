"use client";

import { useState } from 'react';
import { ChevronDown, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactLink from '@/components/ContactLink';

interface FAQItem {
    question: string;
    answer: string;
}

const defaultFaqs: FAQItem[] = [
    {
        question: "1. What services does The Agile Nest provide?",
        answer: "We provide project management consultancy, cost advisory, quantity surveying, PMO support, project controls, and professional training solutions designed to improve delivery performance and build capability."
    },
    {
        question: "2. Do you provide PMPÂ® training?",
        answer: "Yes. We deliver practical PMPÂ® preparation programs supported by real-world project examples, structured learning, mock exams, and expert guidance to help participants succeed with confidence."
    },
    {
        question: "3. We are a corporate organisation and want PMPÂ® training at our site. Is this possible?",
        answer: "Absolutely. We deliver customised on-site corporate PMPÂ® and project management training programs across New Zealand, Australia, the USA, and the UAE, subject to scheduling and demand. We can tailor delivery to your teamâ€™s goals and availability."
    },
    {
        question: "4. Who do you work with?",
        answer: "We work with corporates, government agencies, contractors, developers, consultants, and professionals across construction, infrastructure, commercial, energy, and technology sectors."
    },
    {
        question: "5. Can you help delayed or underperforming projects?",
        answer: "Yes. We support organisations with recovery planning, scheduling, governance, reporting, commercial controls, and practical strategies to bring projects back on track."
    },
    {
        question: "6. Do you offer online and international services?",
        answer: "Yes. We provide online training, remote consultancy, and virtual project support for clients in New Zealand and internationally, using secure digital collaboration tools."
    },
    {
        question: "7. Why choose The Agile Nest?",
        answer: "Clients choose us for our real-world experience, strong commercial expertise, practical training approach, and focus on measurable outcomes. We donâ€™t just provide adviceâ€”we help deliver results."
    }
];

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
    eyebrow = "FAQ",
    title, 
    subtitle, 
    description, 
    contactPrompt = "Have a specific question or corporate requirement?", 
    contactLinkText = "Contact us today",
    contactSuffix = "for a tailored solution.",
}: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const displayFaqs = items || defaultFaqs;

    return (
        <section className="py-20 md:py-32 bg-white relative overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="mb-12 md:mb-20 text-center max-w-3xl mx-auto">
                    <span className="label-tag mb-4 block mx-auto">{eyebrow}</span>
                    <h2 className="text-3xl md:text-6xl font-black text-primary tracking-tight mb-6">
                        {title || "Answers to Fuel Your"} <br />
                        <span className="text-slate-400">{subtitle || "Project Journey"}</span>
                    </h2>
                    <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed">
                        {description || (items ? "Clear answers to common questions about this service." : "Clear answers to common questions about our consultancy and training services.")}
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

