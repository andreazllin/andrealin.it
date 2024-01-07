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
      className="gap-3 border-2 border-slate-200 dark:border-slate-700 dark:border-slate- border-dashed py-2 px-4"
    >
      <div className="flex gap-2 items-center">
        <Image
          src={image}
          alt={name}
          width={64}
          height={64}
          className="h-min aspect-square bg-white object-center object-contain"
        />
        <div>
          <Typography variant="primary" weight="semibold">
            {name}
          </Typography>
          <Typography lineHeight={4} size="xs" variant="secondary" className="overflow-hidden line-clamp-3 text-ellipsis">
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
