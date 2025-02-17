import type {Project} from "@/types/project"

export const projects: Project[] = [
    {
        id: "1",
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
                caption: "Dashboard with daily activity summary",
            },
            {
                src: "/placeholder.svg?height=600&width=400&text=FitTrack+Workout",
                caption: "Workout tracking interface",
            },
            {
                src: "/placeholder.svg?height=600&width=400&text=FitTrack+Nutrition",
                caption: "Nutrition logging and analysis",
            },
        ],
    },
    {
        id: "2",
        title: "Banter",
        description: "A social messaging app that enables users to connect, chat, and share moments seamlessly with a secure and interactive experience.",
        type: "Android",
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
            {
                src: "/placeholder.svg?height=600&width=400&text=FitTrack+Workout",
                caption: "Workout tracking interface",
            },
            {
                src: "/placeholder.svg?height=600&width=400&text=FitTrack+Nutrition",
                caption: "Nutrition logging and analysis",
            },
        ],
    },
    {
        id: "3",
        title: "Match Making Dating Website",
        description: "A web-based dating platform designed to help users find meaningful connections with features like love stories, profile browsing, and relationship tips.",
        type: "Web",
        image: "/assets/portfolio/project-web-1.avif",
        technologies: ["Laravel", "Bootstrap", "Php", "MySql"],
        features: ["Read heartwarming love stories", "Browse and connect with potential matches", "Update and customize your profile", "Receive expert relationship tips"],

        github: "https://github.com/SoftAyush/MatchMaking",
        uiImages: [
            {
                src: "/assets/portfolio/project-web-1.avif",
                caption: "Dashboard with daily activity summary",
            },
            {
                src: "/placeholder.svg?height=600&width=400&text=FitTrack+Workout",
                caption: "Workout tracking interface",
            },
            {
                src: "/placeholder.svg?height=600&width=400&text=FitTrack+Nutrition",
                caption: "Nutrition logging and analysis",
            },
        ],
    },
    {
        id: "4",
        title: "Online Food Ordering System",
        description: "A web-based food ordering system that enables restaurants to manage their menus and customers to browse, order, and enjoy their favorite meals with ease.",
        type: "Web",
        image: "/assets/portfolio/project-web-4.avif",
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
                src: "/assets/portfolio/project-web-4.avif",
                caption: "Dashboard with daily activity summary",
            },
            {
                src: "/placeholder.svg?height=600&width=400&text=FitTrack+Workout",
                caption: "Workout tracking interface",
            },
            {
                src: "/placeholder.svg?height=600&width=400&text=FitTrack+Nutrition",
                caption: "Nutrition logging and analysis",
            },
        ],
    },
];

