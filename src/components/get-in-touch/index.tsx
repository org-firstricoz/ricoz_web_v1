import FillButton from "../fill-button";
import RZTextField from "./RZTextField";

export default function GetInTouch() {
  return (
    <div className="text-black lg:px-40 md:px-24 sm:px-16 px-4 py-16">
      <h3 className="playfair-display text-3xl font-semibold">Get In Touch</h3>
      <p className="text-rz-lightgray mb-8">
        Our success in creating business solutions is due in large part
        spacially to talented and highly committed team.
      </p>
      <div className="grid grid-cols-3 gap-8">
        <img
          className="col-span-1 h-[30rem] object-cover"
          src="about5.jpg"
          alt=""
        />
        <div className="border col-span-2 p-12 flex flex-col gap-4">
          <RZTextField placeholder="Full Name" />
          <div className="grid grid-cols-2 gap-4">
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
