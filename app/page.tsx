import { allPages } from "contentlayer/generated";
import { MDXContent } from "@/components/mdx/MDXContent";

export default function HomePage() {
  const page = allPages.find((p) => p.slug === "home");

  if (!page) return null;

  return (
    <main className="container-95">
      <h1 className="text-3xl font-semibold">{page.title}</h1>
      <div className="prose mt-6 max-w-none">
        <h1 className="text-5xl font-bold">Roobert Test</h1>
        <p className="text-lg mt-4">This is body text</p>
        <div className="bg-primary text-secondary p-10">
            Primary Background
            </div>

            <div className="bg-secondary text-primary p-10">
            Secondary Background
            </div>

        <MDXContent code={page.body.code} />
      </div>
    </main>
  );
}
