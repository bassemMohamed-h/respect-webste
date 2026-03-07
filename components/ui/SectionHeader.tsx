"use client";

import { useRef } from "react";
import type { ReactNode,  } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

type SectionHeaderText = {
  name:string,
  className?:string
}

type SectionHeaderProps = {
  title:SectionHeaderText;
  description?: SectionHeaderText;
  Svg: ReactNode;
  drawSelector?: string; // default: path
  className?: string;
};

export function SectionHeader({
  title,
  description,
  Svg,
  drawSelector = "path",
  className
}: SectionHeaderProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const svgWrapperRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      const svgWrapper = svgWrapperRef.current;
      const titleEl = titleRef.current;
      const descEl = descRef.current;

      if (!root || !svgWrapper || !titleEl) return;

      // initial states
      gsap.set(svgWrapper, {
        opacity: 0,
        clipPath: "inset(0 0 100% 0)",
        scale: 0.98,
        transformOrigin: "50% 50%",
      });

      gsap.set(titleEl, { y: 40, opacity: 0 });

      if (descEl) {
        gsap.set(descEl, { y: 20, opacity: 0 });
      }

      // optional inner stroke draw animation
      const drawableElements = svgWrapper.querySelectorAll(drawSelector);

      drawableElements.forEach((el) => {
        const shape = el as SVGGeometryElement;

        if (typeof shape.getTotalLength !== "function") return;

        const length = shape.getTotalLength();
        if (!length) return;

        gsap.set(shape, {
          strokeDasharray: length,
          strokeDashoffset: length,
          opacity: 1,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 30%",
          toggleActions: "play none none reverse",
        },
      });

      // reveal svg wrapper
      tl.to(svgWrapper, {
        opacity: 1,
        clipPath: "inset(0 0 0% 0)",
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
      });

      // draw inner strokes if possible
      if (drawableElements.length > 0) {
        tl.to(
          drawableElements,
          {
            strokeDashoffset: 0,
            duration: 1.4,
            ease: "power2.out",
            stagger: 0.06,
          },
          0.1
        );
      }

      // title
      tl.to(
        titleEl,
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
        },
        "-=0.7"
      );

      // description
      if (descEl) {
        tl.to(
          descEl,
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.55"
        );
      }
    },
    { scope: rootRef }
  );

  return (
    <div
      ref={rootRef}
      className= {`relative flex min-h-[100svh] items-center justify-center ${className}`} 
    >
      <div
        ref={svgWrapperRef}
        className= "will-change-transform [will-change:clip-path]"
      >
        {Svg}
      </div>

      <h3
        ref={titleRef}
        className={`absolute bottom-[35%] text-9xl font-bold text-primary ${title.className}`}
      >
        {title.name}
      </h3>

      {description && (
        <p 
          ref={descRef} 
          className= {`absolute bottom-20 font-semibold text-black text-[32px] ${description.className}`}
        >
          {description.name}
        </p>
      )}
    </div>
  );
}