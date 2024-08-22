import { useLenis } from "@studio-freight/react-lenis";
import { cubicBezier } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const lenis = useLenis();

    return (
        <div className="flex justify-between items-center px-6 md:px-10 xl:px-20 py-6 fixed w-full bg-slate-950/50 backdrop-blur-md z-50" data-aos="fade-down" data-aos-delay="2800">
            <div className="">
                <Link href={"#home"} className="text-2xl font-semibold tracking-wide">
                    Sycle.dev
                </Link>
            </div>

            <div className=" hidden md:flex items-center gap-10 text-lg font-semibold tracking-wide">
                <span className="hover:text-cyan-400 transition-all duration-200 ease-in-out cursor-pointer" onClick={() => lenis && lenis.scrollTo("#about", { offset: -100, easing: cubicBezier(0.65, 0, 0.35, 1), duration: 1 })}>
                    About
                </span>
                <span className="hover:text-cyan-400 transition-all duration-200 ease-in-out cursor-pointer" onClick={() => lenis && lenis.scrollTo("#projects", { offset: -100, easing: cubicBezier(0.65, 0, 0.35, 1), duration: 1 })}>
                    Projects
                </span>
                <span className="hover:text-cyan-400 transition-all duration-200 ease-in-out cursor-pointer" onClick={() => lenis && lenis.scrollTo("#contact", { offset: -100, easing: cubicBezier(0.65, 0, 0.35, 1), duration: 1 })}>
                    Contact
                </span>
            </div>

            <div className="flex flex-col gap-2 md:hidden" onClick={toggleMenu}>
                <span className={`block h-[2px] w-8 bg-white ${isMenuOpen ? "-rotate-45 origin-center translate-y-[10px]" : ""} transition-all duration-200 ease-in-out`}></span>
                <span className={`block h-[2px] bg-white ${isMenuOpen ? "w-0" : "w-8"} transition-all duration-200`}></span>
                <span className={`block h-[2px] w-8 bg-white ${isMenuOpen ? "rotate-45 origin-center -translate-y-[10px]" : ""} transition-all duration-200`}></span>
            </div>

            <div className={`flex md:hidden flex-col gap-2 text-right absolute -right-[200px] top-20 bg-white pl-10 pr-4 py-4 text-black rounded-lg ${isMenuOpen ? "-translate-x-[224px]" : ""} transition-all duration-300 ease-in-out`}>
                <span className="text-lg font-semibold tracking-wide hover:text-cyan-400 transition-all duration-200 ease-in-out cursor-pointer" onClick={() => lenis && lenis.scrollTo("#about", { offset: -100, easing: cubicBezier(0.65, 0, 0.35, 1), duration: 1 })}>
                    About
                </span>
                <span className="text-lg font-semibold tracking-wide hover:text-cyan-400 transition-all duration-200 ease-in-out cursor-pointer" onClick={() => lenis && lenis.scrollTo("#projects", { offset: -100, easing: cubicBezier(0.65, 0, 0.35, 1), duration: 1 })}>
                    Projects
                </span>
                <span className="text-lg font-semibold tracking-wide hover:text-cyan-400 transition-all duration-200 ease-in-out cursor-pointer" onClick={() => lenis && lenis.scrollTo("#contact", { offset: -100, easing: cubicBezier(0.65, 0, 0.35, 1), duration: 1 })}>
                    Contact
                </span>
            </div>
        </div>
    );
}
