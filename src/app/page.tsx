import Squares from "@/components/react-bits/Squares/Squares"
import { ThemeToggle } from "@/components/theme-provider"
import { FunctionComponent } from "react"

const Home: FunctionComponent = () => {
  return (
    <div className="mx-auto min-h-screen border-slate-200 md:max-w-10/12 md:border-x xl:max-w-8/12 dark:border-slate-700">
      <section className="h-[256px] bg-slate-900">
        <Squares
          direction="diagonal"
          speed={0.25}
          squareSize={48}
          borderColor={"#454C56"}
          hoverFillColor={"#1B1F23"}
        />
      </section>
      <ThemeToggle />
    </div>
  )
}

export default Home
