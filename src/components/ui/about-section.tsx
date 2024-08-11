import Image from "next/image";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function AboutSection() {
    return (
        <div className="max-w-screen-xl px-6 md:px-10 mx-auto" id="about">
            <h1 className="mt-20 text-3xl md:text-4xl text-center font-semibold tracking-wide underline underline-offset-8 decoration-cyan-400" data-aos="fade">
                About
            </h1>

            <div className="mt-20 flex flex-col lg:flex-row gap-10 lg:gap-20" data-aos="fade-up">
                <div className="lg:w-1/2 order-2 lg:order-1">
                    <p className="md:text-lg font-medium">Hello there! My name is Rivaldo Tandoko and i&apos;m a front-end developer based in Pontianak, specializing in crafting visually appealing and user-friendly websites. Currently pursuing my undergraduate degree in informatics, I focus on frontend web development, translating design concepts into seamless, responsive interfaces that enhance user experiences.</p>
                    <p className="mt-4 md:text-lg font-medium">My passion lies in delivering high-quality, innovative solutions that meet both aesthetic and functional requirements. With a keen eye for detail and a commitment to staying updated with industry trends, I strive to create intuitive user interfaces that leave a lasting impression. Outside of coding, I enjoy exploring new technologies and continuously refining my skills to keep up with the evolving digital landscape.</p>
                    <p className="mt-4 md:text-lg font-medium">Here are few technologies I&apos;ve been working with recently:</p>
                    <div className="columns-2">
                        {skills.map((skills) => (
                            <p className="flex items-center gap-2" key={skills}>
                                <span className="md:text-lg">
                                    <MdKeyboardDoubleArrowRight />
                                </span>
                                {skills}
                            </p>
                        ))}
                    </div>
                </div>

                <div className="lg:w-1/3 flex justify-center items-center order-1 lg:order-2">
                    <div className="w-4/5 sm:w-1/2 md:w-1/3 lg:w-4/5">
                        <Image src="/images/profile.jpeg" height="1000" width="1000" className="rounded-xl" alt="Rivaldo Tandoko" />
                    </div>
                </div>
            </div>
        </div>
    );
}

const skills: string[] = ["Javascript", "TailwindCSS", "ReactJS", "NextJS", "Typescript", "PHP", "Laravel", "MySQL"];
