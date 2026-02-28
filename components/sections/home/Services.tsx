"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
export function Services() {
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
  const services = [
    {name:"Branding", img:"/images/services/Branding.png", slug: "branding"},
    {name:"Websites & SEO", img:"/images/services/Website&SEO.png", slug: "websites-seo"},
    {name:"Paid ADS", img:"/images/services/PaidADS.png", slug: "paid-ads"},
    {name:"Content & Production", img:"/images/services/Content&Production.png", slug: "content-production"},
    {name:"Digital Marketing", img:"/images/services/DigitalMarketing.png", slug: "digital-marketing"},
  ];

  return (
    <section className="flex items-end">
        <div ref={gridRef} className="grid w-full grid-cols-5">
          {services.map((service, index) => (
            <Link href={`/services#${service.slug}`} key={index} className="service-card block transition-transform duration-300 ease-out hover:scale-[1.03]">
              <div
                key={service.name}
                className={`relative min-h-[100svh] overflow-hidden rounded-br-[150px] ${
                  index % 2 === 0 ? "bg-primary" : "bg-primary/60"
                }`}
              >
                {/* image */}
                <div className="absolute top-0 left-10 bg-cover bg-center w-full">
                  <img
                    src={service.img}
                    alt={service.name}
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
                      {service.name}
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
