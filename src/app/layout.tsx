import { FunctionComponent, PropsWithChildren } from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
})

const RootLayout: FunctionComponent<PropsWithChildren> = ({
  children
}) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

export default RootLayout

export const metadata: Metadata = {
  title: "Andrea Lin | Full Stack Developer",
  description: "Hello! My name is Andrea Lin and I'm Full Stack Developer."
}
