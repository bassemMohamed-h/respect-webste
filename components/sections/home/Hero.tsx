"use client";
import { RespectComesFirst } from "@/components/brand/RespectComesFirst";
import Link from "next/link";
import { useEffect, useRef } from "react";

type MaskedStyle = CSSStyleDeclaration & {
  webkitMaskImage: string;
};

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
      overlay.style.maskImage = mask;
      (overlay.style as MaskedStyle).webkitMaskImage = mask;
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <section className="Hero container-80 min-h-[calc(100svh-var(--nav-h))] mt-[var(--nav-h)] mb-10">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url("/images/heroBackground.png")` }}
      />

      {/* Blur overlay (with mask hole) */}
      <div
        ref={overlayRef}
        className="absolute inset-0 backdrop-blur-xl bg-third"
      />
      <div className="relative z-10">
        <RespectComesFirst/>
        {/* Right: Paragraph */}
        <div className=" max-w-3xl ml-auto font-semibold  flex items-end absolute bottom-0 right-0 z-20 ">
          <p className="text-3xl text-black text-center leading-8 ">
            We are a strategy and digital marketing agency.
            We build brands that clearly grow, are fully functional.
          </p>
          <Link
            href="/contact"
            className=" rounded-br-[50px] bg-primary px-12 py-6 text-third text-2xl "
          >
            {"Let's talk"}
          </Link>

        </div>
      </div>
    </section>
  );
}
