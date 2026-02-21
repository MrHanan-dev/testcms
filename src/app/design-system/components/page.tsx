'use client';

import { useState } from 'react';
import { Briefcase, ArrowRight, ShieldCheck } from 'lucide-react';

export default function DesignSystemComponents() {
    const [activeTab, setActiveTab] = useState('All');

    return (
        <div className="space-y-16">
            <header className="mb-12">
                <span className="label-tag block mb-2">Pattern Library</span>
                <h1 className="h1 text-gray-900">components.</h1>
                <p className="text-xl text-gray-600 mt-4 max-w-3xl leading-relaxed">
                    Interactive, reusable UI elements built with our brand tokens. Hover over elements to see interaction states and micro-animations.
                </p>
            </header>

            {/* Buttons */}
            <section className="space-y-6">
                <div className="pb-4 border-b border-gray-200">
                    <h2 className="h2 text-primary-600">Buttons</h2>
                    <p className="text-gray-600 text-sm mt-2">Core interaction elements. Observe the slight scale and shadow shift on hover.</p>
                </div>

                <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-200 shadow-sm flex flex-wrap gap-6 items-center">
                    <button className="btn-primary">Primary Action</button>
                    <button className="btn-secondary">Secondary Action</button>
                    <button className="btn-outline">Outline Action</button>
                    <button className="text-primary-600 font-semibold hover:underline decoration-2 underline-offset-4 transition-all">Ghost Action</button>
                    <button className="text-accent-500 font-bold flex items-center gap-2 group hover:text-accent-400 transition-colors">
                        Learn more <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </section>

            {/* Nav Simulation */}
            <section className="space-y-6">
                <div className="pb-4 border-b border-gray-200">
                    <h2 className="h2 text-primary-600">Navigation</h2>
                    <p className="text-gray-600 text-sm mt-2">Standard desktop header navigation with the social pill.</p>
                </div>
                <div className="bg-gray-100 p-8 rounded-3xl border border-gray-200 overflow-hidden">
                    <div className="bg-white shadow-sm rounded-xl p-4 flex justify-between items-center border border-gray-100">
                        <div className="font-display font-bold text-xl text-primary-600 tracking-tight">
                            millpond<span className="text-accent-500">.</span>
                        </div>
                        <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-900">
                            <span className="text-accent-500 cursor-pointer">Home</span>
                            <span className="hover:text-accent-500 cursor-pointer transition-colors">Services</span>
                            <span className="hover:text-accent-500 cursor-pointer transition-colors">Training</span>
                            <span className="hover:text-accent-500 cursor-pointer transition-colors">About</span>
                        </div>
                        <div className="flex bg-accent-500 w-10 h-10 rounded-full text-white items-center justify-center hover:bg-accent-400 cursor-pointer transition-colors shadow-sm">
                            in
                        </div>
                    </div>
                </div>
            </section>

            {/* Cards */}
            <section className="space-y-6">
                <div className="pb-4 border-b border-gray-200">
                    <h2 className="h2 text-primary-600">Cards</h2>
                    <p className="text-gray-600 text-sm mt-2">Hover over the cards to see the blue-tinted shadow and upward lift.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Service Card */}
                    <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group cursor-pointer">
                        <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                            <Briefcase size={32} />
                        </div>
                        <h3 className="h3 text-gray-900 mb-4">Project Management</h3>
                        <p className="body-text mb-6">Providing a wide range of experienced project delivery personnel to help achieve business outcomes reliably and effectively.</p>
                        <div className="text-accent-500 font-bold flex items-center gap-2 group-hover:text-accent-400 transition-colors">
                            Learn more <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>

                    {/* Stat Card */}
                    <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 text-center flex flex-col items-center justify-center min-h-[300px]">
                        <span className="text-7xl font-extrabold text-primary-600 font-display mb-2">145+</span>
                        <span className="h4 text-gray-600">Years Experience combined</span>
                    </div>
                </div>
            </section>

            {/* Badges and Tabs */}
            <section className="space-y-6">
                <div className="pb-4 border-b border-gray-200">
                    <h2 className="h2 text-primary-600">Tabs & Badges</h2>
                    <p className="text-gray-600 text-sm mt-2">Filter controls and small metadata labels.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6">
                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Filter Tabs</h4>
                        <div className="flex flex-wrap gap-2">
                            {['All', 'Consultants', 'Leadership', 'Trainers'].map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${activeTab === tab
                                            ? 'bg-primary-600 text-white shadow-md'
                                            : 'bg-white border border-gray-200 text-gray-600 hover:border-primary-600 hover:text-primary-600'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6">
                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Pill Badges</h4>
                        <div className="flex flex-wrap gap-3 items-center">
                            <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-xs font-bold uppercase tracking-wider">Leadership</span>
                            <span className="px-3 py-1 bg-accent-50 text-accent-500 rounded-full text-xs font-bold uppercase tracking-wider">New Course</span>
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-wider">Passed</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Form Inputs */}
            <section className="space-y-6">
                <div className="pb-4 border-b border-gray-200">
                    <h2 className="h2 text-primary-600">Form Inputs</h2>
                    <p className="text-gray-600 text-sm mt-2">Standard text inputs focusing on clean radius and primary-color focus rings.</p>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm max-w-md">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-900 mb-2">Email Address</label>
                            <input
                                type="email"
                                placeholder="you@company.com"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-900 mb-2">Subject</label>
                            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all appearance-none cursor-pointer">
                                <option>Project Management Consulting</option>
                                <option>Professional Training</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
