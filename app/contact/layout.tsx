import type React from "react"
import { pageMetadata } from "@/lib/metadata"

/**
 * The contact page itself is a client component (it owns the form state), and
 * client components cannot export metadata — so it lives here instead.
 */
export const metadata = pageMetadata({
    title: "Start a Project",
    description:
        "Get in touch about a Flutter, Kotlin Multiplatform or native Android build. Based in Lalitpur, Nepal, working with teams worldwide.",
    path: "/contact",
})

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return children
}
