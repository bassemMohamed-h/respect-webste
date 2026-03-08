import { Five } from "@/components/brand/Five";
import { Heart } from "@/components/brand/Heart";
import { Slogan } from "@/components/ui/Sloagn";
import { Story } from "@/components/sections/about/Story";
import { Team } from "@/components/sections/about/Team";
import { Truth } from "@/components/sections/about/Truth";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { OurScribble } from "@/components/brand/OurScribble";

export default function AboutPage() {
    return(
        <main>
            <SectionHeader 
                title={{
                    name:"Values", className:""
                }} 
                description={{
                    name:"We don’t just market brands we build measurable growth through strategy,creativity, and data driven decisions that deliver real, lasting business impact. ",
                    className:"text-black text-[26px] container-80 text-center"
                }}
                Svg={<Five />}
            />
            <SectionHeader 
                className="bg-primary"
                title={{
                    name:"Love", className:"text-third"
                }}
                description={{
                    name:"Design with heart and mind", className:"text-third text-[40px]"
                }}
                Svg={<Heart />}
            />
            <Slogan 
                animated = {true}
                className="bg-third text-primary overflow-hidden"
                title={{ 
                    text: "Design is not decoration It is a way of thinking", className: "text-center" }}
                description={{ 
                    text: "Respect was founded to build brands that are clearly understood, earn trust, and operate through structured systems.", 
                    className: "text-center text-black text-[27px] font-semibold" }}
            />
            <SectionHeader 
                title={{
                    name:"Story", className:""
                }} 
                Svg={<OurScribble className="text-secondary" />}
            />
            <Story/>
            <SectionHeader 
                title={{
                    name:"Philosophy", className:""
                }}
                Svg={<OurScribble className="text-secondary" />}
            />
            <Truth/>
            <SectionHeader 
                title={{
                    name:"Team", className:""
                }}
                Svg={<OurScribble className="text-secondary" />}
            />
            <Team/>
             <SectionHeader 
                title={{
                    name:"Thanks", className:""
                }} 
                Svg={<OurScribble className="text-secondary" />}
                />
        </main>
    )
}