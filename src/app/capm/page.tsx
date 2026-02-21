import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileNav from '@/components/MobileNav';
import { Check, BookOpen, Clock, Target, Users, Layout, Globe, Star, Award, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import CertificationHero from '@/components/CertificationHero';

export const metadata: Metadata = {
    title: "CAPM\u00ae Certification Training | Certified Associate in Project Management",
    description: "Kickstart your project management career with the CAPM certification. Validate your understanding of the fundamental knowledge, terminology, and processes of effective project management.",
};

export default function CapmPage() {
    return (
        <>
            <Header />
            <main className="pb-24 min-h-screen bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-100/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                <CertificationHero
                    title="CAPM Training"
                    subtitle="Certified Associate in Project Management"
                    description="Kickstart your career by validating your understanding of the fundamental knowledge, terminology, and processes of effective project management."
                    prev={{ name: "PgMP", href: "/pgmp" }}
                    next={{ name: "PMP", href: "/pmp" }}
                    gradientClass="from-[#006666] to-[#009999]"
                    buttonColorText="text-teal-700"
                    badgeImage="/certifications/capm.webp"
                />

                <div className="container-custom max-w-5xl mt-20 space-y-24">

                    <section id="details" className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-700 font-semibold text-sm mb-6">
                                <Award size={16} /> Foundations of PM
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
                                Your Gateway to Project Management
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                The Certified Associate in Project Management (CAPM)\u00ae is an essential first step in building a career as a project manager. It demonstrates your knowledge of the principles and terminology in the PMBOK\u00ae Guide.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { title: "Stand Out Automatically", desc: "Shows your commitment to the profession and readiness to take on project-based responsibilities." },
                                    { title: "Gateway to the PMP", desc: "CAPM certification fulfills the 35-hour education requirement needed to eventually sit for the PMP exam." },
                                    { title: "Universal Fundamentals", desc: "Gain fundamental knowledge that can be applied to any industry or project methodology." },
                                    { title: "Career Kickstarter", desc: "Ideal for recent graduates or those looking to pivot into project management roles." },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1 bg-green-100 text-green-600 p-1 rounded-full shrink-0">
                                            <Check size={16} strokeWidth={3} />
                                        </div>
                                        <div>
                                            <strong className="text-primary block mb-1">{item.title}</strong>
                                            <span className="text-slate-600 text-sm leading-relaxed">{item.desc}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-teal-100 to-green-50 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
                            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100">
                                <h3 className="text-2xl font-bold text-primary border-b border-slate-100 pb-4 mb-6">Who Should Apply?</h3>
                                <p className="text-slate-600 mb-6 text-sm">Perfect for individuals starting their journey or those wanting to formalize their basic PM knowledge.</p>
                                <ul className="space-y-3">
                                    {[
                                        "Students & Recent Graduates",
                                        "Junior Project Coordinators",
                                        "Project Team Members",
                                        "Career Changers",
                                        "Entry-Level PMs",
                                    ].map((audience, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                            <div className="w-2 h-2 rounded-full bg-accent shrink-0"></div>
                                            {audience}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="grid lg:grid-cols-5 gap-12">
                        <div className="lg:col-span-3">
                            <h2 className="text-3xl font-bold text-primary mb-2">Curriculum / Syllabus</h2>
                            <p className="text-slate-500 mb-8">Reflects the latest standards in project delivery.</p>

                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-start mb-4">
                                        <h4 className="text-xl font-bold text-primary flex items-center gap-2">
                                            <BookOpen className="text-teal-500" /> PM Fundamentals & Core Concepts
                                        </h4>
                                        <span className="bg-teal-100 text-teal-700 font-bold px-3 py-1 rounded-full text-sm">36%</span>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        Understanding project life cycles, PM roles, and overarching methodologies.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-start mb-4">
                                        <h4 className="text-xl font-bold text-primary flex items-center gap-2">
                                            <Target className="text-blue-500" /> Predictive, Plan-Based Methodologies
                                        </h4>
                                        <span className="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full text-sm">17%</span>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        Deep dive into traditional waterfall project management techniques.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-start mb-4">
                                        <h4 className="text-xl font-bold text-primary flex items-center gap-2">
                                            <Users className="text-purple-500" /> Agile Frameworks/Methodologies
                                        </h4>
                                        <span className="bg-purple-100 text-purple-700 font-bold px-3 py-1 rounded-full text-sm">20%</span>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        Understanding adaptive approaches, Scrum, Kanban, and Agile principles.
                                    </p>
                                </div>

                                <div className="bg-slate-800 text-white p-6 rounded-2xl border border-slate-700 shadow-sm">
                                    <div className="flex justify-between items-start mb-4">
                                        <h4 className="text-xl font-bold text-white flex items-center gap-2">
                                            <Briefcase className="text-accent" /> Business Analysis Frameworks
                                        </h4>
                                        <span className="bg-slate-700 text-slate-300 font-bold px-3 py-1 rounded-full text-sm">27%</span>
                                    </div>
                                    <p className="text-slate-300 leading-relaxed text-sm">
                                        Requirements gathering, stakeholder engagement, and identifying business needs.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-bold text-primary mb-8">Key Course Features</h2>
                            <ul className="space-y-6">
                                {[
                                    { title: "Foundational Focus", icon: BookOpen, desc: "Step-by-step breakdown of core PM principles." },
                                    { title: "Agile & BA Included", icon: Users, desc: "Covers crucial modern aspects like Agile and Business Analysis." },
                                    { title: "Meets Requirements", icon: Layout, desc: "Provides the 23 contact hours needed to sit the exam." },
                                    { title: "Mock Exams", icon: Target, desc: "Extensive simulator tests matching the CAPM format." },
                                ].map((feature) => (
                                    <li key={feature.title} className="flex gap-4 group">
                                        <div className="bg-white border border-slate-100 shadow-sm p-3 rounded-xl text-teal-600 shrink-0 h-14 w-14 flex items-center justify-center group-hover:bg-teal-50 transition-colors">
                                            <feature.icon size={24} strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-primary text-lg">{feature.title}</h4>
                                            <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    <section className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-full -z-10" />
                        <div className="text-center max-w-2xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Eligibility Prerequisites</h2>
                            <p className="text-slate-600">The CAPM is highly accessible and designed to be an entry point into the profession.</p>
                        </div>

                        <div className="max-w-xl mx-auto">
                            <div className="p-8 rounded-2xl bg-teal-50 border-2 border-teal-200">
                                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                                    <Award className="text-teal-600" /> Standard Path
                                </h3>
                                <ul className="space-y-6 text-slate-700 text-lg">
                                    <li className="flex gap-4">
                                        <Check className="shrink-0 text-green-500 mt-1" />
                                        <span><strong>Education:</strong> Secondary degree (high school diploma, associate's degree or the global equivalent).</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <Check className="shrink-0 text-green-500 mt-1" />
                                        <span><strong>Training:</strong> 23 contact hours of formal project management education completed before the exam.</span>
                                    </li>
                                    <li className="flex gap-4 text-slate-500 italic mt-4 px-4 py-3 bg-white rounded-xl border border-teal-100">
                                        No professional project experience is required to apply for the CAPM!
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="bg-gradient-to-r from-[#006666] to-[#009999] text-white rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-8 text-center text-teal-50">Additional Exam Details</h3>
                            <div className="grid sm:grid-cols-3 gap-6 text-center">
                                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                                    <Clock className="mx-auto mb-4 text-accent" size={32} />
                                    <div className="font-bold text-2xl mb-1">180</div>
                                    <div className="text-sm text-teal-100">Minutes Duration</div>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                                    <Layout className="mx-auto mb-4 text-accent" size={32} />
                                    <div className="font-bold text-2xl mb-1">150</div>
                                    <div className="text-sm text-teal-100">Total Questions</div>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                                    <Globe className="mx-auto mb-4 text-accent" size={32} />
                                    <div className="font-bold text-2xl mb-1">Cost</div>
                                    <div className="text-lg text-teal-100">$225 / $300</div>
                                    <div className="text-xs text-teal-200 mt-1">(Member / Non-Member)</div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </main>
            <Footer />
            <MobileNav />
        </>
    );
}
