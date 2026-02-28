"use client";

import { useRef } from "react";
import { SloganMark } from "@/components/brand/RespectWordmark";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function RollingSlogan() {
  const rootRef = useRef<HTMLDivElement>(null);
  const svgWrapRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      const wrap = svgWrapRef.current;
      if (!root || !wrap) return;

      const paths = wrap.querySelectorAll("path, rect"); // your SVG has paths + rects

      // Make SVG transforms behave predictably
      gsap.set(paths, { transformBox: "fill-box", transformOrigin: "50% 50%" });
      gsap.set(wrap, { transformOrigin: "50% 50%", willChange: "transform" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      // 1) overall tilt (small)
      tl.fromTo(
        wrap,
        { rotateZ: -100, rotateX: 18, rotateY: -10, y: 20, opacity: 0 },
        { rotateZ: 0, rotateX: 0, rotateY: 0, y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );

      // 2) rolling effect: stagger paths so they “twist in”
      tl.fromTo(
        paths,
        {
          opacity: 0,
          y: -40,
          rotateZ: -25,
          rotateY: -60,
          skewX: -15,
          scaleY: 0.7,
        },
        {
          opacity: 1,
          y: 0,
          rotateZ: 0,
          rotateY: 0,
          skewX: 0,
          scaleY: 1,
          duration: 1.5,
          ease: "power3.out",
          stagger: { each: 0.01, from: "center" },
        },
        "-=0.35"
      );
    },
    { scope: rootRef }
  );

  return (
    <section ref={rootRef} className="flex items-center justify-center overflow-hidden">
      <div ref={svgWrapRef} className="w-full px-6">
        <SloganMark />
      </div>
    </section>
  );
}