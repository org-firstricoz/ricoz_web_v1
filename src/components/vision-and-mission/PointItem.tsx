export default function PointItem({text}:{text:string}) {
  return (
    <div className="flex gap-3">
      <div className="bg-black w-2 h-2 rounded-full mt-[6px]"></div>
      <div className="flex-1 text-sm text-black/80">
        {text}
      </div>
    </div>
  );
}
