/* eslint-disable @typescript-eslint/ban-types */
import { Frontmatter, Post, PostMetadata } from "@/types/blog"
import { readdirSync, readFileSync } from "fs"
import { join } from "path"
import { compileMDX } from "next-mdx-remote/rsc"

const postsDir = join(process.cwd(), "src", "posts")

export const getPosts = async(): Promise<PostMetadata[]> => {
  const fileNames = readdirSync(postsDir)

  const promises = fileNames.map(async(fileName): Promise<PostMetadata> => {
    const id = fileName.replace(/\.mdx$/, "")
    const { metadata } = await getPost(id)

    return {
      id,
      ...metadata
    }
  })

  const data = await Promise.all(promises)

  return data
}

export const getPost = async(id: string): Promise<Post> => {
  const postPath = join(postsDir, `${id}.mdx`)

  const contentFile = readFileSync(postPath, { encoding: "utf-8" })

  const { frontmatter, content } = await compileMDX<Frontmatter>({
    source: contentFile,
    options: { parseFrontmatter: true }
  })

  return {
    metadata: frontmatter,
    content
  }
}
