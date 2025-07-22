import React from "react";
import Form from "./form/Form.jsx";
import youtubeIcon from "../../assets/images/youtube.svg";
import doc2doc from "../../assets/images/doc2doc-logo.svg";
import youtubeThumbnail from "../../assets/images/youtube-thumbnail.jpg";

function PopUp({ setPopUp, onSuccess }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all duration-300">
      <div className="popup-sec flex justify-center max-h-[832px] h-full w-full md:max-w-[1280px] md:w-full rounded-xl overflow-hidden">
        {/* left section */}
        <div className="left-popup w-0 invisible md:visible max-h-[832px] max-w-[639px] bg-gradient-to-b from-[#69378F] md:w-1/2 to-[#BA315A] h-full relative">
          <div className="xl:heading text-white text-center md:pt-[43px] px-[28px] relative z-10">
            <h3 className="font-semibold text-[14px] mb-2">
              വിദേശത്തു MBBS പഠിക്കാം
            </h3>
            <h2 className="font-medium md:text-[14px]">
              ലോകമെമ്പാടുമുള്ള MBBS യൂണിവേഴ്സിറ്റികളെ കുറിച്ചറിയാം. നിങ്ങളുടെ
              NEET റിസൽറ്റിലൂടെ നിങ്ങൾക്ക് അനുയോജ്യമായ രാജ്യം തിരഞ്ഞെടുക്കാം.
            </h2>
          </div>

          {/* thumbnail + icon */}
          <div className="youtube-video w-full px-[70px] pt-[37px]">
            <div className="youtube-screen max-w-[480px] max-h-[250px] flex justify-center h-[200px] rounded-[13px] relative z-10 overflow-hidden">
              <img
                src={youtubeThumbnail}
                alt="YouTube Video Thumbnail"
                className="w-full h-full object-cover rounded-[13px]"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={youtubeIcon}
                  alt="Play Icon"
                  className="w-12 h-12 md:w-16 md:h-16"
                />
              </div>
            </div>
          </div>

          {/* bottom content */}
          <div className="bottom-content relative z-[999] mt-6 px-6">
            <div className="logo flex justify-center">
              <img src={doc2doc} alt="Site main logo" className="h-13" />
            </div>
            <div className="content flex justify-center mt-4">
              <p className="text-[#FFFFFF] max-w-[560px] text-center text-[14px]">
                No office visits. Our team will assist you in the best manner.
                <br />
                Personalized one-on-one support, Quick response time, 100% Free
                counseling for Indian students
              </p>
            </div>
          </div>
        </div>

        {/* right section */}
        <div className="right-popup w-full md:w-1/2 bg-white max-h-[550px] md:max-h-[832px] h-full m-10 pt-[20px] md:pt-[50px] relative md:m-0 rounded-lg md:rounded-none">
          <button
            className="absolute top-4 right-4 text-gray-400 text-3xl font-bold hover:text-gray-600 cursor-pointer"
            onClick={() => setPopUp(false)}
          >
            &times;
          </button>
          <h2 className="text-md md:text-2xl font-semibold text-center mt-4 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            Join the Community!
          </h2>
          <Form setPopUp={setPopUp} onSuccess={onSuccess} />
        </div>
      </div>
    </div>
  );
}

export default PopUp;
