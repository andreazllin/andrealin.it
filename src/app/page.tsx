import Blockquote from "@/components/client/Blockquote"
import Typography from "@/components/client/Typography"
import { getAge } from "@/helpers/dates"
import Link from "next/link"
import { FunctionComponent } from "react"

const RootPage: FunctionComponent = () => {
  return (
    <>
      <div id="about">
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

        <Typography size="2xl" weight="semibold" className="mb-2">
          about me
        </Typography>
        <Typography>
          during high school, i learned to use c++ and java for desktop programming.
          additionally, i continued to learn python independently at home.
          in the field of web development, i studied html, css, php and javascript, delving deeper into the latter using node and frameworks such as express for the backend and react for the frontend.
          regarding database management, i used mysql in school and mongodb and firebase independently.
          currently, i work with typescript for both frontend and backend.
        </Typography>
      </div>
    </>
  )
}

export default RootPage
