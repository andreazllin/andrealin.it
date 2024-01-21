import { classnames } from "@/helpers/classnames"
import Link from "next/link"
import { FunctionComponent } from "react"
import Icon from "./Icon"
import Typography from "./Typography"

interface Props {
  className?: string
  postId: string
  description: string
  title: string
}

const BlogPostLink: FunctionComponent<Props> = ({
  postId,
  title,
  description,
  className
}) => {
  const classes = classnames(
    "group flex py-4",
    className
  )

  return (
    <Link
      className={classes}
      href={`/blog/${postId}`}
    >
      <div className="flex-1">

        <Typography>
          {title}
        </Typography>
        <Typography variant="secondary" size="sm">
          {description}
        </Typography>
      </div>

      <Icon
        name="chevron-right"
        className="text-slate-300 transform -translate-x-1 transition-transform group-hover:translate-x-0"
      />
    </Link>
  )
}

export default BlogPostLink
