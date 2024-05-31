import { motion } from "framer-motion";
import React from "react";
import cn from "../../utils/cn";

export default function CompactServiceWrapper({
  img,
  title,
}: {
  title: string;
  description: string;
  img: string;
}) {
  const [selected, setSelected] = React.useState(false);

  return (
    <motion.div
      onClick={() => setSelected((x) => !x)}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "flex flex-col items-center p-4 cursor-pointer border rounded-xl relative transition-colors duration-500",
        {
            "border-rz-darkgreen border-4":selected
        }
      )}
    >
      <img className="w-16 h-16 mb-4 object-contain" src={img} alt="" />
      <p className={cn("text-xs font-semibold mb-4 uppercase text-center")}>{title}</p>
    </motion.div>
  );
}
