import ArrowSVG from "../svgs/ArrowSVG";

export default function CareerOpeningWrapper({
  description,
  experience,
  title,
}: {
  title: string;
  description: string;
  experience: string;
}) {
  return (
    <div className="border p-4 xl:p-8 flex flex-col items-start gap-2 rounded-lg">
      <p className="bg-black text-white px-4 py-2 rounded-full text-sm ">
        {experience} Years Experience
      </p>
      <div className="flex justify-between w-full">
        <h3 className="font-bold text-xl">{title}</h3>
      </div>
      <p className="text-xs tracking-[1px] ">{description}</p>
      <div className="flex justify-end w-full">
        <div className="bg-rz-lategray text-white p-2 rounded-full ">
          <ArrowSVG />
        </div>
      </div>
    </div>
  );
}
