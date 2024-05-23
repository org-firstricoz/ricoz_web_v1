import TestimonialWrapper from "./TestimonialWrapper";
import { TESTIMONIALS } from "./constants";

export default function WhatOurClientSays() {
  return (
    <div className="flex flex-col lg:px-40 md:px-24 sm:px-16 px-4 py-24 text-black bg-rz-lightblue">
      <h3 className="playfair-display text-3xl font-semibold mb-8">
        What Our Client Say About Us
      </h3>

      <div className="grid grid-cols-2 gap-8">
        {TESTIMONIALS.map((testimonial, i) => (
          <TestimonialWrapper
            key={`TESIMONY_${i}`}
            img={testimonial.img}
            name={testimonial.name}
            profession={testimonial.profession}
            testimony={testimonial.testimony}
          />
        ))}
      </div>
    </div>
  );
}
