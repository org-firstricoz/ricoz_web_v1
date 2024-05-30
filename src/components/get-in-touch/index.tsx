import FillButton from "../fill-button";
import SendSVG from "../svgs/SendSVG";
import RZTextArea from "./RZTextArea";
import RZTextField from "./RZTextField";

export default function GetInTouch() {
  return (
    <div className="lg:px-40 md:px-24 sm:px-16 px-4 py-8 sm:py-32 bg-zinc-900 relative overflow-hidden">
      <h3 className="playfair-display text-2xl sm:text-3xl font-semibold relative z-10">Get In Touch</h3>
      <p className="text-rz-lightgray mb-8 mt-2 text-sm sm:text-base relative z-10 max-w-[30rem]">
        Our success in creating business solutions is due in large part
        spacially to talented and highly committed team.
      </p>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-0 md:gap-0 relative z-10">
        <img
          className="col-span-1 sm:h-full h-[14rem] object-cover"
          src="about5.jpg"
          alt=""
        />
        <div className=" border-dashed col-span-2 p-6 md:p-8 lg:p-12 flex flex-col gap-4">
          <RZTextField placeholder="Full Name" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <RZTextField placeholder="Email" />
            <RZTextField placeholder="Phone Number" />
          </div>
          <RZTextArea placeholder="Message" />
          <div className="w-1/2">
            <FillButton title="Submit Now" variant="light-green-fill" >
              <SendSVG/>
            </FillButton>
          </div>
        </div>
      </div>
      <div className="bg-zinc-950 w-[30.5vw] h-full absolute top-0 left-32"></div>
    </div>
  );
}
