"use client";

import { useRef } from "react";
import { SloganMark } from "@/components/brand/RespectWordmark";
import { RespectThePastMob } from "../brand/RespectThePastMob";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function SloganSlideIn() {
  const rootRef = useRef<HTMLDivElement>(null);
  const desktopWrapRef = useRef<HTMLDivElement>(null);
  const mobileWrapRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const root = rootRef.current;
    if (!root) return;

    const mm = gsap.matchMedia();

    const animateSvg = (wrap: HTMLDivElement | null) => {
      if (!wrap) return;

      const svg = wrap.querySelector("svg");
      if (!svg) return;

      const line1 = svg.querySelector(".line1");
      const line2 = svg.querySelector(".line2");
      if (!line1 || !line2) return;

      gsap.set(line1, { xPercent: -120, opacity: 1 });
      gsap.set(line2, { xPercent: 120, opacity: 1 });

      gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      })
      .to(line1, { xPercent: 0, duration: 3, ease: "power3.out" })
      .to(line2, { xPercent: 0, duration: 3, ease: "power3.out" }, "-=3");
    };

    mm.add("(min-width: 1024px)", () => {
      animateSvg(desktopWrapRef.current);
    });

    mm.add("(max-width: 1023px)", () => {
      animateSvg(mobileWrapRef.current);
    });

    return () => mm.revert();
  }, { scope: rootRef });

  return (
    <section ref={rootRef} className="overflow-hidden">
      <div ref={desktopWrapRef} className="mx-auto w-full px-6 hidden lg:block">
        <SloganMark />
      </div>

      <div ref={mobileWrapRef} className="mx-auto w-full px-6 lg:hidden">
        <RespectThePastMob />
      </div>
    </section>
  );
}
