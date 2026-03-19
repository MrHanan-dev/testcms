"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import ContactForm from './ContactForm';
import CompanyBio from './CompanyBio';

const footerLinks = {
  ourServices: [
    { label: "Project Management", href: "/project-management" },
    { label: "Cost Estimation & Quality Surveying", href: "/cost-estimation" },
    { label: "Contract Management", href: "/contract-management" },
    { label: "Advisory & PMO", href: "/consulting" },
    { label: "Training Services", href: "/training" },
  ],
  trainingServices: [
    { label: "PMP® Certification", href: "/pmp" },
    { label: "CAPM® Certification", href: "/capm" },
    { label: "PMI-CP® Certification", href: "/pmicp" },
    { label: "Custom Training", href: "/training" },
    { label: "Training Resources", href: "/training" },
  ],
  resources: [
    { label: "Case Studies", href: "#" },
    { label: "Blog", href: "/blog" },
    { label: "About Us", href: "/about" },
    { label: "Become a Partner", href: "/partner" },
  ],
};

function NewsletterForm() {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 relative z-10 border border-slate-100">
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-slate-700">First Name <span className="text-accent">*</span></label>
          <input type="text" placeholder="John" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-slate-700">Last Name <span className="text-accent">*</span></label>
          <input type="text" placeholder="Doe" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium" />
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label className="text-sm font-bold text-slate-700">E-mail <span className="text-accent">*</span></label>
          <input type="email" placeholder="john@company.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium" />
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label className="text-sm font-bold text-slate-700">Country <span className="text-accent">*</span></label>
          <select defaultValue="AU" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium appearance-none cursor-pointer">
            <option value="AU">Australia</option>
            <option value="NZ">New Zealand</option>
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="sm:col-span-2 mt-4">
          <button type="submit" className="w-full py-4 bg-primary text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
            Subscribe <Send size={18} />
          </button>
        </div>
      </form>
    </div>
  );
}

const clientImages = [
  "/our_client/1.jpeg", "/our_client/2.jpeg", "/our_client/3.jpeg", "/our_client/4.jpeg",
  "/our_client/5.jpeg", "/our_client/6.jpeg", "/our_client/7.jpeg", "/our_client/8.jpeg",
  "/our_client/9.jpeg", "/our_client/10.jpeg", "/our_client/11.jpeg", "/our_client/12.jpeg",
];

function ClientsSection() {
  return (
    <div className="bg-white py-12 border-t border-slate-100 overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h4 className="text-primary font-black text-xs uppercase tracking-[0.2em] opacity-60">Our Clients belong to</h4>
        </div>
        <div className="relative flex overflow-x-hidden group marquee-mask">
          <div className="flex animate-marquee whitespace-nowrap py-4">
            {[...clientImages, ...clientImages].map((src, index) => (
              <div key={index} className="mx-12 w-48 h-24 relative transition-all duration-300 hover:scale-110">
                <Image
                  src={src}
                  alt="Client Logo"
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

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200">
      {/* Contact Section - Replaced Newsletter */}
      <div id="contact" className="bg-slate-50 py-16 scroll-mt-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="label-tag mb-6 inline-block">Support & Enquiries</span>
            <h3 className="h2 text-primary mb-6">How can we help?</h3>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">Reach out for custom corporate training, consulting enquiries, or certification guidance.</p>
          </div>
          <ContactForm />
        </div>
      </div>

      {/* Clients Marquee */}
      <ClientsSection />

      {/* Company Bio Section */}
      <CompanyBio />

      {/* Main Footer - Deep Executive Blue Area */}
      <div className="bg-primary pt-20 pb-12 text-white/90">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Branding Column */}
            <div className="lg:col-span-4 flex flex-col gap-8 pr-4">
              <div className="space-y-6">
                <p className="text-[15px] leading-relaxed font-medium">
                  At TotalPMP, we're passionate about projects. We provide the full range of project services and training to increase your team's skills and capabilities.
                </p>
                <p className="text-accent text-xs font-black leading-relaxed uppercase tracking-[0.2em] bg-accent/5 p-4 rounded-xl border border-accent/10">
                  FAST ACCURATE ESTIMATING FOR CONSTRUCTION PROJECT
                </p>
                <p className="text-[15px] leading-relaxed font-medium opacity-80">
                  Creating calm across your projects, no matter the complexity, and helping you achieve your business outcomes.
                </p>
              </div>

              {/* PMI Logo Container */}
              <div className="mt-4 p-6 bg-white/5 rounded-3xl border border-white/10 w-fit group">
                <Image
                  src="/images/pmi_atp_atp_white_rgb.svg"
                  alt="PMI Authorized Training Partner"
                  width={200}
                  height={192}
                  className="h-48 w-auto transition-all duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
              <div>
                <h4 className="text-white font-black mb-8 text-xs uppercase tracking-[0.2em] opacity-50">Our services</h4>
                <ul className="space-y-4">
                  {footerLinks.ourServices.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="hover:text-accent text-[14px] font-medium transition-colors">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-black mb-8 text-xs uppercase tracking-[0.2em] opacity-50">Training</h4>
                <ul className="space-y-4">
                  {footerLinks.trainingServices.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="hover:text-accent text-[14px] font-medium transition-colors">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-black mb-8 text-xs uppercase tracking-[0.2em] opacity-50">Resources</h4>
                <ul className="space-y-4">
                  {footerLinks.resources.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="hover:text-accent text-[14px] font-medium transition-colors">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-black mb-8 text-xs uppercase tracking-[0.2em] opacity-50">Contact</h4>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <MapPin size={20} className="text-accent shrink-0 mt-1" />
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-white font-bold text-xs uppercase tracking-widest opacity-50 mb-1">Pakistan</h5>
                        <p className="text-sm leading-relaxed">Flat no 203, Classical Apartments, Near Dr Akbar Niazi Teaching Hospital, Bharakahu, Islamabad</p>
                      </div>
                      <div className="pt-3 border-t border-white/5">
                        <h5 className="text-white font-bold text-xs uppercase tracking-widest opacity-50 mb-1">New Zealand</h5>
                        <p className="text-sm leading-relaxed">15 Idlewild Ave, Mangere</p>
                      </div>
                      <div className="pt-3 border-t border-white/5">
                        <h5 className="text-white font-bold text-xs uppercase tracking-widest opacity-50 mb-1">Australia</h5>
                        <p className="text-sm leading-relaxed">93 Park Orchard Drive, Pakenham</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-white/10">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3 group">
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                          <Phone size={14} className="text-accent" />
                        </div>
                        <div className="flex flex-col text-sm">
                          <a href="tel:096207678" className="hover:text-accent transition-colors">09 620 7678</a>
                          <a href="tel:0273537774" className="hover:text-accent transition-colors">027 353 7774</a>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 group">
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                          <Mail size={14} className="text-accent" />
                        </div>
                        <a href="mailto:contact@totalpmp.com" className="text-sm hover:text-accent transition-colors break-all">
                          contact@totalpmp.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom attribution */}
          <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest opacity-50">
            <p>© {new Date().getFullYear()} TotalPMP. All rights reserved.</p>
            <div className="flex gap-8">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
