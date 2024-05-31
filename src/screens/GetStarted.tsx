import { TextField } from "@mui/material";
import SERVICES from "../constants/SERVICES";
import CompactServiceWrapper from "../components/compact-service-wrapper";
import FillButton from "../components/fill-button";
import SendSVG from "../components/svgs/SendSVG";
import CloseSVG from "../components/svgs/CloseSVG";
import { useNavigate } from "react-router-dom";

export default function GetStarted() {
  const navigate = useNavigate();
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

      <div className="flex-col flex gap-4 items-start py-8">
        <div className="flex gap-4">
          <TextField
            placeholder="What's your first name"
            label="First name"
            color="success"
            required
          />
          <TextField
            placeholder="What's your name"
            label="Last Name"
            color="success"
            required
          />
        </div>

        <TextField
          className="lg:w-[40rem] w-full"
          placeholder="What's your email"
          label="Email"
          color="success"
          required
        />
        <TextField
          className="md:w-[30rem] w-full"
          placeholder="What's your phone number"
          label="Phone Number"
          color="success"
          required
        />
        <div>
          <p className=" font-medium text-black mt-4 mb-8">
            What are you particularly interested in ?
          </p>
          <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4">
            {SERVICES.map((service, i) => (
              <CompactServiceWrapper
                key={`service.img_${i}`}
                description={service.description}
                img={service.img}
                title={service.title}
              />
            ))}
          </div>
        </div>
      </div>
      <FillButton title="Send Query" rounded="lg">
        <SendSVG />
      </FillButton>
    </div>
  );
}
