'use client'

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Image from "next/image";

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

    const makeMarquee = (el: HTMLDivElement, direction: 1 | -1) => {
      const contentWidth = el.scrollWidth / 3; // karena lo duplicate 3x

      gsap.to(el, {
        x: direction * -contentWidth,
        duration: 10,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) =>
            ((parseFloat(x) % contentWidth) + contentWidth) % contentWidth * direction
          )
        }
      });
    };

    makeMarquee(top, 1);   // kiri
    makeMarquee(bot, -1);  // kanan
  }, []);


  return (
    <div className="w-full overflow-hidden py-8">
      {/* TOP */}
      <div ref={marqueeTopInnerRef} className="flex whitespace-nowrap">
        {[...brands_top, ...brands_top, ...brands_top].map((brand, index) => (
          <div
            key={index}
            className="flex items-center mx-16 flex-shrink-0"
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

      {/* BOTTOM */}
      <div ref={marqueeBotInnerRef} className="flex whitespace-nowrap mt-10">
        {[...brands_bottom, ...brands_bottom, ...brands_bottom].map((brand, index) => (
          <div
            key={index}
            className="flex items-center mx-16 flex-shrink-0"
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
