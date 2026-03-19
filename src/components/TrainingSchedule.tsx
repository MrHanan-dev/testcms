"use client";

import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const FADE_IN_UP = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
};

const STAGGER_CONTAINER = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.2
        }
    }
};

const CARD_VARIANTS = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
};

const schedules = [
    {
        month: "March 2026",
        course: "PMP® Certification Bootcamp",
        dates: "March 14, 15, 21, 22",
        time: "9:00 AM - 5:00 PM (NZDT)",
        format: "Live Virtual",
        status: "Filling Fast",
        link: "#register"
    },
    {
        month: "April 2026",
        course: "PMP® Certification Bootcamp",
        dates: "April 11, 12, 18, 19",
        time: "9:00 AM - 5:00 PM (NZDT)",
        format: "Live Virtual",
        status: "Open",
        link: "#register"
    },
    {
        month: "May 2026",
        course: "PMP® Certification Bootcamp",
        dates: "May 9, 10, 16, 17",
        time: "9:00 AM - 5:00 PM (NZDT)",
        format: "Live Virtual",
        status: "Open",
        link: "#register"
    },
    {
        month: "May 2026",
        course: "CAPM® Foundation Course",
        dates: "May 23, 24",
        time: "9:00 AM - 5:00 PM (NZDT)",
        format: "Live Virtual",
        status: "Open",
        link: "#register"
    }
];

export default function TrainingSchedule() {
    return (
        <section className="py-24 bg-slate-50 border-t border-slate-100 shadow-xl">
            <div className="container-custom">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={FADE_IN_UP}
                    className="max-w-3xl mb-16"
                >
                    <span className="text-accent font-extrabold tracking-[0.2em] uppercase text-[10px] mb-6 block">Upcoming Batches</span>
                    <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight">
                        Monthly Training Schedule
                    </h2>
                    <p className="text-slate-600 text-lg mt-6 max-w-2xl font-medium">
                        Secure your spot in our upcoming certification cohorts. Our live virtual weekends are designed for working professionals to balance career growth with existing commitments.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={STAGGER_CONTAINER}
                    className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6"
                >
                    {schedules.map((schedule, idx) => (
                        <motion.div
                            key={idx}
                            variants={CARD_VARIANTS}
                            whileHover={{ y: -6, boxShadow: "0 25px 50px -12px rgba(85, 197, 231, 0.15)" }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/20 group relative overflow-hidden cursor-pointer"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full transition-transform duration-500 group-hover:scale-150"></div>

                            <div className="flex justify-between items-start mb-6">
                                <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${schedule.status === 'Filling Fast' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>
                                    {schedule.status}
                                </span>
                                <span className="font-extrabold text-slate-300 text-xl tracking-tighter">
                                    {schedule.month.split(' ')[0]}
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold text-primary mb-6 pr-8">
                                {schedule.course}
                            </h3>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center text-slate-600 font-medium">
                                    <Calendar size={18} className="text-accent mr-4 hidden sm:block" />
                                    <span>{schedule.dates}</span>
                                </div>
                                <div className="flex items-center text-slate-600 font-medium">
                                    <Clock size={18} className="text-accent mr-4 hidden sm:block" />
                                    <span>{schedule.time}</span>
                                </div>
                                <div className="flex items-center text-slate-600 font-medium">
                                    <MapPin size={18} className="text-accent mr-4 hidden sm:block" />
                                    <span>{schedule.format}</span>
                                </div>
                            </div>

                            <button
                                onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
                                className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors group/link w-full py-4 border-t border-slate-50 cursor-pointer"
                            >
                                Enroll Now
                                <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
