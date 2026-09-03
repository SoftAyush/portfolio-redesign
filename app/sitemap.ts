import type { MetadataRoute } from "next"
import { blogPosts } from "@/data/blog-posts"
import { siteConfig } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date()

    const staticRoutes: MetadataRoute.Sitemap = [
        { url: `${siteConfig.url}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
        { url: `${siteConfig.url}/portfolio`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
        { url: `${siteConfig.url}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
        { url: `${siteConfig.url}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
        { url: `${siteConfig.url}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
        { url: `${siteConfig.url}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    ]

    const postRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
        url: `${siteConfig.url}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "yearly",
        priority: 0.6,
    }))

    return [...staticRoutes, ...postRoutes]
}
