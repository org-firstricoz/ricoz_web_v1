import FillButton from "../fill-button";
import SectionHeading from "../section-heading";
import MailSVG from "../svgs/MailSVG";
import PhoneSVG from "../svgs/PhoneSVG";
import PinSVG from "../svgs/PinSVG";
import SendSVG from "../svgs/SendSVG";

export default function ConatactUsForm() {
  return (
    <div className="bg-[url(https://res.cloudinary.com/dlxpf7d8c/image/upload/v1715794224/wksr9bdl2skux962kyq7.png)] flex justify-center">
      {/* <img src="contact-form-bg.png" className="w-full" alt="" /> */}
      <div className="flex flex-col items-center justify-center gap-8 bg-black/30 px-4 sm:px-16 md:px-24 lg:px-40 py-24 w-full">
        <SectionHeading
          title="Contact Us"
          isLight
          subtitle="Ready to Transform Your Business with Expert IT Solutions? Contact Us Today!"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 w-full py-16 ">
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-2xl font-medium">Contact Info</h2>
            <div className="flex gap-2 items-center">
              <div className="bg-white text-black h-10 w-10 flex justify-center items-center rounded-full">
                <PinSVG />
              </div>
              <h2 className="max-w-[20rem] flex-1">
                FLOOR, P-2,S.NO.150/A/1+2 BHUSARI COLONY KOTHRUD PUNE-411038
              </h2>
            </div>
            <div className="flex gap-2 items-center">
              <div className="bg-white text-black h-10 w-10 flex justify-center items-center rounded-full">
                <PhoneSVG />
              </div>
              <h2 className="max-w-[20rem]">+91 7011112666</h2>
            </div>
            <div className="flex gap-2 items-center">
              <div className="bg-white text-black h-10 w-10 flex justify-center items-center rounded-full">
                <MailSVG />
              </div>
              <h2 className="max-w-[20rem]">care@ricoz.in</h2>
            </div>
            <h2 className="text-2xl font-medium mt-8">Social Links</h2>
          </div>
          <div className="flex flex-col gap-6 xl:col-span-2">
            <h3 className="text-2xl font-medium">Leave Us a Message Here</h3>
            <input
              type="text"
              placeholder="Enter Your Email"
              className="p-4 rounded-lg text-black focus:outline-none"
            />
            <textarea
              placeholder="Enter Your Message..."
              className="bg-white h-[10rem] rounded-lg text-black p-4 focus:outline-none"
            ></textarea>
            <div>
              <FillButton title="SEND MESSAGE" variant="primary-fill">
                <SendSVG />
              </FillButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
