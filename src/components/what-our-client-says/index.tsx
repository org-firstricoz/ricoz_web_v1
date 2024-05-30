import React from "react";
import TestimonialWrapper from "./TestimonialWrapper";
import { TESTIMONIALS } from "./constants";
import SectionHeading from "../section-heading";
import Pagination from "../pagination";
import ArrowSVG from "../svgs/ArrowSVG";

export default function WhatOurClientSays() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  React.useEffect(() => {
    console.log(currentIndex);
    const slideInterval = setInterval(() => {
      currentIndex !== TESTIMONIALS.length - 1
        ? setCurrentIndex((x) => x + 1)
        : setCurrentIndex(0);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [currentIndex]);
  return (
    <div className="flex flex-col gap-8 lg:px-40 md:px-24 sm:px-16 px-4 items-center sm:py-24 py-8 text-black bg-rz-lightblue ">
      <SectionHeading title="What are Clients Says" />
      <div className="lg:hidden flex flex-col gap-8 items-center">
        <TestimonialWrapper
          key={`TESIMONY_${0}`}
          img={TESTIMONIALS[currentIndex].img}
          name={TESTIMONIALS[currentIndex].name}
          profession={TESTIMONIALS[currentIndex].profession}
          testimony={TESTIMONIALS[currentIndex].testimony}
          span={TESTIMONIALS[currentIndex].span}
        />
        <div className="flex  items-center gap-10">
          <div
            onClick={() => currentIndex > 0 && setCurrentIndex((x) => x - 1)}
            className="-rotate-[135deg] bg-rz-darkgreen cursor-pointer p-2 rounded-full text-white"
          >
            <ArrowSVG />
          </div>
          <Pagination
            pagesCount={TESTIMONIALS.length}
            index={currentIndex}
            isDark
          />
          <div
            onClick={() =>
              currentIndex < TESTIMONIALS.length - 1
                ? setCurrentIndex((x) => x + 1)
                : setCurrentIndex(0)
            }
            className="rotate-45 bg-rz-darkgreen cursor-pointer p-2 rounded-full text-white"
          >
            <ArrowSVG />
          </div>
        </div>
      </div>

      <div className="lg:grid hidden grid-cols-7 gap-4 sm:gap-8">
        {TESTIMONIALS.map((testimonial, i) => (
          <TestimonialWrapper
            key={`TESIMONY_${i}`}
            img={testimonial.img}
            name={testimonial.name}
            profession={testimonial.profession}
            testimony={testimonial.testimony}
            span={testimonial.span}
          />
        ))}
      </div>
    </div>
  );
}
