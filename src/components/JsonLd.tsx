type JsonLdProps = {
    orgName?: string;
    orgType?: string;
    description?: string;
    logoUrl?: string;
    imageUrl?: string;
    phone?: string;
    priceRange?: string;
    streetAddress?: string;
    city?: string;
    region?: string;
    postalCode?: string;
    country?: string;
    latitude?: string;
    longitude?: string;
    foundingDate?: string;
    founderName?: string;
    ratingValue?: string;
    reviewCount?: string;
    bestRating?: string;
    services?: { name: string; description?: string; url?: string }[];
    socialLinks?: string[];
};

const DEFAULTS: Required<Pick<JsonLdProps, "orgName" | "orgType" | "description" | "logoUrl" | "imageUrl" | "phone" | "priceRange" | "streetAddress" | "city" | "region" | "postalCode" | "country" | "foundingDate" | "founderName" | "ratingValue" | "reviewCount" | "bestRating" | "services" | "socialLinks">> = {
    orgName: "TheAgileNest",
    orgType: "ProfessionalService",
    description: "Premium PMP certification training, quantity surveying, and project management consulting services.",
    logoUrl: "https://theagilenest.co.nz/favicon.png",
    imageUrl: "https://theagilenest.co.nz/images/TheAgileNest_hero_main_1771222013046.png",
    phone: "+64 9 620 7678",
    priceRange: "$$",
    streetAddress: "15 Idlewild Ave Mangere",
    city: "Auckland",
    region: "Auckland",
    postalCode: "2022",
    country: "NZ",
    foundingDate: "2007",
    founderName: "Engr. Syed Amjad Iqbal",
    ratingValue: "4.9",
    reviewCount: "127",
    bestRating: "5",
    services: [
        { name: "PMP Certification Training", description: "Expert-led PMP exam preparation course", url: "/pmp" },
        { name: "CAPM Certification Training", description: "Entry-level project management certification", url: "/capm" },
        { name: "PMI-CP Certification Training", description: "Construction project management certification", url: "/pmicp" },
        { name: "Construction Cost Management", description: "Precision cost management and quantity surveying", url: "/cost-estimation" },
        { name: "Project Management Consulting", description: "Expert PM advisory and consulting services", url: "/consulting" },
    ],
    socialLinks: ["https://www.linkedin.com/company/theagilenest"],
};

export default function JsonLd(props: JsonLdProps = {}) {
    const p = { ...DEFAULTS, ...props };
    
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": p.orgType,
        "name": p.orgName,
        "url": "https://theagilenest.co.nz",
        "logo": p.logoUrl,
        "image": p.imageUrl,
        "description": p.description,
        "telephone": p.phone,
        "priceRange": p.priceRange,
        "foundingDate": p.foundingDate,
        "founder": p.founderName ? {
            "@type": "Person",
            "name": p.founderName
        } : undefined,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": p.streetAddress,
            "addressLocality": p.city,
            "addressRegion": p.region,
            "postalCode": p.postalCode,
            "addressCountry": p.country,
        },
        ...(p.latitude && p.longitude ? {
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": p.latitude,
                "longitude": p.longitude,
            }
        } : {}),
        "areaServed": ["NZ", "AU", "PK", "AE", "US"],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": p.phone,
            "contactType": "customer service",
            "availableLanguage": ["English"],
        },
        "sameAs": p.socialLinks,
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": p.ratingValue,
            "reviewCount": p.reviewCount,
            "bestRating": p.bestRating,
        },
        "offers": p.services?.map((s) => ({
            "@type": "Offer",
            "name": s.name,
            "description": s.description,
            ...(s.url ? { "url": `https://theagilenest.co.nz${s.url}` } : {}),
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
