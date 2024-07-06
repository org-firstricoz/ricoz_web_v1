import Footer from "../components/footer";
import InitiativeCard from "../components/initiative-card";
import LetsStartContainer from "../components/lets-start-container";
import Navbar from "../components/navbar";

const initiatives = [
  {
    backgroundImage: "vector-ini.svg",
    logoImage:
      "https://res.cloudinary.com/dlxpf7d8c/image/upload/v1720272661/ricoz/jlckdpiovzr0ey1eejk4.png",
    description:
      "Prepeat is our innovative food subscription app, designed to transform the way people plan and enjoy their meals. By offering a seamless and convenient way to subscribe to meal plans, Prepeat ensures users have access to nutritious, delicious, and diverse food options without the hassle of daily planning and shopping.",
    buttonText: "Visit Website",
    buttonLink: "https://prepeat.in",
  },
  {
    backgroundImage: "vector-ini2.svg",
    logoImage:
      "https://res.cloudinary.com/dlxpf7d8c/image/upload/v1720272661/ricoz/khvabmzsbl6oowpq032c.png",
    description:
      "At Bookmywarehouse, our mission is to revolutionize the storage industry by providing businesses of all sizes with seamless access to flexible, reliable, and efficient warehouse solutions. We strive to simplify the process of finding and booking storage space through our user-friendly platform, connecting businesses with a comprehensive network of warehouses in prime locations.",
    buttonText: "Learn More",
    buttonLink: "https://bookmywearhouse.com",
  },
  {
    backgroundImage: "vector-ini3.svg",
    logoImage:
      "https://res.cloudinary.com/dlxpf7d8c/image/upload/v1720272661/ricoz/p5cgkvasf93y3dudup3x.png",
    description:
      "Our studio booking app is designed to simplify the process of finding, booking, and managing studio spaces for various needs such as recording, photography, dance, and more. With an intuitive interface and robust features, our app caters to both studio owners and users, ensuring a seamless and efficient booking experience.",
    buttonText: "Learn More",
    buttonLink: "https://bookmystudio.app",
  },
];

export default function InitiativesPage() {
  return (
    <div>
      <Navbar />
      <div className="bg-rz-lategray flex flex-col gap-2 items-center pt-20 pb-32 ">
        <h2 className="text-4xl playfair-display">Our Initiatives</h2>
        <p className="max-w-[35rem] text-center text-white/50 px-4">
          We are looking for passionate, creative minds to help us redefine
          spaces with elegance and style
        </p>
      </div>
      <div className="py-16 lg:px-40 md:px-24 sm:px-16 px-4 flex flex-col gap-8">
        {initiatives.map((initiative, index) => (
          <InitiativeCard
            key={index}
            backgroundImage={initiative.backgroundImage}
            logoImage={initiative.logoImage}
            description={initiative.description}
            buttonText={initiative.buttonText}
            buttonLink={initiative.buttonLink}
          />
        ))}
      </div>
      <LetsStartContainer />
      <Footer />
    </div>
  );
}
