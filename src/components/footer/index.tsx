export default function Footer() {
  return (
    <div className="bg-rz-darkgreen lg:px-40 md:px-24 sm:px-16 px-8 pt-24 ">
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1  gap-16">
        <div className="flex flex-col gap-3">
          <h3>
            Ricoz addresses this need by serving as your go-to destination for
            all things tech-related. Whether you're a business seeking
            innovative solutions or an individual looking to stay updated on the
            latest trends, Ricoz has you covered.
          </h3>
          <div className="flex gap-2 mt-8 ">
            <img src="home.png" className="h-6" alt="" />
            <p className="font-light text-sm">Nayagon, Nimi Vihar, Sector 89, Noida Phase 02, Noida</p>
          </div>
          <div className="flex gap-2">
            <img src="email.png" className="h-6" alt="" />
            <p className="font-light text-sm">care@myfastx.com</p>
          </div>
            <div className="ml-7 -mt-4 text-sm">+91 8961310988</div>
          
        </div>
        <div>
          <h3 className="playfair-display text-white text-xl mb-4">
            Useful Links
          </h3>
          <div className=" flex flex-col gap-4">
            <h5>Home</h5>
            <h5>About</h5>
            <h5>Contact Us</h5>
          </div>
        </div>
        <div>
          <h3 className="playfair-display text-white text-xl mb-4">
            Our Vision
          </h3>
          <div className=" flex flex-col gap-4">
            <h4>The Pros and Cons of Starting an Online Business.</h4>
            <h4 className="text-sm">12th June 2017</h4>
          </div>
          <div className="bg-white w-full h-[2px] my-8"></div>
          <div className=" flex flex-col gap-4">
            <h4>The Pros and Cons of Starting an Online Business.</h4>
            <h4 className="text-sm">12th June 2017</h4>
          </div>
        </div>
        <div>
          <h3 className="playfair-display text-white text-xl mb-4">
            Our News Letter
          </h3>
          <div className=" flex flex-col gap-4 items-end">
            <h4>
              Subscribe to our newsletter to get the latest News and offers..
            </h4>
            <div className="w-16 h-16 bg-rz-lategray flex justify-center items-center">
              GO
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 flex flex-col gap-2 py-8 border-y-2">
        <h4 className="text-xl font-medium">Our Presence</h4>
        <div className="flex gap-4 ">
          <p>Delhi</p>
          <p>Noida</p>
          <p>Greater Noida</p>
          <p>Gurugram</p>
          <p>Nigeria</p>
        </div>
      </div>
      <p className="text-center py-3">
        © 2024 RICOZ TECHNOLOGIES PVT LTD. All Rights Reserved
      </p>
    </div>
  );
}
