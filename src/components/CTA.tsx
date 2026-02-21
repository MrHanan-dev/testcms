"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-32 md:py-48 bg-surface relative overflow-hidden">
      {/* Subtle texture background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

      <div className="container-custom text-center max-w-3xl mx-auto relative z-10">
        <span className="label-tag mb-6 inline-block">Direct Contact</span>
        <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold tracking-tight leading-[1.05] text-primary mb-8">
          Let&apos;s build what<br />matters, together.
        </h2>
        <p className="text-[17px] md:text-[19px] leading-relaxed text-foreground/50 mb-12 max-w-xl mx-auto">
          Whether you need PMI-accredited training, precision cost intelligence, or strategic project advisory — we deliver.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="#contact" className="px-10 py-4 bg-primary text-white font-bold text-[14px] uppercase tracking-widest rounded-md hover:bg-primary/90 transition-all shadow-subtle hover:shadow-card-hover group flex items-center gap-3">
            Start a Conversation
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="tel:+64211234567" className="px-10 py-4 bg-white border border-border text-primary font-bold text-[14px] uppercase tracking-widest rounded-md hover:border-primary/30 transition-all">
            Call Logistics
          </Link>
        </div>
      </div>
    </section>
  );
}
