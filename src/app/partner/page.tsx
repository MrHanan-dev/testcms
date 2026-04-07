"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Target, Users, BookOpen, Award, ArrowRight, ShieldCheck, GraduationCap, LifeBuoy, Percent, FileCheck, Building2, Send, CheckCircle2, User, Mail, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function PartnerPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = {
            formType: 'Partner Application',
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            organization: formData.get('organization'),
            message: formData.get('message'),
        };

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert('Failed to send application. Check your connection.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Header />
            <main className="min-h-screen pt-12 pb-16 bg-slate-50">
                {/* Hero Section */}
                <section className="bg-primary text-white py-20 px-4 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10"></div>
                    <div className="absolute top-20 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
                    <div className="max-w-6xl mx-auto relative z-10 text-center">
                        <span className="text-accent font-extrabold tracking-[0.2em] uppercase text-sm mb-6 block">Partnership Program</span>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                            Become a <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-200">
                                Training Partner
                            </span>
                        </h1>
                        <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
                            Join our Training Partner Program to boost your training services with certifications that carry weight around the world. You will pick up special resources, steady support, and solid ways to build out your training operation.
                        </p>
                        <Link
                            href="#apply"
                            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 hover:shadow-lg shadow-accent/20"
                        >
                            Apply Now <ArrowRight size={20} />
                        </Link>
                    </div>
                </section>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 space-y-24">

                    {/* Introduction Section */}
                    <section className="bg-white p-10 md:p-16 rounded-[40px] border border-slate-100 shadow-sm">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-black text-primary mb-6">TheAgileNest Training Partner Program</h2>
                                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                    TheAgileNest Training Partner Program links up the best trainers out there with solid project management skills that everyone recognizes around the world. You can join in to give your instructors a real boost and add more courses that come with those popular certifications people want.
                                </p>
                                <p className="text-slate-600 text-lg leading-relaxed">
                                    When you become a partner, you get special materials, help with marketing, and one-on-one advice to help build up your training side of things. Team up with us so you can help form the upcoming group of project management experts. Apply right now.
                                </p>
                            </div>
                            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 text-center space-y-6">
                                <h3 className="text-2xl font-bold text-primary italic leading-tight">
                                    "Empower Your Training. Grow Your Reach. Deliver Excellence. Become a TheAgileNest Partner."
                                </h3>
                                <div className="w-16 h-1 w-accent mx-auto rounded-full"></div>
                                <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">PM Training Leadership</p>
                            </div>
                        </div>
                    </section>

                    {/* Who Should Apply */}
                    <section>
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="text-accent font-extrabold tracking-[0.2em] uppercase text-[10px] mb-4 block">Eligibility</span>
                            <h2 className="text-3xl md:text-4xl font-black text-primary mb-6">Who Should Apply?</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Training Institutions",
                                    icon: Building2,
                                    desc: "Increase the number of subjects in your classroom with our accredited PMI Certifications and specialized courses of your choice."
                                },
                                {
                                    title: "Independent Trainers",
                                    icon: GraduationCap,
                                    desc: "Get the qualification of a PMI-certified teacher, thus uplifting your training courses, and getting the valuable resources for your students' success."
                                },
                                {
                                    title: "Educational Organizations",
                                    icon: Users,
                                    desc: "Give your students the necessary PMI Certifications and specialized courses, which will enable them to have successful careers."
                                },
                            ].map((group, i) => (
                                <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group text-center">
                                    <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent transition-colors">
                                        <group.icon size={32} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-xl font-bold text-primary mb-4">{group.title}</h3>
                                    <p className="text-slate-500 leading-relaxed text-sm">
                                        {group.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 bg-primary text-white p-10 md:p-12 rounded-[40px] text-center relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 relative z-10 leading-tight">
                                Unlock Your Training Potential
                            </h3>
                            <p className="text-blue-100 text-lg mb-0 relative z-10">
                                Strengthen your Instruct as Rich Programs – Partner with us!
                            </p>
                        </div>
                    </section>

                    {/* Benefits for Partners */}
                    <section>
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="text-accent font-extrabold tracking-[0.2em] uppercase text-[10px] mb-4 block">Advantages</span>
                            <h2 className="text-3xl md:text-4xl font-black text-primary mb-6">Benefits for Partners</h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    title: "Dedicated Partner Support",
                                    icon: LifeBuoy,
                                    desc: "Our committed team is here to provide you with professional onboarding support, help with course delivery, and ongoing support."
                                },
                                {
                                    title: "Empower Your Instructors",
                                    icon: Award,
                                    desc: "Your instructors will be provided with exclusive training and development opportunities to increase their knowledge and performance."
                                },
                                {
                                    title: "Discounted Training Materials",
                                    icon: Percent,
                                    desc: "Gain access to the specially discounted training materials that will enable you to run excellent and budget-friendly courses."
                                },
                                {
                                    title: "Student Success Resources",
                                    icon: FileCheck,
                                    desc: "Give your students the essential tools, such as practice tests and career development resources, to facilitate their success."
                                },
                            ].map((benefit, i) => (
                                <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all h-full">
                                    <div className="text-accent mb-6">
                                        <benefit.icon size={36} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-lg font-bold text-primary mb-3 leading-tight">{benefit.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Lead in Training CTA Section */}
                    <section className="bg-slate-900 text-white rounded-[40px] p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-5"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-black mb-6">Lead in Training Partner with Us!</h2>
                            <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                                Strengthen instructor capabilities and grow your training offerings. Partner with TheAgileNest.
                            </p>
                            <Link
                                href="#apply"
                                className="inline-flex items-center gap-2 bg-white text-primary hover:bg-slate-100 px-8 py-4 rounded-full font-bold transition-all"
                            >
                                Apply Now
                            </Link>
                        </div>
                    </section>

                    {/* Application Form */}
                    <section id="apply" className="bg-white rounded-[40px] shadow-sm border border-slate-100 overflow-hidden mb-20">
                        <div className="grid lg:grid-cols-2">
                            <div className="bg-primary text-white p-10 md:p-14 lg:p-16 relative overflow-hidden flex flex-col justify-center">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                                <div className="relative z-10">
                                    <h3 className="text-3xl font-bold mb-6">Ready to become a training leader?</h3>
                                    <p className="text-slate-300 mb-10 leading-relaxed text-sm md:text-base">
                                        Tell us a bit about your organization and your goals. Our partnership team will review your application and reach out to schedule an exploratory call within 48 hours.
                                    </p>

                                    <div className="space-y-8">
                                        {[
                                            "Fill out the partner application form.",
                                            "Attend an exploratory alignment call.",
                                            "Sign the partnership agreement.",
                                            "Complete the onboarding and instructor enablement."
                                        ].map((step, i) => (
                                            <div key={i} className="flex gap-5 items-center group">
                                                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 text-accent flex items-center justify-center shrink-0 font-bold text-xl group-hover:bg-accent group-hover:text-white transition-all shadow-sm">
                                                    {i + 1}
                                                </div>
                                                <p className="font-medium text-slate-100 text-sm md:text-base">{step}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="p-10 md:p-14 lg:p-16 bg-slate-50/30">
                                {isSubmitted ? (
                                    <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12">
                                        <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center scale-110 shadow-sm border border-emerald-100">
                                            <CheckCircle2 size={40} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-primary">Application Received!</h3>
                                        <p className="text-slate-600 max-w-sm mx-auto">
                                            Thank you for your interest in partnering with <strong>TheAgileNest</strong>.
                                            Our partnership team will review your application and contact you within 48 hours.
                                        </p>
                                        <button
                                            onClick={() => setIsSubmitted(false)}
                                            className="text-primary font-bold hover:underline transition-all"
                                        >
                                            Submit another application
                                        </button>
                                    </div>
                                ) : (
                                    <form className="space-y-6" onSubmit={handleSubmit}>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-[13px] font-bold text-slate-700 flex items-center gap-2">
                                                    <User size={14} className="text-accent" /> First Name
                                                </label>
                                                <input
                                                    name="firstName"
                                                    type="text"
                                                    placeholder="Enter first name"
                                                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all text-sm font-medium shadow-sm"
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[13px] font-bold text-slate-700 flex items-center gap-2">
                                                    <User size={14} className="text-accent" /> Last Name
                                                </label>
                                                <input
                                                    name="lastName"
                                                    type="text"
                                                    placeholder="Enter last name"
                                                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all text-sm font-medium shadow-sm"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[13px] font-bold text-slate-700 flex items-center gap-2">
                                                <Mail size={14} className="text-accent" /> Business Email
                                            </label>
                                            <input
                                                name="email"
                                                type="email"
                                                placeholder="yourname@company.com"
                                                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all text-sm font-medium shadow-sm"
                                                required
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[13px] font-bold text-slate-700 flex items-center gap-2">
                                                <Building2 size={14} className="text-accent" /> Organization/Company
                                            </label>
                                            <input
                                                name="organization"
                                                type="text"
                                                placeholder="Company or entity name"
                                                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all text-sm font-medium shadow-sm"
                                                required
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[13px] font-bold text-slate-700 flex items-center gap-2">
                                                <MessageSquare size={14} className="text-accent" /> Partnership Interest
                                            </label>
                                            <textarea
                                                name="message"
                                                placeholder="Briefly describe your training goals..."
                                                rows={4}
                                                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all text-sm font-medium resize-none shadow-sm"
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-4 rounded-xl transition-all hover:shadow-lg shadow-accent/20 flex items-center justify-center gap-2 group"
                                        >
                                            {isSubmitting ? "Processing..." : "Submit Application"}
                                            {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
