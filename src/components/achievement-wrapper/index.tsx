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
    <div className="flex py-32 gap-8">
      <img className="w-16 h-16 object-contain" src={img} alt="" />
      <div>
        <div className="font-medium text-4xl">{value}</div>
        <div>{title}</div>
      </div>
    </div>
  );
}
