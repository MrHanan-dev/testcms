"use client";

import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const schedules = [
    {
        month: "March 2026",
        course: "PMP® Certification Bootcamp",
        dates: "March 14, 15, 21, 22",
        time: "9:00 AM - 5:00 PM (NZDT)",
        format: "Live Virtual",
        status: "Filling Fast",
        link: "/contact"
    },
    {
        month: "April 2026",
        course: "PMP® Certification Bootcamp",
        dates: "April 11, 12, 18, 19",
        time: "9:00 AM - 5:00 PM (NZDT)",
        format: "Live Virtual",
        status: "Open",
        link: "/contact"
    },
    {
        month: "May 2026",
        course: "PMP® Certification Bootcamp",
        dates: "May 9, 10, 16, 17",
        time: "9:00 AM - 5:00 PM (NZDT)",
        format: "Live Virtual",
        status: "Open",
        link: "/contact"
    },
    {
        month: "May 2026",
        course: "CAPM® Foundation Course",
        dates: "May 23, 24",
        time: "9:00 AM - 5:00 PM (NZDT)",
        format: "Live Virtual",
        status: "Open",
        link: "/contact"
    }
];

export default function TrainingSchedule() {
    return (
        <section className="py-24 bg-slate-50 border-t border-slate-100">
            <div className="container-custom">
                <div className="max-w-3xl mb-16">
                    <span className="text-accent font-extrabold tracking-[0.2em] uppercase text-[10px] mb-6 block">Upcoming Batches</span>
                    <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight">
                        Monthly Training Schedule
                    </h2>
                    <p className="text-slate-600 text-lg mt-6 max-w-2xl font-medium">
                        Secure your spot in our upcoming certification cohorts. Our live virtual weekends are designed for working professionals to balance career growth with existing commitments.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                    {schedules.map((schedule, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/20 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>

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

                            <Link
                                href={schedule.link}
                                className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors group/link w-full py-4 border-t border-slate-50"
                            >
                                Enroll Now
                                <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
