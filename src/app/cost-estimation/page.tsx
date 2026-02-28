import Header from '@/components/Header';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import ServiceHero from '@/components/ServiceHero';
import Image from 'next/image';
import * as motion from 'framer-motion/client';
import { ArrowRight, Calculator, BarChart3, TrendingUp, Building2, ClipboardList, Settings2, FileText, Upload } from 'lucide-react';
import Link from 'next/link';
import ContactLink from '@/components/ContactLink';
import CostEstimationForm from '@/components/CostEstimationForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Quantity Surveying & Cost Management",
    description: "Your trusted partner in New Zealand's construction industry. Precision cost estimation and project success services.",
};

export default function CostEstimationPage() {
    const mainServices = [
        {
            title: "Quantity Take off Services",
            desc: "TotalPMP is your one-stop solution for quantity takeoff services and construction consultation. We provide a complete range of services including quantity takeoff, scheduling, and project execution support. Quantity takeoff is an important process in construction that helps planners and engineers accurately estimate the materials required for a project.",
            image: "/images/pmbok_evolution.jpeg",
            icon: FileText
        },
        {
            title: "Preliminary Estimate",
            desc: "Looking for an Estimate on Your Construction Project? Look no further than TotalPMP. Our consultants provide accurate preliminary estimates so you can be confident you are getting the best possible value for your project. We deliver precise estimates that help you save both time and money.",
            image: "https://yestechday.com/totalqs/wp-content/uploads/2025/09/two-engineer-as-young-and-senior-worker-discuss-about-project-using-building-plan-or-drawing-e1695894785861.jpg",
            icon: Calculator
        },
        {
            title: "Materials Or Labour Schedules",
            desc: "We provide material and labor scheduling services to help clients complete their construction projects on time and within budget. Our team creates customized schedules, sources high quality materials, and secures the right labor and equipment for each project.",
            image: "/images/Totalqsconsultant.jpeg",
            icon: ClipboardList
        },
        {
            title: "Fully Tendered Jobs",
            desc: "Looking for a reliable and quality driven construction contractor? TotalPMP has you covered. We offer comprehensive tendering services to ensure you get the best value for your investment. We transform design concepts into detailed bid documents and facilitate subcontractor interviews.",
            image: "https://yestechday.com/totalqs/wp-content/uploads/2026/01/Gemini_Generated_Image_wmgvp8wmgvp8wmgv.png",
            icon: BarChart3
        },
        {
            title: "Detailed Estimates",
            desc: "Looking to get a detailed estimate for your construction project? Our estimators prepare comprehensive and accurate estimate plans that give you the information you need to make confident financial decisions. A clear financial roadmap, ensuring that every stage of construction is well accounted for.",
            image: "https://yestechday.com/totalqs/wp-content/uploads/2025/09/making-strong-foundations-teaching-the-basics-shot-of-bricklayers-at-work-e1695897022576.jpg",
            icon: Building2
        },
        {
            title: "Contract Admin Services",
            desc: "We ensure that all contracts between employees and subcontractors are properly managed and fully executed. Our Contract Administrators oversee every aspect of your construction project's contracts, making the entire process simple, transparent, and efficient.",
            image: "/global-construction-contracts-comparison.png",
            icon: Settings2
        }
    ];

    return (
        <>
            <Header variant="transparent" />
            <main className="min-h-screen bg-white">
                <ServiceHero
                    title="Bid More. Win More. Build Better with Total QS"
                    description="Your trusted partner in Quantity Surveying, Cost Management & Project Success."
                    gradientClass="bg-gradient-to-br from-[#0f293e] to-[#1e4a6d]"
                    breadcrumb="Our Services"
                />

                {/* Excellence Introduction */}
                <section className="py-24 bg-slate-50">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center space-y-8">
                            <span className="label-tag mx-auto">Expertise You Can Trust</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary tracking-tight leading-tight">
                                Partner with us to ensure your next project runs smoothly
                            </h2>
                            <p className="text-slate-600 text-xl font-medium leading-relaxed">
                                Looking for a reliable quantity surveyor in New Zealand? You&apos;re in the right place! Our team of experienced quantity surveyors brings years of hands on expertise in managing projects of all sizes and complexities.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Vertical Alternating Services */}
                <div className="bg-white">
                    {mainServices.map((service, i) => {
                        const isFullyTendered = service.title === "Fully Tendered Jobs";
                        return (
                            <section key={i} className={`${isFullyTendered ? 'py-12 md:py-16' : 'py-24'} ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                                <div className="container-custom">
                                    <div className={`flex flex-col ${isFullyTendered ? 'gap-8' : 'gap-12 lg:gap-24'} ${isFullyTendered
                                        ? 'flex-col-reverse lg:flex-col-reverse items-center justify-center'
                                        : i % 2 === 0 ? 'lg:flex-row lg:items-center' : 'lg:flex-row-reverse lg:items-center'
                                        }`}>
                                        {/* Image Side */}
                                        <motion.div
                                            initial={{ opacity: 0, x: isFullyTendered ? 0 : i % 2 === 0 ? -40 : 40, y: isFullyTendered ? 40 : 0 }}
                                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                                            viewport={{ once: true }}
                                            className={`flex-1 ${isFullyTendered ? 'w-full max-w-6xl' : ''}`}
                                        >
                                            <div className="relative group">
                                                <div className="absolute -inset-4 bg-accent/10 rounded-[40px] blur-2xl group-hover:bg-accent/20 transition-all duration-500" />
                                                <div className={`relative ${isFullyTendered ? 'h-[400px] md:h-[600px] bg-slate-50/50 px-8 md:px-12 py-0 border border-slate-100' : 'h-[400px] md:h-[500px] border border-slate-100'} w-full rounded-[32px] overflow-hidden shadow-2xl flex items-center justify-center`}>
                                                    <Image
                                                        src={service.image}
                                                        alt={service.title}
                                                        fill
                                                        className={`${isFullyTendered ? 'object-contain px-8 md:px-12 py-0' : 'object-cover'} transition-transform duration-700 group-hover:scale-105`}
                                                    />
                                                </div>
                                            </div>
                                        </motion.div>

                                        {/* Text Side */}
                                        <motion.div
                                            initial={{ opacity: 0, x: isFullyTendered ? 0 : i % 2 === 0 ? 40 : -40, y: isFullyTendered ? 40 : 0 }}
                                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                                            viewport={{ once: true }}
                                            className={`flex-1 space-y-8 ${isFullyTendered ? 'max-w-4xl text-center flex flex-col items-center' : ''}`}
                                        >
                                            <div className={`${isFullyTendered ? 'flex flex-col items-center text-center' : i % 2 === 0 ? 'text-left' : 'lg:text-right'}`}>
                                                <div className={`w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 ${isFullyTendered ? 'mx-auto' : i % 2 === 0 ? '' : 'lg:ml-auto'}`}>
                                                    <service.icon className="text-primary" size={32} />
                                                </div>
                                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary leading-tight mb-6">
                                                    {service.title}
                                                </h3>
                                                <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
                                                    {service.desc}
                                                </p>
                                                <div className={`pt-8 ${isFullyTendered ? 'mx-auto' : i % 2 === 0 ? '' : 'lg:ml-auto'}`}>
                                                    <Link
                                                        href="#estimate-form"
                                                        className="inline-flex items-center gap-3 text-primary font-bold hover:gap-5 transition-all group"
                                                    >
                                                        Learn More
                                                        <ArrowRight className="text-accent group-hover:translate-x-1 transition-transform" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </section>
                        );
                    })}
                </div>

                {/* Quote Form Section */}
                <section id="estimate-form" className="py-32 bg-slate-950 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="space-y-10">
                                <div>
                                    <span className="label-tag mb-6 block border-white/20 text-white">Get Started</span>
                                    <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight mb-8">
                                        Get your QS Report Quote
                                    </h2>
                                    <p className="text-slate-400 text-xl leading-relaxed mb-10">
                                        Share a few details with us, and our team will contact you within 12 business hours for a friendly, no-obligation discussion about your Dunedin quantity surveying needs.
                                    </p>

                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                                            <div className="w-12 h-12 bg-accent text-primary rounded-xl flex items-center justify-center mb-6">
                                                <FileText size={24} />
                                            </div>
                                            <h4 className="font-bold text-white mb-2 text-xl">Detailed BOQ</h4>
                                            <p className="text-slate-400">Full bill of quantities provided for every trade package.</p>
                                        </div>
                                        <div className="p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                                            <div className="w-12 h-12 bg-emerald-500 text-white rounded-xl flex items-center justify-center mb-6">
                                                <Upload size={24} />
                                            </div>
                                            <h4 className="font-bold text-white mb-2 text-xl">Fast Turnaround</h4>
                                            <p className="text-slate-400">Initial estimates typically delivered within 48-72 hours.</p>
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

                            <div className="bg-white rounded-[40px] p-2 overflow-hidden shadow-2xl">
                                <div className="p-8 md:p-12 text-primary">
                                    <CostEstimationForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Career Section */}
                <section className="py-24 bg-white border-t border-slate-100">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center space-y-8">
                            <span className="label-tag mx-auto">Join the Team</span>
                            <h2 className="text-3xl md:text-5xl font-black text-primary leading-tight">Let’s talk about your opportunity</h2>
                            <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
                                We&apos;re always excited to connect with passionate professionals who share our commitment to quality, precision, and innovation in construction. Whether you&apos;re an experienced Quantity Surveyor or just starting your career, TotalPMP offers a supportive environment where your skills can grow and your work truly makes an impact.
                            </p>
                            <div className="pt-4">
                                <ContactLink
                                    className="inline-flex items-center justify-center py-6 px-16 bg-white text-primary font-black text-xl rounded-2xl hover:scale-105 transition-all shadow-2xl"
                                >
                                    Enquire Now
                                </ContactLink>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <FAQ />
            <Footer />
        </>
    );
}
