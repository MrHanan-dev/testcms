import Link from 'next/link';
import Image from 'next/image';
import { Award, Briefcase, HardHat } from 'lucide-react';

const certifications = [
    {
        name: "PMP",
        title: "Project Management Professional",
        href: "/pmp",
        color: "from-blue-500 to-blue-700",
        shadowHover: "hover:shadow-blue-500/25",
        icon: Briefcase,
        image: "/certifications/pmp.webp"
    },
    {
        name: "CAPM",
        title: "Certified Associate in Project Management",
        href: "/capm",
        color: "from-teal-500 to-teal-700",
        shadowHover: "hover:shadow-teal-500/25",
        icon: Award,
        image: "/certifications/capm.webp"
    },
    {
        name: "PMI-CP",
        title: "PMI Construction Professional",
        href: "/pmicp",
        color: "from-amber-600 to-amber-800",
        shadowHover: "hover:shadow-amber-500/25",
        icon: HardHat,
        image: "/certifications/pmi-cp.webp"
    }
];

export default function CertificationLogos() {
    return (
        <section className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="container-custom relative z-10">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <span className="text-accent font-extrabold tracking-[0.2em] uppercase text-[10px] mb-4 block">
                        Our Certifications
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-primary leading-tight mb-4">
                        Click on a certification to view details
                    </h2>
                    <p className="text-slate-500 text-lg">
                        Elevate your career with globally recognized Project Management credentials tailored for every stage of your professional journey.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 lg:gap-12 justify-center">
                    {certifications.map((cert) => (
                        <Link
                            key={cert.name}
                            href={cert.href}
                            className={`group relative flex flex-col bg-white rounded-[40px] p-10 md:p-12 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 ease-out hover:-translate-y-2 hover:border-transparent ${cert.shadowHover} hover:shadow-2xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-accent`}
                        >
                            {/* Hover background effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                            {/* Icon / Image Container */}
                            {cert.image ? (
                                <div className="w-32 h-32 mb-10 relative group-hover:scale-110 transition-transform duration-500 ease-out drop-shadow-xl mx-auto sm:mx-0">
                                    <Image
                                        src={cert.image}
                                        alt={`${cert.name} Badge`}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            ) : (
                                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center bg-gradient-to-br ${cert.color} text-white shadow-lg mb-10 group-hover:scale-110 transition-transform duration-500 ease-out mx-auto sm:mx-0`}>
                                    <cert.icon size={40} strokeWidth={1.5} />
                                </div>
                            )}

                            <div className="flex-grow">
                                <h3 className="text-4xl font-black text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                                    {cert.name}
                                </h3>
                                <div className="text-base md:text-lg font-semibold text-slate-500 leading-relaxed">
                                    {cert.title}
                                </div>
                            </div>

                            <div className="mt-10 flex items-center text-sm font-bold text-accent tracking-widest uppercase opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out">
                                View Details
                                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
