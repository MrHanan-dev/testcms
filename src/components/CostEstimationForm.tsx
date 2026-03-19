"use client";

import { useState, useRef } from 'react';
import { User, Mail, Building2, FileText, Upload, Send, CheckCircle2, X } from 'lucide-react';

export default function CostEstimationForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [files, setFiles] = useState<File[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const newFiles = Array.from(e.target.files);
            setFiles(prev => [...prev, ...newFiles]);
        }
    };

    const removeFile = (index: number) => {
        setFiles(prev => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);

        try {
            // Read files as Base64
            const filePromises = files.map(file => {
                return new Promise<{ name: string, content: string, type: string }>((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = () => {
                        const base64String = (reader.result as string).split(',')[1];
                        resolve({
                            name: file.name,
                            content: base64String,
                            type: file.type
                        });
                    };
                    reader.onerror = reject;
                    reader.readAsDataURL(file);
                });
            });

            const processedFiles = await Promise.all(filePromises);

            // Check total size (Vercel/Next.js limit is ~4.5MB for the whole request)
            const totalSize = files.reduce((acc, f) => acc + f.size, 0);
            if (totalSize > 4 * 1024 * 1024) {
                alert('Total file size exceeds 4MB limit for direct upload. Please reduce file size or contact us directly.');
                setIsSubmitting(false);
                return;
            }

            const data = {
                formType: 'Cost Estimation Request',
                fullName: formData.get('fullName'),
                email: formData.get('email'),
                company: formData.get('company'),
                projectName: formData.get('projectName'),
                files: processedFiles
            };

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
                <h3 className="text-2xl font-bold text-primary">Request Submitted!</h3>
                <p className="text-slate-600">
                    Your cost estimation request and documents have been received.
                    Our quantity surveyors will review your files and contact you shortly to discuss requirements.
                </p>
                <button
                    onClick={() => {
                        setIsSubmitted(false);
                        setFiles([]);
                    }}
                    className="text-primary font-bold hover:underline"
                >
                    Submit another request
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-3xl shadow-premium border border-slate-100 overflow-hidden">
            <div className="bg-primary p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Request an Estimate</h3>
                <p className="text-blue-100/80 text-sm">Upload your project documents (plans, specs, BOQ) for a fast, accurate quote.</p>
            </div>

            <form className="p-8 space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                            <User size={16} className="text-accent" /> Full Name
                        </label>
                        <input
                            required
                            name="fullName"
                            type="text"
                            placeholder="John Doe"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                    </div>

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
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                            <Building2 size={16} className="text-accent" /> Company (Optional)
                        </label>
                        <input
                            name="company"
                            type="text"
                            placeholder="Your Construction Co."
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                            <FileText size={16} className="text-accent" /> Project Name
                        </label>
                        <input
                            required
                            name="projectName"
                            type="text"
                            placeholder="Residential Block A"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                    </div>
                </div>

                <div className="space-y-4">
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                        <Upload size={16} className="text-accent" /> Project Documents
                    </label>

                    <div
                        onClick={() => fileInputRef.current?.click()}
                        className="border-2 border-dashed border-slate-200 rounded-2xl p-8 hover:border-primary/50 hover:bg-slate-50 transition-all cursor-pointer group text-center"
                    >
                        <input
                            type="file"
                            multiple
                            className="hidden"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                        />
                        <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                            <Upload className="text-slate-400 group-hover:text-primary transition-colors" size={24} />
                        </div>
                        <p className="text-slate-600 font-bold mb-1">Click to upload or drag and drop</p>
                        <p className="text-slate-400 text-sm">PDF, DWG, Excel, or Zip (Max 50MB)</p>
                    </div>

                    {files.length > 0 && (
                        <div className="space-y-2 mt-4">
                            {files.map((file, index) => (
                                <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                                    <div className="flex items-center gap-3">
                                        <FileText size={18} className="text-primary/60" />
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-slate-700 truncate max-w-[200px] md:max-w-xs">{file.name}</span>
                                            <span className="text-[10px] text-slate-400">{(file.size / (1024 * 1024)).toFixed(2)} MB</span>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            removeFile(index);
                                        }}
                                        className="p-2 hover:bg-red-50 hover:text-red-500 rounded-lg transition-colors text-slate-400"
                                    >
                                        <X size={16} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-primary text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:translate-y-0"
                    >
                        {isSubmitting ? "Uploading Documents..." : "Submit Estimation Request"}
                        {!isSubmitting && <Send size={18} />}
                    </button>
                </div>
            </form>
        </div>
    );
}
