import { Hero } from "@/components/sections/home/Hero";
import { WhoWeAre } from "@/components/sections/home/WhoWeAre";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getFeaturedCaseStudies } from "@/components/lib/case-studies";
import { Services } from "@/components/sections/home/Services";
import { Clients } from "@/components/sections/home/Clients";
import { LetsConnectHeader } from "@/components/ui/LetsConnectHeader";
import { Contact } from "@/components/sections/home/Contact";
import { LatestWork } from "@/components/sections/home/LatestWork";
const projects = getFeaturedCaseStudies(5);
export default function HomePage() {
  return (
    <>
      <Hero/>
      <WhoWeAre/>
      <LatestWork projects={projects} />
      <SectionHeader title="Services"/>
      <Services/>
      <SectionHeader title="Clients"/>
      <Clients/>
      <LetsConnectHeader/>
      <Contact/>
    </>

  );
}
