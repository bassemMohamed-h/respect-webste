"use client";

import { useEffect, useMemo, useState } from "react";
import { CaseStudiesCarousel } from "@/components/sections/case-studies/CaseStudiesCarousel";
import { CaseStudiesDetails } from "@/components/sections/case-studies/CaseStudiesDetails";

type CaseStudyMeta = {
  title: string;
  description: string;
  coverImage: string;
  slug: string;
  client?: string;
  service?: string;
  studyType?: string;
  year?: number;
};

type Props = {
  items: CaseStudyMeta[];
};

export function CaseStudiesPageClient({ items }: Props) {
  const [activeSlug, setActiveSlug] = useState<string>(() => items[0]?.slug ?? "");

  // read hash on first load (for Home -> /case-studies#slug)
 useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;

      const exists = items.some((x) => x.slug === hash);
      if (!exists) return;

      setActiveSlug(hash);

      requestAnimationFrame(() => {
        document.getElementById("case-study-details")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    };

    // initial load (Home -> /case-studies#slug)
    applyHash();

    // back/forward/manual hash changes
    window.addEventListener("hashchange", applyHash);

    return () => {
      window.removeEventListener("hashchange", applyHash);
    };
  }, [items]);

  const activeItem = useMemo(() => {
    return items.find((x) => x.slug === activeSlug) ?? null;
  }, [items, activeSlug]);

  return (
    <>
      <div className="">
        <CaseStudiesCarousel
          items={items}
          baseHref="/case-studies"
          onSelect={(slug) => {
            setActiveSlug(slug);
          }}
        />
      </div>

      <CaseStudiesDetails item={activeItem} />
    </>
  );
}