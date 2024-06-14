import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "../components/navbar";
import SERVICES from "../constants/SERVICES";
import Footer from "../components/footer";
import LetsStartContainer from "../components/lets-start-container";

export default function ServiceDetailsPage() {
  const { serviceName } = useParams();
  const service = SERVICES.find((service) => service.title === serviceName);

  useEffect(() => {
    document.title = serviceName
      ? `${serviceName} - Our Services`
      : "Service Details";
  }, [serviceName]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const scrollEffect = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const [keyFeaturesRef, keyFeaturesInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [processRef, processInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [packageRef, packageInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="overflow-hidden">
      <Navbar />
      {service && (
        <div className="text-black">
          {/* Hero Section */}
          <div className="relative h-screen bg-gradient-to-r from-rz-darkgreen to-rz-darkgray flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <h1 className="text-white text-5xl font-bold mb-4">
                {service.title}
              </h1>
              <p className="text-white text-lg max-w-xl mx-auto">
                {service.description}
              </p>
              <Link
                to="key-features"
                smooth={true}
                duration={1000}
                className="inline-block mt-8 px-6 py-3 bg-white text-rz-darkgreen font-semibold rounded-full shadow-md cursor-pointer hover:bg-transparent hover:border hover:border-white hover:text-white"
              >
                Explore More
              </Link>
            </motion.div>
          </div>

          {/* Key Features */}
          <motion.div
            id="key-features"
            ref={keyFeaturesRef}
            initial="hidden"
            animate={keyFeaturesInView ? "visible" : "hidden"}
            variants={scrollEffect}
            transition={{ duration: 0.8 }}
            className="lg:px-40 md:px-24 sm:px-16 px-4 py-16 relative"
          >
            <motion.div
              className="absolute top-1 right-10"
              style={{ pointerEvents: "none" }}
            >
              <motion.div
                className="w-12 h-12 bg-rz-darkgray rounded-full"
                animate={{ y: [0, 15, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              />
              <motion.div
                className="w-16 h-16 bg-rz-darkgreen rounded-full"
                animate={{ x: [0, 20, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              />
              <motion.div
                className="w-14 h-14 bg-rz-darkgreen rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              />
            </motion.div>
            <motion.div
              className="absolute bottom-1 left-10"
              style={{ pointerEvents: "none" }}
            >
              <motion.div
                className="w-16 h-16 bg-rz-darkgray rounded-full"
                animate={{ x: [0, -20, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              />
              <motion.div
                className="w-14 h-14 bg-rz-darkgreen rounded-full"
                animate={{ y: [0, 15, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              />
              <motion.div
                className="w-12 h-12 bg-rz-darkgray rounded-full"
                animate={{ x: [0, 20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              />
            </motion.div>
            {/* Key Features Content */}
            <h2 className="text-3xl font-semibold text-center mb-12">
              Key Features
            </h2>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
              {service.keyFeatures.map((feature, index) => (
                <motion.div
                  key={`KEY_FEATURE_00${index}`}
                  className="bg-white shadow-neomorph p-6 rounded-lg"
                  initial="hidden"
                  animate={keyFeaturesInView ? "visible" : "hidden"}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <p className="text-rz-darkgray font-medium">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          {/* Our Process */}
          <motion.div
            id="our-process"
            ref={processRef}
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
            variants={scrollEffect}
            transition={{ duration: 0.8 }}
            className="bg-rz-darkgreen text-white py-16"
          >
            <div className="lg:px-40 md:px-24 sm:px-16 px-4">
              <h2 className="text-3xl font-semibold text-center mb-12">
                Our Process
              </h2>
              <p className="text-center mb-12">
                {service.ourProcessDescription}
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <img
                    src="https://res.cloudinary.com/dlxpf7d8c/image/upload/v1716037382/m6pbo9ictm1yady4wogs.png"
                    className="rounded-lg shadow-lg w-full"
                    alt="Process Illustration"
                  />
                </div>
                <div>
                  {service.ourProcessKeyPoints.map((point, index) => (
                    <motion.div
                      key={`PROCESS_POINT_00${index}`}
                      initial="hidden"
                      animate={processInView ? "visible" : "hidden"}
                      variants={fadeInUp}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="bg-gray-200 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-20 border border-green-200 text-white p-6 rounded-lg shadow-lg mb-6"
                    >
                      <p className="font-medium">{point}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Professional Package */}
          <motion.div
            id="professional-package"
            ref={packageRef}
            initial="hidden"
            animate={packageInView ? "visible" : "hidden"}
            variants={scrollEffect}
            transition={{ duration: 0.8 }}
            className="lg:px-40 md:px-24 sm:px-16 px-4 py-16 relative"
          >
          
            {/* Professional Package Content */}
            <h2 className="text-3xl font-semibold text-center mb-12">
              Professional Package
            </h2>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
              {service.professionalPackageKeypoints.map((point, index) => (
                <motion.div
                  key={`PROFESSIONAL_PACKAGE_00${index}`}
                  className="bg-white shadow-neomorph p-6 rounded-lg"
                  initial="hidden"
                  animate={packageInView ? "visible" : "hidden"}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <p className="text-rz-darkgray font-medium">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          

          {/* Animated Background Elements */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ zIndex: -1 }}
          >
            <motion.div
              className="w-64 h-64 bg-rz-darkgreen rounded-full absolute top-1/4 left-1/4"
              animate={{ y: [0, 50, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
            <motion.div
              className="w-48 h-48 bg-rz-darkgray rounded-full absolute top-1/3 right-1/4"
              animate={{ y: [0, -50, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
          </motion.div>
        </div>
      )}
      <LetsStartContainer />
      <Footer />
    </div>
  );
}

// Additional CSS
const css = `
  .shadow-neomorph {
    box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff;
  }
`;

const styleElement = document.createElement("style");
styleElement.appendChild(document.createTextNode(css));
document.head.appendChild(styleElement);
