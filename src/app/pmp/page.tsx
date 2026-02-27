import Header from '@/components/Header';
import FAQ from '@/components/FAQ';
import TrainingSchedule from '@/components/TrainingSchedule';
import Footer from '@/components/Footer';
import MobileNav from '@/components/MobileNav';
import { Check, Star, Send, ArrowRight, TrendingUp, ShieldCheck, Globe, Users, Building2, Target, GraduationCap, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import CertificationHero from '@/components/CertificationHero';
import BookingForm from '@/components/BookingForm';
import PMPBenefits from '@/components/PMPBenefits';
import CourseSuccessQuotes from '@/components/CourseSuccessQuotes';
import Features from '@/components/Features';

export const metadata: Metadata = {
    title: "PMP Training – Become a Certified Project Management Professional",
    description: "Boost your career with PMP Certification! Learn what PMP is, its benefits, exam details, eligibility, and top training features. Become a globally recognised project management professional.",
};

export default function PmpPage() {
    return (
        <>
            <Header />
            <main className="pb-24 min-h-screen bg-white relative overflow-hidden">
                <CertificationHero
                    title="PMP Training – Become a Certified Project Management Professional"
                    subtitle="Transform your career with the world's leading project management credential. Mastery-driven training for real-world impact."
                    description="Our PMP course provides comprehensive, expert-led training to help you master project management principles. Gain practical skills, internationally recognised certification, and the confidence to lead projects successfully."
                    prev={{ name: "CAPM", href: "/capm" }}
                    next={{ name: "PMI-CP", href: "/pmicp" }}
                    gradientClass="from-primary to-primary-700"
                    buttonColorText="text-primary"
                    badgeImage="/certifications/pmp.webp"
                    downloadLink="/pmp-examination-content-outline.pdf"
                />

                <div className="container-custom mt-20 space-y-32">

                    {/* Why PMP Certification Section */}
                    <div className="max-w-4xl mx-auto space-y-12">
                        <div className="text-center space-y-6">
                            <h2 className="text-3xl md:text-5xl font-black text-primary leading-tight">
                                Why PMP® Certification is a Game-Changer for Project Managers
                            </h2>
                            <div className="text-slate-600 text-lg leading-relaxed space-y-6 text-left">
                                <p>
                                    The Project Management Professional (PMP®) certification is the world’s leading credential for project managers, offered by the Project Management Institute (PMI®). PMP proves that you can lead projects successfully, manage teams effectively, and deliver results across a wide range of industries and project types, from large-scale IT implementations and construction projects to complex financial restructuring and healthcare system upgrades.
                                </p>
                                <p>
                                    According to PMI’s Global Salary Survey, PMP-certified professionals earn <strong>25–33% more</strong> than non-certified peers and enjoy faster career growth. Unlike experience alone, PMP certification validates your skills against global standards, giving you unmatched credibility in the eyes of employers and clients worldwide.
                                </p>
                            </div>
                        </div>

                        <div className="bg-slate-50 rounded-[40px] p-10 md:p-16 border border-slate-100">
                            <h3 className="text-2xl font-black text-primary mb-8">Why PMP® is More Credible than Other Certifications</h3>
                            <ul className="grid md:grid-cols-2 gap-6">
                                {[
                                    { title: "Rigorous Eligibility", desc: "Only experienced professionals qualify." },
                                    { title: "Global Recognition", desc: "Accepted in 200+ countries and industries." },
                                    { title: "Real-World Exam", desc: "Covers People, Process, and Business Environment domains." },
                                    { title: "PMBOK® Aligned", desc: "Follows internationally recognised best practices." },
                                    { title: "Ongoing Development", desc: "PMP holders maintain skills through PDUs." }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-start">
                                        <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 shrink-0">
                                            <Check className="text-accent" size={14} />
                                        </div>
                                        <div>
                                            <div className="font-black text-primary">{item.title}</div>
                                            <div className="text-slate-500 text-sm">{item.desc}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-8 text-slate-500 font-medium italic">
                                PMP certification sets you apart, boosts your salary, and opens doors to global project management opportunities. It’s not just a certificate, it’s your passport to professional excellence and career growth.
                            </p>
                        </div>
                    </div>

                    {/* Who is Eligible Section */}
                    <section className="space-y-16">
                        <div className="text-center max-w-3xl mx-auto space-y-4">
                            <span className="label-tag mx-auto">Prerequisites</span>
                            <h2 className="text-4xl font-black text-primary tracking-tight">Who is Eligible for PMP®?</h2>
                            <p className="text-slate-500 font-medium">Find the path that matches your education and experience.</p>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Set A */}
                            <div className="bg-white p-10 rounded-[40px] border-2 border-slate-100 shadow-sm hover:shadow-xl transition-all space-y-8">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center">
                                    <GraduationCap className="text-primary" size={32} />
                                </div>
                                <h3 className="text-2xl font-black text-primary">Set A: High School Diploma</h3>
                                <div className="space-y-6">
                                    <div>
                                        <div className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-2">Education</div>
                                        <div className="text-primary font-black">Secondary school diploma</div>
                                    </div>
                                    <div>
                                        <div className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-2">Experience</div>
                                        <div className="text-primary font-black">5 years (60 months) leading projects</div>
                                    </div>
                                    <div>
                                        <div className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-2">PM Training</div>
                                        <div className="space-y-2">
                                            {["CAPM® certification ✅", "PMI Authorised On-Demand PMP Exam Prep ✅", "Instructor-Led PMP® Course ✅"].map((item, i) => (
                                                <div key={i} className="text-slate-600 font-medium text-sm flex gap-2">
                                                    <span className="text-green-500">✓</span> {item.replace('✅', '')}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Set B */}
                            <div className="bg-primary p-10 rounded-[40px] shadow-2xl space-y-8 text-white scale-105 relative z-10">
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                                    <BookOpen className="text-accent" size={32} />
                                </div>
                                <h3 className="text-2xl font-black">Set B: Bachelor's Degree</h3>
                                <div className="space-y-6">
                                    <div>
                                        <div className="text-blue-200 text-sm font-bold uppercase tracking-wider mb-2">Education</div>
                                        <div className="font-black">Bachelor's degree or global equivalent</div>
                                    </div>
                                    <div>
                                        <div className="text-blue-200 text-sm font-bold uppercase tracking-wider mb-2">Experience</div>
                                        <div className="font-black">3 years (36 months) leading projects</div>
                                    </div>
                                    <div>
                                        <div className="text-blue-200 text-sm font-bold uppercase tracking-wider mb-2">PM Training</div>
                                        <div className="space-y-2">
                                            {["CAPM® certification ✅", "PMI Authorised On-Demand PMP Exam Prep ✅", "Instructor-Led PMP® Course ✅"].map((item, i) => (
                                                <div key={i} className="text-blue-100 font-medium text-sm flex gap-2">
                                                    <span className="text-accent">✓</span> {item.replace('✅', '')}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Set C */}
                            <div className="bg-white p-10 rounded-[40px] border-2 border-slate-100 shadow-sm hover:shadow-xl transition-all space-y-8">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center">
                                    <Globe className="text-primary" size={32} />
                                </div>
                                <h3 className="text-2xl font-black text-primary">Set C: GAC Accredited</h3>
                                <div className="space-y-6">
                                    <div>
                                        <div className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-2">Education</div>
                                        <div className="text-primary font-black">Bachelor's/Master's from GAC-accredited program</div>
                                    </div>
                                    <div>
                                        <div className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-2">Experience</div>
                                        <div className="text-primary font-black">2 years (24 months) leading projects</div>
                                    </div>
                                    <div>
                                        <div className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-2">PM Training</div>
                                        <div className="text-slate-600 font-medium text-sm flex gap-2">
                                            <span className="text-green-500">✓</span> 35 hours pre-approved via GAC coursework
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* PMP Exam Details Section */}
                    <section className="bg-primary rounded-[60px] p-12 md:p-24 text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
                        <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                            <div className="space-y-8">
                                <span className="label-tag bg-white/10 text-white">The Examination</span>
                                <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                                    PMP® Exam Details
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-8">
                                    <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                        <div className="text-accent text-3xl font-black mb-1">180</div>
                                        <div className="text-sm font-bold text-blue-200">Questions</div>
                                    </div>
                                    <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                        <div className="text-accent text-3xl font-black mb-1">230</div>
                                        <div className="text-sm font-bold text-blue-200">Minutes</div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-xl font-black">Exam Domains</h4>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl">
                                            <span className="font-medium">People</span>
                                            <span className="font-black text-accent">42%</span>
                                        </div>
                                        <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl">
                                            <span className="font-medium">Process</span>
                                            <span className="font-black text-accent">50%</span>
                                        </div>
                                        <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl">
                                            <span className="font-medium">Business Environment</span>
                                            <span className="font-black text-accent">8%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-[40px] p-10 text-primary">
                                <h3 className="text-2xl font-black mb-6">Pass on Your First Try</h3>
                                <p className="text-slate-600 mb-8 leading-relaxed">
                                    Our training covers both predictive and agile methodologies, mirroring the actual PMP® exam structure. We provide mock exams and focused practice to ensure you're ready for every scenario.
                                </p>
                                <ul className="space-y-4 mb-10">
                                    <li className="flex gap-3 items-center font-bold text-sm">
                                        <Check className="text-accent" size={20} strokeWidth={3} />
                                        <span>PMI® Authorised Content</span>
                                    </li>
                                    <li className="flex gap-3 items-center font-bold text-sm">
                                        <Check className="text-accent" size={20} strokeWidth={3} />
                                        <span>Full Mock Exam Stimulation</span>
                                    </li>
                                    <li className="flex gap-3 items-center font-bold text-sm">
                                        <Check className="text-accent" size={20} strokeWidth={3} />
                                        <span>35 PDUs Certificate Included</span>
                                    </li>
                                </ul>
                                <Link href="#register" className="btn btn-primary w-full justify-center rounded-2xl">
                                    Enrol in Training Now
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* TOTALPMP Premium Benefits */}
                    <div className="space-y-16">
                        <div className="text-center max-w-4xl mx-auto space-y-6">
                            <span className="label-tag mx-auto">Why Us</span>
                            <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tight">
                                TOTALPMP – Premier <span className="text-accent">PMP® Training</span>
                            </h2>
                            <p className="text-slate-500 text-lg font-medium">
                                We deliver one of New Zealand’s, Australia’s and Asia's most comprehensive and industry-ready PMP® training programs.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Expert-Led Training",
                                    icon: GraduationCap,
                                    items: [
                                        "Instructor-led classroom & live online sessions",
                                        "Delivered by highly experienced professionals",
                                        "Facilitated by 17+ year industry veterans"
                                    ]
                                },
                                {
                                    title: "PMI-Aligned Content",
                                    icon: BookOpen,
                                    items: [
                                        "Material aligned with PMBOK 7th Edition",
                                        "Digital access to PMI case studies",
                                        "Full walkthrough of all PMP® modules"
                                    ]
                                },
                                {
                                    title: "Exam Preparation",
                                    icon: Target,
                                    items: [
                                        "35+ hours of structured exam prep",
                                        "Full-length mock exam included",
                                        "Tips & strategies for first-attempt success"
                                    ]
                                },
                                {
                                    title: "Materials & Tools",
                                    icon: ShieldCheck,
                                    items: [
                                        "30+ professional project templates",
                                        "Downloadable course slides",
                                        "Access to PM Training School modules"
                                    ]
                                },
                                {
                                    title: "Support & Coaching",
                                    icon: Users,
                                    items: [
                                        "Free 1-hour one-on-one coaching",
                                        "Application & audit support help",
                                        "Dedicated guidance throughout the journey"
                                    ]
                                },
                                {
                                    title: "Flexible Options",
                                    icon: Building2,
                                    items: [
                                        "Weekend & weekday classes available",
                                        "Classroom + live online options",
                                        "Lunch & refreshments included"
                                    ]
                                }
                            ].map((benefit, i) => (
                                <div key={i} className="p-10 rounded-[40px] border border-slate-100 bg-white hover:shadow-xl transition-all h-full">
                                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 text-accent">
                                        <benefit.icon size={28} />
                                    </div>
                                    <h3 className="text-xl font-black text-primary mb-4">{benefit.title}</h3>
                                    <ul className="space-y-3">
                                        {benefit.items.map((item, j) => (
                                            <li key={j} className="flex gap-2 text-sm text-slate-500 font-medium">
                                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

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
