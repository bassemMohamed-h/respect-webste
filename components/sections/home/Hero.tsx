"use client";
import { RespectComesFirst } from "@/components/brand/RespectComesFirst";
import { useEffect, useRef } from "react";

export function Hero() {
    const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const onMove = (e: MouseEvent) => {
      const rect = overlay.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // “hole” radius (px)
      const r = 140;

      // Mask that reveals a circle around the cursor
      const mask = `radial-gradient(${r}px at ${x}px ${y}px, transparent 0%, transparent 60%, black 75%)`;
      (overlay.style as any).maskImage = mask;
      (overlay.style as any).webkitMaskImage = mask;
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
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
        className="absolute inset-0 backdrop-blur-xl bg-third"
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
