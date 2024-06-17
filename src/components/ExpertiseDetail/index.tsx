import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../navbar";
import Footer from "../footer";
import LetsStartContainer from "../lets-start-container";

type LocationState = {
  title: string;
  subtitle: string;
  fullDes: string;
  img: string;
};

const ExpertiseDetail: React.FC = () => {
  const location = useLocation();
  const { title, subtitle, fullDes, img } = location.state as LocationState;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen text-white animate-fadeIn"
    >
      <Navbar />
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-rz-lategray flex justify-center pt-20 pb-32 text-5xl playfair-display"
      >
        Our Expertise
      </motion.div>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="px-36 py-4 relative bg-[#799B78] z-10 flex flex-col items-center"
      >
        <div className="relative mx-4 bg-rz-lategray p-8 rounded-lg shadow-xl flex flex-col items-center text-start w-full overflow-hidden">
         
          <motion.div
            className="absolute bg-[#3b5935] rounded-full"
            style={{
              width: 300,
              height: 100,
              top: '2%',
              left: '7%',
              opacity: 0.2,
            }}
            animate={{
              y: ["0%", "20%", "0%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bg-[#3b5035] rounded-full"
            style={{
              width: 100,
              height: 100,
              top: '3%',
              left: '30%',
              opacity: 0.4,
            }}
            animate={{
              y: ["0%", "20%", "0%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bg-[#3b5935] rounded-full"
            style={{
              width: 200,
              height: 200,
              top: '60%',
              right: '2%',
              opacity: 0.3,
            }}
            animate={{
              y: ["0%", "10%", "0%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
           <motion.div
            className="absolute bg-[#3b5035] rounded-full"
            style={{
              width: 100,
              height: 100,
              top: '47%',
              right: '6%',
              opacity: 0.5,
            }}
            animate={{
              y: ["0%", "10%", "0%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bg-[#3b5035] rounded-full"
            style={{
              width: 70,
              height: 70,
              top: '37%',
              right: '5%',
              opacity: 0.5,
            }}
            animate={{
              y: ["0%", "40%", "0%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bg-[#3b5035] rounded-full"
            style={{
              width: 50,
              height: 50,
              top: '31%',
              right: '10%',
              opacity: 0.5,
            }}
            animate={{
              y: ["0%", "40%", "0%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm mb-2 self-start"
          >
            {subtitle}
          </motion.h2>
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-5xl font-bold mb-2 self-start playfair-display"
          >
            {title}
          </motion.h1>
          <motion.img
            src={img}
            alt={title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-[70vw] h-[50vh] object-cover self-start rounded-xl mt-8 mb-2"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 whitespace-pre-line text-lg self-start"
          >
            {fullDes}
          </motion.p>
        </div>
      </motion.div>
      <LetsStartContainer />
      <Footer />
    </motion.div>
  );
};

export default ExpertiseDetail;
