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
        let start = 0;
        const end = value;
        const duration = 2.5; // seconds

        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
            // Ease out expo for a more premium feel
            const easeProgress = 1 - Math.pow(2, -10 * progress);
            const currentCount = Math.floor(easeProgress * (end - start) + start);
            setCount(currentCount);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                setCount(end);
            }
        };
        window.requestAnimationFrame(step);
    }, [isInView, value]);

    return (
        <span ref={ref} className="block overflow-hidden">
            <motion.span
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : { y: "100%" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="block text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-none"
            >
                {prefix}{count.toLocaleString()}{suffix}
            </motion.span>
        </span>
    );
}

export default function Stats() {
    return (
        <section className="bg-primary py-28 md:py-40">
            <div className="container-custom">
                <div className="grid md:grid-cols-3 gap-16 md:gap-12 max-w-5xl mx-auto text-center">
                    {stats.map((stat, index) => (
                        <div key={stat.label} className="relative">
                            <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                className="label-tag mt-6"
                            >
                                {stat.label}
                            </motion.p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
