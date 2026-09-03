import Link from "next/link"
import {Download, Github, Instagram, Linkedin, MapPin} from "lucide-react"
import {SiDart} from "react-icons/si"
import {FooterFaqCta} from "@/components/footer-faq-cta"

const navigateLinks = [
    {name: "Home", path: "/"},
    {name: "About", path: "/about"},
    {name: "Portfolio", path: "/portfolio"},
    {name: "Journal", path: "/blog"},
]

const supportLinks = [
    {name: "Common Questions", path: "/faq"},
    {name: "Contact", path: "/contact"},
]

// rel="me" declares these as the author's own profiles, matching the sameAs list in the Person schema.
const socialLinks = [
    {name: "GitHub", href: "https://github.com/SoftAyush", Icon: Github},
    {name: "LinkedIn", href: "https://linkedin.com/in/aayush-timalsina-221683309", Icon: Linkedin},
    {name: "pub.dev packages", href: "https://pub.dev/publishers/ayushtimalsina.com.np/packages", Icon: SiDart},
    {name: "Instagram", href: "https://www.instagram.com/_aayush_timalsina", Icon: Instagram},
]

export function Footer() {
    return (
        <footer className="border-t border-border/50 bg-muted/20">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">

                {/* FAQ call-out — hides itself on /faq */}
                <FooterFaqCta/>

                {/* Identity + link columns */}
                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] py-16">
                    <div className="flex flex-col gap-4">
                        <span className="font-black text-2xl tracking-[0.2em] uppercase">AT.</span>
                        <p className="text-muted-foreground leading-relaxed max-w-xs">
                            Mobile engineer building Flutter, Kotlin Multiplatform and native Android apps.
                        </p>
                        <p className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" aria-hidden="true"/>
                            Lalitpur, Nepal
                        </p>
                        <span
                            className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-border/50 bg-background px-4 py-2 text-[10px] font-bold uppercase tracking-widest">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true"/>
                            Available for projects
                        </span>
                    </div>

                    <FooterColumn title="Navigate">
                        {navigateLinks.map((link) => (
                            <FooterLink key={link.path} href={link.path}>{link.name}</FooterLink>
                        ))}
                    </FooterColumn>

                    <FooterColumn title="Support">
                        {supportLinks.map((link) => (
                            <FooterLink key={link.path} href={link.path}>{link.name}</FooterLink>
                        ))}
                        <a
                            href="/assets/Ayush-Timalsina-Resume.pdf"
                            download
                            className="inline-flex items-center gap-2 py-1.5 text-muted-foreground hover:text-foreground transition-colors w-fit"
                        >
                            Download CV
                            <Download className="h-3.5 w-3.5" aria-hidden="true"/>
                        </a>
                    </FooterColumn>

                    <FooterColumn title="Elsewhere">
                        {socialLinks.map(({name, href, Icon}) => (
                            <a
                                key={href}
                                href={href}
                                target="_blank"
                                rel="me noopener noreferrer"
                                className="inline-flex items-center gap-3 py-1.5 text-muted-foreground hover:text-foreground transition-colors w-fit"
                            >
                                <Icon className="h-4 w-4" size={16} aria-hidden="true"/>
                                {name}
                            </a>
                        ))}
                    </FooterColumn>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-border/50 py-8">
                    <p className="text-center text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Ayush Timalsina. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    )
}

function FooterColumn({title, children}: { title: string; children: React.ReactNode }) {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.25em] text-foreground">{title}</h2>
            <nav aria-label={title} className="flex flex-col gap-1 text-sm">
                {children}
            </nav>
        </div>
    )
}

function FooterLink({href, children}: { href: string; children: React.ReactNode }) {
    return (
        <Link href={href} className="py-1.5 text-muted-foreground hover:text-foreground transition-colors w-fit">
            {children}
        </Link>
    )
}
