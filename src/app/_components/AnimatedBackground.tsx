'use client'

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const AnimatedBackground = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const dotsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        if (!containerRef.current) return;

        dotsRef.current.forEach((dot) => {
            if (!dot) return;

            // Random initial position
            gsap.set(dot, {
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
            });

            // Animate randomly
            const animateDot = () => {
                gsap.to(dot, {
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    duration: 12 + Math.random() * 24,
                    ease: "power1.inOut",
                    onComplete: animateDot,
                });
            };

            animateDot();
        });
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 pointer-events-none overflow-hidden z-0"
        >
            {[...Array(6)].map((_, i) => (
                <div
                    key={i}
                    ref={(el) => {
                        if (el) dotsRef.current[i] = el;
                    }}
                    className="absolute opacity-50 animate-float"
                // className="absolute rounded-full bg-radial from-orange-200 from-20% via-orange-200 via-30% to-orange-100 to-20% blur-sm"
                // style={{
                //     width: `${200 + Math.random() * 40}px`,
                //     height: `${180 + Math.random() * 40}px`,
                // }}
                >
                    <Image
                        src="/images/background-dot.png"
                        className=""
                        alt="Dots"
                        width={600}
                        height={680}
                    />
                </div>
            ))}
        </div>
    );
};

export default AnimatedBackground;
