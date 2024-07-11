import { classnames } from "@/helpers/classnames"
import Link from "next/link"
import { FunctionComponent } from "react"
import Icon from "./Icon"
import Typography from "./Typography"
import { date as parseDate } from "@/helpers/dates"

interface Props {
  className?: string
  postId: string
  description: string
  title: string
  date: string
}

const BlogPostLink: FunctionComponent<Props> = ({
  postId,
  title,
  description,
  date,
  className
}) => {
  const classes = classnames(
    "group grid grid-cols-[minmax(0,1fr)_auto] py-4 items-center gap-3",
    className
  )

  const dateString = parseDate(date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric"
  })

  return (
    <Link
      className={classes}
      href={`/blog/${postId}`}
    >
      <div className="flex-1 w-full">
        <Typography>
          {title}
        </Typography>
        <Typography
          variant="secondary"
          size="sm"
          overflow="truncate"
        >
          {`${dateString} • ${description}`}
        </Typography>
      </div>

      <Icon
        name="chevron-right"
        className="text-slate-200 dark:text-slate-600 transform transition-transform group-hover:translate-x-1 min-w-max"
      />
    </Link>
  )
}

export default BlogPostLink
