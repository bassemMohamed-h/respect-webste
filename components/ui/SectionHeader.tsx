"use client";

import { useRef } from "react";
import { OurScribble } from "@/components/brand/OurScribble";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

type SectionHeaderProps = {
  title: string;
  description?: string;
};

export function SectionHeader({ title, description }: SectionHeaderProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const scribbleRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      if (!rootRef.current) return;

      // 1) Prepare initial states
      gsap.set(titleRef.current, { y: 40, opacity: 0 });
      if (descRef.current) gsap.set(descRef.current, { y: 20, opacity: 0 });

      // 2) (Optional) "Draw" the scribble if it is stroke-based paths
      // We’ll try to find svg paths inside the scribble.
      const paths = scribbleRef.current?.querySelectorAll("path");
      if (paths && paths.length) {
        paths.forEach((p) => {
          const len = (p as SVGPathElement).getTotalLength?.();
          if (!len) return;
          gsap.set(p, {
            strokeDasharray: len,
            strokeDashoffset: len,
            opacity: 1,
          });
        });
      }

      // 3) Timeline with ScrollTrigger (reusable pattern)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

     // Scribble: from hidden -> visible (timeline owns both states)
    tl.fromTo(
      scribbleRef.current,
      {
        opacity: 1,
        clipPath: "inset(0 0 100% 0)",
        transformOrigin: "50% 50%",
        scale: 0.98,
      },
      {
        clipPath: "inset(0 0 0% 0)",
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
      }
    );

       // Then: title from bottom to place
      tl.to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration:1,
        ease: "power2.out",
      }, "-=0.5");

      // Then: description (if exists)
      if (descRef.current) {
        tl.to(
          descRef.current,
          { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
          "-=.75"
        );
      }
    },
    { scope: rootRef }
  );

  return (
    <div ref={rootRef} className="relative min-h-[100svh] flex justify-center items-center">
      <div ref={scribbleRef} className="will-change-transform [will-change:clip-path">
        <OurScribble className="text-secondary" />
      </div>

      <h3 ref={titleRef} className="absolute text-primary text-[155px] bottom-[30%] font-bold">
        {title}
      </h3>

      {description && (
        <p ref={descRef} className="absolute bottom-20 text-primary text-xl">
          {description}
        </p>
      )}
    </div>
  );
}