/**
 * @file BlueButtonInput.tsx
 * @description A component containing an input field and a blue button
 * @module BlueButtonInput
 */

import React from "react";
import { motion } from "framer-motion";
import { childVariants } from "../variants";

/**
 * A component that displays an input field and a blue button.
 * @component
 * @returns {React.JSX.Element} A React component.
 */
export default function BlueButtonInput(): React.JSX.Element {
  return (
    <motion.div variants={childVariants} className="flex gap-2 sm:flex-row flex-col">
      <div className="bg-white flex px-4 items-center rounded-sm md:w-96 h-[3rem]">
        <input type="text" placeholder="Your Work Email" className="h-full text-sm" />
      </div>
      <button className="bg-rz-royalblue py-3 px-6 rounded-sm w-[10rem] text-sm">Get Started</button>
    </motion.div>
  );
}
