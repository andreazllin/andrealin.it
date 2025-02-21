import React, { FunctionComponent } from "react"
import { typography } from "./typography"

export const AboutMe: FunctionComponent = () => {
  return (
    <div>
      <h2
        className={typography({
          size: "text-display-xs",
          weight: "semibold"
        })}
      >
        About me
      </h2>
      <p
        className={typography(
          {
            suggestedMaxWidth: true
          },
          "text-secondary"
        )}
      >
        I&apos;m a passionate Web developer with over 3 years of professional
        experience, capable of working in a team or managing a small team.
      </p>
      <br />
      <p
        className={typography(
          {
            suggestedMaxWidth: true
          },
          "text-secondary"
        )}
      >
        With a proven track record in developing Frontend e Backend solutions
        for Web and Mobile cross-platform, mainly with React (and React Native)
        using TypeScript.
      </p>
    </div>
  )
}
