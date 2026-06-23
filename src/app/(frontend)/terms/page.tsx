import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getGlobal } from '@/lib/payload';
import type { Metadata } from 'next';
import { RichText } from '@payloadcms/richtext-lexical/react';
import { generateSeoMetadata } from '@/lib/generateSeoMetadata';

export async function generateMetadata(): Promise<Metadata> {
    const page = await getGlobal('termsPage');
    return generateSeoMetadata({
        data: page,
        fallbackTitle: "Terms of Service | TheAgileNest",
        fallbackDescription: "TheAgileNest terms of service - the rules and guidelines for using our services.",
        path: "/terms",
    });
}

const orUndef = (v: unknown): string | undefined => (typeof v === 'string' && v.length > 0 ? v : undefined);
const hasRich = (v: unknown): v is object => Boolean(v && typeof v === 'object' && 'root' in (v as Record<string, unknown>));

const DEFAULT_SECTIONS = [
    { heading: "Acceptance of Terms", body: "By accessing and using TheAgileNest services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services." },
    { heading: "Services Description", body: "TheAgileNest provides project management training, consulting services, and certification preparation programs. We reserve the right to modify, suspend, or discontinue any service at any time." },
    { heading: "User Responsibilities", body: "You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use." },
    { heading: "Intellectual Property", body: "All content, materials, and intellectual property on our website and in our courses are owned by TheAgileNest or our licensors. You may not reproduce, distribute, or create derivative works without our written permission." },
    { heading: "Payment Terms", body: "Payment for courses and services is due at the time of enrollment unless otherwise agreed. Refund policies are outlined in our course-specific terms and conditions." },
    { heading: "Limitation of Liability", body: "TheAgileNest shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services." },
    { heading: "Governing Law", body: "These terms shall be governed by and construed in accordance with the laws of New Zealand, without regard to its conflict of law provisions." },
    { heading: "Contact Information", body: "For questions about these Terms of Service, please contact us at contact@theagilenest.com." },
];

export default async function TermsPage() {
    const c = await getGlobal('termsPage');

    const title = orUndef(c.title) ?? "Terms of Service";
    const lastUpdated = orUndef(c.lastUpdated) ?? "June 2026";
    const richContent = c.content;
    const sections = (c.sections as { heading: string; body: string }[] | undefined)?.length
        ? (c.sections as { heading: string; body: string }[])
        : DEFAULT_SECTIONS;

    return (
        <>
            <Header variant="solid" />
            <main className="min-h-screen bg-white pt-32 pb-20">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-12">
                            <h1 className="text-4xl md:text-5xl font-black text-primary mb-4">{title}</h1>
                            <p className="text-slate-500 font-medium">Last updated: {lastUpdated}</p>
                        </div>

                        {hasRich(richContent) ? (
                            <div className="prose prose-lg prose-slate max-w-none">
                                <RichText data={richContent as Parameters<typeof RichText>[0]['data']} />
                            </div>
                        ) : (
                            <div className="space-y-10">
                                {sections.map((section, i) => (
                                    <section key={i}>
                                        <h2 className="text-2xl font-bold text-primary mb-4">{section.heading}</h2>
                                        <p className="text-slate-600 leading-relaxed">{section.body}</p>
                                    </section>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Footer hideContactForm hideClients />
        </>
    );
}
