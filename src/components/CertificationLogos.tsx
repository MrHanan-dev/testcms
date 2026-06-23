"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Award, Briefcase, HardHat, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const DEFAULT_CERTS = [
    {
        name: "PMP",
        title: "Project Management Professional",
        href: "/pmp",
        color: "from-blue-500 to-blue-700",
        shadowHover: "hover:shadow-blue-500/25",
        icon: Briefcase,
        image: "/certifications/pmp.webp"
    },
    {
        name: "CAPM",
        title: "Certified Associate in Project Management",
        href: "/capm",
        color: "from-teal-500 to-teal-700",
        shadowHover: "hover:shadow-teal-500/25",
        icon: Award,
        image: "/certifications/capm.webp"
    },
    {
        name: "PMI-CP",
        title: "PMI Construction Professional",
        href: "/pmicp",
        color: "from-amber-600 to-amber-800",
        shadowHover: "hover:shadow-amber-500/25",
        icon: HardHat,
        image: "/certifications/pmi-cp.webp"
    }
];

type CertItem = { name?: string; title?: string; href?: string; image?: string };

type CertProps = {
    eyebrow?: string;
    headingLead?: string;
    headingMuted?: string;
    items?: CertItem[];
};

export default function CertificationLogos({
    eyebrow = "Elite Credentials",
    headingLead = "Global Benchmarks",
    headingMuted = "for Project Leaders",
    items,
}: CertProps = {}) {
    const certifications = DEFAULT_CERTS.map((base, i) => {
        const c = items?.[i];
        return c
            ? {
                  ...base,
                  name: c.name || base.name,
                  title: c.title || base.title,
                  href: c.href || base.href,
                  image: c.image || base.image,
              }
            : base;
    });
    return (
        <section className="py-32 md:py-48 bg-white relative overflow-hidden">
            {/* Subtle elite background */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
            </div>

            <div className="container-custom relative z-10">
                <div className="mb-24 text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/5 text-2xl md:text-3xl font-black uppercase tracking-[0.4em] text-primary mb-8"
                    >
                        {eyebrow}
                    </motion.div>
                    <h2 className="text-[clamp(32px,5vw,56px)] font-black text-primary leading-[1.05] tracking-tight mb-8">
                        {headingLead} <br />
                        <span className="text-slate-400">{headingMuted}</span>
                    </h2>
                    <div className="w-20 h-1 bg-accent mx-auto mb-10 rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <Link
                                href={cert.href}
                                className="group relative block h-full bg-white rounded-[56px] p-12 lg:p-14 border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] transition-all duration-700 hover:shadow-[0_40px_80px_rgba(11,60,93,0.08)] hover:-translate-y-4 overflow-hidden"
                            >
                                {/* Elite Glow Effect */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-700`} />
                                
                                {/* Background Title for Texture */}
                                <div className="absolute -bottom-10 -right-10 text-9xl font-black text-primary/[0.02] pointer-events-none group-hover:text-primary/[0.05] transition-colors duration-700 select-none">
                                    {cert.name}
                                </div>

                                {/* Image / Logo Container */}
                                <div className="relative mb-16 aspect-square max-w-[240px] mx-auto group-hover:scale-110 transition-transform duration-700 ease-out">
                                    <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    <Image
                                        src={cert.image}
                                        alt={`${cert.name} Badge`}
                                        fill
                                        className="object-contain relative z-10 drop-shadow-[0_30px_60px_rgba(0,0,0,0.15)]"
                                    />
                                </div>

                                <div className="relative z-10">
                                    <h3 className="text-5xl font-black text-primary mb-4 tracking-tighter transition-colors duration-500 group-hover:text-accent">
                                        {cert.name}
                                    </h3>
                                    <p className="text-lg font-bold text-slate-500 leading-snug max-w-[200px]">
                                        {cert.title}
                                    </p>
                                </div>

                                {/* High-End Action Indicator */}
                                <div className="mt-12 flex items-center justify-between">
                                    <div className="w-12 h-[2px] bg-slate-100 group-hover:w-full group-hover:bg-accent transition-all duration-700 origin-left" />
                                    <ArrowRight size={20} className="text-slate-200 group-hover:text-accent transition-colors duration-700 ml-4 shrink-0" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
