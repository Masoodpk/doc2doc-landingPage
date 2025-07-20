import React from 'react'
import whatsappIcon from "../../assets/images/whatsapp.svg";
import contactIcon from "../../assets/images/phone.svg";
function CtcButton() {
  return (
    <div className="button-wrapper w-full fixed bottom-0 bg-[#511B4D] p-[13px] sm:hidden flex gap-[16px] h-[73px] justify-center z-50">
       <button className="yellow bg-[#F2B94A] py-[13px] sm:px-[37px] px-[20px] rounded-[67px] flex gap-[5px] items-center">
         <span>Contact Us</span>
         <img src={contactIcon} alt="a phone icon" />
       </button>
       <button className="white bg-[white] py-[13px] sm:px-[37px] px-[20px] rounded-[67px] flex gap-[5px] items-center">
         <span>WhatsApp Us </span>
         <img src={whatsappIcon} alt="A whats app icon for intraction" />
       </button>
    </div>
  )
}

export default CtcButton