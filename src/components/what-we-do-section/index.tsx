import WwdWrapper from "../wwd-wrapper";

export default function WhatWeDoSection() {
  return (
    <section className="self-stretch flex flex-col items-center justify-center  pt-48 pb-16 box-border max-w-full text-center text-11xl text-white font-playfair-display">
      <div className="w-[999.4px]  flex flex-col items-start justify-start gap-[27px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[22px] pl-5">
          <h2 className="m-0 w-[168px] relative text-rz-darkgray playfair-display text-3xl leading-[40px] capitalize font-bold font-inherit flex items-center justify-center mq800:text-5xl mq800:leading-[32px] mq450:text-lg mq450:leading-[24px]">
            what we do
          </h2>
        </div>
        <div className="self-stretch relative text-base text-rz-lightgray font-poppins mx-8 ">
          We work with ambitious brands to ideate, design & build million-dollar
          businesses powered by beautifully designed and engineered software and
          technological solutions.
        </div>
      </div>
      <section className="self-stretch my-16 flex flex-row items-start justify-center pt-0 px-5 pb-[40.9px] box-border max-w-full text-center text-xl text-white font-playfair-display mq450:pb-[27px] mq450:box-border">
        <div className="w-[1170px] flex flex-row flex-wrap items-start justify-center pt-[15px] px-[15px] pb-0 box-border gap-[30px] max-w-full">
          <WwdWrapper
            consultencypng="/wwd1.png"
            businessConsultancy="SaaS Development"
          />
          <WwdWrapper
            consultencypng="/wwd2.png"
            businessConsultancy="help to grow Business"
            propPadding="0px 0px 9.5px"
            propHeight="50px"
            propWidth="50px"
            propMinWidth="unset"
          />
          <WwdWrapper
            consultencypng="/wwd3.png"
            businessConsultancy="great support"
            propPadding="0px 0px 9.5px"
            propHeight="50px"
            propWidth="44px"
            propMinWidth="128.4px"
          />
        </div>
      </section>
    </section>
  );
}
