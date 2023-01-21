import { FunctionComponent, PropsWithChildren } from "react"
import Navbar from "@/components/Navbar"
import clsx from "clsx"

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div
        className="max-w-5xl h-screen m-auto flex flex-col sm:flex-row"
      >
        <Navbar />
        <main
          id="scroll"
          className={clsx([
            "w-full overflow-y-scroll",
            "py-4 px-8",
            "sm:p-16"
          ])}
        >
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
