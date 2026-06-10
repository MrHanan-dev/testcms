"use client";

import { motion } from 'framer-motion';
import { Network, MonitorPlay, Calculator, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Constants for Clean Code
const STAGGER_TRANSITION = {
    staggerChildren: 0.1,
    delayChildren: 0.1
};

const CARD_VARIANTS = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
};

const CONTAINER_VARIANTS = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: STAGGER_TRANSITION
    }
};

const services = [
    {
        icon: Network,
        title: "Project Mannnnngement Consultancy",
        subtitle: "Precision Execution",
        description: "Planning, leadership, controls, and delivery support for successful outcomes.",
        href: "/project-management",
        number: "01",
        accent: "bg-blue-400/20",
        btnText: "Explore Services"
    },
    {
        icon: Calculator,
        title: "Cost Management & Quantity Surveying",
        subtitle: "Budget Control",
        description: "Accurate estimating, valuations, commercial controls, and contract administration that protect project value.",
        href: "/cost-estimation",
        number: "02",
        isDark: true,
        accent: "bg-accent/40",
        btnText: "Explore Services"
    },
    {
        icon: MonitorPlay,
        title: "Professional Training",
        subtitle: "Expert Certification",
        description: "Practical PMP®, project management, and customised training programs that build high-performing capability.",
        href: "/training",
        number: "03",
        accent: "bg-blue-400/20",
        btnText: "Explore Programs"
    },
];

export default function BentoGrid() {
    return (
        <section id="services" className="section relative overflow-hidden py-20 md:py-48 bg-[#F8FAFC]">
            {/* Ultra-Premium Background Decoration */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-[1000px] bg-gradient-to-b from-primary/[0.03] to-transparent" />
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-[140px] opacity-60" />
                <div className="absolute top-1/2 -left-24 w-80 h-80 bg-primary/5 rounded-full blur-[120px] opacity-40" />
                
                {/* Floating Geometric Elements */}
                <motion.div 
                    animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 right-[10%] w-24 h-24 border border-primary/10 rounded-[20px] opacity-20 hidden lg:block"
                />
                <motion.div 
                    animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-1/4 left-[15%] w-32 h-32 border border-accent/20 rounded-full opacity-20 hidden lg:block"
                />
            </div>

            <div className="container-custom relative z-10">
                {/* Master Header */}
                <div className="mb-16 md:mb-36 text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6 md:mb-10"
                    >
                        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        <span className="text-2xl md:text-3xl font-black uppercase tracking-[0.3em] text-primary">Our Expertise</span>
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[clamp(36px,8vw,80px)] font-black leading-[0.95] tracking-tight text-primary mb-8 md:mb-12"
                    >
                        Our Expertise: <br />
                        <span className="text-slate-400">Empowering Professionals. Transforming Projects</span>
                    </motion.h2>
                    
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="w-24 h-[1px] bg-slate-200 mx-auto mb-8 md:mb-12"
                    />
                </div>

                <motion.div
                    variants={CONTAINER_VARIANTS}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            variants={CARD_VARIANTS}
                            whileHover={{ y: -12 }}
                            className={`group relative flex flex-col min-h-[500px] md:min-h-[600px] rounded-[40px] md:rounded-[56px] p-8 md:p-14 transition-all duration-700 ease-[0.23,1,0.32,1] overflow-hidden border ${service.isDark ? 'bg-primary border-white/10 shadow-[0_40px_80px_-15px_rgba(11,60,93,0.4)]' : 'bg-white border-slate-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)]'}`}
                        >
                            {/* Inner Glow Effect */}
                            <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-br ${service.isDark ? 'from-white/[0.05] to-transparent' : 'from-accent/[0.03] to-transparent'} opacity-100 transition-opacity duration-700`} />
                            
                            {/* Card Numbering - Refined */}
                            <div className={`absolute top-12 right-12 text-8xl font-black leading-none opacity-[0.03] pointer-events-none group-hover:opacity-[0.08] group-hover:scale-125 transition-all duration-1000 ${service.isDark ? 'text-white' : 'text-primary'}`}>
                                {service.number}
                            </div>

                            {/* Decorative Corner Element */}
                            <div className={`absolute -top-12 -left-12 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 ${service.isDark ? 'bg-accent' : 'bg-primary'}`} />

                            {/* Icon - More Dramatic */}
                            <div className={`relative z-10 mb-12 md:mb-16 w-20 h-20 md:w-24 md:h-24 rounded-[24px] md:rounded-[32px] flex items-center justify-center transition-all duration-700 shadow-xl group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] group-hover:-rotate-6 ${service.isDark ? 'bg-white text-primary' : 'bg-primary text-white'}`}>
                                <service.icon size={36} className="md:w-[44px] md:h-[44px]" strokeWidth={1} />
                            </div>

                            {/* Content Hierarchy */}
                            <div className="relative z-10 flex-1">
                                <motion.span 
                                    className={`text-sm font-black uppercase tracking-[0.4em] mb-4 block transition-colors duration-500 ${service.isDark ? 'text-accent' : 'text-accent'}`}
                                >
                                    {service.subtitle}
                                </motion.span>
                                <h3 className={`text-2xl md:text-4xl font-black mb-6 md:mb-8 tracking-tighter leading-[1.05] transition-transform duration-700 group-hover:translate-x-1 ${service.isDark ? 'text-white' : 'text-primary'}`}>
                                    {service.title}
                                </h3>
                                <p className={`text-lg leading-relaxed font-medium transition-opacity duration-500 max-w-[280px] ${service.isDark ? 'text-white/70 group-hover:text-white/90' : 'text-slate-500 group-hover:text-slate-700'}`}>
                                    {service.description}
                                </p>
                            </div>

                            {/* Action Button - High End */}
                            <Link 
                                href={service.href} 
                                className="relative z-10 mt-16 group/btn"
                            >
                                <div className={`flex items-center gap-4 transition-all duration-500 group-hover/btn:gap-6`}>
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${service.isDark ? 'bg-accent text-primary group-hover/btn:scale-110' : 'bg-primary text-white group-hover/btn:scale-110'}`}>
                                        <ArrowRight size={20} strokeWidth={2.5} />
                                    </div>
                                    <span className={`text-sm font-black uppercase tracking-[0.2em] ${service.isDark ? 'text-white' : 'text-primary'}`}>
                                        {service.btnText}
                                    </span>
                                </div>
                            </Link>

                            {/* Premium Card Border Shadow (Bottom only) */}
                            <div className="absolute bottom-0 left-0 w-full h-[6px] bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
