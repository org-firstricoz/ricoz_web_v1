export default function BlueButtonInput() {
  return (
    <div className="flex gap-2">
        <div className="bg-white flex px-4 items-center gap-32 rounded-sm w-96">
            <input type="text h-full" placeholder="Your Work Email" />
        </div>
        <button className="bg-rz-royalblue py-3 px-6">
            Get Started
        </button>
    </div>
  )
}
