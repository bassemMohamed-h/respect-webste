import { Hero } from "@/components/sections/home/Hero";
import { WhoWeAre } from "@/components/sections/home/WhoWeAre";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getFeaturedCaseStudies } from "@/components/lib/case-studies";
import { Services } from "@/components/sections/home/Services";
import { Clients } from "@/components/sections/home/Clients";
import { Contact } from "@/components/sections/home/Contact";
import { LatestWork } from "@/components/sections/home/LatestWork";
import { allServices } from "contentlayer/generated";
import { OurScribble } from "@/components/brand/OurScribble";
import { LetsScribble } from "@/components/brand/LetsScribble";

const projects = getFeaturedCaseStudies(5);
export default function HomePage() {
  return (
    <>
      <Hero/>
      <WhoWeAre/>
      <SectionHeader 
        title={{
          name:"LATEST WORK", className:"text-4xl!"
        }}
        Svg={<OurScribble className="text-secondary" />}
      />
      <LatestWork projects={projects} />
      <SectionHeader 
        title={{
          name:"SERVICES", className:""
        }}
        Svg={<OurScribble className="text-secondary" />}
      />
      <Services services={allServices.sort((a,b)=>(a.order??999)-(b.order??999)).slice(0,5)}/>
      <SectionHeader 
        title={{
          name:"CLIENTS", className:""
        }}
        Svg={<OurScribble className="text-secondary" />}
        />
      <Clients/>
      <SectionHeader 
        title={{
          name:"CONNECT", className:""
        }}
        Svg={<LetsScribble className="text-secondary" />}
        />
      <Contact/>
    </>

  );
}
