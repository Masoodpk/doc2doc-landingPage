 import React from "react";
import { ArrowRight } from "lucide-react";
import Herologo from "/src/assets/images/Hero-logo.png"; 
// import SwiperFlags from "/src/components/swiper/SwiperFlags.jsx";
import SwiperSlide from "/src/components/swiper-slide/SwiperSlide.jsx";

const Hero = () => {
  return (
    <section className="bg-white pt-15 md:pt-24 md:px-4 m-5 md:m-10">
      <div className="container-custom">

      {/* Top Section */}
      <div className="text-center mb-10">
    <h1 className="anek-malayalam font-semibold text-[22px] md:text-[45px] xl:text-[60px] leading-[30px] md:leading-[60px] xl:leading-[60px] flex flex-wrap justify-center items-center gap-0 text-center">
  വിദേശത്തു  
  <span className="inline-flex md:items-center ml-[5px] md:ml-[12px]">
    <span className="bg-gradient-to-r from-[#69378F] to-[#BA315A] bg-clip-text text-transparent text-[44px] md:text-[60px] xl:text-[80px] leading-none xl:mb-6 h-[40px] md:h-full">MBBS</span>
    <img src={Herologo} alt="logo" className="w-[70px] md:w-[100px] h-[49px] object-contain" />
  </span>
  പഠിക്കാൻ അറിഞ്ഞിരിക്കേണ്ടതെല്ലാം.
</h1>
        <p className="text-[#737373] mt-4 leading-5 md:leading-8 text-[12px] md:text-[14px] ">
         ലോകമെമ്പാടുമുള്ള MBBS യൂണിവേഴ്സിറ്റികളെ കുറിച്ചറിയാം. നിങ്ങളുടെ NEET റിസൽറ്റിലൂടെ നിങ്ങൾക്ക് അന്യോജ്യമായ <br /> രാജ്യം തിരഞ്ഞെടുക്കാം.
        </p>
        <p className="text-[#A2336A] text-sm md:text-lg font-medium mt-6 md:mt-2 font-poppins ">
          #South India's Most Trusted MBBS Abroad Brand
        </p>

      <button className="mt-6 bg-[#F2B94A] text-[#511B4D] font-normal w-[205] h-[40px] md:h-[50px] rounded-full hover:bg-[#f0b92c]  cursor-pointer text-[14px] md:text-[16px] px-6 md:px-8  flex items-center justify-between gap-1  mx-auto">
  Know More
  <div className="ml-2 h-5 w-5 flex items-center justify-center rounded-full border-1 border-[#511B4D]">
    <ArrowRight className="h-3 w-3" />
  </div>
</button>

      </div>

      {/* Bottom Section */}
    <div className="w-full px-0 md:px-[8px]">
          {/* Stack elements vertically on small screens */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            {/* SwiperFlags - full width on mobile, 2/3 on desktop */}
            <div className="w-full md:w-2/3">
              {/* <SwiperFlags /> */}
              <SwiperSlide />
            </div>

            {/* Video thumbnail - full width on mobile, 1/3 on desktop */}
            <div className="w-full md:w-1/3 max-w-full mx-auto md:mx-0">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  {/* <div className="bg-white bg-opacity-60 rounded-full p-3 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-black"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M6 4l10 6-10 6V4z" />
                    </svg>
                  </div> */}
                </div>
                <video
                  src="/src/assets/video/hero-video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[278px] object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
