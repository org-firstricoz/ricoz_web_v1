export default function ServiceWrapper({description,img,title}:{title:string,description:string,img:string}) {
  return (
    <div className=" flex flex-col items-center sm:p-12 p-0">
        <img className="w-16 h-16 mb-8 object-contain" src={img} alt="" />
        <p className="playfair-display text-2xl font-medium text-center">{title}</p>
        <p className="text-black/50 text-center text-sm w-[13rem]">{description}</p>
    </div>
  )
}
