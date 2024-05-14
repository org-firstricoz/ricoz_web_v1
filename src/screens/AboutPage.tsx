import AchievementStrip from "../components/achievement-strip";
import Footer from "../components/footer";
import LetsStartContainer from "../components/lets-start-container";
import Navbar from "../components/navbar";
import OurHistory from "../components/our-history";
import VisionAndMission from "../components/vision-and-mission";
import WhatWeDoSection from "../components/what-we-do-section";

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <div className="bg-rz-lategray flex justify-center pt-20 pb-32 text-5xl playfair-display">About Us</div>
      <OurHistory />
      <VisionAndMission />
      <AchievementStrip />
      <WhatWeDoSection />
      <LetsStartContainer />
      <Footer />
    </div>
  );
}
