import { motion } from "framer-motion";
import { BoxParentVariants } from "../../animation/entry002";

export default function OurHistory() {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 lg:px-40 md:px-24 sm:px-16 px-4 py-24 gap-16">
      <motion.img
        initial={{ scale: 0, borderRadius: 1000 }}
        whileInView={{ scale: 1, borderRadius: 0 }}
        src="about1.jpg"
        className=" object-cover h-full"
        alt=""
      />
      <motion.div
        variants={BoxParentVariants}
        initial="hidden"
        whileInView="visible"
        className="text-black flex flex-col gap-8"
      >
        <motion.h3 variants={BoxParentVariants} className="playfair-display text-3xl font-semibold">Our History</motion.h3>
        <motion.h3 variants={BoxParentVariants} className="text-black/50">
          Lorem ipsum dolor sit amet, consectetur adiping elit, sed do eiusmod
          tempor incidd ut labore rhei et dolore magna aliqua. Ut enim ad
          veniam, quis laboris nisi ut aliquip ex ea commodo. Duis aute irure
          dolor in repre voluptate in the velit esse.
        </motion.h3>
        <motion.div variants={BoxParentVariants} className="flex flex-col gap-4 text-black">
          <div className="flex gap-8 items-center ">
            <div className="playfair-display text-lg font-medium">2002</div>
            <div className="border border-black w-4 h-3 "></div>
            <div className="text-sm text-black/50">
              Duis aute irure dolor in reprehenderit in the voluptate velit esse
              cillum dolore eu ugiat nulla pariatur cupiat non proident.
            </div>
          </div>
          <div className="flex gap-8 items-center">
            <div className="playfair-display text-lg font-medium">2007</div>
            <div className="border border-black w-4 h-3 "></div>
            <div className="text-sm text-black/50">
              Duis aute irure dolor in reprehenderit in the voluptate velit esse
              cillum dolore eu ugiat nulla pariatur cupiat non proident.
            </div>
          </div>
          <div className="flex gap-8 items-center">
            <div className="playfair-display text-lg font-medium">2012</div>
            <div className="border border-black w-4 h-3 "></div>
            <div className="text-sm text-black/50">
              Duis aute irure dolor in reprehenderit in the voluptate velit esse
              cillum dolore eu ugiat nulla pariatur cupiat non proident.
            </div>
          </div>
          <div className="flex gap-8 items-center">
            <div className="playfair-display text-lg font-medium">2022</div>
            <div className="border border-black w-4 h-3 "></div>
            <div className="text-sm text-black/50">
              Duis aute irure dolor in reprehenderit in the voluptate velit esse
              cillum dolore eu ugiat nulla pariatur cupiat non proident.
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
