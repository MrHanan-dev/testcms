"use client";

import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';

import { GOOGLE_REVIEWS } from '@/constants/reviews';

const GOOGLE_REVIEW_URL = "https://www.google.com/maps/place/AgileNest/data=!4m2!3m1!1s0x0:0xa5b20cdb0955fd78?sa=X&ved=1t:2428&hl=en-NZ&ictx=111";

export default function GoogleReviews() {
    return (
        <section className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="label-tag mb-4 block">Google Reviews</span>
                    <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tight leading-[1.1] mb-6">
                        What Our Students Say
                    </h2>
                    <div className="flex items-center justify-center gap-2 text-xl font-bold text-slate-600 mb-6">
                        <span className="text-primary text-3xl">5.0</span>
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={24} className="text-yellow-500 fill-yellow-500" />
                            ))}
                        </div>
                        <span className="text-sm font-medium ml-2">Overall Rating</span>
                    </div>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 max-w-7xl mx-auto mb-16">
                    {GOOGLE_REVIEWS.map((review, idx) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (idx % 3) * 0.1, duration: 0.5 }}
                            className="break-inside-avoid bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h4 className="font-bold text-primary mb-1">{review.name}</h4>
                                    <div className="text-xs text-slate-400 font-medium">{review.date}</div>
                                </div>
                                <div className="bg-[#4285F4]/10 p-2 rounded-full">
                                    <svg className="w-4 h-4 text-[#4285F4]" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="flex gap-1 mb-3">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={14} className="text-yellow-500 fill-yellow-500" />
                                ))}
                            </div>
                            {review.text && (
                                <p className="text-slate-600 text-sm leading-relaxed relative z-10">
                                    {review.text.length > 250 ? (
                                        <>
                                            {review.text.substring(0, 250)}...
                                        </>
                                    ) : (
                                        review.text
                                    )}
                                </p>
                            )}
                            <div className="mt-6 pt-5 border-t border-slate-100 flex justify-end">
                                <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 text-primary font-black text-sm uppercase tracking-widest rounded-xl hover:bg-accent hover:text-white transition-all duration-300">
                                    View on Google
                                    <ExternalLink size={16} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <a
                        href={GOOGLE_REVIEW_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 px-10 py-5 bg-primary text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:scale-105 transition-all duration-500 shadow-xl shadow-primary/20"
                    >
                        View All on Google
                        <ExternalLink size={18} className="group-hover:translate-x-0.5 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
}
