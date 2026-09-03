import Link from "next/link"
import { ArrowRight, MessageCircleQuestion } from "lucide-react"
import { Button } from "@/components/ui/button"
import { faqs } from "@/data/faq"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, faqSchema, graph } from "@/lib/schema"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
    title: "Common Questions",
    description:
        "Answers to the questions people ask before starting a mobile project — services, technologies, Flutter versus Kotlin Multiplatform, working with existing apps, and how to get started.",
    path: "/faq",
})

export default function FaqPage() {
    return (
        <div className="min-h-screen pt-20 sm:pt-24 lg:pt-32 pb-24 lg:pb-32">
            <JsonLd
                schema={graph(
                    faqSchema(faqs),
                    breadcrumbSchema([
                        { name: "Home", path: "/" },
                        { name: "Common Questions", path: "/faq" },
                    ]),
                )}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/*
                  * Below lg this collapses to a single column, so the DOM order is the
                  * reading order: heading, then questions, then the contact prompt.
                  */}
                <div className="grid lg:grid-cols-[minmax(0,19rem)_1fr] xl:grid-cols-[minmax(0,21rem)_1fr] gap-10 lg:gap-14 xl:gap-20">

                    <header className="lg:sticky lg:top-32 lg:self-start">
                        <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4 sm:mb-5 block">
                            Common Questions
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-tighter uppercase mb-5 sm:mb-6 text-balance">
                            Answers <br className="hidden sm:block" />
                            <span className="text-muted-foreground/40">before you ask.</span>
                        </h1>
                        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-prose">
                            The things people usually want to know before starting a project — what I build,
                            which stack fits, and how to begin.
                        </p>
                    </header>

                    <div className="flex flex-col gap-4 sm:gap-5">
                        {/*
                          * Answers render visibly rather than inside a collapsible: a Radix
                          * accordion unmounts closed panels, which would keep the answers out
                          * of the HTML entirely — the exact text the FAQPage markup claims.
                          */}
                        <dl className="flex flex-col gap-4 sm:gap-5 m-0">
                            {faqs.map((faq) => (
                                <div
                                    key={faq.question}
                                    className="group rounded-3xl sm:rounded-[2rem] border border-border/50 bg-muted/20 p-6 sm:p-8 lg:p-10 transition-colors duration-300 hover:border-primary/40 hover:bg-muted/40"
                                >
                                    <dt className="flex items-start gap-3 sm:gap-4">
                                        <MessageCircleQuestion
                                            className="mt-1 h-5 w-5 shrink-0 text-muted-foreground/50 transition-colors group-hover:text-primary"
                                            aria-hidden="true"
                                        />
                                        <span className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-balance">
                                            {faq.question}
                                        </span>
                                    </dt>
                                    <dd className="m-0 mt-3 sm:mt-4 sm:pl-9 max-w-[62ch] text-[15px] sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                                        {faq.answer}
                                    </dd>
                                </div>
                            ))}
                        </dl>

                        <div className="rounded-3xl sm:rounded-[2rem] border-2 border-dashed border-border/50 p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-5 sm:gap-8">
                            <div className="min-w-0">
                                <p className="text-lg sm:text-xl font-bold tracking-tight mb-1">
                                    Not covered here?
                                </p>
                                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                                    Send the details and you will get a reply within 24 hours.
                                </p>
                            </div>
                            <Button
                                size="lg"
                                className="rounded-full h-12 sm:h-14 px-6 sm:px-8 font-bold group w-full sm:w-auto shrink-0"
                                asChild
                            >
                                <Link href="/contact">
                                    Get in touch
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
