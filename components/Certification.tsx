import React, { FunctionComponent } from "react"
import Balancer from "react-wrap-balancer"
import Image from "next/image"
import { getMonthYear } from "@/utilities/utils"

export interface Props {
  name: string
  image: string
  release: string
  expiration?: string
}

const Certification: FunctionComponent<Props> = ({
  name, image, release, expiration
}) => {
  return (
    <div className="w-48 flex flex-col items-center aspect-square p-2">
      <Image src={image} alt={`${name} Logo`} width={256} height={256} className="w-28 aspect-square object-fill" />
      <div className="flex flex-col w-full items-center">
        <h4 className="text-center">
          {name}
        </h4>
        <Balancer className="text-center text-xs">
          {`${getMonthYear(release)} ${expiration ? `- ${getMonthYear(expiration)}` : ""}`}
        </Balancer>
      </div>
    </div>
  )
}

export default Certification
