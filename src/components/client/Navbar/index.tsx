"use client"

import { classnames } from "@/helpers/classnames"
import { FunctionComponent } from "react"
import Icon, { IconProps } from "../Icon"
import Link from "next/link"
import clsx from "clsx"
import Image from "next/image"
import NavLink from "./NavLink"
import { socials } from "@/constants/socials"
import useDarkModeStore from "@/stores/useDarkModeStore"

const navClassName = classnames(
  "gap-4 flex flex-row justify-between sm:flex-col py-4 px-8 sm:p-16 w-full sm:w-80",
  "bg-slate-50 dark:bg-slate-900"
)

const iconProps: Omit<IconProps, "name"> = {
  size: 16,
  className: classnames(
    "cursor-pointer",
    "text-slate-300 dark:text-slate-50",
    "hover:text-opacity-50",
    "transition-colors duration-250"
  )
}

const Navbar: FunctionComponent = () => {
  const isDark = useDarkModeStore.use.isDark()
  const toggleDarkMode = useDarkModeStore.use.toggleDarkMode()

  return (
    <nav className={navClassName}>
      <Link href="/">
        <Image
          className="object-fit h-auto w-auto rounded-full hidden sm:flex"
          width={100}
          height={100}
          src="/assets/images/profile.jpg"
          alt="Andrea Lin"
        />
      </Link>
      {/* <Typography variant="secondary">web dev.</Typography> */}
      <div className="flex-1">
        <ul>
          <li>
            <NavLink href={"/#about"}>
              about
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex gap-2 items-center justify-center">
        {
          socials.map(({ icon, url }) => {
            return (
              <Link href={url} key={icon} rel="noopener noreferrer" target="_blank">
                <Icon name={icon} {...iconProps} />
              </Link>
            )
          })
        }

        <Icon
          {...iconProps}
          className={clsx(iconProps.className, "animate-pulse")}
          name={isDark ? "moon" : "sun"}
          onClick={toggleDarkMode}
        />
      </div>
    </nav>
  )
}

export default Navbar
