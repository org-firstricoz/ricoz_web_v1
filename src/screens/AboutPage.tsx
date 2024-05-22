import AboutUsSection from "../components/about-us-section";
import AchievementStrip from "../components/achievement-strip";
import Features from "../components/features";
import Footer from "../components/footer";
import LetsStartContainer from "../components/lets-start-container";
import MarketOpportunity from "../components/market-opportunity";
import MeetOurLeaders from "../components/meet-our-leaders";
import Navbar from "../components/navbar";
import OurUsers from "../components/our-users";
import OurValues from "../components/our-values";
import VisionAndMission from "../components/vision-and-mission";
import WhatWeDoSection from "../components/what-we-do-section";
import WhyChooseRicoz from "../components/why-choose-ricoz";

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <div className="bg-rz-lategray flex justify-center pt-20 pb-32 text-5xl playfair-display">About Us</div>
      <OurValues />
      <OurUsers/>
      <MarketOpportunity/>
      <VisionAndMission />
      <MeetOurLeaders/>
      <AboutUsSection/>
      <Features/>
      <WhyChooseRicoz/>
      <AchievementStrip />
      <WhatWeDoSection />
      <LetsStartContainer />
      <Footer />
    </div>
  );
}
