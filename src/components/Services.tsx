"use client";

import { GraduationCap, Calculator, Briefcase, ChevronRight, Users, BarChart4 } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: <GraduationCap size={28} />,
    title: "PMP® Certification",
    description: "Comprehensive, expert-led training covering all knowledge areas of the PMBOK® Guide, taught by certified PMP® professionals.",
    link: "#training",
  },
  {
    icon: <BarChart4 size={28} />,
    title: "CAPM® Foundation",
    description: "A strong foundation in project management core principles to build confidence and develop essential leadership skills.",
    link: "#capm",
  },
  {
    icon: <Briefcase size={28} />,
    title: "Consultancy Services",
    description: "From feasibility studies and masterplanning to design management and construction oversight.",
    link: "#consultancy",
  },
  {
    icon: <Users size={28} />,
    title: "Force Development",
    description: "Empowering your organization through unravelling complexities, streamlining processes, and unlocking potential.",
    link: "#force",
  }
];

export default function Services() {
  return (
    <section id="services" className="section bg-slate-50/50">
      <div className="container-custom">
        <div className="max-w-3xl mb-20">
          <span className="text-accent font-extrabold tracking-[0.2em] uppercase text-[10px] mb-6 block">Our Expertise</span>
          <h2 className="h2 max-w-2xl">Transforming project management into a strategic advantage.</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 md:p-10 rounded-[40px] bg-white border border-slate-100 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-700 flex flex-col items-start h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full translate-x-8 -translate-y-8 group-hover:bg-accent/10 transition-all duration-700" />

              <div className="w-14 h-14 md:w-16 md:h-16 bg-accent rounded-2xl flex items-center justify-center text-white mb-8 shadow-premium group-hover:scale-110 transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 tracking-tight leading-tight uppercase">{service.title}</h3>
              <p className="text-slate-500 mb-8 leading-relaxed text-[15px] font-medium opacity-80 flex-grow">
                {service.description}
              </p>
              <Link
                href={service.link}
                className="inline-flex items-center text-accent text-xs font-bold uppercase tracking-[0.2em] group-hover:text-primary transition-all duration-500"
              >
                Learn More <ChevronRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
