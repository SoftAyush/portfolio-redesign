import type {Project} from "@/types/project"

export const projects: Project[] = [
    {
        id: "6",
        title: "Aapanam",
        description: "Aapanam is a modern, cross-platform inventory and sales management system built with Kotlin Multiplatform. It aims to provide a seamless experience for managing products, tracking sales, and handling credit accounts across various platforms.",
        type: "Native Android",
        image: "/assets/portfolio/Aapanam/logo.avif",
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
        title: "Flutter Multi Selector Package",
        description: "It is a powerful Flutter package that provides an intuitive multi-selection\n" +
            "dialog with advanced customization options.",
        type: "Flutter",
        image: "/assets/portfolio/Package/flutterMultiSelector.avif",
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
        title: "Kosh-Guard",
        description: "A personal finance management app that helps users track income, expenses, and savings, providing insights for better financial control and planning.",
        type: "Flutter",
        image: "/assets/portfolio/app-1.avif",
        technologies: ["Flutter", "Dart", "Isar", "Provider", 'FireBase'],
        features: [
            "Track and manage income and expenses",
            "Categorize transactions for better insights",
            "Generate detailed financial reports",
            "User-friendly dashboard for easy navigation"
        ],
        github: "https://github.com/SoftAyush/Kosh-Guard",
        uiImages: [
            {
                src: "/assets/portfolio/app-1.avif",
                caption: "Login Page of KoshGuard Mobile Application.",
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
    {
        id: "3",
        title: "Banter",
        description: "A social messaging app that enables users to connect, chat, and share moments seamlessly with a secure and interactive experience.",
        type: "Native Android",
        image: "/assets/portfolio/App.avif",
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
                src: "/assets/portfolio/App.avif",
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
    {
        id: "2",
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

