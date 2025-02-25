"use client"

import { cn } from "@/lib/utils"
import { FunctionComponent } from "react"
import { Avatar, AvatarFallback } from "./ui/avatar"
import { AvatarImage } from "@radix-ui/react-avatar"
import { Button } from "./ui/button"
import { CalendarIcon, DownloadIcon } from "lucide-react"
import { typography } from "./typography"
import { toast } from "sonner"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

type Props = {
  containerClassName?: string
}

export const Profile: FunctionComponent<Props> = ({ containerClassName }) => {
  return (
    <div className={cn(containerClassName, "flex flex-wrap gap-8")}>
      <div className="flex flex-1 gap-4">
        <Avatar className="-mt-16 size-40 border-4 border-white shadow-lg dark:border-slate-900">
          <AvatarImage src={"/assets/images/me.jpg"} />
          <AvatarFallback>AL</AvatarFallback>
        </Avatar>

        <div>
          <p
            className={typography({
              size: "text-display-xs",
              weight: "semibold"
            })}
          >
            Andrea Lin
          </p>
          <p className={typography({ size: "text-sm" }, "text-secondary")}>
            I&apos;m a Full Stack Developer based in Parma, Italy.
          </p>
        </div>
      </div>

      <div className="flex gap-2 max-sm:basis-full">
        <Button onClick={() => toast("Coming soon!")}>
          <CalendarIcon /> Book a call with me!
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size={"icon"}>
              <DownloadIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem asChild>
              <Link href={"/assets/files/resume.pdf"}>Resume (English)</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href={"/assets/files/reference_letter_it.pdf"}>
                Reference Letter (Italian)
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="basis-full">
        <h2
          className={typography(
            {
              size: "text-lg",
              weight: "semibold"
            },
            "leading-[2.5rem]"
          )}
        >
          Experience
        </h2>
        <p className={typography({ size: "text-sm" }, "text-secondary")}>
          I specialise in the development of web and mobile applications.
        </p>
      </div>
    </div>
  )
}
