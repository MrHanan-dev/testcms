"use client";

import { motion } from 'framer-motion';
import { GraduationCap, Calculator, Briefcase, Target, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        icon: GraduationCap,
        title: "Professional Training",
        description: "PMI-accredited PMP®, CAPM®, and Agile certification programs with a 100% first-attempt pass rate.",
        href: "#training",
    },
    {
        icon: Calculator,
        title: "Cost Estimation & QS",
        description: "AI-driven quantity surveying and cost advisory for construction, infrastructure, and technology projects.",
        href: "#estimation",
    },
    {
        icon: Briefcase,
        title: "Strategic Consulting",
        description: "End-to-end project delivery advisory — from PMO establishment to agile transformation and audit.",
        href: "#consultancy",
    },
    {
        icon: Target,
        title: "Programme Delivery",
        description: "Hands-on programme management for complex multi-stakeholder infrastructure and commercial builds.",
        href: "#delivery",
    },
];

export default function BentoGrid() {
    return (
        <section id="services" className="section bg-white">
            <div className="container-custom">
                <div className="max-w-2xl mb-16">
                    <span className="label-tag mb-4 block">What We Do</span>
                    <h2 className="h2 mb-4">
                        Services built for{' '}
                        <span className="text-accent">results.</span>
                    </h2>
                    <p className="subheader">
                        Four pillars of expertise — unified under one mission.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-px bg-slate-200/60 border border-slate-200/60 rounded-lg overflow-hidden">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                        >
                            <Link href={service.href} className="block h-full">
                                <div className="service-card bg-white h-full flex flex-col group">
                                    {/* Icon — line-art gold, moves up 5px on hover */}
                                    <div className="service-icon w-14 h-14 border border-accent/20 rounded-lg flex items-center justify-center mb-6 transition-all duration-500">
                                        <service.icon size={26} className="text-accent" strokeWidth={1.5} />
                                    </div>

                                    {/* Title */}
                                    <h3 className="h3 mb-3">{service.title}</h3>

                                    {/* Description */}
                                    <p className="text-foreground/50 leading-relaxed text-[15px] mb-6 flex-1">
                                        {service.description}
                                    </p>

                                    {/* CTA — "Learn More →" with arrow hover */}
                                    <div className="flex items-center text-charcoal text-sm font-bold gap-2 group-hover:text-accent transition-colors duration-300 mt-auto">
                                        Learn More
                                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
