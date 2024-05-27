import LinksList from "./linkslist";
import NewsLetter from "./news-letter";

export default function Footer() {
  return (
    <div className="bg-rz-darkgreen lg:px-40 md:px-24 sm:px-16 px-4 sm:pt-24 pt-8 ">
      <div className="grid xl:grid-cols-7 sm:grid-cols-2 grid-cols-1 gap-8 sm:gap-16">
        <div className="flex flex-col gap-3 sm:col-span-2">
          <h3 className="text-xs sm:text-sm">
            Ricoz addresses this need by serving as your go-to destination for
            all things tech-related. Whether you're a business seeking
            innovative solutions or an individual looking to stay updated on the
            latest trends, Ricoz has you covered.
          </h3>
          <div className="flex gap-2 mt-4 sm:mt-8 ">
            <img src="home.png" className="h-6" alt="" />
            <p className="font-light text-sm">
              Nayagon, Nimi Vihar, Sector 89, Noida Phase 02, Noida
            </p>
          </div>
          <div className="flex gap-2">
            <img src="email.png" className="h-6" alt="" />
            <p className="font-light text-sm">care@ricoz.com</p>
          </div>
          <div className="ml-7 -mt-4 text-sm">+91 8961310988</div>
        </div>
        <LinksList  heading="Useful Links"/>
        <LinksList  heading="Policies"/>
        <LinksList  heading="Help"/>
        <NewsLetter/>
      </div>
      <div className="mt-4 sm:mt-16 flex flex-col gap-2 py-8 border-y-2">
        <h4 className="text-xl font-medium playfair-display">Our Presence</h4>
        <div className="flex gap-4 flex-wrap xs:text-base text-sm">
          <p>Delhi</p>
          <p>Noida</p>
          <p>Greater Noida</p>
          <p>Gurugram</p>
          <p>Nigeria</p>
        </div>
      </div>
      <p className="text-center py-3 xs:text-base text-sm">
        © 2024 RICOZ TECHNOLOGIES PVT LTD. All Rights Reserved
      </p>
    </div>
  );
}
