export default function RZTextArea({placeholder}:{placeholder:string}) {
    return (
      <div className="flex flex-col ">
          <textarea placeholder={placeholder} className="border border-white/20 bg-transparent h-48 focus:outline-none py-2 xl:py-4 px-4 text-base rounded-lg" />
      </div>
    )
  }
  