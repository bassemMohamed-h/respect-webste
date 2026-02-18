import { Hero } from "@/components/sections/home/Hero";
import { LatestWorkCarousel } from "@/components/sections/home/LatestWorkCarousel";
import { Slogan } from "@/components/sections/home/Slogan";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getFeaturedCaseStudies } from "@/components/lib/case-studies";
import { Services } from "@/components/sections/home/Services";
import { Clients } from "@/components/sections/home/Clients";
import { LetsConnectHeader } from "@/components/ui/LetsConnectHeader";
import { Contact } from "@/components/sections/home/Contact";
import Footer from "@/components/footer";
const projects = getFeaturedCaseStudies(5);
export default function HomePage() {
  return (
    <div>
      <Hero/>
      <Slogan/>
      <SectionHeader title="Latest Work"/>
      <LatestWorkCarousel projects={projects} />
      <SectionHeader title="Services"/>
      <Services/>
      <SectionHeader title="Clients"/>
      <Clients/>
      <LetsConnectHeader/>
      <Contact/>
      <Footer/>
    </div>

  );
}
