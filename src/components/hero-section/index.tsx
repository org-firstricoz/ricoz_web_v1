import BlueButtonInput from "../blue-button-input";

export default function HeroSection() {
  return (
    <div className="text-white flex bg-[url(https://res.cloudinary.com/dlxpf7d8c/image/upload/v1715609111/ddjuet3erd6ze2wqdccy.jpg)] bg-cover relative">
      <div className="bg-rz-darkgreen h-full px-32 pt-40 pb-72 w-full">
        <h2 className="text-6xl font-bold max-w-[50rem] mb-8">
          Designing Dreams, Crafting Brands
        </h2>
        <h5 className="text-xl max-w-[50rem] mb-16">
          We work with ambitious brands to ideate, design & build million-dollar
          businesses powered by beautifully designed and engineered software and
          technological solutions.
        </h5>
        <BlueButtonInput/>
      </div>
    </div>
  );
}
