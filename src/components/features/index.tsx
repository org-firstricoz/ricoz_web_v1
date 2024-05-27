import FeatureWrapper from "./FeatureWrapper";
import { FEATURES } from "./constants";

export default function Features() {
  return (
    <div className=" py-8 sm:py-16 gap-16 lg:px-40 md:px-24 sm:px-16 px-4 text-black relative overflow-hidden">
      <div className="w-[90rem] h-[90rem] absolute rounded-full border-dashed -z-10 -right-[28rem] border-[5rem] -bottom-[7rem]"></div>
      <h3 className="text-2xl sm:text-4xl font-semibold playfair-display text-rz-darkgray ">
        Features 
      </h3>
      <h3 className="tracking-[1px] text-sm sm:text-base text-rz-darkgray/80 mt-2">Illuminate your path with Advanced features we provide.</h3>
      <div className="flex lg:flex-row flex-col items-center gap-8 xl:gap-16">
        <div className=" grid sm:grid-cols-2 grid-cols-1 gap-4 sm:gap-8 mt-4 sm:mt-12">
          {FEATURES.map((feature, i) => (
            <FeatureWrapper
              key={`FEATURE_${i}`}
              img={feature.img}
              name={feature.name}
              des={feature.des}
            />
          ))}
        </div>
        <div className="lg:w-[100rem] w-[20rem]">
            <img src="features-banner.png" alt="" />
        </div>
      </div>
    </div>
  );
}
