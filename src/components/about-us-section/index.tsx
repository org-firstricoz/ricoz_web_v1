import FillButton from "../fill-button";

export default function AboutUsSection() {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 py-32 gap-16 lg:px-40 md:px-24 sm:px-16 px-8  bg-rz-lightblue justify-center items-center">
      <div className="text-black space-y-8">
        <div className="text-4xl font-semibold playfair-display">About Us</div>
        <div className="max-w-[80rem] lg:text-lg text-base text-rz-lightgray">
          About Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse.
        </div>
        <FillButton title="LEARN MORE"/>
      </div>
      <div className="flex justify-center items-center w-full">
        <img className="w-[40rem]" src="about-us-img.jpeg" alt="" />
      </div>
    </div>
  );
}
