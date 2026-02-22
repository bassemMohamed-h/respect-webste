import { OurScribble } from "@/components/brand/OurScribble";

type SectionHeaderProps = {
  title: string;
  description?: string;
};

export function SectionHeader({ title, description }: SectionHeaderProps) {

  return (
   <div className="relative min-h-[100svh] flex justify-center items-center " >
        <OurScribble className="text-secondary"/>
        <h3 className="absolute text-primary text-8xl bottom-[37%]">{title}</h3>  
        {description && <p className="absolute bottom-20 text-primary text-xl">{description}</p>}
    </div>
  );
}
