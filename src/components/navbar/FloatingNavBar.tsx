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
      className="bg-rz-lategray h-16 flex fixed top-0 z-30 items-center pb-2 w-full justify-end px-0 sm:px-16 md:px-40"
    >
      <div className="hidden sm:flex gap-10">
        {NAVLINKS.map((navlink, i) => (
          <NavLink
          title={navlink.title}
          href={navlink.href}
          key={`NAVLINK_MAIN_${navlink.title}_${i}`}
        />
        ))}
      </div>
      <Menu />
    </motion.nav>
  );
}
