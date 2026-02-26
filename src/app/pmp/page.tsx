import Header from '@/components/Header';
import FAQ from '@/components/FAQ';
import TrainingSchedule from '@/components/TrainingSchedule';
import Footer from '@/components/Footer';
import MobileNav from '@/components/MobileNav';
import { Check, BookOpen, Clock, Target, Users, Layout, Globe, Star, Briefcase, Send } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import CertificationHero from '@/components/CertificationHero';
import BookingForm from '@/components/BookingForm';
import Features from '@/components/Features';

export const metadata: Metadata = {
    title: "PMP\u00ae Certification Training | Project Management Professional",
    description: "Boost your credibility and salary with PMP certification. Comprehensive training covering all PMBOK\u00ae knowledge areas for experienced and aspiring project managers.",
};

export default function PmpPage() {
    return (
        <>
            <Header />
            <main className="pb-24 min-h-screen bg-slate-50 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

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

                <div className="container-custom mt-20 space-y-24">

                    {/* Description Section */}
                    <section id="details" className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-primary font-bold text-sm mb-6">
                                <Star size={16} /> The Industry Standard
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
                                Why PMP Certification is a Game-Changer
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                The Project Management Professional (PMP)\u00ae certification is a globally recognized credential that validates a project manager's ability to lead and direct projects.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { title: "Boosts Credibility", desc: "Demonstrates mastery of project management principles and global best practices." },
                                    { title: "Increases Salary Potential", desc: "Certified professionals often command higher salaries and better leadership roles." },
                                    { title: "Global Recognition", desc: "PMP is respected across industries and countries, making it a valuable asset for career mobility." },
                                    { title: "Enhanced Performance", desc: "Provides the tools and frameworks to manage complex projects efficiently, on time, and within budget." },
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
                                <p className="text-slate-600 mb-6 text-sm">Validating skills for those who want to formalize their project management expertise.</p>
                                <ul className="space-y-3">
                                    {[
                                        "Experienced Project Managers",
                                        "Future Project Leaders and Aspirants",
                                        "Team Leads and Supervisors",
                                        "Business Analysts",
                                        "IT Professionals",
                                        "Operations Managers",
                                        "Any professional looking to transition into a project management role"
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

                    {/* Curriculum / Syllabus & Features */}
                    <section className="grid lg:grid-cols-5 gap-12">
                        <div className="lg:col-span-3">
                            <h2 className="text-3xl font-bold text-primary mb-2">Curriculum / Syllabus</h2>
                            <p className="text-slate-500 mb-8">Aligned with the latest PMI standards and PMBOK\u00ae Guide.</p>

                            <div className="space-y-6">
                                {/* Domain 1 */}
                                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-start mb-4">
                                        <h4 className="text-xl font-bold text-primary flex items-center gap-2">
                                            <Users className="text-accent" /> People
                                        </h4>
                                        <span className="bg-accent/20 text-primary font-bold px-3 py-1 rounded-full text-sm">42%</span>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed">
                                        Managing teams, conflict resolution, supporting virtual teams, and leadership.
                                    </p>
                                </div>
                                {/* Domain 2 */}
                                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-start mb-4">
                                        <h4 className="text-xl font-bold text-primary flex items-center gap-2">
                                            <Target className="text-primary" /> Process
                                        </h4>
                                        <span className="bg-slate-100 text-primary font-bold px-3 py-1 rounded-full text-sm">50%</span>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed">
                                        Project methodologies including Waterfall, Agile, and Hybrid approaches. Managing scope, schedule, budget, and quality.
                                    </p>
                                </div>
                                {/* Domain 3 */}
                                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-start mb-4">
                                        <h4 className="text-xl font-bold text-primary flex items-center gap-2">
                                            <Briefcase className="text-accent" /> Business Environment
                                        </h4>
                                        <span className="bg-accent/10 text-primary font-bold px-3 py-1 rounded-full text-sm">8%</span>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed">
                                        Organizational culture, compliance, delivering business value, and supporting organizational change.
                                    </p>
                                </div>

                                <div className="bg-slate-800 text-white p-6 rounded-2xl">
                                    <h4 className="font-bold flex items-center gap-2 mb-2"><BookOpen size={18} className="text-accent" /> Full PMBOK Coverage</h4>
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        Detailed study of integration, scope, schedule, cost, quality, resource, communications, risk, procurement, and stakeholder management.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-bold text-primary mb-8">Key Course Features</h2>
                            <ul className="space-y-6">
                                {[
                                    { title: "Full Curriculum", icon: BookOpen, desc: "Covers all 10 knowledge areas outlined in the PMBOK\u00ae Guide." },
                                    { title: "Expert-Led Training", icon: Users, desc: "Taught by professionals with deep project management expertise." },
                                    { title: "Comprehensive Guides", icon: Layout, desc: "Detailed study materials and resources to aid learning." },
                                    { title: "Mock Tests & Exams", icon: Target, desc: "Practice exams & simulations for actual test environments." },
                                    { title: "Mentorship Support", icon: Check, desc: "Dedicated guidance through the application & exam preparation." },
                                    { title: "Flexible Learning", icon: Clock, desc: "Available in multiple formats for busy professional schedules." },
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

                    <section id="register" className="grid md:grid-cols-5 gap-16 items-start">
                        <div className="md:col-span-3">
                            <BookingForm
                                courseName="PMP® Certification"
                                availableDates={["March 2026", "April 2026", "May 2026"]}
                            />
                        </div>
                        <div className="md:col-span-2 space-y-8">
                            <div className="bg-slate-800 text-white p-10 rounded-[40px] shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-bl-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                                <h3 className="text-2xl font-bold mb-6 relative z-10">Need a custom<br />batch for your<br />organization?</h3>
                                <p className="text-slate-300 mb-8 relative z-10 font-medium">We offer tailored corporate training sessions for teams of 5 or more.</p>
                                <Link
                                    href="#contact"
                                    className="inline-flex items-center gap-2 text-accent font-bold group/link relative z-10"
                                >
                                    Enquire about corporate training
                                    <Send size={16} className="group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            <div className="p-8 border-2 border-dashed border-slate-200 rounded-[40px] text-center">
                                <p className="text-slate-500 font-medium italic">
                                    "The best investment I made in my career. The instructors are clearly experts."
                                </p>
                                <div className="mt-4 font-bold text-primary">— NZ Transport Agency Alumnus</div>
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
