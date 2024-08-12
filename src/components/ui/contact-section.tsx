import Link from "next/link";
import { CgArrowTopRight } from "react-icons/cg";

export default function ContactSection() {
    return (
        <div className="mt-20 md:mt-40 max-w-screen-xl px-6 md:px-10 mx-auto text-center" id="contact">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-wide underline underline-offset-8 decoration-cyan-400" data-aos="fade">
                Let&apos;s drink a coffee!
            </h1>
            <p className="mt-10 lg:text-lg font-medium sm:w-4/5 md:w-2/3 lg:w-1/2 mx-auto" data-aos="fade-up">
                I&apos;m currently looking for new opportunities. If you have any questions or would like to work together, feel free to get in touch.
            </p>

            <div className="mt-6 flex gap-6 md:gap-10 justify-center" data-aos="fade-up">
                <Link href={"https://www.linkedin.com/in/rivaldo-tandoko"} target="_blank" className="md:text-xl font-semibold tracking-wide flex gap-1 items-center group">
                    Linkedin
                    <span className="text-xl md:text-2xl group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-200 ease-in-out">
                        <CgArrowTopRight />
                    </span>
                </Link>
                <Link href={"https://github.com/rtrivaldo"} target="_blank" className="md:text-xl font-semibold tracking-wide flex gap-1 items-center group">
                    Github
                    <span className="text-xl md:text-2xl group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-200 ease-in-out">
                        <CgArrowTopRight />
                    </span>
                </Link>
                <Link href={"mailto:rtrivaldo05@gmail.com"} target="_blank" className="md:text-xl font-semibold tracking-wide flex gap-1 items-center group">
                    Email
                    <span className="text-xl md:text-2xl group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-200 ease-in-out">
                        <CgArrowTopRight />
                    </span>
                </Link>
            </div>
        </div>
    );
}
