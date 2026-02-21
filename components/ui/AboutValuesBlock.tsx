import type { ComponentType } from "react";

type AboutValuesBlockProps = {
  title: string;
  description: string;
  Icon: ComponentType;     // <-- pass the SVG component here (Five, Heart, etc.)
  className?: string;
};

export function AboutValuesBlock({
  title,
  description,
  Icon,
  className = "",
}: AboutValuesBlockProps) {
  return (
    <section className= {className}>
        <Icon />
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/8 z-1 w-full mx-auto mb-16 ">
            <h2 className="text-9xl font-bold mb-4 text-center">{title}</h2>
            <p className="text-2xl leading-relaxed w-full container-80 mb-4">
            {description}
            </p>
        </div>
    </section>
  );
}