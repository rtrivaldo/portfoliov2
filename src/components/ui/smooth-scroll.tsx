"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

interface SmoothScrollingProps {
    children: React.ReactNode;
}

function SmoothScrolling({ children }: SmoothScrollingProps) {
    const options = {
        lerp: 0.1,
        duration: 1.5,
        smoothTouch: true,
    };

    return (
        <ReactLenis root options={options}>
            {children}
        </ReactLenis>
    );
}

export default SmoothScrolling;
