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
                            The Agile Nest: Your Strategic Partner in <span className="text-slate-400">Project Management Excellence</span>
                        </h2>
                        <div className="space-y-4 text-slate-600 leading-relaxed text-base font-medium">
                            <p>
                                At The Agile Nest, we ensure organisations achieve project success by combining disciplined management, practical leadership, and hands-on expertise that directly address the challenges of balancing time, cost, quality, risk, and stakeholder demands.
                            </p>
                            <p>
                                We help clients achieve measurable results on their most complex projects by providing clear strategic direction, robust governance, and agile delivery models that ensure value, mitigate risk, and drive outcomes beyond budgets and deadlines.
                            </p>
                            <p>
                                Our team brings hands-on experience across construction, infrastructure, commercial developments, energy, technology, and transformation programs. We combine international best practices with local insights, helping clients navigate complexity while maintaining momentum and control.
                            </p>
                            <p>
                                We offer project management services, including planning, scheduling, PMO setup, governance, stakeholder management, progress reporting, controls, recovery planning, and delivery assurance. Whether you need support for a capital project, business transformation, or underperforming initiative, we serve as a trusted extension of your team.
                            </p>
                            <p>
                                At The Agile Nest, we don’t just advise we help organisations build capability, improve performance, and achieve lasting results. By partnering with us, you gain a reliable partner committed to project success.
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
