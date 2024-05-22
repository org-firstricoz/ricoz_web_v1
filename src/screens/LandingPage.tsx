import AboutUsSection from "../components/about-us-section";
import AchievementStrip from "../components/achievement-strip";
import Features from "../components/features";
import Footer from "../components/footer";
import HeroSection from "../components/hero-section";
import IntegratedTools from "../components/integrated-tools";
import LetsStartContainer from "../components/lets-start-container";
import Navbar from "../components/navbar";
import FloatingNavBar from "../components/navbar/FloatingNavBar";
import OurFinishedProjects from "../components/our-finished-projects";
import OurServicesSection from "../components/our-services-section";
import WhatWeDoSection from "../components/what-we-do-section";

export default function LandingPage() {
  return (
    <div className="">
      <Navbar />
      <FloatingNavBar/>
      <HeroSection />
      <WhatWeDoSection/>
      <AboutUsSection/>
      <Features/>
      <IntegratedTools/>
      <OurServicesSection/>
      <AchievementStrip/>
      <OurFinishedProjects/>
      <LetsStartContainer/>
      <Footer/>
    </div>
  );
}
