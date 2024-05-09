import React from "react";
import { NAVLINKS } from "./constants";
import Menu from "./Menu";

export default function Navbar(): React.JSX.Element {
  return (
    <nav className="bg-rz-lategray h-28 flex  w-[100vw] items-center justify-end px-8 sm:px-16 md:px-40">
      <div className="hidden sm:flex gap-10">
        {NAVLINKS.map((navlink,i) => (
          <a key={`NAVLINK_MAIN_${navlink.title}_${i}`} href="#">{navlink.title}</a>
        ))}
      </div>
      <Menu/>
    </nav>
  );
}
