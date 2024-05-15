import ConatactUsForm from "../components/contact-us-form";
import Footer from "../components/footer";
import LetsStartContainer from "../components/lets-start-container";
import Navbar from "../components/navbar";

export default function ContactUsPage() {
  return (
    <div>
      <Navbar />
      <div className="bg-rz-lategray flex justify-center pt-20 pb-32 text-5xl playfair-display">
        Contact Us
      </div>
      <ConatactUsForm/>
      <LetsStartContainer />
      <Footer />
    </div>
  );
}
