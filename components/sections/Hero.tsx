import {allPages} from "contentlayer/generated";
import { notFound } from "next/navigation";
import { MDXContent } from "@/components/mdx/MDXContent";
export default function Hero() {
    const page = allPages.find((page)=>page.slug ==="home");
    if(!page) notFound();
    return (
        <section className="container-80 py-20">
        </section>
    );
}