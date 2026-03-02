import { LetsScribble } from "@/components/brand/LetsScribble";
import { ContactSoical } from "@/components/sections/contact/ContactSoical";
import { Contact } from "@/components/sections/home/Contact";
import { LetsConnectHeader } from "@/components/ui/LetsConnectHeader";

export default function ContactPage() {
    return(
        <section className="ContactPage">
            <LetsConnectHeader title="Connect" description="We believe good work starts with an honest conversation. If you have a project, a question, or just an idea you’d like to explore, we’re here to listen."/>
            <ContactSoical/>
            {/* <div className="container-80 mx-auto flex flex-col md:flex-row gap-12 mt-20">
                <div className="Left flex-1 ">
                    <h4 className="text-primary font-bold text-[32px]"> Reach Out Directly</h4>
                    <div className="">
                        <div className="Gmail border-primary rounded-rb-[132px] flex gap-2">
                             <a
                                href="https://www.facebook.com/share/1DDmj1Rqw3/"
                                target="_blank"
                                className="link-button w-[25%]"
                                >
                                <FontAwesomeIcon icon={faFacebookF} />
                                <span>Facebook</span>
                                <div className="arrow">
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </div>
                                </a>
                                <h5 className="text-primary text-[24px]">Email</h5>
                                <p></p>
                        </div>
                    </div>

                </div>
                <div className="Right flex-1">
                    <h4 className="text-primary font-bold text-[32px]"> Send us a message</h4>
                     <Contact/>
                </div>
            </div> */}
             <Contact/>
        </section>
       
    )
}