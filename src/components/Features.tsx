"use client";

import { ShieldCheck, Zap, TrendingUp, Users, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: <ShieldCheck size={28} />,
    title: "Global Accreditation",
    description: "Our programs follow PMI® international standards, ensuring your certification holds weight in any market, from Auckland to London."
  },
  {
    icon: <Users size={28} />,
    title: "Expert Practitioners",
    description: "Learn from instructors with 17+ years of real world project leadership experience across New Zealand and abroad."
  },
  {
    icon: <Zap size={28} />,
    title: "Industrial Context",
    description: "Go beyond theory. Our training is rooted in actual industrial situations, providing practical solutions to project challenges."
  },
  {
    icon: <TrendingUp size={28} />,
    title: "High Success Rate",
    description: "Our students consistently achieve a 100% exam success rate on their first attempt through our focused mentorship."
  }
];

interface FeaturesProps {
  titleSuffix?: string;
  descriptionSuffix?: string;
}

export default function Features({
  titleSuffix = "PMP® Journey",
  descriptionSuffix = "PMP® training programs"
}: FeaturesProps) {
  return (
    <section id="why-choose-us" className="section bg-slate-50 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent font-extrabold tracking-[0.2em] uppercase text-xs mb-4 block">The Advantage</span>
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 leading-tight">
            Why choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-600">TOTALPMP</span> for Your {titleSuffix}?
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto">
            At TOTALPMP, we deliver one of New Zealand’s, Australia’s and Asia's most comprehensive and industry-ready {descriptionSuffix}, designed to help you pass on your first attempt and excel in real-world project environments.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Features Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-[32px] bg-white border border-slate-100 hover:border-accent/30 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 w-14 h-14 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-500">
                  {feature.icon}
                </div>
                <h4 className="relative z-10 text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">{feature.title}</h4>
                <p className="relative z-10 text-slate-600 text-sm leading-relaxed">{feature.description}</p>

                {/* Decorative subtle arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-accent">
                  <ArrowRight size={20} />
                </div>
              </div>
            ))}
          </div>

          {/* Premium Visual Side */}
          <div className="lg:col-span-5 relative h-[600px] lg:h-[700px] w-full rounded-[40px] overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
            <Image
              src="/images/totalpmp_hero_main_1771222013046.png"
              alt="TotalPMP Professional Excellence"
              fill
              className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 origin-center"
            />

            {/* Elegant Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent z-10" />

            {/* Floating Premium Badge */}
            <div className="absolute bottom-10 left-8 right-8 z-20">
              <div className="glass-crystal p-8 rounded-[32px] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] transform group-hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden">
                {/* Shine effect */}
                <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] group-hover:left-[200%] transition-all duration-1000 ease-in-out" />

                <div className="flex items-center gap-6">
                  <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-accent to-amber-300 drop-shadow-sm">100%</div>
                  <div className="w-px h-12 bg-white/20"></div>
                  <div className="text-xs text-white/90 font-bold uppercase tracking-[0.2em] leading-relaxed">Exam Success<br />On First Attempt</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
