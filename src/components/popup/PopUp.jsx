import React from "react";
import Form from "./form/Form.jsx";
import youtubeIcon from "../../assets/images/youtube.svg";
import doc2doc from "../../assets/images/doc2doc-logo.svg";
function PopUp({ setPopUp }) {
  return (
    <div className="fixed inset-0  bg-opacity-50 z-50 flex justify-center items-center align-middle ">
      <div className="popup-sec flex max-h-[832px] h-full  max-w-[1280px] md:w-full">
        {/* left section */}
        <div className="left-popup max-h-[832px]  max-w-[639px] bg-gradient-to-b from-[#69378F] w-1/2  to-[#BA315A]  h-full relative ">
          <div className="heading text-white text-center md:pt-[163px] px-[28px] relative z-10">
            <h3 className="font-semibold text-[14px]">
              വിദേശത്തു MBBS പഠിക്കാം{" "}
            </h3>
            <h2 className="font-medium md:text-[20px]">
              ലോകമെമ്പാടുമുള്ള MBBS യൂണിവേഴ്സിറ്റികളെ കുറിച്ചറിയാം. നിങ്ങളുടെ
              NEET റിസൽറ്റിലൂടെ നിങ്ങൾക്ക് അനുയോജ്യമായ രാജ്യം തിരഞ്ഞെടുക്കാം.
            </h2>
          </div>
          {/* you tube video */}
          <div className="youtube-video w-full px-[70px] pt-[71px]  ">
            <div className="youtube-screen max-w-[480px] max-h-[280px]  flex justify-center h-[280px] rounded-[13px] relative z-10">
              {/* <div className="flex justify-center ">
                <button className="cursor-pointer ">
                  <img
                    src={youtubeIcon}
                    alt="Play Video"
                    className="w-auto h-auto  "
                  />
                </button>
              </div> */}
              <iframe
                className="w-full h-full rounded-[13px]"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          {/* bottom content */}
          <div className="bottom-content relative z-[999]">
            <div className="logo flex justify-center">
              <img src={doc2doc} alt="Site main logo" />
            </div>
            <div className="content  flex justify-center">
              <p className="text-[#FFFFFF] max-w-[560px] text-center ">
                No office visits. Our team will assist you in the best manner.<br />
                Personalized one-on-one support, Quick response time, 100% Free
                counseling for Indian students
              </p>
            </div>
          </div>
        </div>
        {/* right section */}
        <div className="right-popup w-1/2 bg-white max-h-[832px] h-full pt-[50px] relative ">
          <button
            className="absolute top-4 right-4 text-gray-400  text-3xl font-bold hover:text-gray-600 cursor-pointer"
            onClick={() => setPopUp(false)}
          >
            &times;
          </button>
          <h2 className="text-2xl font-semibold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            Join the Community!
          </h2>
          <Form setPopUp={setPopUp} />
        </div>
      </div>
    </div>
  );
}

export default PopUp;
