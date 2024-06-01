import SectionHeading from "../section-heading";
import { FAQS } from "./constants";
import FAQContainer from "./faq-container";

export default function FAQSection() {
  return (
    <div className="px-4 sm:px-16 md:px-24 lg:px-40 py-8 bg-green-50">
      <SectionHeading title="Software Development FAQ" />
      <div className="text-black flex flex-col gap-3 mt-8">
        {FAQS.map((FAQ, i) => (
          <FAQContainer
            key={`FAQ_${i}`}
            question={FAQ.question}
            answer={FAQ.answer}
          />
        ))}
      </div>
    </div>
  );
}
