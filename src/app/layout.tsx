import type { Metadata } from "next";
import { Open_Sans, Nunito_Sans } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const openSans = Open_Sans({
    subsets: ["latin"],
    weight: ['400', '500', '600', '700', '800'],
    variable: '--font-open-sans'
});

const nunitoSans = Nunito_Sans({
    subsets: ["latin"],
    weight: ['400', '500', '600', '700', '800', '900'],
    variable: '--font-nunito-sans',
});

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
            <body className={`${openSans.variable} ${nunitoSans.variable} antialiased`}>
                <JsonLd />
                {children}
            </body>
        </html>
    );
}
