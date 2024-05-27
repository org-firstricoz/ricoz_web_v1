import React from "react";
import ChevronSVGBig from "../../svgs/ChevronSVGBig";

export default function LinksList({heading}:{heading:string}) {
  const [expand, setExpand] = React.useState(false);
  return (
    <div className="border-b-2 sm:border-none ">
      <div
        onClick={() => setExpand((x) => !x)}
        className={`flex justify-between `}
      >
        <h3 className="playfair-display text-white text-lg text-nowrap mb-4">
          {heading}
        </h3>
        <div className="sm:hidden flex">

        <ChevronSVGBig />
        </div>
      </div>
      <div className={` ${expand ? "flex" : "hidden"} flex-col gap-4 text-sm`}>
        <h5>Home</h5>
        <h5>About</h5>
        <h5>Contact Us</h5>
      </div>
      <div className={` sm:flex hidden flex-col gap-4 text-sm `}>
        <h5>Home</h5>
        <h5>About</h5>
        <h5>Contact Us</h5>
      </div>
    </div>
  );
}
