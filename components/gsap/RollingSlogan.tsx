"use client";

import { useRef } from "react";
import { SloganMark } from "@/components/brand/RespectWordmark";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function SloganSlideIn() {
  const rootRef = useRef<HTMLDivElement>(null);
  const svgWrapRef = useRef<HTMLDivElement>(null);

useGSAP(() => {
  const root = rootRef.current;
  const wrap = svgWrapRef.current;
  if (!root || !wrap) return;

  const svg = wrap.querySelector("svg");
  if (!svg) return;

  const line1 = svg.querySelector(".line1");
  const line2 = svg.querySelector(".line2");
  if (!line1 || !line2) return;

  // start outside
  gsap.set(line1, { xPercent: -120, opacity: 1 });
  gsap.set(line2, { xPercent: 120, opacity: 1 });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: root,
      start: "top 75%",
      toggleActions: "play none none reverse",
    },
  });

  tl.to(line1, { xPercent: 0, duration: 3, ease: "power3.out" })
    .to(line2, { xPercent: 0, duration: 3, ease: "power3.out" }, "-=3.0");
}, { scope: rootRef });

  return (
    <section ref={rootRef} className="overflow-hidden">
      <div ref={svgWrapRef} className="mx-auto w-full px-6">
        <SloganMark />
      </div>
    </section>
  );
}