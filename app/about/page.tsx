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
                description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis "
                className="min-h-[100svh] relative bg-third text-primary"
            />

            <AboutValuesBlock
                Icon={Heart}
                title="Love"
                description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis "
                className="min-h-[100svh] relative bg-primary text-third"
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