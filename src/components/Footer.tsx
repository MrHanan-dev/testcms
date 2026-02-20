"use client";

import Link from 'next/link';
import { Linkedin, Twitter, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 gap-x-16">

          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-primary font-black text-lg">
                  T
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-black tracking-tight text-white leading-none">
                    TotalPMP
                  </span>
                  <span className="text-[8px] uppercase font-bold tracking-[0.2em] text-accent mt-0.5">
                    PMI Authorized Partner
                  </span>
                </div>
              </div>
            </Link>
            <p className="text-white/40 text-[15px] leading-relaxed mb-8 max-w-xs font-medium">
              Authorized PMI Training Partner providing immersive project management training and consultancy across New Zealand.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-primary transition-all duration-300"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] mb-8 text-accent">
              Services
            </h4>
            <ul className="space-y-4">
              {['PMP Training', 'Cost Estimation', 'PMO Consulting', 'Workforce Training'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/40 hover:text-accent transition-colors text-[14px] font-medium">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] mb-8 text-accent">
              Company
            </h4>
            <ul className="space-y-4">
              {['About Us', 'Case Studies', 'Insights', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/40 hover:text-accent transition-colors text-[14px] font-medium">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] mb-8 text-accent">
              Get in touch
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-white/40 text-[14px]">
                <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                <span className="font-medium">
                  Global HQ, Business Hub<br />New Zealand
                </span>
              </li>
              <li className="flex items-center gap-4 text-white/40 text-[14px]">
                <Mail size={18} className="text-accent shrink-0" />
                <Link href="mailto:info@totalpmp.com" className="hover:text-white transition-colors font-medium">
                  info@totalpmp.com
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] text-white/30">
          <p>&copy; {new Date().getFullYear()} TotalPMP Ltd. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-accent transition-colors font-medium">Privacy</Link>
            <Link href="#" className="hover:text-accent transition-colors font-medium">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
