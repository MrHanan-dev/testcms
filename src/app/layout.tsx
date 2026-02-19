import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter for clean, professional look
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const inter = Inter({ subsets: ["latin"], weight: ['400', '500', '600', '700'], variable: '--font-inter' });

export const metadata: Metadata = {
    title: {
        template: '%s | TotalPMP',
        default: 'Total PMP — Project Management, Cost Estimation & Professional Training',
    },
    description: "TotalPMP delivers expert PMP certification training, precision AI-driven construction cost estimation, and strategic project management consulting. Empowering professionals and optimizing project outcomes globally.",
    keywords: ["TotalPMP", "PMP Certification Training", "Construction Cost Estimation", "Project Management Consulting", "PMO Services", "AI Cost Advisory", "Professional Project Training"],
    openGraph: {
        title: "TotalPMP | Professional Project Management Services",
        description: "Expert PMP training and AI-powered construction estimation services by TotalPMP.",
        type: "website",
        locale: 'en_US',
        siteName: 'TotalPMP',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'TotalPMP',
        description: 'Premier PMP Training and AI Construction Estimation by TotalPMP.',
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} antialiased`}>
                <JsonLd />
                {children}
            </body>
        </html>
    );
}
