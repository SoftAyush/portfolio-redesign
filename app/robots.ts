import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site"

/**
 * AI crawlers are allowed deliberately: for a portfolio, being quotable by an
 * assistant is free distribution. They are named explicitly rather than left to
 * the wildcard so the choice is on the record — flip these to `disallow` to opt out.
 */
const AI_CRAWLERS = [
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "ClaudeBot",
    "Claude-User",
    "PerplexityBot",
    "Google-Extended",
    "Applebot-Extended",
    "CCBot",
    "Bytespider",
    "meta-externalagent",
]

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            { userAgent: "*", allow: "/", disallow: "/api/" },
            { userAgent: AI_CRAWLERS, allow: "/", disallow: "/api/" },
        ],
        sitemap: `${siteConfig.url}/sitemap.xml`,
        host: siteConfig.url,
    }
}
