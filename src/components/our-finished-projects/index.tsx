export default function OurFinishedProjects() {
  return (
    <div className="text-black py-16 px-40 flex flex-col items-center gap-16">
      <div className="flex flex-col items-center justify-center">
        <h2 className="playfair-display text-2xl font-semibold">
          Our Finished Projects
        </h2>
        <h3 className="text-black/50">
          Services We Deliver & Help You Implement For Success
        </h3>
      </div>
      <div className="flex gap-16">
        <img src="fp1.png" className="w-1/3" alt="" />
        <div className="grid grid-cols-2 gap-16">
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
