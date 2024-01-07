"use client"

import { FunctionComponent, PropsWithChildren, ReactNode } from "react"
import Link, { type LinkProps } from "next/link"
import Typography from "../Typography"
import useNavbarStore from "@/stores/useNavbarStore"
import type { UrlObject } from "url"
import { classnames } from "@/helpers/classnames"

export interface Props extends PropsWithChildren<LinkProps> {
  children: string | ReactNode,
  href: string | UrlObject
}

const navLinkClassName = classnames(
  "hover:underline underline-offset-4", // General Styles
  "md:text-base" // Desktop Styles
)

const NavLink: FunctionComponent<Props> = ({
  children,
  href
}) => {
  const closeNavbar = useNavbarStore.use.closeNavbar()

  return (
    <Link href={href} onClick={closeNavbar}>
      {/* Styles applied with props are related to mobile, for desktop check above! */}
      <Typography size={"xl"} className={navLinkClassName}>
        {children}
      </Typography>
    </Link>
  )
}

export default NavLink
