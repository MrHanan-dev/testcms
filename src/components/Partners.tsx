"use client";

import { motion } from 'framer-motion';

const partners = [
    { name: "Business Canterbury", color: "text-blue-600" },
    { name: "intent Group", color: "text-orange-600" },
    { name: "LUMIFY", color: "text-teal-600" },
    { name: "PMI Adelaide", color: "text-purple-600" },
    { name: "PMI Canberra", color: "text-indigo-600" },
    { name: "PMI Melbourne", color: "text-pink-600" }
];

export default function Partners() {
    // Duplicate the partners list so the marquee scroll perfectly loops without gaps
    const duplicatedPartners = [...partners, ...partners, ...partners];

    return (
        <section className="py-20 md:py-32 bg-slate-50 overflow-hidden relative border-y border-slate-100">
            <div className="container-custom mb-16">
                <div className="flex flex-col items-center text-center">
                    <span className="text-accent font-extrabold tracking-[0.2em] uppercase text-[10px] mb-4 block">
                        Our Partners
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-primary leading-tight max-w-2xl">
                        We work with the best organizations
                    </h2>
                </div>
            </div>

            {/* Marquee Container */}
            <div className="flex overflow-hidden relative w-full group py-8">
                {/* Left and Right Fade Gradients */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex whitespace-nowrap items-center gap-16 md:gap-24 px-8"
                    animate={{
                        x: ['0%', '-33.333%'] // Scroll by exactly one set of the 3 duplicated arrays
                    }}
                    transition={{
                        ease: "linear",
                        duration: 30, // Adjust speed up or down
                        repeat: Infinity,
                    }}
                >
                    {duplicatedPartners.map((partner, index) => (
                        <div
                            key={index}
                            className={`flex-shrink-0 text-2xl md:text-3xl font-extrabold tracking-tight opacity-70 hover:opacity-100 transition-opacity duration-300 ${partner.color}`}
                        >
                            {/* In a real app, map real SVGs or Images here. Using formatted text for now */}
                            {partner.name}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
