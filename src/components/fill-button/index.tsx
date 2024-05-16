import { motion } from "framer-motion"

export default function FillButton({ title }: { title: string }) {
  return (
    <motion.button whileTap={{scale:0.9}} initial={{scale:1}} whileHover={{background:"transparent",transition:{duration:300}}} className="bg-rz-lategray text-white hover:text-rz-lategray rounded-none hover:border-rz-lategray border-2 tracking-[1px] font-normal px-12 py-4">
      {title}
    </motion.button>
  );
}
