import { SloganMark } from "@/components/brand/RespectWordmark";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getAllCaseStudies } from "@/components/lib/case-studies";
import { CaseStudiesPageClient } from "@/components/sections/case-studies/CaseStudiesPageClient";

export default function CaseStudies() {
  const items = getAllCaseStudies().map((cs) => ({
    title: cs.title,
    description: cs.description,
    coverImage: cs.coverImage,
    slug: cs.slug,
    client: cs.client,
    service: cs.service,
    studyType: cs.studyType,
    year: cs.year,
  }));

  return (
    <main>
      <SectionHeader
        title="Work"
        description="Selected work shaped by strategy, values, and thoughtful execution."
      />

      <div className="min-h-[100svh] flex items-center justify-center bg-primary">
        <div className="container-80 text-secondary">
          <SloganMark />
        </div>
      </div>

      <CaseStudiesPageClient items={items} />
    </main>
  );
}