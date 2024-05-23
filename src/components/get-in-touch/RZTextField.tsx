export default function RZTextField({placeholder}:{placeholder:string}) {
  return (
    <div className="flex flex-col ">
        <input type="text" placeholder={placeholder} className="border border-black/20 focus:outline-none py-4 px-4" />
    </div>
  )
}
