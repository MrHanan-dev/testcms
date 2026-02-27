import Header from '@/components/Header';
import FAQ from '@/components/FAQ';
import TrainingSchedule from '@/components/TrainingSchedule';
import Footer from '@/components/Footer';
import MobileNav from '@/components/MobileNav';
import { Check, Star, Send, ArrowRight, TrendingUp, ShieldCheck, Globe, Users, Building2, Target } from 'lucide-react';
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
