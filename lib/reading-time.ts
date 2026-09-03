/** Average adult reading speed for technical prose. */
const WORDS_PER_MINUTE = 225

export function countWords(html: string): number {
    return html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length
}

/** Whole minutes, floored at 1 so a short post never reads "0 min". */
export function readingMinutes(html: string): number {
    return Math.max(1, Math.round(countWords(html) / WORDS_PER_MINUTE))
}

export function readingTimeLabel(html: string): string {
    return `${readingMinutes(html)} min read`
}

/** ISO 8601 duration for schema.org timeRequired, e.g. "PT2M". */
export function readingTimeDuration(html: string): string {
    return `PT${readingMinutes(html)}M`
}
