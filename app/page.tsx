import { Hero } from "@/components/sections/home/Hero";
import { LatestWorkCarousel } from "@/components/sections/home/LatestWorkCarousel";
import { Slogan } from "@/components/sections/home/Slogan";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getFeaturedCaseStudies } from "@/components/lib/case-studies";
const projects = getFeaturedCaseStudies(5);
export default function HomePage() {
  return (
    <div>
      <Hero/>
      <Slogan/>
      <SectionHeader title="Latest Work"/>
      <LatestWorkCarousel projects={projects} />
      <SectionHeader title="Services"/>
    </div>

  );
}
