import { motion } from "framer-motion";
import ServiceWrapper from "../service-wrapper";
import SERVICES from "../../constants/SERVICES";
import SectionHeading from "../section-heading";

export default function OurServicesSection() {
  return (
    <div className="text-black flex flex-col items-center lg:px-40 md:px-32 sm:px-24 px-4 py-16">
      <SectionHeading title="Our Services" subtitle="Services We Deliver & Help You Implement For Success" />
      <motion.div
        className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-16 sm:gap-8 gap-4 sm:mb-16 w-full mt-16"
      >
        {SERVICES.map((service, i) => (
          <ServiceWrapper
            key={`service.img_${i}`}
            description={service.description}
            img={service.img}
            title={service.title}
          />
        ))}
      </motion.div>
    </div>
  );
}
