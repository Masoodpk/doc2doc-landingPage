import React, { useEffect, useState } from "react";
import './App.css';
import Navbar from "/src/components/navbar/Navbar.jsx";
import Hero from "/src/components/hero/Hero.jsx";
import MbbsInfoSection from "/src/components/mbbsinfo/MbbsInfoSection.jsx";
import Videosec from "/src/components/videosec/Videosec.jsx";
import DirectorSec from "/src/components/directorsec/DirectorSec.jsx";
import Footer from "/src/components/footer/Footer.jsx";
import CtcButton from './components/ctc-buttons/CtcButton.jsx';
import Carousel from './components/carousel/Carousel.jsx';

function App() {
  const [showCtc, setShowCtc] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (y > 50) {
        setShowCtc(true);
      } else {
        setShowCtc(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <MbbsInfoSection />
      <Videosec />
      <DirectorSec />
      <Carousel />
      <CtcButton show={showCtc} />
      <Footer />
    </>
  );
}

export default App;
