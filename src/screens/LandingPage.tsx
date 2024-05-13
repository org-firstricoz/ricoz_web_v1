import AboutUsSection from "../components/about-us-section";
import AchievementStrip from "../components/achievement-strip";
import Footer from "../components/footer";
import HeroSection from "../components/hero-section";
import LetsStartContainer from "../components/lets-start-container";
import Navbar from "../components/navbar";
import OurFinishedProjects from "../components/our-finished-projects";
import OurServicesSection from "../components/our-services-section";
import WhatWeDoSection from "../components/what-we-do-section";

export default function LandingPage() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <WhatWeDoSection/>
      <AboutUsSection/>
      <OurServicesSection/>
      <AchievementStrip/>
      <OurFinishedProjects/>
      <LetsStartContainer/>
      <Footer/>
    </div>
  );
}
