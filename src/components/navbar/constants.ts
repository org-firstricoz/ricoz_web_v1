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
        href: "services/Web Development",
      },
      {
        title: "App Development",
        href: "services/App Development",
      },
      {
        title: "Graphic Design",
        href: "services/Graphic Design",
      },
      {
        title: "Ads Management",
        href: "services/Ads Management",
      },
      {
        title: "SEO Optimization",
        href: "services/SEO Optimization",
      },
      {
        title: "Google Adword",
        href: "services/Google Adword",
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
