import SectionHeading from "../section-heading";
import WwdWrapper from "../wwd-wrapper";

export default function WhatWeDoSection() {
  return (
    <section className="self-stretch flex flex-col items-center lg:px-40 md:px-24 sm:px-16 px-4 justify-center sm:py-16 box-border max-w-full text-center text-11xl text-white font-playfair-display">
      <div className=" flex flex-col items-start justify-center gap-[27px] max-w-full">
        <SectionHeading
          title="What We do"
          subtitle="Best Technological Solution for your business"
        />
      </div>
      <section className="self-stretch my-16 flex flex-row items-start justify-between pt-0 px-0 pb-[40.9px] box-border max-w-full text-center text-xl text-white font-playfair-display mq450:pb-[27px] mq450:box-border">
        <div className=" flex flex-row flex-wrap items-start justify-between pt-[15px] px-[0px] pb-0 box-border gap-[30px] max-w-full">
          <WwdWrapper
            consultencypng="/wwd1.png"
            businessConsultancy="SaaS Development"
            des="Our team of experienced developers is dedicated to creating innovative SaaS applications tailored to meet the unique needs of your business."
          />
          <WwdWrapper
            consultencypng="/wwd2.png"
            businessConsultancy="help to grow Business"
            propPadding="0px 0px 9.5px"
            propHeight="50px"
            propWidth="50px"
            propMinWidth="unset"
            des="We are dedicated to helping your business achieve sustainable growth and reach new heights."
          />
          <WwdWrapper
            consultencypng="/wwd3.png"
            businessConsultancy="great support"
            propPadding="0px 0px 9.5px"
            propHeight="50px"
            propWidth="44px"
            propMinWidth="128.4px"
            des="Our dedicated support team is committed to delivering prompt, reliable, and comprehensive assistance to address your needs and keep your operations running without interruption."
          />
        </div>
      </section>
    </section>
  );
}
