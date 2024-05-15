export default function ConatactUsForm() {
  return (
    <div className="bg-[url(https://res.cloudinary.com/dlxpf7d8c/image/upload/v1715794224/wksr9bdl2skux962kyq7.png)] flex py-24 justify-center px-56">
      {/* <img src="contact-form-bg.png" className="w-full" alt="" /> */}
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="playfair-display text-3xl font-medium">Contact Us</div>
        <div className="text-center">
          Pallamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur.
        </div>
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-medium">Contact Info</h2>
            <h2 className="max-w-[20rem]">
              Fountain Source House, 8 Dealu Street, Off Abule Nla Road, Ebute
              Metta, Lagos, Nigeria
            </h2>
            <h2>
              +234 01 453 8870
            </h2>
            <h2>
              info@Ricozandco.org
            </h2>
            <h2 className="text-2xl font-medium">Social Links</h2>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-medium">Leave Us a Message Here</h3>
            <textarea className="bg-white w-[30rem] h-40 text-black"></textarea>
            <button className="bg-rz-lategray clear-start rounded-none w-[14rem]">SEND MESSAGE</button>
          </div>
        </div>
      </div>
    </div>
  );
}
