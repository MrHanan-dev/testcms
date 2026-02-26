"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Menu, X, ChevronDown, GraduationCap, ShieldCheck,
  Layers, Users, Briefcase, Target,
  FileSearch, Building2, Phone, Mail, Globe, ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const HEADER_VARIANTS = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const DROPDOWN_VARIANTS = {
  initial: { opacity: 0, y: 8, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2, ease: [0.23, 1, 0.32, 1] } },
  exit: { opacity: 0, y: 8, scale: 0.98, transition: { duration: 0.15 } }
};

const navCategories = [
  {
    title: 'Training',
    href: '/training',
    items: [
      { name: 'PMP® Certification', desc: 'Expert-led preparation for the PMP exam.', icon: GraduationCap, href: '/pmp' },
      { name: 'CAPM® Foundation', desc: 'Core principles for aspiring PMs.', icon: ShieldCheck, href: '/capm' },
      { name: 'PMI-CP® Construction', desc: 'Specialized construction professional.', icon: Building2, href: '/pmicp' },
      { name: 'Corporate Workshops', desc: 'Custom training for teams.', icon: Users, href: '/training' },
    ]
  },
  {
    title: 'Consultancy',
    href: '/consulting',
    items: [
      { name: 'Project Management', desc: 'Expert delivery & recovery services.', icon: Target, href: '/project-management' },
      { name: 'Cost Estimation & QS', desc: 'Fast accurate estimating for projects.', icon: Briefcase, href: '/cost-estimation' },
      { name: 'Construction Contract', desc: 'Contract management services.', icon: FileSearch, href: '/contract-management' },
      { name: 'Commercial Advice', desc: 'Independent & commercial audit.', icon: Layers, href: '/consulting' },
      { name: 'Agile Transformation', desc: 'Modern agile workflows.', icon: Layers, href: '/consulting' },
    ]
  },
  {
    title: 'About',
    href: '/about',
    items: [
      { name: 'Our Story', desc: '17 years of passion and purpose.', icon: Users, href: '/about' },
      { name: 'Our Evolution', desc: 'From PMBOK 3rd to 8th Edition.', icon: Target, href: '/about#evolution' },
    ]
  }
];

function NavLink({ category, isScrolled, isActive, onMouseEnter, onMouseLeave }: any) {
  return (
    <div
      className="relative"
      onMouseEnter={() => onMouseEnter(category.title)}
      onMouseLeave={onMouseLeave}
    >
      <button
        className={`flex items-center gap-1.5 px-5 py-2 text-[14px] font-bold tracking-tight transition-all duration-300 rounded-full ${isScrolled
          ? isActive
            ? 'text-primary bg-primary/5'
            : 'text-slate-600 hover:text-primary hover:bg-slate-100/50'
          : isActive
            ? 'text-white bg-white/10'
            : 'text-white/80 hover:text-white'
          }`}
      >
        {category.title}
        <ChevronDown
          size={14}
          className={`transition-transform duration-300 ${isActive ? 'rotate-180' : 'opacity-60'}`}
        />
      </button>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={DROPDOWN_VARIANTS}
            className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
          >
            <div className="w-[320px] bg-white rounded-[24px] border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-2.5 overflow-hidden">
              <div className="grid gap-1">
                {category.items.map((item: any) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-start gap-4 p-3.5 rounded-[18px] hover:bg-slate-50 transition-all duration-200 group/item"
                  >
                    <div className="w-10 h-10 flex-shrink-0 bg-primary/5 rounded-xl flex items-center justify-center text-primary group-hover/item:bg-accent group-hover/item:text-primary transition-all duration-300">
                      <item.icon size={20} strokeWidth={2} />
                    </div>
                    <div className="flex flex-col min-w-0 pt-0.5">
                      <span className="text-[14px] font-black text-primary leading-tight group-hover/item:translate-x-0.5 transition-transform duration-300">
                        {item.name}
                      </span>
                      <span className="text-[12px] text-slate-500 font-medium leading-relaxed mt-1 line-clamp-1">
                        {item.desc}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
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
        ? 'bg-white border-b border-slate-200 py-3 shadow-sm'
        : 'bg-primary py-4 shadow-lg'
        }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50 flex items-center gap-2.5 md:gap-4 group">
          <div className="relative w-8 h-8 md:w-10 md:h-10 flex-shrink-0 flex items-center justify-center">
            <Image
              src="/favicon.png"
              alt="TotalPMP Logo"
              width={40}
              height={40}
              className="w-10 h-10 md:w-12 md:h-12 object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Vertical Separator */}
          <div className={`h-8 md:h-10 w-px self-center transition-colors duration-500 ${isScrolled ? 'bg-slate-200' : 'bg-white/20'}`} />

          <div className="flex flex-col justify-center -mt-0.5">
            <div className={`text-[22px] md:text-[28px] font-display tracking-tight leading-none transition-colors duration-500 flex items-baseline ${isScrolled ? 'text-primary' : 'text-white'}`}>
              <span className="font-black">TOTAL</span>
              <span className="font-light text-accent ml-[1px]">PMP</span>
            </div>
            <div className={`text-[8.5px] font-sans font-bold uppercase tracking-[0.2em] leading-none mt-1.5 transition-colors duration-500 hidden md:flex items-center ${isScrolled ? 'text-slate-500' : 'text-white/70'}`}>
              <span>Project Management</span>
              <span className="mx-1.5 opacity-40 text-[6px]">•</span>
              <span>Cost Management</span>
              <span className="mx-1.5 opacity-40 text-[6px]">•</span>
              <span>Training Consultants</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2">
          {navCategories.map((category) => (
            <NavLink
              key={category.title}
              category={category}
              isScrolled={isScrolled}
              isActive={activeDropdown === category.title}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          ))}

          <div className="ml-6 flex items-center gap-4">
            <Link
              href="#contact"
              className={`px-6 py-2.5 text-[14px] font-black rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 ${isScrolled
                ? 'bg-primary text-white hover:bg-primary-700'
                : 'bg-accent text-primary hover:bg-accent/90'
                }`}
            >
              Contact Us
            </Link>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden relative z-50 p-2 text-primary transition-all duration-300 ${isScrolled ? 'bg-primary/5 rounded-full' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-primary/20 backdrop-blur-sm z-40 lg:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="fixed top-0 right-0 h-full w-[85%] max-w-[360px] z-50 bg-white pt-24 px-8 pb-10 flex flex-col lg:hidden overflow-y-auto shadow-[-10px_0_30px_rgba(0,0,0,0.1)] rounded-l-[40px]"
              >
                <div className="flex flex-col gap-8">
                  {navCategories.map((category, idx) => (
                    <div key={category.title} className="flex flex-col">
                      <span className="text-xs font-black uppercase tracking-[0.2em] text-accent mb-4 px-1">
                        {category.title}
                      </span>
                      <div className="grid gap-2">
                        {category.items.map((item: any, i: number) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + idx * 0.1 + i * 0.05 }}
                          >
                            <Link
                              href={item.href}
                              className="flex items-center gap-4 p-3 rounded-[16px] hover:bg-slate-50 transition-colors group"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-primary transition-colors">
                                <item.icon size={18} strokeWidth={2} />
                              </div>
                              <span className="text-[15px] font-bold text-primary">
                                {item.name}
                              </span>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-10">
                  <Link
                    href="#contact"
                    className="flex items-center justify-center w-full py-4 bg-primary text-white text-base font-black rounded-2xl shadow-xl active:scale-95 transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
