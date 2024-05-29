export default function SectionHeading({
  subtitle = "",
  title,
  justifyStart=false,
}: {
  title: string;
  subtitle?: string;
  justifyStart?: boolean;
}) {
  return (
    <div className="text-[#575A5B]">
      <h3
        className={`font-semibold text-2xl sm:text-3xl lg:text-5xl playfair-display ${!justifyStart && "text-center"} `}
      >
        {title}
      </h3>
      <h3 className={`${!justifyStart && "text-center"} mt-2 font-medium`}>{subtitle}</h3>
    </div>
  );
}
