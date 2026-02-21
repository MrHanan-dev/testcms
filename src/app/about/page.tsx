import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileNav from '@/components/MobileNav';
import EvolutionTimeline from '@/components/EvolutionTimeline';
import { Target, Award, Users, BookOpen, Globe, ShieldCheck, Briefcase } from 'lucide-react';

export const metadata = {
    title: "About Us | TotalPMPro",
    description: "Our 17-year journey in Project Management excellence, from foundational PMBOK standards to modern AI-driven ecosystems.",
};

export default function AboutPage() {
    const differentiators = [
        {
            icon: Target,
            title: "Expertise You Can Trust",
            desc: "Led by Engr. Syed, an global expert with 17+ years of delivery experience in high-stakes construction and infrastructure."
        },
        {
            icon: Globe,
            title: "Global Standards",
            desc: "Authorized Training Partner pathways aligned with PMI, ensuring your skills are recognized in every corner of the world."
        },
        {
            icon: BookOpen,
            title: "Practical Outcomes",
            desc: "We skip pure theory. Our courses and consulting are built on real projects, real challenges, and field-tested solutions."
        }
    ];

    return (
        <>
            <Header />
            <main className="min-h-screen bg-slate-50">
                {/* Hero section specifically for About page */}
                <section className="pt-40 pb-20 bg-[#0b3b5c] text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
                    <div className="container-custom relative z-10">
                        <div className="max-w-4xl">
                            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
                                Where Knowledge Meets Experience
                            </h1>
                            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed font-medium">
                                Transforming project management into a strategic advantage for teams and leaders worldwide.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Story Section */}
                <section className="py-24 bg-white">
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-2 gap-20 items-start">
                            <div className="space-y-8">
                                <span className="label-tag">Our Founder's Story</span>
                                <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight">
                                    Passion, Purpose, and 17 Years of Delivery
                                </h2>
                                <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                                    <p>
                                        With over 17 years of professional experience in construction and project management, <strong>Engr. Syed Amjad Iqbal</strong> is a passionate leader, educator, and industry expert.
                                    </p>
                                    <p>
                                        His journey spanned from earning his Master's at <strong>KTH Royal Institute of Technology (Sweden)</strong> to mastering Construction Management at Massey University in New Zealand. This academic foundation, combined with roles as CEO, consultant, and certified trainer, shaped TotalPMPro.
                                    </p>
                                    <p className="font-bold text-primary italic border-l-4 border-accent pl-6 bg-slate-50 py-6 rounded-r-3xl">
                                        "Our mission is to transfer practical experience and global standards to individuals seeking project excellence with confidence."
                                    </p>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-[4/5] bg-slate-100 rounded-[60px] overflow-hidden shadow-2xl relative group">
                                    <Image
                                        src="/images/founder_amjad.webp"
                                        alt="Engr. Syed Amjad Iqbal - CEO & Founder"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                    <div className="absolute bottom-10 left-10 text-white">
                                        <div className="text-2xl font-black">Engr. Syed Amjad Iqbal</div>
                                        <div className="text-blue-200 font-bold">CEO & Founder</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TotalQS Technical Depth Integration */}
                <section className="py-24 bg-slate-50">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-black text-primary mb-6">Built on Technical Excellence</h2>
                            <p className="text-slate-500 text-lg max-w-3xl mx-auto font-medium">
                                Beyond training, our DNA includes the precision of <strong>TotalQS</strong>—expert quantity surveying and commercial consultation for the construction sector.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { title: "Cost Management", icon: ShieldCheck, desc: "Rigorous budget control and resource allocation to maximize project value." },
                                { title: "Quantity Surveying", icon: Briefcase, desc: "Precision estimation using 3D models and field-tested commercial strategies." },
                                { title: "Contract Admin", icon: Award, desc: "Expert oversight of specifications, tenders, and vendor engagements." }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all group">
                                    <div className="w-14 h-14 bg-slate-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                        <item.icon size={28} />
                                    </div>
                                    <h4 className="text-xl font-black text-primary mb-3">{item.title}</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Evolution Section */}
                <section className="py-32 bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-20 max-w-4xl mx-auto space-y-6">
                            <span className="label-tag mx-auto">Our Evolution</span>
                            <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tight">
                                A 17-Year Journey in Project Management
                            </h2>
                            <p className="text-slate-500 text-xl font-medium">
                                From PMBOK 3rd to 8th Edition — Embracing Passion, Purpose, and Technology.
                            </p>
                        </div>

                        <EvolutionTimeline />

                        {/* High Fidelity Graphic Callout */}
                        <div className="mt-32 max-w-5xl mx-auto rounded-[60px] overflow-hidden shadow-2xl border-8 border-white bg-white">
                            <Image
                                src="/images/pmbok_evolution_pro.png"
                                alt="Professional PMBOK Evolution Infographic"
                                width={1200}
                                height={800}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </section>
            </main >
            <Footer />
            <MobileNav />
        </>
    );
}
