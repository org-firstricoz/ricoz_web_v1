import { motion } from "framer-motion";

export default function LeaderInfoContainer({
  about,
  experience,
  name,
  position,
  img
}: {
  name: string;
  position: string;
  about: string;
  experience: string;
  img:string
}) {
  return (
    <div className="border p-4 flex xl:flex-row flex-col gap-4">
      <motion.img
        // initial={{ scale: 0, borderRadius: 1000 }}
        // whileInView={{ scale: 1, borderRadius: 0 }}
        src={img}
        className=" object-cover xl:h-[15rem] xl:w-[15rem] lg:h-[13rem] lg:w-full md:h-[15rem] md:w-full "
        alt=""
      />
      <div>
        <h4 className="text-rz-darkgreen text-xs font-semibold">
          {position}
        </h4>
        <h4 className="font-semibold text-lg">{name}</h4>
        <h4 className="text-sm">{experience} Years of Experience</h4>
        <h4 className="text-sm mt-4 text-rz-darkgray">
          {about}
        </h4>
      </div>
    </div>
  );
}
