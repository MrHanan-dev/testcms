"use client";

import { useState } from 'react';
import { User, Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = {
            formType: 'General Contact',
            fullName: formData.get('fullName'),
            email: formData.get('email'),
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
            alert('Failed to send message. Check your connection.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-premium border border-slate-100 text-center space-y-6 max-w-2xl mx-auto">
                <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto scale-110">
                    <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-primary">Message Sent!</h3>
                <p className="text-slate-600">
                    Thank you for reaching out to <strong>TotalPMP</strong>. Our advisors will review your message and get back to you within 24 hours.
                </p>
                <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-primary font-bold hover:underline transition-all"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-[40px] shadow-premium border border-slate-100 overflow-hidden max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-5">
                <div className="lg:col-span-2 bg-primary p-10 text-white flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-bl-full blur-2xl"></div>
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold mb-4">Get in touch</h3>
                        <p className="text-blue-100/80 mb-8 font-medium">Have questions about our training or consultancy services? We're here to help.</p>
                    </div>
                    <div className="relative z-10 space-y-4">
                        <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-accent">
                            <span className="w-8 h-[1px] bg-accent"></span>
                            Advisor Support
                        </div>
                        <p className="text-xs text-blue-200/60 font-medium italic">"TotalPMP helped us navigate complex project hurdles with ease." - Project Lead, Auckland</p>
                    </div>
                </div>

                <form className="lg:col-span-3 p-10 space-y-6" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                <User size={16} className="text-accent" /> Name
                            </label>
                            <input
                                required
                                name="fullName"
                                type="text"
                                placeholder="Your name"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                <Mail size={16} className="text-accent" /> Email
                            </label>
                            <input
                                required
                                name="email"
                                type="email"
                                placeholder="your@email.com"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                            <MessageSquare size={16} className="text-accent" /> Message
                        </label>
                        <textarea
                            required
                            name="message"
                            rows={4}
                            placeholder="How can we help you?"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium resize-none"
                        ></textarea>
                    </div>

                    <div className="pt-2">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 bg-primary text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:translate-y-0"
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                            {!isSubmitting && <Send size={18} />}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
