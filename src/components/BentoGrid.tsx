"use client";

import { motion } from 'framer-motion';
import { Network, MonitorPlay, Briefcase } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        icon: Network,
        title: "Project Management",
        description: "Providing a wide range of experienced project delivery personnel to help achieve business outcomes.",
        href: "/project-management",
        bgColor: "bg-[#dcf2fd]",
        textColor: "text-[#333333]",
    },
    {
        icon: MonitorPlay,
        title: "Training",
        description: "Equipping organisations and individuals with the skills to achieve project outcomes, through bespoke, public or global certification training.",
        href: "/training",
        bgColor: "bg-[#31acee]",
        textColor: "text-white",
    },
    {
        icon: Briefcase,
        title: "Consulting",
        description: "Improving client project management maturity through consulting to create appropriate structure around project delivery, governance, process and tools.",
        href: "/consulting",
        bgColor: "bg-[#dcf2fd]",
        textColor: "text-[#333333]",
    },
];

export default function BentoGrid() {
    return (
        <section id="services" className="section bg-white bg-opacity-50">
            <div className="container-custom">
                {/* Header */}
                <div className="mb-16 md:mb-24 px-4 md:px-0">
                    <span className="label-tag mb-4 block">Our services</span>
                    <h2 className="text-[clamp(32px,5vw,56px)] font-bold leading-[1.1] tracking-dense text-primary">
                        Power your<br />project
                    </h2>
                </div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1,
                                delayChildren: 0.1
                            }
                        }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-wrap justify-center lg:justify-start gap-8 px-4 md:px-0"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                                }
                            }}
                            className={`w-full lg:w-[calc(33.333%-24px)] min-h-[500px] p-12 md:p-14 lg:p-16 flex flex-col justify-start box-border text-left rounded-tl-[80px] rounded-br-[80px] lg:rounded-tl-[100px] lg:rounded-br-[100px] ${service.bgColor} ${service.textColor} transition-all duration-700 ease-out hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-900/10 group/card`}
                        >
                            <Link href={service.href} className="flex flex-col h-full focus:outline-none">
                                {/* Icon Container */}
                                <div className="mb-14 group-hover/card:scale-110 transition-transform duration-500 origin-left">
                                    <service.icon size={64} strokeWidth={1.5} />
                                </div>

                                {/* Content Container */}
                                <h3 className={`text-3xl md:text-4xl lg:text-5xl font-black mb-8 tracking-tight leading-[1.1] ${service.textColor}`}>
                                    {service.title}
                                </h3>

                                <p className={`text-lg md:text-xl lg:text-2xl leading-relaxed mb-14 flex-grow ${service.textColor} opacity-80 font-medium`}>
                                    {service.description}
                                </p>

                                {/* Action link */}
                                <div className="inline-block w-fit px-12 py-5 bg-white text-[#333] font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:scale-105 rounded-tl-[25px] rounded-tr-[25px] rounded-br-[70px] rounded-bl-[25px] shadow-lg hover:shadow-xl">
                                    Learn More
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
