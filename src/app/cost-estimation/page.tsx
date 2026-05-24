import Header from '@/components/Header';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import ServiceHero from '@/components/ServiceHero';
import Image from 'next/image';
import * as motion from 'framer-motion/client';
import { ArrowRight, FileText, Upload, CheckCircle2, Building2, LayoutDashboard, ShoppingBag, HardHat, Hammer, Factory, School, Quote, type LucideIcon } from 'lucide-react';
import Link from 'next/link';
import ContactLink from '@/components/ContactLink';
import CostEstimationForm from '@/components/CostEstimationForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Quantity Surveying NZ | Construction Cost Estimation",
    description: "NZ quantity surveying & construction cost estimation services. BOQ, tendering, value engineering & cost management for builders and developers.",
};

interface IService {
    title: string;
    desc: string;
    image: string;
    icon?: LucideIcon;
}

export default function CostEstimationPage() {
    const mainServices: IService[] = [
        {
            title: "Quantity Take off Services",
            desc: "TheAgileNest is your one-stop solution for quantity takeoff services and construction consultation. We provide a complete range of services including quantity takeoff, scheduling, and project execution support. Quantity takeoff is an important process in construction that helps planners and engineers accurately estimate the materials required for a project.",
            image: "/images/pmbok_evolution.jpeg",
        },
        {
            title: "Preliminary Estimate",
            desc: "Looking for an Estimate on Your Construction Project? Look no further than TheAgileNest. Our consultants provide accurate preliminary estimates so you can be confident you are getting the best possible value for your project. We deliver precise estimates that help you save both time and money.",
            image: "https://yestechday.com/totalqs/wp-content/uploads/2025/09/two-engineer-as-young-and-senior-worker-discuss-about-project-using-building-plan-or-drawing-e1695894785861.jpg",
        },
        {
            title: "Materials Or Labour Schedules",
            desc: "We provide material and labor scheduling services to help clients complete their construction projects on time and within budget. Our team creates customized schedules, sources high quality materials, and secures the right labor and equipment for each project.",
            image: "/images/agilenestConsultant.png",
        },
        {
            title: "Fully Tendered Jobs",
            desc: "Looking for a reliable and quality driven construction contractor? TheAgileNest has you covered. We offer comprehensive tendering services to ensure you get the best value for your investment. We transform design concepts into detailed bid documents and facilitate subcontractor interviews.",
            image: "/images/constructionTenderProcess.png",
        },
        {
            title: "Contract Admin Services",
            desc: "We ensure that all contracts between employees and subcontractors are properly managed and fully executed. Our Contract Administrators oversee every aspect of your construction project's contracts, making the entire process simple, transparent, and efficient.",
            image: "/global-construction-contracts-comparison.png",
        }
    ];

    return (
        <>
            <Header variant="transparent" />
            <main className="min-h-screen bg-white">
                <ServiceHero
                    title="Bid More, Win More, Earn More"
                    description="Trusted Quantity Surveying, estimating, cost management, and contract advisory services for successful projects across New Zealand."
                    gradientClass="bg-gradient-to-br from-[#0f293e] to-[#1e4a6d]"
                    breadcrumb="Our Services"
                />

                {/* Excellence Introduction */}
                <section className="py-24 bg-slate-50">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center space-y-8">
                            <span className="label-tag mx-auto">Expertise You Can Trust</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary tracking-tight leading-tight">
                                Partner with us to deliver your next project with confidence.
                            </h2>
                            <p className="text-slate-600 text-xl font-medium leading-relaxed">
                                Looking for a trusted Quantity Surveyor in New Zealand? Our experienced team brings hands-on expertise in managing projects of all sizes and levels of complexity, helping you control costs, reduce risk, and achieve successful outcomes.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Vertical Alternating Services */}
                <div className="bg-white">
                    {mainServices.map((service, i) => {
                        return (
                            <section key={i} className={`py-24 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                                <div className="container-custom">
                                    <div className={`flex flex-col gap-12 lg:gap-24 ${i % 2 === 0 ? 'lg:flex-row lg:items-start' : 'lg:flex-row-reverse lg:items-start'
                                        }`}>
                                        {/* Image Side */}
                                        <motion.div
                                            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            className="flex-1"
                                        >
                                            <div className="relative group">
                                                <div className="absolute -inset-4 bg-accent/10 rounded-[40px] blur-2xl group-hover:bg-accent/20 transition-all duration-500" />
                                                <div className="relative h-[400px] md:h-[500px] border border-slate-100 w-full rounded-[32px] overflow-hidden shadow-2xl flex items-center justify-center">
                                                    <Image
                                                        src={service.image}
                                                        alt={service.title}
                                                        fill
                                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                    />
                                                </div>
                                            </div>
                                        </motion.div>

                                        {/* Text Side */}
                                        <motion.div
                                            initial={{ opacity: 0, x: i % 2 === 0 ? 40 : -40 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            className="flex-1 space-y-8"
                                        >
                                            <div className={i % 2 === 0 ? 'text-left' : 'lg:text-right'}>
                                                {service.icon && (
                                                    <div className={`w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 ${i % 2 === 0 ? '' : 'lg:ml-auto'}`}>
                                                        <service.icon className="text-primary" size={32} />
                                                    </div>
                                                )}
                                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary leading-tight mb-6">
                                                    {service.title}
                                                </h3>
                                                <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
                                                    {service.desc}
                                                </p>
                                                <div className={`pt-8 ${i % 2 === 0 ? '' : 'lg:ml-auto'}`}>
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

                {/* Why Choose Us Section */}
                <section className="py-32 bg-slate-50">
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-8"
                            >
                                <span className="label-tag">Why Choose Us</span>
                                <h2 className="text-4xl md:text-6xl font-black text-primary leading-tight">
                                    Why Clients Choose <br />
                                    <span className="text-slate-400">The Agile Nest</span>
                                </h2>
                                <p className="text-slate-600 text-xl font-medium leading-relaxed">
                                    We combine technical precision with practical project experience to deliver outcomes that protect your bottom line.
                                </p>
                            </motion.div>

                            <div className="grid gap-6">
                                {[
                                    "Accurate and dependable cost advice",
                                    "Strong commercial and contractual expertise",
                                    "Practical support from start to finish",
                                    "Clear reporting and communication",
                                    "Trusted by clients who value results",
                                    "Focused on protecting time, cost, and value"
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                                            <CheckCircle2 size={18} />
                                        </div>
                                        <span className="text-lg font-bold text-primary">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Industries Section */}
                <section className="py-32 bg-white">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                            <span className="label-tag mx-auto">Sectors</span>
                            <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tight">
                                Industries We <span className="text-slate-400">Support</span>
                            </h2>
                            <p className="text-slate-500 text-xl font-medium">
                                Delivering expertise across a diverse range of construction and infrastructure sectors.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { name: "Residential Developments", icon: Building2 },
                                { name: "Commercial Construction", icon: Building2 },
                                { name: "Office Fit-Outs", icon: LayoutDashboard },
                                { name: "Retail Projects", icon: ShoppingBag },
                                { name: "Infrastructure Works", icon: HardHat },
                                { name: "Renovations & Refurbishments", icon: Hammer },
                                { name: "Industrial Facilities", icon: Factory },
                                { name: "Education & Public Assets", icon: School }
                            ].map((industry, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="p-8 bg-slate-50 rounded-[32px] border border-slate-100 hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all group"
                                >
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                                        <industry.icon size={28} />
                                    </div>
                                    <h4 className="text-xl font-black text-primary leading-snug">{industry.name}</h4>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="py-32 bg-primary relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent rounded-full blur-[120px]" />
                        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent rounded-full blur-[120px]" />
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="text-center mb-20">
                            <span className="label-tag border-white/20 text-white mx-auto">Success Stories</span>
                            <h2 className="text-4xl md:text-6xl font-black text-white mt-6">What Our Clients Say</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    quote: "Accurate estimating support that helped us price confidently and win work.",
                                    author: "Commercial Manager"
                                },
                                {
                                    quote: "Reliable QS advice with clear reporting and practical solutions.",
                                    author: "Project Director"
                                },
                                {
                                    quote: "Strong commercial support that helped control costs throughout delivery.",
                                    author: "Contractor Client"
                                }
                            ].map((t, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-10 bg-white/5 backdrop-blur-md rounded-[40px] border border-white/10 relative group hover:bg-white/10 transition-all"
                                >
                                    <Quote className="text-accent mb-8 opacity-40" size={48} />
                                    <p className="text-xl text-white/90 font-medium leading-relaxed mb-8 italic">
                                        "{t.quote}"
                                    </p>
                                    <div className="pt-8 border-t border-white/10">
                                        <p className="font-black text-accent tracking-widest text-sm uppercase">{t.author}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <FAQ
                    title="Quantity Surveying"
                    subtitle="Common Questions"
                    items={[
                        {
                            question: "1. What is cost estimation?",
                            answer: "Cost estimation is the process of forecasting project costs, including labour, materials, plant, subcontractors, and risk allowances, before construction begins."
                        },
                        {
                            question: "2. What does a Quantity Surveyor do?",
                            answer: "A Quantity Surveyor manages costs, measurements, valuations, contracts, variations, and commercial performance throughout a project."
                        },
                        {
                            question: "3. Can you help reduce cost overruns?",
                            answer: "Yes. Accurate estimating, budgeting, and strong change control help reduce financial risk and unexpected costs."
                        },
                        {
                            question: "4. Do you provide tender support?",
                            answer: "Yes. We assist with BOQs, take-offs, pricing reviews, procurement support, and bid comparisons."
                        },
                        {
                            question: "5. Can you review claims and variations?",
                            answer: "Yes. We assess contractor claims, variations, payment applications, and commercial impacts."
                        },
                        {
                            question: "6. Do you support renovations and fit-outs?",
                            answer: "Yes. We support renovations, commercial fit-outs, upgrades, and new developments."
                        },
                        {
                            question: "7. Why choose The Agile Nest?",
                            answer: "We combine practical project knowledge, commercial expertise, and reliable advice that helps clients make better decisions."
                        }
                    ]}
                />

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
                                        Share a few details with us, and our team will contact you within 12 business hours for a friendly, no-obligation discussion about your quantity surveying needs.
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
                                We&apos;re always excited to connect with passionate professionals who share our commitment to quality, precision, and innovation in construction. Whether you&apos;re an experienced Quantity Surveyor or just starting your career, TheAgileNest offers a supportive environment where your skills can grow and your work truly makes an impact.
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
            <Footer hideContactForm={true} hideClients={true} />
        </>
    );
}
