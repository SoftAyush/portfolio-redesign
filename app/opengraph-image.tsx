import { ImageResponse } from "next/og"
import { siteConfig } from "@/lib/site"

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

/**
 * Generated at build time rather than shipped as a binary, so the card always
 * matches siteConfig. Next also serves this as twitter:image when no
 * twitter-image file is present.
 */
export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    background: "#09090B",
                    padding: "88px 96px",
                }}
            >
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div
                        style={{
                            fontSize: 26,
                            letterSpacing: 10,
                            textTransform: "uppercase",
                            color: "#8B8B94",
                            fontWeight: 700,
                        }}
                    >
                        Available for Projects
                    </div>
                    <div
                        style={{
                            display: "flex",
                            marginTop: 34,
                            fontSize: 132,
                            fontWeight: 800,
                            letterSpacing: -6,
                            lineHeight: 1,
                            textTransform: "uppercase",
                            color: "#FAFAFA",
                        }}
                    >
                        Ayush
                    </div>
                    <div
                        style={{
                            display: "flex",
                            fontSize: 132,
                            fontWeight: 800,
                            letterSpacing: -6,
                            lineHeight: 1.05,
                            textTransform: "uppercase",
                            color: "#5B5B63",
                        }}
                    >
                        Timalsina.
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderTop: "2px solid #26262B",
                        paddingTop: 34,
                    }}
                >
                    <div style={{ fontSize: 34, color: "#C6C6CC", fontWeight: 600 }}>
                        {siteConfig.tagline}
                    </div>
                    <div
                        style={{
                            fontSize: 24,
                            letterSpacing: 4,
                            textTransform: "uppercase",
                            color: "#8B8B94",
                            fontWeight: 700,
                        }}
                    >
                        Lalitpur, Nepal
                    </div>
                </div>
            </div>
        ),
        size,
    )
}
