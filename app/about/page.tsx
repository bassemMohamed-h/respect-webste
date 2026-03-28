import { Five } from "@/components/brand/Five";
import { Heart } from "@/components/brand/Heart";
import { Slogan } from "@/components/ui/Sloagn";
import { Story } from "@/components/sections/about/Story";
import { Team } from "@/components/sections/about/Team";
import { Philosophy } from "@/components/sections/about/Philosophy";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { OurScribble } from "@/components/brand/OurScribble";
import { ValuesPinnedSection } from "@/components/sections/about/ValuesPinnedSection";
import { Peace } from "@/components/brand/Peace";
import { Humanity } from "@/components/brand/Humanity";
import { Forgiveness } from "@/components/brand/Forgiveness";
import { Humility } from "@/components/brand/Humility";

const values = [
  {
    id: "value-1",
    title: "LOVE",
    description:
      "Design with heart and mind",
    Svg: <Heart />,
    drawSelector: "path",
  },
  {
    id: "value-2",
    title: "PEACE",
    description:
      "Calm strength with direction",
    Svg: <Peace />,
    drawSelector: "path",
  },
  {
    id: "value-3",
    title: "HUMANITY",
    description:
      "People before profit ",
    Svg: <Humanity />,
    drawSelector: "path",
  },
   {
    id: "value-4",
    title: "HUMILITY",
    description:
      "Simplicity that creates impact ",
    Svg: <Humility />,
    drawSelector: "path",
  },
   {
    id: "value-5",
    title: "FORGIVENESS",
    description:
      "PeoCollaboration over competition ",
    Svg: <Forgiveness />,
    drawSelector: "path",
  },
]

export default function AboutPage() {
    return(
        <main>
            <SectionHeader 
                title={{
                    name:"VALUES"
                }} 
                description={{
                    name:"We don’t just market brands we build measurable growth through strategy,creativity, and data driven decisions that deliver real, lasting business impact. ",
                    className:"text-black lg:text-[26px] text-md container-80 text-center"
                }}
                Svg={<Five />}
            />
            <ValuesPinnedSection values={values}/>
            <Slogan 
                animated = {true}
                className="bg-third text-primary overflow-hidden"
                title={{ 
                    text: "DESIGN IS HOW WE THINK AND SOLVE.", className: "text-center" }}
                description={{ 
                    text: "Respect was founded to build brands that are clearly understood, earn trust, and operate through structured systems.", 
                    className: "text-center text-black lg:text-[27px] text-md font-semibold lg:w-[60%] w-[80%]" }}
            />
            <SectionHeader 
                title={{
                    name:"STORY",
                }} 
                Svg={<OurScribble className="text-secondary" />}
            />
            <Story/>
            <SectionHeader 
                title={{
                    name:"PHILOSOPHY"
                }}
                Svg={<OurScribble className="text-secondary" />}
            />
            <Philosophy/>
            <SectionHeader 
                title={{
                    name:"Team", className:""
                }}
                Svg={<OurScribble className="text-secondary" />}
            />
            <Team/>
            <div className="w-full lg:h-[400px] h-[200px] bg-third"></div>
        </main>
    )
}