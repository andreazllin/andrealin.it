"use client"

import { FunctionComponent, PropsWithChildren } from "react"
import { ThemeProvider } from "next-themes"

const Providers: FunctionComponent<PropsWithChildren> = ({
  children
}) => {
  return (
    <ThemeProvider
      attribute="class"
      storageKey="dark-mode"
      defaultTheme="light"
    >
      {children}
    </ThemeProvider>
  )
}

export default Providers
