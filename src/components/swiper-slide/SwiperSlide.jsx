"use client";

import React from "react";
import { useRef, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const flags = [
  { src: "/src/assets/images/flag-1.png" },
  { src: "/src/assets/images/flag-2.png" },
  { src: "/src/assets/images/flag-3.png" },
  { src: "/src/assets/images/flag-4.png" },
  { src: "/src/assets/images/flag-5.png" },
  { src: "/src/assets/images/flag-6.png" },
  { src: "/src/assets/images/flag-7.png" },
  { src: "/src/assets/images/flag-8.png" },
  { src: "/src/assets/images/flag-9.png" },
  { src: "/src/assets/images/flag-10.png" },
  { src: "/src/assets/images/flag-11.png" },
];

// Create a buffer array to separate the first and last flags
const bufferFlags = Array(1).fill({ src: null }); 
const duplicateFlags = [...bufferFlags, ...flags,  ];


export default function FlagsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: true,
      duration: 10000, 
    },
    [Autoplay({ delay: 0, stopOnInteraction: false })]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = emblaApi.plugins().autoplay;
    if (autoplay) {
      autoplay.play();
      // Start at the middle of the duplicated flags
      emblaApi.scrollTo(flags.length + bufferFlags.length);
    }
  }, [emblaApi]);

  return (
    <section className="relative bg-[#E6E0EC] py-5 md:py-7 rounded-2xl overflow-hidden">
      <div className="max-w-[1224px] mx-auto px-6">
        {/* Title Section remains the same */}
        <div className="text-left mb-8">
          <h2 className=" text-[18px] md:text-[24px] font-semibold text-[#1D1D1F] mb-2 text-center md:text-left">
            Top Countries
          </h2>
          <p className="text-[12px] md:text-[14px] text-[#4B4B4B] font-normal text-center md:text-left">
            Our Spread Across The World
          </p>
        </div>
      </div>

      <div className="relative mb-[40px] pt-[17px]">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-[#E6E0EC] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-[#E6E0EC] to-transparent pointer-events-none" />

        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex gap-[45px]">
            {duplicateFlags.map((flag, index) => (
              <div key={index} className="embla__slide flex-[0_0_auto] min-w-0">
                {flag.src ? (
                  <img
                    src={flag.src}
                    alt={`Flag ${index + 1}`}
                    className="rounded-lg w-[96px] h-[67px] object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-[96px] h-[67px] opacity-0" /> // Invisible spacer
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}