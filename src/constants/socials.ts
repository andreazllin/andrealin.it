import { IconName } from "@/types/icon"

type Social = {
  icon: IconName,
  url: string
}

export const socials: Social[] = [
  {
    icon: "brand-github",
    url: "https://github.com/andreazllin"
  },
  {
    icon: "brand-linkedin",
    url: "https://www.linkedin.com/in/andreazllin"
  },
  {
    icon: "mail",
    url: "mailto:info@andrealin.it?subject=Ciao Andrea! Abbiamo una proposta interessante per te."
  },
  {
    icon: "brand-twitter",
    url: "https://twitter.com/nilaerdna"
  },
  {
    icon: "brand-instagram",
    url: "https://www.instagram.com/andreazllin"
  }
]

