import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
    subsets: ["latin"],
    variable: '--font-inter'
});

const outfit = Outfit({
    subsets: ["latin"],
    variable: '--font-outfit',
});

export const metadata: Metadata = {
    metadataBase: new URL("https://totalpmp.co.nz"),
    title: {
        template: '%s | TotalPMP',
        default: 'Total PMP - Project Management, Cost Estimation & Professional Training',
    },
    description: "TotalPMP delivers expert PMP certification training, precision AI-driven construction cost estimation, and strategic project management consulting. Empowering professionals and optimizing project outcomes globally.",
    keywords: ["TotalPMP", "PMP Certification Training", "Construction Cost Estimation", "Project Management Consulting", "PMO Services", "AI Cost Advisory", "Professional Project Training"],
    openGraph: {
        title: "TotalPMP | Professional Project Management Services",
        description: "Expert PMP training and AI-powered construction estimation services by TotalPMP.",
        type: "website",
        locale: 'en_US',
        siteName: 'TotalPMP',
        images: [
            {
                url: '/images/totalpmp_hero_main_1771222013046.png',
                width: 1200,
                height: 630,
                alt: 'TotalPMP - Project Management & Cost Estimation',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'TotalPMP',
        description: 'Premier PMP Training and AI Construction Estimation by TotalPMP.',
    },
    icons: {
        icon: '/favicon.png',
        shortcut: '/favicon.png',
        apple: '/favicon.png',
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${outfit.variable} antialiased`}>
                <JsonLd />
                {children}
            </body>
        </html>
    );
}
