import ServiceWrapper from "../service-wrapper";
import SERVICES from "./constants";

export default function OurServicesSection() {
  return (
    <div className="text-black flex flex-col items-center lg:px-40 md:px-32 sm:px-24 px-8 py-16">
      <h3 className="playfair-display text-3xl font-semibold">Our Services</h3>
      <p className="mb-16 text-black/50 text-center">Services We Deliver & Help You Implement For Success</p>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-12 gap-8 mb-16">
        {SERVICES.map((service,i) => (
          <ServiceWrapper
            key={`service.img_${i}`}
            description={service.description}
            img={service.img}
            title={service.title}
          />
        ))}
      </div>
    </div>
  );
}
