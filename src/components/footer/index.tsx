import LinksList from "./linkslist";
import NewsLetter from "./news-letter";

export default function Footer() {
  return (
    <div className="bg-rz-darkgreen lg:px-40 md:px-24 sm:px-16 px-4 sm:pt-24 pt-8 ">
      <div className="grid xl:grid-cols-7 sm:grid-cols-2 grid-cols-1 gap-8 sm:gap-16">
        <div className="flex flex-col gap-3 sm:col-span-2">
          <h3 className="text-sm">
            Ricoz addresses this need by serving as your go-to destination for
            all things tech-related. Whether you're a business seeking
            innovative solutions or an individual looking to stay updated on the
            latest trends, Ricoz has you covered.
          </h3>
          <div className="flex gap-2 mt-4 sm:mt-8 ">
            <img src="home.png" className="h-6" alt="" />
            <p className=" text-sm">
            Shiv Niketan, 172/7 picnic garden road, Kolkata - 700039
            </p>
          </div>
          <div className="flex gap-2">
            <img src="email.png" className="h-6" alt="" />
            <p className=" text-sm">care@ricoz.in</p>
          </div>
          <div className="ml-7 -mt-4 text-sm">+91 7011112666</div>
        </div>
        <LinksList
          heading="Useful Links"
          links={[
            { title: "Home", href: "/" },
            { title: "About", href: "/about" },
            { title: "Contact Us", href: "/contact" },
          ]}
        />
        <LinksList
          heading="Policies"
          links={[
            { title: "Terms", href: "/" },
            { title: "Privacy Policy", href: "/privacy-policy" },
            { title: "Cookie Policy", href: "/contact" },
            { title: "Fraud Disclaimer", href: "/contact" },
          ]}
        />
        <LinksList
          heading="Help"
          links={[
            { title: "FAQs", href: "/" },
            { title: "Customer Care", href: "/about" },
          ]}
        />
        <NewsLetter />
      </div>
      <div className="mt-4 sm:mt-16 flex flex-col gap-2 py-8 border-b-2 ">
        <h4 className="text-xl">Our Presence</h4>
        <div className="flex gap-4 flex-wrap xs:text-base text-sm">
          <p>India</p>
          <p>US</p>
          <p>UK</p>
          <p>CANADA</p>
          <p>Nigeria</p>
          <p>Australia</p>
        </div>
      </div>
      <p className="text-center py-3 xs:text-base text-sm">
        © 2021 FIRSTRICOZ PRIVATE LIMITED. All Right Reserved • CIN:
        U72900DL2021PTC384199
      </p>
    </div>
  );
}
