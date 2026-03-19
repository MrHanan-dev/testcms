"use client";

import { motion } from 'framer-motion';
import { Target, Users, BarChart4, Rocket } from 'lucide-react';

const steps = [
    {
        icon: <Target className="w-8 h-8" />,
        title: "1. Strategic Discovery",
        description: "We begin by understanding your unique organizational challenges and project landscape to tailor our expertise."
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: "2. Expert-Led Training",
        description: "Our certified professionals impart immersive PMP and CAPM training, rooted in real world industrial situations."
    },
    {
        icon: <BarChart4 className="w-8 h-8" />,
        title: "3. Bespoke Consultancy",
        description: "From masterplanning to construction oversight, we provide high-fidelity advisory to ensure project success."
    },
    {
        icon: <Rocket className="w-8 h-8" />,
        title: "4. Lasting Impact",
        description: "We empower your team to sustain growth, optimize workflows, and deliver measurable project outcomes."
    }
];

export default function Process() {
    return (
        <section className="section bg-white overflow-hidden">
            <div className="container-custom">
                <div className="max-w-3xl mb-20">
                    <span className="text-accent font-extrabold tracking-[0.2em] uppercase text-[10px] mb-6 block">The Methodology</span>
                    <h2 className="h2 max-w-2xl">A framework for precision and project excellence.</h2>
                </div>

                <div className="relative">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group p-10 rounded-[40px] glass-crystal shadow-soft hover:shadow-premium transition-all duration-500 flex flex-col items-center text-center"
                            >
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary mb-10 shadow-premium group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-extrabold text-primary mb-4 tracking-tight">{step.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed font-medium opacity-80">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
