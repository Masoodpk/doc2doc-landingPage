import React from "react";
import Button from "/src/components/button/Button.jsx";
import Footerlogo from "/src/assets/images/footer-logo.png"; 
import Whatsapp from "/src/assets/images/whatsapp.png";
import Instagram from "/src/assets/images/instagram.png";
const Footer = () => {
  return (
    <section className="bg-[#E9E3ED] md:py-16 px-[16px] md:px-[64px] relative overflow-hidden">
      {/* Main Content Card */}

      
      <div className="mx-auto px-[20px] md:px-[52px] py-[20px] md:py-[68px] bg-[#511B4D] rounded-3xl shadow-sm flex flex-col gap-12 relative text-white ">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-8">
          <div className="w-full lg:w-2/3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center md:text-left font-medium text-white mb-4 sm:mb-6 leading-tight">
              Let&apos;s Build Future Doctors
            </h2>
            <p className="text-sm sm:text-base text-[#E9E3ED] text-center md:text-left leading-relaxed max-w-4xl">
              We are committed to guiding aspiring medical students through every step of their MBBS journey abroad—from eligibility checks and university selection to scholarships and NEET preparation. With expert support and global partnerships, we ensure your path to becoming a doctor is clear, confident, and well-supported.
            </p>
          </div>

          <div className="w-full text-center md:text-left lg:w-auto">
            <Button />
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[2px] bg-[#E9E3ED] opacity-50"></div>

        {/* Footer Bottom Content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-8">
          
          {/* Logo */}
          <div className="w-[140px] sm:w-[166px]">
            <img
              src={Footerlogo}
              alt="Doc2Doc Logo"
              className="min-w-[140px] flex"
            />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[24px] md:text-[28px]  font-medium text-white">
              Contact Us
            </h3>
            <div className="flex flex-col gap-2">
              <div className="w-[100px] sm:w-[138px] h-[1px] bg-[#E9E3ED] opacity-40"></div>
              <p className="text-[16px] font-medium text-white">
                +91 9207 400 300
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-3 items-start md:items-center">
            <h3 className="text-[24px] md:text-[28px] font-medium text-white">
              Connect with Us
            </h3>
            <div className="flex flex-col gap-3 items-start md:items-start">
              <div className="w-[200px] md:w-[210px] h-[1px] bg-[#E9E3ED] opacity-40"></div>
              <div className="flex gap-4 md:gap-14">
                <img
                  src={Whatsapp}
                  alt="WhatsApp"
                  className="w-[24px] sm:w-[30px] h-[24px] sm:h-[32px] cursor-pointer hover:opacity-80 transition-opacity"
                />

                <img
                  src={Instagram}
                  alt="Instagram"
                  className="w-[24px] sm:w-[30px] h-[24px] sm:h-[30px] cursor-pointer hover:opacity-80 transition-opacity"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Footer;
