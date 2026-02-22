import Image from "next/image"
export function ServicesDetails() {
    return (
        <section className="ServiceDetails min-h-[100svh] mt-[var(--nav-h)] flex items-center justify-center bg-third flex-col">
            <div className="container-80">
                <div className="flex">
                    <div className="w-1/4 relative h-[220px] md:h-[260px] shrink-0 mb-8">
                        <Image
                            src="/images/services/website.png"
                            alt="Services Details"
                            fill
                            sizes="(max-width: 768px) 220px, 260px"
                            className="object-contain"
                        />
                    </div>
                    <div className="w-3/4 mb-8">
                        <h2 className="text-4xl font-bold mb-4">Websites & SEO</h2>
                        <p>PlayZone is a youth-focused football platform designed to connect young players with local matches, 
                            teams, and opportunities to play regularly. 
                            The goal of the project was to create a clear marketing strategy that positions PlayZone not just as an app, but as a gateway to real play, real competition, and real community.</p>
                    </div>
                </div>
                <div>
                    <h2 className="text-4xl font-bold mb-8">What do we offer?</h2>
                    <p>We were responsible for defining the full Marketing Strategy, including:</p>
                    <ul className="list-disc">
                        <li>Market Positioning</li>
                        <li>Audience Definition</li>
                        <li>Core Messaging</li>
                        <li>Go-To-Market Direction</li>
                        <li>Communication Strategy</li> 
                    </ul>
                </div>
                <div>
                    <h2 className="text-4xl font-bold mb-4">Why is this service important?</h2>
                    <p className="">Key Insights</p>
                    <ul className="list-disc">
                        <li>Young players don’t feel seen by professional football platforms</li>
                        <li>Playing football is more about community than performance</li>
                        <li>Organization is the biggest barrier, not skill or passion</li> 
                    </ul>
                </div>
                <div className="mt-8 flex justify-end">
                    <button className="px-8 py-4 bg-primary text-white rounded-br-[50px] mt-8">Contact Us</button>
                </div>
                
            </div>
        </section>
    )
}