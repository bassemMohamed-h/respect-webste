"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type TeamMember = {
  imageSrc: string; // e.g. "/team/ahmed.png"
};

type Props = {
  items: TeamMember[];
};

export function TeamCarousel({ items }: Props) {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: true,
  },[
    Autoplay({
      delay: 2500,
      stopOnInteraction: false, // keep autoplay even after drag
      stopOnMouseEnter: true,   // optional: pause when hover
    }),
  ]);

  return (
    <section className="w-full min-w-0">
      <div className="overflow-hidden w-full select-none touch-pan-y cursor-grab active:cursor-grabbing"
            ref={emblaRef}>
        <div className="flex gap-6">
          {items.map((m,index) => (
            <div
              key={index}
               className="flex-[0_0_80%] sm:flex-[0_0_45%] md:flex-[0_0_28%] lg:flex-[0_0_22%]"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border">
                <Image
                  src={m.imageSrc}
                  alt="name"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 220px, 260px"
                  priority={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}