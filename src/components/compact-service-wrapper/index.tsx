import { motion } from "framer-motion";
import React from "react";
import cn from "../../utils/cn";

interface CompactServiceWrapperProps {
  title: string;
  description: string;
  img: string;
  selected: boolean; 
  onClick: (title: string) => void; 
}

const CompactServiceWrapper: React.FC<CompactServiceWrapperProps> = ({
  img,
  title,
  selected,
  onClick,
}) => {
  return (
    <motion.div
      onClick={() => onClick(title)}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "flex flex-col items-center p-4 cursor-pointer border rounded-xl relative transition-colors duration-500",
        {
          "border-rz-darkgreen border-4": selected,
        }
      )}
    >
      <img className="w-16 h-16 mb-4 object-contain" src={img} alt={title} />
      <p className={cn("text-xs font-semibold mb-4 uppercase text-center")}>
        {title}
      </p>
    </motion.div>
  );
};

export default CompactServiceWrapper;
