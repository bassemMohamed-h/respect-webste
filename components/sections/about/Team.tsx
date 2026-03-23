"use client";
import { useTextMaskRevealGroup } from "@/components/gsap/useTextMaskReveal";
import { TeamCarousel } from "@/components/sections/about/TeamCarousel";

const team = [
    { imageSrc: "/images/team/abdelrhman.png" },
    { imageSrc: "/images/team/adel.png" },
    { imageSrc: "/images/team/ahmed.png" },
    { imageSrc: "/images/team/akrm.png" },
    { imageSrc: "/images/team/amr.png" },
    { imageSrc: "/images/team/bassem.png" },
    { imageSrc: "/images/team/demiana.png" },
    { imageSrc: "/images/team/eslam.png" },
    { imageSrc: "/images/team/gaber.png" },
    { imageSrc: "/images/team/mazen.png" },
    { imageSrc: "/images/team/omar.png" },
    { imageSrc: "/images/team/radwa.png" },
    { imageSrc: "/images/team/toha.png" },
    { imageSrc: "/images/team/yousef.png" },
  // ...
];

export function Team(){
     const blockRef = useTextMaskRevealGroup<HTMLDivElement>({
        duration: 2,
        stagger: 0.2,
        ease: "power2.out",
    });
    return(
        <section className="Team min-h-[100svh] bg-primary text-third flex items-center justify-center flex-col">
            <div ref={blockRef} className="container-80">
                <p className="lg:text-3xl text-md mb-12 text-third text-center">
                    A multidisciplinary team of strategists, designers, and marketers working through structured systems and measurable outcomes.
                </p>
            </div>
             <TeamCarousel items={team} />
        </section>
    )
}