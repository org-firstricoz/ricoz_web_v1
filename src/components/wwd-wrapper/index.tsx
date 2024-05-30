import { motion } from "framer-motion";
import React, { FunctionComponent, useMemo, type CSSProperties } from "react";
import cn from "../../utils/cn";
import FillButton from "../fill-button";
import ArrowSVG from "../svgs/ArrowSVG";

export type WwdWrapperType = {
  consultencypng?: string;
  businessConsultancy?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  propColor?: CSSProperties["color"];
  propMinWidth?: CSSProperties["minWidth"];
  des?: string;
};

const WwdWrapper: FunctionComponent<WwdWrapperType> = ({
  consultencypng,
  businessConsultancy,
  propPadding,
  propHeight,
  propWidth,
  des,
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

  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ borderRadius: 10, backgroundColor: "#09090b" }}
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
        <motion.div className="self-stretch flex flex-col items-center justify-start gap-[26px]">
          <div className="self-stretch flex flex-row items-start justify-end transition-all">
            <div
              className={cn(
                `flex-1 relative leading-[22px] text-2xl capitalize font-medium mq450:text-base playfair-display mq450:leading-[18px]`,
                {
                  "text-rz-lategray": !hovered,
                  "text-white": hovered,
                }
              )}
            >
              {businessConsultancy}
            </div>
          </div>
          <div className={cn("self-stretch relative text-sm leading-[22.86px] font-poppins font-medium",{
            "text-rz-lategray/60": !hovered,
            "text-white/60": hovered,
          })}>
            {des}
          </div>
          {hovered && (
            <FillButton title="" rounded="lg" variant="white-fill">
              <ArrowSVG />
            </FillButton>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WwdWrapper;
