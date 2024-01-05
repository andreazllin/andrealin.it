"use client"

import { FunctionComponent } from "react"
import Image from "next/image"
import Typography from "./Typography"

export interface Props {
  name: string
  image: string
  release: Date
  expiration?: Date
}

const Certification: FunctionComponent<Props> = ({
  name,
  image
}) => {
  return (
    <div className="space-y-2">
      <Image
        src={image}
        alt={name}
        width={128}
        height={128}
      />
      <Typography align="center" variant="secondary">
        {name}
      </Typography>
    </div>
  )
}

export default Certification
