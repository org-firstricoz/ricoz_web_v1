import { motion } from "framer-motion";
// import { BoxParentVariants } from "../../animation/entry002";
import { MISSIONS, VISION } from "./constants";
import PointItem from "./PointItem";

export default function VisionAndMission() {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 lg:px-40 md:px-24 sm:px-16 px-4 sm:py-24 py-8 gap-8 sm:gap-16">
      <motion.div
        // variants={BoxParentVariants}
        // initial="hidden"
        // whileInView="visible"
        className="text-black flex flex-col gap-8"
      >
        <motion.h3
          // variants={BoxParentVariants}
          className="playfair-display text-2xl sm:text-3xl font-semibold"
        >
          Vision and Mission
        </motion.h3>
        <motion.h3
        //  variants={BoxParentVariants}
          className="text-black/50 text-sm sm:text-base">
          {VISION}
        </motion.h3>
        <motion.div
          // variants={BoxParentVariants}
          className="flex flex-col gap-4 text-black"
        >
          {MISSIONS.map((mission) => (
            <PointItem text={mission} />
          ))}
        </motion.div>
      </motion.div>
      <motion.img
        // initial={{ scale: 0, borderRadius: 1000 }}
        // whileInView={{ scale: 1, borderRadius: 0 }}
        src="about3.jpg"
        className="h-full object-cover"
        alt=""
      />
    </div>
  );
}
