"use client";
import Image from "next/image";
import { useEffect, useMemo } from "react";
import { useMDXComponent } from "next-contentlayer2/hooks";
import { mdxComponents } from "@/components/mdx/mdx-components";
import { useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

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
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="w-full lg:w-1/4 relative shrink-0 ">

                        {active.heroImg && (
                        <Image
                            src={active.heroImg}
                            alt={active.title}
                            width={1200}
                            height={800}
                            className="w-auto h-auto objext-contain"
                        />
                        )}
                    </div>
                    <div className="lg:w-3/4 mb-8">
                        <h2 className="lg:text-[48px] text-3xl font-bold mb-4">{active.title}</h2>
                        <p className="lg:text-[24px] text-xl text-black">{active.description}</p>
                        <p className="lg:text-[20px] text-lg text-black">{active.moreDesc}</p>
                    </div>
                </div>
                <article >
                     <MDXContent components={mdxComponents}/>
                </article>
                <div className="mt-8 flex justify-end">
                    <Link
                        href="/contact"
                        className="mt-8 inline-flex w-[200px] items-center justify-center rounded-br-[50px] bg-primary px-8 py-4 text-white"
                    >
                        Start Your Project
                    </Link>
                </div>
                
            </div>
        </section>
    )
}