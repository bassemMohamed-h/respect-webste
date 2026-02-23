import { SloganMark } from "@/components/brand/RespectWordmark";

export function WhoWeAre() {
  return (
    <section className="Slogan min-h-[100svh] bg-primary  text-third">
      <div className="mx-auto flex min-h-[calc(100svh-var(--nav-h))] max-w-6xl flex-col justify-center px-6">
        
        {/* SEO heading (hidden visually) */}
        <h2 className="sr-only">
          Respect the past. Shape the future.
        </h2>

        {/* Visual headline (SVG) */}
        <div className="mb-16 mt-[var(--nav-h)]">
          <SloganMark />
        </div>

        {/* Label */}
        <p className="mb-4 text-3xl font-bold tracking-widest text-secondary">
          WHO WE ARE
        </p>

        {/* Description */}
        <p className=" text-xl leading-relaxed text-third">
           RESPECT is a Brand Strategy & Digital Marketing agency. 
        </p>
        <p className="font-thin tracking-widest">   
          It operates as a system, not as separate campaigns.We help medium and large companies
          build clear, authentic, and sustainable brands for the long term through strategy, design, and smart implementation.
        </p>
      </div>
    </section>
  );
}
