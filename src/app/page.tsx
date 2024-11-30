"use client"

import Blockquote from "@/components/client/Blockquote"
import Typography from "@/components/client/Typography"
import { getAge } from "@/helpers/dates"
import Link from "next/link"
import { FunctionComponent, useMemo } from "react"
import { classnames } from "@/helpers/classnames"
import { certifications } from "@/constants/certifications"
import Certification from "@/components/client/Certification"
import { projects } from "@/constants/projects"
import Project from "@/components/client/Project"

const RootPage: FunctionComponent = () => {
  const language = (classes: string): string => {
    return classnames("px-1 py-0.5 text-white", classes)
  }

  const validCertifications = useMemo(() => {
    return certifications.filter(({ expiration }) => {
      if (!expiration) {
        return true
      }

      return expiration.getTime() > Date.now()
    })
  }, [])

  return (
    <div className="space-y-6">
      <Blockquote>
        <Typography>
          {`Hello! My name is Andrea, I am ${getAge("31/10/2002")} years old and I'm currently a developer at `}

          <Link
            href="https://polarity.dev"
            rel="noopener noreferrer"
            target="_blank"
            className="underline underline-offset-4 font-semibold"
          >
            Polarity
          </Link>
        </Typography>

      </Blockquote>

      <div id="about">
        <Typography component="h2" size="2xl" weight="semibold" className="mb-2">
          About me
        </Typography>
        <Typography>
          During high school, I learned to use <span className={language("bg-blue-800")}>C++</span> and <span className={language("bg-red-600")}>Java</span> for desktop programming.
          Additionally, I continued to learn <span className={language("bg-yellow-300 text-blue-600")}>Python</span> independently at home.
          <br />
          In the field of web development, I studied <span className={language("bg-orange-600")}>HTML</span>, <span className={language("bg-blue-600")}>CSS</span>, <span className={language("bg-purple-400")}>PHP</span> and <span className={language("bg-yellow-300 text-slate-900")}>JavaScript</span>, delving deeper into the latter using <span className={language("bg-green-800")}>Node</span> and frameworks such as <span className={language("bg-slate-400")}>Express</span> for the backend and <span className={language("bg-slate-700 text-blue-400")}>React</span> for the frontend.
          <br />
          Regarding database management, I used <span className={language("bg-cyan-900 text-orange-400")}>MySQL</span> in school and <span className={language("bg-green-600")}>MongoDB</span> and <span className={language("bg-orange-500")}>Firebase</span> independently.
          <br />
          Currently, I work with <span className={language("bg-blue-500")}>TypeScript</span> for both frontend and backend.
        </Typography>
      </div>

      <div id="projects">
        {/* TODO: maybe put a carousel when it will be needed? */}
        <Typography component="h2" size="2xl" weight="semibold" className="mb-2">
          Projects
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2">
          {
            projects.map((props, index) => <Project key={index} {...props} />)
          }
        </div>
      </div>

      <div id="certifications">
        {/* TODO: maybe put a carousel when it will be needed? */}
        <Typography component="h2" size="2xl" weight="semibold" className="mb-2">
          Certifications
        </Typography>
        <div className="flex gap-10">
          {
            validCertifications.map((props, index) => <Certification key={index} {...props} />)
          }
        </div>
      </div>
    </div>
  )
}

export default RootPage
