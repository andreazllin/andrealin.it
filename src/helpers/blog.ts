/* eslint-disable @typescript-eslint/ban-types */
import { PostData } from "@/types/blog"
import fs from "fs"
import { join } from "path"
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkFrontmatter from "remark-frontmatter"
import remarkStringify from "remark-stringify"
import remarkParseFrontmatter from "remark-parse-frontmatter"
import { read } from "to-vfile"

const postsDir = join(process.cwd(), "src/posts")

export const getPostsData = async(): Promise<PostData[]> => {
  const fileNames = fs.readdirSync(postsDir)

  const promises = fileNames.map(async(fileName) => {
    const file = await unified()
      .use(remarkParse)
      .use(remarkStringify)
      .use(remarkFrontmatter, ["yaml"])
      .use(remarkParseFrontmatter)
      .process(await read(join(postsDir, fileName)))

    return {
      id: fileName.replace(/\.md$/, ""),
      fileName,
      title: file.data.frontmatter.title as string ??  "",
      description: file.data.frontmatter.description as string ??  "",
      date: file.data.frontmatter.date as string ??  ""
    }
  })

  const data = await Promise.all(promises)

  return data
}
