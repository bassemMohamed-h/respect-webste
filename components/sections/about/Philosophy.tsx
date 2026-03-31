"use client";

import { useRef } from "react";
import { Impact } from "@/components/brand/Impact";
import { Simplicity } from "@/components/brand/Simplicity";
import { Truth } from "@/components/brand/Truth";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const philosophyContent = [
    {
      title:
        "We build long-term relationships based on transparency, reliability, and consistent results.",
      svg: <Truth />,
    },
    {
      title:
        "We simplify complexity to create clear and effective digital experiences.",
      svg: <Simplicity />,
    },
    {
      title:
        "We focus on creating real impact that drives growth and delivers meaningful results.",
      svg: <Impact />,
    },
  ];

    useGSAP(() => {
        const section = sectionRef.current;
        const track = trackRef.current;
        if (!section || !track) return;

        const slides = gsap.utils.toArray<HTMLElement>(".philosophy-slide");

        const horizontalTween = gsap.to(track, {
            xPercent: -100 * (slides.length - 1),
            ease: "none",
            scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${window.innerWidth * (slides.length - 1)}`,
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
            },
        });

        slides.forEach((slide) => {
            const text = slide.querySelector(".philosophy-text");
            const svg = slide.querySelector(".philosophy-svg");

            if (!text || !svg) return;

            gsap.fromTo(
            [svg, text],
            { y: 80, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                trigger: slide,
                start: "left center",
                containerAnimation: horizontalTween,
                 toggleActions: "play none none reverse",
                },
            }
            );
        });
    }, { scope: sectionRef });
  return (
    <section
      ref={sectionRef}
      className="Philosophy bg-primary text-third"
    >
      <div className="relative h-screen overflow-hidden">
       <div
            ref={trackRef}
            className="flex h-full"
        >
          {philosophyContent.map((item, index) => (
  <div
    key={index}
    className="philosophy-slide flex h-screen w-screen shrink-0 flex-col items-center justify-center px-6"
  >
    <div className="philosophy-svg mb-8">
      {item.svg}
    </div>

    <div className="max-w-[700px]">
      <p className="philosophy-text text-center text-2xl leading-tight md:text-4xl lg:text-[48px]">
        {item.title}
      </p>
    </div>
  </div>
))}
        </div>
      </div>
    </section>
  );
}