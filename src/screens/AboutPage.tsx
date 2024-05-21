import AchievementStrip from "../components/achievement-strip";
import Footer from "../components/footer";
import LetsStartContainer from "../components/lets-start-container";
import MarketOpportunity from "../components/market-opportunity";
import Navbar from "../components/navbar";
import OurUsers from "../components/our-users";
import OurValues from "../components/our-values";
import VisionAndMission from "../components/vision-and-mission";
import WhatWeDoSection from "../components/what-we-do-section";

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <div className="bg-rz-lategray flex justify-center pt-20 pb-32 text-5xl playfair-display">About Us</div>
      <OurValues />
      <OurUsers/>
      <MarketOpportunity/>
      <VisionAndMission />
      <AchievementStrip />
      <WhatWeDoSection />
      <LetsStartContainer />
      <Footer />
    </div>
  );
}
