export default function AchievementWrapper({
  img,
  title,
  value,
}: {
  img: string;
  title: string;
  value: string;
}) {
  return (
    <div className="flex lg:pb-32 pb-16 gap-8 justify-center">
      <img className="w-16 h-16 object-contain" src={img} alt="" />
      <div>
        <div className="font-medium text-4xl">{value}</div>
        <div className="text-nowrap">{title}</div>
      </div>
    </div>
  );
}
