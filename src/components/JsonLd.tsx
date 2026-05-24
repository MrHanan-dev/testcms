export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "TheAgileNest",
        "url": "https://theagilenest.com",
        "logo": "https://theagilenest.com/favicon.png",
        "image": "https://theagilenest.com/images/TheAgileNest_hero_main_1771222013046.png",
        "description": "Premium PMP certification training, quantity surveying, and project management consulting services.",
        "telephone": "+64 9 620 7678",
        "priceRange": "$$",
        "address": [
            {
                "@type": "PostalAddress",
                "addressCountry": "NZ",
                "addressLocality": "Auckland",
                "addressRegion": "Auckland",
                "streetAddress": "15 Idlewild Ave Mangere",
                "postalCode": "2022"
            },
            {
                "@type": "PostalAddress",
                "addressCountry": "AU",
                "addressLocality": "Perth",
                "addressRegion": "WA"
            },
            {
                "@type": "PostalAddress",
                "addressCountry": "PK",
                "addressLocality": "Islamabad",
                "addressRegion": "Islamabad"
            }
        ],
        "areaServed": ["NZ", "AU", "PK"],
        "contactPoint": [
            {
                "@type": "ContactPoint",
                "telephone": "+64 9 620 7678",
                "contactType": "customer service",
                "areaServed": "NZ"
            },
            {
                "@type": "ContactPoint",
                "telephone": "+64 27 353 7774",
                "contactType": "customer service",
                "areaServed": "NZ"
            }
        ],
        "sameAs": [
            "https://www.linkedin.com/company/theagilenest"
        ],
        "offers": [
            {
                "@type": "Offer",
                "name": "PMP Certification Training",
                "description": "Expert-led PMP exam preparation course"
            },
            {
                "@type": "Offer",
                "name": "CAPM Certification Training",
                "description": "Entry-level project management certification"
            },
            {
                "@type": "Offer",
                "name": "PMI-CP Certification Training",
                "description": "Construction project management certification"
            },
            {
                "@type": "Offer",
                "name": "Construction Cost Management",
                "description": "Precision cost management and quantity surveying"
            },
            {
                "@type": "Offer",
                "name": "Project Management Consulting",
                "description": "Expert PM advisory and consulting services"
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
