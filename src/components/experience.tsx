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

type Props = {
  containerClassName?: string
}

export const Experience: FunctionComponent<Props> = ({
  containerClassName
}) => {
  return (
    <div className={cn("w-fit", containerClassName)}>
      <Card className="dark:bg-slate-800">
        <CardHeader className="flex-row items-center gap-3">
          <Image
            src={"/assets/images/polarity.jpg"}
            alt={"Polarity Logo"}
            width={64}
            height={64}
            className="aspect-square rounded-full"
          />
          <div className="flex flex-col gap-2">
            <CardTitle>Software Development Engineer II</CardTitle>
            <CardDescription>Polarity</CardDescription>
          </div>
        </CardHeader>
        <CardFooter>
          <CardDescription>Oct 2021 - Present</CardDescription>
        </CardFooter>
      </Card>
    </div>
  )
}
