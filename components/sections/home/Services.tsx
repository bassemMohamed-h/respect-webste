"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useRef } from "react";
import type { MouseEvent } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

type ServiceItem = {
  slug: string;
  title: string;
  heroImg?: string;
  href?: string;
};

type Props = {
  services: ServiceItem[];
  activeSlug?: string;
  onSelect?: (slug: string) => void;
  baseHref?: string;
};

export function Services({
  services,
  activeSlug,
  onSelect,
  baseHref = "/services",
}: Props) {
  const gridRef = useRef<HTMLDivElement>(null);
  const mobileSectionRef = useRef<HTMLElement>(null);
  const mobilePinRef = useRef<HTMLDivElement>(null);
  const mobileTrackRef = useRef<HTMLDivElement>(null);

  const scrollToDetails = useCallback(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.getElementById("service-details")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    });
  }, []);

  const handleSelect = useCallback(
    (slug: string) => {
      if (!onSelect) return;
      onSelect(slug);
      window.history.pushState(null, "", `#${slug}`);
      scrollToDetails();
    },
    [onSelect, scrollToDetails]
  );

  const handleClick = useCallback(
    (slug: string) => (e: MouseEvent<HTMLAnchorElement>) => {
      if (!onSelect) return;
      e.preventDefault();
      handleSelect(slug);
    },
    [onSelect, handleSelect]
  );

  useGSAP(
    () => {
      const grid = gridRef.current;
      if (!grid) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".service-card", grid);
        if (!cards.length) return;

        gsap.set(cards, { y: 120, opacity: 0 });

        const tween = gsap.to(cards, {
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

        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      });

      return () => mm.revert();
    },
    { scope: gridRef, dependencies: [services.length] }
  );

  useGSAP(
    () => {
      const section = mobileSectionRef.current;
      const pin = mobilePinRef.current;
      const track = mobileTrackRef.current;
      if (!section || !pin || !track || services.length <= 1) return;

      const mm = gsap.matchMedia();

      mm.add("(max-width: 1023px)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".mobile-service-card", track);
        if (!cards.length) return;

        const getScrollDistance = () => {
          const lastCard = cards[cards.length - 1];
          if (!lastCard) return 0;

          const trackRect = track.getBoundingClientRect();
          const lastRect = lastCard.getBoundingClientRect();

          const lastRightInsideTrack = lastRect.right - trackRect.left;
          const visibleWidth = pin.clientWidth;

          return Math.max(0, lastRightInsideTrack - visibleWidth);
        };
        const tween = gsap.to(track, {
          x: () => -getScrollDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            pin,
            start: "top top",
            end: () => `+=${track.scrollWidth - pin.clientWidth}`,
            scrub: .5,
            invalidateOnRefresh: true,
            snap: {
              snapTo: (value) => {
                const steps = services.length - 1;
                if (steps <= 0) return 0;
                const step = Math.round(value * steps);
                return step / steps;
              },
              duration: 0.25,
              ease: "power2.out",
            },
          },
        });

        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
          gsap.set(track, { clearProps: "transform" });
        };
      });

      return () => mm.revert();
    },
    { scope: mobileSectionRef }
  );

  useGSAP(() => {
    if (!onSelect || !services.length) return;

    const applyHashSelection = () => {
      const hash = window.location.hash.replace("#", "").trim();
      if (!hash) return;

      const matched = services.find((service) => service.slug === hash);
      if (!matched) return;

      onSelect(matched.slug);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.getElementById("service-details")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        });
      });
    };

    applyHashSelection();
    window.addEventListener("hashchange", applyHashSelection);

    return () => {
      window.removeEventListener("hashchange", applyHashSelection);
    };
  }, [onSelect, services, scrollToDetails]);

  if (!services.length) return null;

  return (
    <>
      {/* Desktop */}
      <section className="hidden lg:flex items-end">
        <div ref={gridRef} className="grid w-full grid-cols-5 overflow-hidden">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={service.href ?? `${baseHref}#${service.slug}`}
              scroll={false}
              onClick={handleClick(service.slug)}
              className="service-card block group"
            >
              <div
                className={`relative min-h-[100svh] overflow-hidden rounded-br-[150px] transition-transform duration-300 ${
                  index % 2 === 0 ? "bg-primary" : "bg-[#5DA047]"
                }`}
              >
                <div className="absolute top-5 right-5">
                  <Image
                    src={service.heroImg ?? ""}
                    alt={service.title}
                    width={1200}
                    height={800}
                    className={`h-auto w-auto max-w-full transition-opacity duration-100 group-hover:opacity-100 ${
                      activeSlug === service.slug ? "opacity-100" : "opacity-30"
                    }`}
                  />
                  <div
                    className={`absolute inset-0 pointer-events-none transition-opacity duration-100 ${
                      index % 2 === 0 ? "bg-primary/30" : "bg-[#5DA047]/30"
                    } group-hover:opacity-0 ${
                      activeSlug === service.slug ? "opacity-0" : "opacity-100"
                    }`}
                  />
                </div>

                <div className="absolute bottom-5 right-6 text-9xl font-bold text-third">
                  {index + 1}
                </div>

                <div className="absolute inset-0">
                  <div className="absolute bottom-5 left-2 origin-bottom-left -rotate-90">
                    <p className="translate-y-full whitespace-nowrap text-[60px] font-bold leading-none text-third">
                      {service.title}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Mobile */}
      <section
        ref={mobileSectionRef}
        className="relative lg:hidden"
        
      >
        <div
          ref={mobilePinRef}
          className="container-80 flex h-[100svh] items-center overflow-hidden "
        >
          <div
            ref={mobileTrackRef}
            className="flex items-center gap-3 will-change-transform"
          >
            {services.map((service, index) => (
              <Link
                key={service.slug}
                href={service.href ?? `${baseHref}#${service.slug}`}
                scroll={false}
                onClick={handleClick(service.slug)}
                className="mobile-service-card block w-[50vw] shrink-0 "
              >
                <article
                  className={`relative h-[70vh] w-full overflow-hidden rounded-t-[7px] rounded-bl-[7px] rounded-br-[150px] bg-primary`}
                >
                  <div className="absolute top-5 right-[-5px]">
                    <Image
                      src={service.heroImg ?? ""}
                      alt={service.title}
                      width={1200}
                      height={800}
                      className={`h-auto w-auto max-w-full transition-opacity duration-100 ${
                        activeSlug === service.slug ? "opacity-100" : "opacity-30"
                      }`}
                    />
                    <div
                      className={`absolute inset-0 pointer-events-none transition-opacity duration-100 ${
                        activeSlug === service.slug ? "opacity-0" : "opacity-100"
                      }`}
                    />
                  </div>

                  <div className="absolute bottom-6 right-9 text-7xl font-bold text-third">
                    {index + 1}
                  </div>

                  <div className="absolute inset-0">
                    <div className="absolute bottom-5 left-2 origin-bottom-left -rotate-90">
                      <p className="translate-y-full whitespace-nowrap text-4xl font-bold leading-none text-third">
                        {service.title}
                      </p>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}