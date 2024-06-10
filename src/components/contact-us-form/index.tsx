import { useState, FormEvent } from "react";
import FillButton from "../fill-button";
import MailSVG from "../svgs/MailSVG";
import PhoneSVG from "../svgs/PhoneSVG";
import PinSVG from "../svgs/PinSVG";
import SendSVG from "../svgs/SendSVG";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

interface ContactUsFormState {
  email: string;
  message: string;
  success: boolean;
}

interface ContactUsFormProps {
  onFormSubmit: () => void;
}

export default function ContactUsForm({ onFormSubmit }: ContactUsFormProps) {
  const [formData, setFormData] = useState<ContactUsFormState>({
    email: "",
    message: "",
    success: false,
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    onFormSubmit(); 
    const response = await fetch("https://ricoz-web.onrender.com/api/v1/add/user/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: formData.email, message: formData.message }),
    });
    if (response.ok) {
      console.log("Message sent successfully");
      toast.success('Message Sent Successfully');
      setFormData({ email: "", message: "", success: true });
      
    } else {
      console.error("Failed to send message");
      toast.error('Failed to send message');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value, success: false }));
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-emerald-950 to-emerald-700 flex justify-center items-center relative overflow-hidden px-4 md:px-8 lg:px-16">
      <motion.div 
        className="w-48 h-48 bg-black bg-opacity-10 rounded-full absolute"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{ top: '30%', left: '25%' }}
      />
      <motion.div 
        className="w-48 h-48 bg-black bg-opacity-10 rounded-full absolute"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2, delay: 1 }}
        style={{ top: '60%', right: '20%' }}
      />
      
      <motion.div 
        className="flex justify-center w-full max-w-7xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-16 w-full py-8 md:py-16 px-4 md:px-8 lg:px-16">
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-xl md:text-2xl font-medium text-white">Contact Info</h2>
            <div className="flex gap-2 items-center">
              <div className="bg-white text-gray-800 h-10 w-10 flex justify-center items-center rounded-full hover:scale-105 transform transition-all duration-300">
                <PinSVG />
              </div>
              <h2 className="max-w-[20rem] flex-1 text-white">
                FLOOR, P-2,S.NO.150/A/1+2 BHUSARI COLONY KOTHRUD PUNE-411038
              </h2>
            </div>
            <div className="flex gap-2 items-center">
              <div className="bg-white text-gray-800 h-10 w-10 flex justify-center items-center rounded-full hover:scale-105 transform transition-all duration-300">
                <PhoneSVG />
              </div>
              <h2 className="max-w-[20rem] text-white">+91 7011112666</h2>
            </div>
            <div className="flex gap-2 items-center">
              <div className="bg-white text-gray-800 h-10 w-10 flex justify-center items-center rounded-full hover:scale-105 transform transition-all duration-300">
                <MailSVG />
              </div>
              <h2 className="max-w-[20rem] text-white">care@ricoz.in</h2>
            </div>
            <h2 className="text-xl md:text-2xl font-medium mt-8 text-white">Social Links</h2>
          </div>
          <div className="flex flex-col gap-6 xl:col-span-2">
            <h3 className="text-xl md:text-2xl font-medium text-white">Leave Us a Message Here</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-4 rounded-xl text-black bg-white placeholder:text-white bg-opacity-20 backdrop-blur-sm focus:outline-none transition-colors duration:300 focus:bg-gray-200"
                />
              </div>
              <div className="flex flex-col gap-2">
                <textarea
                  name="message"
                  placeholder="Enter Your Message..."
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-white placeholder:text-white bg-opacity-25 backdrop-blur-md h-[10rem] rounded-lg text-black p-4 focus:outline-none transition-colors duration-300 focus:bg-gray-200"
                ></textarea>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <FillButton title="SEND MESSAGE" variant="white-bordered">
                  <SendSVG />
                </FillButton>
              </motion.div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
