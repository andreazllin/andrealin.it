import { classnames } from "@/helpers/classnames"
import { FunctionComponent, HTMLAttributes } from "react"

interface Props extends HTMLAttributes<HTMLQuoteElement> { }

const Blockquote: FunctionComponent<Props> = ({
  children,
  className,
  ...props
}) => {
  const classes = classnames(
    "border-l-4",
    "border-l-slate-300 dark:border-l-slate-600",
    "bg-gradient-to-r to-transparent",
    "from-slate-100 dark:from-slate-700",
    "pl-4 py-2",
    className
  )

  return (
    <blockquote
      className={classes}
      {...props}
    >
      {children}
    </blockquote>
  )
}

export default Blockquote
