import { FunctionComponent, PropsWithChildren } from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { classnames } from "@/helpers/classnames"
import Navbar from "@/components/client/Navbar"
import Providers from "@/components/client/Providers"
import BackgroundName from "@/components/client/BackgroundName"

import "@/styles/globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
})

const bodyClassName = classnames(
  inter.className,
  "max-w-5xl",
  "h-[100dvh] m-auto flex flex-col md:flex-row",
  "bg-white dark:bg-slate-800",
  "overflow-hidden"
)

const mainClassName = classnames("w-full overflow-y-scroll py-4 px-8 md:p-16 relative flex-1 z-10 scrollbar-none")

const RootLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={bodyClassName}>
        <Providers>
          <Navbar />
          <main className={mainClassName}>
            {children}
          </main>
          <BackgroundName />
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout

export const metadata: Metadata = {
  title: "Andrea Lin | Full Stack Web Developer",
  description: "Ciao, sono Andrea Lin, e sono un Full Stack Developer."
}


