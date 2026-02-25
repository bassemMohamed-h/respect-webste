export function Hero() {
  return (
    <section className="Hero container-80 min-h-[calc(100svh-var(--nav-h))] mt-[var(--nav-h)]">
          {/* Left: Title */}
          <div className="">
            <h1 className="text-primary font-semibold leading-[0.95] tracking-tight text-5xl sm:text-7xl lg:text-[148px]">
              <span className="block">Respect...</span>
              <span className="block">Digital</span>
              <span className="block">Market Agency</span>
            </h1>
          </div>

          {/* Right: Paragraph */}
          <div className="mt-10 max-w-xl ml-auto mb-10">
            <p className="text-xl leading-6 text-black/70 ">
              We are a strategy and digital marketing agency.
              We build brands that clearly grow, are fully functional.
            </p>
          </div>
    </section>
  );
}
