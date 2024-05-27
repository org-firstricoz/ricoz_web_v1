import { EXPERTISE } from "./constants";
import OutExpertiseWrapper from "./our-expertise-wrapper";

export default function OurExpertise() {
  return (
    <div className="lg:px-40 md:px-32 sm:px-24 px-4 text-black flex flex-col items-center py-16">
      <h3 className="font-semibold text-3xl">Our Expertise</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-between w-full gap-4 mt-8">
        {EXPERTISE.map((EXPERTISE, i) => (
          <OutExpertiseWrapper
            key={`EXPERISE_${i}`}
            buttonTitle={EXPERTISE.buttonTitle}
            des={EXPERTISE.des}
            img={EXPERTISE.img}
            subtitle={EXPERTISE.subtitle}
            title={EXPERTISE.title}
          />
        ))}
      </div>
    </div>
  );
}
