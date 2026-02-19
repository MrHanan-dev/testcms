"use client";

import Link from 'next/link';
import { ArrowRight, CheckCircle, PlayCircle, BarChart4 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-hero-gradient">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-blue-50 to-transparent opacity-60 mix-blend-multiply pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-radial from-orange-50 to-transparent opacity-60 mix-blend-multiply pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-sm font-semibold mb-6 border border-primary/10">
              <CheckCircle size={14} className="text-accent" />
              <span>PMP Certification | PM Consulting | Cost Advisory</span>
            </div>

            <h1 className="h1">
              Empowering Professionals in <span className="text-accent relative inline-block">
                Project Leadership
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              Bridging Project Management, Cost Estimation & Career Growth with Global PMP Training and Expert Cost Management Services.
            </p>

            <div className="flex flex-wrap gap-4 w-full sm:w-auto">
              <Link href="#services" className="btn btn-accent shadow-lg shadow-accent/20">
                Explore Our Services
              </Link>
              <Link href="#contact" className="btn btn-outline">
                Contact Consulting <ArrowRight size={18} />
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100 w-full flex gap-8 sm:gap-12">
              {[
                { label: 'Pass Rate', value: '98%' },
                { label: 'Projects Optimized', value: '500+' },
                { label: 'Industry Experience', value: '15y' },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-3xl font-bold text-primary">{stat.value}</span>
                  <span className="text-sm text-gray-500 font-medium">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual Column */}
          <div className="relative lg:h-[600px] w-full flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-lg aspect-square lg:aspect-auto h-full">
              {/* Main Background Blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-primary rounded-full opacity-10 blur-3xl animate-pulse" />

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-4 lg:right-0 glass-card p-5 w-64 z-20 border-l-4 border-l-accent"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent text-white flex items-center justify-center shadow-lg shadow-accent/20">
                    <BarChart4 size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-sm">AI Cost Advisory</h4>
                    <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                      +24% Efficiency
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    <span>Precision Level</span>
                    <span className="text-accent">99.2%</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "95%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-accent rounded-full"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 left-4 lg:left-10 glass-card p-5 z-20 flex items-center gap-4 border-r-4 border-r-primary"
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm whitespace-nowrap">PMP Certified</h4>
                  <p className="text-xs text-gray-500 font-medium whitespace-nowrap">Global Success Verified</p>
                </div>
              </motion.div>

              {/* Central Abstract Shape/Image Placeholder */}
              <div className="absolute inset-0 m-auto w-4/5 h-4/5 bg-gradient-to-tr from-primary to-primary-light rounded-[2rem] shadow-2xl overflow-hidden flex items-center justify-center z-10 group rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-[url('/images/totalpmp_hero_main_1771222013046.png')] bg-cover bg-center opacity-80 mix-blend-normal hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <h3 className="relative text-white font-bold text-4xl text-center px-4 leading-tight">
                  Pass with <br /> TotalPMP.
                </h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
