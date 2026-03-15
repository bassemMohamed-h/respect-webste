"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { RespectBrand } from "@/components/brand/RespectBrand";
import { useTextMaskRevealGroup } from "@/components/gsap/useTextMaskReveal";

gsap.registerPlugin(ScrollTrigger);

export function Story() {
  const sectionRef = useRef<HTMLElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const blockRef = useTextMaskRevealGroup<HTMLDivElement>();

  useGSAP(
    () => {
      const section = sectionRef.current;
      const brand = brandRef.current;

      if (!section || !brand) return;

      gsap.set(brand, {
        x: -1000,
        opacity: 1,
      });

      gsap.to(brand, {
        x: 0,
        opacity: 1,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 50%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="Story min-h-[100svh] bg-primary text-third flex flex-col items-center justify-center"
    >
      <div className="container-80 flex flex-col lg:flex-row items-center gap-12 ">
        <div ref={brandRef} className="brand will-change-transform">
          <RespectBrand />
        </div>

        <div ref={blockRef} className="desc lg:text-2xl text-md">
          <p>
            Started from a simple belief: Most brands don’t fail because of
            execution, but because of lack of
          </p>
          <span className="mr-2 block text-end lg:text-3xl text-md text-secondary font-bold">
            CLARITY..
          </span>
        </div>
      </div>
    </section>
  );
}