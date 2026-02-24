export interface Skill {
    name: string;
}

export interface SkillCategory {
    title: string;
    skills: string[];
}

export const skillCategories: SkillCategory[] = [
    {
        title: "Mobile & Cross-Platform",
        skills: [
            "Flutter",
            "Dart",
            "Kotlin Multiplatform",
            "Java Native",
            "Kotlin",
            "Firebase",
            "App Store Optimization"
        ]
    },
    {
        title: "Web & Backend",
        skills: [
            "Vanilla JavaScript",
            "PHP",
            "Laravel",
            "MSSQL/MYSQL",
            "HTML",
            "CSS"
        ]
    },
    {
        title: "Tools & Process",
        skills: [
            "Agile Development",
            "CI/CD",
            "Git & GitHub",
            "RESTful APIs",
            "System Architecture"
        ]
    }
];
