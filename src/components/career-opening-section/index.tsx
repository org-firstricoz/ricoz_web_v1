import CareerOpeningWrapper from "../career-opening-wrapper";
import { OPENINGS } from "./constants";

export default function CareerOpeningSection() {
  return (
    <div className="text-black lg:px-40 md:px-24 sm:px-16 px-4 py-8">
      <h2 className="text-3xl playfair-display font-semibold mb-4">
        Current Openings
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {OPENINGS.map((opening, i) => (
          <CareerOpeningWrapper
            description={opening.description}
            experience={opening.experience}
            title={opening.title}
            key={`OPENING_${i}`}
          />
        ))}
      </div>
    </div>
  );
}
