import Link from "next/link";
import { CgArrowTopRight } from "react-icons/cg";

export default function ContactSection() {
    return (
        <div className="mt-20 md:mt-40 max-w-screen-xl px-6 md:px-10 mx-auto" id="contact">
            <h1 className="text-2xl md:text-3xl xl:text-4xl font-semibold tracking-wide underline underline-offset-8 decoration-cyan-400" data-aos="fade">
                Let&apos;s drink a coffee!
            </h1>
            <p className="mt-6 lg:text-lg font-medium md:w-2/3 lg:w-1/2">I&apos;m currently looking for new opportunities. If you have any questions or would like to work together, feel free to get in touch.</p>

            <div className="mt-10 flex gap-10">
                <Link href={"https://www.linkedin.com/in/rivaldo-tandoko"} target="_blank" className="text-lg md:text-xl font-semibold tracking-wide flex gap-1 items-center group">
                    Linkedin
                    <span className="text-2xl group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-200 ease-in-out">
                        <CgArrowTopRight />
                    </span>
                </Link>
                <Link href={"https://github.com/rtrivaldo"} target="_blank" className="text-lg md:text-xl font-semibold tracking-wide flex gap-1 items-center group">
                    Github
                    <span className="text-2xl group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-200 ease-in-out">
                        <CgArrowTopRight />
                    </span>
                </Link>
                <Link href={"mailto:rtrivaldo05@gmail.com"} target="_blank" className="text-lg md:text-xl font-semibold tracking-wide flex gap-1 items-center group">
                    Email
                    <span className="text-2xl group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-200 ease-in-out">
                        <CgArrowTopRight />
                    </span>
                </Link>
            </div>
        </div>
    );
}
