import { motion } from "framer-motion";
import React from "react";
export default function NavLink({
  href,
  title,
}: {
  title: string;
  href: string;
}) {
  const [linkHovered, setLinkHovered] = React.useState(false);
  return (
    <a
      onMouseOver={() => setLinkHovered(true)}
      onMouseOut={() => setLinkHovered(false)}
      className="tracking-[1px] text-sm h-2 hover:text-white"
      href={href}
    >
      {title}
        <motion.div animate={{width:linkHovered?"50%":"0%",transition:{duration:0.5}}} className="bg-white w-0 h-[2px] mt-1"></motion.div>
    </a>
  );
}
