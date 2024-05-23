import { motion } from "framer-motion";
// import { BoxParentVariants } from "../../animation/entry002";

export default function OurValues({coloredBg=false}:{coloredBg?:boolean}) {
  return (
    <div className={`${coloredBg?"bg-rz-lightblue":""} grid lg:grid-cols-2 grid-cols-1 lg:px-40 md:px-24 sm:px-16 px-4 py-8 gap-16`}>
      <motion.img
        // initial={{ scale: 0, borderRadius: 1000 }}
        // whileInView={{ scale: 1, borderRadius: 0 }}
        src="about2.jpg"
        className=" object-cover h-[13rem] w-full lg:order-first order-last"
        alt=""
      />
      <motion.div
        // variants={BoxParentVariants}
        // initial="hidden"
        // whileInView="visible"
        className="text-black flex flex-col gap-8"
      >
        <motion.h3
          // variants={BoxParentVariants}
          className="playfair-display text-3xl font-semibold"
        >
          Our Values
        </motion.h3>
        <motion.h3
        //  variants={BoxParentVariants}
          className="text-black/50">
          Our commitment to excellence and passion for technological advancement
          are at the core of everything we do. We strive to uphold the highest
          standards of integrity, reliability, and innovation in delivering
          value to our users.
        </motion.h3>
      </motion.div>
    </div>
  );
}
