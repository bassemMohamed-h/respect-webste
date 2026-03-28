import { LetsScribble } from "@/components/brand/LetsScribble";
import { ContactSoical } from "@/components/sections/contact/ContactSoical";
import { Contact } from "@/components/sections/home/Contact";
import { LetsConnectHeader } from "@/components/ui/LetsConnectHeader";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function ContactPage() {
    return(
        <section className="ContactPage">
            <SectionHeader 
                title={{name: "Connect" }}
                description={{name:`We believe good work starts with an honest conversation.
                                If you have a project, a question, or just an idea you’d like to explore,
                                we’re here to listen.
                            `}}
                Svg={<LetsScribble/>}
            />
            <ContactSoical/>
             <Contact/>
        </section>
       
    )
}