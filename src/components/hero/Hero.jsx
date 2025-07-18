 import React from "react";
import { ArrowRight } from "lucide-react";
import Herologo from "/src/assets/images/Hero-logo.png"; 

const countries = [
  "/flags/uzbekistan.png",
  "/flags/georgia.png",
  "/flags/tajikistan.png",
  "/flags/usa.png",
  "/flags/australia.png",
  "/flags/canada.png",
  "/flags/uae.png",
];

const Hero = () => {
  return (
    <section className="bg-white pt-24 px-4 m-10">
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
          #south India's most trusted MBBS abroad brand
        </p>

      <button className="mt-6 bg-[#F2B94A] text-[#511B4D] font-normal px-6 py-2 rounded-full hover:bg-[#f0b92c]  cursor-pointer flex items-center justify-between  mx-auto">
  Know More
  <div className="ml-2 h-4 w-4 flex items-center justify-center rounded-full border-1 border-[#511B4D]">
    <ArrowRight className="h-3 w-3" />
  </div>
</button>

      </div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left: Flags slider */}
        <div className="bg-[#f5f6f9] rounded-xl p-4 overflow-hidden relative">
          <h2 className="text-lg font-semibold mb-1">Top Countries</h2>
          <p className="text-gray-500 text-sm mb-4">Our Spread Across The World</p>

          <div className="flex gap-4 animate-scroll whitespace-nowrap">
            {countries.map((flag, index) => (
              <img
                key={index}
                src={flag}
                alt="flag"
                className="h-8 w-auto object-contain"
              />
            ))}
          </div>
        </div>

        {/* Right: Video thumbnail */}
        <div className="relative">
          <img
            src="/video-thumbnail.jpg"
            alt="Video"
            className="rounded-xl shadow-md"
          />
          <button className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white rounded-full p-3 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-black"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M6 4l10 6-10 6V4z" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
