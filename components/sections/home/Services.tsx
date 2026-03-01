"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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
  useGSAP(() => {
  const grid = gridRef.current;
  if (!grid) return;

  const cards = gsap.utils.toArray<HTMLElement>(".service-card", grid);
  if (!cards.length) return;

  gsap.set(cards, { y: 120, opacity: 0 });

  gsap.to(cards, {
    y: 0,
    opacity: 1,
    ease: "none",          // ✅ best for scrubbed
    stagger: 0.35,
    scrollTrigger: {
      trigger: grid,
      start: "top 85%",
      end: "top 25%",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
}, { scope: gridRef });
  if (!services?.length) return null;
  return (
    <section className="flex items-end">
        <div ref={gridRef} className="grid w-full grid-cols-5">
          {services.map((service, index) => (
            <Link   key={index}
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
                    className={ `service-card block`}>
              <div
                key={service.title}
                className={`relative min-h-[100svh] overflow-hidden rounded-br-[150px]  transition-transform duration-300  hover:scale-[1.03] ease-out   
                ${activeSlug === service.slug ? "bg-primary/60" : "bg-primary"}`}
              >
                {/* image */}
                <div className="absolute top-0 left-10 bg-cover bg-center w-full">
                  <img
                    src={service.heroImg}
                    alt={service.title}
                    className="object-cover"
                  />
                </div>
                {/* number */}
                <div className="absolute bottom-5 right-6 text-9xl font-bold text-third/90">
                  {index + 1}
                </div>

                {/* vertical label */}
                <div className="absolute inset-0">
                  <div className="absolute bottom-5 left-0 origin-bottom-left -rotate-90">
                    <p className="translate-y-full text-[56px] md:text-[72px] lg:text-[60px] font-bold leading-none text-third whitespace-nowrap">
                      {service.title}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            
          ))}
        </div>
    </section>
  );
}
