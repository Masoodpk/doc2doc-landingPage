import React, { useEffect, useState } from "react";
import Button from "/src/components/button/Button.jsx";
import youtubeIcon from "../../assets/images/youtube.svg";
import PopUp from "/src/components/popup/PopUp.jsx";
import youtubeThumbnail from "../../assets/images/youtube-thumbnail.jpg";

const Videosec = () => {
  const [popUp, setPopUp] = useState(false);
  const [canPlayVideo, setCanPlayVideo] = useState(false);

  useEffect(() => {
    const access = localStorage.getItem("videoAccessGranted");
    if (access === "true") {
      setCanPlayVideo(true);
    }
  }, []);

  const handleVideoClick = () => {
    if (!canPlayVideo) {
      setPopUp(true);
    }
  };

  const handleFormSubmitSuccess = () => {
    localStorage.setItem("videoAccessGranted", "true");
    setPopUp(false);
    setCanPlayVideo(true);
  };

  return (
    <section className="bg-global-6 py-12 sm:py-16 md:py-20">
      <div className="w-full mx-auto px-4 sm:px-2 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="anek-malayalam text-[24px] md:text-[50px] lg:text-5xl font-anek-malayalam font-medium text-global-2 mb-4 sm:mb-6">
            ഡോക്ടറായവരിൽ നിന്നും നേരിട്ട് കേട്ടറിയാം.
          </h2>
          <p className="text-[12px] md:text-[14px] px-[20px] md:px-[64px] mx-auto leading-7 text-gray-600">
            ആത്മവിശ്വാസത്തോടെ നിങ്ങളുടെ എംബിബിഎസ് യാത്ര ആരംഭിക്കുക. നിങ്ങളുടെ യോഗ്യത പരിശോധിക്കുക, നിങ്ങളുടെ ബജറ്റിന് അനുയോജ്യമായ മികച്ച സർവകലാശാലകൾ കണ്ടെത്തുക, ലഭ്യമായ സ്‌കോളർഷിപ്പുകൾ അന്വേഷിക്കുക, കൂടാതെ നീറ്റ് പരീക്ഷയ്ക്കായി പൂർണ്ണമായി തയ്യാറാകുക 一ഓക്കെ ഒരേ പ്ലാറ്റ്‌ഫോമിൽ. നിങ്ങളുടെ മെഡിക്കൽ സ്വപ്നങ്ങൾ സാക്ഷാത്കരിക്കാൻ നിങ്ങൾക്ക് ശ്രദ്ധ കേന്ദ്രീകരിക്കാൻ കഴിയുന്ന രീതിയിൽ ഓരോ ചുവടും ഞങ്ങൾ ലളിതമാക്കുന്നു.
          </p>
        </div>

        {/* Video Section */}
        <div className="video-bg-wrapper w-full max-w-[808px] mx-auto relative">
          <div className="rounded-[23px] overflow-hidden relative">
            {!canPlayVideo ? (
              <button className="cursor-pointer w-full relative" onClick={handleVideoClick}>
                <img
                  src={youtubeThumbnail}
                  alt="YouTube Video Thumbnail"
                  className="w-full h-auto object-contain object-center rounded-[23px]"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={youtubeIcon}
                    alt="Play Video"
                    className="w-12 h-12 md:w-16 md:h-16"
                  />
                </div>
              </button>
            ) : (
              <iframe
                className="w-full h-[300px] md:h-[450px] rounded-[23px]"
                src="https://www.youtube.com/embed/dQpKg6DOgJw?autoplay=1"
                title="YouTube video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>

        {/* Pop Up with Form */}
        {popUp && <PopUp setPopUp={setPopUp} onSuccess={handleFormSubmitSuccess} />}

        {/* CTA Button */}
        <div className="text-center pt-[30px]">
          <button onClick={handleVideoClick}>
            <Button className="w-[205px] h-[40px]" label="Know More" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Videosec;
