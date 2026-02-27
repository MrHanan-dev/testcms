import Image from 'next/image';
import Header from '@/components/Header';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import MobileNav from '@/components/MobileNav';
import EvolutionTimeline from '@/components/EvolutionTimeline';
import { Target, Award, Users, BookOpen, Globe, ShieldCheck, Briefcase } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About Us",
    description: "Our 17-year journey in Project Management excellence, from foundational PMBOK standards to modern AI-driven ecosystems.",
};

import Features from '@/components/Features';
import CourseSuccessQuotes from '@/components/CourseSuccessQuotes';

export default function AboutPage() {
    const differentiators = [
        {
            icon: Target,
            title: "Expertise You Can Trust",
            desc: "Led by Engr. Sayed Iqbal (PMP, PMI-CP), a global expert and PMI Authorised trainer with 17+ years of delivery experience in construction and infrastructure."
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
                                        His unwavering dedication to empowering the next generation of project professionals is a source of inspiration and motivation for all who work with him. After earning his Bachelor’s in Engineering in 2003, Syed began his career in the construction industry, successfully delivering major infrastructure and commercial projects.
                                    </p>
                                    <p>
                                        In 2008, he completed his Master’s in Engineering. He pursued a <strong>Master’s in Project Management and Operational Management</strong> from <strong>KTH Royal Institute of Technology, Sweden</strong>, one of Europe’s top universities and a Nobel Prize institution. His academic journey, combined with hands-on industry experience, shaped a unique blend of practical and theoretical expertise. He later completed a <strong>Master’s in Construction Management</strong> at <strong>Massey University in New Zealand</strong>.
                                    </p>
                                    <p>
                                        He achieved the <strong>PMI-CP (Construction Professional)</strong>, a globally recognised credential from the Project Management Institute (PMI), a prestigious certification focused on construction. As a CEO, consultant, and certified trainer, Syed has mentored hundreds of professionals worldwide in Project Management, Construction Management, and Agile practices.
                                    </p>
                                    <p>
                                        His commitment to continuous learning, which keeps him up to date with the latest industry standards, inspired the creation of <strong>Agile Nest</strong> — an institute dedicated to transferring knowledge, practical experience, and global standards to individuals and organisations seeking to manage projects with excellence and confidence.
                                    </p>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-[4/5] bg-slate-100 rounded-[60px] overflow-hidden shadow-2xl relative group">
                                    <Image
                                        src="/images/founder_amjad.webp"
                                        alt="Engr. Syed Amjad Iqbal - CEO & Certified Trainer"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                    <div className="absolute bottom-10 left-10 text-white">
                                        <div className="text-2xl font-black">Engr. Syed Amjad Iqbal</div>
                                        <div className="text-blue-200 font-bold">CEO & Certified Trainer</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Agile Nest Section */}
                <section className="py-24 bg-slate-50">
                    <div className="container-custom">
                        <div className="text-center mb-16 space-y-4">
                            <span className="label-tag mx-auto">Who We Are</span>
                            <h2 className="text-4xl md:text-5xl font-black text-primary">Why Choose Agile Nest</h2>
                            <p className="text-slate-500 text-xl font-medium max-w-3xl mx-auto">
                                At Agile Nest, we don’t just teach project management — we transform professionals into confident, agile leaders ready to deliver real results.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "🎯 Real-World Expertise",
                                    desc: "Learn from certified industry experts with decades of hands-on experience in construction, operations, and leadership. We share what truly works — not just theory."
                                },
                                {
                                    title: "🌍 Global Knowledge, Local Focus",
                                    desc: "Trained at world-leading universities like KTH (Sweden) and Massey University (New Zealand), we combine international best practices with local industry insight."
                                },
                                {
                                    title: "🧩 Practical, Impactful Learning",
                                    desc: "Our training is designed around real projects, real tools, and real challenges — ensuring you can apply your learning immediately."
                                },
                                {
                                    title: "🤝 Personal Mentorship",
                                    desc: "We guide every learner through their professional growth journey, offering support, mentoring, and career coaching beyond the classroom."
                                },
                                {
                                    title: "🚀 Lifelong Learning Culture",
                                    desc: "Agile Nest is more than a training provider — it’s a learning community. We inspire continuous growth, innovation, and excellence."
                                }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all h-full border border-slate-100">
                                    <h4 className="text-xl font-black text-primary mb-4">{item.title}</h4>
                                    <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-16 text-center">
                            <p className="text-2xl font-black text-primary italic">
                                Agile Nest — Where knowledge meets experience, and every project takes flight.
                            </p>
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
                                From PMBOK 3rd to 8th Edition - Embracing Passion, Purpose, and Technology.
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
            </main>
            <Features titleSuffix="Certification Journey" descriptionSuffix="certification training programs" />
            <CourseSuccessQuotes />
            <FAQ />
            <Footer />
            <MobileNav />
        </>
    );
}
