"use client";

import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceHeroProps {
    title: string;
    description: string;
    gradientClass: string;
    breadcrumb: string;
}

export default function ServiceHero({
    title,
    description,
    gradientClass,
    breadcrumb
}: ServiceHeroProps) {
    return (
        <section className={`relative pt-28 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden rounded-bl-[40px] md:rounded-bl-[100px] ${gradientClass}`}>
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 pointer-events-none" />

            <div className="container-custom relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center max-w-4xl mx-auto"
                >
                    {/* Breadcrumb / Back Link */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 hover:bg-white/20 text-white/90 text-[12px] sm:text-sm font-semibold transition-all mb-8 sm:mb-12 hover:-translate-x-1 group"
                    >
                        <ChevronLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
                        Back to Home / {breadcrumb}
                    </Link>

                    <h1 className="text-3xl sm:text-6xl lg:text-7xl font-black text-white mb-6 sm:mb-8 tracking-tight leading-[1.1] px-2">
                        {title}
                    </h1>

                    <p className="text-base sm:text-2xl text-white/80 leading-relaxed font-lg">
                        {description}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
