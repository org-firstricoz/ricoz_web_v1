import { motion } from "framer-motion";
import React from "react";
import { INavLink } from "./constants";
import ChevronSVG from "../svgs/ChevronSVG";
export default function NavLink({
  href,
  title,
  dropdown,
  dropdownLinks,
}: INavLink) {
  const [linkHovered, setLinkHovered] = React.useState(false);

  React.useEffect(() => {
    console.log(dropdown);
  }, [linkHovered]);
  if (dropdown)
    return (
      <div
        onMouseOver={() => setLinkHovered(true)}
        onMouseOut={() => setLinkHovered(false)}
        className="tracking-[1px] text-xs h-2 hover:text-white relative cursor-pointer uppercase"
      >
        <div className="flex items-center gap-2">
          {title}
          <ChevronSVG />
        </div>
        <motion.div
          animate={{
            width: linkHovered ? "50%" : "0%",
            transition: { duration: 0.5 },
          }}
          className="bg-white w-0 h-[2px] mt-1"
        ></motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={
            linkHovered
              ? { opacity: 1, pointerEvents: "all" }
              : { opacity: 0, pointerEvents: "none" }
          }
          transition={{delay:0.2}}
          className="bg-rz-lightblue flex flex-col text-rz-lategray absolute z-30 top-8 left-0 p-4 cursor-pointer"
        >
          {dropdownLinks?.map((link, i) => (
            <a
              key={`LINK_DROPDOWN_${i}`}
              className="text-nowrap py-3 border-b font-medium"
              href={link.href}
            >
              {link.title}
            </a>
          ))}
        </motion.div>
      </div>
    );
  return (
    <a
      onMouseOver={() => setLinkHovered(true)}
      onMouseOut={() => setLinkHovered(false)}
      className="tracking-[1px] uppercase text-xs h-2 hover:text-white"
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
