import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="flex justify-between items-center px-6 md:px-10 xl:px-20 py-6 fixed w-full bg-slate-950/50 backdrop-blur-md z-50" data-aos="fade-down" data-aos-delay="2800">
            <div className="">
                <Link href={"#home"} className="text-2xl font-semibold tracking-wide">
                    Sycle.dev
                </Link>
            </div>

            <div className=" hidden md:flex items-center gap-10 text-lg font-semibold tracking-wide">
                <Link href="#about" className="hover:text-cyan-400 transition-all duration-200 ease-in-out">
                    About
                </Link>
                <Link href="#projects" className="hover:text-cyan-400 transition-all duration-200 ease-in-out">
                    Projects
                </Link>
                <Link href="#contact" className="hover:text-cyan-400 transition-all duration-200 ease-in-out">
                    Contact
                </Link>
            </div>

            <div className="flex flex-col gap-2 md:hidden" onClick={toggleMenu}>
                <span className={`block h-[2px] w-8 bg-white ${isMenuOpen ? "-rotate-45 origin-center translate-y-[10px]" : ""} transition-all duration-200 ease-in-out`}></span>
                <span className={`block h-[2px] bg-white ${isMenuOpen ? "w-0" : "w-8"} transition-all duration-200`}></span>
                <span className={`block h-[2px] w-8 bg-white ${isMenuOpen ? "rotate-45 origin-center -translate-y-[10px]" : ""} transition-all duration-200`}></span>
            </div>

            <div className={`flex md:hidden flex-col gap-2 text-right absolute -right-[200px] top-20 bg-white pl-10 pr-4 py-4 text-black rounded-lg ${isMenuOpen ? "-translate-x-[224px]" : ""} transition-all duration-300 ease-in-out`}>
                <Link href={"#about"} className="text-lg font-semibold tracking-wide hover:text-cyan-400 transition-all duration-200 ease-in-out">
                    About
                </Link>
                <Link href={"#projects"} className="text-lg font-semibold tracking-wide hover:text-cyan-400 transition-all duration-200 ease-in-out">
                    Projects
                </Link>
                <Link href={"#contact"} className="text-lg font-semibold tracking-wide hover:text-cyan-400 transition-all duration-200 ease-in-out">
                    Contact
                </Link>
            </div>
        </div>
    );
}
