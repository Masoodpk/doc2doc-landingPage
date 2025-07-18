import React from "react";
import Button from "/src/components/button/Button.jsx";

const videosec = () => {
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
        <div className="bg-global-1 rounded-[22px] p-8 sm:p-12 md:p-16 lg:p-20 mb-8 sm:mb-12 max-w-4xl mx-auto">
          <div className="flex justify-center items-center">
            <button className="bg-red-600 hover:bg-red-700 transition-colors duration-200 rounded-full p-4 sm:p-6">
              <img 
                src="/images/img_youtube.svg" 
                alt="Play Video" 
                className="w-12 sm:w-16 md:w-20 h-auto"
              />
            </button>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
       <Button label="Know More" />
        </div>
      </div>
    </section>
  );
};

export default videosec;
