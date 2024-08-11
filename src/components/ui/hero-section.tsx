import { BackgroundBeams } from "@/components/ui/background-beams";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useEffect } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

export default function HeroSection() {
    useEffect(() => {
        Aos.init({
            offset: 0,
        });
    });
    return (
        <div className="h-screen flex flex-col justify-center max-w-screen-xl px-6 md:px-10 mx-auto">
            <div className="">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-bold animate-dimmed" id="heroSection">
                    <h1>
                        <span className="opacity-30 animate-dimmed [animation-delay:1400ms]">👋 Hi, I&apos;m</span> <span className="text-cyan-400 opacity-30 animate-dimmed delay-500">Rivaldo Tandoko. </span>
                        <br className="hidden sm:block" />
                        <span className="opacity-30 animate-dimmed [animation-delay:1700ms]">A</span> <span className="text-cyan-400 opacity-30 animate-dimmed [animation-delay:800ms]">frontend developer,</span> <span className="opacity-30 animate-dimmed [animation-delay:2000ms]">who craft </span>
                        <br className="hidden sm:block" />
                        <span className="text-cyan-400 opacity-30 animate-dimmed [animation-delay:1100ms]">digital experiences.</span>
                    </h1>
                </div>
                <p className="hidden md:block lg:mt-4 font-semibold text-lg underline underline-offset-8 decoration-cyan-400 decoration-2 opacity-0 animate-fade-down [animation-delay:2500ms]">Fullstack Capable</p>
            </div>

            <Link href="" className="absolute bottom-0 left-0 w-full flex justify-center pb-10 overflow-y-hidden">
                <div className="z-20 flex flex-col items-center" data-aos="fade-up" data-aos-easing="ease-in" data-aos-delay="3000">
                    <span className="animate-bounce text-3xl">
                        <RiArrowDownSLine />
                    </span>
                    <span className="font-medium">Scroll down</span>
                </div>
            </Link>
            <BackgroundBeams />
        </div>
    );
}
