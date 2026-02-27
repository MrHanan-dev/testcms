import Header from '@/components/Header';
import FAQ from '@/components/FAQ';
import TrainingSchedule from '@/components/TrainingSchedule';
import Footer from '@/components/Footer';
import MobileNav from '@/components/MobileNav';
import { Check, BookOpen, Clock, Target, Users, Layout, Globe, Star, Award, Briefcase, Send } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import CertificationHero from '@/components/CertificationHero';
import BookingForm from '@/components/BookingForm';
import Features from '@/components/Features';
import CourseSuccessQuotes from '@/components/CourseSuccessQuotes';

export const metadata: Metadata = {
    title: "PMI CAPM Certification Training | Certified Associate in Project Management",
    description: "Launch your project management career with the CAPM certification. Ideal for students, graduates, and early-career professionals.",
};

export default function CapmPage() {
    return (
        <>
            <Header />
            <main className="pb-24 min-h-screen bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-100/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                <CertificationHero
                    title="CAPM Training – Certified Associate in Project Management"
                    subtitle="Launch your career with the world's most prestigious entry-level project management certification."
                    description="Kickstart your journey in project management by validating your understanding of the fundamental knowledge, terminology, and processes used by top professionals worldwide."
                    prev={{ name: "PMI-CP", href: "/pmicp" }}
                    next={{ name: "PMP", href: "/pmp" }}
                    gradientClass="from-primary to-primary-700"
                    buttonColorText="text-primary"
                    badgeImage="/certifications/capm.webp"
                    downloadLink="/CAPM-Exam Content Outline-english.pdf"
                />

                <div className="container-custom mt-20 space-y-24">

                    <section id="details" className="max-w-4xl mx-auto space-y-16">
                        <div className="text-center space-y-6">
                            <h2 className="text-3xl md:text-5xl font-black text-primary leading-tight">
                                What is the CAPM® Certification?
                            </h2>
                            <div className="text-slate-600 text-lg leading-relaxed space-y-6 text-left">
                                <p>
                                    The <strong>Certified Associate in Project Management (CAPM®)</strong> is a prestigious and globally recognised entry-level certification offered by the Project Management Institute (PMI®) — the world’s leading authority on project management.
                                </p>
                                <p>
                                    The CAPM® credential is tailor-made for students, graduates, and early-career professionals who aspire to build a robust foundation in project management and distinguish themselves in today’s competitive job market.
                                </p>
                                <p>
                                    Whether you’re a student looking to launch your career in project management, a graduate aiming to enhance your existing role, or an early-career professional preparing for advanced certifications like PMP®, the CAPM® is the ideal starting point. It proves that you possess the knowledge, discipline, and commitment to manage projects efficiently across any industry, regardless of your career stage.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-[40px] p-10 md:p-16 border-2 border-slate-100 shadow-sm">
                            <h3 className="text-2xl font-black text-primary mb-8 underline decoration-accent decoration-4 underline-offset-8">CAPM® Eligibility Criteria</h3>
                            <p className="text-slate-600 mb-8 font-medium">To be eligible to apply for the CAPM® exam, you must meet both of the following:</p>
                            <div className="grid md:grid-cols-2 gap-10">
                                <div className="space-y-4">
                                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white">
                                        <Award size={24} />
                                    </div>
                                    <h4 className="text-xl font-bold">1. Educational Requirement</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        You must hold a secondary degree — such as a high school diploma, or global equivalent.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-white">
                                        <BookOpen size={24} />
                                    </div>
                                    <h4 className="text-xl font-bold">2. Training Requirement</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        You must complete at least <strong>23 hours</strong> of project management education / formal training before taking the exam.
                                    </p>
                                </div>
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
                                            <BookOpen className="text-accent" /> PM Fundamentals & Core Concepts
                                        </h4>
                                        <span className="bg-accent/20 text-primary font-bold px-3 py-1 rounded-full text-sm">36%</span>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        Understanding project life cycles, PM roles, and overarching methodologies.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-start mb-4">
                                        <h4 className="text-xl font-bold text-primary flex items-center gap-2">
                                            <Target className="text-primary" /> Predictive, Plan-Based Methodologies
                                        </h4>
                                        <span className="bg-slate-100 text-primary font-bold px-3 py-1 rounded-full text-sm">17%</span>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        Deep dive into traditional waterfall project management techniques.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-start mb-4">
                                        <h4 className="text-xl font-bold text-primary flex items-center gap-2">
                                            <Users className="text-accent" /> Agile Frameworks/Methodologies
                                        </h4>
                                        <span className="bg-accent/10 text-primary font-bold px-3 py-1 rounded-full text-sm">20%</span>
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

                    {/* Why Choose Us Section */}
                    {/* Why Choose Us Section */}
                    <section className="bg-white rounded-3xl p-10 md:p-16 border border-slate-100 shadow-sm mt-24 text-center">
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

                    {/* Comparison / Why Choose Us */}
                    <Features />
                    <CourseSuccessQuotes />

                    <section id="register" className="grid md:grid-cols-5 gap-16 items-start">
                        <div className="md:col-span-3">
                            <BookingForm
                                courseName="CAPM® Certification"
                                availableDates={["March 2026", "April 2026", "May 2026"]}
                            />
                        </div>
                        <div className="md:col-span-2 space-y-8">
                            <div className="bg-slate-800 text-white p-10 rounded-[40px] shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-bl-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                                <h3 className="text-2xl font-bold mb-6 relative z-10">Start your PM<br />journey today</h3>
                                <p className="text-slate-300 mb-8 relative z-10 font-medium">Join our study groups and get access to exclusive CAPM resources.</p>
                                <Link
                                    href="#contact"
                                    className="inline-flex items-center gap-2 text-accent font-bold group/link relative z-10"
                                >
                                    Get more info
                                    <Send size={16} className="group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            <div className="p-8 border-2 border-dashed border-slate-200 rounded-[40px] text-center">
                                <p className="text-slate-500 font-medium italic">
                                    "Even without experience, I felt fully prepared for the exam. Highly recommend!"
                                </p>
                                <div className="mt-4 font-bold text-primary">— Auckland Council Employee</div>
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
