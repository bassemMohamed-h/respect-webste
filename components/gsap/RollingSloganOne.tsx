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

    const svg = wrap.querySelector("svg");
    if (!svg) return;

    // Treat these as "chars"
    const nodes = Array.from(svg.querySelectorAll<SVGGraphicsElement>("path, rect"));
    if (!nodes.length) return;

    // Sort left->right (like reading order)
    const sorted = nodes
      .map((el) => {
        const b = el.getBBox();
        return { el, x: b.x, y: b.y };
      })
      .sort((a, b) => (a.x - b.x) || (a.y - b.y))
      .map((i) => i.el);

    // apply class for CSS rules above
    sorted.forEach((el) => el.classList.add("svg-char"));

    // Depth based on *container* width (more stable than window)
    const w = root.getBoundingClientRect().width || window.innerWidth;
    const depth = -w / 8;
    const origin3d = `50% 50% ${depth}px`;

    // 3D setup like the demo
    gsap.set(root, { perspective: 700 });
    gsap.set(svg, { transformStyle: "preserve-3d" });

    // IMPORTANT: set 3D origin with z-depth on every unit
    gsap.set(sorted, {
      transformOrigin: origin3d,
      force3D: true,
    });

    // Build timeline: play on enter, reverse on leave back
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: root,
        start: "top 75%",
        toggleActions: "play none none reverse",
        invalidateOnRefresh: true,
      },
    });

    // closest to the demo feeling:
    // - constant speed ("none")
    // - flip in X from -90 to 0 (end readable)
    // (the demo goes -90 -> +90 because it loops infinitely)
    tl.fromTo(
      sorted,
      { rotationX: -90, opacity: 0.001 },
      {
        rotationX: 0,
        opacity: 1,
        duration: 0.9,
        ease: "none",
        stagger: 0.08,
      }
    );

    // refresh on resize so depth/origin stays correct
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      tl.scrollTrigger?.kill();
      tl.kill();
      sorted.forEach((el) => el.classList.remove("svg-char"));
    };
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