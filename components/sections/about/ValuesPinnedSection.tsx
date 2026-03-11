"use client";

import { ReactNode, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

type ValueItem = {
  id: string;
  title: string;
  description: string;
  Svg: ReactNode;
  drawSelector?: string;
};

type ValuesPinnedSectionProps = {
  values: ValueItem[];
  className?: string;
};

export function ValuesPinnedSection({
  values,
  className = "",
}: ValuesPinnedSectionProps) {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root || values.length === 0) return;

      const slides = gsap.utils.toArray<HTMLElement>(".value-slide", root);

      // initial states
      slides.forEach((slide, index) => {
        const svgWrap = slide.querySelector<HTMLElement>(".value-svg");
        const title = slide.querySelector<HTMLElement>(".value-title");
        const desc = slide.querySelector<HTMLElement>(".value-desc");
        const drawSelector = slide.dataset.drawSelector || "path";
        const drawableElements = slide.querySelectorAll(drawSelector);

        gsap.set(slide, {
          autoAlpha: index === 0 ? 1 : 0,
        });

        gsap.set(svgWrap, {
          xPercent: index === 0 ? 0 : 18,
          opacity: index === 0 ? 1 : 0,
        });

        gsap.set(title, {
          yPercent: 100,
          opacity: 1,
        });

        gsap.set(desc, {
          yPercent: 100,
          opacity: 1,
        });

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
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: `+=${values.length * 1800}`,
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      slides.forEach((slide, index) => {
        const svgWrap = slide.querySelector<HTMLElement>(".value-svg");
        const title = slide.querySelector<HTMLElement>(".value-title");
        const desc = slide.querySelector<HTMLElement>(".value-desc");
        const drawSelector = slide.dataset.drawSelector || "path";
        const drawableElements = slide.querySelectorAll(drawSelector);

        // incoming slide
        if (index !== 0) {
          tl.set(slide, { autoAlpha: 1 });
        }

        tl.to(
          svgWrap,
          {
            xPercent: 0,
            opacity: 1,
            duration: 0.45,
            ease: "power2.out",
          },
          ">"
        );

        if (drawableElements.length > 0) {
          tl.to(
            drawableElements,
            {
              strokeDashoffset: 0,
              duration: 0.9,
              ease: "none",
              stagger: 0.05,
            },
            ">"
          );
        }

        tl.to(
          title,
          {
            yPercent: 0,
            duration: 0.35,
            ease: "power2.out",
          },
          ">-0.05"
        );

        tl.to(
          desc,
          {
            yPercent: 0,
            duration: 0.3,
            ease: "power2.out",
          },
          "-=0.18"
        );

        // small hold
        tl.to({}, { duration: 1 });

        // outgoing slide except last one
        if (index < slides.length - 1) {
          tl.to(
            [title, desc],
            {
              yPercent: -110,
              duration: 0.28,
              ease: "power2.in",
              stagger: 0.04,
            },
            ">"
          );

          tl.to(
            svgWrap,
            {
              xPercent: -16,
              opacity: 0,
              duration: 0.35,
              ease: "power2.inOut",
            },
            "-=0.15"
          );

          tl.set(slide, { autoAlpha: 0 });
        }
      });

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    },
    { scope: rootRef, dependencies: [values] }
  );

  return (
    <section
      ref={rootRef}
      className={`relative min-h-screen overflow-hidden  ${className}`}
    >
      <div className="relative h-screen w-full bg-primary">
        {values.map((item) => (
          <div
            key={item.id}
            className="value-slide absolute inset-0 flex items-center justify-center"
            data-draw-selector={item.drawSelector || "path"}
          >
            <div className="relative flex flex-col items-center justify-center">
              <div className="value-svg flex items-center justify-center">
                {item.Svg}
              </div>

              <div className="relative -translate-y-8 text-center text-third">
                <div className="overflow-hidden">
                  <h2 className="value-title text-7xl font-bold md:text-8xl lg:text-9xl">
                    {item.title}
                  </h2>
                </div>

                <div className="mt-10 overflow-hidden ">
                  <p className="value-desc mx-auto max-w-4xl text-base font-semibold leading-relaxed md:text-lg lg:text-[26px]">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}