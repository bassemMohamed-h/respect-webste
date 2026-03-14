import { ContactSoical } from "@/components/sections/contact/ContactSoical";
import { Contact } from "@/components/sections/home/Contact";
import { LetsConnectHeader } from "@/components/ui/LetsConnectHeader";

export default function ContactPage() {
    return(
        <section className="ContactPage">
            <LetsConnectHeader 
                title="Connect" 
                description="We believe good work starts with an honest conversation. If you have a project, a question, or just an idea you’d like to explore, we’re here to listen."
            />
            <ContactSoical/>
             <Contact/>
        </section>
       
    )
}