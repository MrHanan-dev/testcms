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
        month: "June 2026",
        course: "PMP® Certification Bootcamp",
        dates: "June 13, 14, 20, 21",
        time: "9:00 AM - 5:00 PM (NZST)",
        format: "Live Virtual",
        status: "Filling Fast",
        link: "#register"
    },
    {
        month: "June 2026",
        course: "CAPM® Foundation Course",
        dates: "June 27, 28",
        time: "9:00 AM - 5:00 PM (NZST)",
        format: "Live Virtual",
        status: "Open",
        link: "#register"
    },
    {
        month: "July 2026",
        course: "PMP® Certification Bootcamp",
        dates: "July 11, 12, 18, 19",
        time: "9:00 AM - 5:00 PM (NZST)",
        format: "Live Virtual",
        status: "Open",
        link: "#register"
    },
    {
        month: "July 2026",
        course: "PMI-CP® Certification Bootcamp",
        dates: "July 25, 26",
        time: "9:00 AM - 5:00 PM (NZST)",
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

                {/* Table for Desktop */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={STAGGER_CONTAINER}
                    className="hidden lg:block overflow-hidden rounded-[2rem] border border-slate-100 shadow-xl bg-white"
                >
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50 border-b border-slate-100">
                                <th className="px-8 py-6 text-slate-400 font-bold uppercase text-[10px] tracking-widest">Date / Month</th>
                                <th className="px-8 py-6 text-slate-400 font-bold uppercase text-[10px] tracking-widest">Course Training Name</th>
                                <th className="px-8 py-6 text-slate-400 font-bold uppercase text-[10px] tracking-widest">Schedule Details</th>
                                <th className="px-8 py-6 text-slate-400 font-bold uppercase text-[10px] tracking-widest text-center">Batch Status</th>
                                <th className="px-8 py-6 text-slate-400 font-bold uppercase text-[10px] tracking-widest text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {schedules.map((schedule, idx) => (
                                <motion.tr
                                    key={idx}
                                    variants={CARD_VARIANTS}
                                    className="group hover:bg-slate-50/30 transition-colors duration-300"
                                >
                                    <td className="px-8 py-8">
                                        <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">{schedule.month}</p>
                                        <p className="text-base font-black text-primary">{schedule.dates}</p>
                                    </td>
                                    <td className="px-8 py-8">
                                        <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                                            {schedule.course}
                                        </h3>
                                    </td>
                                    <td className="px-8 py-8">
                                        <div className="flex items-center gap-3 text-slate-600 font-semibold text-sm mb-2">
                                            <Clock size={16} className="text-accent" />
                                            <span>{schedule.time}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-slate-400 font-bold text-[10px] uppercase tracking-wider">
                                            <MapPin size={14} className="text-slate-300" />
                                            <span>{schedule.format}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-8 text-center">
                                        <span className={`inline-flex px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all duration-300 ${
                                            schedule.status === 'Filling Fast' 
                                            ? 'bg-amber-50 text-amber-600 border-amber-100' 
                                            : 'bg-emerald-50 text-emerald-600 border-emerald-100'
                                        }`}>
                                            {schedule.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-8 text-right">
                                        <button
                                            onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
                                            className="inline-flex items-center gap-2 bg-primary text-white font-bold py-3.5 px-8 rounded-xl hover:bg-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 group/btn"
                                        >
                                            <span>Enroll Now</span>
                                            <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>

                {/* Card Layout for Mobile/Tablet */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={STAGGER_CONTAINER}
                    className="lg:hidden space-y-6"
                >
                    {schedules.map((schedule, idx) => (
                        <motion.div
                            key={idx}
                            variants={CARD_VARIANTS}
                            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm relative overflow-hidden"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">{schedule.month}</p>
                                    <p className="text-lg font-black text-primary">{schedule.dates}</p>
                                </div>
                                <span className={`inline-flex px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${
                                    schedule.status === 'Filling Fast' 
                                    ? 'bg-amber-50 text-amber-600 border-amber-100' 
                                    : 'bg-emerald-50 text-emerald-600 border-emerald-100'
                                }`}>
                                    {schedule.status}
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold text-primary mb-6">
                                {schedule.course}
                            </h3>

                            <div className="space-y-4 mb-8 text-slate-600 font-semibold">
                                <div className="flex items-center gap-4">
                                    <Clock size={18} className="text-accent shrink-0" />
                                    <span>{schedule.time}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <MapPin size={18} className="text-accent shrink-0" />
                                    <span>{schedule.format}</span>
                                </div>
                            </div>

                            <button
                                onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
                                className="w-full flex items-center justify-center gap-2 bg-primary text-white font-bold py-4 rounded-2xl hover:bg-accent transition-all duration-300"
                            >
                                Enroll Now
                                <ArrowRight size={18} />
                            </button>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
