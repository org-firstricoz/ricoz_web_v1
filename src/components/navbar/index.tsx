/**
 * @file Navbar.tsx
 * @description A navigation bar component for the application
 * @module Navbar
 */

import React from "react";
import { NAVLINKS } from "./constants";
import Menu from "./Menu";
import NavLink from "./NavLink";

/**
 * A navigation bar component.
 * @component
 * @returns {React.JSX.Element} A React component representing the navigation bar.
 */
export default function Navbar(): React.JSX.Element {
  return (
    <nav className="bg-rz-lategray h-16 flex items-center pb-2 w-full justify-end px-0 sm:px-16 md:px-40">
      <div className="hidden sm:flex gap-10">
        {NAVLINKS.map((navlink, i) => (
          <NavLink
            title={navlink.title}
            href={navlink.href}
            dropdown={navlink.dropdown}
            dropdownLinks={navlink.dropdownLinks}
            key={`NAVLINK_MAIN_${navlink.title}_${i}`}
          />
        ))}
      </div>
      <Menu />
    </nav>
  );
}
