"use client";

import Link from 'next/link';

const footerLinks = {
  ourServices: [
    { label: "Project Management", href: "#" },
    { label: "Business Analysis", href: "#" },
    { label: "Consulting", href: "#" },
    { label: "Change Management", href: "#" },
    { label: "Quality Assurance and Testing", href: "#" },
    { label: "Portfolio and Project Management as a Service", href: "#" },
    { label: "Post Implementation Review (PIR)", href: "#" },
    { label: "Training Services", href: "#" },
  ],
  trainingServices: [
    { label: "Course Catalogue – NZ", href: "#" },
    { label: "Course Catalogue – Australia", href: "#" },
    { label: "PMI Certification", href: "#" },
    { label: "Professional Development", href: "#" },
    { label: "Custom Training", href: "#" },
    { label: "Coaching and Mentoring", href: "#" },
    { label: "Training Resources", href: "#" },
    { label: "Testimonials", href: "#" },
  ],
  resources: [
    { label: "Case Studies", href: "#" },
    { label: "Blog", href: "#" },
    { label: "About Us", href: "/about" },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Newsletter Section - High Contrast Corporate UX */}
      <div className="bg-gray-100 py-16 border-t border-gray-200">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div className="text-center lg:text-left relative z-10 hidden md:block">
              <span className="inline-block px-4 py-1.5 bg-accent-500/10 text-accent-500 rounded-full text-sm font-bold uppercase tracking-wider mb-6">Join our community</span>
              <h3 className="text-4xl lg:text-5xl font-extrabold font-display text-gray-900 mb-6 leading-tight">Let's keep in<br className="hidden lg:block" /> touch.</h3>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-md mx-auto lg:mx-0">Subscribe to our newsletter for the latest insights, training updates, and agile strategies in project management.</p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 relative z-10 ring-1 ring-gray-200">
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700">First Name <span className="text-accent-500">*</span></label>
                  <input type="text" placeholder="John" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all font-medium" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700">Last Name <span className="text-accent-500">*</span></label>
                  <input type="text" placeholder="Doe" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all font-medium" />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label className="text-sm font-bold text-gray-700">E-mail <span className="text-accent-500">*</span></label>
                  <input type="email" placeholder="john@company.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all font-medium" />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label className="text-sm font-bold text-gray-700">Country <span className="text-accent-500">*</span></label>
                  <select defaultValue="AU" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all font-medium appearance-none cursor-pointer">
                    <option value="AU">Australia</option>
                    <option value="NZ">New Zealand</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="sm:col-span-2 mt-4 text-center">
                  <button type="submit" className="w-full py-4 bg-accent-500 hover:bg-accent-400 text-white font-bold text-lg rounded-xl shadow-[0_4px_14px_0_rgba(232,24,108,0.39)] hover:shadow-[0_6px_20px_rgba(232,24,108,0.23)] hover:-translate-y-0.5 transition-all flex items-center justify-center">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>

      {/* Main Footer - Blue Area */}
      <div className="bg-primary-600 pt-16 pb-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Left Column (Logo & Intro) */}
            <div className="lg:col-span-4 flex flex-col gap-6 pr-4">
              <p className="text-white/90 text-[14px] leading-relaxed">
                At TotalPMP, we're passionate about projects. We provide the full range of project services and training to increase your team's skills and capabilities to help you achieve your business outcomes.
              </p>
              <p className="text-white/90 text-[14px] font-bold leading-relaxed uppercase tracking-wider text-accent">
                FAST ACCURATE ESTIMATING FOR CONSTRUCTION PROJECT
              </p>
              <p className="text-white/90 text-[14px] leading-relaxed">
                By creating calm across your projects, no matter the breadth and complexity, we help create the momentum you need to move your organisation forward.
              </p>

              {/* PMI Authorized Training Partner Logo */}
              <div className="mt-8">
                <img
                  src="/images/pmi_atp_atp_white_rgb_1.svg"
                  alt="PMI Authorized Training Partner"
                  className="w-40 h-40"
                />
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-4 gap-8">

              {/* Our Services */}
              <div>
                <h4 className="text-white font-bold mb-6 text-[15px]">Our services</h4>
                <ul className="space-y-3">
                  {footerLinks.ourServices.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-white/80 hover:text-white text-[13px] transition-colors">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Training Services */}
              <div>
                <h4 className="text-white font-bold mb-6 text-[15px]">Training services</h4>
                <ul className="space-y-3">
                  {footerLinks.trainingServices.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-white/80 hover:text-white text-[13px] transition-colors">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="text-white font-bold mb-6 text-[15px]">Resources</h4>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-white/80 hover:text-white text-[13px] transition-colors">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-white font-bold mb-6 text-[15px]">Contact</h4>
                <ul className="space-y-3">
                  <li className="text-white/80 text-[13px] leading-relaxed">
                    Auckland, New Zealand<br />
                    Christchurch, New Zealand
                  </li>
                  <li>
                    <div className="text-white/80 text-[13px] transition-colors">
                      Ph: 09 620 7678
                    </div>
                  </li>
                  <li>
                    <div className="text-white/80 text-[13px] transition-colors">
                      Cell: 027 353 7774
                    </div>
                  </li>
                  <li>
                    <a href="mailto:syed.iqbal@totalqs.co.nz" className="text-white/80 hover:text-white text-[13px] break-all transition-colors">
                      syed.iqbal@totalqs.co.nz
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
