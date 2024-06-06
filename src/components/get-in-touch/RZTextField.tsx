interface RZTextFieldProps {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function RZTextField({ name, placeholder, value, onChange }: RZTextFieldProps) {
  return (
    <div className="flex flex-col ">
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border-white/20 bg-transparent focus:outline-none py-2 xl:py-4 px-4 text-base"
      />
    </div>
  );
}
