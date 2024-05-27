import { motion } from "framer-motion"

export default function LetsStartContainer() {
  return (
    <div className="flex md:flex-row flex-col bg-rz-lategray justify-between sm:items-center py-8 sm:py-20 xl:px-40 lg:px-24 md:px-16 px-8">
        <h3 className="xl:text-3xl lg:text-2xl md:text-xl text-lg font-medium my-4">Want To Start A New Project With Us? Let’s Start!</h3>
        <motion.button whileTap={{scale:0.9}} className="border focus:outline-none border-white rounded-none py-4 px-8 hover:bg-white hover:text-rz-lategray hover:border-rz-lategray transition-colors duration-300">START NOW</motion.button>
    </div>
  )
}
