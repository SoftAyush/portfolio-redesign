import type { Metadata } from "next"
import { siteConfig } from "@/lib/site"

/** The build-time generated card from app/opengraph-image.tsx. */
const DEFAULT_OG_IMAGE = "/opengraph-image"

interface PageMetadataInput {
    title: string
    description: string
    /** Site-relative path, used for both the canonical and og:url. */
    path: string
    /** Absolute or site-relative. Falls back to the generated site card. */
    image?: string
    type?: "website" | "profile" | "article"
    publishedTime?: string
    section?: string
}

/**
 * Builds a complete per-route metadata object.
 *
 * A route's `openGraph` and `twitter` blocks replace the root layout's rather
 * than merging into them, so every page has to restate the image and card type
 * or it silently drops to a small, imageless preview. Going through one helper
 * keeps that from happening per route.
 */
export function pageMetadata(input: PageMetadataInput): Metadata {
    const { title, description, path, image = DEFAULT_OG_IMAGE } = input

    const shared = {
        title,
        description,
        url: path,
        siteName: siteConfig.name,
        locale: siteConfig.locale,
        images: [{ url: image, alt: title }],
    }

    const openGraph: Metadata["openGraph"] =
        input.type === "article"
            ? {
                ...shared,
                type: "article",
                publishedTime: input.publishedTime,
                modifiedTime: input.publishedTime,
                authors: [siteConfig.url],
                section: input.section,
            }
            : input.type === "profile"
                ? { ...shared, type: "profile" }
                : { ...shared, type: "website" }

    return {
        title,
        description,
        alternates: { canonical: path },
        openGraph,
        twitter: { card: "summary_large_image", title, description, images: [image] },
    }
}
