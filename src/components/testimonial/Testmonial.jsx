import React from "react";
import { useRef, useEffect } from "react";
import docter from "../../assets/images/doctor.svg";
import quteIcon from "../../assets/images/quotes.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay  } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";



// Dummy testimonials data
const testimonials = [
  {
    id: 1,
    name: "Dr. Aisha Thomas",
    country: "USA",
    text: "Studying medicine abroad was daunting, but their guidance made everything seamless and achievable.",
    image: docter, // dummy image
  },
  {
    id: 2,
    name: "Dr. Vivek Reddy",
    country: "India",
    text: "From choosing the right university to visa support, their mentorship was priceless.",
    image: docter,
  },
  {
    id: 3,
    name: "Dr. Leila Ahmed",
    country: "UAE",
    text: "The team truly understands what aspiring doctors need. I wouldn’t have succeeded without them.",
    image: docter,
  },
  {
    id: 4,
    name: "Dr. Leila Ahmed",
    country: "UAE",
    text: "The team truly understands what aspiring doctors need. I wouldn’t have succeeded without them.",
    image: docter,
  },
  {
    id: 5,
    name: "Dr. Leila Ahmed",
    country: "UAE",
    text: "The team truly understands what aspiring doctors need. I wouldn’t have succeeded without them.",
    image: docter,
  },
  {
    id: 6,
    name: "Dr. Leila Ahmed",
    country: "UAE",
    text: "The team truly understands what aspiring doctors need. I wouldn’t have succeeded without them.",
    image: docter,
  },
  {
    id: 7,
    name: "Dr. Leila Ahmed",
    country: "UAE",
    text: "The team truly understands what aspiring doctors need. I wouldn’t have succeeded without them.",
    image: docter,
  },
];

const TestimonialSection = () => {
  const paginationRef = useRef(null);
  testimonials.map((testimonial) => {
    console.log(testimonial.image);
  useEffect(() => {
  window.dispatchEvent(new Event('resize'));
}, []);
  });
  return (
    <section className="bg-global-8 py-12 sm:py-16 md:py-20">
      <div className="w-full max-w-[1152px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="anek-malayalam text-[24px] md:text-[60px] font-medium bg-gradient-to-r from-[#BA315A] to-[#69378F] bg-clip-text text-transparent mb-4">
            Their Journey, Our Mission
          </h2>
          <p className="text-[16px] text-gray-600  max-w-4xl mx-auto">
            Guided by experienced doctors, our directors understand what it
            takes to succeed in medicine. With their leadership, every step you
            take is supervised with care, precision, and a deep commitment to
            your future in healthcare.
          </p>
        </div>

        <div className="w-full max-w-6xl mx-auto px-4 py-10">
       <Swiper
  slidesPerView={1} // Only 1 card on mobile by default
  spaceBetween={30}
  onSwiper={(swiper) => {
    setTimeout(() => {
      swiper.update(); // Force re-render
    }, 100);
    // Link the DOM element manually to pagination
    if (
      swiper.params.pagination &&
      typeof swiper.params.pagination === "object"
    ) {
      swiper.params.pagination.el = paginationRef.current;
      swiper.pagination.init();
      swiper.pagination.render();
      swiper.pagination.update();
    }
  }}
  pagination={{ clickable: true }}
  observer={true}
  observeParents={true}
  modules={[Pagination, Autoplay]} // Added Autoplay if needed
  breakpoints={{
    640: { slidesPerView: 1 }, // 1.5 cards on small tablets (optional)
    768: { slidesPerView: 2 }, // 2 cards on tablets
    1024: { slidesPerView: 3 }, // 3 cards on desktops
  }}
  className="testimonial-swiper"
>
  {testimonials.map((item, index) => (
    <SwiperSlide key={index}>
      <div className="card-wraper py-[50px]">
        <div className="bg-[#F5F7FA] rounded-t-[10%] rounded-br-[10%] flex flex-col justify-between h-full max-w-[283px] md:w-[283px] max-h-[330px] md:h-[330px]">
          <div className="top-sec pt-[30px] px-[22px]">
            <div className="text-4xl text-gray-300 mb-4">
              <img src={quteIcon} alt="" />
            </div>
            <p className="anek-malayalam text-[20px] text-gray-800 mb-6 max-w-[237px]">
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
    </SwiperSlide>
  ))}
</Swiper>
          {/* 👇 Custom Pagination DOM */}
          <div
            ref={paginationRef}
            className="custom-pagination mt-6 flex justify-center items-center gap-3 "
          >
            {/* Swiper will inject bullets here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
