/**
 * Powers both the FAQ section and its FAQPage structured data.
 *
 * Answers are written answer-first — the first sentence stands alone, because
 * that is the fragment an answer engine lifts into a snippet or reads aloud.
 * Keep each answer under roughly 60 words for the same reason.
 */
export interface FaqEntry {
    question: string
    answer: string
}

export const faqs: FaqEntry[] = [
    {
        question: "What services do you offer?",
        answer:
            "Four: mobile app development, UI/UX architecture, technical consultation, and clean code audits. That covers building cross-platform apps with Flutter and native technologies, designing the user flows and interfaces around them, advising on architecture and performance, and refactoring legacy codebases into modular, testable systems.",
    },
    {
        question: "Which technologies do you build with?",
        answer:
            "Flutter and Dart for cross-platform work, Kotlin and Jetpack Compose for native Android, and Kotlin Multiplatform where business logic needs to be shared across platforms. Projects typically use modular architecture with local-first data storage, and I build the UI layer to match.",
    },
    {
        question: "Should I build with Flutter or Kotlin Multiplatform?",
        answer:
            "Choose Flutter if you want to ship a UI-heavy app quickly with one team and one codebase for the interface. Choose Kotlin Multiplatform if you need uncompromised native performance, want native UI on each platform, or are adding shared logic to an existing native app.",
    },
    {
        question: "Do you work on existing apps, or only new builds?",
        answer:
            "Both. Clean code audits are a dedicated service — refactoring legacy codebases into modular, testable, maintainable systems. Kotlin Multiplatform in particular supports gradual migration, so an existing app can start by sharing a single data model or API client rather than being rewritten.",
    },
    {
        question: "Can you help if I only have an idea and not a full specification?",
        answer:
            "Yes. Projects start from either a full brief or a rough idea. The early work is turning complex requirements into a concrete plan — deciding the architecture, the platform approach and the scope — so the build starts on the right footing rather than being corrected later.",
    },
    {
        question: "Do you publish open-source packages?",
        answer:
            "Yes, on pub.dev. flutter_multi_selector is a published Flutter package providing a customizable multi-selection dialog with built-in search, select-all, chip and checkbox selection styles, per-item theming and form validation. It is optimized for Flutter 3.27 and above and adapts automatically to light and dark themes.",
    },
    {
        question: "How do I start a project?",
        answer:
            "Send the details through the contact form with your project goals and the service you need, and you will get a reply within 24 hours. Direct email and phone contact are listed on the contact page if you would rather not use the form.",
    },
]
