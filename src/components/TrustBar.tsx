"use client";

import Image from 'next/image';
import { useSiteSettings } from './site/SiteSettingsProvider';

export default function TrustBar() {
  const s = useSiteSettings();
  
  return (
    <div className="bg-white py-16 border-y border-slate-100 overflow-hidden relative">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h4 className="text-primary font-black text-[10px] uppercase tracking-[0.4em] opacity-40">{s.clientsHeading}</h4>
        </div>
        <div className="relative flex overflow-x-hidden group marquee-mask">
          <div className="flex animate-marquee whitespace-nowrap py-4">
            {[...s.clientLogos, ...s.clientLogos].map((logo, index) => (
              <div key={index} className="mx-16 w-40 h-16 relative transition-all duration-500 hover:scale-110">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  unoptimized={logo.src.startsWith('http')}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
