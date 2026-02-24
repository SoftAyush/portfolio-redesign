"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, Home, User, Briefcase, Mail, BookOpen, ChevronRight } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion, AnimatePresence } from "framer-motion"

const routes = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: User },
    { name: "Portfolio", path: "/portfolio", icon: Briefcase },
    { name: "Blog", path: "/blog", icon: BookOpen },
    { name: "Contact", path: "/contact", icon: Mail },
]

export function Header() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = React.useState(false)
    const [hoveredPath, setHoveredPath] = React.useState<string | null>(null)

    return (
        <header className="fixed top-6 left-0 right-0 z-50 mx-auto w-[95%] md:w-full max-w-5xl">
            <div className="glass rounded-full px-6 py-2 border border-white/10 shadow-2xl">
                <div className="flex h-12 md:h-14 items-center justify-between">
                    <div className="flex items-center">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className="mr-2 px-2 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                                >
                                    <Menu className="h-6 w-6" />
                                    <span className="sr-only">Toggle Menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-[300px] sm:w-[400px] pr-0 border-r-border/50">
                                <SheetHeader>
                                    <SheetTitle className="text-left text-2xl font-bold uppercase tracking-tighter">Navigation.</SheetTitle>
                                </SheetHeader>
                                <ScrollArea className="my-8 h-[calc(100vh-8rem)] pb-10 pl-6">
                                    <div className="flex flex-col space-y-6">
                                        {routes.map((route, index) => (
                                            <motion.div
                                                key={route.path}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                            >
                                                <MobileLink
                                                    href={route.path}
                                                    onOpenChange={setIsOpen}
                                                    className="flex items-center space-x-4 py-2 text-foreground/60 transition-colors hover:text-foreground group"
                                                >
                                                    <div className="h-10 w-10 rounded-xl bg-muted/50 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                                        <route.icon className="h-5 w-5" />
                                                    </div>
                                                    <span className="font-bold text-xl uppercase tracking-tight">{route.name}</span>
                                                    <ChevronRight className="ml-auto mr-6 h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </MobileLink>
                                            </motion.div>
                                        ))}
                                    </div>
                                </ScrollArea>
                            </SheetContent>
                        </Sheet>
                        <Link href="/" className="flex items-center space-x-2 transition-transform hover:scale-110 active:scale-95">
                            <span className="font-black text-2xl tracking-[0.2em] uppercase">AT.</span>
                        </Link>
                    </div>

                    <nav className="hidden md:flex items-center gap-1">
                        {routes.map((route) => (
                            <Link
                                key={route.path}
                                href={route.path}
                                onMouseEnter={() => setHoveredPath(route.path)}
                                onMouseLeave={() => setHoveredPath(null)}
                                className={cn(
                                    "relative px-5 py-2 text-sm font-bold uppercase tracking-widest transition-colors duration-300 rounded-full",
                                    pathname === route.path ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                <AnimatePresence>
                                    {hoveredPath === route.path && (
                                        <motion.div
                                            layoutId="nav-hover"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            className="absolute inset-0 bg-muted rounded-full -z-10"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </AnimatePresence>

                                {pathname === route.path && (
                                    <motion.div
                                        layoutId="nav-active"
                                        className="absolute inset-0 bg-primary rounded-full -z-20"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}

                                <span className="relative z-10">{route.name}</span>
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-2">
                        <ModeToggle />
                        <Button size="sm" className="hidden lg:flex rounded-full px-5 font-bold uppercase tracking-widest h-10" asChild>
                            <Link href="/contact">Hire Me</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}

interface MobileLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    onOpenChange?: (open: boolean) => void
    children: React.ReactNode
    className?: string
}

function MobileLink({ href, onOpenChange, className, children, ...props }: MobileLinkProps) {
    const pathname = usePathname()
    return (
        <Link
            href={`${href}`}
            onClick={() => {
                onOpenChange?.(false)
            }}
            className={cn(
                "text-foreground/70 transition-colors hover:text-foreground",
                pathname === href && "text-foreground font-bold",
                className,
            )}
            {...props}
        >
            {children}
        </Link>
    )
}
