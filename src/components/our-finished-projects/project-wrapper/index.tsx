import { motion } from "framer-motion";
import React from "react";

export default function ProjectWrapper({
  img,
  span,
  title,
  description
}: {
  span: "1" | "2";
  img: string;
  title:string,
  description:string
}) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      className={`relative ${span == "1" ? "row-span-1" : "row-span-2"}  overflow-hidden`}
    >
      <img src={img} className=" h-full object-cover w-full" alt="" />
      <motion.div
        animate={{
          height: hovered ? "100%" : "15rem",
          bottom: hovered ? 0 : "-10.3rem",
        }}
        className="bg-black/70 text-white absolute w-full flex flex-col justify-center px-4"
      >
        <h4 className="text-2xl">{title}</h4>
        <h4 className="text-sm font-light mt-6 mb-4 text-white/80">
          {description}
        </h4>
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="border focus:outline-none border-white rounded-none py-4 px-8 hover:bg-white hover:text-rz-lategray hover:border-rz-lategray transition-colors duration-300"
        >
          VISIT
        </motion.button>
      </motion.div>
    </div>
  );
}
