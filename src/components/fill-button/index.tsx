import { motion } from "framer-motion";
import cn from "../../utils/cn";
import React from "react";

export default function FillButton({
  title,
  onClick,
  variant = "primary-fill",
  children,
  rounded = "none",
}: {
  title: string;
  onClick?: () => void;
  variant?:
    | "primary-fill"
    | "primary-bordered"
    | "white-fill"
    | "white-bordered"
    | "light-green-fill";
  children?: React.JSX.Element;
  rounded?: "sm" | "md" | "lg" | "none";
}) {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.9 }}
      className={cn(
        `rounded-none text-nowrap border-2 tracking-[1px] font-normal px-8 py-4 text-sm sm:text-base flex gap-2 transition-colors duration-300`,
        {
          "bg-rz-lategray text-white border-rz-lategray sm:hover:text-rz-lategray hover:border-rz-lategray sm:hover:bg-transparent":
            variant === "primary-fill",
          "sm:hover:bg-rz-lategray sm:hover:text-black text-rz-lategray border-rz-lategray":
            variant === "primary-bordered",
          "bg-white text-black sm:hover:text-white hover:border-white sm:hover:bg-transparent":
            variant === "white-fill",
            "sm:hover:bg-white sm:hover:text-black text-white border-white":
            variant === "white-bordered",
            "bg-[#3db56d] text-white sm:hover:text-[#3db56d] border-[#3db56d] sm:hover:bg-transparent":
              variant === "light-green-fill",
          
        },
        {
          "rounded-sm": rounded === "sm",
          "rounded-md": rounded === "md",
          "rounded-lg": rounded === "lg",
          "rounded-none": rounded === "none",
        }
      )}
    >
      {title}
      {children}
    </motion.button>
  );
}
