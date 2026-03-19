'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type CertNav = {
    name: string;
    href: string;
};

interface CertificationHeroProps {
    title: string;
    subtitle: string;
    description: string;
    prev: CertNav;
    next: CertNav;
    gradientClass: string;
    buttonColorText?: string;
    badgeImage?: string;
    downloadLink?: string;
}

export default function CertificationHero({
    title,
    subtitle,
    description,
    prev,
    next,
    gradientClass,
    buttonColorText = "text-primary",
    badgeImage,
    downloadLink,
}: CertificationHeroProps) {
    return (
        <section className={`bg-gradient-to-r text-white pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${gradientClass}`}>
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 pointer-events-none"></div>

            <div className="container-custom relative z-10 w-full">
                <div className={`flex flex-col items-center ${badgeImage ? 'lg:flex-row lg:justify-between lg:items-center gap-12' : ''}`}>

                    {/* Left Column (Text & Navigation) */}
                    <div className={`flex flex-col items-center text-center ${badgeImage ? 'lg:items-start lg:text-left lg:w-1/2' : 'w-full'}`}>

                        {/* Navigation and Title */}
                        {/* Navigation and Title */}
                        <div className={`flex items-center justify-between sm:justify-center w-full gap-2 sm:gap-8 mb-8 ${badgeImage ? 'lg:justify-start' : ''}`}>
                            <Link
                                href={prev.href}
                                className="p-1 sm:p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors group flex shrink-0"
                                aria-label={`Go to ${prev.name}`}
                            >
                                <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10 group-hover:-translate-x-1 transition-transform" strokeWidth={2.5} />
                            </Link>

                            <h1 className="text-2xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-center tracking-tight px-2">
                                {title}
                            </h1>

                            <Link
                                href={next.href}
                                className="p-1 sm:p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors group flex shrink-0"
                                aria-label={`Go to ${next.name}`}
                            >
                                <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                            </Link>
                        </div>

                        {/* Subtitle */}
                        <h2 className="text-lg sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-white/95 max-w-3xl leading-snug">
                            {subtitle}
                        </h2>

                        {/* Description */}
                        <p className={`text-sm sm:text-lg md:text-xl text-white/80 max-w-3xl mb-8 sm:mb-10 font-medium leading-relaxed ${badgeImage ? '' : 'mx-auto'}`}>
                            {description}
                        </p>

                        {/* Buttons */}
                        <div className={`flex flex-wrap gap-4 ${badgeImage ? 'justify-start' : 'justify-center'}`}>
                            <button
                                onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
                                className={`w-full sm:w-auto bg-white ${buttonColorText} hover:bg-slate-50 font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-xl text-base sm:text-lg transition-transform hover:-translate-y-1 shadow-xl hover:shadow-2xl cursor-pointer`}
                            >
                                Enroll Now
                            </button>
                            {downloadLink && (
                                <a
                                    href={downloadLink}
                                    download
                                    className={`w-full sm:w-auto text-center bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold py-3 sm:py-4 px-8 rounded-full hover:bg-white/20 transition-all hover:shadow-lg hover:-translate-y-1 text-base sm:text-lg`}
                                >
                                    Download Course Outline
                                </a>
                            )}
                        </div>
                    </div> {/* End Left Column */}

                    {/* Right Column (Badge Image) */}
                    {badgeImage && (
                        <div className="absolute lg:relative inset-0 lg:w-1/2 flex justify-center items-center h-full min-h-[300px] mt-8 lg:mt-0 opacity-40 lg:opacity-100 -z-10 lg:z-0">
                            {/* Rotating Background Blob */}
                            <div className="absolute w-[140%] h-[140%] max-w-[600px] max-h-[600px] opacity-20 pointer-events-none transition-transform duration-[20s] ease-linear hover:opacity-30 mix-blend-screen">
                                <Image
                                    src="/certifications/blob.webp"
                                    alt="Background Blob"
                                    fill
                                    sizes="100vw"
                                    className="object-cover sm:object-contain animate-[spin_30s_linear_infinite]"
                                    priority
                                />
                            </div>

                            {/* Floating Badge Image */}
                            <div className="relative z-10 w-full max-w-[240px] sm:max-w-[380px] aspect-square animate-[bounce_4s_ease-in-out_infinite] drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                                <Image
                                    src={badgeImage}
                                    alt={`${title} Badge`}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
