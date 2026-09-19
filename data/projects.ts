import type {Project} from "@/types/project"

export const projects: Project[] = [

    {
        id: "8",
        slug: "zypop",
        title: "Zypop",
        description: "Zypop is a privacy-first DNS ad and tracker blocker for Android, built with Kotlin Multiplatform and Compose Multiplatform. It runs a local VPN that captures DNS queries, checks each domain against filter rules held on the device, and answers blocked names itself, so nothing about what you browse ever leaves the phone. It ships with 38 curated filter lists, sees through CNAME cloaking, and closes the common encrypted-DNS bypass.",
        type: "Native Android",
        image: "/assets/portfolio/Zypop/feature_graphic.avif",
        technologies: ["Kotlin", "Kotlin Multiplatform", "Compose Multiplatform", "Android VpnService", "SQLDelight", "Coroutines", "Kotlinx Serialization"],
        features: [
            "Blocks ads, trackers and malware hosts at the DNS layer with a local VPN, no external server involved",
            "38 curated filter lists (StevenBlack, AdGuard, oisd, HaGeZi and more) plus custom lists by URL, 2.4M+ rules",
            "Detects CNAME cloaking and blocks well-known DoH/DoT resolvers to stop encrypted-DNS bypass",
            "Your own allow and block rules always take precedence over downloaded lists",
            "Counters only by default; an optional on-device activity log grouped by root domain",
            "Per-app exclusions, pause timer, Quick Settings tile and home-screen widget",
            "Automatic filter list updates over HTTPS on a schedule you choose, validated before they replace anything",
            "JSON backup and restore, diagnostics report, and Private DNS conflict detection",
            "Localised in English, Nepali and Hindi with per-app language support"
        ],
        github: null,
        uiImages: [
            {
                src: "/assets/portfolio/Zypop/Onboarding1.avif",
                caption: "Ads and trackers, refused by name: every domain your apps look up is checked against filter lists held on the device.",
            },
            {
                src: "/assets/portfolio/Zypop/Onboarding2.avif",
                caption: "An honest explanation of why Android will ask for VPN consent, and why nothing is routed to a server.",
            },
            {
                src: "/assets/portfolio/Zypop/Onboarding3.avif",
                caption: "Upfront about the limits: same-domain ads and encrypted-DNS bypass are explained before you turn it on.",
            },
            {
                src: "/assets/portfolio/Zypop/Onboarding4.avif",
                caption: "Ready when you are: turning protection on downloads the first filter list and starts filtering immediately.",
            },
            {
                src: "/assets/portfolio/Zypop/DashboardOff.avif",
                caption: "The dashboard with protection off, showing query and block counters, block rate, and the loaded filter lists.",
            },
            {
                src: "/assets/portfolio/Zypop/DashboardActive.avif",
                caption: "Protection active: DNS requests are filtered on-device, with a pause option that keeps the tunnel up.",
            },
            {
                src: "/assets/portfolio/Zypop/Activity.avif",
                caption: "The optional activity log groups lookups by root domain, filterable to blocked or allowed, with a per-domain block switch.",
            },
            {
                src: "/assets/portfolio/Zypop/Statistics.avif",
                caption: "Aggregate counters only, stored on the device, with a clear note on exactly what is never recorded.",
            },
            {
                src: "/assets/portfolio/Zypop/Settings.avif",
                caption: "Filter lists, excluded apps, encrypted-DNS bypass blocking, blocked-query answer mode, and update scheduling.",
            },
        ],
        liveDemo: 'https://appdistribution.firebase.google.com/i/6ba2c05b48f5ef5f',
    },
    {
        id: "7",
        slug: "aurex",
        title: "Aurex",
        description: "Aurex is an Android-first personal finance management app built with Kotlin Multiplatform and Compose. It helps users track their money, manage accounts, monitor income and expenses, and stay organized with debts, loans, borrowing, and upcoming payments. The app combines shared business logic with a polished Compose-based interface and local-first data management.",
        type: "Native Android",
        image: "/assets/portfolio/Aurex/feature_graphic.avif",
        technologies: ["Kotlin", "Kotlin Multiplatform", "Jetpack Compose", "MVVM", "SQLDelight", "Firebase", "Coroutines"],
        features: [
            "Personal finance management with account balance tracking and transaction history",
            "Income and expense tracking with category-based organization",
            "Debt and loan management with borrowing and lending flows",
            "Track upcoming payments, due dates, and financial reminders",
            "Local-first data storage powered by SQLDelight with optional Firebase cloud backup",
            "Clean and responsive user interface built with Jetpack Compose and Kotlin Multiplatform",
            "Customizable theme behavior and application preferences",
            "Secure authentication and Google Sign-In integration",
            "CSV export for personal financial data and records"
        ],
        github: null,
        uiImages: [
            {
                src: "/assets/portfolio/Aurex/Onboarding1.avif",
                caption: "Master your money: an onboarding introduction to tracking every penny, managing debts, and planning ahead with confidence.",
            },
            {
                src: "/assets/portfolio/Aurex/Onboarding2.avif",
                caption: "Simplify your debts by keeping what you owe and what is owed to you together in one secure place.",
            },
            {
                src: "/assets/portfolio/Aurex/Onboarding3.avif",
                caption: "Never miss a payment with smart reminders and progress tracking for every active loan and EMI.",
            },
            {
                src: "/assets/portfolio/Aurex/ProfileSetup.avif",
                caption: "A short guided setup that captures your name and base currency so every figure in Aurex is shown the way you expect.",
            },
            {
                src: "/assets/portfolio/Aurex/AccountSetup.avif",
                caption: "Create your first account by choosing a name, type, and opening balance, with everything stored on your device.",
            },
            {
                src: "/assets/portfolio/Aurex/Dashboard.avif",
                caption: "A clear overview of your financial health with total balance, assets, liabilities, and quick actions for income, expenses, and insights.",
            },
            {
                src: "/assets/portfolio/Aurex/Activity.avif",
                caption: "Browse transactions month by month with filters for income, expenses, and transfers to see exactly where your money goes.",
            },
            {
                src: "/assets/portfolio/Aurex/Debt.avif",
                caption: "Keep track of loans, bills, and anything you owe, and record payments as you pay each one down.",
            },
            {
                src: "/assets/portfolio/Aurex/EMI.avif",
                caption: "Track instalment plans with what is due this month, what has been paid so far, and what is still payable.",
            },
            {
                src: "/assets/portfolio/Aurex/BorrowLend.avif",
                caption: "Manage money lent and borrowed with a clear net position between what is owed to you and what you owe.",
            },
            {
                src: "/assets/portfolio/Aurex/Accounts.avif",
                caption: "See every account you hold, how much sits in each, and add new bank, digital, or cash accounts in seconds.",
            },
            {
                src: "/assets/portfolio/Aurex/Settings.avif",
                caption: "Personalize your experience with profile, theme, currency, categories, reminders, and data preferences.",
            },
        ],
        liveDemo: 'https://appdistribution.firebase.google.com/i/ed5dc53351c2ca9f',
    },
    {
        id: "6",
        slug: "aapanam",
        title: "Aapanam",
        description: "Aapanam is a modern, cross-platform inventory and sales management system built with Kotlin Multiplatform. It aims to provide a seamless experience for managing products, tracking sales, and handling credit accounts across various platforms.",
        type: "Native Android",
        image: "/assets/portfolio/Aapanam/feature_graphic.avif",
        technologies: ["Kotlin", "MVVM", 'SQLDelight', 'FireBase', 'Compose Multiplatform'],
        features: [
            "Inventory management with product add/edit/delete, stock tracking, and category organization",
            "Sales Tracking: Manage paid and credit sales",
            "Link sales to customer IDs for comprehensive tracking",
            "Intuitive and responsive user interface powered by Compose Multiplatform.",
            "View various reports related to sales, stock, and credit"
        ],
        github: null,
        uiImages: [
            {
                src: "/assets/portfolio/Aapanam/login.avif",
                caption: "A smooth and secure sign-in experience, simple, elegant, and user-focused.",
            },
            {
                src: "/assets/portfolio/Aapanam/Dashboard.avif",
                caption: "Smart, Minimal, Powerful, Business analytics made simple.",
            },
            {
                src: "/assets/portfolio/Aapanam/Inventory.avif",
                caption: "Stay organized with a clear view of all your products add, edit, and manage your stock effortlessly.",
            },
            {
                src: "/assets/portfolio/Aapanam/Sale.avif",
                caption: "Track every sale with ease monitor revenue, profit, and transaction history in one place.",
            },
            {
                src: "/assets/portfolio/Aapanam/setting.avif",
                caption: "Customize your experience adjust appearance, manage data, and fine-tune app preferences seamlessly",
            },
        ],
        liveDemo: "https://appdistribution.firebase.dev/i/26eb290618831dde",
    },
    {
        id: "5",
        slug: "flutter-multi-selector",
        title: "Flutter Multi Selector Package",
        description: "It is a powerful Flutter package that provides an intuitive multi-selection\n" +
            "dialog with advanced customization options.",
        type: "Flutter",
        image: "/assets/portfolio/Package/feature_graphic.avif",
        technologies: ["Flutter", "Dart", 'Package'],
        features: [
            "Custom multi-select dialog field widget",
            "Supports form validation with error messages",
            "Searchable list of selectable items",
            "Select All / Deselect All functionality",
            "Initial value support for pre-selected items"
        ],
        github: "https://github.com/SoftAyush/flutter_multi_selector",
        uiImages: [
            {
                src: "/assets/portfolio/Package/flutterMultiSelector.avif",
                caption: "flutter_multi_selector — a small package making a big impact. Proud to see my work helping Flutter devs worldwide.",
            },
            // {
            //     src: "/placeholder.svg?height=600&width=400&text=FitTrack+Workout",
            //     caption: "Workout tracking interface",
            // },
            // {
            //     src: "/placeholder.svg?height=600&width=400&text=FitTrack+Nutrition",
            //     caption: "Nutrition logging and analysis",
            // },
        ],
        liveDemo: 'https://pub.dev/packages/flutter_multi_selector',
    },
    {
        id: "4",
        slug: "jinmo",
        title: "Jinmo",
        description:
            "Jinmo is a modern personal finance and expense management application designed to help users take control of their finances. It provides a simple and intuitive experience for managing wallets, tracking income and expenses, monitoring transactions, and customizing financial preferences.",
        type: "Flutter",
        image: "/assets/portfolio/Jinmo/feature_graphic.avif",
        technologies: [
            "Flutter",
            "Dart",
            "Isar",
            "Material Design",
            "Offline-First Architecture",
            "Local Storage"
        ],
        features: [
            "Personal finance management with an easy-to-use dashboard",
            "Wallet management with support for initial balances and different account types",
            "Track income and expenses with a clear financial overview",
            "Monitor recent transactions and financial activity",
            "Support for multiple currencies including Nepalese Rupee (NPR)",
            "Customizable expense and income categories",
            "Draft transaction management",
            "Light, dark, and system theme support",
            "Offline-first architecture with local data storage",
            "Clean and responsive Material Design interface"
        ],
        github: null,
        uiImages: [
            {
                src: "/assets/portfolio/Jinmo/Welcome.avif",
                caption:
                    "A welcoming onboarding experience designed to introduce users to Jinmo with a clean and engaging interface.",
            },
            {
                src: "/assets/portfolio/Jinmo/GetStarted.avif",
                caption:
                    "A simple onboarding step that helps users get started and take control of their personal finances.",
            },
            {
                src: "/assets/portfolio/Jinmo/ProfileSetup.avif",
                caption:
                    "Personalize the experience by setting up your name and preferred currency with a simple guided setup.",
            },
            {
                src: "/assets/portfolio/Jinmo/WalletSetup.avif",
                caption:
                    "Create your first wallet by defining the account name, initial balance, and account type.",
            },
            {
                src: "/assets/portfolio/Jinmo/Dashboard.avif",
                caption:
                    "A clean financial dashboard providing a quick overview of wallet balance, income, expenses, accounts, and recent activity.",
            },
            {
                src: "/assets/portfolio/Jinmo/Settings.avif",
                caption:
                    "A centralized settings experience for managing profile preferences, themes, currency, categories, and transaction settings.",
            },
        ],
        liveDemo:
            "https://play.google.com/store/apps/details?id=com.jinmo.app&hl=en",
    },
    {
        id: "3",
        slug: "banter",
        title: "Banter",
        description: "A social messaging app that enables users to connect, chat, and share moments seamlessly with a secure and interactive experience.",
        type: "Native Android",
        image: "/assets/portfolio/Banter/feature_graphic.avif",
        technologies: ["Java Native", "xml", 'FireBase'],
        features: [
            "Real-time messaging with friends",
            "Upload status updates with your contacts",
            "Secure authentication and cloud data storage",
            "Customizable user profiles and status updates",
            "Push notifications for instant message alerts",
            "User-friendly interface with a smooth chat experience"
        ],
        github: "https://github.com/SoftAyush/Banter",
        uiImages: [
            {
                src: "/assets/portfolio/Banter/login.avif",
                caption: "Secure and modern login experience for Banter",
            },
            {
                src: "/assets/portfolio/Banter/Dashbaord.avif",
                caption: "Real-time chat dashboard with conversations and messages",
            },
            {
                src: "/assets/portfolio/Banter/status.avif",
                caption: "Share and explore status updates with friends",
            },
            {
                src: "/assets/portfolio/Banter/profile.avif",
                caption: "Personal profile, account settings, and app preferences",
            },
        ],
        liveDemo: null,
    },
    {
        id: "2",
        slug: "match-making-dating-website",
        title: "Match Making Dating Website",
        description: "A web-based dating platform designed to help users find meaningful connections with features like love stories, profile browsing, and relationship tips.",
        type: "Web",
        image: "/assets/portfolio/datingSite/project-web-1.avif",
        technologies: ["Laravel", "Bootstrap", "Php", "MySql"],
        features: ["Read heartwarming love stories", "Browse and connect with potential matches", "Update and customize your profile", "Receive expert relationship tips"],

        github: "https://github.com/SoftAyush/MatchMaking",
        uiImages: [
            {
                src: "/assets/portfolio/datingSite/project-web-1.avif",
                caption: "Dashboard of Match Making Dating Website",
            },
            {
                src: "/assets/portfolio/datingSite/Picture1.avif",
                caption: "Profile Page Of Match Making Dating Website",
            },
            // {
            //     src: "/placeholder.svg?height=600&width=400&text=FitTrack+Nutrition",
            //     caption: "Nutrition logging and analysis",
            // },
        ],
        liveDemo: null,
    },
    {
        id: "1",
        slug: "online-food-ordering-system",
        title: "Online Food Ordering System",
        description: "A web-based food ordering system that enables restaurants to manage their menus and customers to browse, order, and enjoy their favorite meals with ease.",
        type: "Web",
        image: "/assets/portfolio/foodWeb/project-web-4.avif",
        technologies: ["Php", "MySql", "Bootstrap",],
        features: [
            "Add and manage your restaurant profile",
            "Upload and update your restaurant's menu",
            "Allow users to log in and place orders",
            "Restaurant owners can create, update, and manage listings"
        ],
        github: "https://github.com/SoftAyush/Foodweb",
        uiImages: [
            {
                src: "/assets/portfolio/foodWeb/project-web-4.avif",
                caption: "Dashboard with daily activity summary",
            },
            // {
            //     src: "/placeholder.svg?height=600&width=400&text=FitTrack+Workout",
            //     caption: "Workout tracking interface",
            // },
            // {
            //     src: "/placeholder.svg?height=600&width=400&text=FitTrack+Nutrition",
            //     caption: "Nutrition logging and analysis",
            // },
        ],
        liveDemo: null,
    },
];

