import { ReactElement } from "react"

export type PostMetadata = {
  id: string
} & Frontmatter

export type Frontmatter = {
  title: string
  date: string
  description: string
}

export type Post = {
  metadata: Frontmatter
  content: ReactElement
}
