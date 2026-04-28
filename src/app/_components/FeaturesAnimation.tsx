'use client'

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FeaturesAnimationProps {
    children: React.ReactNode;
}

const FeaturesAnimation: React.FC<FeaturesAnimationProps> = ({ children }) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);
            const mm = gsap.matchMedia();

            // 🟦 Mobile (max-width: 1023px)
            mm.add("(max-width: 1023px)", () => {
                gsap.from(".section-heading", {
                    y: 100,
                    opacity: 0,
                    duration: 0.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".section-heading",
                        start: "top 85%",
                    },
                });

                gsap.from(".section-img", {
                    y: 120,
                    opacity: 0,
                    duration: 0.8,
                    delay: 0.2,
                    scrollTrigger: {
                        trigger: ".section-img",
                        start: "top 85%",
                    },
                });

                gsap.from(".section-text", {
                    y: 100,
                    opacity: 0,
                    duration: 1.2,
                    delay: 0.4,
                    scrollTrigger: {
                        trigger: ".section-text",
                        start: "top 85%",
                    },
                });

                gsap.from(".section-cta", {
                    y: 100,
                    opacity: 0,
                    duration: 1.2,
                    delay: 0.6,
                    scrollTrigger: {
                        trigger: ".section-cta",
                        start: "top 85%",
                    },
                });
            });

            // 🟩 Desktop (min-width: 1024px)
            mm.add("(min-width: 1024px)", () => {
                gsap.from(".section-heading", {
                    y: 100,
                    opacity: 0,
                    duration: 1.2,
                    scrollTrigger: {
                        trigger: ".section-heading",
                        start: "top 85%",
                    },
                });

                gsap.from(".section-text", {
                    x: -100,
                    opacity: 0,
                    duration: 1.2,
                    delay: 0.1,
                    scrollTrigger: {
                        trigger: ".section-text",
                        start: "top 85%",
                    },
                });

                gsap.from(".section-cta", {
                    x: -100,
                    opacity: 0,
                    duration: 1.2,
                    delay: 0.2,
                    scrollTrigger: {
                        trigger: ".section-cta",
                        start: "top 85%",
                    },
                });

                gsap.from(".section-img", {
                    y: 120,
                    opacity: 0,
                    duration: 1.2,
                    delay: 0.3,
                    scrollTrigger: {
                        trigger: ".section-img",
                        start: "top 85%",
                    },
                });
            });

            // Animate feature cards
            gsap.from(".feature-card", {
                y: 100,
                opacity: 0,
                duration: 0.6,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".section-features",
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="features" ref={sectionRef} className="mt-18 md:mt-12 py-6 md:py-20 px-2 lg:px-4 xl:px-12 font-sans">
            <div className="mx-auto">
                <h2 className="section-heading font-medium leading-12 md:leading-none text-[40px] lg:text-8xl 2k:text-[128px]! mb-4">
                    INTEGRATED <span className="italic">STRATEGIES</span>
                    <br className="hidden md:block" />{' '}
                    FOR <span className="italic">SCALABLE</span>
                    <br className="hidden md:block" />{' '}
                    <span className="italic">REVENUE</span> GROWTH
                </h2>

                <div className="section-features grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-0 mt-8 md:mt-16">
                    {children}
                </div>
            </div>
        </section>
    );
};

export default FeaturesAnimation;