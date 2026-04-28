'use client'

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

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

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        title: "SOFTWARE DEVELOPMENT",
        href: "/services/software-development",
        description: "Our Software Development service is a high-velocity engineering framework focused on delivering Customized Solutions and Managed Services. We specialize in building scalable, secure, and high-availability digital products.",
        stat: "200+",
        statLabel: "Brands Transformed",
    },
    {
        title: "DIGITAL TRANSFORMATION",
        href: "/services/digital-transformation",
        description: "Digital Transformation at Daya-Arsana is an end-to-end strategic overhaul of business processes, culture, and customer experiences through the integration of digital technology.",
        stat: "50M+",
        statLabel: "Impressions Monthly",
    },
    {
        title: "CYBER SECURITY",
        href: "/services/cyber-security",
        description: "Implementing enterprise-grade security protocols and penetration testing to safeguard transaction integrity and client trust.",
        stat: "99.9%",
        statLabel: "Uptime Guaranteed",
    },
];

const Features = () => {
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

            // Feature card
            // gsap.from(".feature-card", {
            //     y: 60,
            //     opacity: 0,
            //     duration: 0.8,
            //     stagger: 0.15,
            //     ease: "power3.out",
            //     scrollTrigger: {
            //         trigger: sectionRef.current,
            //         start: "top 90%",
            //     },
            // });

            cardsRef.current.forEach((card, i) => {
                gsap.from(card, {
                    y: 100,
                    opacity: 0,
                    duration: 0.6,
                    delay: i * 0.2,        // ⬅️ antar item delay 0.3
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,       // ⬅️ tiap card punya trigger sendiri
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                });
            });


        }, sectionRef);

        return () => ctx.revert();
    }, []);


    return (
        <section id="features" ref={sectionRef} className="mt-18 md:mt-12 py-6 md:py-20 px-2 lg:px-4 xl:px-12 font-sans">
            <div className="mx-auto">
                <h2 className="section-heading font-medium leading-12 md:leading-none text-[40px] lg:text-8xl 2k:text-[128px]! mb-4">
                    INTEGRATED <span className={`${playfair.className} italic`}>STRATEGIES</span>
                    <br className="hidden md:block" />{' '}
                    FOR <span className={`${playfair.className} italic`}>SCALABLE</span>
                    <br className="hidden md:block" />{' '}
                    <span className={`${playfair.className} italic`}>REVENUE</span> GROWTH
                </h2>

                <div className="section-features grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-0 mt-8 md:mt-16">
                    {features.map((feature, index) => (
                        <Link
                            key={index}
                            href={feature.href}
                            // ref={(el) => { cardsRef.current[index] = el; }}
                            className={`flex flex-col justify-center feature-card md:min-h-[340px] p-4 md:p-6 border border-black hover:border-amber-500 transition-all duration-300 hover:shadow-lg hover:bg-amber-500 hover:text-white cursor-pointer`}
                        >
                            <h3 className="text-base md:text-xl font-semibold tracking-wider mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-sm md:text-lg mb-6 leading-relaxed">
                                {feature.description}
                            </p>
                            {/* <div className="pt-4 border-t border-border">
                            <p className="text-2xl font-serif font-semibold text-primary">
                                {feature.stat}
                            </p>
                            <p className="text-xs">{feature.statLabel}</p>
                        </div> */}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
