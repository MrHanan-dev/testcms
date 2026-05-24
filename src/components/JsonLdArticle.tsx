export default function JsonLdArticle({
    title,
    description,
    url,
    imageUrl,
    datePublished,
    authorName,
    category
}: {
    title: string;
    description: string;
    url: string;
    imageUrl: string;
    datePublished: string;
    authorName: string;
    category: string;
}) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": description,
        "url": url,
        "image": `https://theagilenest.com${imageUrl}`,
        "datePublished": datePublished,
        "dateModified": datePublished,
        "author": {
            "@type": "Person",
            "name": authorName
        },
        "publisher": {
            "@type": "Organization",
            "name": "TheAgileNest",
            "logo": {
                "@type": "ImageObject",
                "url": "https://theagilenest.com/favicon.png"
            }
        },
        "articleSection": category
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
