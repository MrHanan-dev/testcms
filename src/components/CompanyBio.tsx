'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Award, Users } from 'lucide-react';
import { useSiteSettings } from './site/SiteSettingsProvider';

const BIO_ICONS = [Shield, Target, Award, Users];

const CompanyBio = () => {
    const s = useSiteSettings();

    return (
        <div className="w-full bg-slate-50/50 py-16 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-black text-primary mb-6 tracking-tight">
                            {s.companyBioHeadingLead}<span className="text-slate-400">{s.companyBioHeadingAccent}</span>
                        </h2>
                        <div className="space-y-4 text-slate-600 leading-relaxed text-base font-medium">
                            {s.companyBioParagraphs.map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </div>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {s.companyBioFeatures.map((feature, idx) => {
                            const Icon = BIO_ICONS[idx] ?? Shield;
                            return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <Icon className="w-8 h-8 text-accent mb-4" />
                                <h4 className="font-bold text-primary mb-2">{feature.title}</h4>
                                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                                    {feature.desc}
                                </p>
                            </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyBio;
