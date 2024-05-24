import React from "react";

export default function CareerHighlightWrapper({
  title,
  description,
  svg,
}: {
  title: string;
  description: string;
  svg: React.JSX.Element;
}) {
  return (
    <div className="bg-rz-lightblue text-black p-8 flex flex-col gap-4 border rounded-lg items-start relative overflow-hidden">
      <div className=" border-[3rem] p-4 border-black rounded-full absolute w-32 h-32 text-black -right-8 -top-8"></div>
      <div className=" border p-4 border-black rounded-full">{svg}</div>
      <h3 className=" text-xl md:text-2xl">{title}</h3>
      <p className="text-black/60 text-sm md:text-base">{description}</p>
    </div>
  );
}
