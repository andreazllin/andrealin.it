import Blockquote from "@/components/client/Blockquote"
import Typography from "@/components/client/Typography"
import { getAge } from "@/helpers/dates"
import Link from "next/link"
import { FunctionComponent } from "react"
import { classnames } from "@/helpers/classnames"

const RootPage: FunctionComponent = () => {
  const language = (classes: string): string => {
    return classnames("px-1 py-0.5 text-white", classes)
  }

  return (
    <>
      <Blockquote className="mb-6">
        <Typography>
          {`Hello! My name is Andrea, I am ${getAge("31/10/2002")} years old and I'm currently a developer `}

          <Typography component="span" decoration="underline" className="underline-offset-4" weight="semibold">
            <Link
              href="https://soluzionifutura.it"
              rel="noopener noreferrer"
              target="_blank"
            >
                @soluzionifutura
            </Link>
          </Typography>
        </Typography>

      </Blockquote>

      <div id="about">
        <Typography component="h2" size="2xl" weight="semibold" className="mb-2">
          about me
        </Typography>
        <Typography lineHeight={10}>
          during high school, i learned to use <span className={language("bg-blue-800")}>c++</span> and <span className={language("bg-red-600")}>java</span> for desktop programming.
          additionally, i continued to learn <span className={language("bg-yellow-300 text-blue-600")}>python</span> independently at home.
          <br />
          in the field of web development, i studied <span className={language("bg-orange-600")}>html</span>, <span className={language("bg-blue-600")}>css</span>, <span className={language("bg-purple-400")}>php</span> and <span className={language("bg-yellow-300 text-slate-900")}>javascript</span>, delving deeper into the latter using <span className={language("bg-green-800")}>node</span> and frameworks such as <span className={language("bg-slate-400")}>express</span> for the backend and <span className={language("bg-slate-700 text-blue-400")}>react</span> for the frontend.
          <br />
          regarding database management, i used <span className={language("bg-cyan-900 text-orange-400")}>mysql</span> in school and <span className={language("bg-green-600")}>mongodb</span> and <span className={language("bg-orange-500")}>firebase</span> independently.
          <br />
          currently, i work with <span className={language("bg-blue-500")}>typescript</span> for both frontend and backend.
        </Typography>
      </div>
    </>
  )
}

export default RootPage
