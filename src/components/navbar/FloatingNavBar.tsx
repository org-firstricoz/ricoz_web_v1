/**
 * @file Navbar.tsx
 * @description A navigation bar component for the application
 * @module Navbar
 */

import React from "react";
import { NAVLINKS } from "./constants";
import Menu from "./Menu";
import { motion } from "framer-motion";
import NavLink from "./NavLink";
import Logo from "../logo";

/**
 * A navigation bar component.
 * @component
 * @returns {React.JSX.Element} A React component representing the navigation bar.
 */
export default function FloatingNavBar(): React.JSX.Element {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <motion.nav
      animate={{
        opacity: scrollPosition < 400 ? 0 : 100,
        pointerEvents: scrollPosition < 400 ? "none" : "all",
      }}
      initial={{ opacity: 0 }}
      className="bg-rz-lategray h-16 flex fixed top-0 z-30 justify-between pb-2 w-full items-center lg:px-40 md:px-24 sm:px-16 px-4"
    >
      <Logo />
      <div className="hidden md:flex gap-6 lg:gap-10">
        {NAVLINKS.map((navlink, i) => (
          <NavLink
            title={navlink.title}
            href={navlink.href}
            key={`NAVLINK_MAIN_${navlink.title}_${i}`}
            dropdown={navlink.dropdown}
            dropdownLinks={navlink.dropdownLinks}
          />
        ))}
      </div>
      <Menu />
    </motion.nav>
  );
}
