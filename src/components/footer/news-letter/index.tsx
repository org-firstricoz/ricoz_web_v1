import React from "react";
import ChevronSVGBig from "../../svgs/ChevronSVGBig";
import toast from "react-hot-toast";

export default function NewsLetter() {
  const [expand, setExpand] = React.useState(false);
  const [email, setEmail] = React.useState("");

  const handleSubmit = ()=>{
    if(email==="" || !email.includes("@")){
      toast.error("Please Enter a valid Email")
    }
    else {
      
      toast.success("Newsletter Subscribed")
    }
  }
  return (
    <div className="lg:col-span-2 col-span-1 ">
      <div
        onClick={() => setExpand((x) => !x)}
        className="flex justify-between border-b-2 sm:border-none border-white/40"
      >
        <h3 className=" text-white text-sm sm:text-xl sm:mb-4">
          Our News Letter
        </h3>
        <div
          className={`sm:hidden flex  ${expand ? "rotate-180" : "rotate-0"}`}
        >
          <ChevronSVGBig />
        </div>
      </div>
      {expand && (
        <div className={` sm:hidden flex flex-col gap-4 mt-2 sm:mt-0 `}>
          <h4 className="text-sm sm:text-base text-rz-lightblue/60">
            Subscribe to our newsletter to get the latest News and offers..
          </h4>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="flex-1 min-w-0 px-4 focus:outline-none placeholder:text-white bg-transparent border border-r-0"
            />
            <div className="w-16 h-16 bg-rz-lategray flex justify-center items-center">
              GO
            </div>
          </div>
        </div>
      )}
      <div className={`  sm:flex hidden flex-col gap-4`}>
        <h4 className="text-sm sm:text-base text-rz-lightblue/60">
          Subscribe to our newsletter to get the latest News and offers..
        </h4>
        <div className="flex">
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            className="flex-1 px-4 min-w-0  placeholder:text-white bg-transparent border border-r-0"
          />
          <div
            onClick={handleSubmit}
            className="w-16 h-16 cursor-pointer bg-rz-lategray flex justify-center items-center"
          >
            GO
          </div>
        </div>
      </div>
    </div>
  );
}
