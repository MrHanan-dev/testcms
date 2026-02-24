import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileNav from '@/components/MobileNav';
import ServiceHero from '@/components/ServiceHero';
import { Check, Calculator, BarChart3, TrendingUp, Building2, ClipboardList, Settings2, FileText, Upload } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
import CostEstimationForm from '@/components/CostEstimationForm';

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

                {/* Enhanced Form Section */}
                <section id="estimate-form" className="py-32 bg-slate-50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-2 gap-20 items-start">
                            <div className="space-y-10">
                                <div>
                                    <span className="label-tag mb-6 block">Ready to Start?</span>
                                    <h2 className="text-3xl md:text-5xl font-black text-primary leading-tight tracking-tight mb-8">
                                        Upload your plans for a fast, accurate quote
                                    </h2>
                                    <p className="text-slate-500 text-lg leading-relaxed mb-10">
                                        Our quantity surveyors use AI-driven tools to provide rapid material takeoffs and detailed pricing. Simply provide your project details and upload your documents.
                                    </p>

                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                                            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4">
                                                <FileText size={24} />
                                            </div>
                                            <h4 className="font-bold text-primary mb-2 text-lg">Detailed BOQ</h4>
                                            <p className="text-slate-500 text-sm">Full bill of quantities provided for every trade package.</p>
                                        </div>
                                        <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                                            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-4">
                                                <Upload size={24} />
                                            </div>
                                            <h4 className="font-bold text-primary mb-2 text-lg">Fast Turnaround</h4>
                                            <p className="text-slate-500 text-sm">Initial estimates typically delivered within 48-72 hours.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-10 bg-primary text-white rounded-[40px] shadow-2xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-bl-full blur-2xl"></div>
                                    <h3 className="text-2xl font-bold mb-4">Need urgent support?</h3>
                                    <p className="text-blue-100/70 mb-6">Call our estimating team directly for a quick consultation.</p>
                                    <div className="text-2xl font-black text-accent tracking-widest">09 620 7678</div>
                                </div>
                            </div>

                            <div>
                                <CostEstimationForm />
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
