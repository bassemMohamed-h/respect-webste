"use client";
import { useTextMaskRevealGroup } from "@/components/gsap/useTextMaskReveal";
import { TeamCarousel } from "@/components/sections/about/TeamCarousel";

const team = [
  { imageSrc: "/images/values/flower-yellow.png" },
  { imageSrc: "/images/values/heart-yellow.png" },
  { imageSrc: "/images/values/heart-yellow.png" },
  { imageSrc: "/images/values/men-yellow.png" },
   { imageSrc: "/images/values/heart-yellow.png" },
  { imageSrc: "/images/values/men-yellow.png" },
  // ...
];

export function Team(){
     const blockRef = useTextMaskRevealGroup<HTMLDivElement>({
        duration: 2,
        stagger: 0.2,
        ease: "power2.out",
    });
    return(
        <section className="Team min-h-[100svh] bg-primary text-third flex items-center justify-center  flex-col">
            <div ref={blockRef} className="w-full max-w-6xl px-4">
                <p className="text-[32px] mb-12  text-third">A multidisciplinary team of strategists, designers, and marketers working through structured systems and measurable outcomes.</p>
            </div>
             <TeamCarousel items={team} />
        </section>
    )
}