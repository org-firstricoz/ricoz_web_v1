import WcrWrapper from "./WcrWrapper";
import { WHYCHOOSEUSPOINTS } from "./constants";

export default function WhyChooseRicoz() {
  return (
    <div className="grid grid-cols-2 bg-rz-lightblue text-black py-32 lg:px-40 md:px-24 sm:px-16 px-8">
      <div className="p-16"> <img src="whychooseus.png" alt="" /></div>
      <div>
        <h3 className="text-4xl font-semibold playfair-display text-rz-darkgray mb-16">
          Why Choose Ricoz
        </h3>
        {WHYCHOOSEUSPOINTS.map((point, i) => (
          <WcrWrapper
            withBorder={i<WHYCHOOSEUSPOINTS.length-1}
            key={`WHYCHOOSEUS_${i}`}
            number={i + 1}
            subtitle={point.subtitle}
            title={point.title}
          />
        ))}
      </div>
    </div>
  );
}
