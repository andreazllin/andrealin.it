"use client"

import { FunctionComponent } from "react"
import Image from "next/image"
import Typography from "./Typography"
import Link from "next/link"

export interface Props {
  name: string
  image: string
  description: string
  work: string
  url: string
}

const Project: FunctionComponent<Props> = ({
  name,
  image,
  description,
  work,
  url
}) => {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="gap-3 border-2 border-slate-200 dark:border-slate-700 dark:border-slate- border-dashed p-4"
    >
      <div className="flex gap-2 items-start">
        <Image
          src={image}
          alt={name}
          width={64}
          height={64}
          className="aspect-square"
        />
        <div className="overflow-hidden">
          <Typography variant="primary" weight="semibold" lineHeight={"none"} className="pb-1">
            {name}
          </Typography>
          <Typography lineHeight={4} size="xs" variant="secondary">
            {description}
          </Typography>
        </div>
      </div>

      <div>
        <Typography className="mt-2" size="sm">
          {work}
        </Typography>
      </div>
    </Link>
  )
}

export default Project
