"use client";

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    src: "https://www.theagilenest.com/wp-content/uploads/2025/10/ag1-3.jpg",
    alt: "Professional training session backdrop from AgileNest",
    tag: "Professional Training",
    headline: "Hands-On Training.\nReal Results. Certified Success.",
    description: "Gain practical, hands-on experience with AgileNest’s expert-led project management courses. Our proven methods ensure you not only pass your exams but also excel in real-world projects.",
  },
  {
    src: "https://www.theagilenest.com/wp-content/uploads/2025/10/ag2-3.jpg",
    alt: "Second training backdrop from AgileNest",
    tag: "Cost Estimation & QS",
    headline: "Precision cost intelligence\nfor every build.",
    description: "Quantity surveying and cost advisory trusted on $52M+ in projects. From feasibility to final account — accurate, every time.",
  },
  {
    src: "https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=1920&h=1080&fit=crop&q=80",
    alt: "Aerial view of a major infrastructure project and highway",
    tag: "Strategic Consulting",
    headline: "From blueprint\nto delivery.",
    description: "PMO setup, agile transformation, and independent project audits. Strategic advisory for complex programmes that need to deliver.",
  },
];

// Stagger children with clip-path reveal
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative w-full h-[100svh] min-h-[600px] max-h-[960px] overflow-hidden bg-primary">

      {/* Full-bleed image with Ken Burns effect */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <motion.div
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "linear" }}
            className="absolute inset-0"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              sizes="100vw"
              priority={current === 0}
              unoptimized
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1D35]/90 via-[#0B1D35]/55 to-[#0B1D35]/20 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D35]/50 via-transparent to-[#0B1D35]/30 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="max-w-2xl"
            >
              {/* Tag */}
              <motion.span
                variants={itemVariants}
                className="inline-block text-[11px] font-semibold uppercase tracking-[0.25em] text-accent/90 mb-6"
              >
                {slide.tag}
              </motion.span>

              {/* Headline */}
              <motion.h1
                variants={itemVariants}
                className="text-[clamp(32px,5.5vw,64px)] font-bold leading-[1.06] tracking-[-0.03em] text-white mb-6 whitespace-pre-line"
              >
                {slide.headline}
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-white/55 text-[clamp(15px,1.2vw,18px)] leading-[1.75] mb-10 max-w-lg"
              >
                {slide.description}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-primary text-[14px] font-semibold rounded-md hover:bg-accent/90 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center px-7 py-3.5 bg-white/[0.08] backdrop-blur-sm border border-white/[0.12] text-white/80 text-[14px] font-medium rounded-md hover:bg-white/[0.14] hover:text-white transition-all duration-300"
                >
                  Our Services
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom bar with counter + controls */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="container-custom flex items-center justify-between pb-8 md:pb-10">
          {/* Slide counter */}
          <div className="flex items-center gap-3">
            <span className="text-white/60 text-[13px] font-mono tabular-nums tracking-wider">
              0{current + 1}
            </span>
            <div className="w-12 h-px bg-white/20 relative overflow-hidden">
              <motion.div
                key={current}
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 6, ease: "linear" }}
                className="absolute inset-0 bg-accent"
              />
            </div>
            <span className="text-white/25 text-[13px] font-mono tabular-nums tracking-wider">
              0{slides.length}
            </span>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/[0.1] flex items-center justify-center text-white/50 hover:text-white hover:border-white/25 transition-all duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/[0.1] flex items-center justify-center text-white/50 hover:text-white hover:border-white/25 transition-all duration-300"
              aria-label="Next slide"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
