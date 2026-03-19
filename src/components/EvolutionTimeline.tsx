"use client";

import { motion } from 'framer-motion';
import { Calendar, Award, Rocket, ShieldCheck, Zap, Globe } from 'lucide-react';

const milestones = [
    {
        year: "2007",
        title: "PMBOK 3rd Edition",
        description: "The Foundation: Process Groups & Knowledge Areas. Established the bedrock of structured waterfall methodologies.",
        icon: Rocket,
        color: "bg-blue-500",
        shadow: "shadow-blue-500/20"
    },
    {
        year: "2009",
        title: "PMBOK 4th Edition",
        description: "Integration & Refinement: Enhanced processes and a stronger focus on stakeholder management and project alignment.",
        icon: ShieldCheck,
        color: "bg-teal-500",
        shadow: "shadow-teal-500/20"
    },
    {
        year: "2013",
        title: "PMBOK 5th Edition",
        description: "Adaptive Frameworks: Expanded knowledge areas and introduced 10th knowledge area: Project Stakeholder Management.",
        icon: Zap,
        color: "bg-yellow-500",
        shadow: "shadow-yellow-500/20"
    },
    {
        year: "2017",
        title: "PMBOK 6th Edition",
        description: "TotalPMP & Hybrid Approaches: Embracing change and business agility. Introduced TotalPMP concepts into the knowledge base.",
        icon: Globe,
        color: "bg-purple-500",
        shadow: "shadow-purple-500/20"
    },
    {
        year: "2021",
        title: "PMBOK 7th Edition",
        description: "Principle-Based Standards: A shift from processes to performance domains. Value Delivery System and Tailoring.",
        icon: Award,
        color: "bg-orange-500",
        shadow: "shadow-orange-500/20"
    },
    {
        year: "2024+",
        title: "PMBOK 8th Edition (Future)",
        description: "AI Powered Ecosystems: Autonomous optimization, predictive analytics, and decentralized project governance.",
        icon: Rocket,
        color: "bg-blue-600",
        shadow: "shadow-blue-600/20"
    }
];

export default function EvolutionTimeline() {
    return (
        <div id="evolution" className="relative py-20 px-4 md:px-0 max-w-6xl mx-auto scroll-mt-24">
            {/* Background Line (Desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-100 via-blue-200 to-blue-100 -translate-x-1/2 rounded-full" />

            <div className="space-y-16 md:space-y-32">
                {milestones.map((milestone, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                            }`}
                    >
                        {/* Content Card */}
                        <div className="flex-1 w-full">
                            <div className={`p-8 md:p-10 rounded-[40px] bg-white border border-slate-100 shadow-xl ${milestone.shadow} transition-transform hover:-translate-y-2 group`}>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`w-14 h-14 rounded-2xl ${milestone.color} flex items-center justify-center text-white shadow-lg`}>
                                        <milestone.icon size={28} />
                                    </div>
                                    <span className="text-2xl font-black text-slate-300 tracking-tighter group-hover:text-primary transition-colors">{milestone.year}</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-black text-primary mb-4 leading-tight">
                                    {milestone.title}
                                </h3>
                                <p className="text-slate-500 text-lg leading-relaxed font-medium">
                                    {milestone.description}
                                </p>
                            </div>
                        </div>

                        {/* Center Icon (Desktop) */}
                        <div className="hidden md:flex flex-shrink-0 w-24 h-24 rounded-full bg-white border-4 border-slate-50 z-10 items-center justify-center shadow-lg mx-8 overflow-hidden relative group">
                            <div className={`absolute inset-0 ${milestone.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                            <Calendar size={32} className="text-slate-400 group-hover:scale-110 transition-transform" />
                        </div>

                        {/* Spacer for reverse layout */}
                        <div className="flex-1 hidden md:block" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
