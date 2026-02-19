"use client";

import { motion } from 'framer-motion';
import { Target, Users, BarChart4, Rocket } from 'lucide-react';

const steps = [
    {
        icon: <Target className="w-8 h-8" />,
        title: "1. Strategy & Risk Assessment",
        description: "Every successful project begins with precision. We analyze your project's DNA, identifying risks and opportunities through our deep industry expertise."
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: "2. Training & Empowerment",
        description: "We equip your team with the PMP certifications and advanced project management methodologies required to lead complex local and global initiatives."
    },
    {
        icon: <BarChart4 className="w-8 h-8" />,
        title: "3. AI-Powered Estimation",
        description: "Using proprietary TotalPMP algorithms, we generate high-precision cost data, ensuring your budget aligns perfectly with your architectural and construction goals."
    },
    {
        icon: <Rocket className="w-8 h-8" />,
        title: "4. Execution & ROI Mastery",
        description: "We oversee the transition from plan to reality, continuously optimizing workflows to deliver maximum return on investment and zero waste."
    }
];

export default function Process() {
    return (
        <section className="section bg-gray-50 overflow-hidden">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="h2 mb-4">Our Methodology</h2>
                    <p className="text-xl text-gray-600">The TotalPMP blueprint for project success and financial precision.</p>
                </div>

                <div className="relative">
                    {/* Connector Line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/10 -translate-y-1/2 z-0" />

                    <div className="grid lg:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:shadow-lg transition-all duration-300"
                            >
                                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-6 shadow-lg shadow-primary/20 group-hover:bg-accent transition-colors duration-300">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
