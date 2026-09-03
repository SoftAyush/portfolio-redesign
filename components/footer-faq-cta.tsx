"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

/**
 * The only part of the footer that needs to know the current route, so it is
 * split out here and the rest of the footer stays a server component.
 * Hidden on /faq itself, where pointing at the FAQ would be circular.
 */
export function FooterFaqCta() {
    const pathname = usePathname()

    if (pathname === "/faq") return null

    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 py-12 border-b border-border/50">
            <div>
                <p className="text-2xl md:text-3xl font-bold tracking-tight mb-1">
                    Questions before you start?
                </p>
                <p className="text-muted-foreground">
                    Services, stack choices and how a project begins — answered.
                </p>
            </div>
            <Button size="lg" className="rounded-full h-14 px-8 font-bold group w-fit shrink-0" asChild>
                <Link href="/faq">
                    Read the FAQ
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
            </Button>
        </div>
    )
}
