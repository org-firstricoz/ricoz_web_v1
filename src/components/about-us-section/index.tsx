import { childVariants, parentVariants } from "../../animation/entry001";
import FillButton from "../fill-button";
import { motion } from "framer-motion";

export default function AboutUsSection() {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 py-32 gap-16 lg:px-40 md:px-24 sm:px-16 px-8  bg-rz-lightblue justify-center items-center">
      <motion.div
        variants={parentVariants}
        initial="hidden"
        whileInView="visible"
        className="text-black space-y-8"
      >
        <motion.div
          variants={childVariants}
          className="text-4xl font-semibold playfair-display text-rz-darkgray"
        >
          About Us
        </motion.div>
        <motion.div
          variants={childVariants}
          className="max-w-[80rem] lg:text-base text-rz-lightgray tracking-[1px]"
        >
          Your Premier Tech Aggregator. In today's rapidly evolving
          technological landscape, staying informed and accessing the latest
          innovations can be challenging. Ricoz addresses this need by serving
          as your go-to destination for all things tech-related. Whether you're
          a business seeking innovative solutions or an individual looking to
          stay updated on the latest trends, Ricoz has you covered.
        </motion.div>
        <motion.div variants={childVariants}>
          <FillButton title="LEARN MORE" />
        </motion.div>
      </motion.div>
      <motion.div
        whileInView={{
          scale: 1,
          borderRadius: 0,
          transition: {
            duration: 0.4,
            // type: "spring",
          },
        }}
        initial={{ scale: 0, borderRadius: 1000 }}
        className="flex justify-center items-center w-full overflow-hidden"
      >
        <img className="w-[40rem]" src="about2.jpg" alt="" />
      </motion.div>
    </div>
  );
}
