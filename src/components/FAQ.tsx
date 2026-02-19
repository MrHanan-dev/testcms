"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "What is the pass rate for TotalPMP's certification courses?",
        answer: "TotalPMP maintains a 98% first-attempt pass rate for our PMP certification training. Our curriculum is strictly aligned with the latest PMBOK Guide and includes comprehensive mock exams."
    },
    {
        question: "How accurate is the AI-driven construction cost estimation?",
        answer: "Our proprietary AI models achieve up to 99% accuracy by analyzing historical data, market trends, and specific architectural variables, significantly reducing the risk of budget overruns."
    },
    {
        question: "Do you offer tailored project management consulting for large enterprises?",
        answer: "Yes, TotalPMP specializes in enterprise-level consulting. We help organizations establish robust Project Management Offices (PMO) and optimize complex cross-departmental workflows."
    },
    {
        question: "Is TotalPMP training available globally?",
        answer: "We offer both on-site training and highly interactive online certifications, making TotalPMP courses accessible to professionals and teams worldwide."
    },
    {
        question: "What industries do you specialize in for cost estimation?",
        answer: "While our methodology is versatile, we have deep expertise in infrastructure, commercial real estate, and industrial construction projects."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="section bg-white">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="h2 mb-4">Frequently Asked Questions</h2>
                    <p className="text-xl text-gray-600">Your guide to project management excellence and data precision.</p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-100 rounded-2xl overflow-hidden bg-gray-50/50"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white transition-colors duration-300"
                            >
                                <span className="font-bold text-primary">{faq.question}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="text-accent" />
                                ) : (
                                    <ChevronDown className="text-gray-400" />
                                )}
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
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
