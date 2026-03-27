import { SectionHeader } from "@/components/ui/SectionHeader";
import { getAllCaseStudies } from "@/components/lib/case-studies";
import { CaseStudiesPageClient } from "@/components/sections/case-studies/CaseStudiesPageClient";
import { OurScribble } from "@/components/brand/OurScribble";
import { SloganSlideIn } from "@/components/gsap/RollingSlogan";
import { getProjectBySlug } from "@/components/lib/projects";
import Image from "next/image";
import { CaseStudies } from "@/components/sections/case-studies/CaseStudies";

export default async function CaseStudiesPage() {
  const items = getAllCaseStudies().map((cs) => ({
    title: cs.title,
    description: cs.description,
    coverImage: cs.coverImage,
    slug: cs.slug,
    client: cs.client,
    service: cs.service,
    studyType: cs.studyType,
    year: cs.year,
  }));
  const project = await getProjectBySlug("mps");

  return (
    <main>
      <SectionHeader
        title={{
          name:"Work", className:""
        }}
        description={{
          name:"Selected work shaped by strategy, values, and thoughtful execution.",
          className:"text-3xl"
        }}
        Svg={<OurScribble className="text-secondary"/>}
      />

      <div className="min-h-[100svh] flex items-center justify-center bg-primary">
        <div className="container-80 text-secondary">
          <SloganSlideIn />
        </div>
      </div>
      <CaseStudies/>
      {/* <CaseStudiesPageClient items={items} /> */}
     {project && project.desktopImages.map((image, index)=>(
      <div key={index} className="relative w-content">
        <Image
          src={image.src}
          alt={image.alt}
          width={1200}
          height={800}
          className="object-contain w-full"
        />
      </div>
        
     ))}
      

    </main>
  );
}