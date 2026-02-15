import { SloganMark } from "@/components/brand/RespectWordmark";

export function Slogan() {
  return (
    <section className="min-h-[100svh] bg-primary  text-primary-foreground">
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
        <p className=" text-xl leading-relaxed text-primary-foreground">
            PlayZone is a youth-focused football platform designed to connect young players with local matches,
            teams, and opportunities to play regularly. The goal of the project was to create a clear marketing strategy 
            that positions PlayZone not just as an app, but as a gateway to real play, 
            The goal of the project was to create a clear marketing strategy that positions PlayZone not 
        </p>
      </div>
    </section>
  );
}
