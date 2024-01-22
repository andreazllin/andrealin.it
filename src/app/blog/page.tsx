import BlogPostLink from "@/components/client/BlogPostLink"
import { getPostsData } from "@/helpers/blog"
import { PostData } from "@/types/blog"
import { NextPage } from "next"

const BlogPage: NextPage = async() => {
  const postsData = await getPosts()

  return (
    <div className="divide-y">
      {
        postsData.map((data, index) => {
          return <BlogPostLink
            key={index}
            postId={data.id}
            description={data.description}
            title={data.title}
            date={data.date}
          />
        })
      }
    </div>
  )
}

export async function getPosts(): Promise<PostData[]> {
  return getPostsData()
}

export default BlogPage
