import SectionHeading from "../section-heading";
import IntegratedToolsWrapper from "./IntegratedToolsWrapper";
import { INTEGRATEDTOOLS } from "./constants";

export default function IntegratedTools() {
  return (
    <div className="py-8 sm:py-32 gap-16 lg:px-40 md:px-24 sm:px-16 px-4 bg-gradient-to-t from-rz-lightblue border-b text-black">
      <SectionHeading title="Integrated tools" justifyStart/>

      <div className="flex lg:flex-row flex-col items-center gap-8 xl:gap-16">
        <div className="lg:w-[100rem] w-[20rem] lg:order-1 order-2">
          <img src="it-banner.png" alt="" />
        </div>
        <div className=" grid sm:grid-cols-2 grid-cols-1 gap-4 sm:gap-8 mt-4 sm:mt-16">
          {INTEGRATEDTOOLS.map((integeatedTool, i) => (
            <IntegratedToolsWrapper
              key={`INTEGRATEDTOOLS_${i}`}
              img={integeatedTool.img}
              name={integeatedTool.name}
              des={integeatedTool.des}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
