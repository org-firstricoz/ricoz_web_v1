import ArrowSVG from "../../svgs/ArrowSVG";

export default function OurExpertiseButton({
  buttonTitle,
}: {
  buttonTitle: string;
}) {
  return (
    <div className="bg-rz-lategray  cursor-pointer p-3 text-white rounded-md font-medium flex gap-2">
      <p>{buttonTitle}</p>
      <ArrowSVG />
    </div>
  );
}
