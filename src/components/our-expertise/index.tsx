import SectionHeading from "../section-heading";
import { EXPERTISE } from "./constants";
import OutExpertiseWrapper from "./our-expertise-wrapper";

export default function OurExpertise() {
  return (
    <div className="lg:px-40 md:px-32 sm:px-24 px-4 text-black flex flex-col items-center py-16">
      <SectionHeading title="Our Expertise" subtitle="Illuminate your path with Advanced features we provide" />
      {/* <div className="grid grid-flow-col justify-between w-full gap-4 mt-16 overflow-x-auto pb-4 customscroll1">
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
      </div> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-between w-full gap-8 mt-16">
        {EXPERTISE.map((EXPERTISE, i) => (
          <OutExpertiseWrapper
            key={`EXPERISE_${i}`}
            buttonTitle={EXPERTISE.buttonTitle}
            des={EXPERTISE.des}
            fullDes={EXPERTISE.fullDes}
            img={EXPERTISE.img}
            subtitle={EXPERTISE.subtitle}
            title={EXPERTISE.title}
          />
        ))}
      </div>
    </div>
  );
}
