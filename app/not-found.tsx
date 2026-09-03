import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
    title: "Page not found",
    description: "That page doesn't exist. Head back to the portfolio, the journal or get in touch.",
    robots: { index: false, follow: true },
}

const destinations = [
    { href: "/portfolio", label: "Portfolio", hint: "Flutter, KMP and native Android projects" },
    { href: "/blog", label: "Journal", hint: "Writing on mobile architecture" },
    { href: "/about", label: "About", hint: "Background, skills and experience" },
    { href: "/contact", label: "Contact", hint: "Start a project" },
]

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex items-center py-24">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <span className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-6 block">
                        Error 404
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[0.95] tracking-tighter uppercase mb-6">
                        Page not <br />
                        <span className="text-muted-foreground/40">found.</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-xl mb-12">
                        That link is broken or the page has moved. Everything else is still where you left it.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3 mb-12">
                        {destinations.map((destination) => (
                            <Link
                                key={destination.href}
                                href={destination.href}
                                className="group flex items-center justify-between gap-4 rounded-2xl border border-border/50 p-5 transition-colors hover:border-primary/50 hover:bg-muted/30"
                            >
                                <span className="flex flex-col gap-1">
                                    <span className="font-bold uppercase tracking-widest text-sm">{destination.label}</span>
                                    <span className="text-sm text-muted-foreground">{destination.hint}</span>
                                </span>
                                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1" />
                            </Link>
                        ))}
                    </div>

                    <Button size="lg" className="h-14 px-8 rounded-full font-bold" asChild>
                        <Link href="/">Back to home</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
