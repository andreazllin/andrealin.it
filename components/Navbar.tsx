import { FunctionComponent } from "react"
import Image from "next/image"
import Link from "next/link"
import { ScrollRotate } from "react-scroll-rotate"
import clsx from "clsx"
import { links, socials } from "@/utilities/constants/navbar"
import Balancer from "react-wrap-balancer"

const Navbar: FunctionComponent = () => {
  return (
    <nav className={clsx([
      "gap-4",
      "flex flex-row",
      "justify-between",
      "sm:flex-col",
      "py-4 px-8",
      "sm:p-16",
      "w-full sm:w-80"
    ])}>
      <div className="flex flex-col gap-2">
        <ScrollRotate target="scroll" method="perc" loops={1}>
          <Link href="/">
            <Image
              width={256}
              height={256}
              className="rounded-full w-24 sm:w-32"
              src="/assets/me.jpg"
              alt="Picture of Me"
            />
          </Link>
        </ScrollRotate>
        <Balancer className="text-gray-400 font-regular text-sm tracking-wider" ratio={0.3}>
          Full Stack Web Developer
        </Balancer>
      </div>
      <div className={clsx([
        "flex flex-col sm:flex-1",
        "sm:p-0",
        "pr-10"
      ])}>
        <ul className="tracking-wide font-mono text-sm sm:text-lg leading-loose flex-1 pb-4">
          {
            links.map(({ href, label }, index) => {
              return <li key={index} className="hover-underline-animation">
                <Link href={href} className="hover:underline active:underline underline-offset-8">
                  {label}
                </Link>
              </li>
            })
          }
        </ul>
        <div className="flex text-md gap-2">
          {
            socials.map(({ href, icon }, index) => {
              return <Link
                key={index}
                href={href}
                className="text-gray-400 hover:text-black transition-all"
                rel="noopener noreferrer"
                target="_blank"
              >
                {icon}
              </Link>
            })
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar
