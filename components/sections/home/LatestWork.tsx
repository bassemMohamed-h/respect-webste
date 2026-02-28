"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SectionHeader } from "@/components/ui/SectionHeader";

type LatestWorkProps = {
  projects: {
    title: string;
    description: string;
    coverImage: string;
    slug: string;
  }[];
};

gsap.registerPlugin(ScrollTrigger);

export function LatestWork({ projects }: LatestWorkProps) {
    const blockRef = useRef<HTMLElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const stageRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const block = blockRef.current;
        const header = headerRef.current;
        const stage = stageRef.current;
        const track = trackRef.current;
        if (!block || !header || !stage || !track) return;

        let tl: gsap.core.Timeline | null = null;

        const build = () => {
            tl?.scrollTrigger?.kill();
            tl?.kill();
            tl = null;

            const trackWidth = track.scrollWidth;
            const scrollLength = trackWidth - window.innerWidth;
            if (scrollLength <= 0) return;

            // how much vertical “reveal” before horizontal starts:
            // move projects up by header height (so it covers the header)
            const reveal = header.getBoundingClientRect().height;

            // reset
            gsap.set(track, { x: 0 });
            gsap.set(stage, { y: 0 });

            // timeline duration units == pixels (important!)
            tl = gsap.timeline({
            scrollTrigger: {
                trigger: block,
                start: "top top",
                end: () => `+=${reveal + scrollLength}`,
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true,
                anticipatePin: 1,
            },
            });

            // Phase 1: projects come UP and cover header
            tl.to(stage, { y: -reveal, ease: "none", duration: reveal });

            // Phase 2: horizontal scroll
            tl.to(track, { x: -scrollLength, ease: "none", duration: scrollLength });
        };

        build();
        ScrollTrigger.addEventListener("refreshInit", build);
        ScrollTrigger.refresh();

        return () => {
            ScrollTrigger.removeEventListener("refreshInit", build);
            tl?.scrollTrigger?.kill();
            tl?.kill();
        };
    }, []);

  return (
    <section ref={blockRef} className="LatestWork bg-third text-third overflow-hidden h-[100svh] flex flex-col">
        <div ref={headerRef} >
            <SectionHeader title="LATEST WORK" />
        </div>

        {/* stage moves up to cover header */}
        <div ref={stageRef} className="relative z-10 bg-primary overflow-hidden min-h-[100svh] flex items-center">
            <div className="overflow-hidden  ">
                <div ref={trackRef} className="flex flex-nowrap will-change-transform">
                    {projects.map((p) => (
                        <article
                            key={p.slug}
                            className="min-w-0 flex-[0_0_85vw] sm:flex-[0_0_70vw] md:flex-[0_0_45vw] lg:flex-[0_0_33vw] px-6"
                            >
                            <Link href={`/case-studies/${p.slug}`} className="block">
                                <div className="relative aspect-square overflow-hidden rounded-2xl">
                                <Image
                                    src={p.coverImage}
                                    alt={p.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, 33vw"
                                    priority={false}
                                />
                                </div>

                                <h3 className="mt-5 text-2xl font-semibold text-white">{p.title}</h3>
                                <p className="mt-2 text-sm text-white/80 line-clamp-3">{p.description}</p>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
}