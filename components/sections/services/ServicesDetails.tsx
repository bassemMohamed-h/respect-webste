"use client";
import Image from "next/image";
import { useEffect, useMemo } from "react";
import { useMDXComponent } from "next-contentlayer2/hooks";
import { mdxComponents } from "@/components/mdx/mdx-components";
import { useRef } from "react";
import { gsap } from "gsap";

type ServiceDoc = {
  slug: string;
  title: string;
  heroImg?: string;
  description?: string;
  moreDesc?: string;
  body: { code: string };
};

type Props = {
  services: ServiceDoc[];
  activeSlug: string;
};
export function ServicesDetails({ services, activeSlug }: Props) {
    //GSAP animation on content change
    const contentRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
    if (!contentRef.current) return;

    gsap.fromTo(
        contentRef.current,
        { autoAlpha: 0, y: 18 },
        { autoAlpha: 1, y: 0, duration: 2.0, ease: "power2.out" }
    );
    }, [activeSlug]);

    const active = useMemo(() => {
        return services.find((s) => s.slug === activeSlug) ?? services[0];
    }, [services, activeSlug]);
    if (!active) return null;
    const MDXContent = useMDXComponent(active.body.code);    
    return (
        <section  ref={contentRef} id="service-details" className="ServiceDetails min-h-[100svh]  flex items-center justify-center bg-third flex-col">
            <div className="container-80 mt-[var(--nav-h)]">
                <div className="flex gap-12">
                    <div className="w-1/4 relative h-[220px] md:h-[260px] shrink-0 mb-8 ">

                        {active.heroImg && (
                        <Image
                            src={active.heroImg}
                            alt={active.title}
                            fill
                            sizes="(max-width: 768px) 220px, 260px"
                            className="object-contain text-primary"
                        />
                        )}
                    </div>
                    <div className="w-3/4 mb-8">
                        <h2 className="text-[48px] font-bold mb-4">{active.title}</h2>
                        <p className="text-[24px] text-black">{active.description}</p>
                        <p className="text-[20px] text-black">{active.moreDesc}</p>
                    </div>
                </div>
                <article >
                     <MDXContent components={mdxComponents}/>
                </article>
                <div className="mt-8 flex justify-end">
                    <button className="px-8 py-4 bg-primary text-white rounded-br-[50px] mt-8 w-[200px]">Start Your Project</button>
                </div>
                
            </div>
        </section>
    )
}