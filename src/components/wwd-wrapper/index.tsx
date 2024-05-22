import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type WwdWrapperType = {
  consultencypng?: string;
  businessConsultancy?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  propColor?: CSSProperties["color"];
  propMinWidth?: CSSProperties["minWidth"];
};

const WwdWrapper: FunctionComponent<WwdWrapperType> = ({
  consultencypng,
  businessConsultancy,
  propPadding,
  propHeight,
  propWidth,
  propColor,
  propMinWidth,
}) => {
  const divStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const consultencypngIconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
    };
  }, [propHeight, propWidth]);

  const businessConsultancyStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
      minWidth: propMinWidth,
    };
  }, [propColor, propMinWidth]);

  return (
    <div
      className="flex-1 bg-white cursor-pointer shadow-[0px_0px_5px_rgba(35,_37,_41,_0.1)] overflow-hidden flex flex-row items-start justify-start min-w-[270px] max-w-full text-center text-xl text-rz-lategray font-playfair-display"
      style={divStyle}
    >
      <div className="flex-1 flex flex-col items-start justify-start pt-[55px] pb-[70.5px] pr-[41.1px] pl-[41.4px] box-border gap-[38px] max-w-full mq450:gap-[19px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[25px] pl-5">
          <img
            className="h-[60px] w-[61px] relative object-cover"
            loading="lazy"
            alt=""
            src={consultencypng}
            style={consultencypngIconStyle}
          />
        </div>
        <div className="self-stretch flex flex-col items-end justify-start gap-[26px]">
          <div className="self-stretch flex flex-row items-start justify-end">
            <div
              className="flex-1 relative leading-[22px] capitalize font-medium mq450:text-base playfair-display mq450:leading-[18px]"
              style={businessConsultancyStyle}
            >
              {businessConsultancy}
            </div>
          </div>
          <div className="self-stretch relative text-base leading-[22.86px] font-poppins text-rz-lightgray">
            Best Technological Solutions for Your Business
          </div>
        </div>
      </div>
    </div>
  );
};

export default WwdWrapper;
