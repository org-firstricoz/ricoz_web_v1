import React from "react";
import { useNavigate } from "react-router-dom";
import FillButton from "../../fill-button";
import ArrowSVG from "../../svgs/ArrowSVG";

// Define a type for the props
type OutExpertiseWrapperProps = {
  title: string;
  subtitle: string;
  img: string;
  des: string;
  fullDes:string;
  buttonTitle: string;
};
const OutExpertiseWrapper: React.FC<OutExpertiseWrapperProps> = ({
  buttonTitle,
  des,
  fullDes,
  subtitle,
  title,
  img,
}) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/expertise-detail", { state: { title, subtitle, des, img,fullDes } });
  };

  return (
    <div className="flex flex-col bg-green-200/20 items-start rounded-lg p-4 gap-4 justify-between">
      {/* <img className="w-16" src={img} alt="" /> */}
      
      <div className="mb-4">
        <div className="font-semibold text-xl">{title}</div>
        <div className="mt-3 text-black/60 font-medium text-sm sm:text-base lg:text-sm xl:text-base">
          {des}
        </div>
      </div>
      <FillButton title={buttonTitle} rounded="md" onClick={handleButtonClick}>
        <ArrowSVG />
      </FillButton>
    </div>
  );
};

export default OutExpertiseWrapper;
