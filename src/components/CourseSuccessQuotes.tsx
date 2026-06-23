"use client";

import { Quote } from 'lucide-react';

const DEFAULT_QUOTES = [
    { quote: "Pass Your Certification Exam on Your First Try!", subtitle: "Our expert coaches provide interactive lessons, exam-focused strategies, and practical exercises to ensure you succeed the first time." },
    { quote: "First-Attempt Certification Success, Achieved!", subtitle: "Learn from highly qualified instructors with hands on practice and proven exam strategies designed for real results." },
    { quote: "Master Project Management with Expert Guidance", subtitle: "Achieve exam success on your first attempt through engaging training, targeted study plans, and practical exercises led by certified professionals." },
    { quote: "Your Path to First-Time Global Certification", subtitle: "Benefit from experienced coaches, interactive training sessions, and exam-focused techniques to confidently pass your certification exam." },
    { quote: "Exam Success Starts Here", subtitle: "Gain the skills, strategies, and confidence needed to pass your exam on your first try with our expert led, hands on training." }
];

type QuoteCard = { quote: string; subtitle?: string };

export default function CourseSuccessQuotes({ items }: { items?: QuoteCard[] } = {}) {
    const cards = items && items.length > 0 ? items : DEFAULT_QUOTES;
    return (
        <section className="py-24 bg-white">
            <div className="container-custom">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cards.map((card, i) => (
                        <div key={i} className="p-10 rounded-[40px] bg-slate-50 border border-slate-100 flex flex-col h-full hover:shadow-xl transition-all duration-300">
                            <Quote className="text-accent mb-6" size={32} />
                            <h3 className="text-2xl font-black text-primary mb-4 leading-tight">“{card.quote}”</h3>
                            <p className="text-slate-500 font-medium leading-relaxed opacity-80">{card.subtitle}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
