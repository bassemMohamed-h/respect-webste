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
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      const svgWrapper = svgWrapperRef.current;
      const text = textRef.current;

      if (!root || !svgWrapper || !text) return;

      // initial states
      gsap.set(svgWrapper, {
        opacity: 0,
        clipPath: "inset(0 0 100% 0)",
        scale: 0.98,
        transformOrigin: "50% 50%",
      });

      gsap.set(text, { y: 40, opacity: 0 });

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
        text,
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
        },
        "-=0.7"
      );
    },
    { scope: rootRef }
  );

  return (
   <div
  ref={rootRef}
  className={`flex items-center justify-center flex-col min-h-[100svh] container-80 ${className}`}
  >
    <div className=" flex flex-col items-center">
      <div
        ref={svgWrapperRef}
        className="will-change-transform [will-change:clip-path] w-[80%] lg:w-[100%]"
      >
        {Svg}
      </div>

      <div
        ref={textRef}
        className="text-center"
      >
        <h3 className={`text-5xl lg:text-8xl font-bold text-primary -translate-y-1/2 ${title.className}`}>
          {title.name}
        </h3>
      </div>
    </div>
    {description && (
          <p className={`font-semibold text-black text-center ${description.className}`}>
            {description.name}
          </p>
        )}
</div>
  );
}