export interface Project {
    id: string;
    ProjectId: number;
    title: string;
    description: string;
    tools: string[];
    learning: string;
    github: string;
    link: string;
}

export const projects: Project[] = [

    {
        id: "1",
        ProjectId: 1,
        title: "U-Connect",
        description: "A social network for students to share academic content through forums.",
        tools: ["Vite", "React", "TypeScript", "Tailwind"],
        learning: "Building scalable components and managing state in TypeScript.",
        github: "https://github.com/paul0pv/U-connect.git",
        link: "https://u-connect-eta.vercel.app/"
    },

    {
        id: "2",
        ProjectId: 2,
        title: "Chapter&Verse",
        description: "A fake online bookstore built to explore modern UI and design principles.",
        tools: ["Vite", "React", "TypeScript", "Tailwind"],
        learning: "Improving user experience with responsive design and clean UI.",
        github: "https://github.com/paul0pv/chapter-and-verse.git",
        link: "https://chapter-and-verse.vercel.app/"
    },
    {
        id: "3",
        ProjectId: 3,
        title: "PocketLink",
        description: "A URL shortener and QR code generator with a minimalistic design.",
        tools: ["Astro", "TypeScript", "Tailwind"],
        learning: "Static site generation and integration with QR code APIs.",
        github: "https://github.com/paul0pv/pocketlink.git",
        link: "https://pocketlink-nine.vercel.app/"
    }
]