"use client";

import { motion } from 'framer-motion';
import { CheckCircle2, Layout, Landmark, ClipboardCheck, Ruler, Lightbulb } from 'lucide-react';

const pillars = [
    {
        title: "Feasibility & Masterplanning",
        description: "Creating and reviewing feasibility studies, preparing business cases, and overseeing masterplanning designs.",
        icon: <Landmark className="text-white" size={24} />,
    },
    {
        title: "Planning & Programming",
        description: "Developing and managing detailed project schedules to meet goals and minimize business interruptions.",
        icon: <Layout className="text-white" size={24} />,
    },
    {
        title: "Construction Management",
        description: "Building project setups and overseeing work to ensure projects are buildable and cost-effective.",
        icon: <Ruler className="text-white" size={24} />,
    },
    {
        title: "Sustainability Advice",
        description: "Expert guidance on sustainable design and steps toward NZGBC Greenstar certification.",
        icon: <Lightbulb className="text-white" size={24} />,
    },
    {
        title: "Engineer to Contract",
        description: "Independent certification and expert advice on construction contracts and defect resolution.",
        icon: <ClipboardCheck className="text-white" size={24} />,
    },
    {
        title: "Client Advisory",
        description: "Thorough development and commercial advice, covering land acquisition and project financing.",
        icon: <CheckCircle2 className="text-white" size={24} />,
    }
];

export default function ConsultancyDetail() {
    return (
        <section id="consultancy" className="section bg-white overflow-hidden">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                    <div className="lg:w-1/2">
                        <span className="text-accent font-extrabold tracking-[0.2em] uppercase text-[9px] md:text-[10px] mb-6 block">Specialized Advisory</span>
                        <h2 className="h2 mb-10 leading-tight">Bespoke consultancy for high-stakes projects.</h2>
                        <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-12 font-medium opacity-80">
                            We provide independent, expert-led advisory services that ensure project success from inception to delivery. Our approach is rooted in 17+ years of industrial experience.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-16">
                            {pillars.map((pillar, index) => (
                                <div key={index} className="flex flex-col group">
                                    <div className="mb-6 w-12 h-12 rounded-xl bg-accent flex items-center justify-center shadow-premium group-hover:scale-110 group-hover:bg-primary transition-all duration-500">{pillar.icon}</div>
                                    <h4 className="text-lg md:text-xl font-extrabold text-primary mb-3 tracking-tight uppercase">{pillar.title}</h4>
                                    <p className="text-[15px] text-slate-500 leading-relaxed font-medium opacity-70">{pillar.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative w-full">
                        <div className="absolute -inset-4 bg-accent/5 rounded-[40px] md:rounded-[60px] blur-2xl -rotate-3 md:-rotate-6"></div>
                        <div className="relative rounded-[40px] md:rounded-[60px] overflow-hidden border border-slate-100 shadow-premium aspect-[4/5] md:aspect-auto md:h-[700px]">
                            <img
                                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80"
                                alt="Consultancy Site"
                                className="w-full h-full object-cover grayscale-[5%] hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent"></div>
                            <div className="absolute font-bold bottom-10 left-10 right-10 md:bottom-16 md:left-16 md:right-16 text-white text-center md:text-left">
                                <div className="text-[10px] md:text-xs uppercase font-bold tracking-[0.2em] text-accent mb-4 opacity-100">Real World Impact</div>
                                <div className="text-2xl md:text-4xl leading-[1.2] tracking-tight">Managing infrastructure projects across New Zealand.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
