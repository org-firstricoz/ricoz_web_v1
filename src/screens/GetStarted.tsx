import { useState, FormEvent } from "react";
import { TextField } from "@mui/material";
import SERVICES from "../constants/SERVICES";
import CompactServiceWrapper from "../components/compact-service-wrapper";
import FillButton from "../components/fill-button";
import SendSVG from "../components/svgs/SendSVG";
import CloseSVG from "../components/svgs/CloseSVG";
import { useNavigate } from "react-router-dom";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  success: boolean;
}

export default function GetStarted() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    success: false,
  });
  const [selectedServiceTitle, setSelectedServiceTitle] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const dataToSend = {
      firstname: formData.firstName,
      lastname: formData.lastName,
      email: formData.email,
      phone: formData.phoneNumber,
      interestedIn: selectedServiceTitle.toUpperCase(), // Convert to uppercase
    };
    
    console.log('Data sent to API:', dataToSend);

    const response = await fetch("http://localhost:3000/api/v1/add/getStart/user/query", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });

    if (response.ok) {
      setFormData({ firstName: "", lastName: "", email: "", phoneNumber: "", success: true });
      setSelectedServiceTitle(""); 
    } else {
      console.error("Failed to send query");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Validate phone number field to allow only numbers
    if (name === "phoneNumber" && !/^\d*$/.test(value)) {
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value, success: false }));
  };

  const handleServiceSelect = (title: string) => {
    setSelectedServiceTitle(title);
  };

  return (
    <div className="text-black lg:px-40 md:px-32 sm:px-24 px-4 py-8">
      <div className="flex justify-between gap-4">
        <div>
          <h2 className="font-medium text-3xl text-black/60">
            Fill out the form to reach us
          </h2>
          <p className="text-sm font-medium text-black/60 mt-4 sm:0">
            We strive to stay ahead of the curve and create products that make a
            real difference in people's lives.
          </p>
        </div>
        <div onClick={() => navigate("/")} className="hover:cursor-pointer">
          <CloseSVG />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex-col flex gap-4 items-start py-8">
        <div className="flex gap-4">
          <TextField
            name="firstName"
            placeholder="What's your first name"
            label="First name"
            color="success"
            required
            value={formData.firstName}
            onChange={handleChange}
          />
          <TextField
            name="lastName"
            placeholder="What's your last name"
            label="Last Name"
            color="success"
            required
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <TextField
          name="email"
          className="lg:w-[40rem] w-full"
          placeholder="What's your email"
          label="Email"
          color="success"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          name="phoneNumber"
          type="tel" // Use "tel" type to avoid arrows
          className="md:w-[30rem] w-full"
          placeholder="What's your phone number"
          label="Phone Number"
          color="success"
          required
          value={formData.phoneNumber}
          onChange={handleChange}
          inputProps={{ pattern: "[0-9]*" }} // Ensure only numeric input
        />
        <div>
          <p className="font-medium text-black mt-4 mb-8">
            What are you particularly interested in?
          </p>
          <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4">
            {SERVICES.map((service, i) => (
              <CompactServiceWrapper
                key={`service.img_${i}`}
                description={service.description}
                img={service.img}
                title={service.title}
                selected={selectedServiceTitle === service.title} 
                onClick={() => handleServiceSelect(service.title)} 
              />
            ))}
          </div>
        </div>
        <FillButton type="submit" title="Send Query" rounded="lg">
          <SendSVG />
        </FillButton>
      </form>
    </div>
  );
}
