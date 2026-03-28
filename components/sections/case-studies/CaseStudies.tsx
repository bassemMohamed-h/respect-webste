"use client"
import Image from "next/image";
import { getProjectsManifest } from "@/components/data/projects";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

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
console.log(projects);

export function CaseStudies(){
    const sectionRef =  useRef<HTMLElement>(null);
    const trackRef =      useRef<HTMLDivElement>(null)
    const [isReady, setIsReady] = useState(false);
    const [activeCategory, setActiveCategory] = useState("ALL");
    const handleCategoryClick = (categoryTitle: string) => {
  if (categoryTitle === activeCategory) return;

  const st = ScrollTrigger.getById("case-studies-pin");

  if (!st) {
    setActiveCategory(categoryTitle);
    return;
  }

  window.scrollTo({
    top: st.start,
    behavior: "smooth",
  });

  window.setTimeout(() => {
    setActiveCategory(categoryTitle);
  }, 500);
};

    const filteredProjects = activeCategory === "ALL"? projects: projects.filter((project)=>project.category===activeCategory)

    // wait images load before animate 
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        setIsReady(false);
        const images = Array.from(track.querySelectorAll("img"));
        const waitForImages = async () => {
            await Promise.all(
                images.map((img) => {
                if (img.complete) {
                    return img.decode?.().catch(() => {}) ?? Promise.resolve();
                }

                return new Promise<void>((resolve) => {
                    const done = () => resolve();
                    img.addEventListener("load", done, { once: true });
                    img.addEventListener("error", done, { once: true });
                });
                })
            );
            setIsReady(true);
        };
        waitForImages();
    }, [activeCategory]);

    useGSAP(()=>{
        if (!isReady) return;
        const section = sectionRef.current
        const track = trackRef.current
        if (!section || !track) return;
        gsap.set(track, { x: 0 });
        const distance = ()=> Math.max(0, track.scrollWidth - section.clientWidth )

        console.log("scroll Width = ", distance())
        const tween = gsap.to(track,{
            x:()=> -distance(),
            ease: "none",
            scrollTrigger:{
                id: "case-studies-pin",
                trigger:section,
                start:"top top",
                end:()=> `+=${distance()}`,
                pin:true,
                scrub:true,
                invalidateOnRefresh: true,
                snap: filteredProjects.length > 1
                ? {
                    snapTo: 1 / (filteredProjects.length - 1),
                    duration: 0.3,
                    delay: 0.1,
                    ease: "power1.inOut",
                    }
                : undefined
                }
        })
        requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
        return()=>{
            tween.scrollTrigger?.kill();
            tween.kill()
        }
    },
    {   
        scope:sectionRef, 
        dependencies:[isReady,activeCategory],
        revertOnUpdate: true,
    })
    
    return(
        <section ref={sectionRef} className="min-h-screen ">
            <div className="grid grid-cols-2 gap-4 pt-[var(--nav-h)] mb-10 container-80 ">
                {categories.map((category, index)=>{
                    const isActive = activeCategory === category.title;
                    return(
                        <button 
                            key= {index} 
                            type="button"
                            onClick={()=>handleCategoryClick(category.title)}
                            className={`flex gap-2 text-third rounded-br-[50px] flex-1 items-center first:justify-center px-2 
                             ${isActive? "bg-forth":"bg-primary hover:bg-forth cursor-pointer"}`}
                        >
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
                    </button>
                    )
                }   
                )}
            </div>
            <div className="overflow-hidden" >
                <div ref={trackRef} className="flex gap-4 ">
                    {filteredProjects.map((project, index)=>{
                        console.log("filtered projects:",project," activeCategory:",activeCategory)
                        return(
                            // <Link 
                        //     key={index}

                        // >
                            <Image
                                key={index}
                                src={project.coverImage}
                                alt={project.title}
                                width={1200}
                                height={800}
                                className="w-auto h-auto rounded-br-[96px] shrink-0"
                            />
                        // </Link>
                        )
                    }
                    )}
                </div>
               
            </div>
        </section>
    )
}