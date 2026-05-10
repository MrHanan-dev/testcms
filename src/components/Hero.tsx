"use client";

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import ContactLink from './ContactLink';

type Slide = {
  src: string;
  alt: string;
  tag: string;
  headline: string;
  description: string;
  isInfographic?: boolean;
  isCollage?: boolean;
};

const slides: Slide[] = [
  {
    src: "https://www.theagilenest.com/wp-content/uploads/2025/10/ag2-3.jpg",
    alt: "Expert Project Management Consulting",
    tag: "Project Management",
    headline: "Strategic Planning.\nPrecision Delivery. Total Control.",
    description: "From inception to completion, we provide the leadership and expertise required to navigate high-stakes projects and achieve outstanding business outcomes.",
  },
  {
    src: "https://www.theagilenest.com/wp-content/uploads/2025/10/ag1-3.jpg",
    alt: "Professional training session backdrop from TheAgileNest",
    tag: "Professional Training",
    headline: "Hands On Training.\nReal Results. Certified Success.",
    description: "Gain practical, hands-on experience with TheAgileNest’s expert-led project management courses. Our proven methods ensure you not only pass your exams but also excel in real-world projects.",
  },
  {
    src: "/images/Totalqsconsultant.jpeg",
    alt: "TheAgileNest Consultant Overview",
    tag: "Trusted Partner",
    headline: "Simple. Transparent.\nStress-Free Estimation.",
    description: "Helping builders, developers, and renovators complete their projects on time and within budget with expert cost management.",
    isInfographic: true,
  },
  {
    src: "/images/pmbok_evolution.jpeg",
    alt: "TheAgileNest Estimation services. Bid More. Win More.",
    tag: "Quantity Surveying",
    headline: "Bid More. Win More.\nBuild Better with TheAgileNest Estimation services",
    description: "Your reliable partner in Quantity Surveying, Cost Management, and successful project delivery.\n\nAt TheAgileNest Estimation services, we make construction estimating and cost management simple, transparent, and stress-free. We act as your trusted partner in New Zealand's construction industry, helping builders, developers, and renovators complete their projects on time and within budget.",
    isInfographic: true,
  },
  {
    src: "", // No src needed for collage as it's built with CSS
    alt: "Globally Recognized Certifications: PMP, CAPM, PMI-CP",
    tag: "Certifications",
    headline: "Globally Recognized\nCredentials.",
    description: "Elevate your career with industry leading certifications. We provide comprehensive preparation for PMP®, CAPM®, and PMI-CP® exams.",
    isCollage: true,
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
          {slide.isCollage ? (
            <motion.div
              initial={{ scale: 1.05, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 10, ease: "linear" }}
              className="absolute inset-0 bg-[#0B1D35]"
            >
              <Image
                src="/images/graph_analytics_hero.png"
                alt={slide.alt}
                fill
                className="object-cover opacity-60"
                priority={current === 4}
                unoptimized
              />
            </motion.div>
          ) : (
            <motion.div
              initial={{ scale: slide.isInfographic ? 1 : 1.03 }}
              animate={{ scale: 1 }}
              transition={{ duration: 8, ease: "linear" }}
              className={`absolute inset-0 ${slide.isInfographic ? 'bg-[#0B1D35]' : ''}`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover w-full h-full"
                sizes="100vw"
                priority={current === 0}
                unoptimized
              />
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlays */}
      <div className={`absolute inset-0 z-10 pointer-events-none ${slide.isCollage ? 'bg-gradient-to-r from-[#0B1D35]/30 via-[#0B1D35]/10 to-transparent' : 'bg-gradient-to-r from-[#0B1D35]/30 via-[#0B1D35]/10 to-transparent'}`} />
      <div className={`absolute inset-0 z-10 pointer-events-none ${slide.isCollage ? 'bg-gradient-to-t from-[#0B1D35]/20 via-transparent to-[#0B1D35]/5' : 'bg-gradient-to-t from-[#0B1D35]/20 via-transparent to-transparent'}`} />

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
              className="max-w-4xl relative"
            >
              <div className="relative z-10 p-6 sm:p-10 md:p-16 rounded-[32px] md:rounded-[48px] overflow-hidden border border-white/10 backdrop-blur-sm bg-[#0B1D35]/10 shadow-xl">
                {/* Internal Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
                
                {/* Tag */}
                <motion.div
                    variants={itemVariants}
                    className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 mb-6 md:mb-8"
                >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/90">
                        {slide.tag}
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                  variants={itemVariants}
                  className="text-[clamp(36px,8vw,90px)] font-black leading-[0.95] md:leading-[0.92] tracking-tighter text-white mb-6 md:mb-8 whitespace-pre-line"
                >
                  {slide.headline.split('\n').map((line, i) => (
                    <span key={i} className="block">
                      {line.includes('.') ? (
                        <>
                          {line.split('.').map((part, j, arr) => (
                            <span key={j}>
                              {part}{j < arr.length - 1 && <span className="text-accent">.</span>}
                            </span>
                          ))}
                        </>
                      ) : line}
                    </span>
                  ))}
                </motion.h1>

                {/* Description */}
                <motion.p
                  variants={itemVariants}
                  className="text-white/60 text-base sm:text-lg md:text-xl leading-relaxed mb-8 md:mb-12 max-w-xl font-medium"
                >
                  {slide.description}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                  <ContactLink
                    className="group relative inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-5 bg-accent text-primary text-xs md:text-sm font-black uppercase tracking-widest rounded-2xl hover:scale-105 transition-all duration-500 shadow-xl shadow-accent/20 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                        Initiate Strategy
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-20" />
                  </ContactLink>
                  <Link
                    href="#services"
                    className="inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-5 bg-white/5 border border-white/10 text-white text-xs md:text-sm font-black uppercase tracking-widest rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur-sm"
                  >
                    Our Pillars
                  </Link>
                </motion.div>
              </div>

              {/* Decorative side element */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-12 top-1/2 -translate-y-1/2 w-24 h-96 bg-accent/20 blur-[100px] rounded-full pointer-events-none hidden lg:block" 
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom bar with counter + controls */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="container-custom flex items-center justify-between pb-6 md:pb-10">
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
