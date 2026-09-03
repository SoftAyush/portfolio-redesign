interface JsonLdProps {
    schema: object
}

/**
 * Emits structured data as application/ld+json.
 * `<` is escaped so post content can never break out of the script tag.
 */
export function JsonLd({ schema }: JsonLdProps) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
        />
    )
}
