export interface INavLink {
  title: string;
  href: string;
  dropdown?: boolean;
  dropdownLinks?: Array<{
    title: string;
    href: string;
  }>;
}

export const NAVLINKS: Array<INavLink> = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Services",
    href: "#",
    dropdown: true,
    dropdownLinks: [
      {
        title: "Web Development",
        href: "#",
      },
      {
        title: "App Development",
        href: "#",
      },
      {
        title: "Graphic Design",
        href: "#",
      },
      {
        title: "Ads Management",
        href: "#",
      },
      {
        title: "SEO Optimization",
        href: "#",
      },
      {
        title: "Google Adword",
        href: "#",
      },
    ],
  },
  {
    title: "Career",
    href: "#",
  },
  {
    title: "Blog",
    href: "#",
  },
];
