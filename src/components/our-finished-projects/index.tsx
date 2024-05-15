export default function OurFinishedProjects() {
  return (
    <div className="text-black py-16 lg:px-40 md:px-32 sm:px-24 px-8 flex flex-col items-center gap-16">
      <div className="flex flex-col items-center justify-center">
        <h2 className="playfair-display text-2xl font-semibold">
          Our Finished Projects
        </h2>
        <h3 className="text-black/50 text-center">
          Services We Deliver & Help You Implement For Success
        </h3>
      </div>
      <div className="flex lg:gap-16 sm:gap-8 gap-4">
        <img src="fp1.png" className="sm:w-1/3 w-1/2 object-cover" alt="" />
        <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-16 sm:gap-8 gap-4">
          <img src="fp2.png" alt="" />
          <img src="fp3.png" alt="" />
          <img src="fp4.png" alt="" />
          <img src="fp5.png" alt="" />
        </div>
      </div>
      <div className=" bg-rz-lategray text-white py-4 w-[10rem] flex justify-center">
        VIEW ALL
      </div>
    </div>
  );
}
