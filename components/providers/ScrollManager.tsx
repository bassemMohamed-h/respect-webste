"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollManager() {
  const pathname = usePathname();

  useEffect(() => {
    // Disable browser auto-restoring old scroll positions
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Clear GSAP's remembered scroll values
    ScrollTrigger.clearScrollMemory("manual");

    // On full reload / route render, start at the top
    window.scrollTo(0, 0);

    // After the DOM settles, force ScrollTrigger to recalculate
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
  }, [pathname]);

  return null;
}