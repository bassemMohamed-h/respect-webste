import {allPages} from "contentlayer/generated";
import { notFound } from "next/navigation";
import { MDXContent } from "@/components/mdx/MDXContent";

export default function AboutPage() {
    const page = allPages.find((page)=>page.slug ==="about");
    if(!page) notFound();
    return(
        <main>
            <h1>{page.title}</h1>
            <article>
                 <MDXContent code={page.body.code} />
            </article>
        </main>
    )
}