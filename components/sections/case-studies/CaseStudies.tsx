import Image from "next/image";

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

export function CaseStudies(){
    return(
        <section className="min-h-[100svh] bg-secondary ">
            <div className="grid grid-cols-2 gap-4 pt-[var(--nav-h)] container-80 ">
                {categories.map((category, index)=>(
                    <div key= {index} className="flex gap-2 bg-third rounded-br-[50px] flex-1 items-center first:justify-center px-2 ">
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
                    </div>
                ))}
            </div>
            
               
        </section>
    )
}