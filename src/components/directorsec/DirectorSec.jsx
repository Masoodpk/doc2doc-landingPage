import React from "react";
import Drkarthika from "/src/assets/images/drkarthika.png";
import Drmaheen from "/src/assets/images/drmaheen.png";

const DirectorsSection = () => {
  return (
    <section className="bg-global-5 py-12 sm:py-16 md:py-20 bg-[#E9E3ED]">
      <div className="w-full max-w-[1152px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-[24px] md:text-[60px] lg:text-6xl font-anek-malayalam font-medium bg-gradient-to-r from-[#BA315A] to-[#69378F] bg-clip-text text-transparent mb-4">
            Meet our Directors
          </h2>
          <p className="text-sm sm:text-base text-global-5 max-w-4xl mx-auto">
            Guided by experienced doctors, our directors understand what it takes to succeed in medicine. With their leadership, every step you take is supervised with care, precision, and a deep commitment to your future in healthcare.
          </p>
        </div>

        {/* Directors Grid */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-20 justify-center items-center">
          {/* Dr. Maheen Khan */}
          <div className="relative w-full sm:w-[300px] md:w-[338px] rounded-lg overflow-hidden">
            <img
              src={Drmaheen}
              alt="Dr. Maheen Khan"
              className="w-full h-[350px] md:h-[400px] object-cover rounded-lg"
            />
            <div className="absolute bottom-2 left-2 right-2">
              <div className="bg-white rounded-lg px-4 py-4 text-center shadow-md">
                <span className="text-base sm:text-lg  font-semibold text-gray-800">
                  Dr. Maheen Khan
                </span>
              </div>
            </div>
          </div>

          {/* Dr. Karthika */}
          <div className="relative w-full sm:w-[300px] md:w-[338px] rounded-lg overflow-hidden">
            <img
              src={Drkarthika}
              alt="Dr. Karthika"
              className="w-full h-[350px] md:h-[400px] object-cover rounded-lg"
            />
            <div className="absolute bottom-2 left-2 right-2">
              <div className="bg-white rounded-lg px-4 py-4 text-center shadow-md">
                <span className="text-base sm:text-lg font-semibold text-gray-800">
                  Dr. Karthika Sajikumar
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorsSection;