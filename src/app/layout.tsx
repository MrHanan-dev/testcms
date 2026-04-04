import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import WhatsAppFAB from "@/components/WhatsAppFAB";


const inter = Inter({
    subsets: ["latin"],
    variable: '--font-inter'
});

const outfit = Outfit({
    subsets: ["latin"],
    variable: '--font-outfit',
});

export const metadata: Metadata = {
    metadataBase: new URL("https://theagilenest.com"),
    title: {
        template: '%s | TheAgileNest',
        default: 'TheAgileNest Project Management, Cost Estimation & Professional Training',
    },
    description: "TheAgileNest delivers expert PMP certification training, precision AI driven construction cost estimation, and strategic project management consulting. Empowering professionals and optimizing project outcomes globally.",
    keywords: ["TheAgileNest", "PMP Certification Training", "Construction Cost Estimation", "Project Management Consulting", "PMO Services", "AI Cost Advisory", "Professional Project Training"],
    openGraph: {
        title: "TheAgileNest | Professional Project Management Services",
        description: "Expert PMP training and AI powered construction estimation services by TheAgileNest.",
        type: "website",
        locale: 'en_US',
        siteName: 'TheAgileNest',
        images: [
            {
                url: '/images/totalpmp_hero_main_1771222013046.png',
                width: 1200,
                height: 630,
                alt: 'TheAgileNest Project Management & Cost Estimation',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'TheAgileNest',
        description: 'Premier PMP Training and AI Construction Estimation by TheAgileNest.',
    },
    icons: {
        icon: '/favicon.png',
        shortcut: '/favicon.png',
        apple: '/favicon.png',
    },
    verification: {
        google: 'p5T02ffFOO32y-ROE3jITb_vU4YCRX_m9xbcLLv0SLw',
        other: {
            'ahrefs-site-verification': 'ea610847118d22cdb8f150326dea32b5a4012f706bc914ad815c41691715cd1f',
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${outfit.variable} antialiased`} suppressHydrationWarning={true}>
                <JsonLd />
                {children}
                <WhatsAppFAB />
            </body>
        </html>
    );
}
