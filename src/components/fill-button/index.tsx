import { motion } from "framer-motion";
import cn from "../../utils/cn";
import React from "react";

export default function FillButton({
  title,
  onClick,
  variant = "primary-fill",
  children,
}: {
  title: string;
  onClick?: () => void;
  variant?:
    | "primary-fill"
    | "primary-bordered"
    | "white-fill"
    | "white-bordered";
  children?: React.JSX.Element;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{scale:0.9}}
      className={cn(
        `rounded-none text-nowrap border-2 tracking-[1px] font-normal px-8 py-4 text-sm sm:text-base flex gap-2 transition-colors duration-300`,
        {
          "bg-rz-lategray text-white hover:text-rz-lategray hover:border-rz-lategray":
            variant === "primary-fill",
          "hover:bg-rz-lategray hover:text-black text-rz-lategray border-rz-lategray":
            variant === "primary-bordered",
          "bg-white text-black hover:text-white hover:border-white":
            variant === "white-fill",
          "hover:bg-white hover:text-black text-white border-white":
            variant === "white-bordered",
        }
      )}
    >
      {title}
      {children}
    </motion.button>
  );
}
