'use client'

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Image from "next/image";
import { MarqueeDemo } from "./InfiniteMarquee2";

const brands_top = [
  { name: "muzica", icon: "muzica.png" },
  { name: "FOXHUB", icon: "foxhub.png" },
  { name: "ztos", icon: "ztos.png" },
  { name: "liua", icon: "liua.png" },
  { name: "velocity", icon: "velocity.png" },
];

const brands_bottom = [
  { name: "CodeLab", icon: "codelab.png" },
  { name: "amara", icon: "amara.png" },
  { name: "goldline", icon: "goldline.png" },
  { name: "UTOSIA", icon: "utosia.png" },
];

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const InfiniteMarquee = () => {
  const marqueeTopInnerRef = useRef<HTMLDivElement>(null);
  const marqueeBotInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const top = marqueeTopInnerRef.current;
    const bot = marqueeBotInnerRef.current;

    if (!top || !bot) return;

    const makeMarquee = (
      el: HTMLDivElement,
      direction: "ltr" | "rtl",
      speed = 12 // makin kecil makin cepat
    ) => {
      const contentWidth = el.scrollWidth / 2;
      const from = direction === "ltr" ? -contentWidth : 0;
      const to = direction === "ltr" ? 0 : -contentWidth;

      gsap.set(el, { x: from });

      gsap.to(el, {
        x: to,
        duration: speed,
        ease: "none",
        repeat: -1,
      });
    };

    makeMarquee(top, "ltr", 8); // TOP lebih pelan
    makeMarquee(bot, "rtl", 8); // BOTTOM lebih cepat

  }, []);



  return (
    <div className="w-full overflow-hidden py-8">
      {/* <MarqueeDemo /> */}
      {/* TOP */}
      <div className="overflow-hidden py-8">
        <div ref={marqueeTopInnerRef} className="flex whitespace-nowrap">
          {[...brands_top, ...brands_top].map((brand, index) => (
            <div
              key={index}
              className="flex items-center mx-8 flex-shrink-0"
            >
              <Image
                src={`/images/marquee/${brand.icon}`}
                alt={brand.name}
                width={800}
                height={800}
                className="
                w-[120px] h-[80px]
                md:w-[150px] md:h-[100px]
                lg:w-[200px] lg:h-[130px]
                xl:w-[250px] xl:h-[150px]
                object-contain
              "
              />
            </div>
          ))}
        </div>
      </div>


      {/* BOTTOM */}
      <div ref={marqueeBotInnerRef} className="flex whitespace-nowrap">
        {[...brands_bottom, ...brands_bottom].map((brand, index) => (
          <div
            key={index}
            className="flex items-center mx-8 flex-shrink-0"
          >
            <Image
              src={`/images/marquee/${brand.icon}`}
              alt={brand.name}
              width={800}
              height={800}
              className="
                w-[120px] h-[80px]
                md:w-[150px] md:h-[100px]
                lg:w-[200px] lg:h-[130px]
                xl:w-[250px] xl:h-[150px]
                object-contain
              "
            />
          </div>

        ))}
      </div>
    </div>
  );
};

export default InfiniteMarquee;
