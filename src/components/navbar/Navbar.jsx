import React from "react";
import DocLogo from "/src/assets/images/doc-logo.png"; 
import Button from "/src/components/button/Button.jsx";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#511B4D] text-white py-[14px] z-50">
      <div className="w-full container-custom mx-auto px-[10px] md:px-[64px] flex justify-between items-center">
        <div className="text-xl font-bold">
          <img
            src={DocLogo}
            alt="Doc Logo"
            className="h-[34px] md:h-[59px] w-[89px] md:w-[161px] object-cover"
          />
        </div>
        <Button />
      </div>
    </nav>
  );
}

export default Navbar;
