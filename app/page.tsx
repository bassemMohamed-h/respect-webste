import { Hero } from "@/components/sections/home/Hero";
import { WhoWeAre } from "@/components/sections/home/WhoWeAre";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getFeaturedCaseStudies } from "@/components/lib/case-studies";
import { Services } from "@/components/sections/home/Services";
import { Clients } from "@/components/sections/home/Clients";
import { LetsConnectHeader } from "@/components/ui/LetsConnectHeader";
import { Contact } from "@/components/sections/home/Contact";
import { LatestWork } from "@/components/sections/home/LatestWork";
import { allServices } from "contentlayer/generated";

const projects = getFeaturedCaseStudies(5);
export default function HomePage() {
  return (
    <>
      <Hero/>
      <WhoWeAre/>
      <SectionHeader title="LATEST WORK" />
      <LatestWork projects={projects} />
      <SectionHeader title="Services"/>
      <Services services={allServices.sort((a,b)=>(a.order??999)-(b.order??999)).slice(0,5)}/>
      <SectionHeader title="Clients"/>
      <Clients/>
      <LetsConnectHeader title="Connect"/>
      <Contact/>
    </>

  );
}
