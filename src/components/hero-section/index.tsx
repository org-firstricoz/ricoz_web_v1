import React from "react";
// import BlueButtonInput from "./blue-button-input";
import { SLIDES } from "./constants";
import { motion } from "framer-motion";
import ArrowSVG from "../svgs/ArrowSVG";
import Pagination from "../pagination";
// import { childVariants, parentVariants } from "./variants";

export default function HeroSection() {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  React.useEffect(() => {
    console.log(currentSlideIndex);
    const slideInterval = setInterval(() => {
      currentSlideIndex !== SLIDES.length - 1
        ? setCurrentSlideIndex((x) => x + 1)
        : setCurrentSlideIndex(0);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [currentSlideIndex]);

  return (
    <motion.div
      style={{
        background: `url(${SLIDES[currentSlideIndex].bg}) no-repeat left top fixed `,
        WebkitBackgroundSize: "cover",
      }}
      className="text-white flex bg-cover bg-left object-cover relative overflow-hidden"
      // initial={{ opacity: 0 }}
      // whileInView={{ opacity: 1, transition: { duration: 0.6 } }}
    >
      {/* <div className="w-[50rem] h-[40rem] bg-rz-lategray/70 absolute blur-[10rem] top-1/2 -translate-y-1/2"></div> */}
      <motion.div
        // variants={parentVariants} initial="hidden" animate="visible"
        className="bg-rz-darkgreen/20 h-full relative z-10 flex flex-col items-start lg:px-40 md:px-24 sm:px-16 px-4 sm:pt-40 pt-24 sm:pb-28 pb-28 w-full"
      >
        <h3 className="border-l-2 px-2 py-1 tracking-[1px] text-sm bg-black/10 border-[#FFC96F] text-[#FFC96F] font-medium">
          #1 IN INDUSTRY
        </h3>
        <motion.h2
          // variants={childVariants}
          className="md:text-6xl md:leading-[85px] sm:text-5xl xs:text-4xl text-3xl font-semibold max-w-[50rem] mb-8"
        >
          {SLIDES[currentSlideIndex].title}
        </motion.h2>
        <motion.h5
          // variants={childVariants}
          className="md:text-base sm:text-lg text-base max-w-[40rem] mb-16 font-light text-white/80 tracking-[1px] text-white"
        >
          We work with ambitious brands to ideate, design & build million-dollar
          businesses powered by beautifully designed and engineered software and
          technological solutions.
        </motion.h5>
        <div className="border-2 border-rz-lightblue font-medium py-4 px-6 hover:bg-white hover:text-black cursor-pointer flex gap-3">
          Know more
          <div className="rotate-45">
            <ArrowSVG />
          </div>
        </div>
        {/* <BlueButtonInput /> */}
        <div className="mt-8">
        <Pagination index={currentSlideIndex} pagesCount={SLIDES.length}/>

        </div>
      </motion.div>
    </motion.div>
  );
}
