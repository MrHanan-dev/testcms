"use client";

import { ShieldCheck, Zap, TrendingUp, Users } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck size={28} />,
    title: "Global Accreditation",
    description: "Our programs are recognized by international project management bodies, ensuring your certification holds weight in any market, from New York to Singapore."
  },
  {
    icon: <Zap size={28} />,
    title: "AI-Powered Decision Support",
    description: "Go beyond simple estimation. Our AI provides real-time decision support, identifying cost-saving opportunities and predicting supply chain disruptions."
  },
  {
    icon: <TrendingUp size={28} />,
    title: "Proven ROI for Billion-Dollar Projects",
    description: "TotalPMP strategies have been battle-tested on major infrastructure projects, delivering an average cost reduction of 15% through precision management."
  },
  {
    icon: <Users size={28} />,
    title: "Dedicated Corporate Support",
    description: "We don't just train; we partner. Our dedicated account managers work with your leadership to ensure PMP methodologies are fully integrated into your culture."
  }
];

export default function Features() {
  return (
    <section id="services" className="section bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Content */}
          <div>
            <div className="inline-block px-3 py-1 bg-accent/10 rounded-full text-accent text-sm font-semibold mb-6">
              Why Choose Us
            </div>
            <h2 className="h2 mb-6">
              Why Choose <span className="text-primary">TotalPMP</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              We combine traditional project management rigor with modern AI innovation to deliver superior results that drive your business forward.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center text-accent mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-bold text-primary mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual/Image Side */}
          <div className="order-first lg:order-last">
            <div className="relative h-[500px] w-full bg-gradient-to-br from-primary to-primary-light rounded-2xl overflow-hidden shadow-2xl group">
              {/* Abstract Background */}
              <div className="absolute inset-0 bg-[url('/images/totalpmp_ai_estimation_1771222114549.png')] bg-cover bg-center opacity-40 mix-blend-overlay transition-transform duration-700 group-hover:scale-105" />

              {/* Dashboard Mockup */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[70%] bg-white rounded-t-xl shadow-2xl p-4 flex flex-col transition-transform duration-500 group-hover:translate-y-2">
                {/* Mockup Header */}
                <div className="flex gap-2 mb-4 bg-gray-50 p-2 rounded-lg items-center">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="ml-4 h-2 w-32 bg-gray-200 rounded-full" />
                </div>

                {/* Mockup Content - Charts */}
                <div className="flex-1 grid grid-cols-3 gap-4 items-end px-4 pb-4">
                  <div className="h-[40%] bg-gray-100 rounded-md relative group-hover:h-[45%] transition-all duration-500">
                    <div className="absolute -top-6 left-0 right-0 text-center text-xs text-gray-400">wk1</div>
                  </div>
                  <div className="h-[60%] bg-gray-100 rounded-md relative group-hover:h-[65%] transition-all duration-500 delay-100">
                    <div className="absolute -top-6 left-0 right-0 text-center text-xs text-gray-400">wk2</div>
                  </div>
                  <div className="h-[85%] bg-accent/90 rounded-md relative shadow-lg shadow-accent/20 group-hover:h-[90%] transition-all duration-500 delay-200">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-white text-xs px-2 py-1 rounded">
                      +15%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
