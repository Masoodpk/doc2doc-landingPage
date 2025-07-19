 import React from "react";
import { ArrowRight } from "lucide-react";
import Herologo from "/src/assets/images/Hero-logo.png"; 
import SwiperFlags from "/src/components/swiper/SwiperFlags.jsx";


const Hero = () => {
  return (
    <section className="bg-white pt-24 px-4 m-10">
      <div className="container-custom">

      {/* Top Section */}
      <div className="text-center mb-10">
       <h1 className="text-[24px] md:text-5xl font-bold leading-tight flex flex-wrap justify-center items-center gap-2 text-center">
  വിദേശത്തു  
  <span className="inline-flex items-center ">
    <span className=" bg-gradient-to-r from-[#69378F] to-[#BA315A] bg-clip-text text-transparent text-[80px] leading-none mb-6">MBBS</span>
    <img src={Herologo} alt="logo" className="w-[100px] h-[49px] object-contain" />
  </span>
  പഠിക്കാൻ അറിഞ്ഞിരിക്കേണ്ടതെല്ലാം.
</h1>
        <p className="text-[#737373] mt-4 leading-8 text-[14px]">
         ലോകമെമ്പാടുമുള്ള MBBS യൂണിവേഴ്സിറ്റികളെ കുറിച്ചറിയാം. നിങ്ങളുടെ NEET റിസൽറ്റിലൂടെ നിങ്ങൾക്ക് അന്യോജ്യമായ <br /> രാജ്യം തിരഞ്ഞെടുക്കാം.
        </p>
        <p className="text-[#A2336A] text-lg font-medium mt-2">
          #South India's Most Trusted MBBS Abroad Brand
        </p>

      <button className="mt-6 bg-[#F2B94A] text-[#511B4D] font-normal w-[205] h-[50px] rounded-full hover:bg-[#f0b92c]  cursor-pointer text-[16px] px-8  flex items-center justify-between gap-1  mx-auto">
  Know More
  <div className="ml-2 h-5 w-5 flex items-center justify-center rounded-full border-1 border-[#511B4D]">
    <ArrowRight className="h-3 w-3" />
  </div>
</button>

      </div>

      {/* Bottom Section */}
   <div className="max-w-8xl px-[8px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
  {/* Left: SwiperFlags - 8 columns on md+ */}
  <div className="col-span-12 md:col-span-8">
    <SwiperFlags />
  </div>

  {/* Right: Video thumbnail - 4 columns on md+ */}
     <div className="col-span-12 md:col-span-4">
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <div className="absolute inset-0 flex items-center justify-center z-10">
  <div className="bg-white bg-opacity-60 rounded-full p-3 shadow-md">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-black"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M6 4l10 6-10 6V4z" />
    </svg>
  </div>
</div>
          <video
            src="/src/assets/video/videoplayback.mp4"
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
      

    </section>
  );
};

export default Hero;
