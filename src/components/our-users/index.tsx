import { motion } from "framer-motion";
// import { BoxParentVariants } from "../../animation/entry002";

export default function OurUsers() {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 lg:px-40 md:px-24 sm:px-16 px-4 pt-16 gap-16">
      
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
          Our Users
        </motion.h3>
        <motion.h3
        //  variants={BoxParentVariants}
          className="text-black/50">
          Ricoz caters to a diverse audience, including tech enthusiasts,
          professionals, and decision-makers across various industries. Whether
          you're an individual seeking the latest gadgets or a business looking
          for innovative solutions, Ricoz is tailored to meet your specific tech
          needs.
        </motion.h3>
      </motion.div>
      <motion.img
        // initial={{ scale: 0, borderRadius: 1000 }}
        // whileInView={{ scale: 1, borderRadius: 0 }}
        src="about5.jpg"
        className=" object-cover h-[13rem] w-full"
        alt=""
      />
    </div>
  );
}
