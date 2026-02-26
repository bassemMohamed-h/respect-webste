import { ContactSoical } from "@/components/sections/contact/ContactSoical";
import { Contact } from "@/components/sections/home/Contact";

export default function ContactPage() {
    return(
        <section className="min-h-[100svh] mt-[var(--nav-h)] container-80">
            <ContactSoical/>
            <Contact/>
        </section>
       
    )
}