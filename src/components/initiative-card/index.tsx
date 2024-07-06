import React from "react";
import ArrowSVG from "../svgs/ArrowSVG";

interface InitiativeCardProps {
  backgroundImage: string;
  logoImage: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const InitiativeCard: React.FC<InitiativeCardProps> = ({
  backgroundImage,
  logoImage,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="shadow-R1 w-full text-black p-0 relative rounded-lg flex justify-center overflow-hidden">
      <img
        className="left-0 absolute h-full -z-10"
        src={backgroundImage}
        alt="Background"
      />
      <div className="flex flex-col gap-6 my-8 items-center">
        <img src={logoImage} alt="Logo" />
        <p className="max-w-[40rem] text-center">{description}</p>
        <a href={buttonLink} className="bg-[#EA7724] text-white flex gap-2 p-4">
          {buttonText} <ArrowSVG />
        </a>
      </div>
      <div></div>
    </div>
  );
};

export default InitiativeCard;
