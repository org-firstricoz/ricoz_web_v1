export default function Footer() {
  return (
    <div className="bg-rz-darkgreen px-40 py-24 grid grid-cols-4 gap-16">
      <div>
      Lorem ipsum dolor sit amt conetur adcing elit. Sed do eiusod tempor utslr. Ut laboris nisi ut aute irure dolor in rein velit esse.
      </div>
      <div>
        <h3 className="playfair-display text-white text-xl mb-4">Useful Links</h3>
        <div className=" flex flex-col gap-4">
          <h5>Home</h5>
          <h5>About</h5>
          <h5>Contact Us</h5>
        </div>
      </div>
      <div>
        <h3 className="playfair-display text-white text-xl mb-4">Our Vision</h3>
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
        <h3 className="playfair-display text-white text-xl mb-4">Our News Letter</h3>
        <div className=" flex flex-col gap-4 items-end">
          <h4>Subscribe to our newsletter to get the latest News and offers..</h4>
          <div className="w-16 h-16 bg-rz-lategray flex justify-center items-center">GO</div>
        </div>
      </div>
    </div>
  )
}
