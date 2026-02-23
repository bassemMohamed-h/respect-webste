import { Five } from "@/components/brand/Five";
import { Heart } from "@/components/brand/Heart";
import { Slogan } from "@/components/ui/Sloagn";
import { Story } from "@/components/sections/about/Story";
import { Team } from "@/components/sections/about/Team";
import { Truth } from "@/components/sections/about/Truth";
import { AboutValuesBlock } from "@/components/ui/AboutValuesBlock";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function AboutPage() {
    return(
        <main>
            <AboutValuesBlock
                Icon={Five}
                title="Values"
                description="We don’t just market brands we build measurable growth through strategy,
                    creativity, and data driven decisions that deliver real, lasting business impact. "
                className="min-h-[100svh] relative bg-third text-primary text-center"
            />

            <AboutValuesBlock
                Icon={Heart}
                title="Love"
                description="Design with heart and mind  "
                className="min-h-[100svh] relative bg-primary text-third text-center"
            />
            <Slogan 
                className="bg-third text-primary"
                title={{ text: "Design is not decoration It is a way of thinking", className: "text-center" }}
                description={{ text: "Respect was founded to build brands that are clearly understood, earn trust, and operate through structured systems.", className: "text-center text-black" }}
            />
            <SectionHeader title="Story"/>
            <Story/>
            <SectionHeader title="Philosophy"/>
            <Truth/>
            <SectionHeader title="Team"/>
            <Team/>
             <SectionHeader title="Thanks"/>
        </main>
    )
}