import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Expertise from "./components/Expertise";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackgroundVideo from "./assets/BackgroundVideo.mp4";

const App = () => {
  return (
    <>
      <div className="scroll-smooth">
        <Navbar />
        <div className="max-w-7xl mx-auto pt-20 px-6">
        <div className="h-[80vh]">
        <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
            >
              <source src={BackgroundVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="relative z-10">
              <HeroSection />
            </div>
          </div>
          <section id="services" className="scroll-mt-20">
            <Services />
          </section>

          <section id="expertise" className="scroll-mt-20">
            <Expertise />
          </section>

          <section id="contact" className="scroll-mt-20">
            <Contact />
          </section>
          <section id="contact" className="scroll-mt-20">
            <Footer />
          </section>
        </div>
      </div>
    </>
  );
};

export default App;
