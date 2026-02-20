"use client";

const logos = [
    { name: "PMI", abbrev: "PMI" },
    { name: "NZIQSI", abbrev: "NZIQSI" },
    { name: "RICS", abbrev: "RICS" },
    { name: "APM", abbrev: "APM" },
    { name: "CIOB", abbrev: "CIOB" },
    { name: "Axelos", abbrev: "AXELOS" },
    { name: "IPMA", abbrev: "IPMA" },
    { name: "Scrum.org", abbrev: "SCRUM" },
];

export default function Partners() {
    const doubled = [...logos, ...logos];
    return (
        <section className="py-12 bg-white/60 border-y border-slate-200/40 overflow-hidden">
            <div className="container-custom mb-6">
                <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-foreground/25">
                    Trusted by industry leaders worldwide
                </p>
            </div>
            <div className="marquee-mask">
                <div className="flex animate-marquee w-max">
                    {doubled.map((logo, i) => (
                        <div
                            key={`${logo.name}-${i}`}
                            className="flex items-center justify-center mx-10 md:mx-14 flex-shrink-0"
                        >
                            <div className="flex items-center gap-3 group cursor-default select-none">
                                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center border border-slate-200/60 group-hover:border-accent/30 transition-colors duration-300">
                                    <span className="text-[9px] font-black text-primary/30 tracking-widest group-hover:text-accent transition-colors duration-300">
                                        {logo.abbrev.slice(0, 2)}
                                    </span>
                                </div>
                                <span className="text-sm font-bold text-foreground/20 group-hover:text-foreground/50 transition-colors duration-300 tracking-wide">
                                    {logo.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
