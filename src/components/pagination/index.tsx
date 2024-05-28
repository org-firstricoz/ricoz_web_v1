export default function Pagination({
  index,
  pagesCount,
}: {
  index: number;
  pagesCount: number;
}) {
  return (
    <div className="flex gap-3">
      {Array.from({ length: pagesCount }).map((_, i) => (
        <div
        key={`MAIN_PAGINATION_DOT_${i}`}
          className={`w-3 h-3 border-2 ${
            index === i ? "bg-white" : "bg-transparent"
          }  rounded-full`}
        ></div>
      ))}
    </div>
  );
}
