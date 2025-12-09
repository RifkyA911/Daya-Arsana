'use client'

import { useEffect, useRef } from "react";
import gsap from "gsap";

const brands = [
  { name: "muzica", icon: "♫" },
  { name: "FOXHUB", icon: "🦊" },
  { name: "ztos", icon: "⚡" },
  { name: "liua", icon: "▲" },
  { name: "velocity", icon: "◉" },
  { name: "CodeLab", icon: "{ }" },
  { name: "amara", icon: "◎" },
  { name: "goldline", icon: "◈" },
  { name: "UTOSIA", icon: "U" },
];

const InfiniteMarquee = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeInnerRef.current) return;

    const marqueeContent = marqueeInnerRef.current;
    const marqueeWidth = marqueeContent.scrollWidth / 2;

    gsap.to(marqueeContent, {
      x: -marqueeWidth,
      duration: 25,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <div
      ref={marqueeRef}
      className="w-full overflow-hidden py-8 border-y border-border"
    >
      <div ref={marqueeInnerRef} className="flex whitespace-nowrap">
        {[...brands, ...brands].map((brand, index) => (
          <div
            key={index}
            className="flex items-center gap-2 mx-8 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-lg">{brand.icon}</span>
            <span className="text-lg font-medium tracking-wide">{brand.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteMarquee;
