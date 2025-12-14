'use client'

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { DM_Sans, Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400"],
    style: ["italic", "normal"],
    display: "swap",
    variable: "--font-playfair",
    preload: true,
    adjustFontFallback: false,
    fallback: ["serif"],
});

const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["500"],
});

const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            // 🟦 Mobile: width < 1024px
            mm.add("(max-width: 1023px)", () => {
                gsap.from(".hero-heading", {
                    y: 100,
                    opacity: 0,
                    duration: 0.5,
                    ease: "power3.out",
                });

                gsap.from(".hero-img", {
                    y: 120,
                    opacity: 0,
                    duration: 0.8,
                    delay: 0.5,
                });

                gsap.from(".hero-text", {
                    y: 100,
                    opacity: 0,
                    duration: 1.2,
                    delay: 1.1,
                });

                gsap.from(".hero-cta", {
                    y: 100,
                    opacity: 0,
                    duration: 1.2,
                    delay: 1.6,
                });


            });

            // 🟩 Desktop: width ≥ 1024px
            mm.add("(min-width: 1024px)", () => {
                gsap.from(".hero-heading", {
                    x: -100,
                    opacity: 0,
                    duration: 1.2,
                });

                gsap.from(".hero-text", {
                    x: -100,
                    opacity: 0,
                    duration: 1.2,
                    delay: 0.1,
                });

                gsap.from(".hero-cta", {
                    x: -100,
                    opacity: 0,
                    duration: 1.2,
                    delay: 0.1,
                });

                gsap.from(".hero-img", {
                    y: 120,
                    opacity: 0,
                    duration: 1.2,
                    delay: 1.5,
                });
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);


    return (
        <section ref={heroRef} className="relative pt-12 2k:pt-16! px-2 lg:px-8 font-sans">
            <div className="mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div
                        ref={headingRef}
                    >
                        <div
                            className="hero-heading"
                        >
                            <h1
                                className="text-5xl lg:text-8xl leading-[1.1] mb-8"
                            >
                                <span className={`${playfair.className} italic`}>ACCELERATE</span>
                                <br />
                                <span className="font-sans">
                                    YOUR MARKET
                                </span>
                                <br />
                                <span className={`${playfair.className} italic`}>PENETRATION</span>
                            </h1>
                        </div>
                        <div className="hero-img relative flex lg:hidden justify-center lg:justify-end mb-8 mx-auto">
                            <Image
                                ref={imageRef}
                                src={"/images/hero-woman.png"}
                                alt="Professional business consultant"
                                width={900}
                                height={900}
                                className="
                                w-[380px]    
                                md:w-[550px]    
                                2xl:w-[640px]
                                2k:w-[830px]!
                            "
                            />
                        </div>
                        <div
                            className={`hero-text ${dmSans.className} flex flex-col gap-2 max-w-md mb-8 leading-relaxed text-xl lg:text-2xl w-full `}>
                            <span className="font-bold">
                                Delivering end-to-end digital solutions:
                            </span>
                            <span className="lg:w-[760px]">
                                from high-performance software engineering to data-driven marketing and fortified infrastructure.
                            </span>
                        </div>
                        <div ref={ctaRef} className="hero-cta flex flex-wrap gap-4 ">
                            <Link href={`https://wa.me/6285155394885`} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
                                <Button className="w-full md:w-auto bg-orange-400 rounded-none py-8 text-base 2k:text-xl hover:bg-white hover:text-orange-400 border border-orange-400">
                                    Book Strategy Call
                                </Button>
                            </Link>
                            <Link href={`#features`} rel="noopener noreferrer" className="hidden md:block">
                                <Button className="bg-transparent rounded-none text-dark py-8 text-base 2k:text-xl hover:bg-transparent hover:text-orange-400 hover:underline hover:underline-offset-4">
                                    Learn More →
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="hero-img relative hidden lg:flex justify-center lg:justify-end ">
                        <Image
                            ref={imageRef}
                            src={"/images/hero-woman.png"}
                            alt="Professional business consultant"
                            width={900}
                            height={900}
                            className="
                                w-[550px]    
                                2xl:w-[640px]
                                2k:w-[830px]!
                            "
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
