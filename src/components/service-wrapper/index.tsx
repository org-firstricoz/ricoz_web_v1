import { motion } from "framer-motion";
import React from "react";
import cn from "../../utils/cn";
import ArrowSVG from "../svgs/ArrowSVG";

export default function ServiceWrapper({
  description,
  img,
  title,
}: {
  title: string;
  description: string;
  img: string;
}) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.a
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col items-center p-4 sm:p-8 cursor-pointer borde shadow2 rounded-xl relative hover:bg-rz-darkgreen transition-colors duration-500"
      href={`/services/${title}`}
    >
      <img className="w-16 h-16 mb-4 sm:mb-8 object-contain" src={img} alt="" />
      <p
        className={cn("text-2xl font-semibold text-center mb-4", {
          "text-black": !hovered,
          "text-white": hovered,
        })}
      >
        {title}
      </p>
      <p
        className={cn(" text-center text-sm font-medium", {
          "text-black/60": !hovered,
          "text-white/60": hovered,
        })}
      >
        {description}
      </p>
      <div className="absolute right-8 text-white">
        <ArrowSVG />
      </div>
    </motion.a>
  );
}
