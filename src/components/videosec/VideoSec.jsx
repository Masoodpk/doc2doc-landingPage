import React, { useState } from "react";
import Button from "/src/components/button/Button.jsx";
import playIcon from "../../assets/images/play-icon.png";
import youtubeIcon from "../../assets/images/youtube.svg";
import PopUp from "/src/components/popup/PopUp.jsx";

const videosec = () => {
   const [popUp , setPopUp] = useState(false);

  const popUpForm = (e) => {
    
    setPopUp(true);
    console.log(e.target);
  }
  return (
    <section className="bg-global-6 py-12 sm:py-16 md:py-20">
      <div className="w-full  mx-auto px-4 sm:px-2 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12"> 
          <h2 className="text-[24px] md:text-[50px] lg:text-5xl font-anek-malayalam font-medium text-global-2 mb-4 sm:mb-6">
            ഡോക്ടറായവരിൽ നിന്നും നേരിട്ട് കേട്ടറിയാം.
          </h2>
          <p className="text-[12px] md:text-[14px] px-[20px] md:px-[64px] mx-auto leading-7 text-gray-600">
            ആത്മവിശ്വാസത്തോടെ നിങ്ങളുടെ എംബിബിഎസ് യാത്ര ആരംഭിക്കുക. നിങ്ങളുടെ യോഗ്യത പരിശോധിക്കുക, നിങ്ങളുടെ ബജറ്റിന് അനുയോജ്യമായ മികച്ച സർവകലാശാലകൾ കണ്ടെത്തുക, ലഭ്യമായ സ്‌കോളർഷിപ്പുകൾ അന്വേഷിക്കുക, കൂടാതെ നീറ്റ് പരീക്ഷയ്ക്കായി പൂർണ്ണമായി തയ്യാറാകുക 一ഓക്കെ ഒരേ പ്ലാറ്റ്‌ഫോമിൽ. നിങ്ങളുടെ മെഡിക്കൽ സ്വപ്നങ്ങൾ സാക്ഷാത്കരിക്കാൻ നിങ്ങൾക്ക് ശ്രദ്ധ കേന്ദ്രീകരിക്കാൻ കഴിയുന്ന രീതിയിൽ ഓരോ ചുവടും ഞങ്ങൾ ലളിതമാക്കുന്നു.
          </p>
        </div>

        {/* Video Section */}
        <div className="video-bg-wrapper w-full ">
        <div className="bg-global-1 bg-black rounded-[23px] md:h-[375px] max-h-[375px]         max-w-[808px]  mx-auto">
          <div className="flex justify-center h-full items-center">
            <button className="cursor-pointer " onClick={popUpForm}>
              <img 
                src={youtubeIcon} 
                alt="Play Video" 
                className="w-auto h-auto  "
              />
            </button>
          </div>
          {/* can do when it change to dynamic */}
          {/* <iframe
                className="w-full h-full rounded-[13px]"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                frameBorder="0"
                allowFullScreen
                
              ></iframe> */}
        </div>


        </div>
        <div className="popup">
        {/* pop Up Area */}
        { popUp ? <PopUp setPopUp={setPopUp} /> : null }

        </div>
       

        {/* CTA Button */}
        <div className="text-center pt-[30px]">
       <Button label="Know More" />
        </div>
      </div>
    </section>
  );
};

export default videosec;
