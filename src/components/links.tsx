import React, { FunctionComponent, PropsWithChildren } from "react"
import { typography } from "./typography"
import { ArrowUpRightIcon } from "lucide-react"
import { default as NextLink } from "next/link"
import Image from "next/image"

const LinkTitle: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <h2 className={typography({}, "text-secondary")}>{children}</h2>
}

const Link: FunctionComponent<PropsWithChildren & { url: string }> = ({
  children,
  url
}) => {
  return (
    <NextLink
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={typography({ weight: "medium" }, "flex items-center gap-2")}
    >
      {children} <ArrowUpRightIcon className="inline" size={16} />
    </NextLink>
  )
}

export const Links: FunctionComponent = () => {
  return (
    <div className="grid grid-cols-2 gap-x-14 gap-y-7">
      <div>
        <LinkTitle>Location</LinkTitle>
        <p
          className={typography(
            { weight: "medium" },
            "flex items-center gap-2"
          )}
        >
          <Image
            width={16}
            height={16}
            src={"https://hatscripts.github.io/circle-flags/flags/it.svg"}
            alt="IT Flag"
          />{" "}
          Parma, IT
        </p>
      </div>
      <div>
        <LinkTitle>GitHub</LinkTitle>
        <Link url={"https://github.com/andreazllin"}>@andreazllin</Link>
      </div>

      <div>
        <LinkTitle>LinkedIn</LinkTitle>
        <Link url={"https://www.linkedin.com/in/andreazllin/"}>
          in/andreazllin
        </Link>
      </div>

      <div>
        <LinkTitle>Email</LinkTitle>
        <Link
          url={
            "mailto:me@andrealin.it?subject=We have an interesting offer for you!"
          }
        >
          me@andrealin.it
        </Link>
      </div>
    </div>
  )
}
