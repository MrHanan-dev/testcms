import Header from '@/components/Header';
import FAQ from '@/components/FAQ';
import TrainingSchedule from '@/components/TrainingSchedule';
import Footer from '@/components/Footer';
import MobileNav from '@/components/MobileNav';
import CertificationHero from '@/components/CertificationHero';
import { Check, HardHat, BookOpen, Users, Target, Clock, Layout, Award, Briefcase, Send } from 'lucide-react';
import Link from 'next/link';
import BookingForm from '@/components/BookingForm';
import Features from '@/components/Features';
import CourseSuccessQuotes from '@/components/CourseSuccessQuotes';

export const metadata = {
    title: "PMI Construction Professional (PMI-CP)® Certification Exam Prep",
    description: "Master real-world construction project management tools and techniques tailored for professionals in the built environment. Globally recognised credential from PMI.",
};

export default function PmiCpPage() {
    return (
        <>
            <Header />
            <main className="pb-24 min-h-screen bg-slate-50 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-100/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                <CertificationHero
                    title="PMI-CP® Certification – Master Construction Project Management"
                    subtitle="The leading global credential for the built environment. Professional excellence from plan to completion."
                    description="Validate your ability to plan, manage, and deliver complex construction projects using industry-best practices and globally recognised standards."
                    prev={{ name: "PMP", href: "/pmp" }}
                    next={{ name: "CAPM", href: "/capm" }}
                    gradientClass="from-primary to-primary-700"
                    buttonColorText="text-primary"
                    badgeImage="/certifications/pmi-cp.webp"
                    downloadLink="/PMICP Exam-Content-Outline.pdf"
                />

                <div className="container-custom mt-20 space-y-24">

                    {/* Description Section - matches PMP/CAPM layout */}
                    <section id="details" className="max-w-4xl mx-auto space-y-16">
                        <div className="text-center space-y-6">
                            <h2 className="text-3xl md:text-5xl font-black text-primary leading-tight">
                                PMI Construction Professional (PMI-CP)® Certification
                            </h2>
                            <div className="text-slate-600 text-lg leading-relaxed space-y-6 text-left">
                                <p>
                                    The <strong>PMI Construction Professional (PMI-CP)® certification</strong>, offered by the Project Management Institute (PMI), is a globally recognised credential for professionals in the construction and built environment sectors. Designed for engineers, project managers, and construction leaders, the PMI-CP® validates your ability to plan, manage, and deliver complex construction projects using industry-best practices.
                                </p>
                                <p>
                                    This prestigious certification demonstrates advanced skills in project planning, risk management, cost control, contract administration, scope management, and quality assurance — all critical for achieving success in modern construction environments.
                                </p>
                                <p>
                                    Whether you work in commercial, residential, or infrastructure projects, the PMI-CP® certification positions you as a qualified, internationally recognised construction management professional capable of handling projects from concept to completion.
                                </p>
                            </div>
                        </div>

                        <div className="bg-primary rounded-[40px] p-12 md:p-16 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 -skew-x-12 translate-x-1/2"></div>
                            <div className="relative z-10 space-y-8">
                                <h3 className="text-3xl font-black tracking-tight">Why PMI-CP® Certification Matters</h3>
                                <p className="text-blue-100 text-lg leading-relaxed max-w-2xl">
                                    Earning the PMI-CP® gives you a competitive edge in the construction industry, enhances your career opportunities, and demonstrates your ability to manage projects to international standards.
                                </p>
                                <div className="grid md:grid-cols-2 gap-8">
                                    {[
                                        { title: "Global Recognition", desc: "Endorsed by PMI — the world’s leading authority." },
                                        { title: "Career Advancement", desc: "Open doors to higher-level roles." },
                                        { title: "Practical Skills", desc: "Master tools tailored for construction." },
                                        { title: "Competitive Edge", desc: "Stand out in NZ and international markets." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 items-start">
                                            <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                                                <Check className="text-accent" size={14} />
                                            </div>
                                            <div>
                                                <div className="font-black">{item.title}</div>
                                                <div className="text-blue-100/60 text-sm">{item.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-[40px] p-10 md:p-16 border-2 border-slate-100 shadow-sm">
                            <h3 className="text-2xl font-black text-primary mb-8 underline decoration-accent decoration-4 underline-offset-8">PMI-CP® Eligibility Requirements</h3>
                            <p className="text-slate-600 mb-8 font-medium">To be eligible for the PMI-CP certification, you must meet the following criteria:</p>
                            <div className="grid md:grid-cols-2 gap-10 text-left">
                                <div className="space-y-4">
                                    <h4 className="text-xl font-bold flex items-center gap-2">
                                        <Briefcase className="text-primary" size={20} /> 1. Experience
                                    </h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        Minimum of <strong>3-4 years</strong> of professional experience in the construction or built environment field within the last 10 years.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-xl font-bold flex items-center gap-2">
                                        <Award className="text-accent" size={20} /> 2. Speciality
                                    </h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        Experience must be in a project leadership or professional role within construction.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Curriculum / Syllabus & Features - matches PMP/CAPM 3+2 grid */}
                    <section className="grid lg:grid-cols-5 gap-12">
                        <div className="lg:col-span-3">
                            <h2 className="text-3xl font-bold text-primary mb-2">Curriculum / Syllabus</h2>
                            <p className="text-slate-500 mb-8">Aligned with PMI&apos;s construction-specific standards and best practices.</p>

                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-start mb-4">
                                        <h4 className="text-xl font-bold text-primary flex items-center gap-2">
                                            <Award className="text-accent" /> Construction Project Fundamentals
                                        </h4>
                                        <span className="bg-accent/20 text-primary font-bold px-3 py-1 rounded-full text-sm">30%</span>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed">
                                        Core construction project management principles, life cycles, and methodologies specific to the built environment.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-start mb-4">
                                        <h4 className="text-xl font-bold text-primary flex items-center gap-2">
                                            <Target className="text-primary" /> Scope, Risk & Contract Management
                                        </h4>
                                        <span className="bg-slate-100 text-primary font-bold px-3 py-1 rounded-full text-sm">35%</span>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed">
                                        Navigating contracts, mitigating project risk, scope control, and change order management in construction contexts.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-start mb-4">
                                        <h4 className="text-xl font-bold text-primary flex items-center gap-2">
                                            <Users className="text-accent" /> Stakeholder & Interface Management
                                        </h4>
                                        <span className="bg-accent/10 text-primary font-bold px-3 py-1 rounded-full text-sm">20%</span>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed">
                                        Building stronger stakeholder relationships, improving team communication, and managing interfaces across disciplines.
                                    </p>
                                </div>

                                <div className="bg-slate-800 text-white p-6 rounded-2xl">
                                    <div className="flex justify-between items-start mb-4">
                                        <h4 className="text-xl font-bold text-white flex items-center gap-2">
                                            <Briefcase className="text-accent" /> Cost, Quality & Safety
                                        </h4>
                                        <span className="bg-slate-700 text-slate-300 font-bold px-3 py-1 rounded-full text-sm">15%</span>
                                    </div>
                                    <p className="text-slate-300 leading-relaxed text-sm">
                                        Cost control, quality assurance, and safety standards critical for achieving success in modern construction environments.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-bold text-primary mb-8">Key Course Features</h2>
                            <ul className="space-y-6">
                                {[
                                    { title: "35+ Hours Training", icon: Clock, desc: "Comprehensive coverage of all 4 course modules and learning domains." },
                                    { title: "Expert Practitioners", icon: Users, desc: "Delivered by PMI-CP® certified construction professionals." },
                                    { title: "Course Materials", icon: Layout, desc: "Slideware, 30+ PM templates, and PMI's official learning materials." },
                                    { title: "Mock Exams", icon: Target, desc: "Full-length mock exam plus additional topic-specific questions." },
                                    { title: "Application Support", icon: BookOpen, desc: "Assistance with exam booking and preparation guidance." },
                                    { title: "Attendance Certificate", icon: Award, desc: "Proof of course completion for your certification application." },
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

                    {/* Why Train with TotalPMPro Section */}
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
                                "Trainers hand-picked for their expertise and real-world construction PM experience.",
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
                                courseName="PMI-CP® Certification"
                                availableDates={["March 2026", "April 2026", "May 2026"]}
                            />
                        </div>
                        <div className="md:col-span-2 space-y-8">
                            <div className="bg-slate-800 text-white p-10 rounded-[40px] shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-bl-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                                <h3 className="text-2xl font-bold mb-6 relative z-10">Advance your<br />construction<br />career</h3>
                                <p className="text-slate-300 mb-8 relative z-10 font-medium">Get certified and lead multi-million dollar construction projects.</p>
                                <Link
                                    href="#contact"
                                    className="inline-flex items-center gap-2 text-accent font-bold group/link relative z-10"
                                >
                                    Contact an advisor
                                    <Send size={16} className="group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            <div className="p-8 border-2 border-dashed border-slate-200 rounded-[40px] text-center">
                                <p className="text-slate-500 font-medium italic">
                                    &quot;The only certification that truly understands the complexities of the NZ construction site.&quot;
                                </p>
                                <div className="mt-4 font-bold text-primary">— Fletcher Construction Lead</div>
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
