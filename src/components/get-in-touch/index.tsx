import { useState, FormEvent } from "react";
import toast from "react-hot-toast";
import FillButton from "../fill-button";
import SendSVG from "../svgs/SendSVG";
import RZTextArea from "./RZTextArea";
import RZTextField from "./RZTextField";

interface FormState {
  fullName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

export default function GetInTouch() {
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const dataToSend = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phoneNumber,
      message: formData.message,
    };
    
    console.log('Data sent to API:', dataToSend);

    const response = await fetch("https://ricoz-web.onrender.com/add/user/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });

    if (response.ok) {
      toast.success('Message Sent Successfully');
      setFormData({ fullName: "", email: "", phoneNumber: "", message: "" });
    } else {
      toast.error('Failed to send message');
    }
  };

  return (
    <div className="lg:px-40 md:px-24 sm:px-16 px-4 py-8 sm:py-32 bg-zinc-900 relative overflow-hidden">
      <h3 className="playfair-display text-2xl sm:text-3xl font-semibold relative z-10">Get In Touch</h3>
      <p className="text-rz-lightgray mb-8 mt-2 text-sm sm:text-base relative z-10">
        Our success in creating business solutions is due in large part
        spacially to talented and highly committed team.
      </p>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-0 md:gap-8 relative z-10">
        <img
          className="col-span-1 sm:h-full h-[14rem] object-cover"
          src="about5.jpg"
          alt=""
        />
        <form onSubmit={handleSubmit} className="border border-rz-lightgray/70 border-dashed col-span-2 p-6 md:p-8 lg:p-12 flex flex-col gap-4">
          <RZTextField
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <RZTextField
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <RZTextField
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <RZTextArea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          />
          <div className="w-1/2">
            <FillButton title="Submit Now" variant="primary-fill">
              <SendSVG />
            </FillButton>
          </div>
        </form>
      </div>
      {/* <div className="bg-zinc-950 w-[30.5vw] h-full absolute top-0 left-32"></div> */}
    </div>
  );
}
