import React from "react";
import PlusSVG from "../../svgs/PlusSVG";
import cn from "../../../utils/cn";
import MinusSVG from "../../svgs/MinusSVG";

export default function FAQContainer({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [expand, setExpand] = React.useState(false);
  return (
    <div className="p-3 bg-white rounded-md shadow2">
      <div
        onClick={() => setExpand((x) => !x)}
        className="flex justify-between cursor-pointer"
      >
        <p className="font-semibold text-sm text-black/80">{question}</p>
        <div>{expand ? <MinusSVG /> : <PlusSVG />}</div>
      </div>
      <p
        className={cn("mt-6 text-sm mr-8", {
          block: expand,
          hidden: !expand,
        })}
      >
        {answer}
      </p>
    </div>
  );
}
