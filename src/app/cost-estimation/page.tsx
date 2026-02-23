import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileNav from '@/components/MobileNav';
import ServiceHero from '@/components/ServiceHero';
import { Check, Calculator, BarChart3, TrendingUp, Building2, ClipboardList, Settings2 } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Cost Estimation & Quantity Surveying | TotalPMP",
    description: "Fast, accurate estimating for construction projects. Expert quantity surveying and cost management services.",
};

export default function CostEstimationPage() {
    const mainServices = [
        {
            title: "Detailed Cost Planning",
            desc: "Comprehensive cost plans from concept through to detailed design, establishing robust budgets for your projects.",
            icon: Calculator,
            color: "text-blue-600",
            bgColor: "bg-blue-50"
        },
        {
            title: "AI-Driven Estimation",
            desc: "Leveraging advanced tools for rapid, highly accurate material takeoffs and pricing estimates.",
            icon: Settings2,
            color: "text-emerald-600",
            bgColor: "bg-emerald-50"
        },
        {
            title: "Value Engineering",
            desc: "Identifying opportunities to reduce costs without compromising on quality or project scope.",
            icon: TrendingUp,
            color: "text-blue-600",
            bgColor: "bg-blue-50"
        },
        {
            title: "Tender Evaluation",
            desc: "Independent review and analysis of contractor tenders to ensure competitive and realistic pricing.",
            icon: ClipboardList,
            color: "text-orange-600",
            bgColor: "bg-orange-50"
        },
        {
            title: "Lifecycle Costing",
            desc: "Long-term financial modeling assessing the total cost of ownership over the asset lifespan.",
            icon: BarChart3,
            color: "text-purple-600",
            bgColor: "bg-purple-50"
        },
        {
            title: "Commercial Management",
            desc: "Proactive cost control during construction, managing variations, progress claims, and final accounts.",
            icon: Building2,
            color: "text-teal-600",
            bgColor: "bg-teal-50"
        }
    ];

    return (
        <>
            <Header />
            <main className="min-h-screen bg-white">
                <ServiceHero
                    title="Cost Estimation & Quantity Surveying"
                    description="Fast, accurate estimating for construction projects. We provide expert commercial advice to ensure your projects remain financially viable from inception to completion."
                    gradientClass="bg-gradient-to-br from-[#0f293e] to-[#1e4a6d]"
                    breadcrumb="Our Services"
                />

                {/* Excellence Introduction */}
                <section className="py-24 container-custom">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <div className="text-center space-y-6">
                            <span className="label-tag mx-auto">Financial Clarity</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary tracking-tight">
                                Precision in Every<br />Project Phase
                            </h2>
                            <p className="text-slate-600 text-xl font-medium leading-relaxed">
                                Avoid cost overruns and maintain control with our strategic estimating and quantity surveying services tailored for the built environment.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Detailed Services Grid */}
                <section className="py-24 bg-slate-50">
                    <div className="container-custom">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {mainServices.map((service, i) => (
                                <div key={i} className="bg-white p-12 rounded-[50px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group">
                                    <div className={`${service.bgColor} ${service.color} w-20 h-20 rounded-[30px] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                                        <service.icon size={36} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-2xl font-black text-primary mb-6 leading-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-500 leading-relaxed font-medium">
                                        {service.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Outcome Focus Section */}
                <section className="py-32 bg-white">
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="relative aspect-square bg-[#0f293e] rounded-[100px] flex items-center justify-center p-20 text-white overflow-hidden shadow-2xl">
                                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-10" />
                                <div className="text-center space-y-6 relative z-10">
                                    <Calculator size={120} className="mx-auto text-accent" />
                                    <h3 className="text-4xl font-black">Cost Certainty</h3>
                                    <p className="text-blue-100/80 text-lg font-medium">Delivering accurate baselines and proactive commercial management.</p>
                                </div>
                            </div>
                            <div className="space-y-10">
                                <div>
                                    <h2 className="text-3xl md:text-5xl font-black text-primary leading-tight tracking-tight mb-8">
                                        Protecting Your Bottom Line
                                    </h2>
                                    <p className="text-slate-500 text-lg leading-relaxed mb-6">
                                        Our cost management solutions provide the financial transparency required to make informed decisions and secure project funding confidently.
                                    </p>
                                    <ul className="space-y-5">
                                        {[
                                            "Rigorous bill of quantities (BOQ)",
                                            "Risk and contingency planning",
                                            "Cash flow forecasting",
                                            "Final account settlement"
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-4 items-center text-primary font-bold">
                                                <div className="bg-emerald-50 text-emerald-600 p-1 rounded-full"><Check size={18} strokeWidth={3} /></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="pt-6">
                                    <Link href="#contact" className="inline-block py-6 px-12 bg-primary text-white font-black text-xl rounded-2xl hover:scale-105 transition-all shadow-xl">
                                        Request an Estimate
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <MobileNav />
        </>
    );
}
