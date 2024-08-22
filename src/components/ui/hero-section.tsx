import { RiArrowDownSLine } from "react-icons/ri";
import { LinkPreview } from "./link-preview";
import { ShootingStars } from "./shooting-stars";
import { StarsBackground } from "./stars-background";
import { useLenis } from "@studio-freight/react-lenis";
import { cubicBezier } from "framer-motion";

export default function HeroSection() {
    const lenis = useLenis();

    return (
        <>
            <ShootingStars />
            <StarsBackground />

            <div className="h-screen flex flex-col justify-center max-w-screen-xl px-6 md:px-10 mx-auto">
                <div>
                    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-bold animate-dimmed">
                        <h1>
                            <span className="opacity-30 animate-dimmed [animation-delay:1400ms]">
                                <span className="animate-hand-wave inline-block origin-[70%_70%] [animation-delay:2700ms]">👋</span> Hi, I&apos;m
                            </span>{" "}
                            <LinkPreview url="#about" imageSrc="images/about.jpeg" isStatic>
                                <span className="text-cyan-400 opacity-30 animate-dimmed delay-500" onClick={() => lenis && lenis.scrollTo("#about", { offset: -100, easing: cubicBezier(0.65, 0, 0.35, 1), duration: 1 })}>
                                    Rivaldo Tandoko.
                                </span>
                            </LinkPreview>{" "}
                            <br className="hidden sm:block" />
                            <span className="opacity-30 animate-dimmed [animation-delay:1700ms]">A</span>{" "}
                            <LinkPreview url="#technologies" imageSrc="images/technologies.jpeg" isStatic>
                                <span className="text-cyan-400 opacity-30 animate-dimmed [animation-delay:800ms]" onClick={() => lenis && lenis.scrollTo("#technologies", { offset: -100, easing: cubicBezier(0.65, 0, 0.35, 1), duration: 1 })}>
                                    frontend developer,
                                </span>
                            </LinkPreview>{" "}
                            <span className="opacity-30 animate-dimmed [animation-delay:2000ms]">who craft</span> <br className="hidden sm:block" />
                            <LinkPreview url="#projects" imageSrc="images/projects.jpeg" isStatic>
                                <span className="text-cyan-400 opacity-30 animate-dimmed [animation-delay:1100ms]" onClick={() => lenis && lenis.scrollTo("#projects", { offset: -100, easing: cubicBezier(0.65, 0, 0.35, 1), duration: 1 })}>
                                    digital experiences.
                                </span>
                            </LinkPreview>
                        </h1>
                    </div>
                    <p className="hidden md:block lg:mt-4 font-semibold text-lg underline underline-offset-8 decoration-cyan-400 decoration-2 opacity-0 animate-fade-down [animation-delay:2500ms]">Fullstack Capable</p>
                </div>

                <div className="absolute bottom-0 left-0 w-full flex justify-center pb-10 overflow-y-hidden" onClick={() => lenis && lenis.scrollTo("#about", { offset: -100, easing: cubicBezier(0.65, 0, 0.35, 1), duration: 1 })}>
                    <div className="z-20 flex flex-col items-center cursor-pointer" data-aos="fade-up" data-aos-easing="ease-in" data-aos-delay="2800" data-aos-offset="0">
                        <span className="animate-bounce text-3xl">
                            <RiArrowDownSLine />
                        </span>
                        <span className="font-medium">Scroll down</span>
                    </div>
                </div>
            </div>
        </>
    );
}
