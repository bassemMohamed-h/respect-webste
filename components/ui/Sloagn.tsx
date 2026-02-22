type SloganProps = {
    title: {
        text: string;
        className?: string;
    }
    description:{
        text: string,
        className?: string;
    }
    className?: string;
};

export function Slogan({ title, description, className }: SloganProps) {
    return (
        <section className={`Slogan min-h-[100svh] flex items-center justify-center ${className}`}>
            <div>
                <h2 className={`text-5xl font-bold tracking-widest mb-20 ${title.className}`}>
                   {title.text}
                </h2>
               <p className={`text-xl leading-relaxed w-[50%] mx-auto ${description.className}`}>
                   {description.text}
                </p>
            </div>
        </section>
    )
}