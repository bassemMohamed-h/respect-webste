"use client";

import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import { EmblaCarousel } from "@/components/carousel/EmblaCarousel";

type ServiceItem = {
  slug: string;
  title: string;
  heroImg?: string;
  href?: string; // we computed this in contentlayer as /services#slug
};

type Props = {
  services: ServiceItem[];
  activeSlug?: string;
  onSelect?: (slug: string) => void;
  baseHref?: string; // default "/services"
};
gsap.registerPlugin(ScrollTrigger);

export function Services({ services, activeSlug, onSelect, baseHref = "/services" }: Props) {
  const gridRef = useRef<HTMLDivElement>(null);
  const [emblaApi, setEmblaApi] = useState<EmblaCarouselType | null>(null);
  const mobileWrapperRef = useRef<HTMLElement | null>(null);
  const mobileSTRef = useRef<ScrollTrigger | null>(null);
  const mobilePinRef = useRef<HTMLDivElement>(null);

  const autoplay = useRef(
    Autoplay({
      delay: 2000,
      stopOnMouseEnter: false,
      stopOnInteraction: false,
    })
  );
  useGSAP(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const cards = gsap.utils.toArray<HTMLElement>(".service-card", grid);
      if (!cards.length) return;

      gsap.set(cards, { y: 120, opacity: 0 });

      gsap.to(cards, {
        y: 0,
        opacity: 1,
        ease: "none",
        stagger: 0.35,
        scrollTrigger: {
          trigger: grid,
          start: "top 85%",
          end: "top 25%",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => mm.revert();
  }, { scope: gridRef });

  useEffect(() => {
    const triggerEl = mobileWrapperRef.current;
    const pinEl = mobilePinRef.current;
    if (!triggerEl || !pinEl || !emblaApi) return;

    const mm = gsap.matchMedia();

    mm.add("(max-width: 1023px)", () => {
      const maxStep = Math.max(0, services.length - 1);
      if (maxStep === 0) return;

      emblaApi.scrollTo(0, true);
      let lastStep = -1;

      mobileSTRef.current?.kill();
      mobileSTRef.current = ScrollTrigger.create({
        trigger: triggerEl,
        pin: pinEl,
        start: "top top",
        end: () => "bottom bottom",
        pinSpacing: false,
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
          autoplay.current.stop();
          emblaApi.scrollTo(step, true);
        },
      });

      return () => {
        mobileSTRef.current?.kill();
        mobileSTRef.current = null;
      };
    });

    return () => {
      mobileSTRef.current?.kill();
      mobileSTRef.current = null;
      mm.revert();
    };
  }, [emblaApi, services.length]);
  if (!services?.length) return null;
  return (
    <>
      <section className="hidden lg:flex items-end">
        <div ref={gridRef} className="grid w-full grid-cols-5 overflow-hidden"
        >
          {services.map((service, index) => (
            <Link   
              key={service.slug}
              href={service.href ?? `${baseHref}#${service.slug}`}
              scroll={false}
              onClick={(e) => {
                if (!onSelect) return; // Home page: normal navigation
                e.preventDefault(); // stop hash jump/default nav
                onSelect(service.slug);
                // update URL hash (so sharing/back button works)
                window.history.pushState(null, "", `#${service.slug}`);
                // smooth scroll to details section
                document.getElementById("service-details")?.scrollIntoView({ behavior: "smooth" });
              }}
              className={ `service-card block group`}
            >
              <div
                className={
                  `relative min-h-[100svh] overflow-hidden rounded-br-[150px]  
                    transition-transform duration-300  
                    ${index % 2 === 0 ? "bg-primary" : "bg-[#5DA047]" }`
                  }
              >
                {/* image */}
                <div className="absolute top-5 right-5"
                  >
                  <Image
                    src={`${service.heroImg}`}
                    alt={service.title}
                    width={1200}
                    height={800}
                    className={`h-[auto] w-auto max-w-full transition-opacity duration-100 group-hover:opacity-100
                                ${activeSlug === service.slug ? "opacity-100" : "opacity-30"}`
                              }
                  />
                  {/* Overlay image */}
                  <div
                    className={`absolute inset-0 pointer-events-none transition-opacity duration-100
                      ${index % 2 === 0 ? "bg-primary/30" : "bg-[#5DA047]/30"}
                      group-hover:opacity-0
                      ${activeSlug === service.slug ? "opacity-0" : "opacity-100"}
                    `}
                  />
                </div>
                {/* number */}
                <div className="absolute bottom-5 right-6 text-9xl font-bold text-third">
                  {index + 1}
                </div>
                {/* vertical label */}
                <div className="absolute inset-0">
                  <div className="absolute bottom-5 left-2 origin-bottom-left -rotate-90">
                    <p className="translate-y-full text-[60px] font-bold leading-none text-third whitespace-nowrap">
                      {service.title}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      {/* Mobile View */}
      <section
        ref={mobileWrapperRef}
        className="relative lg:hidden"
        style={{ height: `${services.length * 100}svh` }}
      >
          <div 
           ref={mobilePinRef}
           className="container-80 mx-auto flex h-[100svh] items-center px-6"
          >
            <EmblaCarousel
              setApi={setEmblaApi}
              items={services}
              options={{ loop: false, align: "start" }}
              plugins={[autoplay.current]}
              className="relative w-full"
              viewportClassName="overflow-hidden w-full"
              trackClassName="flex"
              slideClassName="min-w-0 flex-[0_0_70%] pr-6"
              showArrows={false}
              renderItem={(service, index) => (
                <Link
                  href={service.href ?? `${baseHref}#${service.slug}`}
                  scroll={false}
                  onClick={(e) => {
                    if (!onSelect) return;

                    e.preventDefault();

                    autoplay.current.stop();

                    // release pinned DOM before React/state/scroll changes
                    mobileSTRef.current?.kill();
                    mobileSTRef.current = null;
                    onSelect(service.slug);
                    window.history.pushState(null, "", `#${service.slug}`);

                    requestAnimationFrame(() => {
                      document.getElementById("service-details")?.scrollIntoView({
                        behavior: "smooth",
                      });
                    });
                  }}
                  className="block w-full"
                >
                  <article
                    className={`relative h-[70vh] w-full overflow-hidden rounded-br-[240px] rounded-t-[7px] rounded-bl-[7px] ${
                      index % 2 === 0 ? "bg-primary" : "bg-[#5DA047]"
                    }`}
                  >
                    {/* image */}
                    <div className="absolute top-5 right-[-5px]"
                      >
                      <Image
                        src={`${service.heroImg}`}
                        alt={service.title}
                        width={1200}
                        height={800}
                        className={`h-[auto] w-auto max-w-full transition-opacity duration-100 group-hover:opacity-100
                                    ${activeSlug === service.slug ? "opacity-100" : "opacity-30"}`
                                  }
                      />
                      {/* Overlay image */}
                      <div
                        className={`absolute inset-0 pointer-events-none transition-opacity duration-100
                          ${index % 2 === 0 ? "bg-primary/30" : "bg-[#5DA047]/30"}
                          group-hover:opacity-0
                          ${activeSlug === service.slug ? "opacity-0" : "opacity-100"}
                        `}
                      />
                    </div>
                    {/* number */}
                    <div className="absolute bottom-15 right-6 text-7xl font-bold text-third">
                      {index + 1}
                    </div>
                    {/* vertical label */}
                    <div className="absolute inset-0">
                      <div className="absolute bottom-5 left-2 origin-bottom-left -rotate-90">
                        <p className="translate-y-full text-5xl font-bold leading-none text-third whitespace-nowrap">
                          {service.title}
                        </p>
                      </div>
                    </div>
                  </article>
                </Link>
              )}
            />
          </div>
      </section>
    </>
    
    
  );
}
