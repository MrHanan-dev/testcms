import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceHero from '@/components/ServiceHero';
import Link from 'next/link';
import ContactLink from '@/components/ContactLink';
import PMFAQ from '@/components/PMFAQ';
import { Check, Users, Target, Briefcase, BarChart3, ShieldCheck, Network, Layout, RefreshCw, Zap, Search, FileCheck, Star, Heart, Award, Globe } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Construction Project Management NZ | PM Services",
    description: "End-to-end construction project management services in NZ. Planning, feasibility, delivery, and PMO support for infrastructure and commercial projects.",
};

export default function ProjectManagementPage() {
    const subServices = [
        {
            title: "Project Planning & Feasibility",
            desc: "Projects succeed with clear planning, sound assumptions, and early decisions. We help shape projects from concept to feasibility by testing options, defining scope, setting budgets, and making delivery strategies realistic.",
            bullets: ["Project scoping and objectives definition", "Feasibility studies and option analysis", "Budget development and cost planning", "Site due diligence reviews", "Delivery strategy development", "Business case preparation", "Early risk identification", "Programme and milestone planning"],
            icon: Target,
            color: "text-blue-600",
            bgColor: "bg-blue-50"
        },
        {
            title: "Design & Pre-Construction Management",
            desc: "Effective design and pre-construction coordination reduce delays, prevent redesign, and improve buildability. We coordinate consultants, approvals, budgets, and programmes to prepare projects for construction.",
            bullets: ["Consultant team coordination", "Design programme management", "Value engineering workshops", "Buildability reviews", "Resource and procurement planning", "Authority consent coordination", "Scope alignment and design control", "Pre-construction readiness planning"],
            icon: Layout,
            color: "text-teal-600",
            bgColor: "bg-teal-50"
        },
        {
            title: "Procurement & Tender Management",
            desc: "Selecting the right contractors and suppliers is key. We manage procurement to create competition, lower risk, and secure value.",
            bullets: ["Procurement strategy development", "Contractor prequalification", "Tender documentation preparation", "Bid management and clarifications", "Tender evaluation and scoring", "Supplier selection", "Contract negotiations", "Award recommendations"],
            icon: Search,
            color: "text-purple-600",
            bgColor: "bg-purple-50"
        },
        {
            title: "Construction Delivery Management",
            desc: "During construction, strong leadership and control are essential to achieving time, cost, quality, and safety objectives. We provide hands-on project management support throughout delivery to keep work progressing efficiently.",
            bullets: ["Principal’s representative services", "Contractor coordination", "Site progress monitoring", "Quality oversight", "Programme tracking", "Issue and change management", "Performance reporting", "Delivery assurance reviews"],
            icon: Briefcase,
            color: "text-orange-600",
            bgColor: "bg-orange-50"
        },
        {
            title: "Cost Control & Commercial Management",
            desc: "We protect project budgets with active management from start to finish. Our accurate cost tracking and oversight let clients stay confident and in control.",
            bullets: ["Budget tracking and reporting", "Variations management", "Payment claim assessments", "Forecast final cost reporting", "Cashflow planning and monitoring", "Claims management", "Contract administration support", "Final account negotiations"],
            icon: BarChart3,
            color: "text-green-600",
            bgColor: "bg-green-50"
        },
        {
            title: "Programme & Schedule Control",
            desc: "Time certainty is critical. Our controls team sets realistic programmes and tracks milestones to meet timelines. We spot delays early, analyse impacts, and apply recovery plans to safeguard project timelines.",
            bullets: ["Master programme development", "Baseline schedule setup", "Progress monitoring", "Critical path analysis", "Delay impact assessments", "Recovery planning", "Milestone reporting", "Executive dashboard reporting"],
            icon: RefreshCw,
            color: "text-red-600",
            bgColor: "bg-red-50"
        },
        {
            title: "Risk Management",
            desc: "Risk management protects project outcomes, budgets, and certainty. Our team covers cost, programme, commercial, operational, and delivery risks across the lifecycle.",
            bullets: ["Risk identification workshops", "Risk registers", "Qualitative and quantitative assessments", "Contingency modelling", "Mitigation planning", "Risk ownership allocation", "Contract risk reviews", "Ongoing risk monitoring"],
            icon: ShieldCheck,
            color: "text-indigo-600",
            bgColor: "bg-indigo-50"
        },
        {
            title: "Stakeholder & Governance Management",
            desc: "Good governance and strong communication support fast decisions and effective project leadership. We set frameworks that give clients confidence and control.",
            bullets: ["Client reporting frameworks", "Steering committee packs", "Governance meeting management", "Stakeholder communication plans", "Council/authority liaison", "Decision tracking", "Executive dashboards", "Project assurance reviews"],
            icon: Users,
            color: "text-pink-600",
            bgColor: "bg-pink-50"
        },
        {
            title: "Handover & Closeout",
            desc: "The final delivery stage secures project value. We manage handover and closeout to ensure assets are operational, defects are resolved, and contracts are wrapped up efficiently.",
            bullets: ["Defects management", "Commissioning coordination", "Practical completion management", "O&M manuals coordination", "Final accounts closeout", "Contract completion reviews", "Lessons learned workshops", "Operational readiness support"],
            icon: FileCheck,
            color: "text-cyan-600",
            bgColor: "bg-cyan-50"
        }
    ];

    const valueProps = [
        {
            title: "Collective Experience",
            desc: "17 years of collective project experience and a reputation for delivering outcomes.",
            icon: Star
        },
        {
            title: "Safe Pair of Hands",
            desc: "A proven track record of delivering successful outcomes for our global clients.",
            icon: Award
        },
        {
            title: "Breadth of Services",
            desc: "The sheer breadth of our services helps to de-risk client projects through every phase.",
            icon: Globe
        },
        {
            title: "People-Centric",
            desc: "Recognised as global thought leaders with a 100% focus on client success and momentum.",
            icon: Heart
        }
    ];

    return (
        <>
            <Header variant="transparent" />
            <main className="min-h-screen bg-white">
                <ServiceHero
                    title="Project Management for Construction Project"
                    description="We offer end-to-end project management, turning ideas into outcomes. From planning and feasibility to procurement, construction, handover, and closeout, we provide structure, clarity, and control."
                    gradientClass="bg-gradient-to-br from-[#0b5c92] to-[#1479be]"
                    breadcrumb="Our Services"
                />

                {/* How We Can Help Section */}
                <section className="py-24 bg-white">
                    <div className="container-custom">
                        <div className="text-center space-y-8 mb-20">
                            <span className="label-tag mx-auto">How we can help</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-tight tracking-tight">
                                Project Management for<br className="hidden md:block" /> Construction Project
                            </h2>
                            <p className="text-slate-600 text-xl md:text-2xl leading-relaxed font-medium max-w-4xl mx-auto">
                                We offer end-to-end project management, turning ideas into outcomes. From planning and feasibility to procurement, construction, handover, and closeout, we provide structure, clarity, and control.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <p className="text-slate-500 text-lg leading-relaxed">
                                    Our team works closely with clients, consultants, contractors, and stakeholders to manage scope, programme, cost, risk, quality, and governance across the project lifecycle. By combining strategic oversight and practical delivery, we ensure efficient project completion aligned with business goals.
                                </p>
                                <p className="text-slate-500 text-lg leading-relaxed">
                                    For construction, infrastructure, transformation, or operational projects, we tailor our approach to each project's scale and complexity. Our focus: reduce risk, aid decisions, control costs, and deliver results.
                                </p>
                                <ContactLink
                                    className="inline-flex items-center justify-center py-5 px-10 bg-primary text-white font-black rounded-2xl hover:opacity-90 transition-all hover:scale-105 shadow-xl"
                                >
                                    Enquire Now
                                </ContactLink>
                            </div>
                            <div className="bg-slate-50 p-12 rounded-[50px] border border-slate-100 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/30 rounded-bl-full pointer-events-none" />
                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <div className="w-20 h-20 bg-white rounded-3xl shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Briefcase size={40} className="text-blue-600" />
                                    </div>
                                    <h3 className="text-2xl font-black text-primary mb-4">Sector Expertise</h3>
                                    <p className="text-slate-500 font-medium">Delivering projects on time, within budget, and built for long-term success.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-24 bg-slate-50 overflow-hidden">
                    <div className="container-custom">
                        <div className="mb-16">
                            <h2 className="text-3xl md:text-5xl font-black text-primary tracking-tight">
                                Our project management services
                            </h2>
                            <p className="text-slate-500 mt-4 text-xl font-medium">Helping clients through the delivery of:</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {subServices.map((service, i) => (
                                <div key={i} className="bg-white p-8 xl:p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col h-full">
                                    <div className={`${service.bgColor} ${service.color} w-16 h-16 rounded-[24px] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shrink-0`}>
                                        <service.icon size={32} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-black text-primary mb-4 leading-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-500 leading-relaxed font-medium mb-8">
                                        {service.desc}
                                    </p>
                                    
                                    <div className="mt-auto pt-6 border-t border-slate-100">
                                        <p className="text-sm font-bold text-slate-800 mb-4">Our services include:</p>
                                        <ul className="space-y-3">
                                            {service.bullets.map((bullet, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                                                    <Check size={16} className="text-accent shrink-0 mt-0.5" />
                                                    <span>{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why TheAgileNest Section */}
                <section className="py-32 bg-white">
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-5 gap-16 items-start">
                            <div className="lg:col-span-2 space-y-8">
                                <span className="label-tag">Why TheAgileNest</span>
                                <h2 className="text-4xl md:text-5xl font-black text-primary leading-[1.1] tracking-tight">
                                    Proven expertise.<br />We love what we do
                                </h2>
                                <p className="text-slate-500 text-lg leading-relaxed">
                                    With decades of collective project experience and a reputation for delivering outcomes, we’ve built a legacy that’s only growing.
                                </p>
                                <p className="text-slate-500 text-lg leading-relaxed">
                                    Some of the largest and most successful organisations use TheAgileNest because we offer a safe pair of hands and a people-centric culture.
                                </p>
                            </div>

                            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-8">
                                {valueProps.map((prop, i) => (
                                    <div key={i} className="p-8 rounded-[40px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all group">
                                        <div className="bg-white p-4 w-16 h-16 rounded-2xl shadow-sm mb-6 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                            <prop.icon size={28} />
                                        </div>
                                        <h3 className="text-xl font-black text-primary mb-3">{prop.title}</h3>
                                        <p className="text-slate-500 leading-relaxed text-sm font-medium">{prop.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <PMFAQ />

                {/* Get In Touch CTA */}
                <section className="py-24 container-custom px-4">
                    <div className="bg-[#0b5c92] p-12 md:p-24 rounded-[60px] md:rounded-[100px] text-center text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                        <div className="relative z-10 max-w-4xl mx-auto space-y-10">
                            <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
                                Create the momentum you need to move forward
                            </h2>
                            <p className="text-blue-100 text-xl md:text-2xl font-medium">
                                Contact us to see how we can help your organisation; we’d love to hear from you.
                            </p>
                            <div className="pt-4">
                                <ContactLink
                                    className="inline-flex items-center justify-center py-6 px-16 bg-white text-primary font-black text-xl rounded-2xl hover:scale-105 transition-all shadow-2xl"
                                >
                                    Get In Touch
                                </ContactLink>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
