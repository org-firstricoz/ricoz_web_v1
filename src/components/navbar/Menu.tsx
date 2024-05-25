import React from "react";
import MenuIcon from "./MenuIcon";
import { NAVLINKS } from "./constants";
import MenuLink from "./MenuLink";

export default function Menu() {
  const [expand, setExpand] = React.useState<boolean>(false);
  const handleMenuExpandOnClick = () => {
    setExpand((value) => !value);
  };
  const handleMenuExpandOnBlur = () => {
    setExpand(false);
  };
  return (
    <div className="flex md:hidden relative">
      <button
        className="focus:outline-none border-none p-0"
        onClick={handleMenuExpandOnClick}
      >
        <MenuIcon />
      </button>
      {expand && (
        <div
          onBlur={handleMenuExpandOnBlur}
          className="flex flex-col right-0 top-0 text-black z-40 w-screen fixed h-screen bg-white items-start border overflow-y-scroll"
        >
          <div className="py-2 flex justify-end w-full px-4">
            <p onClick={handleMenuExpandOnClick}>x</p>
          </div>
          {NAVLINKS.map((navlink, i) => (
            <MenuLink
              key={`NAVLINK_MENU_${navlink.title}_${i}`}
              href={navlink.href}
              title={navlink.title}
              dropdown={navlink.dropdown}
              dropdownLinks={navlink.dropdownLinks}
            />
          ))}
        </div>
      )}
    </div>
  );
}
