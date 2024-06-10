import { useState } from 'react';
import ContactUsForm from "../components/contact-us-form";
import Footer from "../components/footer";
import LetsStartContainer from "../components/lets-start-container";
import Navbar from "../components/navbar";
import PaperPlane from "../components/svgs/PaperPlane";
import BigPlane from "../components/svgs/BigPlane";

export default function ContactUsPage() {
  const [isAnimating, setIsAnimating] = useState(false);
 

  const handleFormSubmit = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 2000); 
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden animate-fadeIn">
      <Navbar />
      <div className="flex flex-col bg-gradient-to-r from-emerald-950 to-emerald-700 justify-center items-center pt-20 pb-32 text-3xl md:text-4xl lg:text-5xl playfair-display text-white border-0 border-b-2 border-gray-500 px-4">
        Contact Us
        <p className="bg-transparent text-white font-sans text-base md:text-lg lg:text-xl text-center mt-10 max-w-screen-md">
          We work with ambitious brands to ideate, design & build million-dollar businesses powered by beautifully designed and engineered software and technological solutions.
        </p>
      </div>
      
      <div className={`flex-grow flex flex-col justify-center items-center relative`}>
        <ContactUsForm onFormSubmit={handleFormSubmit} />
      </div>
      <LetsStartContainer />
      <Footer />
      {!isAnimating && (
        <>
          <div className="absolute top-[60vh] left-[-100px] z-0 animate-fly-1">
            <PaperPlane />
          </div>
          <div className="absolute top-[70vh] left-[-100px] z-0 animate-fly-2">
            <PaperPlane />
          </div>
          <div className="absolute top-[80vh] left-[-100px] z-0 animate-fly-3">
            <PaperPlane />
          </div>
          <div className="absolute top-[90vh] left-[-100px] z-0 animate-fly-4">
            <PaperPlane />
          </div>
          <div className="absolute top-[100vh] left-[-100px] z-0 animate-fly-5">
            <PaperPlane />
          </div>
        </>
      )}
      {isAnimating && (
        <div className="absolute top-[50vh] left-[-100px] z-0 animate-big-plane">
          <BigPlane />
        </div>
      )}
    </div>
  );
}
