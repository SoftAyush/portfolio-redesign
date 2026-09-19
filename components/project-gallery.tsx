"use client"

import { useState } from "react"
import { ImageWithFallback } from "@/components/ui/image-with-fallback"
import { UIModal } from "@/components/ui-modal"
import { Maximize2 } from "lucide-react"

interface ProjectGalleryProps {
    title: string
    images: { src: string; caption: string }[]
}

/**
 * Screenshot grid for the project detail page. Any tile opens the existing
 * swiper modal so the full-size carousel is still one click away.
 */
export function ProjectGallery({ title, images }: ProjectGalleryProps) {
    // null = closed; a number is the slide to open on. The dialog unmounts its
    // content when closed, so Swiper re-reads initialSlide on every open.
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    if (images.length === 0) return null

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {images.map((image, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() => setOpenIndex(index)}
                        className="group text-left space-y-3 rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                        aria-label={`Open ${title} screenshot ${index + 1} in full size`}
                    >
                        <div className="relative aspect-[9/16] md:aspect-[3/4] overflow-hidden rounded-3xl bg-muted/30 border border-border/50 group-hover:border-primary/50 transition-colors">
                            <ImageWithFallback
                                src={image.src || "/placeholder.svg"}
                                alt={`${title} UI ${index + 1}`}
                                fill
                                sizes="(min-width: 768px) 33vw, 50vw"
                                className="object-contain transition-transform duration-500 group-hover:scale-105"
                                fallbackLabel={`Screen ${index + 1} unavailable`}
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Maximize2 className="h-6 w-6 text-primary" />
                            </div>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 px-1">{image.caption}</p>
                    </button>
                ))}
            </div>

            <UIModal
                isOpen={openIndex !== null}
                onClose={() => setOpenIndex(null)}
                title={title}
                images={images}
                initialSlide={openIndex ?? 0}
            />
        </>
    )
}
