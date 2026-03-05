"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType, EmblaPluginType, EmblaCarouselType } from "embla-carousel";

type EmblaCarouselProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;

  options?: EmblaOptionsType;
  plugins?: EmblaPluginType[];

  className?: string;         // wrapper section
  viewportClassName?: string; // embla viewport
  trackClassName?: string;    // track (flex row)
  slideClassName?: string;    // each slide width + spacing

  showArrows?: boolean;

  arrowClassName?: string;

  // ✅ expose embla api to parent (for wheel control, etc.)
  setApi?: (api: EmblaCarouselType) => void;
};

export function EmblaCarousel<T>({
  items,
  renderItem,
  options,
  plugins,

  className,
  viewportClassName,
  trackClassName,
  slideClassName,

  showArrows = false,
  arrowClassName,

  setApi,
}: EmblaCarouselProps<T>) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);

  React.useEffect(() => {
    if (emblaApi && setApi) setApi(emblaApi);
  }, [emblaApi, setApi]);

  const goToPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const goToNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className={className}>
      <div className={viewportClassName ?? "overflow-hidden"} ref={emblaRef}>
        <div className={trackClassName ?? "flex"}>
          {items.map((item, index) => (
            <div key={index} className={slideClassName ?? "min-w-0 flex-[0_0_100%]"}>
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}