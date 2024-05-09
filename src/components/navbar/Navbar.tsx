import React from "react";
import { NAVLINKS } from "./constants";

export default function Navbar():React.JSX.Element {
  return (
    <nav className="bg-rz-lategray h-28 flex gap-10 w-[100vw] items-center justify-end px-40">
      {NAVLINKS.map((navlink) => (
        <a href="">{navlink.title}</a>
      ))}
    </nav>
  );
}
