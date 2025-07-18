import React from "react";
import DocLogo from "/src/assets/images/doc-logo.png"; 
import Button from "/src/components/button/Button.jsx";


function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#511B4D] text-white px-[64px] py-[14px] flex justify-between items-center z-50">
      <div className="text-xl font-bold">
        <img src={DocLogo} alt="Doc Logo" className="h-[59px] w-[161px]" />
      </div>
     <Button />
    </nav>
  );
}

export default Navbar;
