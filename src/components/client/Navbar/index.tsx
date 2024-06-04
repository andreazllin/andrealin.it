"use client"

import { classnames } from "@/helpers/classnames"
import { FunctionComponent } from "react"
import Icon, { IconProps } from "../Icon"
import Link from "next/link"
import clsx from "clsx"
import Image from "next/image"
import NavLink from "./NavLink"
import { socials } from "@/constants/socials"
import useDarkMode from "@/hooks/useDarkMode"
import Typography from "../Typography"
import useNavbarStore from "@/stores/useNavbarStore"
import { navbarLink } from "@/constants/navbar"

const navClassName = classnames(
  "z-30 flex flex-row justify-between md:flex-col py-4 px-8 md:p-16 w-full md:w-80",
  "bg-slate-50 dark:bg-slate-900"
)

const iconProps: Omit<IconProps, "name"> = {
  size: 16,
  className: classnames(
    "cursor-pointer",
    "text-slate-300",
    "hover:text-opacity-50"
  )
}

const ulContainerClassName = classnames("flex-1 my-0 mr-4 md:my-6 md:mr-0")

const Navbar: FunctionComponent = () => {
  const { isDark, toggleDarkMode } = useDarkMode()
  const isNavbarOpen = useNavbarStore.use.isNavbarOpen()
  const openNavbar = useNavbarStore.use.openNavbar()
  const closeNavbar = useNavbarStore.use.closeNavbar()

  const ulClassName = classnames(
    "flex-col bg-slate-50 dark:bg-slate-900", // General Styles
    "md:flex md:relative md:p-0 md:gap-2", // Desktop Styles
    "absolute py-4 px-8 gap-4", // Mobile Styles
    "inset-0 z-[999]",
    isNavbarOpen ? "flex" : "hidden"
  )

  return (
    <nav className={navClassName}>
      <Link href="/" className="hidden md:block">
        <Image
          className="object-fit h-auto w-auto rounded-full p-2 border-dashed border-2 border-slate-200 dark:border-slate-700"
          width={100}
          height={100}
          src="/assets/images/profile.jpg"
          alt="Andrea Lin"
        />
        <Typography variant="secondary" className="mt-2">
          Full Stack Web Developer
        </Typography>
      </Link>
      <div className={ulContainerClassName}>
        <Icon
          name="menu-2"
          className="block md:hidden cursor-pointer text-slate-300 hover:text-opacity-50"
          onClick={openNavbar}
        />
        <ul className={ulClassName}>
          <li className="block md:hidden cursor-pointer text-slate-300 hover:text-opacity-50 mb-2">
            <Icon
              name="x"
              onClick={closeNavbar}
            />
          </li>
          {
            navbarLink.map(({ href, children }, index) => (
              <li key={index}>
                <NavLink href={href}>
                  {children}
                </NavLink>
              </li>
            ))
          }

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
