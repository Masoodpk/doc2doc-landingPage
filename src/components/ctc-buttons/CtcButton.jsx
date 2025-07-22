import React from "react";
import whatsappIcon from "../../assets/images/whatsapp.svg";
import contactIcon from "../../assets/images/phone.svg";

function CtcButton({ show }) {
  return (
    <div
      className={`button-wrapper w-full fixed bottom-0 bg-[#511B4D] p-[13px] sm:hidden flex gap-[16px] h-[73px] justify-center z-50 transition-all duration-300 ${
        show ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      
  
    <a href="tel:9207400300">
      <button className="yellow bg-[#F2B94A] text-xs py-[13px] sm:px-[37px] px-[20px] rounded-[67px] flex gap-[5px] items-center">
        <span>Contact Us</span>
        <img src={contactIcon} alt="a phone icon" />
      </button>
      </a>
      <a href="https://wa.me/919207400300" target="_blank" rel="noopener noreferrer">
        <button className="white bg-[white] py-[13px] text-xs px-[15px] rounded-[67px] flex gap-[5px] items-center">
          <span>WhatsApp Us </span>
          <img src={whatsappIcon} alt="A WhatsApp icon for interaction" />
      
      </button>
        </a>
    </div>
  );
}

export default CtcButton;
