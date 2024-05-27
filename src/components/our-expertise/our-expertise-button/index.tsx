import ArrowSVG from "../../svgs/ArrowSVG";

export default function OurExpertiseButton({
  buttonTitle,
}: {
  buttonTitle: string;
}) {
  return (
    <div className="bg-green-600/80 hover:bg-green-600 cursor-pointer p-3 rounded-md font-medium flex gap-2">
      <p>{buttonTitle}</p>
      <ArrowSVG />
    </div>
  );
}
