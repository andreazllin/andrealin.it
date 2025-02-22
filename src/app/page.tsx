import { Links } from "@/components/links"
import { AboutMe } from "./../components/about-me"
import { Profile } from "@/components/profile"
import Squares from "@/components/react-bits/Squares/Squares"
import { Separator } from "@/components/ui/separator"
import { FunctionComponent } from "react"
import { Experience } from "@/components/experience"

const Home: FunctionComponent = () => {
  return (
    <div className="mx-auto min-h-screen border-slate-200 bg-white pb-12 md:max-w-10/12 md:border-x xl:max-w-8/12 dark:border-slate-700 dark:bg-slate-900">
      <section className="h-[128px] bg-black">
        <Squares
          direction="diagonal"
          speed={0.25}
          squareSize={48}
          borderColor={"#454C56"}
          hoverFillColor={"#1B1F23"}
        />
      </section>

      <section className="px-6 py-8">
        <Profile />

        <Separator className="my-6" />

        <div className="grid gap-x-14 gap-y-8 lg:grid-cols-[minmax(0,1fr)_auto]">
          <AboutMe />
          <Links />
        </div>

        <Experience containerClassName="mt-8" />
      </section>
    </div>
  )
}

export default Home
