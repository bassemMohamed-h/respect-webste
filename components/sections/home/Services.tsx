export function Services() {
  const services = [
    "Branding",
    "Websites & SEO",
    "Paid ADS",
    "Content & Production",
    "Digital Marketing",
  ];

  return (
    <section className="flex items-end min-h-[100svh] ">
        <div className="grid w-full grid-cols-5">
          {services.map((service, index) => (
            <div
              key={service}
              className={`relative min-h-[100svh] overflow-hidden rounded-br-[150px] ${
                index % 2 === 0 ? "bg-primary" : "bg-primary/60"
              }`}
            >
              {/* number */}
              <div className="absolute bottom-10 right-6 text-9xl font-semibold text-primary-foreground/90">
                {index + 1}
              </div>

              {/* vertical label */}
              <div className="absolute bottom-10 left-20 origin-bottom-left -rotate-90">
                <p className="text-7xl font-semibold text-primary-foreground w-[100svh]">
                  {service}
                </p>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
}
