import React from "react";
import MenuIcon from "./MenuIcon";
import { NAVLINKS } from "./constants";
import textEllipsis from "../../utils/textEllipsis";

export default function Menu() {
  const [expand, setExpand] = React.useState<boolean>(false);
  const handleMenuExpandOnClick = () => {
    setExpand((value) => !value);
  };
  const handleMenuExpandOnBlur = () => {
    setExpand(false);
  };
  return (
    <div className="flex sm:hidden relative">
      <button className="focus:outline-none border-none" onBlur={handleMenuExpandOnBlur} onClick={handleMenuExpandOnClick}>
        <MenuIcon />
      </button>
      {expand && (
        <div className="flex flex-col absolute z-30 right-0 top-12 text-black w-36 bg-white rounded-xl items-end border border-black">
          {NAVLINKS.map((navlink,i) => (
            <a key={`NAVLINK_MENU_${navlink.title}_${i}`} href="#" className="px-4 py-2">
              {textEllipsis(navlink.title, 12)}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
