import cn from "../../utils/cn";

export default function SectionHeading({
  subtitle = "",
  title,
  justifyStart = false,
  isLight = false,
}: {
  title: string;
  subtitle?: string;
  justifyStart?: boolean;
  isLight?: boolean;
}) {
  return (
    <div
      className={cn("", {
        "text-[#575A5B]": isLight === false,
        "text-white": isLight === true,
      })}
    >
      <h3
        className={`font-semibold text-2xl sm:text-3xl lg:text-5xl playfair-display ${
          !justifyStart && "text-center"
        } `}
      >
        {title}
      </h3>
      <h3 className={`${!justifyStart && "text-center"} mt-2 font-medium`}>
        {subtitle}
      </h3>
    </div>
  );
}
