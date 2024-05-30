import cn from "../../utils/cn";

export default function TestimonialWrapper({
  name,
  testimony,
  profession,
  img,
  span = 1,
}: {
  testimony: string;
  name: string;
  profession: string;
  img: string;
  span?: number;
}) {
  return (
    <div
      className={cn("flex xl:flex-row flex-col items-center shadow1", {
        " lg:col-span-4 col-span-1": span === 4,
        " lg:col-span-3 col-span-1": span === 3,
      })}
    >
      <div className="flex flex-col items-center  p-4 sm:p-8 ">
        <img
          src={img}
          className="border-2 border-[#00AC59] rounded-full"
          alt=""
        />

        <h4 className="font-semibold text-xl text-nowrap mt-4 ">{name}</h4>
        <h4 className="text-sm text-nowrap text-[#00AC59]">{profession}</h4>
      </div>
      <div className="bg-rz-darkgreen h-full flex items-center  p-4 sm:p-8 ">
        <h3 className=" font-light text-white text-sm sm:text-base">
          " {testimony} "
        </h3>
      </div>
    </div>
  );
}
