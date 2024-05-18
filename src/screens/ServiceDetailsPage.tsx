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
      <div className="text-black px-40 py-8">
        <div>
          {SERVICES.filter((service) => service.title === serviceName).map(
            (service,i) => (
              <div key={`SERVICE_00${i}`} className="relative flex flex-col items-center">
                <h2 className="text-5xl font-bold text-center  mb-6 mt-10 playfair-display">
                  {service.title}
                </h2>
                <h3 className="font-medium text-white max-w-[40rem] text-center mb-4">
                  {service.description}
                </h3>
                <div className="w-[90rem] h-[80rem] absolute bg-rz-darkgreen top-[-64rem]  left-1/2 -translate-x-1/2 rounded-full -z-10"></div>
                <div className="mt-24 flex justify-between w-full items-center">
                  <div>
                    <h2 className="font-semibold text-2xl mb-2">
                      Key Features
                    </h2>
                    {service.keyFeatures.map((feature) => (
                      <div key={`KEY_FEATURE_00${i}`} className="text-rz-darkgray">
                        <li className="py-2 font-medium">{feature}</li>
                      </div>
                    ))}
                  </div>
                  <img
                    src="https://res.cloudinary.com/dlxpf7d8c/image/upload/v1716037382/sv5nvxqflqznkgzcbqmk.png"
                    className="h-[25rem]"
                    alt="sss"
                  />
                </div>
                <h2 className="font-semibold w-full text-2xl mb-2 mt-16">
                  Our Process
                </h2>
                <h2>{service.ourProcessDescription}</h2>
                <div className="mt-10  mb-16 flex gap-32 items-center w-full">
                  <img
                    src="https://res.cloudinary.com/dlxpf7d8c/image/upload/v1716037382/m6pbo9ictm1yady4wogs.png"
                    className="h-[25rem]"
                    alt="sss"
                  />
                  <div>
                    {service.ourProcessKeyPoints.map((feature,i) => (
                      <div key={`PROCESS_FEATURE_00${i}`} className="text-rz-darkgray">
                        <li className="py-2 font-medium">{feature}</li>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 mt-8 gap-8">
                  <motion.div whileHover={{scale:1.05}} className="cursor-pointer border p-8 flex flex-col gap-4">
                    <h3 className="font-semibold text-3xl playfair-display">Professional Package</h3>
                    <h4>Ideal for businesses looking to expand their online presence and functionality.</h4>
                    <h6 className="font-semibold text-3xl">30,000Rs</h6>
                    {
                      service.professionalPackageKeypoints.map((point)=>(
                        <li>{point}</li>
                      ))
                    }
                  </motion.div>
                  <motion.div whileHover={{scale:1.05}} className="cursor-pointer border p-8 flex flex-col gap-4">
                    <h3 className="font-semibold text-3xl playfair-display">Enterprise Package</h3>
                    <h4>Comprehensive solution for businesses requiring extensive branding and design services.</h4>
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
