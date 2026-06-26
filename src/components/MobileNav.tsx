"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Calculator, Briefcase, Menu, X, Phone, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useSiteSettings } from './site/SiteSettingsProvider';
import { DEFAULT_LOGO_SRC } from '@/lib/siteAssets';

const tabs = [
    { label: "Training", icon: GraduationCap, href: "/training" },
    { label: "Estimating", icon: Calculator, href: "/cost-estimation" },
    { label: "PMO", icon: Briefcase, href: "/consulting" },
];

const menuLinks = [
    { label: "PMP® Training", href: "/pmp", desc: "PMI-accredited certification programs" },
    { label: "Project Delivery", href: "/project-management", desc: "Expert Project & Change Management" },
    { label: "Cost Estimation & QS", href: "/cost-estimation", desc: "Fast accurate estimating for projects" },
    { label: "Advisory & PMO", href: "/consulting", desc: "Strategic PMO & Consulting" },
    { label: "About TheAgileNest", href: "/about", desc: "Our story and mission" },
];

export default function MobileNav() {
    const s = useSiteSettings();
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
            {/* Full-screen overlay menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-[90] lg:hidden"
                    >
                        <div className="absolute inset-0 bg-primary/90 backdrop-blur-xl" />

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 30 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="relative z-10 flex flex-col h-full px-8 pt-20 pb-32"
                        >
                            <button
                                onClick={() => setMenuOpen(false)}
                                className="absolute top-6 right-6 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-white"
                            >
                                <X size={20} />
                            </button>

                            <div className="mb-10">
                                <Image
                                    src={s.logoLightUrl || s.logoUrl || DEFAULT_LOGO_SRC}
                                    alt={s.companyName || "TheAgileNest Logo"}
                                    width={160}
                                    height={50}
                                    className="h-12 w-auto object-contain"
                                    unoptimized={Boolean(s.logoLightUrl || s.logoUrl)}
                                />
                            </div>

                            <div className="flex flex-col gap-2 flex-1">
                                {menuLinks.map((link, i) => (
                                    <motion.div
                                        key={link.label}
                                        initial={{ opacity: 0, x: -16 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.06, duration: 0.25 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setMenuOpen(false)}
                                            className="flex items-center justify-between py-4 px-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                                        >
                                            <div>
                                                <p className="text-white font-semibold">{link.label}</p>
                                                <p className="text-white/30 text-xs mt-0.5">{link.desc}</p>
                                            </div>
                                            <ArrowRight size={14} className="text-white/20 group-hover:text-accent transition-colors" />
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="flex gap-3 mt-auto">
                                <a
                                    href={`tel:${s.phone?.replace(/\s/g, '') || '+64211234567'}`}
                                    className="flex-1 flex items-center justify-center gap-2 py-4 rounded-lg bg-accent text-primary font-semibold text-sm"
                                >
                                    <Phone size={16} /> Call Us
                                </a>
                                <a
                                    href={`mailto:${s.email || 'info@TheAgileNest.com'}`}
                                    className="flex-1 flex items-center justify-center gap-2 py-4 rounded-lg bg-white/10 text-white font-semibold text-sm"
                                >
                                    <Mail size={16} /> Email
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Bottom Tab Bar */}
            <nav className="fixed bottom-0 left-0 right-0 z-[80] lg:hidden">
                <div className="bg-white/95 backdrop-blur-md border-t border-border">
                    <div className="flex items-center justify-around px-4 relative" style={{ height: '68px' }}>
                        {tabs.map((tab) => {
                            const isActive = activeTab === tab.label;
                            return (
                                <button
                                    key={tab.label}
                                    onClick={() => handleTabClick(tab.label, tab.href)}
                                    className="relative flex flex-col items-center justify-center gap-1 min-w-[60px] min-h-[48px]"
                                >
                                    <tab.icon
                                        size={20}
                                        className={`transition-colors duration-200 ${isActive ? 'text-primary' : 'text-light'}`}
                                        strokeWidth={1.5}
                                    />
                                    <span
                                        className={`text-[9px] font-semibold uppercase tracking-[0.1em] transition-colors duration-200 ${isActive ? 'text-primary' : 'text-light'}`}
                                    >
                                        {tab.label}
                                    </span>
                                </button>
                            );
                        })}

                        {/* Menu tab */}
                        <button
                            onClick={() => setMenuOpen(true)}
                            className="flex flex-col items-center justify-center gap-1 min-w-[60px] min-h-[48px]"
                        >
                            <Menu size={20} className="text-light" strokeWidth={1.5} />
                            <span className="text-[9px] font-semibold uppercase tracking-[0.1em] text-light">
                                Menu
                            </span>
                        </button>
                    </div>

                    <div className="h-[env(safe-area-inset-bottom)]" />
                </div>
            </nav>
        </>
    );
}
