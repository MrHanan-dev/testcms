import { MetadataRoute } from 'next'
import { blogPostsMeta } from '@/data/blogPostsMeta'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://theagilenest.com'

    // Static pages
    const staticRoutes: MetadataRoute.Sitemap = [
        '',
        '/about',
        '/training',
        '/blog',
        '/project-management',
        '/cost-estimation',
        '/contract-management',
        '/consulting',
        '/pmp',
        '/capm',
        '/pmicp',
        '/partner'
    ].map(route => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'monthly',
        priority: route === '' ? 1.0 : (route.startsWith('/training') || route.startsWith('/pmp') ? 0.9 : 0.8),
    }))

    // Dynamic blog posts
    const blogRoutes: MetadataRoute.Sitemap = blogPostsMeta.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
    }))

    return [...staticRoutes, ...blogRoutes]
}
