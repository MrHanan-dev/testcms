"use client";

import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const DEFAULT_FEATURES = [
  "Project Management Experts",
  "PMP® Training Specialists",
  "Cost & Contract Experts",
  "Results Focused Delivery"
];

export default function FeatureStrip({ items }: { items?: string[] } = {}) {
  const features = items && items.length > 0 ? items : DEFAULT_FEATURES;
  return (
    <div className="bg-white border-b border-slate-100 py-10 md:py-14 relative z-20">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-white to-white pointer-events-none" />
      
      <div className="container-custom relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-5 group cursor-default"
            >
              <div className="relative flex-shrink-0 w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-[0_8px_20px_-6px_rgba(0,0,0,0.05)] flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:-translate-y-1 transition-all duration-500">
                {/* Glow behind icon */}
                <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <CheckCircle2 className="text-primary group-hover:text-white w-7 h-7 relative z-10 transition-colors duration-500" strokeWidth={2} />
              </div>
              <span className="text-[16px] lg:text-[17px] font-black text-slate-800 tracking-tight leading-snug group-hover:text-primary transition-colors duration-300">
                {feature}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
