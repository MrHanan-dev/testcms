'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useSiteSettings } from './site/SiteSettingsProvider';

export default function WhatsAppFAB() {
    const s = useSiteSettings();
    const phoneNumber = (s.whatsapp || "64273537774").replace(/\D/g, "");
    const message = s.whatsappMessage;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.div
            initial={{ scale: 0, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
            className="fixed bottom-24 lg:bottom-8 right-8 z-[60]"
        >
            {/* The "Pulse" Effect - Creates focus and urgency */}
            <span className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ping" />

            <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                // Persistent floating animation
                animate={{
                    y: [0, -8, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                whileHover={{
                    scale: 1.15,
                    boxShadow: "0 25px 30px -5px rgba(0, 0, 0, 0.15)"
                }}
                whileTap={{ scale: 0.9 }}
                className="relative flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-2xl transition-colors hover:bg-slate-50 group border-2 border-green-500/10"
                aria-label="Contact us on WhatsApp"
            >
                {/* Main Icon Container */}
                <div className="relative w-10 h-10 flex items-center justify-center z-10">
                    <Image
                        src="/whatsapp.png"
                        alt="WhatsApp"
                        width={40}
                        height={40}
                        className="object-contain"
                    />
                </div>

                {/* Focused Tooltip */}
                <span className="absolute right-full mr-6 bg-green-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-xl opacity-0 -translate-x-4 pointer-events-none transition-all group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap">
                    {s.whatsappTooltip}
                    {/* Tooltip Arrow */}
                    <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-green-600 rotate-45" />
                </span>
            </motion.a>
        </motion.div>
    );
}