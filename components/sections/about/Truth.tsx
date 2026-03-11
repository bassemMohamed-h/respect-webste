"use client";
import { useTextMaskRevealGroup } from "@/components/gsap/useTextMaskReveal";

export function Truth(){
    const blockRef = useTextMaskRevealGroup<HTMLDivElement>({
        duration: 2,
        stagger: 0.2,
        ease: "power2.out",
    });
    return(
        <section className="Truth min-h-[100svh] bg-primary text-third flex items-center justify-center ">
            <div ref={blockRef} className="flex items-center justify-center container-80  gap-4 flex-col ">
                <h2 className="text-[200px] text-secondary mb-8 font-semibold ">Truth</h2>
                <p className="text-[48px] text-center">We solve complexity through strategy and translate meaning into working systems.</p>
            </div>
        </section>
    )
            
}