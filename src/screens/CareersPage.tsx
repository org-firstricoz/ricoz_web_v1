import CareerHighlights from "../components/career-highlights";
import CareerOpeningSection from "../components/career-opening-section";
import Footer from "../components/footer";
import LetsStartContainer from "../components/lets-start-container";
import MarketOpportunity from "../components/market-opportunity";
import Navbar from "../components/navbar";
import OurUsers from "../components/our-users";
import OurValues from "../components/our-values";
import VisionAndMission from "../components/vision-and-mission";

export default function CareersPage() {
  return (
    <div>
      <Navbar />
      <div className="bg-rz-lategray flex flex-col gap-2 items-center pt-20 pb-32 ">
        <h2 className="text-5xl playfair-display">Careers</h2>
        <p className="max-w-[35rem] text-center text-white/50">
          We are looking for passionate, creative minds to help us redefine
          spaces with elegance and style
        </p>
      </div>
      <CareerHighlights />
      <CareerOpeningSection />
      <OurValues />
      <OurUsers />
      <MarketOpportunity />
      <VisionAndMission />
      <LetsStartContainer />
      <Footer />
    </div>
  );
}
