import FeatureWrapper from "./FeatureWrapper";
import { FEATURES } from "./constants";

export default function Features() {
  return (
    <div className="py-32 gap-16 lg:px-40 md:px-24 sm:px-16 px-8 text-black">
      <h3 className="text-4xl font-semibold playfair-display text-rz-darkgray">
        Features 
      </h3>
      <div className="flex items-center gap-16">
        <div className=" grid grid-cols-2 gap-8 mt-16">
          {FEATURES.map((feature, i) => (
            <FeatureWrapper
              key={`FEATURE_${i}`}
              img={feature.img}
              name={feature.name}
              des={feature.des}
            />
          ))}
        </div>
        <div className="w-[100rem]">
            <img src="features-banner.png" alt="" />
        </div>
      </div>
    </div>
  );
}
