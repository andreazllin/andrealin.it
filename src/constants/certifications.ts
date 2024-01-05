import { Props as Certification } from "@/components/client/Certification"
import { date } from "@/helpers/dates"

export const certifications: Array<Certification> = [
  {
    name: "CEFR C1",
    image: "/assets/images/certificates/cefr_c1.jpg",
    release: date("01/05/2021")
  },
  {
    name: "Cloud Practitioner",
    image: "/assets/images/certificates/cloud_practitioner.png",
    release: date("01/12/2021"),
    expiration: date("01/12/2024")
  }
]
