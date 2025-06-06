import { experiences } from "@/constants/experiences"
import { cn } from "@/lib/utils"
import { format, formatDuration, intervalToDuration } from "date-fns"
import Image from "next/image"
import Link from "next/link"
import React, { FunctionComponent } from "react"
import { typography } from "./typography"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "./ui/card"

type Props = {
  containerClassName?: string
}

export const Experience: FunctionComponent<Props> = ({
  containerClassName
}) => {
  return (
    <div className={cn("grid grid-cols-2 gap-4", containerClassName)}>
      {experiences.map((experience, index) => {
        const startDate = format(experience.startDate, "MMM yyyy")
        const endDate = experience.endDate
          ? format(experience.endDate, "MMM yyyy")
          : "Present"

        const duration = formatDuration(
          intervalToDuration({
            start: experience.startDate,
            end: experience.endDate || new Date(Date.now())
          }),
          { format: ["years", "months"], delimiter: ", " }
        )

        return (
          <Card
            key={index}
            className="w-full max-lg:col-span-2 dark:bg-slate-800"
          >
            <CardHeader className="flex-row items-center gap-3">
              <Link
                href={experience.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={`/assets/images/${experience.image}`}
                  alt={`${experience.name} Logo`}
                  width={64}
                  height={64}
                  className="aspect-square rounded-full transition-transform duration-200 hover:scale-105 active:scale-95"
                />
              </Link>
              <div className="flex flex-col gap-2">
                <CardTitle
                  className={typography({ size: "text-md", weight: "medium" })}
                >
                  {experience.role}
                </CardTitle>
                <CardDescription className={typography({ size: "text-sm" })}>
                  {experience.name}
                </CardDescription>
              </div>
            </CardHeader>
            <CardFooter>
              <CardDescription>
                {startDate} - {endDate}{" "}
                {experience.endDate ? `(${duration})` : ""}
              </CardDescription>
            </CardFooter>
          </Card>
        )
      })}
    </div>
  )
}
