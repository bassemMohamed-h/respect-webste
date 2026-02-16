"use client";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
// import { useRef } from "react";

// export function LatestWorkCarousel() {
//   const autoplay = useRef(
//     Autoplay({
//       delay: 4000,
//       stopOnMouseEnter: false,
//       stopOnInteraction: false,
//     })
//   );
//   const [emblaRef, emblaApi] = useEmblaCarousel(
//     { loop: true },
//     [autoplay.current]
//   );
//     const scrollPrev = () => emblaApi?.scrollPrev();
//     const scrollNext = () => emblaApi?.scrollNext();

//   return (
//     // <div className="group relative overflow-hidden bg-primary min-h-[100svh]" ref={emblaRef}>
//     //     <div className="flex " >
//     //         {[1, 2, 3, 4, 5].map((i) => (
//     //             <div key={i} className="w-[100%] flex">
//     //                 <div className="relative min-h-[calc(100svh-var(--nav-h))] overflow-hidden rounded-[32px]">
//     //                     <div className="absolute inset-0 bg-black/20" >hello</div>
//     //                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

//     //                     <div className="absolute bottom-6 left-6">
//     //                     <p className="text-2xl font-semibold text-white">Project {i}</p>
//     //                     <p className="mt-2 max-w-sm text-sm text-white/80">
//     //                         This product was designed from scratch to application.
//     //                     </p>
//     //                     </div>
//     //                 </div>
//     //             </div>
//     //         ))}
//     //     </div>
//     //     {/* Left Arrow */}
//     //     <button
//     //     onClick={scrollPrev}
//     //     className="absolute left-6 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-3 opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100 hover:bg-white/30"
//     //     >
//     //     ←
//     //     </button>

//     //     {/* Right Arrow */}
//     //     <button
//     //     onClick={scrollNext}
//     //     className="absolute right-6 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-3 opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100 hover:bg-white/30"
//     //     >
//     //     →
//     //     </button>
//     // </div>
// );
// }
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export function LatestWorkCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()])

  const goToPrev = () => emblaApi?.scrollPrev()
  const goToNext = () => emblaApi?.scrollNext()

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.plugins().autoplay?.play()
  }, [emblaApi])

  return (
    <div className="embla bg-primary min-h-[100svh] flex relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">Slide 1</div>
          <div className="embla__slide">Slide 2</div>
          <div className="embla__slide">Slide 3</div>
        </div>
      </div>

      <button   className="embla__prev absolute top-1/2 left-6 z-10 -translate-y-1/2 rounded-full bg-white/20 p-3" 
                onClick={goToPrev}>
        Scroll to prev
      </button>
      <button className="embla__next absolute top-1/2 right-6 z-10 -translate-y-1/2 rounded-full bg-white/20 p-3" onClick={goToNext}>
        Scroll to next
      </button>
    </div>
  )
}