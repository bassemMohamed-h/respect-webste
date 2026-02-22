"use client";

import Image from "next/image";
import { EmblaCarousel } from "@/components/carousel/EmblaCarousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

type CaseStudyCard = {
  title: string;
  description: string;
  coverImage: string;
  slug: string;
};

type Props = {
  items: CaseStudyCard[];
};

export function CaseStudiesCarousel({ items }: Props) {
  const autoplay = useRef(
    Autoplay({
      delay: 4500,
      stopOnMouseEnter: false,
      stopOnInteraction: false,
    })
  );

  return (
    <EmblaCarousel
      items={items}
      options={{ loop: true, align: "start" }}
      plugins={[autoplay.current]}
      className="relative"
      viewportClassName="overflow-hidden"
      trackClassName="flex"
      // ✅ 2 per view on desktop
      slideClassName="min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] pr-6"
      showArrows
      prevLabel="Prev"
      nextLabel="Next"
      renderItem={(cs) => (
        <article className="relative h-[420px] overflow-hidden rounded-[40px] bg-neutral-900">
          <Image
            src={cs.coverImage}
            alt={cs.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* overlay like your screenshot */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/25 to-transparent" />

          {/* Text bottom-left */}
          <div className="absolute bottom-6 left-6 right-6 z-10">
            <h3 className="text-2xl font-semibold text-white">{cs.title}</h3>
            <p className="mt-2 max-w-md text-sm text-white/80 line-clamp-2">
              {cs.description}
            </p>
          </div>
        </article>
      )}
    />
  );
}