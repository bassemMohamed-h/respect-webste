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
  import Autoplay from 'embla-carousel-autoplay'
  import Image from "next/image";
  import { EmblaCarousel } from '@/components/carousel/EmblaCarousel';
  import type { EmblaCarouselType } from "embla-carousel";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { useGSAP } from "@gsap/react";
  export function LatestWorkCarousel({projects}: LatestWorkCarouselProps) {
    const autoplay = useRef(
    Autoplay({
      delay: 4000,
      stopOnMouseEnter: false,
      stopOnInteraction: false,
    })
  )
  const pinRef = useRef<HTMLElement>(null);
  const emblaApiRef = useRef<EmblaCarouselType | null>(null);
  const lastIndexRef = useRef(0);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
  const api = emblaApiRef.current;
  const pinEl = pinRef.current;
  if (!api || !pinEl) return;

  const slideCount = api.slideNodes().length;
  if (slideCount <= 1) return;

  lastIndexRef.current = api.selectedScrollSnap();

  const st = ScrollTrigger.create({
    trigger: pinEl,
    start: "top top",
    end: `+=${slideCount * 100}%`,
    pin: true,
    scrub: 1,
    snap: 1 / (slideCount - 1),
    invalidateOnRefresh: true,
    onUpdate: (self) => {
      const nextIndex = Math.round(self.progress * (slideCount - 1));
      if (nextIndex === lastIndexRef.current) return;
      lastIndexRef.current = nextIndex;
      api.scrollTo(nextIndex);
    },
  });

  return () => st.kill();
}, []);
    return (
      <section className="LatestWork relative  min-h-[100svh] bg-primary text-third rounded-br-lg" ref={pinRef}>
        
        <EmblaCarousel
        
          items={projects}
          options={{ loop: true }}
          className="LatestWork relative min-h-[100svh] bg-primary text-third rounded-br-lg"
          slideClassName="min-w-0 flex-[0_0_100%]"
          showArrows
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
      </section>
    )
  }