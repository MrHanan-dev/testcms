import Header from '@/components/Header';
import FAQ from '@/components/FAQ';
import TrainingSchedule from '@/components/TrainingSchedule';
import Footer from '@/components/Footer';
import { Check, BookOpen, Clock, Target, Users, Layout, Globe, Star, Award, Briefcase, Send, Mail, Phone, Building2, AlertCircle, ArrowRight, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import ContactLink from '@/components/ContactLink';
import { Metadata } from 'next';
import CertificationHero from '@/components/CertificationHero';
import BookingForm from '@/components/BookingForm';
import Features from '@/components/Features';
import CourseSuccessQuotes from '@/components/CourseSuccessQuotes';
import ScrollButton from '@/components/ScrollButton';
import JsonLdCourse from '@/components/JsonLdCourse';
import JsonLdFaq from '@/components/JsonLdFaq';

export const metadata: Metadata = {
    title: "CAPM Certification Training NZ | PMI Entry-Level Credential",
    description: "Start your project management career with CAPM® certification in NZ. 23 contact hours, live training, no experience needed. Enroll today!",
};

export default function CapmPage() {
    return (
        <>
            <Header variant="transparent" />
            <JsonLdCourse
                name="CAPM® Certification Training"
                description="Entry-level CAPM® certification training with 23 contact hours, expert-led classes, and exam preparation. No experience needed to start."
                url="https://theagilenest.com/capm"
                courseCode="CAPM"
                duration="P1M"
                offers={[
                    { price: "225", priceCurrency: "USD", description: "PMI Member exam fee" },
                    { price: "300", priceCurrency: "USD", description: "Non-Member exam fee" }
                ]}
            />
            <main className="min-h-screen bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-100/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                <CertificationHero
                    title="CAPM Training"
                    subtitle="Certified Associate in Project Management"
                    description="Launch your project management career with a globally recognised entry-level credential. Validate your understanding of fundamental principles, processes, and best practices."
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
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-primary font-bold text-2xl md:text-3xl mb-6">
                                <Award size={16} /> Foundations of PM
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-primary mb-6 leading-tight">
                                Launch Your Project Management Career
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-10">
                                The CAPM® (Certified Associate in Project Management) certification, awarded by PMI, is one of the world’s leading entry-level project management credentials. It is ideal for students, graduates, coordinators, aspiring project managers, and professionals looking to start or grow a career in project management.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { title: "Global Recognition", desc: "Validates your understanding of project management principles, terminology, and processes." },
                                    { title: "Employer Trust", desc: "Demonstrates that you are serious about professional growth and ready to contribute effectively." },
                                    { title: "Smart Investment", desc: "Ranked among the most in-demand certifications, providing a clear pathway toward PMP®." },
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
                            <h2 className="text-3xl md:text-5xl font-black text-primary mb-4">Eligibility Requirements</h2>
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
                                            <Users className="text-accent" /> TheAgileNest Frameworks/Methodologies
                                        </h4>
                                        <span className="bg-accent/10 text-primary font-bold px-3 py-1 rounded-full text-sm">20%</span>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        Understanding adaptive approaches, Scrum, Kanban, and TheAgileNest principles.
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
                                            <p className="text-slate-500 text-sm">Core Concepts (36%), Predictive (17%), TheAgileNest (20%), Business Analysis (27%)</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Why Train with TheAgileNest Section */}
                    <section className="bg-white rounded-[50px] p-10 md:p-20 border border-slate-100 shadow-xl text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-primary"></div>
                        
                        <div className="max-w-4xl mx-auto mb-20">
                            <span className="text-accent font-black tracking-[0.3em] uppercase text-2xl md:text-3xl mb-6 block">TheAgileNest Advantage</span>
                            <h2 className="text-4xl md:text-5xl font-black text-primary mb-8">Why Train with TheAgileNest</h2>
                            <p className="text-slate-600 text-xl leading-relaxed font-bold italic mb-6">
                                We are a Premium Authorised Training Partner (A.T.P.) for the global Project Management Institute (PMI).
                            </p>
                            <p className="text-slate-500 text-lg leading-relaxed font-medium">
                                We have been supporting project managers to attain their PMI® certifications. Our methods, facilitators, and collaborative learning have resulted in ongoing success.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 text-left">
                            {[
                                { title: "Experienced Instructor-Led", desc: "Learn from skilled professionals with real-world PM experience." },
                                { title: "PMI-Aligned Content", desc: "Training materials fully aligned with the latest PMI framework and PMBOK® Guide." },
                                { title: "23 Hours CAPM® Prep", desc: "Satisfies the 23 contact hour requirement for exam eligibility." },
                                { title: "Certificate of Completion", desc: "Receive official confirmation of your training hours for your application." },
                                { title: "Flexible Class Options", desc: "Choose convenient weekend or weekday sessions (Classroom or Live Online)." },
                                { title: "First Attempt Strategies", desc: "Practical tips and exam approaches designed to maximise your success." },
                                { title: "High-Quality Mock Exams", desc: "Access realistic practice questions and mock sessions as part of your training." },
                                { title: "Free 1-on-1 Coaching", desc: "A complimentary 1-hour session with your instructor for personalised guidance." },
                                { title: "Premium Experience", desc: "Full catering provided during our in-person classroom sessions." },
                                { title: "Application & Audit Support", desc: "Expert assistance with application submission and documentation." }
                            ].map((feature, i) => (
                                <div key={i} className="flex gap-5 p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-accent transition-all group">
                                    <div className="w-10 h-10 rounded-full bg-accent/20 text-primary flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                                        <Check size={20} strokeWidth={3} />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-primary text-lg mb-2">{feature.title}</h4>
                                        <p className="text-slate-500 text-sm font-medium leading-relaxed">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Training Options & Investment Section */}
                    <section className="space-y-20 pt-24">
                        <div className="text-center max-w-3xl mx-auto space-y-4">
                            <span className="label-tag mx-auto">Training & Investment</span>
                            <h2 className="text-4xl font-black text-primary tracking-tight">Everything you need to succeed</h2>
                            <p className="text-slate-500 font-medium">Flexible delivery modes and comprehensive support materials</p>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {[
                                { title: "Corporate On-Site", desc: "Customised preparation delivered at your workplace for teams and departments.", icon: Building2 },
                                { title: "Classroom (Face-to-Face)", desc: "Interactive in-person learning with expert guidance and collaborative environments.", icon: Users },
                                { title: "Live Online Training", desc: "Live-streamed classes from anywhere with real-time interaction and flexibility.", icon: Globe }
                            ].map((option, i) => (
                                <div key={i} className="bg-white border border-slate-100 p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all group relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-full -mr-12 -mt-12 group-hover:bg-accent/10 transition-colors"></div>
                                    <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                                        <option.icon size={32} />
                                    </div>
                                    <h4 className="text-2xl font-black text-primary mb-4">{option.title}</h4>
                                    <p className="text-slate-500 font-medium leading-relaxed">{option.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Materials & Support */}
                            <div className="bg-slate-900 text-white p-12 rounded-[50px] shadow-2xl relative overflow-hidden">
                                <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-32 -mb-32"></div>
                                <h3 className="text-3xl font-black mb-8 flex items-center gap-3">
                                    Prep Materials Included
                                    <div className="h-1 w-12 bg-accent rounded-full"></div>
                                </h3>
                                <ul className="grid sm:grid-cols-2 gap-6 relative z-10">
                                    {[
                                        "Course workbook & notes",
                                        "Interactive activities",
                                        "Formulas & flash cards",
                                        "Free practice exams",
                                        "LMS access",
                                        "Structured study support"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 group">
                                            <div className="bg-accent/20 text-accent p-1.5 rounded-lg group-hover:bg-accent group-hover:text-primary transition-all">
                                                <Check size={16} strokeWidth={3} />
                                            </div>
                                            <span className="font-bold text-slate-300 group-hover:text-white transition-colors">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Investment & Fees */}
                            <div className="bg-slate-50 border border-slate-200 p-12 rounded-[50px] space-y-10">
                                <div>
                                    <h3 className="text-2xl font-black text-primary mb-6 flex items-center gap-3">
                                        CAPM® Exam Fee (PMI)
                                        <div className="h-px flex-1 bg-slate-200"></div>
                                    </h3>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">PMI Member</p>
                                            <p className="text-3xl font-black text-primary">US $225</p>
                                        </div>
                                        <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Non-Member</p>
                                            <p className="text-3xl font-black text-primary">US $300</p>
                                        </div>
                                    </div>
                                    <p className="mt-4 text-xs font-medium text-slate-500 italic">
                                        *PMI Membership (Approx. US $139) may reduce exam fees and provide extra resources.
                                    </p>
                                </div>

                                <div className="pt-8 border-t border-slate-200">
                                    <h3 className="text-2xl font-black text-primary mb-6">Course Fees & Discounts</h3>
                                    <div className="space-y-4 mb-8">
                                        <p className="text-slate-600 font-medium">Contact us for current fees, upcoming schedules, and corporate packages:</p>
                                        <div className="flex flex-wrap gap-4">
                                            <a href="mailto:contact@theagilenest.com" className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-slate-200 text-primary font-bold hover:border-accent transition-colors">
                                                <Mail size={18} className="text-accent" /> contact@theagilenest.com
                                            </a>
                                            <a href="https://wa.me/64273537774" className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-slate-200 text-primary font-bold hover:border-accent transition-colors">
                                                <Phone size={18} className="text-accent" /> +64 273537774
                                            </a>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                                        {["Group bookings", "Corporate organisations", "Early bird registrations", "PMI Chapter members"].map((d, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm font-bold text-slate-500">
                                                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div> {d}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-accent/5 border border-accent/20 p-8 rounded-[32px] text-center max-w-4xl mx-auto">
                            <p className="text-primary font-bold text-lg leading-relaxed flex flex-col md:flex-row items-center justify-center gap-2">
                                <AlertCircle className="text-accent" size={24} />
                                <span className="text-accent">Important Note:</span>
                                The CAPM® exam fee is only payable after your application has been approved by PMI.
                            </p>
                        </div>
                    </section>

                    <CourseSuccessQuotes />

                    <section id="register" className="grid md:grid-cols-5 gap-16 items-start">
                        <div className="md:col-span-3">
                            <BookingForm
                                courseName="CAPM® Certification"
                                availableDates={["June 2026", "July 2026", "August 2026"]}
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
            <JsonLdFaq items={[
                { question: "1. Does this course satisfy the 23 contact hour requirement for the CAPM® exam?", answer: "Yes. The Agile Nest CAPM® course provides the required 23 contact hours of project management education needed for CAPM® exam eligibility. Upon successful completion, you will receive a Certificate of Completion to support your exam application." },
                { question: "2. Do I need project management experience to take this course or the CAPM® exam?", answer: "No. The CAPM® certification is designed for individuals who are new to project management or looking to start a career in the field. Unlike PMP®, CAPM® does not require prior project leadership experience, making it an ideal entry-level certification." },
                { question: "3. Is this course enough to pass the CAPM® exam?", answer: "This course is designed to give you a strong foundation for exam success. It includes PMI-aligned content, structured lessons, practice questions, mock exams, and instructor guidance. Your success will also depend on your study commitment and revision plan." },
                { question: "4. What's included with the CAPM® course?", answer: "Our CAPM® training includes 23 Contact Hours Certificate, PMI-aligned training content, Expert instructor-led sessions, Practice questions and mock exams, Course workbook and study materials, Real-world project management examples, Exam guidance and support, and Flexible online and classroom options." },
                { question: "5. Who should take the CAPM® course?", answer: "This course is ideal for students, graduates, coordinators, administrators, aspiring project managers, and professionals looking to build a career in project management." },
                { question: "6. Is CAPM® recognised internationally?", answer: "Yes. CAPM® is awarded by PMI and recognised globally by employers across many industries." },
                { question: "7. Can CAPM® help my career growth?", answer: "Yes. CAPM® can improve your employability, strengthen your resume, and help you qualify for project management roles." },
                { question: "8. Can I take this course online?", answer: "Yes. The Agile Nest offers live online, classroom, and corporate training options." },
                { question: "9. What happens after CAPM®?", answer: "Many professionals use CAPM® as a stepping stone toward higher-level certifications, such as PMP®, as they gain experience." },
                { question: "10. How do I get started?", answer: "Contact The Agile Nest to confirm your eligibility, choose a course option, and begin your CAPM® certification journey with confidence." }
            ]} />
            <FAQ
                title="CAPM® Exam FAQs"
                subtitle="Certification Journey"
                description="Everything You Need to Know About CAPM® Training, Exam, Fees & Eligibility"
                items={[
                    { question: "1. Does this course satisfy the 23 contact hour requirement for the CAPM® exam?", answer: "Yes. The Agile Nest CAPM® course provides the required 23 contact hours of project management education needed for CAPM® exam eligibility. Upon successful completion, you will receive a Certificate of Completion to support your exam application." },
                    { question: "2. Do I need project management experience to take this course or the CAPM® exam?", answer: "No. The CAPM® certification is designed for individuals who are new to project management or looking to start a career in the field. Unlike PMP®, CAPM® does not require prior project leadership experience, making it an ideal entry-level certification." },
                    { question: "3. Is this course enough to pass the CAPM® exam?", answer: "This course is designed to give you a strong foundation for exam success. It includes PMI-aligned content, structured lessons, practice questions, mock exams, and instructor guidance. Your success will also depend on your study commitment and revision plan." },
                    { question: "4. What’s included with the CAPM® course?", answer: "Our CAPM® training includes 23 Contact Hours Certificate, PMI-aligned training content, Expert instructor-led sessions, Practice questions and mock exams, Course workbook and study materials, Real-world project management examples, Exam guidance and support, and Flexible online and classroom options." },
                    { question: "5. Who should take the CAPM® course?", answer: "This course is ideal for students, graduates, coordinators, administrators, aspiring project managers, and professionals looking to build a career in project management." },
                    { question: "6. Is CAPM® recognised internationally?", answer: "Yes. CAPM® is awarded by PMI and recognised globally by employers across many industries." },
                    { question: "7. Can CAPM® help my career growth?", answer: "Yes. CAPM® can improve your employability, strengthen your resume, and help you qualify for project management roles." },
                    { question: "8. Can I take this course online?", answer: "Yes. The Agile Nest offers live online, classroom, and corporate training options." },
                    { question: "9. What happens after CAPM®?", answer: "Many professionals use CAPM® as a stepping stone toward higher-level certifications, such as PMP®, as they gain experience." },
                    { question: "10. How do I get started?", answer: "Contact The Agile Nest to confirm your eligibility, choose a course option, and begin your CAPM® certification journey with confidence." }
                ]}
            />
            <Footer />
        </>
    );
}
