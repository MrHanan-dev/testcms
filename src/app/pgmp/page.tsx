import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileNav from '@/components/MobileNav';
import { Check, BookOpen, Clock, Target, Users, Layout, Globe, Star, Presentation, Briefcase, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import CertificationHero from '@/components/CertificationHero';

export const metadata: Metadata = {
    title: "PgMP\u00ae Certification Training | Program Management Professional",
    description: "Learn how to manage multiple, related projects to achieve benefits that would not be available if managed separately with the PgMP certification.",
};

export default function PgmpPage() {
    return (
        <>
            <Header />
            <main className="pb-24 min-h-screen bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-100/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                <CertificationHero
                    title="PgMP Training"
                    subtitle="Become a Program Management Professional"
                    description="Prove your ability to manage multiple, related projects and navigate complex activities that align results with organizational goals."
                    prev={{ name: "PfMP", href: "/pfmp" }}
                    next={{ name: "CAPM", href: "/capm" }}
                    gradientClass="from-[#b30000] to-[#ff4d4d]"
                    buttonColorText="text-red-700"
                />

                <div className="container-custom max-w-5xl mt-20 space-y-24">

                    <section id="details" className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 font-semibold text-sm mb-6">
                                <Presentation size={16} /> Advanced Leadership
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
                                Delivering Strategic Benefits
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                As a Program Manager, you’re recognized for your advanced experience and skill in overseeing multiple, related projects to achieve organizational strategic goals.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { title: "Distinct Market Advantage", desc: "A PgMP certification is highly sought after; there is a significant shortage of qualified program managers globally." },
                                    { title: "Strategic Execution", desc: "Transition from managing outputs (projects) to delivering substantial business benefits (programs)." },
                                    { title: "Leadership Excellence", desc: "Demonstrate your ability to lead complex, cross-functional initiatives and navigate competing priorities." },
                                    { title: "High Compensation", desc: "Program Managers are typically among the highest-paid professionals in project execution roles." },
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
                            <div className="absolute inset-0 bg-gradient-to-tr from-red-100 to-orange-50 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
                            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100">
                                <h3 className="text-2xl font-bold text-primary border-b border-slate-100 pb-4 mb-6">Who Should Apply?</h3>
                                <p className="text-slate-600 mb-6 text-sm">For seasoned professionals managing complex, multi-project programs.</p>
                                <ul className="space-y-3">
                                    {[
                                        "Senior Project Managers",
                                        "Program Managers",
                                        "Project Directors",
                                        "PMO Leaders",
                                        "Change Managers",
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
                            <p className="text-slate-500 mb-8">Aligned with the Standard for Program Management.</p>

                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="text-xl font-bold text-primary flex items-center gap-2 mb-2">
                                        <Target className="text-red-500" /> Strategic Program Management
                                    </h4>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        Identifying, initiating, and monitoring programs to ensure strategic alignment.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="text-xl font-bold text-primary flex items-center gap-2 mb-2">
                                        <TrendingUp className="text-blue-500" /> Program Life Cycle
                                    </h4>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        Initiation, Planning, Execution, Delivery, and Closure phases of a program.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="text-xl font-bold text-primary flex items-center gap-2 mb-2">
                                        <Star className="text-orange-500" /> Benefits Management
                                    </h4>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        Defining, creating, maximizing, and sustaining the benefits provided by programs.
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-slate-800 text-white p-6 rounded-2xl">
                                        <h4 className="font-bold mb-2 text-sm flex items-center gap-2"><Users size={16} /> Stakeholders</h4>
                                        <p className="text-slate-300 text-xs">Capturing expectations, gaining support.</p>
                                    </div>
                                    <div className="bg-slate-800 text-white p-6 rounded-2xl">
                                        <h4 className="font-bold mb-2 text-sm flex items-center gap-2"><Layout size={16} /> Governance</h4>
                                        <p className="text-slate-300 text-xs">Structure, processes, and decision models.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-bold text-primary mb-8">Key Course Features</h2>
                            <ul className="space-y-6">
                                {[
                                    { title: "Panel Review Prep", icon: Users, desc: "Expert guidance for the crucial PgMP Panel Review process." },
                                    { title: "Standard Aligned", icon: BookOpen, desc: "Comprehensive training on the Standard for Program Management." },
                                    { title: "Application Assistance", icon: Check, desc: "Mentorship on writing program descriptions that meet PMI criteria." },
                                    { title: "Exam Strategy", icon: Target, desc: "Tips, tricks, and simulators designed specifically for the PgMP." },
                                ].map((feature) => (
                                    <li key={feature.title} className="flex gap-4 group">
                                        <div className="bg-white border border-slate-100 shadow-sm p-3 rounded-xl text-red-600 shrink-0 h-14 w-14 flex items-center justify-center group-hover:bg-red-50 transition-colors">
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
                        <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -z-10" />
                        <div className="text-center max-w-2xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Eligibility Prerequisites</h2>
                            <p className="text-slate-600">The PgMP involves a panel review followed by a multiple-choice exam.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                                <h3 className="text-xl font-bold text-primary mb-6 min-h-[56px] flex items-center">High School Diploma / Associate Degree</h3>
                                <ul className="space-y-4 text-slate-700 text-sm">
                                    <li className="flex gap-3">
                                        <Briefcase className="shrink-0 text-red-500" size={18} />
                                        <span><strong>Project Experience:</strong> 48 months of Project Management experience OR PMP.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <Presentation className="shrink-0 text-red-500" size={18} />
                                        <span><strong>Program Experience:</strong> 84 months of Program Management experience within the last 15 years.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="p-6 rounded-2xl bg-red-50 border-2 border-red-200 relative">
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-full">Most Common</span>
                                <h3 className="text-xl font-bold text-primary mb-6 min-h-[56px] flex items-center">Four-Year Degree</h3>
                                <ul className="space-y-4 text-slate-700 text-sm">
                                    <li className="flex gap-3">
                                        <Briefcase className="shrink-0 text-red-600" size={18} />
                                        <span><strong>Project Experience:</strong> 48 months of Project Management experience OR PMP.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <Presentation className="shrink-0 text-red-600" size={18} />
                                        <span><strong>Program Experience:</strong> 48 months of Program Management experience within the last 15 years.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="bg-gradient-to-r from-[#b30000] to-[#ff4d4d] text-white rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-8 text-center text-red-50">Additional Exam Details</h3>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                                    <Users className="mx-auto mb-4 text-white" size={32} />
                                    <div className="font-bold text-lg mb-1">Panel Review</div>
                                    <div className="text-xs text-red-100">Required Before Exam</div>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                                    <Clock className="mx-auto mb-4 text-white" size={32} />
                                    <div className="font-bold text-2xl mb-1">240</div>
                                    <div className="text-sm text-red-100">Minutes Duration</div>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                                    <Layout className="mx-auto mb-4 text-white" size={32} />
                                    <div className="font-bold text-2xl mb-1">170</div>
                                    <div className="text-sm text-red-100">Total Questions</div>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                                    <Globe className="mx-auto mb-4 text-white" size={32} />
                                    <div className="font-bold text-2xl mb-1">Cost</div>
                                    <div className="text-xs text-red-100">$800 member / $1000 non-member</div>
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
