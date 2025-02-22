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

type Props = {
  containerClassName?: string
}

export const Experience: FunctionComponent<Props> = ({
  containerClassName
}) => {
  return (
    <div className={cn("grid gap-x-8", containerClassName)}>
      {/* <div className={cn("grid grid-cols-3 gap-x-8", containerClassName)}> */}
      {/* {Array.from({ length: 3 }).map((_, index) => (
        <Card className="w-fit dark:bg-slate-800" key={index}>
          <CardHeader className="flex-row items-center gap-3">
            <Image
              src={"/assets/images/polarity.jpg"}
              alt={"Polarity Logo"}
              width={64}
              height={64}
              className="aspect-square rounded-full"
            />
            <div className="flex flex-col gap-2">
              <CardTitle
                className={typography({ size: "text-md", weight: "medium" })}
              >
                Software Development Engineer
              </CardTitle>
              <CardDescription className={typography({ size: "text-sm" })}>
                Polarity
              </CardDescription>
            </div>
          </CardHeader>
          <CardFooter>
            <CardDescription>Oct 2021 - Present</CardDescription>
          </CardFooter>
        </Card>
      ))} */}
      <Card className="max-w-fit dark:bg-slate-800">
        <CardHeader className="flex-row items-center gap-3">
          <Image
            src={"/assets/images/polarity.jpg"}
            alt={"Polarity Logo"}
            width={64}
            height={64}
            className="aspect-square rounded-full"
          />
          <div className="flex flex-col gap-2">
            <CardTitle
              className={typography({ size: "text-md", weight: "medium" })}
            >
              Software Development Engineer
            </CardTitle>
            <CardDescription className={typography({ size: "text-sm" })}>
              Polarity
            </CardDescription>
          </div>
        </CardHeader>
        <CardFooter>
          <CardDescription>Oct 2021 - Present</CardDescription>
        </CardFooter>
      </Card>
    </div>
  )
}
