"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Menu, X, ChevronDown, GraduationCap, ShieldCheck,
  Layers, Users, Briefcase, Settings, Target,
  FileSearch, Building2, Calculator, LineChart, ShieldAlert,
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
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (title: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 200);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${isScrolled
          ? 'bg-white shadow-[0_1px_0_rgba(0,0,0,0.06)] py-3'
          : 'bg-transparent py-5'
        }`}
    >
      <div className="container-custom flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="relative z-50 flex items-center">
          <span className={`text-[22px] font-bold tracking-[-0.04em] transition-colors duration-500 ${isScrolled ? 'text-primary' : 'text-white'
            }`}>
            TotalPMP
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navCategories.map((category) => (
            <div
              key={category.title}
              className="relative"
              onMouseEnter={() => handleMouseEnter(category.title)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 text-[14px] font-medium transition-all duration-300 rounded-md ${isScrolled
                    ? activeDropdown === category.title
                      ? 'text-primary bg-surface'
                      : 'text-foreground/60 hover:text-primary'
                    : activeDropdown === category.title
                      ? 'text-white bg-white/10'
                      : 'text-white/70 hover:text-white'
                  }`}
              >
                {category.title}
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-300 ${activeDropdown === category.title ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === category.title && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                  >
                    <div className="w-[300px] bg-white rounded-lg border border-black/[0.06] shadow-[0_16px_40px_-8px_rgba(0,0,0,0.12)] p-2">
                      {category.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-start gap-3 p-3 rounded-md hover:bg-[#F5F5F7] transition-colors duration-150 group/item"
                        >
                          <div className="w-8 h-8 flex-shrink-0 bg-[#F5F5F7] rounded-md flex items-center justify-center text-accent group-hover/item:bg-accent/10 transition-colors">
                            <item.icon size={16} strokeWidth={1.5} />
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="text-[13px] font-semibold text-foreground leading-tight">
                              {item.name}
                            </span>
                            <span className="text-[12px] text-foreground/40 leading-snug mt-0.5">
                              {item.desc}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* CTA */}
          <div className="ml-6">
            <Link
              href="#contact"
              className={`inline-flex items-center px-5 py-2 text-[13px] font-semibold rounded-md transition-all duration-300 ${isScrolled
                  ? 'bg-primary text-white hover:bg-primary/90'
                  : 'bg-white text-primary hover:bg-white/90'
                }`}
            >
              Contact Us
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={`lg:hidden relative z-50 p-2 transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white'
            }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isMobileMenuOpen ? 'close' : 'open'}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.15 }}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.div>
          </AnimatePresence>
        </button>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-40 lg:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                className="fixed top-0 right-0 h-full w-[85%] max-w-[340px] z-50 bg-white pt-20 px-6 pb-10 flex flex-col lg:hidden overflow-y-auto shadow-[-8px_0_30px_rgba(0,0,0,0.08)]"
              >
                <div className="flex flex-col gap-7">
                  {navCategories.map((category, idx) => (
                    <div key={category.title} className="flex flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent/80 mb-3 px-1">
                        {category.title}
                      </span>
                      <div className="grid gap-0.5">
                        {category.items.map((item, i) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: 12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.08 + idx * 0.06 + i * 0.03 }}
                          >
                            <Link
                              href={item.href}
                              className="flex items-center gap-3 p-2.5 rounded-md hover:bg-surface transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <item.icon size={16} className="text-accent" strokeWidth={1.5} />
                              <span className="text-[14px] font-medium text-foreground">
                                {item.name}
                              </span>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="mt-auto pt-8"
                >
                  <Link
                    href="#contact"
                    className="flex items-center justify-center w-full py-3.5 bg-primary text-white text-sm font-semibold rounded-md hover:bg-primary/90 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact Us
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
