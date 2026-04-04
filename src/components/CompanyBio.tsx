'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Award, Users } from 'lucide-react';

const CompanyBio = () => {
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
                            TheAgileNest: Your Strategic Partner in <span className="text-slate-400">Project Excellence</span>
                        </h2>
                        <div className="space-y-4 text-slate-600 leading-relaxed text-base font-medium">
                            <p>
                                Founded on the principles of precision, efficiency, and continuous value delivery, TheAgileNest has emerged as a leading authority in project management training and consultancy. Our mission is to bridge the gap between complex theoretical frameworks and the practical, high-stakes reality of modern industry. Whether you are navigating the intricate landscapes of construction management or leading digital transformations in the tech sector, we provide the tools and expertise to ensure your projects achieve their full potential.
                            </p>
                            <p>
                                At TheAgileNest, we believe that true project excellence goes beyond simply meeting deadlines and staying within budget. It is about understanding the strategic business drivers, managing risks with foresight, and fostering a culture of high performance and adaptability. Our consultants bring decades of real-world experience across diverse sectors, including infrastructure, energy, IT, and commercial development, providing our clients with a unique blend of global best practices and local market insights.
                            </p>
                            <p>
                                Our comprehensive suite of services includes specialized training for PMP®, CAPM®, and PMI-CP® certifications, as well as bespoke consultancy for PMO establishment, cost estimation, and commercial contract management. We don't just teach project management; we live it. By partnering with TheAgileNest, you are investing in a legacy of project success that transforms knowledge into a sustainable competitive advantage for your team and your organization.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {[
                            {
                                icon: Shield,
                                title: "Proven Reliability",
                                desc: "Trusted by industry leaders to deliver results in complex, multi-year projects."
                            },
                            {
                                icon: Target,
                                title: "Strategic Focus",
                                desc: "Aligning every project activity with broader organizational and commercial goals."
                            },
                            {
                                icon: Award,
                                title: "Expert Faculty",
                                desc: "Learn from certified practitioners with extensive field experience."
                            },
                            {
                                icon: Users,
                                title: "Collaborative Growth",
                                desc: "We build long-term relationships that foster continuous professional development."
                            }
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <feature.icon className="w-8 h-8 text-accent mb-4" />
                                <h4 className="font-bold text-primary mb-2">{feature.title}</h4>
                                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyBio;
