export function Services() {
  const services = [
    {name:"Branding", img:"/images/services/branding.png"},
    {name:"Websites & SEO", img:"/images/services/website.png"},
    {name:"Paid ADS", img:"/images/services/paid-ads.png"},
    {name:"Content & Production", img:"/images/services/content.png"},
    {name:"Digital Marketing", img:"/images/services/marketing.png"},
  ];

  return (
    <section className="flex items-end min-h-[100svh] ">
        <div className="grid w-full grid-cols-5">
          {services.map((service, index) => (
            <div
              key={service.name}
              className={`relative min-h-[100svh] overflow-hidden rounded-br-[150px] ${
                index % 2 === 0 ? "bg-primary" : "bg-primary/60"
              }`}
            >
              {/* image */}
              <div className="absolute top-0 left-5 bg-cover bg-center w-full h-[50%] opacity-50">
                <img
                  src={service.img}
                  alt={service.name}
                  className="object-cover w-full h-full"
                />
              </div>
              {/* number */}
              <div className="absolute bottom-10 right-6 text-9xl font-semibold text-third/90">
                {index + 1}
              </div>

              {/* vertical label */}
              <div className="absolute bottom-10 left-20 origin-bottom-left -rotate-90">
                <p className="text-7xl font-semibold text-third w-[100svh]">
                  {service.name}
                </p>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
}
