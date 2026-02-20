"use client";

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  services: [
    { label: "PMP® Training", href: "#training" },
    { label: "CAPM® Foundation", href: "#capm" },
    { label: "Cost Estimation", href: "#estimation" },
    { label: "Strategic Consulting", href: "#consultancy" },
    { label: "Programme Delivery", href: "#delivery" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#team" },
    { label: "Case Studies", href: "#insights" },
    { label: "Careers", href: "#careers" },
  ],
  contact: [
    { icon: Mail, label: "info@totalpmp.com", href: "mailto:info@totalpmp.com" },
    { icon: Phone, label: "+64 21 123 4567", href: "tel:+64211234567" },
    { icon: MapPin, label: "Auckland, New Zealand", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary pt-20 pb-10">
      <div className="container-custom">
        {/* 4-column grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">

          {/* Col 1: Services */}
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-accent mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/40 text-sm font-medium hover:text-white transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Company */}
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-accent mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/40 text-sm font-medium hover:text-white transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-accent mb-6">
              Contact
            </h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="flex items-center gap-2 text-white/40 text-sm font-medium hover:text-white transition-colors duration-300">
                    <link.icon size={14} className="text-accent/50" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-accent mb-6">
              Newsletter
            </h4>
            <p className="text-white/30 text-sm leading-relaxed mb-4">
              Get the latest insights on project management and cost estimation.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 px-4 py-3 text-sm font-medium focus:outline-none focus:border-accent/40 transition-colors"
                style={{ borderRadius: '4px' }}
              />
              <button
                type="submit"
                className="bg-accent text-primary px-4 py-3 text-sm font-bold hover:bg-accent-hover transition-colors"
                style={{ borderRadius: '4px' }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-accent rounded flex items-center justify-center text-primary font-black text-sm">
              T
            </div>
            <span className="text-white/50 text-sm font-bold">TotalPMP</span>
          </div>
          <p className="text-white/20 text-xs font-medium">
            © {new Date().getFullYear()} TotalPMP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
