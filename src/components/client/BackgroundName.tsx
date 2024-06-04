import { FunctionComponent } from "react"
import Typography from "./Typography"
import { classnames } from "@/helpers/classnames"
import { randomElementFromArray } from "@/helpers/array"

const BackgroundName: FunctionComponent = () => {
  const font = randomElementFromArray([
    "font-stray lowercase",
    "font-minecraftEnchantment lowercase",
    "font-drukWideBold uppercase"
  ])

  const classes = classnames("whitespace-nowrap opacity-5",
    "writing-vertical-rl",
    "fixed",
    "bottom-2 right-8 z-0",
    "select-none",
    font
  )

  return <Typography
    className={classes}
    variant="secondary"
    size="9xl"
  >
    Andrea
  </Typography>
}

export default BackgroundName
