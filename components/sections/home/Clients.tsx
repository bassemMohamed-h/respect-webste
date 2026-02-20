"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

const clientLogos = [
  "/images/clients/adri.png",
  "/images/clients/alhazem.png",
  "/images/clients/amas.png",
  "/images/clients/adri.png",
  "/images/clients/adri.png",
   "/images/clients/adri.png",
  "/images/clients/alhazem.png",
  "/images/clients/amas.png",
  "/images/clients/adri.png",
  "/images/clients/adri.png",
  // add more...
];

export function Clients() {
   const autoplay = useRef(
    Autoplay({
      delay: 1000,
      stopOnMouseEnter: true,
      stopOnInteraction: false,
    })
  )
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay.current]);
  const prev = () => emblaApi?.scrollPrev();
  const next = () => emblaApi?.scrollNext();

  return (
    <section className="min-h-[calc(100svh-var(--nav-h))] px-6">
      <div className="mx-auto flex min-h-[calc(100svh-var(--nav-h))] max-w-6xl flex-col items-center justify-center gap-20">
        {/* carousel */}
        <div className="w-full overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {clientLogos.map((src, i) => (
              <div
                key={`${src}-${i}`}
                className="flex-[0_0_80%] px-4 sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_20%]"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-primary/40 bg-background">
                  <Image
                    src={src}
                    alt="Client logo"
                    fill
                    className="object-contain p-8"
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 33vw, 20vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* controls */}
        <div className="flex items-center gap-6">
          <button
            onClick={prev}
            className="rounded-bl-[50px] bg-primary/70 px-10 py-4 font-medium text-primary-foreground hover:bg-primary min-w-[150px]"
          >
            Previous
          </button>
          <button
            onClick={next}
            className="rounded-br-[50px] bg-primary/70 px-10 py-4 font-medium text-primary-foreground hover:bg-primary min-w-[150px]"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
