import React from "react";
import { INavLink } from "./constants";

export default function MenuLink({
  href,
  title,
  dropdown,
  dropdownLinks,
}: INavLink) {
  const [expand, setExpand] = React.useState(false);
  return dropdown ? (
    <div
      onClick={() => setExpand((x) => !x)}
      className="px-4 py-5 font-medium text-rz-lategray border-b w-full uppercase text-sm hover:text-black"
    >
      <div className="flex justify-between w-full">
        <p>{title}</p>
        {dropdown && (
          <img
            src="chevron.png"
            className={`w-4 h-4 ${expand ? "rotate-0" : "-rotate-90"}`}
            alt=""
          />
        )}
      </div>
      {expand && (
        <div className="flex flex-col mt-4">
          {dropdownLinks?.map((link, i) => (
            <a key={`DROPDOWNLINK_${i}`} className="p-3 " href={link.href}>
              {link.title}
            </a>
          ))}
        </div>
      )}
    </div>
  ) : (
    <a
      href={href}
      onClick={() => setExpand((x) => !x)}
      className="px-4 py-5 font-medium text-rz-lategray border-b w-full uppercase text-sm hover:text-black"
    >
      <div className="flex justify-between w-full">
        <p>{title}</p>
        {dropdown && (
          <img
            src="chevron.png"
            className={`w-4 h-4 ${expand ? "rotate-0" : "-rotate-90"}`}
            alt=""
          />
        )}
      </div>
      {expand && (
        <div className="flex flex-col mt-4">
          {dropdownLinks?.map((link, i) => (
            <a key={`DROPDOWNLINK_${i}`} className="p-3 " href={link.href}>
              {link.title}
            </a>
          ))}
        </div>
      )}
    </a>
  );
}
