"use client";

import { motion } from 'framer-motion';

type Stat = { value: string; label: string; suffix?: string };

const DEFAULT_STATS: Stat[] = [
    { value: "98%", label: "Pass Rate", suffix: "" },
    { value: "17+", label: "Years Experience", suffix: "" },
    { value: "5000", label: "Professionals Trained", suffix: "+" },
    { value: "100", label: "Project Success", suffix: "%" },
];

export default function ResultsStats({ items }: { items?: Stat[] } = {}) {
    const stats = items && items.length > 0 ? items : DEFAULT_STATS;
    return (
        <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
            {/* Background design */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 md:gap-16">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-6xl lg:text-7xl font-black text-accent mb-4 tracking-tighter">
                                {stat.value}{stat.suffix}
                            </div>
                            <div className="text-white/60 text-base md:text-xl font-black uppercase tracking-[0.2em]">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
