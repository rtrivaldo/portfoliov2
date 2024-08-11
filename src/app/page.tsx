"use client";
import HeroSection from "@/components/ui/hero-section";
import Loading from "@/components/ui/loading";
import { useEffect, useState } from "react";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <main className="">
            {isLoading ? (
                <Loading />
            ) : (
                <div className="">
                    <HeroSection />
                </div>
            )}
        </main>
    );
}
