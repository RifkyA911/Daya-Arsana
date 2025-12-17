'use client'

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface HeroClientProps {
    children: React.ReactNode;
}

const HeroClient = ({ children }: HeroClientProps) => {
    const heroRef = useRef<HTMLDivElement>(null);

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
        <section ref={heroRef} className="relative pt-8 xl:pt-12 px-2 lg:px-4 xl:px-12">
            {children}
        </section>
    );
};

export default HeroClient;