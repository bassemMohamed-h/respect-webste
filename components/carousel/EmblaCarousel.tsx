"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import type { EmblaPluginType } from "embla-carousel";

type EmblaCarouselProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;

  options?: EmblaOptionsType;
  plugins?: EmblaPluginType[];

  className?: string;       // wrapper section
  viewportClassName?: string; // embla viewport
  trackClassName?: string;    // track (flex row)
  slideClassName?: string;    // each slide width + spacing

  showArrows?: boolean;
  prevLabel?: string;
  nextLabel?: string;
  arrowClassName?: string;
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
  prevLabel = "Prev",
  nextLabel = "Next",
  arrowClassName,
}: EmblaCarouselProps<T>) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);

  const goToPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const goToNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className={className}>
      <div className={viewportClassName ?? "overflow-hidden"} ref={emblaRef}>
        <div className={trackClassName ?? "flex"}>
          {items.map((item, index) => (
            <div
              key={index}
              className={slideClassName ?? "min-w-0 flex-[0_0_100%]"}
            >
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>

      {showArrows && (
        <>
          <button
            type="button"
            onClick={goToPrev}
            className={
              arrowClassName ??
              "absolute left-6 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-3"
            }
            aria-label={prevLabel}
          >
            {prevLabel}
          </button>
          <button
            type="button"
            onClick={goToNext}
            className={
              arrowClassName ??
              "absolute right-6 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-3"
            }
            aria-label={nextLabel}
          >
            {nextLabel}
          </button>
        </>
      )}
    </section>
  );
}