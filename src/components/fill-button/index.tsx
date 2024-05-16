export default function FillButton({ title }: { title: string }) {
  return (
    <button className="bg-rz-lategray text-white hover:text-rz-lategray rounded-none hover:bg-transparent transition-all duration-300 hover:border-rz-lategray border-2 tracking-[1px] font-normal px-12 py-4">
      {title}
    </button>
  );
}
