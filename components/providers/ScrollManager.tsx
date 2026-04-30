"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollManager() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const rafId = requestAnimationFrame(() => {
      try {
        ScrollTrigger.clearScrollMemory("manual");

        if (!window.location.hash) {
          window.scrollTo(0, 0);
        }

        ScrollTrigger.refresh();
      } catch (error) {
        console.error("ScrollManager GSAP error:", error);
      }
    });

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [pathname]);

  return null;
}