'use client'

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        title: "Product Development ",
        description: "End-to-end agile development tailored to streamline business operations and deliver a seamless, high-speed customer journey",
        stat: "200+",
        statLabel: "Brands Transformed",
    },
    {
        title: "CYBER SECURITY",
        description: "Implementing enterprise-grade security protocols and penetration testing to safeguard transaction integrity and client trust.",
        stat: "99.9%",
        statLabel: "Uptime Guaranteed",
    },
    {
        title: "BRAND ACTIVATION",
        description: "crafting compelling brand narratives that differentiate your business in saturated markets and drive long-term customer loyalty.",
        stat: "50M+",
        statLabel: "Impressions Monthly",
    },
    {
        title: "DIGITAL MARKET",
        description: "Precision targeting and funnel optimization to transform passive traffic into qualified leads and recurring revenue streams.",
        stat: "340%",
        statLabel: "Average ROI",
    },
];

const Features = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".feature-card", {
                y: 60,
                opacity: 0,
                duration: 0.8,
                // stagger: 0.15,
                // ease: "power3.out",
                // scrollTrigger: {
                //     trigger: sectionRef.current,
                //     start: "top 80%",
                //     toggleActions: "play none none none",
                // },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="features" ref={sectionRef} className="py-20 px-6 lg:px-12 font-sans">
            <div className="max-w-8xl mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-7xl mb-4">
                    INTEGRATED <span className="font-serif italic">STRATEGIES</span>
                    <br />
                    FOR <span className="font-serif italic">SCALABLE</span>
                    <br />
                    <span className="font-serif italic">REVENUE</span> GROWTH
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 mt-16">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="feature-card text-muted-foreground p-6 bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:bg-amber-500 hover:text-white"
                        >
                            <h3 className="text-xs font-semibold tracking-wider mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-sm mb-6 leading-relaxed">
                                {feature.description}
                            </p>
                            <div className="pt-4 border-t border-border">
                                <p className="text-2xl font-serif font-semibold text-primary">
                                    {feature.stat}
                                </p>
                                <p className="text-xs">{feature.statLabel}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
