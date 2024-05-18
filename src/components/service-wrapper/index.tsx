import { motion } from "framer-motion";
import { BoxChildVariants } from "../../animation/entry002";

export default function ServiceWrapper({
  description,
  img,
  title,
}: {
  title: string;
  description: string;
  img: string;
}) {
  return (
    <motion.a
      variants={BoxChildVariants}
      className=" flex flex-col items-center p-0 cursor-pointer"
      href={`/services/${title}`}
    >
      <img className="w-16 h-16 mb-8 object-contain" src={img} alt="" />
      <p className="playfair-display text-2xl font-medium text-center mb-2">
        {title}
      </p>
      <p className="text-black/50 text-center text-sm w-[17rem]">
        {description}
      </p>
    </motion.a>
  );
}
