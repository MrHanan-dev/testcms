"use client";

import { ShieldCheck, Zap, TrendingUp, Users } from 'lucide-react';
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
    description: "Learn from instructors with 17+ years of real-world project leadership experience across New Zealand and abroad."
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

export default function Features() {
  return (
    <section id="why-choose-us" className="section bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Content */}
          <div className="order-last lg:order-first">
            <span className="text-accent font-extrabold tracking-[0.2em] uppercase text-[10px] mb-6 block">The Advantage</span>
            <h2 className="h2 mb-10 leading-tight">
              Why choose <span className="text-accent">TotalPMP</span>?
            </h2>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed font-medium opacity-80 max-w-xl">
              We impart knowledge based on actual industrial situations, combining pedagogical expertise with deep-rooted project leadership.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-[30px] bg-slate-50/50 hover:glass-crystal hover:shadow-premium transition-all duration-500 border border-transparent"
                >
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary mb-6 shadow-soft group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-extrabold text-primary mb-3 tracking-tight">{feature.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium opacity-80">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual/Image Side */}
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/10 rounded-[60px] blur-2xl rotate-3"></div>
            <div className="relative h-[600px] w-full rounded-[50px] overflow-hidden border border-slate-100 shadow-premium">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
                alt="TotalPMP Excellence"
                fill
                className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent"></div>

              {/* Floating Stat Card */}
              <div className="absolute bottom-10 left-10 p-8 glass-crystal rounded-[30px] shadow-premium max-w-[240px]">
                <div className="text-4xl font-extrabold text-primary mb-2">100%</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] leading-tight">Exam Success Rate on First Attempt</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
