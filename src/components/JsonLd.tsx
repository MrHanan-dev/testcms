export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "TotalPMP",
        "url": "https://totalpmp.co.nz",
        "logo": "https://totalpmp.co.nz/logo.png",
        "description": "Premium PMP certification training and AI-driven construction cost estimation services.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Auckland",
            "addressRegion": "Auckland",
            "addressCountry": "NZ"
        },
        "contactPoint": [
            {
                "@type": "ContactPoint",
                "telephone": "09 620 7678",
                "contactType": "customer service"
            },
            {
                "@type": "ContactPoint",
                "telephone": "027 353 7774",
                "contactType": "customer service"
            }
        ],
        "sameAs": [
            "https://www.linkedin.com/company/totalpmp",
        ],
        "offers": [
            {
                "@type": "Offer",
                "name": "PMP Certification Training",
                "description": "Expert-led PMP exam preparation course"
            },
            {
                "@type": "Offer",
                "name": "Construction Cost Management",
                "description": "Precision cost management and quantity surveying"
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
