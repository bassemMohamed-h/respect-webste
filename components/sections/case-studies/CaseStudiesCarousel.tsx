"use client";

import { EmblaCarousel } from "@/components/carousel/EmblaCarousel";
import { useEffect, useRef, useState } from "react";
import type { EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type CaseStudyCard = {
  title: string;
  description: string;
  coverImage: string;
  slug: string;
};

type Props = {
  items: CaseStudyCard[];
  onSelect?: (slug: string) => void;
  baseHref?: string;
};

export function CaseStudiesCarousel({
  items,
  onSelect,
  baseHref = "/case-studies",
}: Props) {
  const autoplay = useRef(
    Autoplay({
      delay: 4500,
      stopOnMouseEnter: false,
      stopOnInteraction: false,
    })
  );

  const [emblaApi, setEmblaApi] = useState<EmblaCarouselType | null>(null);
  const wrapperRef = useRef<HTMLElement | null>(null);

  // ✅ helper: how many cards per "page"
  const getPerStep = () => (window.matchMedia("(min-width: 768px)").matches ? 2 : 1);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el || !emblaApi) return;

    const build = () => {
      const perStep = 1;
      const maxStep = Math.max(0, items.length - 1);

      // if only one step, no pin needed
      if (maxStep === 0) return null;

      // start at first "page"
      emblaApi.scrollTo(0, true);

      let lastStep = -1;

      const st = ScrollTrigger.create({
        trigger: el,
        start: "top top",
        end: () => `+=${window.innerHeight * maxStep}`, // ✅ 1 screen scroll per step
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,

        snap: {
          snapTo: (value) => {
            const step = Math.round(value * maxStep);
            return step / maxStep;
          },
          duration: 0.25,
          ease: "power2.out",
        },

        onUpdate: (self) => {
          const step = Math.round(self.progress * maxStep);
          if (step === lastStep) return;
          lastStep = step;

          autoplay.current.stop(); // user is scrolling: stop autoplay

          // ✅ each step moves by 2 on desktop, 1 on mobile
          const targetSlide = step * perStep;
          emblaApi.scrollTo(targetSlide, true);
        },
      });

      return st;
    };

    // build once + rebuild on refresh/resize
    let st: ScrollTrigger | null = build();

    const onResize = () => {
      st?.kill();
      st = build();
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      st?.kill();
    };
  }, [emblaApi, items.length]);

 return (
  <section
    ref={(node) => { wrapperRef.current = node; }}
    className="relative h-[100svh] bg-primary"
  >
    <div className="mx-auto w-full container-80 px-6 h-[100svh] flex items-center">
      <EmblaCarousel
        setApi={setEmblaApi}
        items={items}
        options={{ loop: false, align: "start" }}
        plugins={[autoplay.current]}
        className="relative w-full"
        viewportClassName="overflow-hidden w-full"
        trackClassName="flex"
        slideClassName="min-w-0 flex-[0_0_80%] pr-15"
        showArrows={false}
        renderItem={(cs) => (
          <Link
            href={`${baseHref}#${cs.slug}`}
            scroll={false}
            onClick={(e) => {
              if (!onSelect) return;
              e.preventDefault();
              autoplay.current.stop();
              onSelect(cs.slug);
              window.history.pushState(null, "", `#${cs.slug}`);
              document.getElementById("case-study-details")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="block w-full"
          >
            <article className="relative h-[70vh] w-full overflow-hidden rounded-br-[240px] rounded-t-[7px] rounded-bl-[7px] bg-neutral-900">
              <Image
                src={cs.coverImage}
                alt={cs.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1100px"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <h3 className="text-4xl font-bold text-white">{cs.title}</h3>
                <p className="mt-2  text-3xl text-third line-clamp-2">
                  {cs.description}
                </p>
              </div>
            </article>
          </Link>
        )}
      />
    </div>
  </section>
);
}