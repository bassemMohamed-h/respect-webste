import Image from "next/image";

// type CaseStudyMeta = {
//   title: string;
//   description: string;
//   coverImage: string;
//   slug: string;
//   client?: string;
//   service?: string;
//   studyType?: string;
//   year?: number;
// };
type ProjectImage ={
  src:string,
  alt:string
}
type CaseStudyMeta = {
  title:string,
  slug:string,
  bgColor:string
  desktopImages:ProjectImage[],
  mobileImages:ProjectImage[]
}

type Props = {
  item: CaseStudyMeta | null;
};
export function CaseStudiesDetails({ item }: Props) {
  if (!item) return null;
  
  return (
    <section
      id={item.slug}
      className={`CaseStudiesDetails`}
       style={{ backgroundColor: item.bgColor }}
    >
      <div className="min-h-[100svh] py-[var(--nav-h)] container-80">
        {item.desktopImages.map((image,index)=>(
         <Image 
         key={index}
        src={image.src}
        alt={image.alt}
        width={1200}
        height={800}
        className="h-auto w-full object-contain"
      />
      ))}
      </div>
      {/* <div className="container-80 mt-[var(--nav-h)]">
        <div className="Description flex gap-8 mb-30">
          <div className="projectHeader flex-1">
            <h2 className="text-primary text-4xl mb-4">{item.title}</h2>

            <h3 className="text-primary text-xl">
              {item.studyType ?? "Case Study"}
              {item.year ? ` • ${item.year}` : ""}
            </h3>

            <div className="relative h-full">
              <Image
                src={item.coverImage}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-primary text-4xl mb-8">Project Overview</h3>
            <p>{item.description}</p>
          </div>
        </div>

        <div className="OurRole mb-12">
          <h3 className="text-primary text-4xl mb-4">Our Role</h3>
          <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <ul className="list-disc">
            <li>Market Positioning</li>
            <li>Audience Definition</li>
            <li>Core Messaging</li>
            <li>Go-to-Market Direction</li>
            <li>Communication Strategy</li>
          </ul>
        </div>

        <div className="Research&Insights mb-12">
          <h3 className="text-primary text-4xl mb-4">Research & Insights</h3>
          <div className="desc flex ">
            <div className="Key Insights">
              <h4 className="text-black text-3xl mb-4">Key Insights</h4>
              <ul className="list-disc">
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              </ul>
            </div>
            <div className="ResearchFocus">
              <h4 className="text-black text-3xl mb-4">Research Focus</h4>
              <ul className="list-disc">
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="StrategyDirection mb-12">
          <h3 className="text-primary text-4xl mb-4">Strategy Direction</h3>
          <p> necessitatibus veniam quos, enim voluptatem recusandae consequuntur, natus delectus! Vel architecto ullam itaque voluptas!</p>
          <p className="mb-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore praesentium eius. Quidem totam dolorem vel,</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <ul className="list-disc mb-12">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ul>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div> */}
      
    </section>
  );
}