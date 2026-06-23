"use client";

import { motion } from 'framer-motion';
import { Calendar, Award, Rocket, ShieldCheck, Zap, Globe, LucideIcon } from 'lucide-react';

type Milestone = {
    year: string;
    title: string;
    description: string;
    color?: string;
};

const DEFAULT_MILESTONES: Milestone[] = [
    {
        year: "2007",
        title: "PMBOK 3rd Edition",
        description: "The Foundation: Process Groups & Knowledge Areas. Established the bedrock of structured waterfall methodologies.",
        color: "blue",
    },
    {
        year: "2009",
        title: "PMBOK 4th Edition",
        description: "Integration & Refinement: Enhanced processes and a stronger focus on stakeholder management and project alignment.",
        color: "teal",
    },
    {
        year: "2013",
        title: "PMBOK 5th Edition",
        description: "Adaptive Frameworks: Expanded knowledge areas and introduced 10th knowledge area: Project Stakeholder Management.",
        color: "gold",
    },
    {
        year: "2017",
        title: "PMBOK 6th Edition",
        description: "TheAgileNest & Hybrid Approaches: Embracing change and business agility. Introduced TheAgileNest concepts into the knowledge base.",
        color: "purple",
    },
    {
        year: "2021",
        title: "PMBOK 7th Edition",
        description: "Principle-Based Standards: A shift from processes to performance domains. Value Delivery System and Tailoring.",
        color: "orange",
    },
    {
        year: "2024+",
        title: "PMBOK 8th Edition (Future)",
        description: "AI Powered Ecosystems: Autonomous optimization, predictive analytics, and decentralized project governance.",
        color: "blue",
    }
];

const COLOR_MAP: Record<string, { bg: string; shadow: string; icon: LucideIcon }> = {
    blue: { bg: "bg-blue-500", shadow: "shadow-blue-500/20", icon: Rocket },
    green: { bg: "bg-green-500", shadow: "shadow-green-500/20", icon: ShieldCheck },
    purple: { bg: "bg-purple-500", shadow: "shadow-purple-500/20", icon: Globe },
    orange: { bg: "bg-orange-500", shadow: "shadow-orange-500/20", icon: Award },
    teal: { bg: "bg-teal-500", shadow: "shadow-teal-500/20", icon: ShieldCheck },
    gold: { bg: "bg-yellow-500", shadow: "shadow-yellow-500/20", icon: Zap },
};

type EvolutionTimelineProps = {
    milestones?: Milestone[];
};

export default function EvolutionTimeline({ milestones: cmsMilestones }: EvolutionTimelineProps = {}) {
    const milestones = cmsMilestones && cmsMilestones.length > 0 ? cmsMilestones : DEFAULT_MILESTONES;
    return (
        <div id="evolution" className="relative py-20 px-4 md:px-0 max-w-6xl mx-auto scroll-mt-24">
            {/* Background Line (Desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-100 via-blue-200 to-blue-100 -translate-x-1/2 rounded-full" />

            <div className="space-y-16 md:space-y-32">
                {milestones.map((milestone, index) => {
                    const colorKey = milestone.color || "blue";
                    const colorStyle = COLOR_MAP[colorKey] || COLOR_MAP.blue;
                    const Icon = colorStyle.icon;
                    
                    return (
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
                            <div className={`p-8 md:p-10 rounded-[40px] bg-white border border-slate-100 shadow-xl ${colorStyle.shadow} transition-transform hover:-translate-y-2 group`}>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`w-14 h-14 rounded-2xl ${colorStyle.bg} flex items-center justify-center text-white shadow-lg`}>
                                        <Icon size={28} />
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
                            <div className={`absolute inset-0 ${colorStyle.bg} opacity-0 group-hover:opacity-10 transition-opacity`} />
                            <Calendar size={32} className="text-slate-400 group-hover:scale-110 transition-transform" />
                        </div>

                        {/* Spacer for reverse layout */}
                        <div className="flex-1 hidden md:block" />
                    </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
