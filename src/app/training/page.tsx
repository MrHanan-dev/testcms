import Header from '@/components/Header';
import FAQ from '@/components/FAQ';
import TrainingSchedule from '@/components/TrainingSchedule';
import Footer from '@/components/Footer';
import ServiceHero from '@/components/ServiceHero';
import { Check, BookOpen, Users, Globe, Award, Laptop, GraduationCap, ArrowRight, MessageSquare, Files, Search, Star } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Professional Training Services",
    description: "Equipping organizations and individuals with the skills to achieve project outcomes through certification and bespoke training.",
};

export default function TrainingPage() {
    const categories = [
        {
            title: "Course Catalogue",
            desc: "Comprehensive project management courses available across New Zealand and Australia, tailored for local market needs.",
            icon: Files,
            links: ["NZ Course Catalogue", "Australia Course Catalogue"]
        },
        {
            title: "PMI Certification",
            desc: "The gold standard in project credentials. Full preparation for PMP®, CAPM®, and industry-specific certifications.",
            icon: Award,
            links: ["PMP® Prep", "CAPM® Entry", "PMI-CP® Construction"]
        },
        {
            title: "Professional Development",
            desc: "Advance your career with targeted skills in leadership, risk management, and strategic project delivery.",
            icon: Star,
            links: ["Leadership Workshops", "Risk Management", "TheAgileNest Methodologies"]
        }
    ];

    const bespokeServices = [
        { title: "Custom Training", icon: Laptop, desc: "Training designed around your specific corporate methodologies." },
        { title: "Coaching & Mentoring", icon: Users, desc: "1-on-1 and group support for project leaders and teams." },
        { title: "Global Delivery", icon: Globe, desc: "Seamless training delivery across multiple timezones and regions." }
    ];

    return (
        <>
            <Header variant="transparent" />
            <main className="min-h-screen bg-white">
                <ServiceHero
                    title="Professional Training"
                    description="Equipping organisations and individuals with the skills to achieve project outcomes, through bespoke, public or global certification training."
                    gradientClass="bg-gradient-to-br from-[#1479be] to-[#31acee]"
                    breadcrumb="Our Services"
                />

                {/* Introduction */}
                <section className="py-24 container-custom">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <span className="label-tag mx-auto">Knowledge is Power</span>
                        <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight tracking-tight">
                            Build Your Team's<br />Project Capability
                        </h2>
                        <p className="text-slate-600 text-xl leading-relaxed font-medium">
                            At TheAgileNest, we’re passionate about projects. We provide the full range of project services and training to increase your team’s skills and capabilities to help you achieve your business outcomes.
                        </p>
                    </div>
                </section>

                {/* Categories Grid */}
                <section className="py-24 bg-slate-50">
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-3 gap-8">
                            {categories.map((cat, i) => (
                                <div key={i} className="bg-white p-12 rounded-[50px] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                                    <div className="bg-blue-50 text-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                        <cat.icon size={32} />
                                    </div>
                                    <h3 className="text-2xl font-black text-primary mb-4">{cat.title}</h3>
                                    <p className="text-slate-500 mb-8 leading-relaxed font-medium">
                                        {cat.desc}
                                    </p>
                                    <ul className="space-y-3">
                                        {cat.links.map((link, j) => (
                                            <li key={j} className="flex items-center gap-3 text-primary font-bold hover:text-blue-600 transition-colors cursor-pointer group/link">
                                                <ArrowRight size={16} className="text-blue-500 group-hover/link:translate-x-1 transition-transform" />
                                                {link}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Bespoke Solutions */}
                <section className="py-32 bg-white">
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <h2 className="text-3xl md:text-4xl font-black text-primary leading-tight">
                                    Bespoke Solutions for Your Unique Needs
                                </h2>
                                <p className="text-slate-500 text-lg leading-relaxed">
                                    We don't just teach theory. We help create calm across your projects by creating the momentum you need to move your organisation forward.
                                </p>
                                <div className="space-y-6">
                                    {bespokeServices.map((service, i) => (
                                        <div key={i} className="flex gap-6 items-start">
                                            <div className="bg-slate-50 p-4 rounded-2xl text-blue-600 shrink-0">
                                                <service.icon size={24} />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-primary mb-1">{service.title}</h4>
                                                <p className="text-slate-500 text-sm">{service.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-square bg-slate-100 rounded-[80px] overflow-hidden">
                                    {/* Image Placeholder with Icon */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <GraduationCap size={160} className="text-slate-200" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
                                </div>
                                <div className="absolute -bottom-8 -left-8 bg-primary text-white p-10 rounded-[40px] shadow-2xl">
                                    <h4 className="text-2xl font-black mb-2">Global Training</h4>
                                    <p className="text-blue-100/70 text-sm font-medium">Delivered to teams in 15+ countries.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Resources Callout */}
                <section className="py-24 bg-slate-50">
                    <div className="container-custom">
                        <div className="bg-white p-12 md:p-20 rounded-[60px] border border-slate-100 shadow-sm">
                            <div className="grid md:grid-cols-3 gap-12 text-center">
                                <div className="group space-y-4">
                                    <div className="mx-auto bg-blue-50 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <MessageSquare size={28} />
                                    </div>
                                    <h4 className="text-xl font-black text-primary">Testimonials</h4>
                                    <p className="text-slate-500 text-sm">What our students and corporate partners are saying.</p>
                                </div>
                                <div className="group space-y-4">
                                    <div className="mx-auto bg-teal-50 text-teal-600 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Search size={28} />
                                    </div>
                                    <h4 className="text-xl font-black text-primary">Case Studies</h4>
                                    <p className="text-slate-500 text-sm">Explore how our training transformed organisations.</p>
                                </div>
                                <div className="group space-y-4">
                                    <div className="mx-auto bg-purple-50 text-purple-600 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Files size={28} />
                                    </div>
                                    <h4 className="text-xl font-black text-primary">Resources</h4>
                                    <p className="text-slate-500 text-sm">Free guides, whitepapers, and PM tools.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <TrainingSchedule />
            <FAQ />
            <Footer />
        </>
    );
}
