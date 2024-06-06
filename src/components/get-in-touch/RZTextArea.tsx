interface RZTextAreaProps {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function RZTextArea({ name, placeholder, value, onChange }: RZTextAreaProps) {
  return (
    <div className="flex flex-col ">
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border-white/20 bg-transparent h-48 focus:outline-none py-2 xl:py-4 px-4 text-base"
      />
    </div>
  );
}
