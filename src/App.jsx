import './App.css'
import Navbar from "/src/components/navbar/Navbar.jsx"
import Hero from "/src/components/hero/Hero.jsx"
import MbbsInfoSection from "/src/components/mbbsinfo/MbbsInfoSection.jsx"
import Videosec from "/src/components/videosec/Videosec.jsx"
import DirectorSec from "/src/components/directorsec/DirectorSec.jsx"
import Testimonial from "/src/components/testimonial/Testmonial.jsx"
import Footer from "/src/components/footer/Footer.jsx"
function App() {

  return (
    <>
    

   
      <Navbar />
      <Hero />
      <MbbsInfoSection />
      <Videosec />
      <DirectorSec />
      <Testimonial />
      <Footer />
      
    </>
     
  )
}

export default App
