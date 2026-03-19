import Header from '@/components/Header';
import FAQ from '@/components/FAQ';
import TrainingSchedule from '@/components/TrainingSchedule';
import Footer from '@/components/Footer';
import { Check, BookOpen, Clock, Target, Users, Layout, Globe, Star, Award, Briefcase, Send } from 'lucide-react';
import Link from 'next/link';
import ContactLink from '@/components/ContactLink';
import { Metadata } from 'next';
import CertificationHero from '@/components/CertificationHero';
import BookingForm from '@/components/BookingForm';
import Features from '@/components/Features';
import CourseSuccessQuotes from '@/components/CourseSuccessQuotes';
import ScrollButton from '@/components/ScrollButton';

export const metadata: Metadata = {
    title: "CAPM Certification Training & Exam Prep",
    description: "Kickstart your project management career with the CAPM certification. Validate your understanding of the fundamental knowledge, terminology, and processes of effective project management.",
};

export default function CapmPage() {
    return (
        <>
            <Header variant="transparent" />
            <main className="min-h-screen bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-100/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                <CertificationHero
                    title="CAPM Training"
                    subtitle="Certified Associate in Project Management"
                    description="Kickstart your career by validating your understanding of the fundamental knowledge, terminology, and processes of effective project management."
                    prev={{ name: "PMI-CP", href: "/pmicp" }}
                    next={{ name: "PMP", href: "/pmp" }}
                    gradientClass="from-primary to-primary-700"
                    buttonColorText="text-primary"
                    badgeImage="/certifications/capm.webp"
                    downloadLink="/CAPM-Exam Content Outline-english.pdf"
                />

                <div className="container-custom mt-20 space-y-24">

                    <section id="details" className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-primary font-bold text-sm mb-6">
                                <Award size={16} /> Foundations of PM
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
                                Your Gateway to Project Management
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                The Certified Associate in Project Management (CAPM) is an essential first step in building a career as a project manager. It demonstrates your knowledge of the principles and terminology in the PMBOK Guide.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { title: "Stand Out Automatically", desc: "Shows your commitment to the profession and readiness to take on project-based responsibilities." },
                                    { title: "Gateway to the PMP", desc: "CAPM certification fulfills the 35-hour education requirement needed to eventually sit for the PMP exam." },
                                    { title: "Universal Fundamentals", desc: "Gain fundamental knowledge that can be applied to any industry or project methodology." },
                                    { title: "Career Kickstarter", desc: "Ideal for recent graduates or those looking to pivot into project management roles." },
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

                    {/* ── Eligibility Requirements ── */}
                    <section className="bg-white rounded-3xl border border-slate-100 shadow-sm p-10 md:p-14">
                        <div className="mb-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-primary font-bold text-sm mb-4">
                                <Check size={16} /> Eligibility Requirements
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-primary mb-3">Who Can Apply for the CAPM?</h2>
                            <p className="text-slate-500 text-lg font-medium max-w-2xl">
                                The CAPM has straightforward requirements   no project experience needed. Anyone with a secondary diploma can apply.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-10">
                            <div className="rounded-2xl border-2 border-accent/30 bg-accent/5 p-8 flex flex-col gap-5">
                                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-primary">
                                    <Award size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-primary mb-1">Education</h3>
                                    <p className="text-slate-500 text-sm font-medium">Minimum requirement for all applicants</p>
                                </div>
                                <ul className="space-y-3">
                                    {[
                                        "Secondary diploma (high school diploma, GED, or global equivalent)",
                                        "No university or college degree required",
                                    ].map((req, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-700 font-medium text-sm">
                                            <div className="mt-1 bg-accent/30 text-primary p-0.5 rounded-full shrink-0"><Check size={14} strokeWidth={3} /></div>
                                            {req}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="rounded-2xl border-2 border-primary/20 bg-primary/5 p-8 flex flex-col gap-5">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-primary mb-1">Project Management Education</h3>
                                    <p className="text-slate-500 text-sm font-medium">Must be completed before sitting the exam</p>
                                </div>
                                <ul className="space-y-3">
                                    {[
                                        "23 contact hours of project management education",
                                        "No work experience required   ideal for students & career changers",
                                    ].map((req, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-700 font-medium text-sm">
                                            <div className="mt-1 bg-primary/20 text-primary p-0.5 rounded-full shrink-0"><Check size={14} strokeWidth={3} /></div>
                                            {req}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex items-start gap-4">
                            <Globe size={22} className="text-accent shrink-0 mt-0.5" />
                            <p className="text-slate-600 font-medium text-sm leading-relaxed">
                                <strong className="text-primary">Good news:</strong> Our CAPM training course fulfils the <strong className="text-primary">23 contact hours</strong> requirement. No experience required   you can apply straight from study or a career change.
                            </p>
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
                                            <Users className="text-accent" /> TotalPMP Frameworks/Methodologies
                                        </h4>
                                        <span className="bg-accent/10 text-primary font-bold px-3 py-1 rounded-full text-sm">20%</span>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        Understanding adaptive approaches, Scrum, Kanban, and TotalPMP principles.
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

                        {/* Right side - What you get & Exam Format */}
                        <div className="lg:col-span-2 space-y-8">
                            <div className="bg-primary rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -mr-20 -mt-20"></div>

                                <h3 className="text-2xl font-bold mb-6 relative z-10">What's Included</h3>
                                <ul className="space-y-5 relative z-10">
                                    {[
                                        "23 Hours of Live Expert-led Training",
                                        "Official PMI® Authorized Training Content",
                                        "Full-length CAPM Mock Exams",
                                        "PMI Application Assistance",
                                        "Post-Training Support till Certification",
                                        "Comprehensive Exam Support & Mentorship"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <div className="mt-1 bg-accent/20 text-accent p-1 rounded-full shrink-0">
                                                <Check size={14} strokeWidth={3} />
                                            </div>
                                            <span className="font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <ScrollButton
                                    targetId="register"
                                    className="w-full mt-10 bg-accent hover:bg-accent-hover text-white font-bold py-4 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1 relative z-10"
                                >
                                    Download Full Syllabus
                                </ScrollButton>
                            </div>

                            {/* Exam Format Box */}
                            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-10">
                                <h3 className="text-2xl font-bold text-primary mb-6">CAPM® Exam Format</h3>
                                <ul className="space-y-5">
                                    <li className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-accent shrink-0 border border-slate-100">
                                            <Target size={20} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-primary">150 Questions</p>
                                            <p className="text-slate-500 text-sm">Multiple-choice, drag-and-drop, animations, hotspot</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-accent shrink-0 border border-slate-100">
                                            <Clock size={20} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-primary">180 Minutes</p>
                                            <p className="text-slate-500 text-sm">Total exam duration (3 hours). One 10-minute break available.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-accent shrink-0 border border-slate-100">
                                            <Layout size={20} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-primary">Exam Structure</p>
                                            <p className="text-slate-500 text-sm">Core Concepts (36%), Predictive (17%), TotalPMP (20%), Business Analysis (27%)</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Why Choose Us Section */}
                    <section className="bg-white rounded-3xl p-10 md:p-16 border border-slate-100 shadow-sm mt-24 text-center">
                        <div className="max-w-3xl mx-auto mb-16">
                            <span className="text-accent font-extrabold tracking-[0.2em] uppercase text-[10px] mb-4 block">TotalPMP Advantage</span>
                            <h2 className="text-3xl md:text-4xl font-black text-primary mb-6">Why Train with TotalPMP</h2>
                            <p className="text-slate-600 text-lg leading-relaxed font-medium mb-4">
                                We are a Premium Authorized Training Partner (A.T.P.) for the global Project Management Institute (PMI).
                            </p>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                We have been supporting project managers to attain their PMI® certifications. The combination of our training methods, facilitators, self-study, and collaboration has resulted in ongoing success.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                            {[
                                "Local company offering tailored, region-specific training.",
                                "Trainers hand picked for their expertise and real world PM experience.",
                                "Flexible training schedules to suit learning capacities.",
                                "All-inclusive, transparent pricing with no hidden fees.",
                                "Globally recognized materials enhanced with our own resources.",
                                "Full support through the entire certification process.",
                                "Feedback reviewed continuously to ensure top training quality.",
                                "Trainers collaborate regularly to uphold high standards in adult education.",
                                "100% locally owned organization operating with honesty and transparency."
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
                    <Features titleSuffix="CAPM® Journey" descriptionSuffix="CAPM® training programs" />
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
                                <ContactLink
                                    className="inline-flex items-center justify-center py-6 px-16 bg-white text-primary font-black text-xl rounded-2xl hover:scale-105 transition-all shadow-2xl"
                                >
                                    Enquire Now
                                </ContactLink>
                            </div>

                            <div className="p-8 border-2 border-dashed border-slate-200 rounded-[40px] text-center">
                                <p className="text-slate-500 font-medium italic">
                                    "Even without experience, I felt fully prepared for the exam. Highly recommend!"
                                </p>
                                <div className="mt-4 font-bold text-primary">  Auckland Council Employee</div>
                            </div>
                        </div>
                    </section>

                </div>
            </main>
            <TrainingSchedule />
            <FAQ />
            <Footer />
        </>
    );
}
