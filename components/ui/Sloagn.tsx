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
            start: "top 50%",
            end: "bottom 30%",
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
            { clipPath: "inset(0 0% 0 0)", ease: "power2.out" },
            ".35" // start AFTER previous finishes
        );
    },
    { scope: sectionRef }
    );
    }
   
    return (
        <section ref={sectionRef} className={`Slogan min-h-[100svh] flex items-center  ${className}`}>
            <div>
                <h2 ref={titleRef} className={`text-[136px] font-bold tracking-widest mb-20 text-nowrap ${title.className}`}>
                   {title.text}
                </h2>
               <p ref={descRef} className={`text-[26px] leading-relaxed w-[50%] will-change-[clip-path] ${description.className}`}>
                   {description.text}
                </p>
            </div>
        </section>
    )
}