import MarketOpportunity from "../market-opportunity";
import OurUsers from "../our-users";
import OurValues from "../our-values";
import VisionAndMission from "../vision-and-mission";

export default function OurCulture() {
  return (
    <div className="text-black">
      <OurValues coloredBg />
      <OurUsers/>
      <MarketOpportunity coloredBg />
      <VisionAndMission />
    </div>
  );
}
