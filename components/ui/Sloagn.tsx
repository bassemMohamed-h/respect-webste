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

    gsap.registerPlugin(ScrollTrigger);
    if(animated){
        useGSAP(
    () => {
        const section = sectionRef.current;
        const titleEl = titleRef.current;
        const descEl = descRef.current;
        if (!section || !titleEl || !descEl) return;

        gsap.set(descEl, { clipPath: "inset(0 100% 0 0)" });

        const tl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${titleEl.scrollWidth + descEl.scrollWidth}`,
            pin:true,
            scrub: true,
        },
        });

        tl.fromTo(
        titleEl,
        { xPercent: 0   },
        { xPercent: -50, ease: "none" }
        )
        .to(
            descEl,
            { clipPath: "inset(0 0.13% 0 0)", ease: "power2.out" },
            ".35" // start Before previous finishes
        );
    },
    { scope: sectionRef }
    );
    }
   
    return (
        <section ref={sectionRef} className={`Slogan min-h-[100svh] flex items-start justify-center  flex-col pl-3 ${className}`}>
            <div>
                <h2 ref={titleRef} className={`text-9xl font-bold mb-20 text-nowrap ${title.className}`}>
                   {title.text}
                </h2>
               
            </div>
            <p ref={descRef} className={` text-2xl will-change-[clip-path mx-auto ${description.className}`}>
                   {description.text}
                </p>
        </section>
    )
}