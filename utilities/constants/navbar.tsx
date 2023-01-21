import { ReactElement } from "react"
import { FaGithubAlt, FaInstagram, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa"

export const links: Array<{
  href: string,
  label: string
}> = [
  {
    href: "#aboutme",
    label: "About me"
  },
  {
    href: "#contactme",
    label: "Contact me"
  }
  // ,
  // {
  //   href: "posts",
  //   label: "Blog"
  // }
]

export const socials: Array<{
  href: string
  icon: ReactElement
}> = [
  {
    href: "https://github.com/andreazllin",
    icon: <FaGithubAlt />
  },
  {
    href: "https://www.linkedin.com/in/andrea-lin-583653206",
    icon: <FaLinkedin />
  },
  {
    href: "mailto:info@andrealin.it?subject=Ciao Andrea! Abbiamo una proposta interessante per te.",
    icon: <FaEnvelope />
  },
  {
    href: "https://twitter.com/nilaerdna",
    icon: <FaTwitter />
  },
  {
    href: "https://www.instagram.com/andreazllin",
    icon: <FaInstagram />
  }
]
