"use client";

import { Quote } from 'lucide-react';

const quotes = [
    "Pass the PMP® Exam on Your First Try!",
    "First-Attempt PMP® Success, Guaranteed!",
    "Master PMP® with Expert Guidance",
    "Your Path to First-Time PMP® Certification",
    "PMP® Exam Success Starts Here"
];

const subtitles = [
    "Our expert coaches provide interactive lessons, exam-focused strategies, and practical exercises to ensure you succeed the first time.",
    "Learn from highly qualified instructors with hands-on practice and proven exam strategies designed for real results.",
    "Achieve exam success on your first attempt through engaging training, targeted study plans, and practical exercises led by certified professionals.",
    "Benefit from experienced coaches, interactive training sessions, and exam-focused techniques to confidently pass the PMP® exam.",
    "Gain the skills, strategies, and confidence needed to pass the PMP® exam on your first try with our expert-led, hands-on training."
];

export default function PMPQuotes() {
    return (
        <section className="py-24 bg-white">
            <div className="container-custom">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {quotes.map((quote, i) => (
                        <div key={i} className="p-10 rounded-[40px] bg-slate-50 border border-slate-100 flex flex-col h-full hover:shadow-xl transition-all duration-300">
                            <Quote className="text-accent mb-6" size={32} />
                            <h3 className="text-2xl font-black text-primary mb-4 leading-tight">“{quote}”</h3>
                            <p className="text-slate-500 font-medium leading-relaxed opacity-80">{subtitles[i]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
