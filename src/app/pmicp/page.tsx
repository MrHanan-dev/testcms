import Header from '@/components/Header';
import FAQ from '@/components/FAQ';
import TrainingSchedule from '@/components/TrainingSchedule';
import Footer from '@/components/Footer';
import MobileNav from '@/components/MobileNav';
import CertificationHero from '@/components/CertificationHero';
import { Check, HardHat, TrendingUp, Presentation, Briefcase, Award, Shield, FileText, ClipboardList, Clock, Layout, BookOpen, Users, Send } from 'lucide-react';
import Link from 'next/link';
import BookingForm from '@/components/BookingForm';
import Features from '@/components/Features';

export const metadata = {
    title: "PMI Construction Professional (PMI-CP)® Certification",
    description: "Validate your ability to manage and deliver complex construction projects with the globally recognised PMI-CP® certification.",
};

export default function PmiCpPage() {
    return (
        <>
            <Header />
            <main className="pb-24 min-h-screen bg-gray-50/50">
                {/* Hero section */}
                <CertificationHero
                    title="PMI-CP® Certification"
                    subtitle="PMI Construction Professional"
                    description="Validate your ability to plan, manage, and deliver complex construction projects using industry-best practices."
                    prev={{ name: "PMP", href: "/pmp" }}
                    next={{ name: "CAPM", href: "/capm" }}
                    gradientClass="from-amber-700 to-amber-900"
                    buttonColorText="text-amber-800"
                    badgeImage="/certifications/pmi-cp.webp"
                    downloadLink="/PMICP Exam-Content-Outline.pdf"
                />

                <div className="container-custom max-w-5xl mt-16 space-y-24">

                    {/* Introduction Section */}
                    <section className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 text-lg text-gray-700 leading-relaxed space-y-6">
                        <p>
                            The <strong className="text-primary">PMI Construction Professional (PMI-CP)®</strong> certification, offered by the Project Management Institute (PMI), is a globally recognised credential for professionals in the construction and built environment sectors. Designed for engineers, project managers, and construction leaders, the PMI-CP® validates your ability to plan, manage, and deliver complex construction projects using industry-best practices.
                        </p>
                        <p>
                            This prestigious certification demonstrates advanced skills in <strong>project planning, risk management, cost control, contract administration, scope management, and quality assurance</strong> - all critical for achieving success in modern construction environments.
                        </p>
                        <p>
                            Whether you work in commercial, residential, or infrastructure projects, the PMI-CP® certification positions you as a qualified, internationally recognised construction management professional capable of handling projects from concept to completion.
                        </p>
                    </section>

                    {/* Why It Matters */}
                    <section className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="text-3xl font-bold text-primary mb-6 leading-tight">
                                Validate your knowledge and stand out with PMI-CP™
                            </h2>
                            <p className="text-gray-700 leading-relaxed text-lg pb-6 border-b border-gray-200">
                                Created by construction professionals for the construction industry, the PMI-CP™ certification is designed to enhance your construction or built-environment project management skills and deliver better outcomes. This globally recognized certification demonstrates your ability to manage complex construction projects effectively, ensuring timelines, budgets, and quality standards are met.
                            </p>

                            <h3 className="text-2xl font-bold text-primary mb-6 mt-8">
                                Why PMI-CP?
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    { title: "Stand out from the crowd", desc: "PMI-CP™ is the only internationally recognized certification that offers an in-depth curriculum focused on the construction industry. Gain an independent affirmation of your knowledge and mastery of construction concepts." },
                                    { title: "Enhance the industry and your organisation", desc: "Achieve greater efficiency, profitability, and sustainability in projects and their delivery." },
                                    { title: "Created by professionals, for the industry", desc: "The PMI-CP™ certification represents the skills and knowledge you need to help build a better tomorrow." }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                                        <Award className="text-amber-600 shrink-0 mt-1" size={24} />
                                        <div>
                                            <strong className="text-primary block mb-1">{item.title}</strong>
                                            <span className="text-gray-600 text-sm">{item.desc}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right Column: Roles & Eligibility */}
                        <div className="space-y-8">
                            {/* Who Should Apply */}
                            <div className="bg-amber-50 p-8 rounded-3xl border border-amber-100">
                                <h3 className="text-2xl font-bold text-amber-900 mb-6 flex items-center gap-3">
                                    <HardHat className="text-amber-700" size={28} /> This course is ideal for:
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        "Construction professionals aspiring to advance their project management skills",
                                        "Project managers, coordinators, and planners in the construction sector",
                                        "Architects, engineers, and consultants transitioning to project management roles",
                                        "Industry leaders aiming to validate their expertise with a globally recognized credential"
                                    ].map((role, i) => (
                                        <li key={i} className="flex items-start gap-3 text-amber-900 bg-white px-4 py-3 rounded-xl shadow-sm">
                                            <Check size={18} className="text-amber-500 shrink-0 mt-0.5" />
                                            <span className="font-semibold text-sm">{role}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Eligibility */}
                            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
                                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                                    ✅ Prerequisites
                                </h3>
                                <ul className="space-y-6">
                                    <li className="flex gap-4">
                                        <div className="bg-blue-100 p-3 rounded-full text-blue-600 h-12 w-12 flex items-center justify-center shrink-0">
                                            <Briefcase size={20} />
                                        </div>
                                        <p className="text-gray-700 text-sm pt-1"><strong>At least 3 years of on-the-job experience</strong> (within the last 10 years) in construction projects or built environment projects.</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="bg-green-100 p-3 rounded-full text-green-600 h-12 w-12 flex items-center justify-center shrink-0">
                                            <BookOpen size={20} />
                                        </div>
                                        <p className="text-gray-700 text-sm pt-1"><strong>Specialised education</strong> focused on the construction industry. TotalPMPro's course will cover this requirement.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Course Outcomes & Included */}
                    <section className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold text-primary mb-6">Course Outcomes</h2>
                            <p className="text-gray-600 mb-8">
                                Our course will prepare you to pass the PMI-CP™ exam by giving you the confidence, knowledge, and the study materials needed to pass the PMI–CP™ first time and you will be able to:
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Apply construction-specific project management principles",
                                    "Navigate Contracts and mitigate Project Risk effectively",
                                    "Deliver projects while focusing on Scope and Change Order Management",
                                    "Understand the importance and value of Interface Management",
                                    "Build stronger stakeholder relationships and improve team communication & collaboration"
                                ].map((outcome, i) => (
                                    <li key={i} className="flex gap-3">
                                        <div className="mt-1 bg-green-100 text-green-600 p-1 rounded-full shrink-0">
                                            <Check size={16} strokeWidth={3} />
                                        </div>
                                        <span className="text-gray-700">{outcome}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-slate-800 text-white p-8 md:p-10 rounded-3xl shadow-xl">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <Award className="text-accent" /> What's included in the course
                            </h3>
                            <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                                A full walkthrough of the 4 course modules and learning domains, delivered by a PMI-CP™ certified practitioner. This includes slideware, application support, mock exam questions, and exam taking advice.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "35+ hours of training",
                                    "Downloadable course material & >30 project management templates",
                                    "Digital access to PMI's official learning material (case studies, readings)",
                                    "A full length mock exam, plus additional topic questions",
                                    "Assistance with exam booking if required",
                                    "Exam preparation guidance",
                                    "Attendance certificate (Proof of Course Completion)"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-200">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2"></div>
                                        <span className="text-sm font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

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
                                    <div className="mt-1 bg-teal-100 text-teal-600 p-1.5 rounded-full shrink-0 h-fit">
                                        <Check size={16} strokeWidth={3} />
                                    </div>
                                    <p className="text-slate-700 font-medium text-sm leading-relaxed">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Comparison / Why Choose Us */}
                    <Features />

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
                                    href="/about#contact"
                                    className="inline-flex items-center gap-2 text-accent font-bold group/link relative z-10"
                                >
                                    Contact an advisor
                                    <Send size={16} className="group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            <div className="p-8 border-2 border-dashed border-slate-200 rounded-[40px] text-center">
                                <p className="text-slate-500 font-medium italic">
                                    "The only certification that truly understands the complexities of the NZ construction site."
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
