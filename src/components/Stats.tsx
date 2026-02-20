"use client";

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const stats = [
    { value: 500, suffix: "+", label: "Projects Managed" },
    { value: 2000, suffix: "+", label: "Professionals Trained" },
    { value: 52, prefix: "$", suffix: "M+", label: "Client Savings" },
];

function Counter({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!isInView) return;
        const duration = 2000;
        const steps = 60;
        const increment = value / steps;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);
        return () => clearInterval(timer);
    }, [isInView, value]);

    return (
        <span ref={ref} className="block">
            <span className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-dense leading-none">
                {prefix}{count.toLocaleString()}{suffix}
            </span>
        </span>
    );
}

export default function Stats() {
    return (
        <section className="bg-primary py-24 md:py-32 relative overflow-hidden">
            {/* Subtle accent glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />

            <div className="container-custom relative z-10">
                <div className="text-center mb-16">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent/70 block mb-4">
                        The Numbers
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-dense leading-tight">
                        Impact that speaks for itself.
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-12 md:gap-8 max-w-4xl mx-auto">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="text-center"
                        >
                            <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent mt-4">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
