import { SloganMark } from "@/components/brand/RespectWordmark";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getAllCaseStudies } from "@/components/lib/case-studies";
import { CaseStudiesCarousel } from "@/components/sections/case-studies/CaseStudiesCarousel";

export default function CaseStudies() {
    const items = getAllCaseStudies().map((cs) => ({
    title: cs.title,
    description: cs.description,
    coverImage: cs.coverImage,
    slug: cs.slug,
  }));
    return(
        <main>
            <SectionHeader title="Work" description="Selected work shaped by strategy, values, and thoughtful execution."/>
            <div className="min-h-[100svh] flex items-center justify-center bg-primary">
                <div className="container-80 text-secondary"> 
                     <SloganMark />
                </div>
            </div>
            <div className=" py-16 min-h-[100svh] bg-primary">
                    <CaseStudiesCarousel items={items} />                
            </div>
        </main>
    )
}