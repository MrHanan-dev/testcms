import Header from '@/components/Header';
import FAQ from '@/components/FAQ';
import TrainingSchedule from '@/components/TrainingSchedule';
import Footer from '@/components/Footer';
import CertificationHero from '@/components/CertificationHero';
import { Check, HardHat, BookOpen, Users, Target, Clock, Layout, Award, Briefcase, Send, Globe } from 'lucide-react';
import Link from 'next/link';
import BookingForm from '@/components/BookingForm';
import Features from '@/components/Features';
import CourseSuccessQuotes from '@/components/CourseSuccessQuotes';
import ScrollButton from '@/components/ScrollButton';
import ContactLink from '@/components/ContactLink';

export const metadata = {
    title: "PMI Construction Professional (PMI-CP)® Certification",
    description: "Validate your ability to manage and deliver complex construction projects with the globally recognised PMI-CP® certification.",
};

export default function PmiCpPage() {
    return (
        <>
            <Header variant="transparent" />
            <main className="min-h-screen bg-slate-50 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-100/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                <CertificationHero
                    title="PMI-CP® Certification"
                    subtitle="PMI Construction Professional"
                    description="Validate your ability to plan, manage, and deliver complex construction projects using industry-best practices."
                    prev={{ name: "PMP", href: "/pmp" }}
                    next={{ name: "CAPM", href: "/capm" }}
                    gradientClass="from-primary to-primary-700"
                    buttonColorText="text-primary"
                    badgeImage="/certifications/pmi-cp.webp"
                    downloadLink="/PMICP Exam-Content-Outline.pdf"
                />

                <div className="container-custom mt-20 space-y-24">

                    {/* Description Section - matches PMP/CAPM layout */}
                    <section id="details" className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-primary font-bold text-sm mb-6">
                                <HardHat size={16} /> Construction Excellence
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
                                Why PMI-CP® Is a Game Changer
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                The PMI Construction Professional (PMI-CP)® certification is a globally recognised credential for professionals in the construction and built environment sectors. It validates your ability to plan, manage, and deliver complex construction projects using industry-best practices.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { title: "Stand Out from the Crowd", desc: "The only internationally recognized certification with an in-depth curriculum focused on the construction industry." },
                                    { title: "Enhance Your Organisation", desc: "Achieve greater efficiency, profitability, and sustainability in projects and their delivery." },
                                    { title: "Global Recognition", desc: "Gain an independent affirmation of your knowledge and mastery of construction concepts." },
                                    { title: "Created by Professionals", desc: "The PMI-CP® certification represents the skills and knowledge you need to help build a better tomorrow." },
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
                                <p className="text-slate-600 mb-6 text-sm">Designed for engineers, project managers, and construction leaders looking to advance their careers.</p>
                                <ul className="space-y-3">
                                    {[
                                        "Construction Project Managers & Coordinators",
                                        "Architects & Engineers in PM Roles",
                                        "Quantity Surveyors & Planners",
                                        "Industry Leaders Seeking Global Credentials",
                                        "Professionals with 3-4 Years Construction Experience",
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

                    {/* ── PMI-CP Eligibility Requirements ── */}
                    <section className="bg-white rounded-3xl border border-slate-100 shadow-sm p-10 md:p-14">
                        <div className="mb-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-primary font-bold text-sm mb-4">
                                <Check size={16} /> Eligibility Requirements
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-primary mb-3">Who Can Apply for the PMI-CP?</h2>
                            <p className="text-slate-500 text-lg font-medium max-w-2xl">
                                The PMI-CP requires construction-specific project experience. Choose the pathway matching your education background.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-10">
                            {/* Track 1 */}
                            <div className="rounded-2xl border-2 border-accent/30 bg-accent/5 p-8 flex flex-col gap-5">
                                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-primary font-black text-lg">1</div>
                                <div>
                                    <h3 className="text-xl font-black text-primary mb-1">Secondary Diploma Track</h3>
                                    <p className="text-slate-500 text-sm font-medium">(High school diploma / GED equivalent)</p>
                                </div>
                                <ul className="space-y-3">
                                    {[
                                        "Secondary diploma (high school or equivalent)",
                                        "35 contact hours of construction PM education",
                                        "60 months (5 years) of construction project experience",
                                    ].map((req, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-700 font-medium text-sm">
                                            <div className="mt-1 bg-accent/30 text-primary p-0.5 rounded-full shrink-0"><Check size={14} strokeWidth={3} /></div>
                                            {req}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Track 2 */}
                            <div className="rounded-2xl border-2 border-primary/20 bg-primary/5 p-8 flex flex-col gap-5">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black text-lg">2</div>
                                <div>
                                    <h3 className="text-xl font-black text-primary mb-1">Degree Track</h3>
                                    <p className="text-slate-500 text-sm font-medium">(Construction, engineering or related field)</p>
                                </div>
                                <ul className="space-y-3">
                                    {[
                                        "Bachelor's or associate degree in construction or related field",
                                        "35 contact hours of construction PM education",
                                        "36 months (3 years) of construction project experience",
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
                                <strong className="text-primary">Good news:</strong> Our PMI-CP training course fulfils the <strong className="text-primary">35 contact hours</strong> requirement for both tracks. Construction experience must be documented in your PMI application.
                            </p>
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

                        {/* Right side - What you get & Exam Format */}
                        <div className="lg:col-span-2 space-y-8">
                            <div className="bg-primary rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -mr-20 -mt-20"></div>

                                <h3 className="text-2xl font-bold mb-6 relative z-10">What's Included</h3>
                                <ul className="space-y-5 relative z-10">
                                    {[
                                        "35+ Hours of Live Expert-led Training",
                                        "Official PMI® Authorized Training Content",
                                        "PMI-CP Mock Exams & Questions",
                                        "PMI Application Assistance",
                                        "Post-Training Support till Certification",
                                        "100% Exam Pass Guarantee (T&Cs Apply)"
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
                                <h3 className="text-2xl font-bold text-primary mb-6">PMI-CP® Exam Format</h3>
                                <ul className="space-y-5">
                                    <li className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-accent shrink-0 border border-slate-100">
                                            <Target size={20} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-primary">170 Questions</p>
                                            <p className="text-slate-500 text-sm">Scenario-based multiple-choice (150 scored, 20 unscored)</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-accent shrink-0 border border-slate-100">
                                            <Clock size={20} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-primary">230 Minutes</p>
                                            <p className="text-slate-500 text-sm">Total exam duration (3 hours 50 minutes). Two 10-minute breaks available.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-accent shrink-0 border border-slate-100">
                                            <Layout size={20} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-primary">Exam Structure</p>
                                            <p className="text-slate-500 text-sm">4 Domains: Fundamentals, Contract, Stakeholder, Execution</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Why Train with TotalPMP Section */}
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
                                "Trainers hand picked for their expertise and real world construction PM experience.",
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
                    <Features titleSuffix="PMI-CP® Journey" descriptionSuffix="PMI-CP® training programs" />
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
                                <ContactLink
                                    className="inline-flex items-center justify-center py-6 px-16 bg-white text-primary font-black text-xl rounded-2xl hover:scale-105 transition-all shadow-2xl"
                                >
                                    Enquire Now
                                </ContactLink>
                            </div>

                            <div className="p-8 border-2 border-dashed border-slate-200 rounded-[40px] text-center">
                                <p className="text-slate-500 font-medium italic">
                                    &quot;The only certification that truly understands the complexities of the NZ construction site.&quot;
                                </p>
                                <div className="mt-4 font-bold text-primary">  Fletcher Construction Lead</div>
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
