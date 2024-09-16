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
        title: "ShortPath",
        description: "A sleek solution designed to manage and shorten your super long links.",
        link: "https://www.shortpath.site",
        tech: ["NextJs", "TailwindCSS", "API", "PostgreSQL"],
        url: "/images/shortpath.jpeg",
    },
    {
        title: "Terminal Portfolio",
        description: "Personal portfolio with a command-line interface.",
        link: "https://terminal-portofolio.vercel.app/",
        tech: ["React + Vite", "TailwindCSS"],
        url: "/images/terminal-portfolio.jpeg",
    },
    {
        title: "CineTrack",
        description: "A website to view movie or tv show details and watch trailers.",
        link: "https://cinetrack-coral.vercel.app",
        tech: ["NextJs", "TailwindCSS", "API"],
        url: "/images/cinetrack.jpeg",
    },
    {
        title: "TailGuide",
        description: "Interactive tools to generate TailwindCSS code.",
        link: "https://tailguide.vercel.app/",
        tech: ["NextJs", "TailwindCSS"],
        url: "/images/tailguide.jpeg",
    },
    {
        title: "Web Academy",
        description: "A website that aggregates YouTube videos on web programming.",
        link: "https://web-academy-iota.vercel.app/",
        tech: ["NextJs", "TailwindCSS", "API"],
        url: "/images/web-academy.jpeg",
    },
    {
        title: "Expense Tracker",
        description: "App to enable users to effortlessly record and manage their expenses.",
        link: "https://github.com/rtrivaldo/expense-tracker",
        tech: ["Laravel", "TailwindCSS", "SQLite"],
        url: "/images/expense-tracker.jpeg",
    },
];
