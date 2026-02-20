"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Menu, X, ChevronDown, GraduationCap, ShieldCheck,
  Layers, Users, Briefcase, Settings, Target,
  FileSearch, Building2, Calculator, LineChart, ShieldAlert,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navCategories = [
  {
    title: 'Training',
    href: '#training',
    items: [
      { name: 'PMP® Certification', desc: 'Expert-led preparation for the PMP exam.', icon: GraduationCap, href: '#training' },
      { name: 'CAPM® Foundation', desc: 'Core principles for aspiring PMs.', icon: ShieldCheck, href: '#capm' },
      { name: 'Agile/ACP® Prep', desc: 'Modern agile methodologies training.', icon: Layers, href: '#agile' },
      { name: 'Corporate Workshops', desc: 'Customized training for organizations.', icon: Users, href: '#corporate' },
    ]
  },
  {
    title: 'Consultancy',
    href: '#consultancy',
    items: [
      { name: 'Strategic Management', desc: 'High-level project roadmap and strategy.', icon: Briefcase, href: '#strategy' },
      { name: 'PMO Establishment', desc: 'Setting up and scaling your PMO.', icon: Settings, href: '#pmo' },
      { name: 'Agile Transformation', desc: 'Migrate to modern agile workflows.', icon: Target, href: '#agile-transform' },
      { name: 'Independent Project Audit', desc: 'Evaluating health & performance.', icon: FileSearch, href: '#audit' },
    ]
  },
  {
    title: 'Cost Estimation',
    href: '#estimation',
    items: [
      { name: 'Construction Estimating', desc: 'Precise budget forecasting for infra.', icon: Building2, href: '#construction' },
      { name: 'Software Development Cost', desc: 'Tech stack and resource scaling.', icon: Calculator, href: '#software' },
      { name: 'Life Cycle Costing', desc: 'Long-term financial planning.', icon: LineChart, href: '#lifecycle' },
      { name: 'Risk & Contingency', desc: 'Mitigating financial uncertainties.', icon: ShieldAlert, href: '#risk' },
    ]
  }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (title: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'glass-header py-3'
          : 'bg-transparent py-6'
        }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50 flex items-center group">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-black text-lg group-hover:scale-105 transition-transform duration-500">
              T
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight leading-none text-primary">
                TotalPMP
              </span>
              <span className="text-[8px] uppercase font-bold tracking-[0.2em] text-accent mt-0.5">
                PMI Authorized Partner
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navCategories.map((category) => (
            <div
              key={category.title}
              className="relative px-4 py-2"
              onMouseEnter={() => handleMouseEnter(category.title)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1.5 text-[13px] font-bold tracking-wide transition-all duration-300 ${isScrolled ? 'text-foreground' : 'text-primary'
                  } hover:text-accent ${activeDropdown === category.title ? 'text-accent' : ''}`}
              >
                {category.title}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${activeDropdown === category.title ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === category.title && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[340px] bg-white rounded-bento border border-slate-100 shadow-premium overflow-hidden p-5 z-[60]"
                  >
                    <div className="grid gap-1">
                      {category.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-start gap-4 p-3.5 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all duration-300 group/item"
                        >
                          <div className="w-10 h-10 flex-shrink-0 bg-accent/10 rounded-xl flex items-center justify-center text-accent group-hover/item:bg-accent group-hover/item:text-primary transition-all duration-300">
                            <item.icon size={20} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[13px] font-bold text-primary group-hover/item:text-accent transition-colors">
                              {item.name}
                            </span>
                            <span className="text-[11px] text-slate-400 font-medium leading-relaxed mt-0.5">
                              {item.desc}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-100 flex justify-center">
                      <Link
                        href={category.href}
                        className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-accent transition-colors flex items-center gap-2"
                      >
                        View all <ExternalLink size={10} />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <div className="ml-6">
            <Link
              href="#contact"
              className="btn-primary px-7 py-3 rounded-full text-[12px] font-black uppercase tracking-widest"
            >
              Get Started
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden relative z-50 p-3 bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200 text-primary focus:outline-none shadow-soft hover:bg-slate-50 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-5 h-5 flex items-center justify-center relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={isMobileMenuOpen ? 'close' : 'open'}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </AnimatePresence>
          </div>
        </button>

        {/* Mobile Sidebar Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-primary/30 backdrop-blur-sm z-40 lg:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              {/* Sidebar */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-0 right-0 h-full w-[85%] max-w-[380px] z-50 bg-white shadow-premium pt-24 px-6 pb-10 flex flex-col lg:hidden overflow-y-auto"
              >
                <div className="flex flex-col gap-6">
                  {navCategories.map((category, idx) => (
                    <div key={category.title} className="flex flex-col">
                      <span className="label-tag mb-4 px-1">
                        0{idx + 1}. {category.title}
                      </span>
                      <div className="grid gap-2">
                        {category.items.map((item, i) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.15 + i * 0.05 }}
                          >
                            <Link
                              href={item.href}
                              className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 active:scale-[0.98] transition-all duration-300"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-accent shadow-soft">
                                <item.icon size={20} />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[14px] font-bold text-primary leading-tight">
                                  {item.name}
                                </span>
                                <span className="text-[11px] text-slate-400 font-medium mt-0.5">
                                  {item.desc}
                                </span>
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-auto pt-8"
                >
                  <Link
                    href="#contact"
                    className="btn-primary w-full justify-center py-5 rounded-full text-sm font-black uppercase tracking-widest"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
