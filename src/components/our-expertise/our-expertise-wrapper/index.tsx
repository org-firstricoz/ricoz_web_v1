import OurExpertiseButton from "../our-expertise-button";

export default function OutExpertiseWrapper({
  buttonTitle,
  des,
  img,
  subtitle,
  title,
}: {
  title: string;
  subtitle: string;
  img: string;
  des: string;
  buttonTitle: string;
}) {
  return (
    <div className="flex flex-col bg-green-200/20 items-start rounded-lg p-4 gap-4">
      <img className="w-16" src={img} alt="" />
      <div className="">{subtitle}</div>
      <div className="mb-4">
        <div className="font-semibold text-xl">{title}</div>
        <div className="tracking-[1px] mt-1 text-black/60 font-medium text-sm sm:text-base lg:text-sm xl:text-base ">{des}</div>
      </div>
      <OurExpertiseButton buttonTitle={buttonTitle} />
    </div>
  );
}
