"use client";
import { useEffect, useState } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import HeroSection from "@/components/ui/hero-section";
import Loading from "@/components/ui/loading";
import AboutSection from "@/components/ui/about-section";
import ProjectsSection from "@/components/ui/projects-section";
import TechnologiesSection from "@/components/ui/technologies-section";
import ContactSection from "@/components/ui/contact-section";
import FooterSection from "@/components/ui/footer-section";
import Navbar from "@/components/ui/navbar";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2800);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        Aos.init({
            offset: 100,
            once: true,
        });
    });

    return (
        <main className="">
            {isLoading ? (
                <Loading />
            ) : (
                <div className="" id="home">
                    <Navbar />

                    <HeroSection />

                    <AboutSection />

                    <ProjectsSection />

                    <TechnologiesSection />

                    <ContactSection />

                    <FooterSection />
                </div>
            )}
        </main>
    );
}
