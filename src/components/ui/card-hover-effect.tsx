import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Badge } from "./badge";

export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        url: string;
        title: string;
        description: string;
        tech: string[];
        link: string;
    }[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}>
            {items.map((item, idx) => (
                <Link href={item?.link} key={item?.link} className="relative group  block p-2 h-full w-full" onMouseEnter={() => setHoveredIndex(idx)} onMouseLeave={() => setHoveredIndex(null)}>
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card>
                        <Image src={item?.url} alt={item?.title} width={1920} height={1080} className="w-full" />
                        <CardTitle>{item?.title}</CardTitle>
                        <CardDescription>{item?.description}</CardDescription>

                        <div className="mt-4 flex gap-2">
                            {item?.tech.map((tech) => {
                                return <CardTechStack key={tech}>{tech}</CardTechStack>;
                            })}
                        </div>
                    </Card>
                </Link>
            ))}
        </div>
    );
};

export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
    return (
        <div className={cn("rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20", className)}>
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};
export const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => {
    return <h4 className={cn("mt-4 text-zinc-100 font-bold tracking-wide md:text-lg", className)}>{children}</h4>;
};
export const CardDescription = ({ className, children }: { className?: string; children: React.ReactNode }) => {
    return <p className={cn("mt-1 text-zinc-400 tracking-wide leading-snug md:leading-relaxed md:text-base", className)}>{children}</p>;
};

export const CardTechStack = ({ className, children }: { className?: string; children: React.ReactNode }) => {
    return <Badge className={cn("text-zinc-400 tracking-wide leading-relaxed text-xs", className)}>{children}</Badge>;
};
