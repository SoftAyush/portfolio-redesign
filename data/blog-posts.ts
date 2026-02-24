export const blogPosts = [
  {
    title: "The Shift to Kotlin Multiplatform (KMP): Why It's Reshaping Mobile Strategy",
    slug: "shift-to-kotlin-multiplatform-kmp",
    date: "2025-06-24",
    category: "mobile-architecture",
    excerpt: "Explore how Kotlin Multiplatform is moving beyond experimental phases to become a core strategy for enterprises seeking code sharing without compromising native performance.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    content: `
      <h2>Beyond Cross-Platform: The KMP Advantage</h2>
      <p>For years, the mobile world has been divided between native development and cross-platform frameworks like Flutter and React Native. While these frameworks have their place, they often require trade-offs in performance or require a "lowest common denominator" approach to UI. Kotlin Multiplatform (KMP) changes the conversation.</p>
      
      <h3>1. Shared Logic, Native Identity</h3>
      <p>Unlike Flutter, which draws every pixel on its own, KMP focuses solely on sharing the business logic—networking, data persistence, and computational heavy lifting—while leaving the UI to be built using native toolkits like SwiftUI for iOS and Jetpack Compose for Android.</p>
      
      <h3>2. Reduced Risk and Technical Debt</h3>
      <p>By using Kotlin—a language already beloved by Android developers—teams can gradually migrate existing logic. You don't have to rewrite your entire app; you can start by sharing a single data model or API client.</p>
      
      <h3>3. Performance Without Compromise</h3>
      <p>Since the shared code compiles to native binaries for each platform, there's no bridge or virtual machine overhead. Your iOS app is still a native iOS app at its core.</p>
      
      <p>As we move into 2024, KMP is no longer just "experimental." It's a production-ready solution that empowers small teams to build world-class apps at twice the speed without sacrificing quality.</p>
    `,
  },
  {
    title: "Flutter vs. Kotlin Multiplatform: Choosing the Right Weapon for 2024",
    slug: "flutter-vs-kotlin-multiplatform",
    date: "2025-03-05",
    category: "cross-platform",
    excerpt: "A deep dive into the two giants of modern mobile development. Should you share UI or share logic? Let's break down the strategy.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop",
    content: `
      <h2>The Great Divide: UI vs. Logic</h2>
      <p>The debate between Flutter and Kotlin Multiplatform (KMP) isn't just about programming languages; it's about architectural philosophy. One asks you to share your entire UI, while the other asks you to share only your business logic.</p>
      
      <h3>1. Flutter: The Speed of UI</h3>
      <p>Flutter's biggest advantage remains its unmatched development speed for UI-rich applications. With its own rendering engine (Canvas/Skia/Impeller), what you see on iOS is exactly what you get on Android. It's the perfect choice for teams that need high-fidelity brand consistency across platforms without maintaining multiple UI codebases.</p>
      
      <h3>2. KMP: The Native purist's Choice</h3>
      <p>Kotlin Multiplatform takes a different route. It doesn't touch the UI. Instead, it lets you share your core business logic—data layers, API clients, and computational models—while giving you 100% control over the native UI layer. This means your iOS app uses SwiftUI and your Android app uses Jetpack Compose.</p>
      
      <h3>3. Performance and Integration</h3>
      <p>While Flutter is fast, KMP is native. Because KMP compiles to native binaries for each platform, there's no runtime overhead. Furthermore, KMP integrates seamlessly into existing native codebases, making it the preferred choice for enterprise apps that are migrating gradually.</p>
      
      <h3>Conclusion</h3>
      <p>Choose <strong>Flutter</strong> if you want to ship a beautiful, UI-heavy app quickly with a single team. Choose <strong>KMP</strong> if you demand uncompromised native performance, want to leverage native UI capabilities, or need to share logic in a large, existing native ecosystem.</p>
    `,
  },
]

