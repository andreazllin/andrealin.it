"use client"

import { FunctionComponent, PropsWithChildren } from "react"
import Link, { type LinkProps } from "next/link"
import Typography from "../Typography"

const NavLink: FunctionComponent<PropsWithChildren<LinkProps>> = ({
  children,
  href
}) => {
  return (
    <Link href={href}>
      <Typography className="hover:underline">
        {children}
      </Typography>
    </Link>
  )
}

export default NavLink
