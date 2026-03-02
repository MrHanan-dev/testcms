import { MetadataRoute } from 'next'
import { blogPosts, BlogPost } from '@/data/blogPosts.tsx'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://totalpmp.com'

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
    const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post: BlogPost) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
    }))

    return [...staticRoutes, ...blogRoutes]
}
