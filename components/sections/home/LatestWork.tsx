"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
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
        // console.log("[LatestWork] useGSAP mount");
        const block = blockRef.current;
        const header = headerRef.current;
        const stage = stageRef.current;
        const track = trackRef.current;

        if (!block || !header || !stage || !track) return;

        const sloganTitle = header.querySelector<HTMLHeadingElement>("h2");
        const sloganDesc = header.querySelector<HTMLParagraphElement>("p");

        if (!sloganTitle || !sloganDesc) return;

        // how much scroll space for slogan animation (px)
        const sloganLen = 2000;

        // prepare
        gsap.set(sloganDesc, { clipPath: "inset(0 0 100% 0)" });
        if (!block || !header || !stage || !track) return;

        let tl: gsap.core.Timeline | null = null;

        const build = () => {
          // console.log("[LatestWork] build start");
          tl?.scrollTrigger?.kill();
          tl?.kill();
          tl = null;

          const trackHeight = track.scrollHeight;
          const scrollLength = trackHeight - window.innerHeight;
          const reveal = header.getBoundingClientRect().height;
          //   console.log("[LatestWork build]", {
          //   trackHeight,
          //   windowHeight: window.innerHeight,
          //   scrollLength,
          //   headerHeight: reveal,
          //   projectsLength: projects.length,
          //   trackChildren: track.children.length,
          // });

          if (scrollLength <= 0) {
            console.warn("[LatestWork] scrollLength <= 0");
            return};

          const paraLen = 500;
          const phase2Start = sloganLen + paraLen + reveal;
          const totalLen = phase2Start + scrollLength;
          const step = window.innerHeight;
          const maxIndex = projects.length - 1;
          

          gsap.set(track, { y: 0 });
          gsap.set(stage, { y: 0 });

          tl = gsap.timeline({
              scrollTrigger: {
              trigger: block,
              start: "top top",
              end: () => `+=${totalLen}`,
              pin: true,
              scrub: 1,
              invalidateOnRefresh: true,
              anticipatePin: 1,
              // onRefreshInit: () => console.log("[LatestWork trigger] onRefreshInit"),
              // onRefresh: (self) =>
              //   console.log("[LatestWork trigger] onRefresh", {
              //     start: self.start,
              //     end: self.end,
              //     progress: self.progress,
              //   }),
              snap: {
                  snapTo: (value) => {
                  const scroll = value * totalLen;

                  if (scroll < phase2Start) return value;

                  const inside = scroll - phase2Start;
                  const rawIndex = inside / step;
                  const snappedIndex = Math.max(
                      0,
                      Math.min(maxIndex, Math.round(rawIndex))
                  );

                  const snappedScroll = phase2Start + snappedIndex * step;
                  return snappedScroll / totalLen;
                  },
                  duration: 0.35,
                  ease: "power2.out",
              },
            },
          });
          tl.fromTo(
            sloganTitle,
            { x: 0 },
            {
              x: () => {
                const titleWidth = sloganTitle.scrollWidth;
                const parentWidth = sloganTitle.parentElement?.clientWidth ?? 0;
                return -Math.max(0, titleWidth - parentWidth);
              },
              ease: "none",
              duration: sloganLen,
            }
          );
          tl.to(
              sloganDesc,
              { clipPath: "inset(0 0 0% 0)", ease: "power2.out", duration: paraLen },
              ">"
          );
          tl.to(stage, { y: -reveal, ease: "none", duration: reveal });
          tl.to(track, { y: -scrollLength, ease: "none", duration: scrollLength });
          // console.log("[LatestWork] build end");
        };
        // const onGlobalRefreshInit = () => console.log("[ScrollTrigger] global refreshInit");
        // const onGlobalRefresh = () => console.log("[ScrollTrigger] global refresh");
        // ScrollTrigger.addEventListener("refreshInit", onGlobalRefreshInit);
        // ScrollTrigger.addEventListener("refresh", onGlobalRefresh);

        build();
        ScrollTrigger.refresh();

        return () => {
          // console.log("[LatestWork] cleanup");
          // ScrollTrigger.removeEventListener("refreshInit", onGlobalRefreshInit);
          // ScrollTrigger.removeEventListener("refresh", onGlobalRefresh);
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
                title={{ text: "Design is thinking, solving, and building."}}
                description={{ text: "Respect was founded to build brands that are clearly understood, earn trust, and operate through structured systems.", className:  "text-third lg:max-w-[50%] max-w-[80%] text-center" }}
            />
        </div>
        {/* stage moves up to cover header */}
        <div ref={stageRef} className="relative z-10 overflow-hidden min-h-[100svh] flex items-center">
          <div className="overflow-hidden w-full h-[100svh]">
            <div ref={trackRef} className="flex flex-col flex-nowrap will-change-transform">
              {projects.map((p) => (
                <article
                  key={p.slug}
                  className="min-h-0 flex-[0_0_100svh]"
                >
                  <Link href={`/case-studies#${p.slug}`} className="block">
                    <div className="relative overflow-hidden h-[100svh] w-full rounded-t-[6px] rounded-bl-[6px]">
                      <Image
                        src={p.coverImage}
                        alt={p.title}
                        fill
                        className="object-cover"
                        priority={false}
                      />
                      <div className="absolute bottom-20 left-10 z-10 text-white">
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