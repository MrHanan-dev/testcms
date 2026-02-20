"use client";

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { TrendingUp, Users, Landmark } from 'lucide-react';

const stats = [
    {
        icon: Landmark,
        value: 500,
        suffix: "+",
        label: "Projects Managed",
        description: "Infrastructure, commercial, and tech projects delivered with precision.",
    },
    {
        icon: Users,
        value: 2000,
        suffix: "+",
        label: "Individuals Trained",
        description: "Professionals certified through our PMI-accredited programs.",
    },
    {
        icon: TrendingUp,
        value: 50,
        prefix: "$",
        suffix: "M+",
        label: "Cost Savings Delivered",
        description: "Client savings through optimized estimation and strategic advisory.",
    },
];

function Counter({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

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
        <span ref={ref} className="text-4xl md:text-5xl font-black text-primary tracking-tight">
            {prefix}{count.toLocaleString()}{suffix}
        </span>
    );
}

export default function Stats() {
    return (
        <section className="section bg-white relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/3 rounded-full blur-[120px]" />

            <div className="container-custom relative z-10">
                <div className="text-center mb-16">
                    <span className="label-tag mb-5 block">By The Numbers</span>
                    <h2 className="h2 mb-6 max-w-3xl mx-auto">
                        Impact that <span className="text-accent">speaks for itself.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="tactile-card text-center group"
                        >
                            <div className="w-14 h-14 bg-accent/8 rounded-2xl flex items-center justify-center text-accent mx-auto mb-6 group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                                <stat.icon size={24} />
                            </div>
                            <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                            <h3 className="text-sm font-black uppercase tracking-[0.15em] text-primary mt-3 mb-2">
                                {stat.label}
                            </h3>
                            <p className="text-sm text-foreground/50 font-medium leading-relaxed">
                                {stat.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
