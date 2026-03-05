"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Slogan } from "../../ui/Sloagn";

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

        const sloganTitle = header.querySelector<HTMLHeadingElement>("h2");
        const sloganDesc = header.querySelector<HTMLParagraphElement>("p");

        if (!sloganTitle || !sloganDesc) return;

        // how much scroll space for slogan animation (px)
        const sloganLen = 500;

        // prepare
        gsap.set(sloganDesc, { clipPath: "inset(0 100% 0 0)" });
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

            // scroll snap
            const paraLen = 200; // keep same as your tl.to(sloganDesc,...duration:200)
            const phase2Start = sloganLen + paraLen + reveal; // where horizontal starts (in px timeline units)
            const totalLen = phase2Start + scrollLength;

            // if each slide is 100vw, one “step” is viewport width
            const step = window.innerWidth;
            const maxIndex = projects.length - 1;

            // reset
            gsap.set(track, { x: 0 });
            gsap.set(stage, { y: 0 });

            // timeline duration units == pixels (important!)
            tl = gsap.timeline({
            scrollTrigger: {
                trigger: block,
                start: "top top",
                end: () => `+=${reveal + scrollLength + sloganLen}`,
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true,
                anticipatePin: 1,
                 snap: {
                    // value here is progress (0..1)
                    snapTo: (value) => {
                        const scroll = value * totalLen;

                        // ✅ No snapping before phase 2
                        if (scroll < phase2Start) return value;

                        // Convert scroll position inside phase2 to slide index
                        const inside = scroll - phase2Start;
                        const rawIndex = inside / step;

                        // snap to nearest slide
                        const snappedIndex = Math.max(0, Math.min(maxIndex, Math.round(rawIndex)));

                        // convert snapped slide back to overall progress
                        const snappedScroll = phase2Start + snappedIndex * step;
                        return snappedScroll / totalLen;
                    },
                    duration: 0.35,
                    ease: "power2.out",
                    },
            },
            });
            // Phase 0: slogan title moves, then paragraph reveals
            tl.fromTo(
            sloganTitle,
            { xPercent: 0},
            { xPercent: -50, ease: "none", duration: sloganLen }
            );

            tl.to(
            sloganDesc,
            { clipPath: "inset(0 0% 0 0)", ease: "power2.out", duration: 400 },
            ">" // after title
            );

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
            <Slogan 
                className="bg-primary text-secondary"
                animated={false}
                title={{ text: "Design is not decoration It is a way of thinking", className: "text-center" }}
                description={{ text: "Respect was founded to build brands that are clearly understood, earn trust, and operate through structured systems.", className: "text-center text-third" }}
            />
        </div>
        {/* stage moves up to cover header */}
        <div ref={stageRef} className="relative z-10 overflow-hidden min-h-[100svh] flex items-center">
            <div className="overflow-hidden">
                <div ref={trackRef} className=" flex flex-nowrap will-change-transform ">
                    {projects.map((p) => (
                        <article
                            key={p.slug}
                            className="min-w-0 flex-[0_0_100vw]"
                            >
                            <Link href={`/case-studies#${p.slug}`} className="block">
                                <div className="relative aspect-square overflow-hidden h-[100svh] w-full  rounded-br-[205px] rounded-t-[6px] rounded-bl-[6px]">
                                    <Image
                                        src={p.coverImage}
                                        alt={p.title}
                                        fill
                                        className="object-cover"
                                        priority={false}
                                    />
                                    <div className="absolute bottom-20 left-10 z-10  text-white">
                                        <h3 className="mt-5 text-4xl font-bold">{p.title}</h3>
                                        <p className="mt-2 text-xl line-clamp-3 font-semibold">{p.description}</p>
                                    </div>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
}