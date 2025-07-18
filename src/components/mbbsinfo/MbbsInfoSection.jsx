import React from "react";
import DoctorImage from "/src/assets/images/doctor.png";
import Button from "/src/components/button/Button.jsx";
import Check from "/src/assets/images/check.png";

const MbbsInfoSection = () => {
  return (
    <section className="bg-[#E9E3ED] py-16 px-[64px] relative overflow-hidden">
      {/* Main Content Card */}
      <div className="mx-auto px-[30px] md:px-[52px] py-[30px] md:py-[68px] bg-[#F8F7FA] rounded-3xl   shadow-sm flex flex-col md:flex-row items-center gap-8 relative">
        {/* Left Column */}
        <div className="max-w-5xl flex-1 text-center md:text-left">
          <h2 className="text-[22px] md:text-[50px]  font-bold mb-4 leading-10 md:leading-20">
            നിങ്ങളുടെ സമഗ്രമായ <br />
            <span className="text-[#421b1b]">എംബിബിഎസ് മാർഗ്ഗനിർദ്ദേശം</span>
          </h2>
          <p className="text-gray-600 mb-10 text-[14px] leading-7 max-w-4xl">
            നിങ്ങളുടെ മെഡിക്കൽ കരിയറിന് ഉറച്ച തുടക്കം നൽകാൻ വേണ്ട എല്ലാം ഇവിടെ തന്നെയുണ്ട്. നിങ്ങൾക്ക് യോഗ്യത ഉണ്ടോ എന്ന് പരിശോധിക്കാം, നിങ്ങളുടെ സാമ്പത്തിക ശേഷിക്ക് അനുയോജ്യമായ മികച്ച സർവകലാശാലകൾ കണ്ടെത്താം, സ്‌കോളർഷിപ്പുകൾ ലഭ്യമാക്കാം, കൂടാതെ നീറ്റ് പരീക്ഷക്ക് മികവുറ്റ രീതിയിൽ തയ്യാറാകാം. ഞങ്ങളുടെ പരിചയസമ്പന്നമായ മാർഗ്ഗനിർദ്ദേശത്തോടെ, ഓരോ ഘട്ടവും വേഗത്തിലും ലളിതമായും നീങ്ങാനാകും — നിങ്ങളുടെ സ്വപ്നം യാഥാർത്ഥ്യമാകാൻ ഇനി ഒന്നും തടസ്സമാകില്ല.
          </p>

          {/* Tick Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-[42px] max-w-[700px]">
            {[
              "Check Eligibility",
              "Avail Scholarships",
              "Find Budget-Friendly Universities",
              "Prepare for NEET",
            ].map((text, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-[20px] text-gray-800"
              >
                <img src={Check} alt="check" className="w-5 h-5" />
                <span>{text}</span>
              </div>
            ))}
          </div>

          <Button />
        </div>
      </div>

      {/* Doctor Image - Overlapping from Bottom */}
      <div className="absolute bottom-0 right-4 md:right-20 z-1 hidden md:block">
        <img
          src={DoctorImage}
          alt="Doctor"
          className="h-[692px] w-[369px] object-cover"
        />
      </div>
    </section>
  );
};

export default MbbsInfoSection;
