import React from "react";
import DoctorImage from "/src/assets/images/doctor.png";
import Button from "/src/components/button/Button.jsx";
import Check from "/src/assets/images/check.png";

const MbbsInfoSection = () => {
  return (
    <section className="bg-[#E9E3ED] py-10 md:py-16 px-[20px] md:px-[64px]">
      <div className="container-custom">
        {/* Main Card */}
        <div className="bg-[#F8F7FA] rounded-3xl flex flex-col lg:flex-row justify-center items-center relative shadow-sm px-[30px] md:pr-0 pb-0 pt-[30px] md:pt-[68px]  overflow-hidden">
          <div className="flex flex-col lg:flex-row  items-center gap-8 ">
            {/* Left Text Content */}
            <div className="w-full pb-[30px] md:pb-[68px]  text-center md:text-left">
              <h2 className="anek-malayalam font-medium text-[22px] md:text-[44px] mb-4  leading-7 md:leading-[56px]">
                നിങ്ങളുടെ സമഗ്രമായ <br />
                <span className="text-[#421b1b]">എംബിബിഎസ് മാർഗ്ഗനിർദ്ദേശം</span>
              </h2>
              <p className="text-gray-600 mb-10 text-[14px] leading-7 max-w-4xl mx-auto md:mx-0">
                നിങ്ങളുടെ മെഡിക്കൽ കരിയറിന് ഉറച്ച തുടക്കം നൽകാൻ വേണ്ട എല്ലാം ഇവിടെ തന്നെയുണ്ട്.
                നിങ്ങൾക്ക് യോഗ്യത ഉണ്ടോ എന്ന് പരിശോധിക്കാം, നിങ്ങളുടെ സാമ്പത്തിക ശേഷിക്ക്
                അനുയോജ്യമായ മികച്ച സർവകലാശാലകൾ കണ്ടെത്താം, സ്‌കോളർഷിപ്പുകൾ ലഭ്യമാക്കാം,
                കൂടാതെ നീറ്റ് പരീക്ഷക്ക് മികവുറ്റ രീതിയിൽ തയ്യാറാകാം. ഞങ്ങളുടെ പരിചയസമ്പന്നമായ
                മാർഗ്ഗനിർദ്ദേശത്തോടെ, ഓരോ ഘട്ടവും വേഗത്തിലും ലളിതമായും നീങ്ങാനാകും —
                നിങ്ങളുടെ സ്വപ്നം യാഥാർത്ഥ്യമാകാൻ ഇനി ഒന്നും തടസ്സമാകില്ല.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-[42px] max-w-[700px] mx-auto md:mx-0">
                {[
                  "Check Eligibility",
                  "Avail Scholarships",
                  "Find Budget-Friendly Universities",
                  "Prepare for NEET",
                ].map((text, index) => (
                  <div key={index} className="flex  gap-2 text-[16px] md:text-[20px] text-left text-gray-800">
                    <img src={Check} alt="check" className="w-5 h-5 mt-[4px]" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>

               <a href="tel:9207400300">
            <Button className="w-[205] h-[40px]" />
          </a>
            </div>
 </div>
            {/* Doctor Image */}
<div className="w-full md:w-4/12  flex justify-center md:justify-end min-h-[400px]">
  <img
    src={DoctorImage}
    alt="Doctor"
    className="absolute bottom-0 h-[400px] md:h-[400px] lg:h-[500px] object-contain"
  />
</div>



         
        </div>
      </div>
    </section>
  );
};

export default MbbsInfoSection;
