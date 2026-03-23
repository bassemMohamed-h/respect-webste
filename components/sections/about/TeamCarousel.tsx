"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type TeamMember = {
  imageSrc: string; 
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
            ref={emblaRef}
           >
        <div className="flex gap-8 px-8">
          {items.map((m,index) => (
            <div
              key={index}
               className="flex-[0_0_50%] sm:flex-[0_0_45%] md:flex-[0_0_28%] lg:flex-[0_0_25%]"
            >
              <div className=" overflow-hidden">
                <Image
                  src={m.imageSrc}
                  alt="name"
                  width={1200}
                  height={800}
                  className=" h-auto w-auto mx-auto"
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