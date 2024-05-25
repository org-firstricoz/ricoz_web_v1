export default function WcrWrapper({number,subtitle,title,withBorder}:{title:string,subtitle:string,number:number,withBorder:boolean}) {
  return (
    <div className={`${withBorder?"border-l":"border-none"} lg:h-28 md:h-32 sm:h-24 h-32 pl-8 relative`}>
      <h3 className="lg:text-lg text-base font-medium uppercase ">{title}</h3>
      <h4 className=" text-sm lg:text-base text-rz-lightgray">
        {subtitle}
      </h4>
      <div className="text-sm top-0 -left-4 font-semibold text-white bg-rz-lategray
       absolute w-8 h-8 rounded-full flex justify-center items-center">{number}</div>
    </div>
  );
}
