"use client";
import { useTextMaskRevealGroup } from "@/components/gsap/useTextMaskReveal";
import { SloganSlideIn } from "@/components/gsap/RollingSlogan";

export function WhoWeAre() {
  const blockRef = useTextMaskRevealGroup<HTMLDivElement>();
  return (
    <section className="Slogan min-h-[100svh] bg-primary  text-third">
      <div className="mx-auto flex min-h-[calc(100svh-var(--nav-h))] container-80 flex-col justify-center">
        
        {/* SEO heading (hidden visually) */}
        <h2 className="sr-only">
          Respect the past. Shape the future.
        </h2>

        {/* Visual headline (SVG) */}
        <div className="mb-16 mt-[var(--nav-h)]">
          <SloganSlideIn />
        </div>
        <div ref={blockRef} className="text-center mb-5 lg:text-start">
          {/* Label */}
          <p className="mb-4 text-2xl font-bold text-secondary text-center
                        lg:text-start lg:text-3xl"
          >
            WHO WE ARE
          </p>

          {/* Description */}
          <p  className=" lg:text-2xl text-lg text-third">
            RESPECT is a Brand Strategy & Digital Marketing agency. 
          </p>
          <p  className="font-thin lg:text-xl text-md">   
            It operates as a system, not as separate campaigns.We help medium and large companies
            build clear, authentic, and sustainable brands for the long term through strategy, design, and smart implementation.
          </p>
        </div>
      
      </div>
    </section>
  );
}
