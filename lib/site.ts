/**
 * Single source of truth for canonical URL, identity and social profiles.
 *
 * Everything SEO-facing (metadata, sitemap, robots, JSON-LD) reads from here,
 * so switching domains is a one-line change. Set NEXT_PUBLIC_SITE_URL in the
 * deployment environment to override the default.
 */
export const siteConfig = {
    name: "Ayush Timalsina",
    jobTitle: "Mobile Engineer",
    url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://ayushtimalsina.com.np").replace(/\/$/, ""),
    locale: "en_US",
    email: "ayushtimalsina2002@gmail.com",
    location: { locality: "Lalitpur", region: "Bagmati", country: "NP" },
    /** Year professional work began — experience figures are derived from this. */
    careerStartYear: 2023,
    tagline: "Flutter & Kotlin Multiplatform Engineer",
    description:
        "Mobile engineer in Lalitpur, Nepal building Flutter, Kotlin Multiplatform and native Android apps. Portfolio, published packages and writing on mobile architecture.",
    /** Bound to the Person entity as sameAs — the links that let search and answer engines merge these profiles into one identity. */
    profiles: [
        "https://github.com/SoftAyush",
        "https://linkedin.com/in/aayush-timalsina-221683309",
        "https://pub.dev/publishers/ayushtimalsina.com.np/packages",
        "https://www.instagram.com/_aayush_timalsina",
    ],
    knowsAbout: [
        "Flutter",
        "Dart",
        "Kotlin Multiplatform",
        "Kotlin",
        "Native Android Development",
        "Jetpack Compose",
        "Mobile Architecture",
        "UI/UX Design",
    ],
} as const

/**
 * Years of professional experience, derived rather than written down so the
 * hero stat and the About copy can never disagree — or go stale in January.
 */
export function yearsOfExperience(): number {
    return new Date().getFullYear() - siteConfig.careerStartYear
}

/** Resolves a site-relative path to an absolute URL, leaving remote URLs untouched. */
export function absoluteUrl(path: string): string {
    if (/^https?:\/\//.test(path)) return path
    return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`
}
