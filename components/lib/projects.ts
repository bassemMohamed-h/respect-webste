
import fs from "node:fs/promises";
import path from "node:path";
import {
  getProjectManifestBySlug,
  type ProjectManifestItem,
} from "@/components/data/projects";

const PROJECTS_ROOT = path.join(process.cwd(), "public", "images", "projects");

const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif"]);

export type ProjectImage = {
  src: string;
  alt: string;
};

export type ProjectWithImages = ProjectManifestItem & {
  desktopImages: ProjectImage[];
  mobileImages: ProjectImage[];
};

function isImageFile(fileName: string) {
  return IMAGE_EXTENSIONS.has(path.extname(fileName).toLowerCase());
}

function sortByFileName(a: string, b: string) {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
}

async function readProjectImages(
  slug: string,
  variant: "desktop" | "mob",
  title: string,
): Promise<ProjectImage[]> {
  const folderPath = path.join(PROJECTS_ROOT, slug, variant);

  try {
    const entries = await fs.readdir(folderPath, { withFileTypes: true });

    const fileNames = entries
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)
      .filter(isImageFile)
      .sort(sortByFileName);

    return fileNames.map((fileName, index) => ({
      src: `/images/projects/${slug}/${variant}/${fileName}`,
      alt: `${title} ${variant === "desktop" ? "desktop" : "mobile"} image ${index + 1}`,
    }));
  } catch (error) {
    const err = error as NodeJS.ErrnoException;

    if (err.code === "ENOENT") {
      return [];
    }

    throw error;
  }
}

export async function getProjectBySlug(
  slug: string,
): Promise<ProjectWithImages | null> {
  const project = getProjectManifestBySlug(slug);

  if (!project) return null;

  const [desktopImages, mobileImages] = await Promise.all([
    readProjectImages(slug, "desktop", project.title),
    readProjectImages(slug, "mob", project.title),
  ]);

  return {
    ...project,
    desktopImages,
    mobileImages,
  };
}