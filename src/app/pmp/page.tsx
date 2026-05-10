import Header from '@/components/Header';
import FAQ from '@/components/FAQ';
import TrainingSchedule from '@/components/TrainingSchedule';
import Footer from '@/components/Footer';
import { Check, Star, Send, ArrowRight, TrendingUp, ShieldCheck, Globe, Users, Building2, Target, Award, Clock, Layout, BookOpen, HardHat, Briefcase, GraduationCap, AlertCircle, List, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import CertificationHero from '@/components/CertificationHero';
import BookingForm from '@/components/BookingForm';
import CourseSuccessQuotes from '@/components/CourseSuccessQuotes';
import ScrollButton from '@/components/ScrollButton';
import ContactLink from '@/components/ContactLink';

export const metadata: Metadata = {
    title: "TheAgileNest Premier PMP® Training | Global Certification",
    description: "Join New Zealand, Australia, and Asia's most comprehensive PMP® training with expert practitioners. Pass on your first try!",
};

export default function PmpPage() {
    return (
        <>
            <Header variant="transparent" />
            <main className="min-h-screen bg-white relative overflow-hidden">
                <CertificationHero
                    title="PMP Training"
                    subtitle="Become a Certified Project Management Professional"
                    description="Our PMP course provides comprehensive, expert led training to help you master project management principles. Gain practical skills, internationally recognised certification, and the confidence to lead projects successfully."
                    prev={{ name: "CAPM", href: "/capm" }}
                    next={{ name: "PMI-CP", href: "/pmicp" }}
                    gradientClass="from-primary to-primary-700"
                    buttonColorText="text-primary"
                    badgeImage="/certifications/pmp.webp"
                    downloadLink="/pmp-examination-content-outline.pdf"
                />

                <div className="container-custom mt-12 md:mt-20 space-y-20 md:space-y-32">

                    {/* Description Section - Adapted from PMI-CP */}
                    <section id="details" className="grid lg:grid-cols-5 gap-16 lg:gap-24 items-start">
                        <div className="lg:col-span-3">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-primary font-bold text-sm mb-6">
                                <ShieldCheck size={16} /> Project Excellence
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-primary mb-4 leading-tight">
                                PMP® Certification
                            </h2>
                            <p className="text-xl md:text-2xl font-bold text-accent mb-8 leading-snug">
                                Advance Your Career with a Globally Respected Credential
                            </p>
                            <div className="text-slate-600 text-lg leading-relaxed mb-10 space-y-6">
                                <p>
                                    The PMP® (Project Management Professional) certification is one of the world’s most recognised qualifications for project leaders. It proves your ability to lead projects, manage teams, control scope, schedule, budget, and deliver successful outcomes across industries.
                                </p>
                                <p>
                                    Highly valued by employers in New Zealand and worldwide, the PMP® certification can strengthen your professional profile, unlock senior career opportunities, and increase your earning potential.
                                </p>
                                <p>
                                    At The Agile Nest, we deliver practical, results-focused PMP® training with expert guidance, real-world examples, mock exams, and structured support to help you pass with confidence.
                                </p>
                                <p className="font-bold text-primary text-xl border-l-4 border-accent pl-6 py-2 bg-slate-50 rounded-r-2xl">
                                    Earn a credential trusted by employers worldwide and take the next step in your project management career.
                                </p>
                            </div>

                            <div className="bg-white rounded-3xl border border-slate-100 p-6 md:p-10 shadow-sm">
                                <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
                                    <TrendingUp className="text-accent" /> Why PMP is a Game Changer
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
                                    {[
                                        { title: "20% Higher Salary", desc: "(PMI Salary Survey)" },
                                        { title: "Stronger Growth", desc: "Unlock senior roles globally." },
                                        { title: "Stand Out", desc: "The gold standard in PM certification." },
                                        { title: "Enhance Organisation", desc: "Achieve greater efficiency and ROI." },
                                        { title: "Global Recognition", desc: "Knowledge mastery affirmation." },
                                        { title: "Professional Built", desc: "Skills to build a better tomorrow." },
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 items-start group">
                                            <div className="bg-accent/10 text-primary p-2 rounded-xl shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                                                <Check size={16} strokeWidth={3} />
                                            </div>
                                            <div>
                                                <span className="text-primary font-bold block mb-1">{item.title}</span>
                                                <span className="text-slate-500 text-sm leading-tight">{item.desc}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-2 sticky top-32">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/5 rounded-[40px] transform rotate-2 scale-105 -z-10"></div>
                                <div className="bg-white p-8 md:p-12 rounded-[32px] md:rounded-[40px] shadow-2xl border border-slate-100 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16"></div>
                                    
                                    <h3 className="text-2xl font-black text-primary border-b border-slate-100 pb-6 mb-8">Who Should Apply?</h3>
                                    <p className="text-slate-600 mb-8 text-base font-medium leading-relaxed">Designed for experienced project managers looking to validate their skills and advance their careers.</p>
                                    <ul className="space-y-4">
                                        {[
                                            "Project Managers & Directors",
                                            "Program & Portfolio Managers",
                                            "Delivery Leads & TheAgileNest Coaches",
                                            "Industry Leaders Seeking Global Credentials",
                                            "Professionals with 3+ Years PM Experience",
                                        ].map((audience, i) => (
                                            <li key={i} className="flex items-center gap-4 text-slate-700 font-semibold group">
                                                <div className="w-2.5 h-2.5 rounded-full bg-accent group-hover:scale-150 transition-transform shrink-0"></div>
                                                {audience}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-12 pt-8 border-t border-slate-100">
                                        <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                                <ShieldCheck size={24} />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-primary">Official A.T.P.</div>
                                                <div className="text-xs text-slate-500 font-medium">Authorized Training Partner</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── PMP Eligibility Requirements ── */}
                    <section className="bg-white rounded-[32px] md:rounded-[40px] border border-slate-100 shadow-sm p-6 sm:p-10 md:p-16">
                        <div className="mb-12">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-primary font-bold text-sm mb-4">
                                <Check size={16} /> Eligibility Criteria
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-primary mb-4">Who Can Apply for the PMP?</h2>
                            <p className="text-slate-500 text-lg font-medium max-w-3xl">
                                The PMP requires both project management education and documented experience. Choose the pathway that matches your background.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8">
                            {/* Pathway 1 */}
                            <div className="rounded-3xl border border-slate-100 bg-slate-50/50 p-8 flex flex-col gap-6 hover:shadow-xl transition-all border-l-4 border-l-accent group">
                                <div className="flex justify-between items-start">
                                    <div className="w-10 h-10 rounded-xl bg-accent text-white flex items-center justify-center font-bold">1</div>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Secondary School</span>
                                </div>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="mt-1 bg-white text-accent p-2 rounded-xl shadow-sm shrink-0 h-fit"><BookOpen size={18} /></div>
                                        <div>
                                            <h4 className="font-bold text-primary mb-1">Educational Background</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Completion of upper-secondary/secondary school (e.g., High School Diploma, GED-type secondary equivalency, Upper-Secondary/School Leaving Certificate) mapped to <a href="https://europa.eu/europass/en/description-eight-eqf-levels" target="_blank" className="text-accent font-bold hover:underline">EQF Level 4 Description of the eight EQF levels | Europass</a> / <a href="https://ec.europa.eu/eurostat/statistics-explained/index.php?title=International_Standard_Classification_of_Education_(ISCED)" target="_blank" className="text-accent font-bold hover:underline">International Standard Classification of Education (ISCED) - Statistics Explained - Eurostat</a> ISCED 3–4 (or the national framework level for upper-secondary completion).
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="mt-1 bg-white text-primary p-2 rounded-xl shadow-sm shrink-0 h-fit"><Briefcase size={18} /></div>
                                        <div>
                                            <h4 className="font-bold text-primary mb-1">Professional Experience</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Minimum <strong>60 months / 5 years</strong> of non-overlapping experience leading projects within the past 10 years.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 pt-4 border-t border-slate-200/60">
                                        <div className="mt-1 bg-primary/10 text-primary p-2 rounded-xl shrink-0 h-fit"><GraduationCap size={18} /></div>
                                        <div>
                                            <h4 className="font-bold text-primary mb-1 text-sm uppercase tracking-wider">Mandatory Training</h4>
                                            <p className="text-slate-500 text-xs leading-relaxed">
                                                Must also complete 35 hours of formal training aligned with the <a href="https://www.pmi.org/-/media/pmi/documents/public/pdf/certifications/project-management-professional-exam-outline.pdf" target="_blank" className="text-accent font-bold hover:underline">PMP Certification Exam Content Outline (ECO)</a>.
                                            </p>
                                            <p className="text-[10px] text-primary font-bold mt-2 flex items-center gap-1">
                                                <Check size={10} strokeWidth={4} /> The Agile Nest provides 35 contact hours & completion certificate.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Pathway 2 */}
                            <div className="rounded-3xl border border-slate-100 bg-slate-50/50 p-8 flex flex-col gap-6 hover:shadow-xl transition-all border-l-4 border-l-primary group">
                                <div className="flex justify-between items-start">
                                    <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-bold">2</div>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Associate Degree</span>
                                </div>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="mt-1 bg-white text-accent p-2 rounded-xl shadow-sm shrink-0 h-fit"><BookOpen size={18} /></div>
                                        <div>
                                            <h4 className="font-bold text-primary mb-1">Educational Background</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Completion of a recognised associate-level qualification, higher certificate, or advanced technical/vocational program mapped to <a href="https://europa.eu/europass/en/description-eight-eqf-levels" target="_blank" className="text-accent font-bold hover:underline">EQF Level 5</a> / <a href="https://ec.europa.eu/eurostat/statistics-explained/index.php?title=International_Standard_Classification_of_Education_(ISCED)" target="_blank" className="text-accent font-bold hover:underline">ISCED 5</a> (or national framework level designated as post-secondary, short-cycle tertiary).
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="mt-1 bg-white text-primary p-2 rounded-xl shadow-sm shrink-0 h-fit"><Briefcase size={18} /></div>
                                        <div>
                                            <h4 className="font-bold text-primary mb-1">Professional Experience</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Minimum <strong>48 months / 4 years</strong> of non-overlapping experience leading projects within the past 10 years.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 pt-4 border-t border-slate-200/60">
                                        <div className="mt-1 bg-primary/10 text-primary p-2 rounded-xl shrink-0 h-fit"><GraduationCap size={18} /></div>
                                        <div>
                                            <h4 className="font-bold text-primary mb-1 text-sm uppercase tracking-wider">Mandatory Training</h4>
                                            <p className="text-slate-500 text-xs leading-relaxed">
                                                Must also complete 35 hours of formal training aligned with the <a href="https://www.pmi.org/-/media/pmi/documents/public/pdf/certifications/project-management-professional-exam-outline.pdf" target="_blank" className="text-accent font-bold hover:underline">PMP Certification Exam Content Outline (ECO)</a>.
                                            </p>
                                            <p className="text-[10px] text-primary font-bold mt-2 flex items-center gap-1">
                                                <Check size={10} strokeWidth={4} /> The Agile Nest provides 35 contact hours & completion certificate.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Pathway 3 */}
                            <div className="rounded-3xl border border-slate-100 bg-slate-50/50 p-8 flex flex-col gap-6 hover:shadow-xl transition-all border-l-4 border-l-accent group">
                                <div className="flex justify-between items-start">
                                    <div className="w-10 h-10 rounded-xl bg-accent text-white flex items-center justify-center font-bold">3</div>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Bachelor's Degree</span>
                                </div>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="mt-1 bg-white text-accent p-2 rounded-xl shadow-sm shrink-0 h-fit"><BookOpen size={18} /></div>
                                        <div>
                                            <h4 className="font-bold text-primary mb-1">Educational Background</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Bachelor’s degree (or higher) from a recognised / authorised institution; or an advanced professional/vocational qualification formally mapped to <a href="https://europa.eu/europass/en/description-eight-eqf-levels" target="_blank" className="text-accent font-bold hover:underline">EQF Level 6</a> / <a href="https://ec.europa.eu/eurostat/statistics-explained/index.php?title=International_Standard_Classification_of_Education_(ISCED)" target="_blank" className="text-accent font-bold hover:underline">ISCED 6</a> (or the national framework level designated as bachelor-equivalent).
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="mt-1 bg-white text-primary p-2 rounded-xl shadow-sm shrink-0 h-fit"><Briefcase size={18} /></div>
                                        <div>
                                            <h4 className="font-bold text-primary mb-1">Professional Experience</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Minimum <strong>36 months / 3 years</strong> of non-overlapping experience leading projects within the past 10 years.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 pt-4 border-t border-slate-200/60">
                                        <div className="mt-1 bg-primary/10 text-primary p-2 rounded-xl shrink-0 h-fit"><GraduationCap size={18} /></div>
                                        <div>
                                            <h4 className="font-bold text-primary mb-1 text-sm uppercase tracking-wider">Mandatory Training</h4>
                                            <p className="text-slate-500 text-xs leading-relaxed">
                                                Must also complete 35 hours of formal training aligned with the <a href="https://www.pmi.org/-/media/pmi/documents/public/pdf/certifications/project-management-professional-exam-outline.pdf" target="_blank" className="text-accent font-bold hover:underline">PMP Certification Exam Content Outline (ECO)</a>.
                                            </p>
                                            <p className="text-[10px] text-primary font-bold mt-2 flex items-center gap-1">
                                                <Check size={10} strokeWidth={4} /> The Agile Nest provides 35 contact hours & completion certificate.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Pathway 4 */}
                            <div className="rounded-3xl border border-slate-100 bg-slate-50/50 p-8 flex flex-col gap-6 hover:shadow-xl transition-all border-l-4 border-l-primary group">
                                <div className="flex justify-between items-start">
                                    <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-bold">4</div>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">GAC Accredited</span>
                                </div>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="mt-1 bg-white text-accent p-2 rounded-xl shadow-sm shrink-0 h-fit"><BookOpen size={18} /></div>
                                        <div>
                                            <h4 className="font-bold text-primary mb-1">Educational Background</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Bachelor’s or postgraduate degree awarded by a program accredited by <a href="https://www.pmi.org/global-accreditation-center" target="_blank" className="text-accent font-bold hover:underline">PMI’s Global Accreditation Center (GAC)</a>. (GAC accreditation is a program quality designation and does not, by itself, change the degree level required for eligibility).
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="mt-1 bg-white text-primary p-2 rounded-xl shadow-sm shrink-0 h-fit"><Briefcase size={18} /></div>
                                        <div>
                                            <h4 className="font-bold text-primary mb-1">Professional Experience</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Minimum <strong>24 months / 2 years</strong> of non-overlapping experience leading projects within the past 10 years.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 pt-4 border-t border-slate-200/60">
                                        <div className="mt-1 bg-primary/10 text-primary p-2 rounded-xl shrink-0 h-fit"><GraduationCap size={18} /></div>
                                        <div>
                                            <h4 className="font-bold text-primary mb-1 text-sm uppercase tracking-wider">Mandatory Training</h4>
                                            <p className="text-slate-500 text-xs leading-relaxed">
                                                Must also complete 35 hours of formal training aligned with the <a href="https://www.pmi.org/-/media/pmi/documents/public/pdf/certifications/project-management-professional-exam-outline.pdf" target="_blank" className="text-accent font-bold hover:underline">PMP Certification Exam Content Outline (ECO)</a>.
                                            </p>
                                            <p className="text-[10px] text-primary font-bold mt-2 flex items-center gap-1">
                                                <Check size={10} strokeWidth={4} /> The Agile Nest provides 35 contact hours & completion certificate.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Curriculum / Syllabus & Features - Adapted from PMI-CP */}
                    <section className="grid lg:grid-cols-5 gap-12">

                        <div className="lg:col-span-3">
                            <h2 className="text-3xl font-black text-primary mb-2">Curriculum / Syllabus</h2>
                            <p className="text-slate-500 font-medium mb-10 italic">Aligned with the latest PMP® Examination Content Outline (ECO).</p>

                            <div className="bg-slate-50 rounded-[32px] md:rounded-[40px] p-6 sm:p-8 mb-10 border border-slate-100 flex flex-col md:flex-row items-center gap-8">
                                <div className="relative w-48 h-48 shrink-0">
                                    <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                                        {/* Process: 41% (Gold) */}
                                        <circle cx="50" cy="50" r="40" fill="transparent" stroke="#EAB308" strokeWidth="12" strokeDasharray="251.3" strokeDashoffset="148.3" strokeLinecap="round" />
                                        {/* People: 33% (Primary) */}
                                        <circle cx="50" cy="50" r="40" fill="transparent" stroke="#0F172A" strokeWidth="12" strokeDasharray="251.3" strokeDashoffset="168.4" style={{ transform: 'rotate(147.6deg)', transformOrigin: '50% 50%' }} strokeLinecap="round" />
                                        {/* Business Env: 26% (Slate-400) */}
                                        <circle cx="50" cy="50" r="40" fill="transparent" stroke="#94A3B8" strokeWidth="12" strokeDasharray="251.3" strokeDashoffset="186.0" style={{ transform: 'rotate(266.4deg)', transformOrigin: '50% 50%' }} strokeLinecap="round" />
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                        <span className="text-2xl font-black text-primary">100%</span>
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Exam Weight</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-4 w-full">
                                    <div className="flex items-center justify-between p-3 bg-white rounded-2xl border border-slate-100">
                                        <div className="flex items-center gap-3">
                                            <div className="w-3 h-3 rounded-full bg-[#0F172A]"></div>
                                            <span className="font-bold text-slate-700">People</span>
                                        </div>
                                        <span className="font-black text-primary">33%</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-white rounded-2xl border border-slate-100">
                                        <div className="flex items-center gap-3">
                                            <div className="w-3 h-3 rounded-full bg-[#EAB308]"></div>
                                            <span className="font-bold text-slate-700">Process</span>
                                        </div>
                                        <span className="font-black text-primary">41%</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-white rounded-2xl border border-slate-100">
                                        <div className="flex items-center gap-3">
                                            <div className="w-3 h-3 rounded-full bg-[#94A3B8]"></div>
                                            <span className="font-bold text-slate-700">Business Env.</span>
                                        </div>
                                        <span className="font-black text-primary">26%</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <ul className="grid md:grid-cols-2 gap-6">
                                    {[
                                        { title: "Domain I: People (33%)", icon: Users, desc: "Mastering leadership, conflict management, and empowering high-performing teams." },
                                        { title: "Domain II: Process (41%)", icon: Target, desc: "Executing methodologies, managing schedule, scope, budget, and risk across the lifecycle." },
                                        { title: "Domain III: Business Environment (26%)", icon: Briefcase, desc: "Aligning projects with organizational strategy, compliance, and business value delivery." },
                                        { title: "Agile, Predictive & Hybrid", icon: Layout, desc: "Deep dive into Agile (60%) and Predictive (40%) methodologies, alongside Scrum, Kanban, and Lean." },
                                    ].map((feature) => (
                                        <li key={feature.title} className="flex flex-col gap-4 group bg-slate-50/50 p-6 rounded-[32px] border border-transparent hover:border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300">
                                            <div className="bg-white border border-slate-100 shadow-sm p-3 rounded-2xl text-primary shrink-0 h-14 w-14 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                                                <feature.icon size={28} strokeWidth={1.5} />
                                            </div>
                                            <div>
                                                <h4 className="font-black text-primary text-xl mb-2">{feature.title}</h4>
                                                <p className="text-slate-500 text-sm leading-relaxed font-medium">{feature.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right side - What's Included & Exam Format */}
                        <div className="lg:col-span-2 space-y-8">
                            <div className="bg-primary rounded-[32px] md:rounded-[40px] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl -ml-10 -mb-10"></div>

                                <h3 className="text-3xl font-black mb-8 relative z-10 flex items-center gap-3">
                                    What's Included
                                    <div className="h-1 w-12 bg-accent rounded-full"></div>
                                </h3>
                                <ul className="space-y-6 relative z-10">
                                    {[
                                        "35 Hours of Live Expert Led Training",
                                        "Official PMI® Authorized Training Content",
                                        "3 Full-length PMP Mock Exams",
                                        "PMI Application Assistance",
                                        "Post-Training Support till Certification",
                                        "Comprehensive Exam Support & Mentorship"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-4 group">
                                            <div className="mt-1 bg-accent text-primary p-1 rounded-full shrink-0 group-hover:scale-125 transition-transform">
                                                <Check size={14} strokeWidth={4} />
                                            </div>
                                            <span className="font-bold text-slate-100 leading-tight">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <ScrollButton
                                    targetId="register"
                                    className="w-full mt-12 bg-accent hover:bg-white hover:text-primary text-white font-black py-5 rounded-2xl transition-all hover:shadow-xl hover:-translate-y-1 relative z-10 flex items-center justify-center gap-2 group/btn"
                                >
                                    Download Full Syllabus
                                    <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                                </ScrollButton>
                            </div>
                        </div>
                    </section>

                    {/* Full Width Exam Format Banner */}
                    <div className="bg-white border border-slate-200 rounded-[32px] md:rounded-[40px] p-6 md:p-12 relative overflow-hidden group shadow-sm">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-accent/5 transition-colors"></div>
                        <div className="max-w-5xl mx-auto">
                            <h3 className="text-2xl font-black text-primary mb-10 text-center relative z-10 flex items-center justify-center gap-4">
                                <div className="h-px w-12 bg-slate-200"></div>
                                PMP® Exam Format
                                <div className="h-px w-12 bg-slate-200"></div>
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                                {[
                                    { icon: Target, title: "180", subtitle: "Questions", desc: "170 Scored + 10 Pretest questions" },
                                    { icon: Clock, title: "240", subtitle: "Minutes", desc: "4 Hours with two 10-min breaks" },
                                    { icon: AlertCircle, title: "Breaks", subtitle: "Included", desc: "Two optional 10-min scheduled breaks" },
                                    { icon: TrendingUp, title: "Target", subtitle: "Scoring", desc: "Results based on proficiency levels" }
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-col items-center text-center p-8 rounded-[32px] bg-slate-50/50 border border-slate-100 hover:border-accent/20 hover:bg-white hover:shadow-xl transition-all duration-300 group/item">
                                        <div className="w-16 h-16 rounded-[24px] bg-white shadow-md flex items-center justify-center text-accent mb-6 border border-slate-100 group-hover/item:scale-110 transition-transform">
                                            <item.icon size={32} />
                                        </div>
                                        <p className="font-black text-primary text-4xl leading-none mb-2">{item.title}</p>
                                        <p className="text-slate-900 font-black text-sm uppercase tracking-widest mb-4">{item.subtitle}</p>
                                        <div className="h-1 w-8 bg-accent/30 rounded-full mb-4"></div>
                                        <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-[200px]">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Question Types Detail Section */}
                    <div className="pt-10">
                        <div className="text-center mb-10">
                            <h3 className="text-2xl font-black text-primary mb-3">PMP® Question Formats</h3>
                            <p className="text-slate-500 font-medium italic">Master diverse interactive and situational question types</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {[
                            { title: "Multiple Choice", desc: "Single correct answer from four options", icon: Check },
                            { title: "Multiple Response", desc: "Select all applicable answers from a list", icon: List },
                            { title: "Drag and Drop", desc: "Match related concepts or sequence processes", icon: Layout },
                            { title: "Hotspot", desc: "Interact with graphics to identify correct elements", icon: Target },
                            { title: "Scenario Based", desc: "Deep dive case studies and situational sets", icon: BookOpen }
                        ].map((type, i) => (
                            <div key={i} className="bg-white border border-slate-100 p-6 rounded-[32px] shadow-sm hover:shadow-md transition-all group border-b-4 border-b-transparent hover:border-b-accent">
                                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <type.icon size={20} />
                                </div>
                                <h4 className="font-black text-primary text-sm mb-2">{type.title}</h4>
                                <p className="text-slate-500 text-xs font-medium leading-relaxed">{type.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                    {/* Why Train with TheAgileNest Section */}
                    <section className="bg-white rounded-[32px] md:rounded-[50px] p-6 sm:p-10 md:p-20 border border-slate-100 shadow-xl text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-primary"></div>
                        
                        <div className="max-w-4xl mx-auto mb-20">
                            <span className="text-accent font-black tracking-[0.3em] uppercase text-xs mb-6 block">Why Choose Agile Nest</span>
                            <h2 className="text-4xl md:text-5xl font-black text-primary mb-8">PMP® Training Features</h2>
                            <h3 className="text-xl font-bold text-slate-400 mb-10 uppercase tracking-widest">Why Train with TheAgileNest</h3>
                            
                            <div className="space-y-6">
                                <p className="text-slate-600 text-xl leading-relaxed font-bold italic">
                                    We are a Premium Authorised Training Partner (A.T.P.) for the global Project Management Institute (PMI).
                                </p>
                                <p className="text-slate-500 text-lg leading-relaxed">
                                    We have been supporting project managers to attain their PMI® certifications. The combination of our training methods, facilitators, self-study, and collaboration has resulted in ongoing success.
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 text-left max-w-6xl mx-auto">
                            {[
                                { title: "Highly Experienced Instructor-Led Training", desc: "Learn from skilled, qualified professionals with real-world project management experience through classroom and live online sessions." },
                                { title: "PMI-Aligned Course Content", desc: "Comprehensive training materials fully aligned with the latest PMI framework and PMBOK® Guide principles." },
                                { title: "35 Hours PMP® Exam Preparation Training", desc: "Structured training program that provides the required 35 contact hours needed for PMP® exam eligibility." },
                                { title: "Certificate of Completion (CoC)", desc: "Receive a completion certificate confirming your training hours, required for PMP® application eligibility." },
                                { title: "Flexible Class Options", desc: "Choose convenient weekend or weekday classes, with classroom and live online delivery available." },
                                { title: "First Attempt Exam Strategies", desc: "Learn practical tips, proven techniques, and exam approaches designed to maximise your chance of passing first time." },
                                { title: "Free High-Quality Mock Exams & Practice Questions", desc: "Access realistic mock questions, exercises, and practice sessions as part of your training." },
                                { title: "Free One-to-One Coaching Session", desc: "Receive a complimentary 1-hour individual coaching session with your instructor for personalised guidance." },
                                { title: "Premium Classroom Experience", desc: "Morning tea, afternoon tea, and lunch are provided during in-person sessions." },
                                { title: "Exam Application & Audit Support", desc: "Get expert assistance with PMP® application submission, documentation, and PMI audit support." }
                            ].map((feature, i) => (
                                <div key={i} className="bg-slate-50/50 p-6 md:p-8 rounded-[24px] md:rounded-[32px] border border-slate-100 flex gap-4 md:gap-6 hover:shadow-2xl hover:bg-white transition-all duration-300 group">
                                    <div className="mt-1 bg-white shadow-md text-accent p-2 rounded-2xl shrink-0 h-12 w-12 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                                        <Check size={24} strokeWidth={4} />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-primary text-lg mb-2 group-hover:text-accent transition-colors leading-tight">{feature.title}</h4>
                                        <p className="text-slate-500 font-medium text-sm leading-relaxed">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-20 pt-10 border-t border-slate-100 max-w-2xl mx-auto">
                            <h4 className="text-2xl font-black text-primary mb-4">Start Your PMP® Journey with Confidence</h4>
                            <p className="text-slate-500 font-medium mb-10">
                                Join The Agile Nest and gain the knowledge, support, and preparation needed to achieve PMP® success.
                            </p>
                            <ScrollButton 
                                targetId="register"
                                className="px-10 py-5 bg-accent text-white font-black rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center gap-2 mx-auto group"
                            >
                                Enroll Now
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </ScrollButton>
                        </div>
                    </section>



                    {/* Why PMP is Right for You Section */}
                    <section className="bg-primary rounded-[32px] md:rounded-[60px] p-8 md:p-24 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 -skew-x-12 translate-x-1/2"></div>
                        <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                            <div className="space-y-10">
                                <h2 className="text-3xl md:text-6xl font-black leading-tight">
                                    Why PMP® is <span className="text-accent">Right for You</span>
                                </h2>
                                <p className="text-slate-300 text-xl font-medium leading-relaxed opacity-90">
                                    Become PMP® Certified With TheAgileNest. Whether you aim to advance your career, lead projects, or master global best practices, TheAgileNest is your trusted partner.
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
                             <div className="bg-white p-8 md:p-12 rounded-[32px] md:rounded-[50px] shadow-2xl space-y-8 md:space-y-12">
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
                                        <div className="text-5xl font-black text-accent mb-2">Proven</div>
                                        <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Exam Success</div>
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

                    {/* Training Options & Investment Section */}
                    <section className="space-y-20">
                        <div className="text-center max-w-3xl mx-auto space-y-4">
                            <span className="label-tag mx-auto">Training & Investment</span>
                            <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tight">Everything you need to succeed</h2>
                            <p className="text-slate-500 font-medium">Flexible delivery modes and comprehensive support materials</p>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {[
                                { title: "Corporate On-Site", desc: "Customised preparation delivered at your workplace for teams and departments.", icon: Building2 },
                                { title: "Classroom (Face-to-Face)", desc: "Interactive in-person learning with expert guidance and collaborative environments.", icon: Users },
                                { title: "Live Online Training", desc: "Live-streamed classes from anywhere with real-time interaction and flexibility.", icon: Globe }
                            ].map((option, i) => (
                                <div key={i} className="bg-white border border-slate-100 p-8 md:p-10 rounded-[32px] md:rounded-[40px] shadow-sm hover:shadow-xl transition-all group relative overflow-hidden">
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
                             <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[32px] md:rounded-[50px] shadow-2xl relative overflow-hidden">
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
                             <div className="bg-slate-50 border border-slate-200 p-8 md:p-12 rounded-[32px] md:rounded-[50px] space-y-10">
                                <div>
                                    <h3 className="text-2xl font-black text-primary mb-6 flex items-center gap-3">
                                        PMP® Exam Fee (PMI)
                                        <div className="h-px flex-1 bg-slate-200"></div>
                                    </h3>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">PMI Member</p>
                                            <p className="text-3xl font-black text-primary">US $405</p>
                                        </div>
                                        <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Non-Member</p>
                                            <p className="text-3xl font-black text-primary">US $655</p>
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

                        <div className="bg-accent/5 border border-accent/20 p-6 md:p-8 rounded-[24px] md:rounded-[32px] text-center max-w-4xl mx-auto">
                            <p className="text-primary font-bold text-lg leading-relaxed flex flex-col md:flex-row items-center justify-center gap-2">
                                <AlertCircle className="text-accent" size={24} />
                                <span className="text-accent">Important Note:</span>
                                The PMP® exam fee is only payable after your application has been approved by PMI.
                            </p>
                        </div>
                    </section>

                    {/* Registration Section */}
                    <section id="register" className="grid lg:grid-cols-5 gap-20 items-start py-10">
                        <div className="lg:col-span-3">
                            <BookingForm
                                courseName="PMP® Certification"
                                availableDates={["March 2026", "April 2026", "May 2026"]}
                            />
                        </div>
                        <div className="lg:col-span-2 space-y-10">
                            <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[32px] md:rounded-[50px] shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-accent/20 rounded-bl-full blur-[80px] group-hover:scale-150 transition-transform duration-1000"></div>
                                <h4 className="text-accent font-black uppercase tracking-[0.2em] text-sm mb-6 relative z-10">Corporate Training</h4>
                                <h3 className="text-3xl font-black mb-8 relative z-10 leading-tight">Need a custom<br />batch for your<br />organization?</h3>
                                <p className="text-slate-400 mb-10 relative z-10 text-lg font-medium leading-relaxed">We offer tailored corporate training sessions for teams of 5 or more, focused on your specific industry challenges.</p>
                                <ContactLink
                                    className="inline-flex items-center justify-center py-6 px-16 bg-white text-primary font-black text-xl rounded-2xl hover:scale-105 transition-all shadow-2xl"
                                >
                                    Enquire Now
                                </ContactLink>
                            </div>

                            <div className="p-8 md:p-12 bg-slate-50 border border-slate-100 rounded-[32px] md:rounded-[50px] text-center space-y-6">
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
            <FAQ 
                title="PMP® Exam FAQs"
                subtitle="Certification Journey"
                description="Everything You Need to Know About PMP® Training, Exam, Fees & Renewal"
                items={[
                    { question: "1. What is the PMP® certification?", answer: "The PMP® (Project Management Professional) certification is a globally recognised credential awarded by PMI for experienced project professionals. It validates your ability to lead projects, manage teams, and deliver successful outcomes across industries." },
                    { question: "2. Who should take the PMP® exam?", answer: "The PMP® exam is ideal for project managers, engineers, coordinators, team leaders, consultants, and professionals responsible for managing projects or leading teams." },
                    { question: "3. Is PMP® recognised in New Zealand?", answer: "Yes. PMP® is highly respected by employers in New Zealand and internationally across construction, infrastructure, IT, finance, healthcare, engineering, government, and many other sectors." },
                    { question: "4. What are the eligibility requirements for the PMP® exam?", answer: "Candidates must meet PMI education and project management experience requirements. In addition, all applicants must complete 35 hours of formal project management training aligned with the PMP Examination Content Outline (ECO)." },
                    { question: "5. Does The Agile Nest provide the required 35 contact hours?", answer: "Yes. The Agile Nest PMP® course provides the required 35 contact hours / PDUs and a completion certificate to support your PMP® application." },
                    { question: "6. How much does the PMP® exam cost?", answer: "Current PMI fees are typically: PMI Member: US $405; Non-Member: US $655; PMI Membership: Approx. US $139. Exam fees are payable after your application has been approved and you are ready to schedule the exam." },
                    { question: "7. Can I take the PMP® exam online?", answer: "Yes. PMI offers the PMP® exam at authorised test centres and through secure online proctored exam options, subject to availability." },
                    { question: "8. How difficult is the PMP® exam?", answer: "The PMP® exam is challenging and requires structured preparation. With quality training, a study plan, and regular mock exam practice, candidates can approach the exam confidently." },
                    { question: "9. How many questions are in the PMP® exam?", answer: "The PMP® exam currently includes 180 questions (170 scored, 10 unscored pretest) to be completed within 240 minutes." },
                    { question: "10. What topics are covered in the PMP® exam?", answer: "The exam covers three key domains: People (33%), Process (41%), and Business Environment (26%). It is approximately 60% Agile/Hybrid and 40% Predictive." },
                    { question: "11. How long should I study for PMP®?", answer: "Preparation time depends on your experience and background, but many candidates study for 6 to 12 weeks using a structured learning plan." },
                    { question: "12. Do you provide mock exams and practice questions?", answer: "Yes. The Agile Nest includes high-quality mock exams, practice questions, exercises, and study guidance." },
                    { question: "13. Can The Agile Nest help with the PMP® application?", answer: "Yes. We provide support with application preparation, documentation guidance, and PMI audit assistance if required." },
                    { question: "14. What happens if I fail the PMP® exam?", answer: "If you do not pass, PMI generally allows candidates to retake the exam within their one-year eligibility period, subject to PMI policies and applicable retake fees." },
                    { question: "15. How many times can I attempt the PMP® exam?", answer: "Once approved, candidates may generally attempt the exam up to three times within the one-year eligibility period, subject to PMI rules." },
                    { question: "16. What happens after I pass the PMP® exam?", answer: "After passing, you earn the PMP® credential, which can improve career opportunities, leadership prospects, and earning potential." },
                    { question: "17. How do I maintain my PMP® certification?", answer: "To maintain certification, PMI requires PMP® holders to earn 60 PDUs every three years through continuous professional development." },
                    { question: "18. Do I need to retake the exam to renew PMP®?", answer: "No. In most cases, certification is maintained through earning PDUs and renewing with PMI rather than retaking the exam." },
                    { question: "19. Can I attend PMP® training online or on-site?", answer: "Yes. The Agile Nest offers live online, classroom, and corporate on-site PMP® training options in New Zealand and internationally." },
                    { question: "20. Why choose The Agile Nest for PMP® training? ", answer: "We provide 35 Contact Hours, PMI-aligned training, Expert instructors, Mock exams & study support, Application & audit assistance, Real-world project examples, and Flexible learning options." },
                    { question: "21. How do I get started?", answer: "Contact The Agile Nest to confirm your eligibility, choose a training option, and begin your PMP® certification journey with confidence." }
                ]}
            />
            <Footer />
        </>
    );
}
