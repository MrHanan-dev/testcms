"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Users,
  Award,
  ArrowRight,
  GraduationCap,
  LifeBuoy,
  Percent,
  FileCheck,
  Building2,
  Send,
  CheckCircle2,
  User,
  Mail,
  MessageSquare,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

export type PartnerPageContent = {
  heroEyebrow: string;
  heroTitleLead: string;
  heroTitleAccent: string;
  heroDescription: string;
  heroButton: string;
  introHeading: string;
  introPara1: string;
  introPara2: string;
  introQuote: string;
  introQuoteLabel: string;
  whoEyebrow: string;
  whoHeading: string;
  whoCards: { title: string; desc: string }[];
  whoBannerHeading: string;
  whoBannerPara: string;
  benefitsEyebrow: string;
  benefitsHeading: string;
  benefits: { title: string; desc: string }[];
  leadHeading: string;
  leadPara: string;
  leadButton: string;
  formHeading: string;
  formIntro: string;
  formSteps: string[];
  successHeading: string;
  successParaBody: string;
  successButton: string;
  submitButton: string;
  submittingButton: string;
};

const WHO_ICONS = [Building2, GraduationCap, Users];
const BENEFIT_ICONS = [LifeBuoy, Award, Percent, FileCheck];

export default function PartnerPageClient({ content: c }: { content: PartnerPageContent }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      formType: "Partner Application",
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      organization: formData.get("organization"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setSubmitError("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError("Failed to send application. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen pt-12 pb-16 bg-slate-50">
        <section className="bg-primary text-white py-20 px-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10"></div>
          <div className="absolute top-20 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
          <div className="max-w-6xl mx-auto relative z-10 text-center">
            <span className="text-accent font-extrabold tracking-[0.2em] uppercase text-sm mb-6 block">{c.heroEyebrow}</span>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              {c.heroTitleLead} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-200">
                {c.heroTitleAccent}
              </span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
              {c.heroDescription}
            </p>
            <Link
              href="#apply"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 hover:shadow-lg shadow-accent/20"
            >
              {c.heroButton} <ArrowRight size={20} />
            </Link>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 space-y-24">
          <section className="bg-white p-10 md:p-16 rounded-[40px] border border-slate-100 shadow-sm">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-primary mb-6">{c.introHeading}</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">{c.introPara1}</p>
                <p className="text-slate-600 text-lg leading-relaxed">{c.introPara2}</p>
              </div>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 text-center space-y-6">
                <h3 className="text-2xl font-bold text-primary italic leading-tight">&quot;{c.introQuote}&quot;</h3>
                <div className="w-16 h-1 w-accent mx-auto rounded-full"></div>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">{c.introQuoteLabel}</p>
              </div>
            </div>
          </section>

          <section>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-accent font-extrabold tracking-[0.2em] uppercase text-[10px] mb-4 block">{c.whoEyebrow}</span>
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-6">{c.whoHeading}</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {c.whoCards.map((group, i) => {
                const Icon = WHO_ICONS[i] ?? Building2;
                return (
                  <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group text-center">
                    <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent transition-colors">
                      <Icon size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-4">{group.title}</h3>
                    <p className="text-slate-500 leading-relaxed text-sm">{group.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-16 bg-primary text-white p-10 md:p-12 rounded-[40px] text-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 relative z-10 leading-tight">{c.whoBannerHeading}</h3>
              <p className="text-blue-100 text-lg mb-0 relative z-10">{c.whoBannerPara}</p>
            </div>
          </section>

          <section>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-accent font-extrabold tracking-[0.2em] uppercase text-[10px] mb-4 block">{c.benefitsEyebrow}</span>
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-6">{c.benefitsHeading}</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {c.benefits.map((benefit, i) => {
                const Icon = BENEFIT_ICONS[i] ?? LifeBuoy;
                return (
                  <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all h-full">
                    <div className="text-accent mb-6">
                      <Icon size={36} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-3 leading-tight">{benefit.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="bg-slate-900 text-white rounded-[40px] p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-5"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black mb-6">{c.leadHeading}</h2>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">{c.leadPara}</p>
              <Link
                href="#apply"
                className="inline-flex items-center gap-2 bg-white text-primary hover:bg-slate-100 px-8 py-4 rounded-full font-bold transition-all"
              >
                {c.leadButton}
              </Link>
            </div>
          </section>

          <section id="apply" className="bg-white rounded-[40px] shadow-sm border border-slate-100 overflow-hidden mb-20">
            <div className="grid lg:grid-cols-2">
              <div className="bg-primary text-white p-10 md:p-14 lg:p-16 relative overflow-hidden flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-6">{c.formHeading}</h3>
                  <p className="text-slate-300 mb-10 leading-relaxed text-sm md:text-base">{c.formIntro}</p>

                  <div className="space-y-8">
                    {c.formSteps.map((step, i) => (
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
                    <h3 className="text-2xl font-bold text-primary">{c.successHeading}</h3>
                    <p className="text-slate-600 max-w-sm mx-auto">
                      Thank you for your interest in partnering with <strong>TheAgileNest</strong>.
                      {" "}
                      {c.successParaBody}
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-primary font-bold hover:underline transition-all"
                    >
                      {c.successButton}
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

                    {submitError && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 flex items-start gap-3">
                        <AlertCircle size={20} className="shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-sm">Application failed</p>
                          <p className="text-sm mt-1">{submitError}</p>
                        </div>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-4 rounded-xl transition-all hover:shadow-lg shadow-accent/20 flex items-center justify-center gap-2 group"
                    >
                      {isSubmitting ? c.submittingButton : c.submitButton}
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
