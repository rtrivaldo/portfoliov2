"use client";
import { useEffect, useState } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import HeroSection from "@/components/ui/hero-section";
import Loading from "@/components/ui/loading";
import AboutSection from "@/components/ui/about-section";
import ProjectsSection from "@/components/ui/projects-section";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        Aos.init({
            offset: 50,
            once: true,
        });
    });
    return (
        <main className="">
            {isLoading ? (
                <Loading />
            ) : (
                <div className="">
                    <HeroSection />

                    <AboutSection />

                    <ProjectsSection />
                </div>
            )}
        </main>
    );
}
