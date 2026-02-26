"use client";
import { RespectComesFirst } from "@/components/brand/RespectComesFirst";
import { useEffect, useRef } from "react";

export function Hero() {
    const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
  const overlay = overlayRef.current;
  if (!overlay) return;

  // Disable on touch devices / coarse pointers
  const mq = window.matchMedia("(pointer: coarse)");
  if (mq.matches) return;

  let raf = 0;
  let lastX = 0;
  let lastY = 0;

  const setMask = () => {
    raf = 0;
    const r = 140;
    const mask = `radial-gradient(${r}px at ${lastX}px ${lastY}px, transparent 0%, transparent 60%, black 75%)`;
    overlay.style.webkitMaskImage = mask;
    (overlay.style as any).maskImage = mask;
  };

  const onMove = (e: MouseEvent) => {
    const rect = overlay.getBoundingClientRect();
    lastX = e.clientX - rect.left;
    lastY = e.clientY - rect.top;

    if (!raf) raf = requestAnimationFrame(setMask);
  };

  const onLeave = () => {
    // reset to center when leaving hero
    const mask =
      "radial-gradient(140px at 50% 50%, transparent 0%, transparent 60%, black 75%)";
    overlay.style.webkitMaskImage = mask;
    (overlay.style as any).maskImage = mask;
  };

  // Listen on the hero section only (overlay covers it)
  overlay.addEventListener("mousemove", onMove);
  overlay.addEventListener("mouseleave", onLeave);

  return () => {
    overlay.removeEventListener("mousemove", onMove);
    overlay.removeEventListener("mouseleave", onLeave);
    if (raf) cancelAnimationFrame(raf);
  };
}, []);
  return (
    <section className="Hero container-80 min-h-[calc(100svh-var(--nav-h))] mt-[var(--nav-h)]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url("/images/heroBackground.png")` }}
      />

      {/* Blur overlay (with mask hole) */}
      <div
        ref={overlayRef}
        className="absolute inset-0 backdrop-blur-xl bg-third transition-[backdrop-filter] duration-300"
        style={{
          // default mask center (before moving mouse)
          WebkitMaskImage:
            "radial-gradient(140px at 50% 50%, transparent 0%, transparent 60%, black 75%)",
          maskImage:
            "radial-gradient(140px at 50% 50%, transparent 0%, transparent 60%, black 75%)",
        }}
      />
      <div className="relative z-10">
        <RespectComesFirst/>
        {/* Right: Paragraph */}
        <div className="mt-10 max-w-xl ml-auto mb-10">
          <p className="text-xl leading-6 text-black/70 ">
            We are a strategy and digital marketing agency.
            We build brands that clearly grow, are fully functional.
          </p>
        </div>
      </div>
    </section>
  );
}
