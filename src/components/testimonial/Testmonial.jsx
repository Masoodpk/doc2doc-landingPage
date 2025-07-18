import React from "react";

// Dummy testimonials data
const testimonials = [
  {
    id: 1,
    name: "Dr. Aisha Thomas",
    country: "USA",
    text: "Studying medicine abroad was daunting, but their guidance made everything seamless and achievable.",
    image: "https://via.placeholder.com/48", // dummy image
  },
  {
    id: 2,
    name: "Dr. Vivek Reddy",
    country: "India",
    text: "From choosing the right university to visa support, their mentorship was priceless.",
    image: "https://via.placeholder.com/48",
  },
  {
    id: 3,
    name: "Dr. Leila Ahmed",
    country: "UAE",
    text: "The team truly understands what aspiring doctors need. I wouldn’t have succeeded without them.",
    image: "https://via.placeholder.com/48",
  },
];

const TestimonialSection = () => {
  return (
    <section className="bg-global-8 py-12 sm:py-16 md:py-20">
      <div className="w-full max-w-[1152px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-[24px] md:text-[60px] font-medium bg-gradient-to-r from-[#BA315A] to-[#69378F] bg-clip-text text-transparent mb-4">
            Their Journey, Our Mission
          </h2>
          <p className="text-[16px] text-gray-600  max-w-4xl mx-auto">
           Guided by experienced doctors, our directors understand what it takes to succeed in medicine. With their leadership, every step you take is supervised with care, precision, and a deep commitment to your future in healthcare.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[url('/images/img_subtract.svg')] bg-cover bg-center p-4 sm:p-6 rounded-lg shadow-md"
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <img
                    src="/images/img_.svg"
                    alt="Quote"
                    className="w-[30px] sm:w-[42px] h-[24px] sm:h-[30px] mb-4"
                  />
                  <p className="text-base sm:text-lg md:text-xl font-anek-malayalam font-medium text-slider-1 leading-relaxed">
                    {testimonial.text}
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-auto">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-11 h-11 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-base sm:text-lg font-roboto text-global-3 font-normal">
                      {testimonial.name}
                    </p>
                    <p className="text-sm sm:text-base font-roboto text-global-3 font-semibold">
                      {testimonial.country}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;
