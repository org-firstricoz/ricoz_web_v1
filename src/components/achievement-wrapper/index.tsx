import { motion } from "framer-motion";
// import { BoxParentVariants } from "../../animation/entry002";

export default function AchievementWrapper({
  img,
  title,
  value,
}: {
  img: string;
  title: string;
  value: string;
}) {
  return (
    <motion.div
      // variants={BoxParentVariants}
      className="flex lg:pb-32 sm:pb-16 pb-8 gap-4 sm:gap-8 justify-start items-center sm:items-start"
    >
      <img className="sm:w-16 w-8 sm:h-16 h-8 object-contain" src={img} alt="" />
      <div>
        <div className="font-medium text-2xl sm:text-4xl">{value}</div>
        <div className="text-nowrap">{title}</div>
      </div>
    </motion.div>
  );
}
