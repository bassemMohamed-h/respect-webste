"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
type SloganProps = {
    title: {
        text: string;
        className?: string;
    }
    description:{
        text: string,
        className?: string;
    }
    className?: string;
     animated?: boolean;
};

export function Slogan({ title, description, className, animated }: SloganProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);
    const titleViewportRef = useRef<HTMLDivElement>(null);

    gsap.registerPlugin(ScrollTrigger);
        useGSAP(
    () => {
        if (!animated) return;
        const section = sectionRef.current;
        const titleEl = titleRef.current;
        const descEl = descRef.current;
        const viewport = titleViewportRef.current;
        if (!section || !titleEl || !descEl ||!viewport) return;

        gsap.set(descEl, { clipPath: "inset(0 0 100% 0)" });

        const tl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${titleEl.scrollWidth}`,
            pin:true,
            scrub: true,
        },
        });

       tl.fromTo(
            titleEl,
            { x: 0 },
            {
                x: () => -Math.max(0, titleEl.scrollWidth - viewport.clientWidth),
                ease: "none",
            }
        )
        .to(
            descEl,
            { clipPath: "inset(0 0 0% 0)", ease: "power2.out", duration:1},
            ".70" // start Before previous finishes
        );
    },
    { scope: sectionRef }
    );

   
    return (
        <section ref={sectionRef} className={`Slogan min-h-[100svh] flex items-start justify-center  flex-col pl-3 ${className}`}>
            <div ref={titleViewportRef} className="w-full overflow-hidden">
                <h2 ref={titleRef} className={`text-[clamp(3rem,9vw,8rem)] font-bold mb-20 whitespace-nowrap ${title.className}`}>
                    {title.text}
                </h2>
            </div>
            <p ref={descRef} className={` text-2xl will-change-[clip-path] mx-auto ${description.className}`}>
                   {description.text}
                </p>
        </section>
    )
}