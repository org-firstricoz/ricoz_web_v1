import BlueButtonInput from "../blue-button-input";

export default function HeroSection() {
  return (
    <div className="text-white flex bg-[url(https://res.cloudinary.com/dlxpf7d8c/image/upload/v1715609111/ddjuet3erd6ze2wqdccy.jpg)] bg-cover relative">
      <div className="bg-rz-darkgreen h-full md:px-32 sm:px-24 xs:px-16 px-8 sm:pt-40 pt-24 sm:pb-72 pb-40 w-full">
        <h2 className="md:text-6xl sm:text-5xl xs:text-4xl text-3xl font-bold max-w-[50rem] mb-8">
          Designing Dreams, Crafting Brands
        </h2>
        <h5 className="md:text-xl sm:text-lg text-base max-w-[50rem] mb-16">
          We work with ambitious brands to ideate, design & build million-dollar
          businesses powered by beautifully designed and engineered software and
          technological solutions.
        </h5>
        <BlueButtonInput/>
      </div>
    </div>
  );
}
