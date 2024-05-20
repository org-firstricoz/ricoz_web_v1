import { useParams } from "react-router-dom";
import Navbar from "../components/navbar";
import SERVICES from "../constants/SERVICES";
import Footer from "../components/footer";
import LetsStartContainer from "../components/lets-start-container";
import FillButton from "../components/fill-button";
import { motion } from "framer-motion";

export default function ServiceDetailsPage() {
  const { serviceName } = useParams();
  console.log(serviceName);

  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="text-black lg:px-40 md:px-24 sm:px-16 px-4 py-8">
        <div>
          {SERVICES.filter((service) => service.title === serviceName).map(
            (service,i) => (
              <div key={`SERVICE_00${i}`} className="relative flex flex-col items-center">
                <h2 className="sm:text-5xl xs:text-4xl text-3xl font-bold md:text-center  mb-6 sm:mt-10 playfair-display">
                  {service.title}
                </h2>
                <h3 className="font-medium text-white max-w-[40rem] text-center sm:text-base text-sm mb-4">
                  {service.description}
                </h3>
                <div className="w-[90rem] h-[80rem] absolute bg-rz-darkgreen sm:top-[-64rem] xs:top-[-69rem] top-[-68rem]  left-1/2 -translate-x-1/2 rounded-full -z-10"></div>
                <div className="sm:mt-24 mt-16 flex md:flex-row flex-col justify-between w-full md:items-center">
                  <div>
                    <h2 className="font-semibold text-2xl mb-2">
                      Key Features
                    </h2>
                    {service.keyFeatures.map((feature) => (
                      <div key={`KEY_FEATURE_00${i}`} className="text-rz-darkgray">
                        <li className="py-2 font-medium sm:text-base text-sm">{feature}</li>
                      </div>
                    ))}
                  </div>
                  <img
                    src="https://res.cloudinary.com/dlxpf7d8c/image/upload/v1716037382/sv5nvxqflqznkgzcbqmk.png"
                    className="xl:h-[25rem] lg:h-[20rem] md:h-[30vw] h-[100%] sm:mt-0 mt-16"
                    alt="sss"
                  />
                </div>
                <h2 className="font-semibold w-full text-2xl mb-2 mt-16">
                  Our Process
                </h2>
                <h2 className="sm:text-base text-sm text-rz-darkgray">{service.ourProcessDescription}</h2>
                <div className="mt-10 sm:mb-16 mb-0 flex md:flex-row flex-col xl:gap-32 lg:gap-16 gap-8 md:items-center w-full">
                  <img
                    src="https://res.cloudinary.com/dlxpf7d8c/image/upload/v1716037382/m6pbo9ictm1yady4wogs.png"
                    className="xl:h-[25rem] lg:h-[20rem] md:h-[30vw] h-[100%]"
                    alt="sss"
                  />
                  <div>
                    {service.ourProcessKeyPoints.map((feature,i) => (
                      <div key={`PROCESS_FEATURE_00${i}`} className="text-rz-darkgray">
                        <li className="py-2 font-medium xs:text-base text-sm">{feature}</li>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 mt-8 gap-4">
                  <motion.div whileHover={{scale:1.05}} className="cursor-pointer border lg:p-8 sm:p-4 p-4 flex flex-col gap-4">
                    <h3 className="font-semibold md:text-3xl sm:text-2xl text-xl playfair-display">Professional Package</h3>
                    <h4 className="sm:text-base text-sm">Ideal for businesses looking to expand their online presence and functionality.</h4>
                    <h6 className="font-semibold text-3xl">30,000Rs</h6>
                    {
                      service.professionalPackageKeypoints.map((point)=>(
                        <li className=" lg:text-base md:text-sm sm:text-base text-xs">{point}</li>
                      ))
                    }
                  </motion.div>
                  <motion.div whileHover={{scale:1.05}} className="cursor-pointer border lg:p-8 sm:p-4 p-4 flex flex-col gap-4">
                    <h3 className="font-semibold md:text-3xl sm:text-2xl text-xl playfair-display">Enterprise Package</h3>
                    <h4 className="sm:text-base text-sm">Comprehensive solution for businesses requiring extensive branding and design services.</h4>
                    <h4 className="text-2xl font-semibold">Custom Quote</h4>
                    <div className="w-[20rem]">
                    <FillButton title="Contact Us"/>

                    </div>
                  </motion.div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <LetsStartContainer/>
      <Footer/>
    </div>
  );
}
