import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileNav from '@/components/MobileNav';
import { Check, BookOpen, Clock, Target, Users, Layout, Globe, Star, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import CertificationHero from '@/components/CertificationHero';

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
                    gradientClass="from-[#0b5c92] to-[#1479be]"
                    buttonColorText="text-blue-700"
                    badgeImage="/certifications/pmp.webp"
                />

                <div className="container-custom max-w-5xl mt-20 space-y-24">

                    {/* Description Section */}
                    <section id="details" className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6">
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
                                    <div key={i} className="flex gap-4" p-1="true" rounded-full="true" shrink-0="true">
                                        <div className="mt-1 bg-green-100 text-green-600 p-1 rounded-full shrink-0">
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
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-teal-50 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
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
                                            <Users className="text-blue-500" /> People
                                        </h4>
                                        <span className="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full text-sm">42%</span>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed">
                                        Managing teams, conflict resolution, supporting virtual teams, and leadership.
                                    </p>
                                </div>
                                {/* Domain 2 */}
                                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-start mb-4">
                                        <h4 className="text-xl font-bold text-primary flex items-center gap-2">
                                            <Target className="text-orange-500" /> Process
                                        </h4>
                                        <span className="bg-orange-100 text-orange-700 font-bold px-3 py-1 rounded-full text-sm">50%</span>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed">
                                        Project methodologies including Waterfall, Agile, and Hybrid approaches. Managing scope, schedule, budget, and quality.
                                    </p>
                                </div>
                                {/* Domain 3 */}
                                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-start mb-4">
                                        <h4 className="text-xl font-bold text-primary flex items-center gap-2">
                                            <Briefcase className="text-purple-500" /> Business Environment
                                        </h4>
                                        <span className="bg-purple-100 text-purple-700 font-bold px-3 py-1 rounded-full text-sm">8%</span>
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
                                        <div className="bg-white border border-slate-100 shadow-sm p-3 rounded-xl text-[#0b5c92] shrink-0 h-14 w-14 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
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

                    {/* Prerequisites Section */}
                    <section className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10" />
                        <div className="text-center max-w-2xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Eligibility Prerequisites</h2>
                            <p className="text-slate-600">Candidates can qualify for the PMP exam through one of three distinct paths.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Path 1 */}
                            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                                <div className="text-accent font-bold text-sm tracking-widest uppercase mb-2">Path 1</div>
                                <h3 className="text-xl font-bold text-primary mb-6 min-h-[56px] flex items-center">High School Diploma / Associate Degree</h3>
                                <ul className="space-y-4 text-slate-700 text-sm">
                                    <li className="flex gap-3">
                                        <Briefcase className="shrink-0 text-blue-500" size={18} />
                                        <span><strong>Project Experience:</strong> At least 60 months (5 years) of unique, non-overlapping professional project management experience.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <BookOpen className="shrink-0 text-blue-500" size={18} />
                                        <span><strong>Training:</strong> 35 contact hours of formal project management education or CAPM\u00ae certification.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Path 2 */}
                            <div className="p-6 rounded-2xl bg-blue-50 border-2 border-blue-200 relative">
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-full">Most Common</span>
                                <div className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-2">Path 2</div>
                                <h3 className="text-xl font-bold text-primary mb-6 min-h-[56px] flex items-center">Four-Year Bachelor's Degree or Higher</h3>
                                <ul className="space-y-4 text-slate-700 text-sm">
                                    <li className="flex gap-3">
                                        <Briefcase className="shrink-0 text-blue-600" size={18} />
                                        <span><strong>Project Experience:</strong> At least 36 months (3 years) of unique, non-overlapping professional project management experience.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <BookOpen className="shrink-0 text-blue-600" size={18} />
                                        <span><strong>Training:</strong> 35 contact hours of formal project management education or CAPM\u00ae certification.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Path 3 */}
                            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                                <div className="text-purple-500 font-bold text-sm tracking-widest uppercase mb-2">Path 3</div>
                                <h3 className="text-xl font-bold text-primary mb-6 min-h-[56px] flex items-center">GAC-Accredited Degree Program</h3>
                                <ul className="space-y-4 text-slate-700 text-sm">
                                    <li className="flex gap-3">
                                        <Briefcase className="shrink-0 text-purple-500" size={18} />
                                        <span><strong>Project Experience:</strong> At least 24 months (2 years) of unique, non-overlapping professional project management experience.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <BookOpen className="shrink-0 text-purple-500" size={18} />
                                        <span><strong>Training:</strong> 35 contact hours of formal project management education.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Additional Exam Stats */}
                    <section className="bg-gradient-to-r from-[#0b5c92] to-[#1479be] text-white rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-8 text-center text-blue-100">Additional Exam Details</h3>
                            <div className="grid sm:grid-cols-3 gap-6 text-center">
                                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                                    <Clock className="mx-auto mb-4 text-accent" size={32} />
                                    <div className="font-bold text-2xl mb-1">230</div>
                                    <div className="text-sm text-blue-200">Minutes Duration</div>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                                    <Layout className="mx-auto mb-4 text-accent" size={32} />
                                    <div className="font-bold text-2xl mb-1">180</div>
                                    <div className="text-sm text-blue-200">Total Questions</div>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                                    <Globe className="mx-auto mb-4 text-accent" size={32} />
                                    <div className="font-bold text-2xl mb-1">3-4</div>
                                    <div className="text-sm text-blue-200">Years Update Cycle</div>
                                </div>
                            </div>
                            <p className="text-center text-sm text-blue-200 mt-8 max-w-2xl mx-auto">
                                Questions include multiple choice, multiple response, matching, hotspot, and limited fill-in-the-blank. The exam is regularly updated to reflect the latest Agile and hybrid methodologies.
                            </p>
                        </div>
                    </section>

                </div>
            </main>
            <Footer />
            <MobileNav />
        </>
    );
}
