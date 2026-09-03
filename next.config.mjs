const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Serve AVIF where supported, WebP otherwise.
    formats: ["image/avif", "image/webp"],
    // Required now that the optimizer is on: next/image rejects any remote
    // host that isn't listed here. Two blog cover images are hosted on Unsplash.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
}

export default nextConfig
