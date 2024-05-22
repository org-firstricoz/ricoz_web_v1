import WcrWrapper from "./WcrWrapper";
import { WHYCHOOSEUSPOINTS } from "./constants";

export default function WhyChooseRicoz() {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 bg-rz-lightblue text-black py-16 lg:px-40 md:px-24 sm:px-16 px-8">
      <div className="sm:p-16 p-2"> <img src="whychooseus.png" alt="" /></div>
      <div>
        <h3 className=" lg:text-4xl md:text-3xl text-2xl font-semibold playfair-display text-rz-darkgray mb-16">
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
