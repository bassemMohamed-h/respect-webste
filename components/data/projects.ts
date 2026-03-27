// src/data/projects.ts

export type ProjectCategory =
  | "Branding"
  | "Websites"
  | "Social Media"

export type ProjectManifestItem = {
  slug: string;
  title: string;
  category?: ProjectCategory;
  excerpt?: string;
  coverImage: string;
  mobCoverImage?:string;
};

export const projectsManifest: ProjectManifestItem[] = [
  {
    slug: "abo-tarek",
    title: "Abo Tarek",
    category: "Social Media",
    excerpt: "Case study details for Abo Tarek.",
    coverImage: "/images/projects/abo-tarek/desktop/01.png",
    mobCoverImage: "/images/projects/abo-tarek/mob/01.png"
  },
  {
    slug: "ac-medical",
    title: "AC Medical",
    category: "Social Media",
    excerpt: "Case study details for AC Medical.",
    coverImage: "/images/projects/ac-medical/desktop/01.png",
    mobCoverImage: "/images/projects/ac-medical/mob/01.png",

  },
  {
    slug: "add-mix",
    title: "Add Mix",
    category: "Branding",
    excerpt: "Case study details for Add Mix.",
    coverImage: "/images/projects/add-mix/desktop/01.png",
    mobCoverImage: "/images/projects/add-mix/mob/01.png",

  },
  {
    slug: "add-mix-social",
    title: "Add Mix Social",
    category: "Social Media",
    excerpt: "Case study details for Add Mix Social.",
    coverImage: "/images/projects/add-mix-social/desktop/01.png",
    mobCoverImage: "/images/projects/add-mix-social/mob/01.png",

  },
  {
    slug: "adri-loka",
    title: "Adri Loka",
    category: "Branding",
    excerpt: "Case study details for Adri Loka.",
    coverImage: "/images/projects/adri-loka/desktop/01.png",
    mobCoverImage: "/images/projects/adri-loka/mob/01.png",
  },
  {
    slug: "civilia",
    title: "Civilia",
    category: "Branding",
    excerpt: "Case study details for Civilia.",
    coverImage: "/images/projects/civilia/desktop/01.png",
    mobCoverImage: "/images/projects/civilia/mob/01.png",

  },
  {
    slug: "elfahed",
    title: "ElFahed",
    category: "Social Media",
    excerpt: "Case study details for El Fahed.",
    coverImage: "/images/projects/elfahed/desktop/01.png",
    mobCoverImage: "/images/projects/elfahed/mob/01.png"
  },
  {
    slug: "ifs",
    title: "IFS",
    category: "Social Media",
    excerpt: "Case study details for IFS.",
    coverImage: "/images/projects/ifs/desktop/01.png",
    mobCoverImage: "/images/projects/ifs/mob/01.png",

  },
  {
    slug: "lang-u",
    title: "Lang U",
    category: "Websites",
    excerpt: "Case study details for Lang U.",
    coverImage: "/images/projects/lang-u/desktop/01.png",
    mobCoverImage: "/images/projects/lang-u/mob/01.png",

  },
  {
    slug: "mps",
    title: "MPS",
    category: "Branding",
    excerpt: "Case study details for MPS.",
    coverImage: "/images/projects/mps/desktop/01.png",
    mobCoverImage: "/images/projects/mps/mob/01.png",

  },
  {
    slug: "play-zone",
    title: "Play Zone",
    category: "Websites",
    excerpt: "Case study details for Play Zone.",
    coverImage: "/images/projects/play-zone/desktop/01.png",
    mobCoverImage: "/images/projects/play-zone/mob/01.png",

  },
  {
    slug: "prime-shield",
    title: "Prime Shield",
    category: "Websites",
    excerpt: "Case study details for Prime Shield.",
    coverImage: "/images/projects/prime-shield/desktop/01.png",
    mobCoverImage: "/images/projects/prime-shield/mob/01.png",

  },
];

export function getProjectManifestBySlug(slug: string) {
  return projectsManifest.find((project) => project.slug === slug);
}
export function getProjectsManifest(){
  return projectsManifest
}