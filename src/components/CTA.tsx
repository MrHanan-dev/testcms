"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Ready to Elevate Your Project Management?
        </h2>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed">
          Join thousands of professionals who have transformed their careers and projects with TotalPMP.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#contact"
            className="btn bg-accent text-white hover:bg-accent-hover border-none shadow-lg shadow-accent/25 px-8 py-4 text-lg"
          >
            Get Started Now
          </Link>
          <Link
            href="#courses"
            className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg"
          >
            View Training Schedule <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
