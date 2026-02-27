import Header from '@/components/Header';
import FAQ from '@/components/FAQ';
import TrainingSchedule from '@/components/TrainingSchedule';
import Footer from '@/components/Footer';
import MobileNav from '@/components/MobileNav';
import { Check, Star, Send, ArrowRight, TrendingUp, ShieldCheck, Globe, Users, Building2, Target, Award, Clock, Layout, BookOpen, HardHat, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import CertificationHero from '@/components/CertificationHero';
import BookingForm from '@/components/BookingForm';
import PMPBenefits from '@/components/PMPBenefits';
import CourseSuccessQuotes from '@/components/CourseSuccessQuotes';
import Features from '@/components/Features';

export const metadata: Metadata = {
    title: "TOTALPMP Premier PMP® Training | Global Certification",
    description: "Join New Zealand, Australia, and Asia's most comprehensive PMP® training. 100% exam success rate on first attempt with expert practitioners. Pass on your first try!",
};

export default function PmpPage() {
    return (
        <>
            <Header />
            <main className="pb-24 min-h-screen bg-white relative overflow-hidden">
                <CertificationHero
                    title="PMP Training"
                    subtitle="Become a Certified Project Management Professional"
                    description="Our PMP course provides comprehensive, expert-led training to help you master project management principles. Gain practical skills, internationally recognised certification, and the confidence to lead projects successfully."
                    prev={{ name: "CAPM", href: "/capm" }}
                    next={{ name: "PMI-CP", href: "/pmicp" }}
                    gradientClass="from-primary to-primary-700"
                    buttonColorText="text-primary"
                    badgeImage="/certifications/pmp.webp"
                    downloadLink="/pmp-examination-content-outline.pdf"
                />

                <div className="container-custom mt-20 space-y-32">

                    {/* Description Section - Adapted from PMI-CP */}
                    <section id="details" className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-primary font-bold text-sm mb-6">
                                <ShieldCheck size={16} /> Project Excellence
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
                                Why PMP® Is a Game-Changer
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                The Project Management Professional (PMP)® certification is the most globally recognised credential for project managers. It validates your ability to plan, manage, and deliver complex projects across any industry using predictive, agile, and hybrid approaches.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { title: "Stand Out from the Crowd", desc: "The internationally recognized gold standard in project management certification." },
                                    { title: "Enhance Your Organisation", desc: "Achieve greater efficiency, profitability, and positive outcomes in projects and their delivery." },
                                    { title: "Global Recognition", desc: "Gain an independent affirmation of your knowledge and mastery of project management concepts." },
                                    { title: "Created by Professionals", desc: "The PMP® certification represents the skills and knowledge you need to help build a better tomorrow." },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1 bg-accent/20 text-primary p-1 rounded-full shrink-0">
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
                            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/5 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
                            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100">
                                <h3 className="text-2xl font-bold text-primary border-b border-slate-100 pb-4 mb-6">Who Should Apply?</h3>
                                <p className="text-slate-600 mb-6 text-sm">Designed for experienced project managers looking to validate their skills and advance their careers.</p>
                                <ul className="space-y-3">
                                    {[
                                        "Project Managers & Directors",
                                        "Program & Portfolio Managers",
                                        "Delivery Leads & Agile Coaches",
                                        "Industry Leaders Seeking Global Credentials",
                                        "Professionals with 3+ Years PM Experience",
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

                    {/* Curriculum / Syllabus & Features - Adapted from PMI-CP */}
                    <section className="grid lg:grid-cols-5 gap-12">
                        <div className="lg:col-span-3">
                            <h2 className="text-3xl font-bold text-primary mb-2">Curriculum / Syllabus</h2>
                            <p className="text-slate-500 mb-8">Aligned with the latest PMP® Examination Content Outline (ECO).</p>

                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-start mb-4">
                                        <h4 className="text-xl font-bold text-primary flex items-center gap-2">
                                            <Users className="text-accent" /> People
                                        </h4>
                                        <span className="bg-accent/20 text-primary font-bold px-3 py-1 rounded-full text-sm">42%</span>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed">
                                        Building stronger stakeholder relationships, leading and managing teams, resolving conflict, and fostering team performance.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-start mb-4">
                                        <h4 className="text-xl font-bold text-primary flex items-center gap-2">
                                            <Target className="text-primary" /> Process
                                        </h4>
                                        <span className="bg-slate-100 text-primary font-bold px-3 py-1 rounded-full text-sm">50%</span>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed">
                                        Determining appropriate project methodologies (predictive, agile, hybrid), managing scope, schedule, budget, resources, and risks.
                                    </p>
                                </div>

                                <div className="bg-slate-800 text-white p-6 rounded-2xl">
                                    <div className="flex justify-between items-start mb-4">
                                        <h4 className="text-xl font-bold text-white flex items-center gap-2">
                                            <Globe className="text-accent" /> Business Environment
                                        </h4>
                                        <span className="bg-slate-700 text-slate-300 font-bold px-3 py-1 rounded-full text-sm">8%</span>
                                    </div>
                                    <p className="text-slate-300 leading-relaxed text-sm">
                                        Evaluating delivering business value, navigating organizational change, and supporting compliance requirements.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-bold text-primary mb-8">Key Course Features</h2>
                            <ul className="space-y-6">
                                {[
                                    { title: "35 Contact Hours", icon: Clock, desc: "Fulfills the PMI educational requirement to sit for the PMP exam." },
                                    { title: "Expert Practitioners", icon: Users, desc: "Delivered by highly experienced PMP® certified professionals." },
                                    { title: "Course Materials", icon: Layout, desc: "Comprehensive slideware, templates, and PMI's official learning materials." },
                                    { title: "Mock Exams", icon: Target, desc: "Full-length mock exams and extensive question banks to ensure readiness." },
                                    { title: "Application Support", icon: BookOpen, desc: "End-to-end assistance with your PMI application and audit process." },
                                    { title: "Attendance Certificate", icon: Award, desc: "Official proof of course completion for your application." },
                                ].map((feature) => (
                                    <li key={feature.title} className="flex gap-4 group">
                                        <div className="bg-white border border-slate-100 shadow-sm p-3 rounded-xl text-primary shrink-0 h-14 w-14 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
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

                    {/* Why Train with TotalPMPro Section - Adapted from PMI-CP */}
                    <section className="bg-white rounded-3xl p-10 md:p-16 border border-slate-100 shadow-sm text-center">
                        <div className="max-w-3xl mx-auto mb-16">
                            <span className="text-accent font-extrabold tracking-[0.2em] uppercase text-[10px] mb-4 block">TotalPMPro Advantage</span>
                            <h2 className="text-3xl md:text-4xl font-black text-primary mb-6">Why Train with TotalPMPro</h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                We have been supporting project managers to attain their PMI® certifications. The combination of our training methods, facilitators, self-study, and collaboration has resulted in ongoing success.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                            {[
                                "Local company offering tailored, region-specific training.",
                                "Trainers hand-picked for their expertise and real-world PM experience.",
                                "Flexible training schedules to suit learning capacities.",
                                "All-inclusive, transparent pricing with no hidden fees.",
                                "Globally recognized materials enhanced with our own resources.",
                                "Full support through the entire certification process.",
                                "Feedback reviewed continuously to ensure top training quality.",
                                "Trainers collaborate regularly to uphold high standards in adult education.",
                                "100% locally-owned organization operating with honesty and transparency."
                            ].map((advantage, i) => (
                                <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex gap-4 hover:shadow-lg transition-shadow">
                                    <div className="mt-1 bg-accent/20 text-primary p-1.5 rounded-full shrink-0 h-fit">
                                        <Check size={16} strokeWidth={3} />
                                    </div>
                                    <p className="text-slate-700 font-medium text-sm leading-relaxed">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Why Choose Section (Using existing Features component refined with the new content) */}
                    <Features />

                    {/* Training Benefits Section */}
                    <PMPBenefits />

                    {/* Why PMP is Right for You Section */}
                    <section className="bg-primary rounded-[60px] p-12 md:p-24 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 -skew-x-12 translate-x-1/2"></div>
                        <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                            <div className="space-y-10">
                                <h2 className="text-4xl md:text-6xl font-black leading-tight">
                                    🚀 Why PMP® is <span className="text-accent">Right for You</span>
                                </h2>
                                <p className="text-slate-300 text-xl font-medium leading-relaxed opacity-90">
                                    Become PMP® Certified With TOTALPMP. Whether you aim to advance your career, lead projects, or master global best practices, TOTALPMP is your trusted partner.
                                </p>
                                <div className="grid gap-8">
                                    {[
                                        { title: "Global Recognition", desc: "Stand out worldwide with a certification recognized in over 200 countries." },
                                        { title: "Higher Salary", desc: "Earn 25–33% more than non-certified peers on average." },
                                        { title: "Career Growth", desc: "Access leadership roles and master complex, high-stakes projects." },
                                        { title: "Skill Validation", desc: "Demonstrates mastery of global project management standards and best practices." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-6 group">
                                            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                                                <Target size={28} />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-black mb-2 text-white">{item.title}</h4>
                                                <p className="text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-white p-12 rounded-[50px] shadow-2xl space-y-12">
                                <div className="space-y-6">
                                    <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                                        <TrendingUp size={40} />
                                    </div>
                                    <h3 className="text-3xl font-black text-primary">Master PMP with Expert Guidance</h3>
                                    <p className="text-slate-600 text-lg font-medium leading-relaxed">
                                        Achieve exam success on your first attempt through engaging training, targeted study plans, and practical exercises led by certified professionals.
                                    </p>
                                </div>
                                <div className="pt-10 border-t border-slate-100 grid grid-cols-2 gap-8">
                                    <div>
                                        <div className="text-5xl font-black text-accent mb-2">100%</div>
                                        <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Exam Success Rate</div>
                                    </div>
                                    <div>
                                        <div className="text-5xl font-black text-primary mb-2">1.4M+</div>
                                        <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Global Leaders</div>
                                    </div>
                                </div>
                                <Link href="#register" className="btn-primary w-full py-6 rounded-2xl text-center flex items-center justify-center gap-3 font-black text-lg group">
                                    Start My Certification Journey
                                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* Testimonials/Quotes Section */}
                    <div>
                        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                            <span className="label-tag mx-auto">First-Attempt Success</span>
                            <h2 className="text-4xl font-black text-primary tracking-tight">Hear it from our successful candidates</h2>
                        </div>
                        <CourseSuccessQuotes />
                    </div>

                    {/* Registration Section */}
                    <section id="register" className="grid lg:grid-cols-5 gap-20 items-start py-10">
                        <div className="lg:col-span-3">
                            <BookingForm
                                courseName="PMP® Certification"
                                availableDates={["March 2026", "April 2026", "May 2026"]}
                            />
                        </div>
                        <div className="lg:col-span-2 space-y-10">
                            <div className="bg-slate-900 text-white p-12 rounded-[50px] shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-accent/20 rounded-bl-full blur-[80px] group-hover:scale-150 transition-transform duration-1000"></div>
                                <h4 className="text-accent font-black uppercase tracking-[0.2em] text-sm mb-6 relative z-10">Corporate Training</h4>
                                <h3 className="text-3xl font-black mb-8 relative z-10 leading-tight">Need a custom<br />batch for your<br />organization?</h3>
                                <p className="text-slate-400 mb-10 relative z-10 text-lg font-medium leading-relaxed">We offer tailored corporate training sessions for teams of 5 or more, focused on your specific industry challenges.</p>
                                <Link
                                    href="#contact"
                                    className="inline-flex items-center gap-4 text-accent font-black text-xl group/link relative z-10"
                                >
                                    Enquire Today
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover/link:bg-accent group-hover/link:text-primary transition-all duration-300">
                                        <Send size={20} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                    </div>
                                </Link>
                            </div>

                            <div className="p-12 bg-slate-50 border border-slate-100 rounded-[50px] text-center space-y-6">
                                <p className="text-slate-600 text-xl font-medium italic leading-relaxed">
                                    "The best investment I made in my career. The instructors are clearly experts with deep industrial context."
                                </p>
                                <div className="pt-6 flex flex-col items-center">
                                    <div className="flex gap-1 text-accent mb-3">
                                        {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                                    </div>
                                    <div className="font-black text-primary text-lg">Senior Project Lead</div>
                                    <div className="text-slate-400 font-bold uppercase tracking-widest text-sm">NZ Transport Agency Alumnus</div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <TrainingSchedule />
            <FAQ />
            <Footer />
            <MobileNav />
        </>
    );
}
