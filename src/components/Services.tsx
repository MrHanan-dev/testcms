"use client";



import { GraduationCap, Calculator, Briefcase, ChevronRight, Users, BarChart4 } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: <GraduationCap size={32} />,
    title: "PMP Certification Mastery",
    description: "Our world-class PMP training in Precision Project Management is designed for 100% exam success. Master the PMBOK Guide, agile methodologies, leadership skills, and risk management with expert TotalPMP instructors. We offer tailored mentorship and high-yield study resources.",
    link: "#pmp",
    bgImage: "/images/totalpmp_pmp_training_1771222055265.png"
  },
  {
    icon: <Calculator size={32} />,
    title: "AI-Powered Cost Estimation",
    description: "Eliminate budget uncertainty with TotalPMP's proprietary AI algorithms. We provide high-precision construction cost estimation, sensitivity analysis, and predictive analytics for infra projects. Our data-driven approach minimizes variance and optimizes resource allocation.",
    link: "#estimation",
    bgImage: "/images/totalpmp_ai_estimation_1771222114549.png"
  },
  {
    icon: <Briefcase size={32} />,
    title: "Strategic PMO Consulting",
    description: "TotalPMP offers strategic project management consulting to optimize your PMO. We align technical execution with business strategy to ensure every project delivers maximum ROI. We focus on workflow efficiency, bottleneck identification, and stakeholders management.",
    link: "#consulting",
    bgImage: "/images/totalpmp_consulting_1771222157225.png"
  },
  {
    icon: <Users size={32} />,
    title: "Corporate Workforce Training",
    description: "Scale your organization's project maturity with custom-tailored workforce development. We train entire departments in lean PM, agile workflows, and collaborative leadership to ensure consistent project delivery standards and a shared language of success.",
    link: "#workforce",
    bgImage: "/images/totalpmp_pmp_training_1771222055265.png"
  },
  {
    icon: <BarChart4 size={32} />,
    title: "Advanced Data Analytics",
    description: "Go beyond spreadsheets with advanced project analytics. We provide deep-dive insights into project velocity, burning rates, and resource utilization using modern BI tools integrated with your existing project management ecosystem for real-time visibility.",
    link: "#analytics",
    bgImage: "/images/totalpmp_ai_estimation_1771222114549.png"
  }
];

export default function Services() {
  return (
    <section id="services" className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="h2 mb-4">Our Expertise</h2>
          <p className="text-xl text-gray-600">Delivering precision and excellence across three core pillars.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/10 transition-all duration-500 overflow-hidden"
            >
              {/* Background Image on Hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-cover bg-center -z-10"
                style={{ backgroundImage: `url(${service.bgImage})` }}
              />

              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed min-h-[100px]">{service.description}</p>
              <Link
                href={service.link}
                className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors group-hover:translate-x-1 duration-300"
              >
                Learn More <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
