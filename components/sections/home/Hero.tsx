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
    <section className="Hero flex items-center justify-center container-80 min-h-[calc(100svh-var(--nav-h))] mt-[var(--nav-h)] mb-10">
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
      <div className="relative z-1 w-full">
        <RespectComesFirst/>
        {/* Right: Paragraph */}
        <div className=" max-w-[60%] font-semibold  flex flex-row gap-12 absolute bottom-0 right-0 z-1 text-nowrap  overflow-hidden">
          <p className="text-2xl  leading-8 text-[#575757] font-bold basis-3/4">
           A strategy and digital marketing agency <br/>building brands that grow.
          </p>
          <Link
            href="/contact"
            className=" rounded-br-[75px] bg-primary px-8 py-4 text-third text-xl basis-1/4"
          >
           Start Your Project
          </Link>

        </div>
      </div>
    </section>
  );
}
