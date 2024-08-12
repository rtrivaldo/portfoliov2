import { HoverEffect } from "./card-hover-effect";

export default function ProjectsSection() {
    return (
        <div className="mt-20 md:mt-40 max-w-screen-xl px-6 md:px-10 mx-auto" id="projects">
            <h1 className="text-3xl md:text-4xl text-center font-semibold tracking-wide underline underline-offset-8 decoration-cyan-400" data-aos="fade">
                Projects
            </h1>

            <div className="mt-10 flex flex-col lg:flex-row gap-10 lg:gap-20" data-aos="fade-up">
                <HoverEffect items={projects} />
            </div>
        </div>
    );
}

export const projects = [
    {
        title: "CineTrack",
        description: "A website to view movie or tv show details and watch trailers.",
        link: "https://cinetrack-coral.vercel.app",
        tech: ["NextJs", "TailwindCSS", "API"],
        url: "/images/cinetrack.jpeg",
    },
    {
        title: "Expense Tracker",
        description: "An expense tracking application built using the Laravel framework enables users to effortlessly record and manage their expenses.",
        link: "https://github.com/rtrivaldo/expense-tracker",
        tech: ["Laravel", "TailwindCSS", "SQLite"],
        url: "/images/expense-tracker.jpeg",
    },
    {
        title: "Tic Tac Toe",
        description: "A very simple Tic Tac Toe game built using React that allows 2 players to compete on a 3x3 game board.",
        link: "https://tic-tac-toe-alpha-two-29.vercel.app",
        tech: ["React", "TailwindCSS"],
        url: "/images/tic-tac-toe.jpeg",
    },
    {
        title: "Omah",
        description: "Challenge from Codedesign.dev that required me to build a landing page based on a Figma design.",
        link: "https://rtrivaldo.github.io/Omah",
        tech: ["JavaScript", "TailwindCSS"],
        url: "/images/omah.jpeg",
    },
    {
        title: "Landscapio",
        description: "Challenge from Codedesign.dev where I was given a task to code a landing page based on a Figma design.",
        link: "https://rtrivaldo.github.io/landscapio",
        tech: ["HTML", "CSS", "JavaScript"],
        url: "/images/landscapio.jpeg",
    },
];
