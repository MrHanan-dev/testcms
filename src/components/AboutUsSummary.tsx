import { Target, Globe, BookOpen, Users, Rocket, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const differentiators = [
    {
        icon: Target,
        iconColor: "text-blue-600",
        title: "Real-World Expertise",
        description: "Learn from certified industry experts with decades of hands-on experience in construction, operations, and leadership. We share what truly works — not just theory."
    },
    {
        icon: Globe,
        iconColor: "text-indigo-600",
        title: "Global Knowledge, Local Focus",
        description: "Combining international best practices with deep local industry insight to deliver world-class project outcomes."
    },
    {
        icon: BookOpen,
        iconColor: "text-emerald-600",
        title: "Practical, Impactful Learning",
        description: "Our training is designed around real projects, real tools, and real challenges — ensuring you can apply your learning immediately."
    }
];

export default function AboutUsSummary() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container-custom relative z-10">
                {/* Header Section */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <span className="label-tag mx-auto">Who We Are</span>
                    <h2 className="text-4xl md:text-6xl font-black text-primary mt-6 mb-8 tracking-tight">
                        Transforming Knowledge Into Project Excellence
                    </h2>

                    <div className="bg-slate-50 p-10 md:p-14 rounded-[40px] border border-slate-100 text-left relative overflow-hidden group shadow-sm hover:shadow-xl transition-all">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                        <h3 className="text-2xl font-black text-primary mb-6 flex items-center gap-3">
                            <Rocket className="text-blue-500" /> Our Mission
                        </h3>
                        <p className="text-xl md:text-2xl text-slate-600 italic leading-relaxed font-medium">
                            "At TotalPMP, we deliver immersive training and consultancy that transforms project management into a strategic advantage for teams and leaders."
                        </p>
                    </div>
                </div>

                {/* Why Choose Us & What Makes Us Different */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 mb-32 items-center">
                    <div>
                        <h3 className="text-3xl md:text-5xl font-black text-primary mb-8 tracking-tighter">
                            Why Choose TotalPMP
                        </h3>
                        <p className="text-xl text-slate-500 leading-relaxed mb-10 font-medium">
                            We don't just teach project management — we transform professionals into confident leaders ready to deliver high-stakes results in complex environments.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 group"
                            >
                                Read Our Full Story
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-10 bg-slate-50/50 p-10 md:p-14 rounded-[50px] border border-slate-100">
                        <h3 className="text-2xl font-black text-primary mb-4">
                            The TotalPMP Edge
                        </h3>
                        <div className="space-y-10">
                            {differentiators.map((item) => (
                                <div key={item.title} className="flex gap-6 group">
                                    <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center group-hover:scale-110 group-hover:shadow-md transition-all">
                                        <item.icon size={28} className={item.iconColor} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-primary mb-2">
                                            {item.title}
                                        </h4>
                                        <p className="text-slate-500 leading-relaxed font-medium">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Evolution Graphic Section */}
                <div className="bg-[#0b3b5c] rounded-[60px] p-10 md:p-20 shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
                    <div className="relative z-10 text-center mb-16">
                        <span className="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-300 rounded-full text-sm font-bold tracking-wider uppercase mb-6">
                            Our Heritage
                        </span>
                        <h3 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
                            A 17-Year Journey
                        </h3>
                        <p className="text-xl text-blue-100/70 max-w-3xl mx-auto font-medium">
                            From PMBOK 3rd to 8th Edition — Evolving passion with purpose and technological foresight.
                        </p>
                    </div>

                    <div className="w-full max-w-5xl mx-auto rounded-[40px] overflow-hidden shadow-2xl relative border-4 border-white/10 group">
                        <Image
                            src="/images/pmbok_evolution_pro.png"
                            alt="Our Evolution in Project Management"
                            width={1920}
                            height={1080}
                            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
                        />
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            href="/about#evolution"
                            className="text-blue-300 font-bold hover:text-white flex items-center justify-center gap-2 group"
                        >
                            View the Interactive Timeline
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
