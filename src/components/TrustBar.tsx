"use client";

import Image from 'next/image';

const clientImages = [
  "/our_client/1.jpeg", "/our_client/2.jpeg", "/our_client/3.jpeg", "/our_client/4.jpeg",
  "/our_client/5.jpeg", "/our_client/6.jpeg", "/our_client/7.jpeg", "/our_client/8.jpeg",
  "/our_client/9.jpeg", "/our_client/10.jpeg", "/our_client/11.jpeg", "/our_client/12.jpeg",
];

export default function TrustBar() {
  return (
    <div className="bg-white py-16 border-y border-slate-100 overflow-hidden relative">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h4 className="text-primary font-black text-[10px] uppercase tracking-[0.4em] opacity-40">Trusted by professionals from</h4>
        </div>
        <div className="relative flex overflow-x-hidden group marquee-mask">
          <div className="flex animate-marquee whitespace-nowrap py-4">
            {[...clientImages, ...clientImages].map((src, index) => (
              <div key={index} className="mx-16 w-40 h-16 relative transition-all duration-500 hover:scale-110">
                <Image
                  src={src}
                  alt="Client organization logo"
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
