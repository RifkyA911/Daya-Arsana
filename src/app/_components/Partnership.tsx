'use client'

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    <section id="partnership" ref={sectionRef} className="py-16 px-6 lg:px-12">
      <div className="max-w-8xl mx-auto">
        <p className="font-sans partnership-text text-xl md:text-2xl lg:text-6xl leading-relaxed text-foreground/90">
          PARTNERING WITH VISIONARY BRANDS TO SECURE MARKET{" "}
          <span className="font-serif italic">DOMINANCE</span> VIA AGILE TECH
          INFRASTRUCTURE, DATA-DRIVEN BRANDING, AND{" "}
          <span className="font-serif italic">PERFORMANCE-ORIENTED</span> MARKETING
          STRATEGIES
        </p>
      </div>
    </section>
  );
};

export default Partnership;
