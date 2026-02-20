"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  /** px from top before we start hiding (avoids jitter near 0) */
  threshold?: number;
};

export default function NavbarShell({ children, threshold = 8 }: Props) {
  const [hidden, setHidden] = useState(false);

  const lastYRef = useRef(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    lastYRef.current = window.scrollY;

    const onScroll = () => {
      if (tickingRef.current) return;

      tickingRef.current = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const lastY = lastYRef.current;
        const delta = y - lastY;

        // ignore tiny scroll changes (trackpads)
        if (Math.abs(delta) > 2) {
          const scrollingDown = delta > 0;
          const pastTop = y > threshold;

          // hide only if scrolling down AND not near top
          setHidden(scrollingDown && pastTop);
        }

        lastYRef.current = y;
        tickingRef.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return (
    <div
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-transform duration-300 ease-out will-change-transform
        ${hidden ? "-translate-y-full" : "translate-y-0"}
        `}
    >
      {children}
    </div>
  );
}