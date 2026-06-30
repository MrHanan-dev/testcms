import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getGlobal } from '@/lib/payload';
import type { Metadata } from 'next';
import { RichText } from '@payloadcms/richtext-lexical/react';
import { generateSeoMetadata } from '@/lib/generateSeoMetadata';

export async function generateMetadata(): Promise<Metadata> {
    const page = await getGlobal('privacyPage');
    return generateSeoMetadata({
        data: page,
        fallbackTitle: "Privacy Policy | TheAgileNest",
        fallbackDescription: "TheAgileNest privacy policy - how we collect, use, and protect your personal information.",
        path: "/privacy",
    });
}

const orUndef = (v: unknown): string | undefined => (typeof v === 'string' && v.length > 0 ? v : undefined);
const hasRich = (v: unknown): v is object => Boolean(v && typeof v === 'object' && 'root' in (v as Record<string, unknown>));

const DEFAULT_SECTIONS = [
    { heading: "Information We Collect", body: "We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This may include your name, email address, phone number, and payment information." },
    { heading: "How We Use Your Information", body: "We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and respond to your comments and questions." },
    { heading: "Information Sharing", body: "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law." },
    { heading: "Data Security", body: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction." },
    { heading: "Cookies and Tracking", body: "We use cookies and similar tracking technologies to collect information about your browsing activities and to personalize your experience on our website." },
    { heading: "Your Rights", body: "You have the right to access, correct, or delete your personal information. You may also have the right to restrict or object to certain processing of your data." },
    { heading: "Contact Us", body: "If you have any questions about this Privacy Policy, please contact us at contact@theagilenest.com." },
];

export default async function PrivacyPage() {
    const c = await getGlobal('privacyPage');

    const title = orUndef(c.title) ?? "Privacy Policy";
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
