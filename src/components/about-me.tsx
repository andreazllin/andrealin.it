import React, { FunctionComponent } from "react"
import { typography } from "./typography"

export const AboutMe: FunctionComponent = () => {
  return (
    <div>
      <h2
        className={typography(
          {
            size: "text-md",
            weight: "semibold",
            suggestedMaxWidth: true
          },
          "leading-[2.5rem]"
        )}
      >
        About me
      </h2>
      <p
        className={typography(
          {
            size: "text-sm",
            suggestedMaxWidth: true
          },
          "text-secondary"
        )}
      >
        I&apos;m a passionate Web developer with over 3 years of professional
        experience, capable of working in a team.
      </p>
      <br />
      <p
        className={typography(
          {
            size: "text-sm",
            suggestedMaxWidth: true
          },
          "text-secondary"
        )}
      >
        With a proven track record in developing frontend and backend solutions
        for Web and Mobile platforms, mainly with React (and React Native) using
        TypeScript.
      </p>
      <br />
      <p
        className={typography(
          {
            size: "text-sm",
            suggestedMaxWidth: true
          },
          "text-secondary"
        )}
      >
        Progressively transitioned from a hands-on full-stack development to a
        leadership position and mentoring small development teams.
      </p>
    </div>
  )
}
