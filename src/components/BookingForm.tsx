"use client";

import { useState } from 'react';
import { User, Mail, Phone, Send, CheckCircle2 } from 'lucide-react';

interface BookingFormProps {
    courseName: string;
    availableDates?: string[];
}

export default function BookingForm({ courseName }: BookingFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = {
            formType: 'Course Booking',
            courseName,
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            enrollNow: formData.get('enrollNow'),
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
            alert('Failed to send request. Check your connection.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-premium border border-slate-100 text-center space-y-6">
                <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto scale-110">
                    <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-primary">Booking Received!</h3>
                <p className="text-slate-600">
                    Thank you for registering for the <strong>{courseName}</strong> training.
                    Our team will contact you shortly with further details and payment instructions.
                </p>
                <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-primary font-bold hover:underline"
                >
                    Send another booking
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-3xl shadow-premium border border-slate-100 overflow-hidden">
            <div className="bg-primary p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Register Now</h3>
                <p className="text-blue-100/80 text-sm">Secure your spot for the {courseName} certification training.</p>
            </div>

            <form className="p-8 space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                            <User size={16} className="text-accent" /> First Name
                        </label>
                        <input
                            required
                            name="firstName"
                            type="text"
                            placeholder="John"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                            <User size={16} className="text-accent" /> Last Name
                        </label>
                        <input
                            required
                            name="lastName"
                            type="text"
                            placeholder="Doe"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                            <Mail size={16} className="text-accent" /> Email Address
                        </label>
                        <input
                            required
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                            <Phone size={16} className="text-accent" /> Phone Number
                        </label>
                        <input
                            required
                            name="phone"
                            type="tel"
                            placeholder="+64 00 000 0000"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                    </div>
                </div>

                <div className="space-y-4 pt-4">
                    <label className="text-sm font-bold text-slate-700">Would you like to enroll now?</label>
                    <div className="grid grid-cols-2 gap-4">
                        <label className="relative flex items-center justify-center p-4 rounded-xl border border-slate-200 bg-slate-50 cursor-pointer hover:bg-slate-100 transition-all has-[:checked]:bg-primary/5 has-[:checked]:border-primary has-[:checked]:ring-1 has-[:checked]:ring-primary">
                            <input required type="radio" name="enrollNow" value="Yes" className="absolute opacity-0 peer" />
                            <span className="font-bold text-slate-600 peer-checked:text-primary transition-colors">Yes</span>
                        </label>
                        <label className="relative flex items-center justify-center p-4 rounded-xl border border-slate-200 bg-slate-50 cursor-pointer hover:bg-slate-100 transition-all has-[:checked]:bg-primary/5 has-[:checked]:border-primary has-[:checked]:ring-1 has-[:checked]:ring-primary">
                            <input required type="radio" name="enrollNow" value="In the future" className="absolute opacity-0 peer" />
                            <span className="font-bold text-slate-600 peer-checked:text-primary transition-colors">In the future</span>
                        </label>
                    </div>
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-primary text-white font-black text-lg rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:translate-y-0"
                    >
                        {isSubmitting ? "Processing..." : "Confirm Registration"}
                        {!isSubmitting && <Send size={18} />}
                    </button>
                    <p className="text-[10px] text-slate-400 text-center mt-4 uppercase tracking-widest font-bold">
                        No upfront payment required to register
                    </p>
                </div>
            </form>
        </div>
    );
}
