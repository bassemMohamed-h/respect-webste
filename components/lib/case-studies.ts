import { allCaseStudies } from "contentlayer/generated";

export function getAllCaseStudies() {
  return allCaseStudies;
}

export function getFeaturedCaseStudies(limit = 5) {
  return allCaseStudies
    .filter((cs) => cs.featured === true)
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
    .slice(0, limit);
}
