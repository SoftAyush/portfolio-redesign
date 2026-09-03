"use client"

import * as React from "react"
import Image, { type ImageProps } from "next/image"
import { ImageOff } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

interface ImageWithFallbackProps extends ImageProps {
    /** Copy shown beside the fallback icon when the source cannot be loaded. */
    fallbackLabel?: string
}

/**
 * next/image wrapper that keeps the skeleton in sync with the request.
 * A plain onLoad handler never fires for a broken source, which leaves the
 * skeleton shimmering forever, so failures fall back to a visible placeholder.
 * Expects a `relative` parent, matching the `fill` usage across the site.
 */
export function ImageWithFallback({ fallbackLabel, onLoad, onError, alt, ...props }: ImageWithFallbackProps) {
    const [status, setStatus] = React.useState<"loading" | "loaded" | "error">("loading")

    if (status === "error") {
        return (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-muted text-muted-foreground">
                <ImageOff className="h-6 w-6" aria-hidden="true" />
                <span className="px-6 text-center text-[10px] font-bold uppercase tracking-widest">
                    {fallbackLabel ?? "Image unavailable"}
                </span>
            </div>
        )
    }

    return (
        <>
            {status === "loading" && <Skeleton className="absolute inset-0" />}
            <Image
                {...props}
                alt={alt}
                onLoad={(event) => {
                    setStatus("loaded")
                    onLoad?.(event)
                }}
                onError={(event) => {
                    setStatus("error")
                    onError?.(event)
                }}
            />
        </>
    )
}
