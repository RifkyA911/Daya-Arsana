'use client'

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";

const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Heading fade in from left to right
            gsap.from(headingRef.current, {
                x: -100,
                delay: 0.3,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
            });

            // Image fade in from bottom to top
            gsap.from(imageRef.current, {
                y: 100,
                opacity: 0,
                delay: 1.5,
                duration: 1.2,
                ease: "power3.out",
            });

            // gsap.from(ctaRef.current?.children || [], {
            //     y: 30,
            //     opacity: 0,
            //     duration: 0.8,
            //     stagger: 0.15,
            //     delay: 0.5,
            //     ease: "power3.out",
            // });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="relative min-h-screen pt-4 px-6 lg:px-12 font-sans">
            <div className="max-w-8xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div
                        ref={headingRef}
                    >
                        <h1
                            className="text-5xl md:text-6xl lg:text-8xl font-serif leading-[1.1] mb-8"
                        >
                            <span className="italic">ACCELERATE</span>
                            <br />
                            <span className="font-sans">
                                YOUR MARKET
                            </span>
                            <br />
                            <span className="italic text-primary">PENETRATION</span>
                        </h1>
                        <div className="flex flex-col gap-2 text-muted-foreground max-w-md mb-8 leading-relaxed ">
                            <span className="font-medium">
                                Delivering end-to-end digital solutions:
                            </span>
                            <span>
                                from high-performance software engineering to data-driven marketing and fortified infrastructure.
                            </span>
                        </div>
                        <div ref={ctaRef} className="flex flex-wrap gap-4 ">
                            <Button className="bg-orange-400 rounded-none py-4">
                                Book Strategy Call
                            </Button>
                            <button className="btn-outline">
                                Learn More →
                            </button>
                        </div>
                    </div>

                    <div className="relative flex justify-center lg:justify-end">
                        <img
                            ref={imageRef}
                            src={"images/hero-woman.png"}
                            alt="Professional business consultant"
                            className="relative z-10 max-w-sm lg:max-w-md xl:max-w-lg object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
