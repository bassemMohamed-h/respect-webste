"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

type Options = {
  start?: string;
  duration?: number;
  ease?: string;
  stagger?: number;
  reverse?: boolean;
  selector?: string; // what children to animate
};

export function useTextMaskRevealGroup<T extends HTMLElement>(options: Options = {}) {
  const ref = useRef<T | null>(null);

  useGSAP(() => {
    const root = ref.current;
    if (!root) return;

    const {
      start = "top 80%",
      duration = 0.8,
      ease = "power3.out",
      stagger = 0.12,
      reverse = true,
      selector = "p, h1, h2, h3, span, li",
    } = options;

    const items = Array.from(root.querySelectorAll<HTMLElement>(selector));
    if (!items.length) return;

    gsap.set(items, { clipPath: "inset(0 0 100% 0)" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: root,
        start,
        toggleActions: reverse ? "play none none reverse" : "play none none none",
      },
    });

    tl.to(items, {
      clipPath: "inset(0 0 0% 0)",
      duration,
      ease,
      stagger,
    });
  });

  return ref;
}