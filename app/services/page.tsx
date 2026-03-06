"use client";
import { OurScribble } from "@/components/brand/OurScribble";
import { Contact } from "@/components/sections/home/Contact";
import { Services } from "@/components/sections/home/Services";
import { ServicesDetails } from "@/components/sections/services/ServicesDetails";
import { LetsConnectHeader } from "@/components/ui/LetsConnectHeader";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Slogan } from "@/components/ui/Sloagn";
import { allServices } from "contentlayer/generated";
import { useEffect, useState } from "react";

export default function ServicesPage(){
    const sortedServices = [...allServices].sort(
        (a, b) => (a.order ?? 999) - (b.order ?? 999)
    ).slice(0, 5);

    const [activeSlug, setActiveSlug] = useState(
    sortedServices[0]?.slug ?? ""
    );

    useEffect(() => {
        const slugFromHash = window.location.hash.replace("#", "");
        if (!slugFromHash) return;

        const exists = sortedServices.some((s) => s.slug === slugFromHash);
        if (!exists) return;

        // set active service
        setActiveSlug(slugFromHash);

        // scroll after React paints the details
        requestAnimationFrame(() => {
            document
            .getElementById("service-details")
            ?.scrollIntoView({ behavior: "smooth" });
        });
    }, [sortedServices]);
    return(
        <main>
            <SectionHeader 
            title={{
                name:"Services", className:""
            }} 
            description={{
                name:"We offer integrated solutions that cover the brand's journey from the inside out.",
                className:"text-black text-[32px]"
            }}
            Svg={<OurScribble className="text-secondary" />}
            />
            <Slogan 
                animated = {true}
                className="bg-primary text-primary overflow-hidden"
                title={{ 
                    text: "Design is not decoration It is a way of thinking", className: "text-center text-secondary" }}
                description={{ 
                    text: "Respect was founded to build brands that are clearly understood, earn trust, and operate through structured systems.", 
                    className: "text-center text-third text-[27px] font-semibold" }}
            />
            <Services services={sortedServices}
            activeSlug={activeSlug}
            onSelect={setActiveSlug}
            baseHref="" // because we're already on /services
            />
            <ServicesDetails services={sortedServices} activeSlug={activeSlug} />
            <LetsConnectHeader title="Connect"/>
            <Contact/>
        </main>
        
    )
}