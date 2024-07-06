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
    title: "Initiatives",
    href: "/initiatives",
  },
  {
    title: "Services",
    href: "#",
    dropdown: true,
    dropdownLinks: [
      {
        title: "Technical Documentation",
        href: "/services/Technical Documentation",
      },
      {
        title: "Archietecture Design",
        href: "/services/Archietecture Design",
      },
      {
        title: "UX Design",
        href: "/services/UX Design",
      },
      {
        title: "UI Design",
        href: "/services/UI Design",
      },
      {
        title: "Front End Development",
        href: "/services/Front End Development",
      },
      {
        title: "Back End Development",
        href: "/services/Back End Development",
      },
      {
        title: "Testing",
        href: "/services/Testing",
      },
      {
        title: "Maintenance",
        href: "/services/Maintenance",
      },
      {
        title: "IT Security",
        href: "/services/IT Security",
      },
    ],
  },
  {
    title: "Career",
    href: "/careers",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];
