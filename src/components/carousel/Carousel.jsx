"use client";

import React from "react";
import { useRef, useEffect } from "react";
import docter from "../../assets/images/doctor.svg";
import quteIcon from "../../assets/images/quotes.svg";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { DotButton, useDotButton } from "./Carousel-dots";

const testimonials = [
  {
    id: 1,
    name: "Dr. Aisha Thomas",
    country: "USA",
    text: "Studying medicine abroad was daunting, but their guidance made everything seamless and achievable.",
    image: docter,
  },
  {
    id: 2,
    name: "Dr. John Smith",
    country: "UK",
    text: "They simplified every process, from application to admission. Grateful for their support.",
    image: docter,
  },
  {
    id: 3,
    name: "Dr. Li Wei",
    country: "China",
    text: "Thanks to their team, I found the right university that fits my career goals.",
    image: docter,
  },
  {
    id: 4,
    name: "Dr. Ana Souza",
    country: "Brazil",
    text: "Professional and personal guidance helped me overcome all doubts.",
    image: docter,
  },
];

export function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 2000 })]
  );

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  return (
    <section className="bg-global-8 py-12 sm:py-16 md:py-20">
      <div className="w-full max-w-[1152px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="anek-malayalam text-[24px] md:text-[60px] font-medium bg-gradient-to-r from-[#BA315A] to-[#69378F] bg-clip-text text-transparent mb-4">
            Their Journey, Our Mission
          </h2>
          <p className="text-[16px] text-gray-600 max-w-4xl mx-auto">
          Guided by experienced doctors, our directors understand what it takes to succeed in medicine. With their leadership, every step you take is supervised with care, precision, and a deep commitment to your future in healthcare.
          </p>
        </div>

        {/* Carousel */}
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex gap-6">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="embla__slide flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0"
              >
                <div className="card-wraper py-[30px]">
                  <div className="bg-[#F5F7FA] rounded-t-[10%] rounded-br-[10%] flex flex-col justify-between h-full max-w-[283px] md:w-[283px] max-h-[330px] md:h-[330px] mx-auto">
                    <div className="top-sec pt-[30px] px-[22px]">
                      <div className="text-4xl text-gray-300 mb-4">
                        <img src={quteIcon} alt="" />
                      </div>
                      <p className="anek-malayalam text-sm md:text-[18px] text-gray-800 mb-6 max-w-[237px]">
                        {item.text}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-auto bg-white w-[70%] py-[20px] rounded-tr-xl">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-sm">{item.name}</p>
                        <p className="text-xs text-gray-500">{item.country}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
       <div className="flex justify-center gap-2 mt-6">
  {scrollSnaps.map((_, index) => (
    <DotButton
      key={index}
      selected={index === selectedIndex}
      onClick={() => onDotButtonClick(index)}
    />
  ))}
</div>
      </div>
    </section>
  );
}

export default TestimonialCarousel;
