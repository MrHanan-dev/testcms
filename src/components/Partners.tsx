"use client";

const partners = [
    'PMI Authorized',
    'PMBOK® Guide',
    'Agile Alliance',
    'RICS',
    'ICE',
    'NZIQS',
    'IPENZ',
    'Build NZ',
];

export default function Partners() {
    return (
        <section className="py-14 bg-white border-y border-slate-100 overflow-hidden">
            <div className="container-custom mb-8">
                <div className="flex flex-col items-center">
                    <span className="text-[10px] uppercase font-black tracking-[0.3em] text-slate-400 mb-1">
                        Trusted By Industry Leaders
                    </span>
                    <div className="h-[2px] w-8 bg-accent rounded-full mt-3" />
                </div>
            </div>

            {/* Marquee */}
            <div className="marquee-mask relative">
                <div className="flex animate-marquee whitespace-nowrap">
                    {/* Duplicate for seamless loop */}
                    {[...partners, ...partners].map((name, i) => (
                        <div
                            key={`${name}-${i}`}
                            className="inline-flex items-center mx-8 md:mx-12"
                        >
                            <div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0">
                                <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center">
                                    <span className="text-primary font-black text-sm">
                                        {name.split(' ').map(w => w[0]).join('')}
                                    </span>
                                </div>
                                <span className="text-sm font-bold text-primary tracking-tight whitespace-nowrap">
                                    {name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
