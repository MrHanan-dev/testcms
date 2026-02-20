"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-white">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/3 rounded-full blur-[150px]" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — Trust-First Typography */}
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-block label-tag mb-8 px-5 py-2.5 bg-accent/8 rounded-sm border border-accent/20">
                PMI Authorized Training Partner
              </span>

              <h1 className="h1 mb-6">
                Powering your{' '}
                <span className="text-accent">project.</span>
              </h1>

              <p className="subheader mb-10 max-w-lg mx-auto lg:mx-0">
                Expert training, precision cost estimation, and strategic consulting — from blueprint to delivery.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="#contact"
                  className="btn-accent px-10 py-5 text-base"
                >
                  Get Started <ArrowRight size={18} className="ml-1" />
                </Link>
                <Link
                  href="#services"
                  className="btn-outline px-10 py-5 text-base"
                >
                  Our Services
                </Link>
              </div>

              {/* Trust badges inline */}
              <div className="flex items-center gap-6 mt-12 justify-center lg:justify-start">
                {[
                  { value: '500+', label: 'Projects' },
                  { value: '2,000+', label: 'Trained' },
                  { value: '17+', label: 'Years' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <p className="text-2xl font-black text-charcoal tracking-dense">{stat.value}</p>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/30 mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — Dashboard Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              {/* Main visual card */}
              <div className="rounded-lg bg-primary p-8 shadow-premium overflow-hidden relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-[60px]" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-[40px]" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-accent" />
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                    <span className="ml-auto text-[11px] text-white/40 font-mono">dashboard.totalpmp.com</span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[
                      { label: 'Projects', value: '524', change: '+12%' },
                      { label: 'Trained', value: '2.1k', change: '+28%' },
                      { label: 'Savings', value: '$52M', change: '+8%' },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-white/5 rounded-lg p-4 border border-white/5">
                        <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">{stat.label}</p>
                        <p className="text-white text-2xl font-black tracking-tight">{stat.value}</p>
                        <p className="text-accent text-[11px] font-bold mt-1">{stat.change}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white/5 rounded-lg p-5 border border-white/5">
                    <div className="flex items-end justify-between h-32 gap-2">
                      {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 0.8, delay: 0.5 + i * 0.05 }}
                          className={`flex-1 rounded-t ${i === 11 ? 'bg-accent' : 'bg-white/10'}`}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between mt-3">
                      <span className="text-white/30 text-[10px] font-mono">Jan</span>
                      <span className="text-white/30 text-[10px] font-mono">Dec</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 p-5 bg-white rounded-lg shadow-tactile border border-slate-100 z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <span className="text-accent text-lg">✓</span>
                  </div>
                  <div>
                    <p className="text-charcoal font-black text-sm">100% Pass Rate</p>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">First Attempt</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
