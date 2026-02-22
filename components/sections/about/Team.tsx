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
    return(
        <section className="Team min-h-[100svh] bg-primary text-third flex items-center justify-center  flex-col">
            <div className="w-full max-w-6xl px-4">
                <p className="text-2xl mb-12 container-80">A multidisciplinary team of strategists, designers, and marketers working through structured systems
 and measurable outcomes.</p>
            </div>
             <TeamCarousel items={team} />
        </section>
    )
}