import { Contact } from "@/components/sections/home/Contact";
import { Services } from "@/components/sections/home/Services";
import { ServicesDetails } from "@/components/sections/services/ServicesDetails";
import { LetsConnectHeader } from "@/components/ui/LetsConnectHeader";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Slogan } from "@/components/ui/Sloagn";

export default function ServicesPage(){
    return(
        <main>
            <SectionHeader title="Services" 
            description="We offer integrated solutions that cover the brand's journey from the inside out."
            />
            <Slogan 
                className="bg-primary"
                title={{ text: "Design is not decoration It is a way of thinking", className: "text-center text-secondary" }}
                description={{ text: "Respect was founded to build brands that are clearly understood, earn trust, and operate through structured systems.", className: "text-center text-third" }}
            />
            <Services/>
            <ServicesDetails/>
            <LetsConnectHeader/>
            <Contact/>
        </main>
        
    )
}