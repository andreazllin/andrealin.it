import { FunctionComponent, PropsWithChildren } from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { classnames } from "@/helpers/classnames"
import Navbar from "@/components/client/Navbar"
import { cookies } from "next/headers"
import Providers from "@/components/client/Providers"


import "@/styles/globals.css"
import Stray from "@/components/client/Stray"

const inter = Inter({ subsets: ["latin"] })

const bodyClassName = classnames(
  inter.className,
  "max-w-5xl",
  "h-screen m-auto flex flex-col sm:flex-row",
  "bg-white dark:bg-slate-800",
  "m-safe"
)

const mainClassName = classnames("w-full overflow-y-scroll py-4 px-8 sm:p-16 relative flex-1 z-10")

const RootLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const isDark = cookies().get("darkMode")?.value === "true"

  return (
    <html lang="en" className={classnames(isDark && "dark")}>
      <body className={bodyClassName}>
        <Navbar />
        <main className={mainClassName}>
          <Providers>
            {children}
          </Providers>
        </main>
        <Stray />
      </body>
    </html>
  )
}

export default RootLayout

export const metadata: Metadata = {
  title: "Andrea Lin | Full Stack Web Developer",
  description: "Ciao, sono Andrea Lin, e sono un Full Stack Developer."
}


