import CareerHighlightWrapper from "../career-highlight-wrapper";
import BulbSVG from "../svgs/BulbSVG";
import PeopleSVG from "../svgs/PeopleSVG";

export default function CareerHighlights() {
  return (
    <div className="py-8 lg:px-40 md:px-24 sm:px-16 px-4">
      <img
        src="careers-banner1.jpg"
        className="h-[20rem] w-full object-cover mb-4 rounded-lg"
        alt=""
      />
      <div className="grid lg:grid-cols-2 grid-col-1 gap-4">
        <CareerHighlightWrapper
          title="Creativity at Our Core"
          description="At Ricoz, creativity is not just a skill, it's our ethos. We believe in
        pushing boundaries, exploring new ideas, and designing spaces that tell
        a story join us in crafting environments that inspire and captivate."
          svg={<BulbSVG />}
        />
        <CareerHighlightWrapper
          title="Collaboration as Our Strength"
          description="Collaboration is the Cornerstone of our Success We Drive on the synergy Of diverse talents and perspectives, fostering a cultire where every voice is valued. Be part of a team where unity and creativity blend to create extraordinary results"
          svg={<PeopleSVG />}
        />
      </div>
    </div>
  );
}
