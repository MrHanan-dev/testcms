"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Calculator, Briefcase, Menu, X, Phone, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const tabs = [
    { label: "Training", icon: GraduationCap, href: "#training" },
    { label: "Costs", icon: Calculator, href: "#estimation" },
    { label: "Consult", icon: Briefcase, href: "#consultancy" },
];

const menuLinks = [
    { label: "PMP® Training", href: "#training", desc: "PMI-accredited certification programs" },
    { label: "Cost Estimation", href: "#estimation", desc: "AI-driven QS and cost advisory" },
    { label: "Book an Audit", href: "#consultancy", desc: "Independent project & PMO review" },
    { label: "About TotalPMP", href: "#about", desc: "Our story and mission" },
];

export default function MobileNav() {
    const [activeTab, setActiveTab] = useState<string | null>(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleTabClick = (label: string, href: string) => {
        setActiveTab(label);
        setMenuOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            {/* Full-screen glassmorphic overlay menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[90] lg:hidden"
                    >
                        {/* Backdrop */}
                        <div className="absolute inset-0 bg-primary/60 backdrop-blur-3xl" />

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 40 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="relative z-10 flex flex-col h-full px-8 pt-20 pb-32"
                        >
                            {/* Close button */}
                            <button
                                onClick={() => setMenuOpen(false)}
                                className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-white active:scale-95 transition-transform"
                            >
                                <X size={20} />
                            </button>

                            {/* Brand */}
                            <div className="mb-10">
                                <h2 className="text-white text-3xl font-extrabold tracking-tight">TotalPMP</h2>
                                <p className="text-white/30 font-serif italic text-sm mt-1 tracking-wide">Navigate. Estimate. Deliver.</p>
                            </div>

                            {/* Menu links */}
                            <div className="flex flex-col gap-3 flex-1">
                                {menuLinks.map((link, i) => (
                                    <motion.div
                                        key={link.label}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.08, duration: 0.3 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setMenuOpen(false)}
                                            className="flex items-center justify-between py-5 px-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all duration-200 group"
                                        >
                                            <div>
                                                <p className="text-white font-bold text-lg">{link.label}</p>
                                                <p className="text-white/30 text-xs font-medium mt-0.5">{link.desc}</p>
                                            </div>
                                            <ArrowRight size={16} className="text-accent/50 group-hover:text-accent transition-colors" />
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Contact shortcuts */}
                            <div className="flex gap-3 mt-auto">
                                <a
                                    href="tel:+64211234567"
                                    className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl bg-accent text-primary font-bold text-sm active:scale-95 transition-transform shadow-gold"
                                >
                                    <Phone size={16} />
                                    Call Us
                                </a>
                                <a
                                    href="mailto:info@totalpmp.com"
                                    className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl bg-white/10 border border-white/10 text-white font-bold text-sm active:scale-95 transition-transform"
                                >
                                    <Mail size={16} />
                                    Email
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Bottom Tab Bar */}
            <nav className="fixed bottom-0 left-0 right-0 z-[80] lg:hidden">
                {/* Frosted glass background */}
                <div className="bg-white/80 backdrop-blur-2xl border-t border-slate-200/60 shadow-premium">
                    <div className="flex items-center justify-around px-4 relative" style={{ height: '72px' }}>

                        {/* Tab items */}
                        {tabs.map((tab) => {
                            const isActive = activeTab === tab.label;
                            return (
                                <button
                                    key={tab.label}
                                    onClick={() => handleTabClick(tab.label, tab.href)}
                                    className="relative flex flex-col items-center justify-center gap-1 min-w-[60px] min-h-[48px] z-10"
                                >
                                    {/* Liquid morph background for active state */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="mobile-tab-blob"
                                            className="absolute -top-1 w-12 h-12 bg-accent/15 rounded-2xl animate-liquid-morph"
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                    <tab.icon
                                        size={22}
                                        className={`relative z-10 transition-colors duration-300 ${isActive ? 'text-accent' : 'text-foreground/30'}`}
                                    />
                                    <span
                                        className={`text-[9px] font-black uppercase tracking-[0.1em] relative z-10 transition-colors duration-300 ${isActive ? 'text-accent' : 'text-foreground/25'}`}
                                    >
                                        {tab.label}
                                    </span>
                                </button>
                            );
                        })}

                        {/* Central Quick Contact FAB */}
                        <div className="absolute left-1/2 -translate-x-1/2 -top-6 z-20">
                            <motion.button
                                whileTap={{ scale: 0.92 }}
                                onClick={() => window.open('mailto:info@totalpmp.com')}
                                className="w-14 h-14 rounded-full bg-accent flex items-center justify-center shadow-gold text-primary border-4 border-white"
                            >
                                <Phone size={20} />
                            </motion.button>
                        </div>

                        {/* Menu tab */}
                        <button
                            onClick={() => setMenuOpen(true)}
                            className="relative flex flex-col items-center justify-center gap-1 min-w-[60px] min-h-[48px]"
                        >
                            <Menu size={22} className="text-foreground/30" />
                            <span className="text-[9px] font-black uppercase tracking-[0.1em] text-foreground/25">
                                Menu
                            </span>
                        </button>
                    </div>

                    {/* Safe area spacer for iOS */}
                    <div className="h-[env(safe-area-inset-bottom)]" />
                </div>
            </nav>
        </>
    );
}
