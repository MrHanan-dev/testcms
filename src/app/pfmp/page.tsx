import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileNav from '@/components/MobileNav';
import { Check, BookOpen, Clock, Target, Users, Layout, Globe, Star, TrendingUp, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import CertificationHero from '@/components/CertificationHero';

export const metadata: Metadata = {
    title: "PfMP\u00ae Certification Training | Portfolio Management Professional",
    description: "Achieve the Pinnacle of Project Management. The PfMP\u00ae certification signifies your advanced competency in the coordinated management of one or more portfolios.",
};

export default function PfmpPage() {
    return (
        <>
            <Header />
            <main className="pb-24 min-h-screen bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                <CertificationHero
                    title="PfMP Training"
                    subtitle="Become a Portfolio Management Professional"
                    description="Signify your advanced competency in the coordinated management of one or more portfolios to achieve strategic objectives."
                    prev={{ name: "PMI-CP", href: "/pmicp" }}
                    next={{ name: "PgMP", href: "/pgmp" }}
                    gradientClass="from-[#e65c00] to-[#f9d423]"
                    buttonColorText="text-orange-600"
                />

                <div className="container-custom max-w-5xl mt-20 space-y-24">

                    <section id="details" className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 font-semibold text-sm mb-6">
                                <TrendingUp size={16} /> Strategic Execution
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
                                Why PfMP Certification is the Pinnacle
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                Portfolio management is the most effective way to implement strategic initiatives because it bridges the gap between strategy and implementation. Organizations that are effective in portfolio management had 62 percent of products meet or exceed expected ROI.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { title: "Executive Level Recognition", desc: "Recognizes advanced experience, skill, and performance in managing strategic portfolios." },
                                    { title: "Bridging Strategy & Execution", desc: "Prove your ability to align projects, programs, and operations with organizational strategy." },
                                    { title: "Exclusive Status", desc: "Showcase your expertise as one of the elite group of professionals holding this certification." },
                                    { title: "Maximized ROI", desc: "Drive business value by ensuring the right work is done at the right time." },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
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
                            <div className="absolute inset-0 bg-gradient-to-tr from-orange-100 to-yellow-50 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
                            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100">
                                <h3 className="text-2xl font-bold text-primary border-b border-slate-100 pb-4 mb-6">Who Should Apply?</h3>
                                <p className="text-slate-600 mb-6 text-sm">Targeted at executives and senior-level practitioners managing a portfolio of projects and programs.</p>
                                <ul className="space-y-3">
                                    {[
                                        "C-Level Executives & VPs",
                                        "Portfolio Managers",
                                        "PMO Directors",
                                        "Senior Program Managers",
                                        "Strategic Initiative Leaders",
                                        "Senior Consultants",
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

                    <section className="grid lg:grid-cols-5 gap-12">
                        <div className="lg:col-span-3">
                            <h2 className="text-3xl font-bold text-primary mb-2">Curriculum / Syllabus</h2>
                            <p className="text-slate-500 mb-8">Master the five domains of Portfolio Management.</p>

                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-start mb-4">
                                        <h4 className="text-xl font-bold text-primary flex items-center gap-2">
                                            <TrendingUp className="text-orange-500" /> Strategic Alignment
                                        </h4>
                                        <span className="bg-orange-100 text-orange-700 font-bold px-3 py-1 rounded-full text-sm">25%</span>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed">
                                        Aligning the portfolio components to organizational strategy and objectives.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-start mb-4">
                                        <h4 className="text-xl font-bold text-primary flex items-center gap-2">
                                            <Users className="text-blue-500" /> Governance
                                        </h4>
                                        <span className="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full text-sm">20%</span>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed">
                                        Establishing organizational processes, policies, and systems to manage the portfolio.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-start mb-4">
                                        <h4 className="text-xl font-bold text-primary flex items-center gap-2">
                                            <Target className="text-purple-500" /> Portfolio Performance
                                        </h4>
                                        <span className="bg-purple-100 text-purple-700 font-bold px-3 py-1 rounded-full text-sm">25%</span>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed">
                                        Monitoring and controlling portfolio component performance against strategic goals.
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-slate-800 text-white p-6 rounded-2xl">
                                        <h4 className="font-bold mb-2">Portfolio Risk</h4>
                                        <span className="inline-block bg-slate-700 text-slate-300 text-xs px-2 py-1 rounded mb-2">15%</span>
                                        <p className="text-slate-300 text-sm">Balancing risk to maximize value.</p>
                                    </div>
                                    <div className="bg-slate-800 text-white p-6 rounded-2xl">
                                        <h4 className="font-bold mb-2">Communications</h4>
                                        <span className="inline-block bg-slate-700 text-slate-300 text-xs px-2 py-1 rounded mb-2">15%</span>
                                        <p className="text-slate-300 text-sm">Engaging stakeholders effectively.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-bold text-primary mb-8">Key Course Features</h2>
                            <ul className="space-y-6">
                                {[
                                    { title: "Executive Focus", icon: Target, desc: "Content tailored for C-suite and senior portfolio level understanding." },
                                    { title: "Panel Review Prep", icon: Users, desc: "Guidance on passing the initial panel review process." },
                                    { title: "Standard Aligned", icon: BookOpen, desc: "Based on The Standard for Portfolio Management." },
                                    { title: "Advanced Methods", icon: Layout, desc: "Deep dive into complex portfolio balancing techniques." },
                                    { title: "Application Support", icon: Check, desc: "Assistance with documenting extensive executive experience." },
                                ].map((feature) => (
                                    <li key={feature.title} className="flex gap-4 group">
                                        <div className="bg-white border border-slate-100 shadow-sm p-3 rounded-xl text-orange-600 shrink-0 h-14 w-14 flex items-center justify-center group-hover:bg-orange-50 transition-colors">
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

                    <section className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -z-10" />
                        <div className="text-center max-w-2xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Eligibility Prerequisites</h2>
                            <p className="text-slate-600">The PfMP is designed for top-tier executives. You must pass a strict panel review before taking the exam.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                                <h3 className="text-xl font-bold text-primary mb-6 min-h-[56px] flex items-center">High School Diploma / Associate Degree</h3>
                                <ul className="space-y-4 text-slate-700 text-sm">
                                    <li className="flex gap-3">
                                        <Briefcase className="shrink-0 text-orange-500" size={18} />
                                        <span><strong>Business Experience:</strong> Minimum 96 months (8 years) of professional business experience.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <TrendingUp className="shrink-0 text-orange-500" size={18} />
                                        <span><strong>Portfolio Experience:</strong> At least 84 months (7 years) of unique, non-overlapping professional portfolio management experience.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="p-6 rounded-2xl bg-orange-50 border-2 border-orange-200 relative">
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-full">Most Common</span>
                                <h3 className="text-xl font-bold text-primary mb-6 min-h-[56px] flex items-center">Four-Year Degree</h3>
                                <ul className="space-y-4 text-slate-700 text-sm">
                                    <li className="flex gap-3">
                                        <Briefcase className="shrink-0 text-orange-600" size={18} />
                                        <span><strong>Business Experience:</strong> Minimum 96 months (8 years) of professional business experience.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <TrendingUp className="shrink-0 text-orange-600" size={18} />
                                        <span><strong>Portfolio Experience:</strong> At least 48 months (4 years) of unique, non-overlapping professional portfolio management experience.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="bg-gradient-to-r from-[#e65c00] to-[#f9d423] text-white rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-8 text-center text-orange-50">Additional Exam Details</h3>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                                    <Users className="mx-auto mb-4 text-white" size={32} />
                                    <div className="font-bold text-lg mb-1">Panel Review</div>
                                    <div className="text-xs text-orange-100">Required Before Exam</div>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                                    <Clock className="mx-auto mb-4 text-white" size={32} />
                                    <div className="font-bold text-2xl mb-1">240</div>
                                    <div className="text-sm text-orange-100">Minutes Duration</div>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                                    <Layout className="mx-auto mb-4 text-white" size={32} />
                                    <div className="font-bold text-2xl mb-1">170</div>
                                    <div className="text-sm text-orange-100">Total Questions</div>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                                    <Globe className="mx-auto mb-4 text-white" size={32} />
                                    <div className="font-bold text-2xl mb-1">Cost</div>
                                    <div className="text-xs text-orange-100">$800 member / $1000 non-member</div>
                                </div>
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
