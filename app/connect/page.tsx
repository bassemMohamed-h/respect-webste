"use client";
import { LetsScribble } from "@/components/brand/LetsScribble";
import { useTextMaskRevealGroup } from "@/components/gsap/useTextMaskReveal";
import { Contact } from "@/components/sections/home/Contact";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faChevronLeft, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function ConnectPage() {
      const blockRef = useTextMaskRevealGroup<HTMLDivElement>();
    
    return(
        <section className="ConnectPage">
            {/* Section Header lg Screen */}
            <SectionHeader 
                title={{
                name:"CONNECT", className:""
                }}
                description={{name:"We believe good work starts with an honest conversation. If you have a project, a question, or just an idea you’d like to explore, we’re here to listen.",
                            className:"text-2xl container-80"
                }}
                Svg={<LetsScribble className="text-secondary" />}
                className="hidden lg:flex"
            />
            {/* Section Header mob Screen */}
            <div ref={blockRef} className="contactHeaderMob container-80 lg:hidden mt-[var(--nav-h)]">
                <h1 className="text-primary font-bold text-5xl">Let’s talk, calmly.</h1>
                <p className="text-black mt-5 text-xl">We believe good work starts with an honest conversation. If you have a project, a question, or just an idea you’d like to explore, we’re here to listen.</p>
            </div>
            <div className="container-80 mx-auto flex flex-col lg:flex-row gap-12 mt-20">
                <div className="Left flex-1">
                    <h4 className="text-primary font-bold text-[32px]"> Reach Out Directly</h4>
                    <div className="py-16 flex flex-col gap-12">
                        <div className="Gmail border border-primary rounded-br-[132px] flex gap-4 py-6 px-3">
                            <a
                            href="mailto:respect.ownerr@gmail.com"
                            target="_blank"
                            className=" inline-flex items-center justify-center"
                            >
                                <FontAwesomeIcon icon={faEnvelope} size="2xl"/>
                            </a>
                            <div className="">
                                <h5 className="text-primary text-[24px]">Gmail</h5>
                                <p className="text-sm">respect.ownerr@gmail.com</p>
                            </div>
                            
                        </div>
                        <div className="Whatsapp border border-primary rounded-br-[132px] flex gap-6 py-6 px-3">
                            <a
                            href="https://wa.me/20111265664"
                            target="_blank"
                            className=" inline-flex items-center justify-center"
                            >
                                <FontAwesomeIcon icon={faWhatsapp} size="2xl"/>
                            </a>
                            <div className="">
                                <h5 className="text-primary text-[24px]">Whats App</h5>
                                <p>+20111265664</p>
                            </div>
                            
                        </div>
                        <div className="Gmail border border-primary rounded-br-[132px] flex gap-6 py-6 px-3">
                            <a
                            href="tel:+201234567890"
                            target="_blank"
                            className=" inline-flex items-center justify-center"
                            >
                                <FontAwesomeIcon icon={faPhone} size="2xl"/>
                            </a>
                            <div className="">
                                <h5 className="text-primary text-[24px]">Phone</h5>
                                <p >+20111265664</p>
                            </div>
                            
                        </div>
                    </div>

                </div>
                <div className="Right flex-1">
                    <h4 className="text-primary font-bold text-[32px]"> Send us a message</h4>
                     <Contact/>
                </div>
            </div>
        </section>
       
    )
}