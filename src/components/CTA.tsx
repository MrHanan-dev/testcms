"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle accent background */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[120px]" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="label-tag mb-6 block">Ready to Start?</span>

          <h2 className="h2 mb-6">
            Let&apos;s build something{' '}
            <span className="text-accent">extraordinary.</span>
          </h2>

          <p className="subheader max-w-xl mx-auto mb-10">
            Whether you need expert training, precision cost estimation, or strategic advisory — we&apos;re ready to deliver.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#contact" className="btn-accent px-10 py-5 text-base">
              Start a Conversation <ArrowRight size={18} className="ml-1" />
            </Link>
            <a href="tel:+64211234567" className="btn-outline px-10 py-5 text-base">
              <Phone size={16} className="mr-1" /> Call Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
