import { Hero } from "@/components/sections/home/Hero";
import { LatestWorkCarousel } from "@/components/sections/home/LatestWorkCarousel";
import { WhoWeAre } from "@/components/sections/home/WhoWeAre";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getFeaturedCaseStudies } from "@/components/lib/case-studies";
import { Services } from "@/components/sections/home/Services";
import { Clients } from "@/components/sections/home/Clients";
import { LetsConnectHeader } from "@/components/ui/LetsConnectHeader";
import { Contact } from "@/components/sections/home/Contact";
const projects = getFeaturedCaseStudies(5);
export default function HomePage() {
  return (
    <>
      <Hero/>
      <WhoWeAre/>
      <SectionHeader title="Latest Work"/>
      <LatestWorkCarousel projects={projects} />
      <SectionHeader title="Services"/>
      <Services/>
      <SectionHeader title="Clients"/>
      <Clients/>
      <LetsConnectHeader/>
      <Contact/>
    </>

  );
}
