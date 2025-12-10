'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const btn = buttonRef.current;
    if (!btn) return;

    let rect = btn.getBoundingClientRect();
    const radius = 120; // jarak normal ±2cm
    const strength = 0.35;

    const updateRect = () => {
      rect = btn.getBoundingClientRect();
    };

    const handleWindowMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = mouseX - centerX;
      const dy = mouseY - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // ❌ Tidak masuk radius → no magnet sama sekali
      if (distance > radius) {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: "power3.out",
        });
        return;
      }

      // ✔ Dalam radius → GERAK
      const x = dx * strength;
      const y = dy * strength;

      gsap.to(btn, {
        x,
        y,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const handleEnter = () => {
      updateRect();
    };

    const handleLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleWindowMove);
    btn.addEventListener("mouseenter", handleEnter);
    btn.addEventListener("mouseleave", handleLeave);
    window.addEventListener("resize", updateRect);

    return () => {
      window.removeEventListener("mousemove", handleWindowMove);
      btn.removeEventListener("mouseenter", handleEnter);
      btn.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("resize", updateRect);
    };
  }, []);


  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 lg:px-12 bg-card border-y border-border"
    >
      <div className="max-w-4xl mx-auto text-center cta-content">
        <h2 className="text-4xl md:text-5xl lg:text-7xl  mb-4">
          READY TO <span className="font-serif italic">SCALE?</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-12">
          ENGINEER YOUR REVENUE GROWTH
        </p>

        <Link href="https://wa.me/6285155394885" target="_blank" rel="noopener noreferrer">
          <Button
            ref={buttonRef}
            className="w-64 h-64 rounded-full bg-amber-500 text-primary-foreground font-medium 
          flex items-center justify-center mx-auto shadow-xl shadow-primary/30
          hover:shadow-2xl hover:shadow-primary/40 transition-shadow duration-300 cursor-pointer"
          >
            <span className="text-2xl">Book Strategy<br />Call</span>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTA;
