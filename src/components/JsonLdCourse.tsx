export default function JsonLdCourse({
    name,
    description,
    providerName,
    providerUrl,
    url,
    courseCode,
    duration,
    offers
}: {
    name: string;
    description: string;
    providerName?: string;
    providerUrl?: string;
    url: string;
    courseCode?: string;
    duration?: string;
    offers?: { price: string; priceCurrency: string; description: string }[];
}) {
    const jsonLd: Record<string, unknown> = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": name,
        "description": description,
        "url": url,
        "provider": {
            "@type": "Organization",
            "name": providerName ?? "TheAgileNest",
            "url": providerUrl ?? "https://theagilenest.com"
        }
    };

    if (courseCode) jsonLd.courseCode = courseCode;
    if (duration) jsonLd["timeRequired"] = duration;
    if (offers && offers.length > 0) {
        jsonLd.offers = offers.map((o) => ({
            "@type": "Offer",
            ...o
        }));
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
