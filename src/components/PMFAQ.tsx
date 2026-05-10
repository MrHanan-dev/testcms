"use client";

import { useState } from 'react';
import { ChevronDown, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactLink from '@/components/ContactLink';

const faqs = [
    {
        question: "1. What is project management?",
        answer: "Project management is the structured process of planning, coordinating, controlling, and delivering projects successfully within scope, time, cost, and quality targets."
    },
    {
        question: "2. What project management services does The Agile Nest provide?",
        answer: "We provide planning, scheduling, governance, reporting, PMO support, stakeholder management, project controls, and delivery assurance."
    },
    {
        question: "3. Why is project management important?",
        answer: "It helps organisations reduce delays, control budgets, manage risks, improve communication, and achieve better outcomes."
    },
    {
        question: "4. Can you help with delayed or struggling projects?",
        answer: "Yes. We help recover underperforming projects through planning reviews, stronger controls, governance, and practical recovery strategies."
    },
    {
        question: "5. Do you provide PMO support?",
        answer: "Yes. We help organisations establish PMO systems, governance frameworks, reporting processes, and portfolio visibility."
    },
    {
        question: "6. Do you support construction and infrastructure projects?",
        answer: "Yes. We work across construction, infrastructure, telecom, commercial, and transformation sectors."
    },
    {
        question: "7. Why choose The Agile Nest for project management?",
        answer: "We combine real-world experience, practical delivery expertise, and measurable results."
    }
];

export default function PMFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-32 bg-slate-50 relative overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="mb-20 text-center max-w-3xl mx-auto">
                    <span className="label-tag mb-4 block mx-auto">PROJECT MANAGEMENT FAQ</span>
                    <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tight mb-6">
                        Got Questions? <br />
                        <span className="text-slate-400">We've Got Answers</span>
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="rounded-[32px] border border-slate-100 overflow-hidden bg-white shadow-sm">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-8 text-left transition-all duration-300 hover:bg-slate-50/50"
                            >
                                <span className="text-lg md:text-xl font-bold text-primary pr-4">{faq.question}</span>
                                <ChevronDown className={`w-6 h-6 text-accent shrink-0 transition-transform duration-500 ${openIndex === index ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <div className="px-8 pb-8 text-slate-600 text-lg leading-relaxed font-medium">
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
