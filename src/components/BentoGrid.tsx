"use client";

import { motion } from 'framer-motion';
import { Network, MonitorPlay, Briefcase } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        icon: Network,
        title: "Project Management",
        description: "Providing a wide range of experienced project delivery personnel to help achieve business outcomes.",
        href: "#consultancy",
        bgColor: "bg-[#dcf2fd]",
        textColor: "text-[#333333]",
    },
    {
        icon: MonitorPlay,
        title: "Training",
        description: "Equipping organisations and individuals with the skills to achieve project outcomes, through bespoke, public or global certification training.",
        href: "#training",
        bgColor: "bg-[#31acee]",
        textColor: "text-white",
    },
    {
        icon: Briefcase,
        title: "Consulting",
        description: "Improving client project management maturity through consulting to create appropriate structure around project delivery, governance, process and tools.",
        href: "#consulting",
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
                            className={`w-full sm:w-[calc(50%-16px)] lg:w-[350px] min-h-[400px] p-10 flex flex-col justify-start box-border text-left rounded-tl-[60px] rounded-br-[60px] ${service.bgColor} ${service.textColor} transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/10`}
                        >
                            <Link href={service.href} className="flex flex-col h-full focus:outline-none">
                                {/* Icon Container */}
                                <div className="mb-10">
                                    <service.icon size={48} strokeWidth={1.5} />
                                </div>

                                {/* Content Container */}
                                <h3 className={`text-[24px] font-medium mb-4 tracking-tight ${service.textColor}`}>
                                    {service.title}
                                </h3>

                                <p className={`text-[16px] leading-[1.6] mb-10 flex-grow ${service.textColor} opacity-90`}>
                                    {service.description}
                                </p>

                                {/* Action link */}
                                <div className="inline-block w-fit px-8 py-3.5 bg-white text-[#333] font-medium transition-transform duration-300 hover:scale-105 rounded-tl-[15px] rounded-tr-[15px] rounded-br-[50px] rounded-bl-[15px] shadow-sm">
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
