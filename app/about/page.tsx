import { Five } from "@/components/brand/Five";
import { Heart } from "@/components/brand/Heart";
import { Slogan } from "@/components/sections/about/Sloagn";
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
            <Slogan />
            <SectionHeader title="Story"/>  
        </main>
    )
}