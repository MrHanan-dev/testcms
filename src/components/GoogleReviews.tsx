"use client";

import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';

const GOOGLE_REVIEW_URL = "https://share.google/0CMi5wamUGUw5L0Xn";

export default function GoogleReviews() {
    return (
        <section className="py-20 md:py-32 bg-white relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px]" />
            </div>

            <div className="container-custom relative z-10">
                <div className="max-w-4xl mx-auto bg-slate-50 rounded-[40px] md:rounded-[64px] p-8 md:p-20 text-center relative overflow-hidden border border-slate-100 shadow-premium">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] to-transparent pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative z-10"
                    >
                        <span className="label-tag mb-4 block">Google Reviews</span>

                        <div className="flex items-center justify-center gap-1.5 mb-8">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={32}
                                    className="text-yellow-500 fill-yellow-500"
                                />
                            ))}
                        </div>

                        <h2 className="text-3xl md:text-6xl font-black text-primary tracking-tight leading-[1.1] mb-6">
                            Love What You See?
                        </h2>

                        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium mb-10">
                            We&apos;d be grateful if you shared your experience on Google.
                            Your reviews help other professionals discover how we can help them too.
                        </p>

                        <a
                            href={GOOGLE_REVIEW_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-3 px-10 py-5 bg-primary text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:scale-105 transition-all duration-500 shadow-xl shadow-primary/20"
                        >
                            Write a Review on Google
                            <ExternalLink size={18} className="group-hover:translate-x-0.5 transition-transform" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
