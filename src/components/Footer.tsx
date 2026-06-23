"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from './ContactForm';
import CompanyBio from './CompanyBio';
import { useSiteSettings } from './site/SiteSettingsProvider';

function ClientsSection({ heading }: { heading: string }) {
  const clientImages = [
    "/our_client/1.jpeg", "/our_client/2.jpeg", "/our_client/3.jpeg", "/our_client/4.jpeg",
    "/our_client/5.jpeg", "/our_client/6.jpeg", "/our_client/7.jpeg", "/our_client/8.jpeg",
    "/our_client/9.jpeg", "/our_client/10.jpeg", "/our_client/11.jpeg", "/our_client/12.jpeg",
  ];

  return (
    <div className="bg-white py-12 border-t border-slate-100 overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h4 className="text-primary font-black text-3xl md:text-4xl uppercase tracking-[0.2em] opacity-60">{heading}</h4>
        </div>
        <div className="relative flex overflow-x-hidden group marquee-mask">
          <div className="flex animate-marquee whitespace-nowrap py-4">
            {[...clientImages, ...clientImages].map((src, index) => (
              <div key={index} className="mx-12 w-48 h-24 relative transition-all duration-300 hover:scale-110">
                <Image
                  src={src}
                  alt="Client company logo"
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

const phoneHref = (phone: string) => `tel:${phone.replace(/\s/g, "")}`;

export default function Footer({ hideContactForm = false, hideClients = false }: { hideContactForm?: boolean, hideClients?: boolean }) {
  const s = useSiteSettings();

  return (
    <footer className="w-full border-t border-slate-200">
      {!hideContactForm && (
        <div id="contact" className="bg-slate-50 py-16 scroll-mt-20">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="label-tag mb-6 inline-block">{s.contactEyebrow}</span>
              <h3 className="h2 text-primary mb-6">{s.contactHeading}</h3>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">{s.contactIntro}</p>
            </div>
            <ContactForm />
          </div>
        </div>
      )}

      {!hideClients && <ClientsSection heading={s.clientsHeading} />}

      <CompanyBio />

      <div className="bg-primary pt-20 pb-12 text-white/90">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 flex flex-col gap-8 pr-4">
              <div className="space-y-6">
                <Link href="/" className="inline-block group">
                  <Image
                    src={s.logoUrl || "/1.png"}
                    alt="TheAgileNest Logo"
                    width={200}
                    height={70}
                    className="h-20 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    unoptimized={Boolean(s.logoUrl)}
                  />
                </Link>
                <p className="text-[15px] leading-relaxed font-medium">{s.footerBrandPara1}</p>
                <p className="text-accent text-xs font-black leading-relaxed uppercase tracking-[0.2em] bg-accent/5 p-4 rounded-xl border border-accent/10">
                  {s.footerTagline}
                </p>
                <p className="text-[15px] leading-relaxed font-medium opacity-80">{s.footerBrandPara2}</p>
              </div>

              <div className="mt-8 relative group w-64 h-64 md:w-72 md:h-72">
                <div className="relative w-full h-full p-8 bg-white/20 backdrop-blur-md rounded-[32px] border border-white/30 shadow-2xl transition-all duration-500 group-hover:bg-white/30 group-hover:scale-[1.02] flex items-center justify-center">
                  <Image
                    src="/2.png"
                    alt="PMI Authorized Training Partner Premier"
                    width={400}
                    height={400}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
              <div>
                <h4 className="text-white font-black mb-8 text-base uppercase tracking-[0.2em] opacity-50">{s.footerOurServicesHeading}</h4>
                <ul className="space-y-4">
                  {s.footerOurServices.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="hover:text-accent text-[14px] font-medium transition-colors">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-black mb-8 text-base uppercase tracking-[0.2em] opacity-50">{s.footerTrainingHeading}</h4>
                <ul className="space-y-4">
                  {s.footerTraining.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="hover:text-accent text-[14px] font-medium transition-colors">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-black mb-8 text-base uppercase tracking-[0.2em] opacity-50">{s.footerResourcesHeading}</h4>
                <ul className="space-y-4">
                  {s.footerResources.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="hover:text-accent text-[14px] font-medium transition-colors">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-black mb-8 text-base uppercase tracking-[0.2em] opacity-50">{s.footerContactHeading}</h4>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <MapPin size={20} className="text-accent shrink-0 mt-1" />
                    <div className="space-y-4">
                      {s.offices.map((office, i) => (
                        <div key={office.label} className={i > 0 ? "pt-3 border-t border-white/5" : undefined}>
                          <h5 className="text-white font-bold text-xs uppercase tracking-widest opacity-50 mb-1">{office.label}</h5>
                          <p className="text-sm leading-relaxed">{office.address}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-white/10">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3 group">
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                          <Phone size={14} className="text-accent" />
                        </div>
                        <div className="flex flex-col text-sm">
                          {s.footerPhones.map((phone) => (
                            <a key={phone} href={phoneHref(phone)} className="hover:text-accent transition-colors">{phone}</a>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-3 group">
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                          <Mail size={14} className="text-accent" />
                        </div>
                        <a href={`mailto:${s.footerEmail}`} className="text-sm hover:text-accent transition-colors whitespace-nowrap">
                          {s.footerEmail}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest opacity-50">
            <p>© {new Date().getFullYear()} {s.copyrightText}</p>
            <div className="flex gap-8">
              <Link href={s.privacyHref} className="hover:text-white transition-colors">{s.privacyLabel}</Link>
              <Link href={s.termsHref} className="hover:text-white transition-colors">{s.termsLabel}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
