import { Props as NavLinkProps } from "@/components/client/Navbar/NavLink"

export const navbarLink: Array<Pick<NavLinkProps, "children" | "href">> = [
  {
    children: "About me",
    href: "/#about"
  },
  {
    children: "Projects",
    href: "/#projects"
  },
  {
    children: "Certifications",
    href: "/#certifications"
  },
  {
    children: "Blog",
    href: "/blog"
  }
]
