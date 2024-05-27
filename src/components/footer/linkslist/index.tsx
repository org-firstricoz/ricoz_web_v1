import React from "react";
import ChevronSVGBig from "../../svgs/ChevronSVGBig";

export default function LinksList({
  heading,
  links,
}: {
  heading: string;
  links: Array<{ title: string; href: string }>;
}) {
  const [expand, setExpand] = React.useState(false);
  return (
    <div className="">
      <div
        onClick={() => setExpand((x) => !x)}
        className={`flex justify-between border-b-2 sm:border-none border-white/40`}
      >
        <h3 className="text-white text-sm text-nowrap mb-0 ">
          {heading}
        </h3>
        <div className={`sm:hidden flex ${expand ? "rotate-180":"rotate-0"}`}>
          <ChevronSVGBig />
        </div>
      </div>
      {expand && (
        <div
          className={` sm:hidden flex flex-col gap-1 sm:gap-4 text-sm mt-1 sm:mt-0`}
        >
          {links.map((link, i) => (
            <a key={`LINK_${link.title}_${i}`} href={link.href}>
              {link.title}
            </a>
          ))}
        </div>
      )}
      <div className={` sm:flex hidden flex-col gap-4 text-sm `}>
        {links.map((link, i) => (
          <a key={`LINK_B_${link.title}_${i}`} href={link.href}>
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
}
