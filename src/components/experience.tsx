import React, { FunctionComponent } from "react"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "./ui/card"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { typography } from "./typography"
import { format, formatDuration, intervalToDuration } from "date-fns"
import { experiences } from "@/constants/experiences"

type Props = {
  containerClassName?: string
}

export const Experience: FunctionComponent<Props> = ({
  containerClassName
}) => {
  return (
    <div className={cn("grid gap-x-8", containerClassName)}>
      {/* <div className={cn("grid grid-cols-3 gap-x-8", containerClassName)}> */}
      {experiences.map((experience, index) => {
        const startDate = format(experience.startDate, "MMM yyyy")
        const endDate = experience.endDate
          ? format(experience.endDate, "MMM yyyy")
          : "Present"

        const duration = formatDuration(
          intervalToDuration({
            start: experience.startDate,
            end: experience.endDate ?? new Date()
          }),
          { format: ["years", "months"], delimiter: ", " }
        )

        return (
          <Card key={index} className="max-w-fit dark:bg-slate-800">
            <CardHeader className="flex-row items-center gap-3">
              <Image
                src={`/assets/images/${experience.image}`}
                alt={`${experience.name} Logo`}
                width={64}
                height={64}
                className="aspect-square rounded-full"
              />
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
                {startDate} - {endDate} ({duration})
              </CardDescription>
            </CardFooter>
          </Card>
        )
      })}
    </div>
  )
}
