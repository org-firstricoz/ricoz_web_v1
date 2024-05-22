export default function WcrWrapper({number,subtitle,title,withBorder}:{title:string,subtitle:string,number:number,withBorder:boolean}) {
  return (
    <div className={`${withBorder?"border-l":"border-none"} h-24 pl-8 relative`}>
      <h3 className="text-xl font-medium">{title}</h3>
      <h4 className=" max-w-[35rem] text-rz-lightgray">
        {subtitle}
      </h4>
      <div className="text-lg top-0 -left-4 font-semibold text-white bg-rz-royalblue
       absolute w-8 h-8 rounded-full flex justify-center items-center">{number}</div>
    </div>
  );
}
