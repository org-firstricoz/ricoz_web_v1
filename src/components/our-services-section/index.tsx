import ServiceWrapper from "../service-wrapper";
import SERVICES from "./constants";

export default function OurServicesSection() {
  return (
    <div className="text-black flex flex-col items-center px-40 py-16">
      <h3 className="playfair-display text-3xl font-semibold">Our Services</h3>
      <p className="mb-16 text-black/50">Services We Deliver & Help You Implement For Success</p>
      <div className="grid grid-cols-3 gap-12 mb-16">
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
