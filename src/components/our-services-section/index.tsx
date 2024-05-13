import ServiceWrapper from "../service-wrapper";

export default function OurServicesSection() {
  return (
    <div className="text-black flex flex-col items-center px-64 gap-16">
      <h3 className="playfair-display text-3xl">Our Services</h3>
      <p>
      Services We Deliver & Help You Implement For Success
      </p>
      <div className="grid grid-cols-3">
        <ServiceWrapper />
        <ServiceWrapper />
        <ServiceWrapper />
        <ServiceWrapper />
        <ServiceWrapper />
        <ServiceWrapper />
      </div>
    </div>
  );
}
