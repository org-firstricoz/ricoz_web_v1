import { motion } from "framer-motion";
import AchievementWrapper from "../achievement-wrapper";
import ACHIEVEMENTS from "./constants";
import { BoxParentVariants } from "../../animation/entry002";

export default function AchievementStrip() {
  return (
    <motion.div variants={BoxParentVariants} initial="hidden" whileInView="visible" className="bg-rz-lategray grid xl:grid-cols-4 sm:grid-cols-2 lg:px-40 md:px-24 sm:px-16 px-8 gap-16 pt-32 justify-center items-center">
      {ACHIEVEMENTS.map((achievement) => (
        <AchievementWrapper
          key={`${achievement.title}_${achievement.value}`}
          img={achievement.img}
          title={achievement.title}
          value={achievement.value}
        />
      ))}
    </motion.div>
  );
}
