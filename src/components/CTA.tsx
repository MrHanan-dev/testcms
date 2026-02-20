"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="section py-32 bg-primary relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/8 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-dark p-12 md:p-20 rounded-4xl max-w-5xl mx-auto border border-white/5"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-6 block">
            Ready to Start?
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 max-w-4xl mx-auto leading-tight tracking-tight">
            Elevate your project leadership to{' '}
            <span className="text-accent">global standards.</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            Join the ranks of successful professionals who have transformed their careers with TotalPMP&apos;s expert-led certifications and strategic consulting.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link
              href="#contact"
              className="bg-accent text-primary hover:bg-white px-10 py-5 rounded-full text-base font-black tracking-wide transition-all duration-500 min-w-[220px] shadow-gold hover:shadow-premium"
            >
              Get Started Now
            </Link>
            <Link
              href="#courses"
              className="group flex items-center text-white/60 hover:text-accent font-bold uppercase tracking-[0.15em] text-[12px] transition-all duration-500"
            >
              View Training Schedule{' '}
              <ArrowRight
                size={16}
                className="ml-2 group-hover:translate-x-1.5 transition-transform duration-300"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
