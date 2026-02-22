"use client";

import { motion } from 'framer-motion';
import { Network, MonitorPlay, Briefcase } from 'lucide-react';
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
        title: "Project Management",
        description: "Providing a wide range of experienced project delivery personnel to help achieve business outcomes.",
        href: "/project-management",
        bgColor: "bg-white",
        textColor: "text-slate-900",
        borderColor: "border-slate-200",
    },
    {
        icon: MonitorPlay,
        title: "Training",
        description: "Equipping organisations and individuals with the skills to achieve project outcomes, through bespoke, public or global certification training.",
        href: "/training",
        bgColor: "bg-primary text-white", // Deep Executive Blue
        textColor: "text-white",
        borderColor: "border-primary-600/20",
    },
    {
        icon: Briefcase,
        title: "Consulting",
        description: "Improving client project management maturity through consulting to create appropriate structure around project delivery, governance, process and tools.",
        href: "/consulting",
        bgColor: "bg-white",
        textColor: "text-slate-900",
        borderColor: "border-slate-200",
    },
];

export default function BentoGrid() {
    return (
        <section id="services" className="section bg-slate-50/50 relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-30">
                <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
                <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-accent/5 blur-[120px] rounded-full" />
            </div>

            <div className="container-custom relative z-10">
                {/* Header */}
                <div className="mb-16 md:mb-24 px-4 md:px-0 max-w-3xl">
                    <span className="label-tag mb-4 block text-accent font-bold">Our services</span>
                    <h2 className="text-[clamp(32px,5vw,56px)] font-black leading-[1.1] tracking-tighter text-primary">
                        Power Your <span className="text-slate-400">Project Strategy</span>
                    </h2>
                </div>

                <motion.div
                    variants={CONTAINER_VARIANTS}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-wrap justify-center lg:justify-start gap-8 px-4 md:px-0"
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.title}
                            variants={CARD_VARIANTS}
                            className={`w-full lg:w-[calc(33.333%-22px)] min-h-[520px] p-10 md:p-12 flex flex-col justify-start box-border text-left rounded-tl-[80px] rounded-br-[80px] lg:rounded-tl-[100px] lg:rounded-br-[100px] ${service.bgColor} border ${service.borderColor} shadow-sm backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 group/card`}
                        >
                            <Link href={service.href} className="flex flex-col h-full focus:outline-none">
                                {/* Icon Container */}
                                <div className={`mb-10 w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500 ${service.title === "Training" ? 'bg-white/10' : 'bg-primary/5'} group-hover/card:scale-110 group-hover/card:rotate-3`}>
                                    <service.icon size={40} className={service.title === "Training" ? 'text-white' : 'text-primary'} strokeWidth={1.5} />
                                </div>

                                {/* Content Container */}
                                <h3 className={`text-3xl md:text-3xl lg:text-4xl font-black mb-6 tracking-tight leading-[1.2] ${service.textColor}`}>
                                    {service.title}
                                </h3>

                                <p className={`text-lg leading-relaxed mb-auto ${service.textColor} opacity-80 font-medium`}>
                                    {service.description}
                                </p>

                                {/* Action link - Premium Button Style */}
                                <div className={`mt-10 inline-flex items-center gap-2 w-fit px-10 py-5 ${service.title === "Training" ? 'bg-accent text-primary' : 'bg-primary text-white'} font-bold text-sm rounded-tl-[25px] rounded-tr-[25px] rounded-br-[70px] rounded-bl-[25px] shadow-lg transition-all duration-300 group-hover/card:gap-4`}>
                                    Learn More
                                    <div className="w-2 h-[2px] bg-current transition-all group-hover/card:w-4" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
