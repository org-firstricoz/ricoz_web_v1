import FillButton from "../fill-button";

export default function AboutUsSection() {
  return (
    <div className="flex py-32 px-32 bg-rz-lightblue justify-center items-center">
      <div className="text-black space-y-8">
        <div className="text-4xl font-semibold playfair-display">About Us</div>
        <div className="w-[40rem] text-lg text-rz-lightgray">
          About Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse.
        </div>
        <FillButton title="LEARN MORE"/>
      </div>
      <div className="flex justify-center items-center w-full">
        <img className="" src="about-us-img.jpeg" alt="" />
      </div>
    </div>
  );
}
