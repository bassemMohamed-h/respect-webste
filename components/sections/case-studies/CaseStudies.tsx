import Image from "next/image";

export function CaseStudies(){
    return(
        <section className="min-h-[100svh] bg-secondary">
                <div className="flex gap-8 bg-third rounded-br-[50px]">
                    <Image
                        src="/images/bird.png"
                        alt="test"
                        width={1200}
                        height={800}
                        className="h-15 w-15"
                    />
                    <p>ALL</p>
                </div>
                <div className="flex rounded-8">
                     <Image
                        src="/images/bird.png"
                        alt="test"
                        width={1200}
                        height={800}
                        className="h-auto w-auto"
                    />
                </div>
        </section>
    )
}