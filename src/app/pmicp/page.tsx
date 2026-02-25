import Header from '@/components/Header';
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
                            <h2 className="text-3xl font-bold text-primary mb-6">
                                Why PMI-CP® Certification Matters
                            </h2>
                            <p className="text-gray-700 leading-relaxed text-lg mb-6">
                                The PMI Construction Professional (PMI-CP®) certification is a globally recognised credential that validates your expertise in construction project management. It equips professionals with skills in project planning, risk management, cost control, contract administration, and quality assurance, enabling them to deliver complex projects successfully.
                            </p>
                            <p className="text-gray-700 leading-relaxed text-lg pb-6 border-b border-gray-200">
                                Earning the PMI-CP® gives you a competitive edge in the construction industry, enhances your career opportunities, and demonstrates your ability to manage projects to international standards. Ideal for project managers, engineers, quantity surveyors, and construction leaders, this certification ensures you are ready to tackle the unique challenges of modern construction projects.
                            </p>

                            <h3 className="text-2xl font-bold text-primary mb-6 mt-8">
                                Why Earn the PMI-CP® Certification?
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    { title: "Global Recognition", desc: "Endorsed by PMI - the world's leading authority in project management." },
                                    { title: "Career Advancement", desc: "Gain credibility and open doors to higher-level roles in the construction industry." },
                                    { title: "Practical Skills", desc: "Master real-world tools and techniques tailored for construction professionals." },
                                    { title: "Professional Growth", desc: "Learn to manage scope, cost, quality, safety, and contracts with confidence." },
                                    { title: "Competitive Edge", desc: "Stand out in the New Zealand and international construction markets." }
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
                                    <HardHat className="text-amber-700" size={28} /> Who Should Apply?
                                </h3>
                                <p className="text-amber-800 mb-6">The PMI-CP® certification is ideal for:</p>
                                <ul className="space-y-3">
                                    {[
                                        "Construction Project Managers",
                                        "Site Engineers and Project Engineers",
                                        "Quantity Surveyors and Cost Controllers",
                                        "Contract Administrators and Consultants",
                                        "Design and Project Coordinators",
                                        "Owners' Representatives and Client-Side PMs"
                                    ].map((role, i) => (
                                        <li key={i} className="flex items-center gap-3 text-amber-900 bg-white px-4 py-3 rounded-xl shadow-sm">
                                            <Check size={18} className="text-amber-500 shrink-0" />
                                            <span className="font-semibold">{role}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Eligibility */}
                            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
                                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                                    ✅ Eligibility Requirements
                                </h3>
                                <p className="text-gray-600 mb-6">To apply for the PMI-CP® Exam, you must have:</p>
                                <ul className="space-y-6">
                                    <li className="flex gap-4">
                                        <div className="bg-blue-100 p-3 rounded-full text-blue-600 h-12 w-12 flex items-center justify-center shrink-0">
                                            <BookOpen size={20} />
                                        </div>
                                        <p className="text-gray-700 pt-3"><strong>Completed all four PMI-CP training modules</strong> (either through PMI or an authorized training partner).</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="bg-green-100 p-3 rounded-full text-green-600 h-12 w-12 flex items-center justify-center shrink-0">
                                            <Briefcase size={20} />
                                        </div>
                                        <p className="text-gray-700 pt-1"><strong>At least 3 years (36 months) of on-the-job experience</strong> in construction or built environment projects within the last 10 years.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* What You Learn */}
                    <section>
                        <h2 className="text-3xl font-bold text-primary mb-4 text-center">What You Learn (Core Knowledge Areas)</h2>
                        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">The PMI-CP curriculum covers four key knowledge areas, often delivered as separate courses or modules before the exam:</p>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-blue-500">
                                <div className="flex items-center gap-4 mb-4">
                                    <Presentation className="text-blue-500" size={32} />
                                    <h3 className="text-xl font-bold text-primary">1. Construction Project Communication (COMM)</h3>
                                </div>
                                <p className="text-gray-600">Managing communication channels, reports, and stakeholder engagement.</p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-green-500">
                                <div className="flex items-center gap-4 mb-4">
                                    <Users className="text-green-500" size={32} />
                                    <h3 className="text-xl font-bold text-primary">2. Construction Interface Management (IM)</h3>
                                </div>
                                <p className="text-gray-600">Coordinating interfaces between multiple contractors, trades, and disciplines.</p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-yellow-500">
                                <div className="flex items-center gap-4 mb-4">
                                    <ClipboardList className="text-yellow-500" size={32} />
                                    <h3 className="text-xl font-bold text-primary">3. Scope & Change Order Management (SCOM)</h3>
                                </div>
                                <p className="text-gray-600">Managing scope definition, control, and contract changes.</p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-red-500">
                                <div className="flex items-center gap-4 mb-4">
                                    <Shield className="text-red-500" size={32} />
                                    <h3 className="text-xl font-bold text-primary">4. Contract and Risk Management (CRM)</h3>
                                </div>
                                <p className="text-gray-600">Understanding contract types, claims, disputes, and risk mitigation strategies.</p>
                            </div>
                        </div>

                        <div className="bg-gray-100 p-6 rounded-xl text-center text-gray-700 italic border border-gray-200">
                            These areas reflect real-world challenges in construction - such as delays, disputes, scope creep, and communication breakdowns.
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
            <Footer />
            <MobileNav />
        </>
    );
}
