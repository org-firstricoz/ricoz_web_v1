import FillButton from "../fill-button";
import RZTextField from "./RZTextField";

export default function GetInTouch() {
  return (
    <div className="lg:px-40 md:px-24 sm:px-16 px-4 py-8 sm:py-32 bg-[#151515]">
      <h3 className="playfair-display text-2xl sm:text-3xl font-semibold">Get In Touch</h3>
      <p className="text-rz-lightgray mb-8 mt-2 text-sm sm:text-base">
        Our success in creating business solutions is due in large part
        spacially to talented and highly committed team.
      </p>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-0 md:gap-8">
        <img
          className="col-span-1 sm:h-[30rem] h-[14rem] object-cover"
          src="about5.jpg"
          alt=""
        />
        <div className="border border-white/20 border-dashed col-span-2 p-6 md:p-8 lg:p-12 flex flex-col gap-4">
          <RZTextField placeholder="Full Name" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <RZTextField placeholder="Email" />
            <RZTextField placeholder="Phone Number" />
          </div>
          <RZTextField placeholder="Message" />
          <div className="w-1/2">
            <FillButton title="Submit Now" />
          </div>
        </div>
      </div>
    </div>
  );
}
