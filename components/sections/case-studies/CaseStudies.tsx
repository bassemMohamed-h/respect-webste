"use client"
import Image from "next/image";
import { getProjectsManifest } from "@/components/data/projects";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP,ScrollTrigger);

const categories = [
    {
        title:"ALL"
    },
    {
        icon:"/images/services/branding.png",
        title:"Branding"
    },
    {
        icon:"/images/services/website.png",
        title:"Websites"
    },
    {
        icon:"/images/services/ads.png",
        title:"Social Media"
    }
]
const projects = getProjectsManifest();
// console.log(projects);

export function CaseStudies(){
    const sectionRef = useRef<HTMLDivElement>(null);
    useGSAP(()=>{
        const section = sectionRef.current
        if (!section) return;
        console.log("scroll Width = ",section.scrollWidth)
    },
    {scope:sectionRef})
    return(
        <section ref={sectionRef} className="min-h-[100svh] bg-secondary ">
            <div className="grid grid-cols-2 gap-4 py-[50px] container-80 ">
                {categories.map((category, index)=>(
                    <div key= {index} className="flex gap-2 bg-third rounded-br-[50px] flex-1 items-center first:justify-center px-2 ">
                        {category.icon && (
                            <Image
                                src={category.icon}
                                alt="services"
                                width={1200}
                                height={800}
                                className=" h-10 w-10"
                            />
                        )}
                        <p>{category.title}</p>
                    </div>
                ))}
            </div>
            <div className="flex  gap-4 rounded-br-[96px] overflow-hidden" >
                {projects && projects.map((project, index)=>(
                    <Image
                        id={project.category}
                        key={index}
                        src={project.coverImage}
                        alt={project.title}
                        width={1200}
                        height={800}
                        className="w-auto h-auto"
                    />
                    ))}
            </div>
               
        </section>
    )
}