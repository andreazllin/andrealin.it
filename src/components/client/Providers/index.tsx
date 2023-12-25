"use client"

import { FunctionComponent, PropsWithChildren } from "react"
import DarkMode from "./DarkMode"

const Providers: FunctionComponent<PropsWithChildren> = ({
  children
}) => {
  return (
    <>
      <DarkMode />
      {children}
    </>
  )
}

export default Providers
