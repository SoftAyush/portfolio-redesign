import { absoluteUrl, siteConfig } from "@/lib/site"
import { readingTimeDuration } from "@/lib/reading-time"

/**
 * Stable @id anchors. Every other node references the Person and WebSite by id
 * rather than repeating them, so a crawler resolves all four blog posts, the
 * site and the author to a single entity.
 */
export const PERSON_ID = `${siteConfig.url}/#person`
export const WEBSITE_ID = `${siteConfig.url}/#website`

export function personSchema() {
    return {
        "@type": "Person",
        "@id": PERSON_ID,
        name: siteConfig.name,
        url: siteConfig.url,
        image: absoluteUrl("/assets/Aayush.jpg"),
        jobTitle: siteConfig.jobTitle,
        description: siteConfig.description,
        email: `mailto:${siteConfig.email}`,
        knowsAbout: [...siteConfig.knowsAbout],
        sameAs: [...siteConfig.profiles],
        address: {
            "@type": "PostalAddress",
            addressLocality: siteConfig.location.locality,
            addressRegion: siteConfig.location.region,
            addressCountry: siteConfig.location.country,
        },
    }
}

export function websiteSchema() {
    return {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: "en",
        publisher: { "@id": PERSON_ID },
        author: { "@id": PERSON_ID },
    }
}

interface ArticleInput {
    title: string
    slug: string
    date: string
    category: string
    excerpt: string
    image: string
    content?: string
    wordCount?: number
}

export function blogPostingSchema(post: ArticleInput) {
    const pageUrl = `${siteConfig.url}/blog/${post.slug}`
    return {
        "@type": "BlogPosting",
        "@id": `${pageUrl}#article`,
        headline: post.title,
        description: post.excerpt,
        image: absoluteUrl(post.image),
        datePublished: post.date,
        dateModified: post.date,
        articleSection: post.category,
        inLanguage: "en",
        author: { "@id": PERSON_ID },
        publisher: { "@id": PERSON_ID },
        isPartOf: { "@id": WEBSITE_ID },
        mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
        ...(post.wordCount ? { wordCount: post.wordCount } : {}),
        ...(post.content ? { timeRequired: readingTimeDuration(post.content) } : {}),
    }
}

export function faqSchema(entries: { question: string; answer: string }[]) {
    return {
        "@type": "FAQPage",
        mainEntity: entries.map((entry) => ({
            "@type": "Question",
            name: entry.question,
            acceptedAnswer: { "@type": "Answer", text: entry.answer },
        })),
    }
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
    return {
        "@type": "BreadcrumbList",
        itemListElement: trail.map((crumb, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: crumb.name,
            item: absoluteUrl(crumb.path),
        })),
    }
}

/** Wraps nodes in a single @graph so one script tag carries the whole entity set. */
export function graph(...nodes: object[]) {
    return { "@context": "https://schema.org", "@graph": nodes }
}
