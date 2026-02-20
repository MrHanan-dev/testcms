"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-mesh">
      {/* Background orbs */}
      <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Typography */}
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-block label-tag mb-8 px-5 py-2.5 bg-accent/8 rounded-full border border-accent/20">
                PMI Authorized Training Partner
              </span>

              <h1 className="h1 mb-8">
                Build projects that{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">deliver.</span>
                  <span className="absolute bottom-2 left-0 right-0 h-3 bg-accent/20 -z-0 rounded-sm" />
                </span>
              </h1>

              <p className="text-lg md:text-xl text-foreground/70 mb-10 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
                TotalPMP unifies expert training, precision cost estimation, and strategic consulting under one roof — powering projects from blueprint to delivery.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="#contact"
                  className="btn-primary px-10 py-5 rounded-full text-base font-black tracking-wide"
                >
                  Get Started <ArrowRight size={18} className="ml-1" />
                </Link>
                <Link
                  href="#services"
                  className="btn-outline px-10 py-5 rounded-full text-base font-bold tracking-wide"
                >
                  <Play size={16} className="mr-1" /> See How It Works
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right — Visual Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              {/* Main visual card */}
              <div className="rounded-bento bg-primary p-8 shadow-premium overflow-hidden relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-[60px]" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-[40px]" />

                {/* Dashboard mockup */}
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-accent" />
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                    <span className="ml-auto text-[11px] text-white/40 font-mono">dashboard.totalpmp.com</span>
                  </div>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[
                      { label: 'Projects', value: '524', change: '+12%' },
                      { label: 'Trained', value: '2.1k', change: '+28%' },
                      { label: 'Savings', value: '$52M', change: '+8%' },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-white/5 rounded-2xl p-4 border border-white/5">
                        <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">{stat.label}</p>
                        <p className="text-white text-2xl font-black tracking-tight">{stat.value}</p>
                        <p className="text-accent text-[11px] font-bold mt-1">{stat.change}</p>
                      </div>
                    ))}
                  </div>

                  {/* Chart placeholder */}
                  <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
                    <div className="flex items-end justify-between h-32 gap-2">
                      {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 0.8, delay: 0.5 + i * 0.05 }}
                          className={`flex-1 rounded-t-lg ${i === 11 ? 'bg-accent' : 'bg-white/10'}`}
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

              {/* Floating badge — bottom left */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 p-5 bg-white rounded-bento shadow-tactile border border-slate-100 z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                    <span className="text-accent text-lg">✓</span>
                  </div>
                  <div>
                    <p className="text-primary font-black text-sm">100% Pass Rate</p>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">First Attempt</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge — top right */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-4 -right-4 p-4 bg-accent rounded-2xl shadow-gold z-20"
              >
                <p className="text-primary font-black text-lg">17+</p>
                <p className="text-primary/70 text-[9px] font-bold uppercase tracking-widest">Years</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
