export default function WcrWrapper({number,subtitle,title,withBorder}:{title:string,subtitle:string,number:number,withBorder:boolean}) {
  return (
    <div className={`${withBorder?"border-l":"border-none"} lg:h-24 md:h-32 sm:h-24 h-32 pl-8 relative`}>
      <h3 className="lg:text-xl text-lg font-medium">{title}</h3>
      <h4 className=" lg:max-w-[35rem] text-sm lg:text-base text-rz-lightgray">
        {subtitle}
      </h4>
      <div className="text-lg top-0 -left-4 font-semibold text-white bg-rz-royalblue
       absolute w-8 h-8 rounded-full flex justify-center items-center">{number}</div>
    </div>
  );
}
