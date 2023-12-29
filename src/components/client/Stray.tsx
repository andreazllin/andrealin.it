import { FunctionComponent } from "react"
import Typography from "./Typography"
import { classnames } from "@/helpers/classnames"

const Stray: FunctionComponent = () => {
  const classes = classnames("font-stray whitespace-nowrap lowercase opacity-5",
    "writing-vertical-rl",
    "fixed",
    "bottom-2 right-8 z-0"
  )

  return <Typography
    className={classes}
    variant="secondary"
    size="9xl"
  >
    Andrea
  </Typography>
}

export default Stray
