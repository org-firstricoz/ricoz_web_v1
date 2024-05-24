import { motion } from "framer-motion";
import React from "react";
import { INavLink } from "./constants";
export default function NavLink({
  href,
  title,
  dropdown,
  // dropdownLinks,
}: INavLink) {
  const [linkHovered, setLinkHovered] = React.useState(false);
  if (dropdown)
    return (
      <div
        onMouseOver={() => setLinkHovered(true)}
        onMouseOut={() => setLinkHovered(false)}
        className="tracking-[1px] text-sm h-2 hover:text-white relative"
      >
        {title}sssss
        <motion.div
          animate={{
            width: linkHovered ? "50%" : "0%",
            transition: { duration: 0.5 },
          }}
          className="bg-white w-0 h-[2px] mt-1"
        ></motion.div>
        <div className="bg-rz-lategray text-white absolute z-30 top-0 left-0">
          <a href="">ssssss</a>
          <a href="">ssssss</a>
          <a href="">ssssss</a>
          <a href="">ssssss</a>
          <a href="">ssssss</a>
          <a href="">ssssss</a>
          <a href="">ssssss</a>
        </div>
      </div>
    );
  return (
    <a
      onMouseOver={() => setLinkHovered(true)}
      onMouseOut={() => setLinkHovered(false)}
      className="tracking-[1px] text-sm h-2 hover:text-white"
      href={href}
    >
      {title}
      <motion.div
        animate={{
          width: linkHovered ? "50%" : "0%",
          transition: { duration: 0.5 },
        }}
        className="bg-white w-0 h-[2px] mt-1"
      ></motion.div>
    </a>
  );
}
