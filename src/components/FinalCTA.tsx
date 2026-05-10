"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ContactLink from './ContactLink';

export default function FinalCTA() {
    return (
        <section className="py-20 md:py-48 bg-white relative overflow-hidden">
            {/* Background design */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent/5 rounded-full blur-[150px]" />
            </div>

            <div className="container-custom relative z-10">
                <div className="max-w-5xl mx-auto bg-slate-50 rounded-[40px] md:rounded-[64px] p-8 md:p-24 text-center relative overflow-hidden border border-slate-100 shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] to-transparent pointer-events-none" />
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-[clamp(32px,6vw,72px)] font-black text-primary leading-[0.95] tracking-tight mb-10">
                            Ready to Elevate Your <br />
                            <span className="text-accent italic font-serif">Project Strategy?</span>
                        </h2>
                        
                        <p className="text-lg md:text-2xl text-slate-500 mb-10 md:mb-14 max-w-2xl mx-auto font-medium">
                            Join over 5,000 professionals who have transformed their careers and organizations with our elite training and consultancy.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
                            <ContactLink className="group px-8 md:px-12 py-5 md:py-6 bg-primary text-white font-black text-xs md:text-sm uppercase tracking-[0.2em] rounded-2xl hover:scale-105 transition-all duration-500 shadow-xl shadow-primary/20 flex items-center justify-center gap-3">
                                Start Your Journey
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </ContactLink>
                            <ContactLink className="px-8 md:px-12 py-5 md:py-6 bg-white border border-slate-200 text-primary font-black text-xs md:text-sm uppercase tracking-[0.2em] rounded-2xl hover:bg-slate-50 transition-all duration-500 flex items-center justify-center">
                                Talk to an Expert
                            </ContactLink>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
