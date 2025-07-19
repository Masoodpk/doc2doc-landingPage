import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const flags = [
  { src: "src/assets/images/flag-1.png" },
  { src: "src/assets/images/flag-2.png" },
  { src: "src/assets/images/flag-3.png" },
  { src: "src/assets/images/flag-4.png" },
  { src: "src/assets/images/flag-5.png" },
  { src: "src/assets/images/flag-6.png" },
  { src: "src/assets/images/flag-7.png" },
  { src: "src/assets/images/flag-8.png" },
  { src: "src/assets/images/flag-9.png" },
  { src: "src/assets/images/flag-10.png" },
  { src: "src/assets/images/flag-11.png" },
];

const SwiperFlags = () => {
  return (
    <section className="relative bg-[#E6E0EC] py-7  rounded-2xl overflow-hidden">
      <div className="max-w-[1224px] mx-auto px-6 ">
        {/* Title Section aligned left */}
        <div className="text-left mb-8">
          <h2 className="text-[24px] sm:text-3xl font-semibold text-[#1D1D1F] mb-2">
            Top Countries
          </h2>
          <p className="text-[14px]  text-[#4B4B4B] font-normal">
            Our Spread Across The World
          </p>
        </div>
      </div>

      {/* Swiper + Gradient */}
      <div className="relative mb-[40px] pt-[17px]">
        {/* Left gradient overlay */}
        <div className="absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-[#E6E0EC] to-transparent pointer-events-none" />

        {/* Swiper */}
        <Swiper
          modules={[Autoplay]}
          className="!pl-6" // slight left padding to align with text
          slidesPerView={5}
          spaceBetween={45}
          loop={true}
          speed={3000}
          allowTouchMove={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
        >
          {flags.map((flag, index) => (
            <SwiperSlide key={index} className="!w-auto flex justify-center">
              <img
                src={flag.src}
                alt={`Flag ${index + 1}`}
                className="rounded-lg w-[96px] h-[67px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SwiperFlags;
