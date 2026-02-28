import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceHero from '@/components/ServiceHero';
import Link from 'next/link';
import ContactLink from '@/components/ContactLink';
import { Check, Users, Target, Briefcase, BarChart3, ShieldCheck, Network, Layout, RefreshCw, Zap, Search, FileCheck, Star, Heart, Award, Globe } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Project Management for Construction Project",
    description: "Expert project delivery professionals and customized project management solutions for construction projects to help your organization achieve business outcomes.",
};

export default function ProjectManagementPage() {
    const subServices = [
        {
            title: "Project & Programme Management",
            desc: "Providing a safe pair of hands to drive your projects forward. Whether you have bite-sized initiatives or multi-national programmes, we’ve got the expertise to build teams, define plans, and engage stakeholders to deliver progress.",
            icon: Network,
            color: "text-blue-600",
            bgColor: "bg-blue-50"
        },
        {
            title: "Project Coordination",
            desc: "Need an extra pair of hands? Let us support your project leaders, own smaller workstreams, or capture the right data in the right way for the right people. We make the Project Managers look good!",
            icon: Layout,
            color: "text-teal-600",
            bgColor: "bg-teal-50"
        },
        {
            title: "Change Management",
            desc: "Projects create change, and this change needs to be planned and managed. Change Management is more than just communication; it’s about engagement, adoption, and ensuring outputs become outcomes.",
            icon: RefreshCw,
            color: "text-orange-600",
            bgColor: "bg-orange-50"
        },
        {
            title: "Project Recovery",
            desc: "Sometimes things don't go as well as we'd like. We have depths of experience in rescuing and resetting. If you’ve got a project which needs to be put back on the right track, we can help.",
            icon: Zap,
            color: "text-red-600",
            bgColor: "bg-red-50"
        },
        {
            title: "Tender & Vendor Management",
            desc: "Partner and solution selection is vital. We’ll help you understand your needs, validate what’s possible, and select the right people and products to set your project up for success from the start.",
            icon: Search,
            color: "text-purple-600",
            bgColor: "bg-purple-50"
        },
        {
            title: "Project Closure & Handover",
            desc: "Closure can be difficult for large initiatives. We help you validate deliverables, get signoff, complete operational handovers, and finalise closure reporting for a clean finish.",
            icon: FileCheck,
            color: "text-green-600",
            bgColor: "bg-green-50"
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
                    description="Providing experienced project professionals to help you achieve your business strategy through the leadership and management of key projects."
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
                                We provide experienced project professionals to help you achieve your business strategy through the leadership and management of key projects.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <p className="text-slate-500 text-lg leading-relaxed">
                                    Project Managers today need an ever-broadening set of skills to be successful, and we constantly strive for the best balance of competency and personality to provide the best service to our clients.
                                </p>
                                <p className="text-slate-500 text-lg leading-relaxed">
                                    Whatever the size of your organisation or project, we’ve got experience across multiple sectors including Infrastructure, Utilities, Education, Agribusiness, and more.
                                </p>
                                <ContactLink
                                    className="inline-flex items-center justify-center py-5 px-10 bg-primary text-white font-black rounded-2xl hover:bg-blue-700 transition-all hover:scale-105 shadow-xl"
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
                                    <p className="text-slate-500 font-medium">Delivering results in Public Service, Agribusiness, Transport, Utilities, and Education.</p>
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
                                <div key={i} className="bg-white p-10 rounded-[60px] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
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

                {/* Why TotalPMP Section */}
                <section className="py-32 bg-white">
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-5 gap-16 items-start">
                            <div className="lg:col-span-2 space-y-8">
                                <span className="label-tag">Why TotalPMP</span>
                                <h2 className="text-4xl md:text-5xl font-black text-primary leading-[1.1] tracking-tight">
                                    Proven expertise.<br />We love what we do
                                </h2>
                                <p className="text-slate-500 text-lg leading-relaxed">
                                    With decades of collective project experience and a reputation for delivering outcomes, we’ve built a legacy that’s only growing.
                                </p>
                                <p className="text-slate-500 text-lg leading-relaxed">
                                    Some of the largest and most successful organisations use TotalPMP because we offer a safe pair of hands and a people-centric culture.
                                </p>
                                <button className="text-blue-600 font-black text-lg flex items-center gap-3 hover:gap-5 transition-all">
                                    Learn more about us <Target size={24} />
                                </button>
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
