export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "TotalPMP",
        "url": "https://TotalPMP.com",
        "logo": "https://TotalPMP.com/logo.png",
        "description": "Premium PMP certification training and AI-driven construction cost estimation services.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "100 Business Park, Suite 500",
            "addressLocality": "New York",
            "addressRegion": "NY",
            "postalCode": "10001",
            "addressCountry": "US"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-123-4567",
            "contactType": "customer service"
        },
        "sameAs": [
            "https://www.linkedin.com/company/TotalPMP",
            "https://twitter.com/TotalPMP",
            "https://facebook.com/TotalPMP"
        ],
        "offers": [
            {
                "@type": "Offer",
                "name": "PMP Certification Training",
                "description": "Expert-led PMP exam preparation course"
            },
            {
                "@type": "Offer",
                "name": "AI Construction Cost Estimation",
                "description": "Data-driven cost prediction for construction projects"
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
