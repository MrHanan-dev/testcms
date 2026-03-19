"use client";

import {
    GraduationCap,
    BookOpen,
    ClipboardCheck,
    Wrench,
    Headphones,
    Calendar,
    FileCheck,
    CheckCircle2,
    Trophy,
    ArrowRight
} from 'lucide-react';

const benefitCategories = [
    {
        title: "Expert-Led Training",
        icon: <GraduationCap className="text-accent" size={32} />,
        items: [
            "Instructor-led classroom & live online sessions",
            "Delivered by highly experienced, certified instructors",
            "Facilitated by a PMI-certified practitioner (Above Target in all domains)"
        ]
    },
    {
        title: "PMI-Aligned Premium Content",
        icon: <BookOpen className="text-accent" size={32} />,
        items: [
            "Course material aligned with PMBOK® Guide – Seventh Edition",
            "Digital access to PMI case studies & official learning content",
            "Full walkthrough of all PMP® modules & learning domains"
        ]
    },
    {
        title: "Comprehensive Exam Preparation",
        icon: <ClipboardCheck className="text-accent" size={32} />,
        items: [
            "35+ hours of structured PMP® exam prep",
            "Free full-length mock exam + topic-wise practice questions",
            "Tips & strategies to pass on your first attempt",
            "Application, audit support & exam booking help"
        ]
    },
    {
        title: "Course Materials & Tools",
        icon: <Wrench className="text-accent" size={32} />,
        items: [
            "Downloadable course slides",
            "30+ project management templates",
            "Access to PM Training School's advanced modules"
        ]
    },
    {
        title: "Personal Support & Coaching",
        icon: <Headphones className="text-accent" size={32} />,
        items: [
            "Free 1-hour one-on-one coaching",
            "Dedicated guidance throughout your PMP® journey"
        ]
    },
    {
        title: "Flexible Learning Options",
        icon: <Calendar className="text-accent" size={32} />,
        items: [
            "Weekend & weekday classes",
            "Classroom + live online options available",
            "In-person sessions: morning tea, afternoon tea & lunch included"
        ]
    },
    {
        title: "Certification & Compliance",
        icon: <FileCheck className="text-accent" size={32} />,
        items: [
            "Certificate of Completion (CoC) – required for PMP® exam",
            "Attendance certificate provided after training"
        ]
    }
];

export default function PMPBenefits() {
    return (
        <section className="section bg-slate-50 py-24 px-6 md:px-12">
            <div className="container-custom">
                <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
                    <span className="label-tag mx-auto bg-primary/5 text-primary">Inclusions</span>
                    <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tight">
                        💼 What You Get With Our <span className="text-accent">PMP® Training</span>
                    </h2>
                    <p className="text-slate-500 text-lg font-medium">
                        Everything you need to successfully navigate your PMP® journey and become a certified professional.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {benefitCategories.map((category, idx) => (
                        <div
                            key={idx}
                            className="group bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
                        >
                            <div className="w-16 h-16 bg-accent/5 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                                {category.icon}
                            </div>
                            <h3 className="text-2xl font-black text-primary mb-8 leading-tight">{category.title}</h3>
                            <ul className="space-y-5 flex-grow">
                                {category.items.map((item, i) => (
                                    <li key={i} className="flex gap-4 text-slate-500 font-medium leading-relaxed">
                                        <CheckCircle2 size={18} className="text-accent shrink-0 mt-1" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Special CTA Card */}
                    <div className="lg:col-span-2 group bg-primary p-12 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col justify-center items-start text-white">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-bl-full blur-[80px] pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>
                        <div className="relative z-10 space-y-8 max-w-2xl">
                            <div className="flex items-center gap-4 text-accent">
                                <Trophy size={48} strokeWidth={1.5} />
                                <span className="text-4xl font-black tracking-tight">Proven Success Club</span>
                            </div>
                            <p className="text-xl text-slate-300 font-medium leading-relaxed">
                                Whether you aim to advance your career, lead projects, or master global best practices, TOTALPMP is your trusted partner. We stay with you until you pass.
                            </p>
                            <div className="flex flex-wrap gap-6 pt-4">
                                <a href="#register" className="btn-accent px-10 py-5 rounded-2xl flex items-center gap-3 text-lg font-black group/btn">
                                    Enrol in PMP® Training Now
                                    <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm flex flex-col justify-center items-center text-center space-y-6">
                        <h4 className="text-xl font-bold text-primary">Need more info?</h4>
                        <p className="text-slate-500 font-medium">Download the latest PMP® Examination Content Outline (ECO).</p>
                        <a href="/pmp-examination-content-outline.pdf" className="text-accent font-black hover:underline inline-flex items-center gap-2 group">
                            Download PDF
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
