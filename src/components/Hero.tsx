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
    src: "https://www.theTotalPMPnest.com/wp-content/uploads/2025/10/ag1-3.jpg",
    alt: "Professional training session backdrop from TotalPMPNest",
    tag: "Professional Training",
    headline: "Hands On Training.\nReal Results. Certified Success.",
    description: "Gain practical, hands-on experience with TotalPMPNest’s expert-led project management courses. Our proven methods ensure you not only pass your exams but also excel in real-world projects.",
  },
  {
    src: "https://www.theTotalPMPnest.com/wp-content/uploads/2025/10/ag2-3.jpg",
    alt: "Expert Project Management Consulting",
    tag: "Project Management",
    headline: "Strategic Planning.\nPrecision Delivery. Total Control.",
    description: "From inception to completion, we provide the leadership and expertise required to navigate high-stakes projects and achieve outstanding business outcomes.",
  },
  {
    src: "/images/Totalqsconsultant.jpeg",
    alt: "Total QS Consultant Overview",
    tag: "Trusted Partner",
    headline: "Simple. Transparent.\nStress-Free Estimation.",
    description: "Helping builders, developers, and renovators complete their projects on time and within budget with expert cost management.",
    isInfographic: true,
  },
  {
    src: "/images/pmbok_evolution.jpeg",
    alt: "TotalPMP Estimation services. Bid More. Win More.",
    tag: "Quantity Surveying",
    headline: "Bid More. Win More.\nBuild Better with TotalPMP Estimation services",
    description: "Your reliable partner in Quantity Surveying, Cost Management, and successful project delivery.\n\nAt TotalPMP Estimation services, we make construction estimating and cost management simple, transparent, and stress-free. We act as your trusted partner in New Zealand's construction industry, helping builders, developers, and renovators complete their projects on time and within budget.",
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 bg-[#0B1D35] overflow-hidden"
            >
              {/* Mosaic wallpaper   all 5 certs tiled in a 6×5 grid to cover the full hero */}
              <motion.div
                animate={{ x: [0, -80], y: [0, -60] }}
                transition={{ duration: 25, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                className="absolute gap-3 p-2"
                style={{
                  inset: "-10%",
                  display: "grid",
                  gridTemplateColumns: "repeat(6, 1fr)",
                  gridTemplateRows: "repeat(5, 1fr)",
                  width: "120%",
                  height: "120%",
                }}
              >
                {Array.from({ length: 30 }).map((_, i) => {
                  const certs = [
                    { src: "/certifications/pmp.webp", alt: "PMP" },
                    { src: "/certifications/capm.webp", alt: "CAPM" },
                    { src: "/certifications/pmi-cp.webp", alt: "PMI-CP" },
                    { src: "/certifications/tripic.jpeg", alt: "Talent Triangle" },
                    { src: "/certifications/pmi.jpeg", alt: "PMI ATP" },
                  ];
                  const cert = certs[i % certs.length];
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: i * 0.03, ease: "easeOut" }}
                      className="flex items-center justify-center bg-white/[0.04] rounded-xl border border-white/[0.08] p-3"
                    >
                      <Image
                        src={cert.src}
                        alt={cert.alt}
                        width={160}
                        height={160}
                        className="w-full h-full object-contain opacity-75"
                        unoptimized
                      />
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Gradient overlays so hero text stays legible */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B1D35]/95 via-[#0B1D35]/60 to-[#0B1D35]/25" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D35]/80 via-transparent to-[#0B1D35]/50" />
            </motion.div>
          ) : (
            <motion.div
              initial={{ scale: slide.isInfographic ? 1 : 1.08 }}
              animate={{ scale: 1 }}
              transition={{ duration: 8, ease: "linear" }}
              className={`absolute inset-0 ${slide.isInfographic ? 'bg-[#0B1D35]' : ''}`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className={slide.isInfographic ? "object-cover lg:object-contain" : "object-cover"}
                sizes="100vw"
                priority={current === 0}
                unoptimized
              />
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlays */}
      <div className={`absolute inset-0 z-10 pointer-events-none ${slide.isCollage ? 'bg-gradient-to-r from-[#0B1D35]/90 via-[#0B1D35]/50 to-transparent' : 'bg-gradient-to-r from-[#0B1D35]/90 via-[#0B1D35]/55 to-[#0B1D35]/20'}`} />
      <div className={`absolute inset-0 z-10 pointer-events-none ${slide.isCollage ? 'bg-gradient-to-t from-[#0B1D35]/70 via-transparent to-[#0B1D35]/40' : 'bg-gradient-to-t from-[#0B1D35]/50 via-transparent to-[#0B1D35]/30'}`} />

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
              className="max-w-3xl bg-primary/40 backdrop-blur-md p-6 sm:p-10 md:p-14 rounded-[32px] border border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
              {/* Tag */}
              <motion.span
                variants={itemVariants}
                className="label-tag mb-4 sm:mb-8 block w-fit border-white/10 bg-white/5"
              >
                {slide.tag}
              </motion.span>

              {/* Headline */}
              <motion.h1
                variants={itemVariants}
                className="text-[clamp(32px,5vw,64px)] font-black leading-[1.06] tracking-tighter text-white mb-6 whitespace-pre-line"
              >
                {slide.headline}
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-white/70 text-[14px] sm:text-[clamp(15px,1.2vw,18px)] leading-relaxed sm:leading-[1.75] mb-8 sm:mb-10 max-w-lg"
              >
                {slide.description}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
                <ContactLink
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-primary text-[14px] font-semibold rounded-md hover:bg-accent/90 transition-all duration-300"
                >
                  Discover More
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                </ContactLink>
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
