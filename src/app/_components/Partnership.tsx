'use client'

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

const Partnership = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".partnership-text", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="partnership" ref={sectionRef} className="py-6 md:py-16 px-2 md:px-6 lg:px-12">
      <div className="xmax-w-8xl mx-auto">
        <p className="font-sans partnership-text text-2xl lg:text-4xl 2k:text-[80px]! leading-relaxed text-foreground/90">
          PARTNERING WITH VISIONARY BRANDS TO SECURE MARKET{" "}
          <span className={`${playfair.className} italic`}>DOMINANCE</span> VIA AGILE TECH
          INFRASTRUCTURE,
          <br className="block md:hidden" /> DATA-DRIVEN BRANDING, AND{" "}
          <span className={`${playfair.className} italic`}>PERFORMANCE-ORIENTED</span> MARKETING
          STRATEGIES
        </p>
      </div>
    </section>
  );
};

export default Partnership;
