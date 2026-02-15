import { allPages } from "contentlayer/generated";
import { MDXContent } from "@/components/mdx/MDXContent";
import Hero from "@/components/sections/Hero";

export default function HomePage() {
  const page = allPages.find((p) => p.slug === "home");

  if (!page) return null;

  return (
    <Hero/>
  );
}
