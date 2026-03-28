import { SectionHeader } from "@/components/ui/SectionHeader";
import { getAllCaseStudies } from "@/components/lib/case-studies";
import { CaseStudiesPageClient } from "@/components/sections/case-studies/CaseStudiesPageClient";
import { OurScribble } from "@/components/brand/OurScribble";
import { SloganSlideIn } from "@/components/gsap/RollingSlogan";
import { getProjectsManifest } from "@/components/data/projects";
import { getProjectBySlug } from "@/components/lib/projects";


export default async function CaseStudiesPage() {
  // const items = getAllCaseStudies().map((cs) => ({
  //   title: cs.title,
  //   description: cs.description,
  //   coverImage: cs.coverImage,
  //   slug: cs.slug,
  //   client: cs.client,
  //   service: cs.service,
  //   studyType: cs.studyType,
  //   year: cs.year,
  // }));

  const projects = await Promise.all(
    getProjectsManifest().map(async (project)=>{
      const fullProjects = await getProjectBySlug(project.slug)
      if(!fullProjects) {
        throw new Error (`Project Not Found For Slug: ${project.slug}`)
      }
      return fullProjects
    })
  )
  const items = projects.map((project)=>({
    title:project.title,
    slug:project.slug,
    bgColor:project.bgColor,
    desktopImages:project.desktopImages,
    mobileImages: project.mobileImages,
    
  }))  
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
      <CaseStudiesPageClient items={items} />
      

    </main>
  );
}