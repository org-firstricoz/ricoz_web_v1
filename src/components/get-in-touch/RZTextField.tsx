export default function RZTextField({placeholder}:{placeholder:string}) {
  return (
    <div className="flex flex-col ">
        <input type="text" placeholder={placeholder} className="border border-white/20 bg-transparent focus:outline-none py-2 xl:py-4 px-4 text-base rounded-lg" />
    </div>
  )
}
