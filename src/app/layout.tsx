import type { Metadata } from "next";
import { Wix_Madefor_Display } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "@/components/ui/loading";
import SmoothScrolling from "@/components/ui/smooth-scroll";

const wixMadeForDisplay = Wix_Madefor_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Rivaldo Tandoko | Frontend Developer",
    description: "Rivaldo Tandoko's web portfolio",
    icons: {
        icon: "/images/logo.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={wixMadeForDisplay.className}>
                <Suspense fallback={<Loading />}>
                    <SmoothScrolling>{children}</SmoothScrolling>
                </Suspense>
            </body>
        </html>
    );
}
