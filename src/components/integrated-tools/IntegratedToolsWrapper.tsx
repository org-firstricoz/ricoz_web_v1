export default function IntegratedToolsWrapper({
    des,
    img,
    name,
  }: {
    img: string;
    name: string;
    des: string;
  }) {
    return (
      <div className="flex flex-col gap-3 items-start border p-8 hover:bg-[#425273]/10 cursor-pointer transition-all duration-300">
        <img src={img} className="w-12" alt="" />
        <h3 className="text-xl font-semibold text-[#425273]">{name}</h3>
        <h3 className="text-sm text-[#425273]">{des}</h3>
      </div>
    );
  }
  