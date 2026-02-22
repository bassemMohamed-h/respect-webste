"use client";
type LatestWorkCarouselProps = {
  projects: {
    title: string;
    description: string;
    coverImage: string;
    slug: string;
  }[];
};

import { useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from "next/image";
import { EmblaCarousel } from '@/components/carousel/EmblaCarousel';
export function LatestWorkCarousel({projects}: LatestWorkCarouselProps) {
  const autoplay = useRef(
  Autoplay({
    delay: 4000,
    stopOnMouseEnter: false,
    stopOnInteraction: false,
  })
)

const [emblaRef, emblaApi] = useEmblaCarousel(
  { loop: true },
  [autoplay.current]
)

  const goToPrev = () => emblaApi?.scrollPrev()
  const goToNext = () => emblaApi?.scrollNext()
  return (
    <section className="LatestWork relative  min-h-[100svh] bg-primary text-third rounded-br-lg">
      <EmblaCarousel
        items={projects}
        options={{ loop: true }}
        plugins={[autoplay.current]}
        className="LatestWork relative min-h-[100svh] bg-primary text-third rounded-br-lg"
        slideClassName="min-w-0 flex-[0_0_100%]"
        showArrows
        prevLabel="Scroll to prev"
        nextLabel="Scroll to next"
        renderItem={(project) => (
          <div className="relative min-h-[100svh] rounded-br-lg">
            <Image
              alt={project.title}
              src={project.coverImage}
              fill
              className="object-cover rounded-br-lg"
              sizes="(max-width: 768px) 100vw, 60vw"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 z-10">
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-2 max-w-sm text-sm text-white/80">
                {project.description}
              </p>
            </div>
          </div>
        )}
      />

      <button   className="embla__prev absolute top-1/2 left-6 z-10 -translate-y-1/2 rounded-full bg-white/20 p-3" 
                onClick={goToPrev}>
        Scroll to prev
      </button>
      <button className="embla__next absolute top-1/2 right-6 z-10 -translate-y-1/2 rounded-full bg-white/20 p-3" onClick={goToNext}>
        Scroll to next
      </button>
    </section>
  )
}