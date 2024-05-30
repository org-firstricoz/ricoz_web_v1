import { motion } from "framer-motion";
import ArrowSVG from "../../svgs/ArrowSVG";
import React from "react";
import cn from "../../../utils/cn";
export default function ProjectWrapper({
  img,
  span,
  title,
  description,
}: // title,
// description,
{
  span: "1" | "2";
  img: string;
  title: string;
  description: string;
}) {
  const [hovered,setHovered] = React.useState(false);
  return (
    <motion.div
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      whileTap={{scale:0.97}}
      className={`relative ${
        span == "1" ? "row-span-1" : "row-span-2"
      }  overflow-hidden cursor-pointer rounded-xl`}
    >
      <div className="relative h-full ">
        <img src={img} className=" h-full object-cover w-full" alt="" />

        <div className={cn("bg-black text-white absolute top-4 rounded-full right-4 p-4 transition-all duration-300",
          {
            "opacity-100 pointer-events-auto": hovered,
            "opacity-0 pointer-events-none": !hovered,
          }
        )}>
          <ArrowSVG />
        </div>
        <div className="absolute bg-gradient-to-t from-black via-black/70 bottom-0  text-white w-full  pb-4 pt-6 px-4 left-0">
          <div className="flex">
            <div>
              <div className={cn("font-medium text-lg uppercase transition-all duration-300",{
                "text-3xl" :hovered
              })}>{title}</div>
              <div className={cn("text-xs text-white/60 transition-all duration-300",{
                "text-sm" : hovered
              })}>{description}</div>
            </div>
          </div>
        </div>
      </div>
      {/* <motion.div
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
      </motion.div> */}
    </motion.div>
  );
}
