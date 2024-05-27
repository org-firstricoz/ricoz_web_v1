export default function TestimonialWrapper({
  name,
  testimony,
  profession,
  img,
}: {
  testimony: string;
  name: string;
  profession: string;
  img: string;
}) {
  return (
    <div className="flex xl:flex-row flex-col p-4 sm:p-8 gap-8 items-center shadow1 ">
      <div className="flex flex-col items-center">
        <img
          src={img}
          className="border-2 border-[#00AC59] rounded-full"
          alt=""
        />

        <h4 className="font-semibold text-xl text-nowrap mt-4 ">{name}</h4>
        <h4 className="text-sm text-nowrap text-[#00AC59]">{profession}</h4>
      </div>
      <div>
        <h3 className="tracking-[1px] font-light text-sm sm:text-base">{testimony}</h3>
      </div>
    </div>
  );
}
