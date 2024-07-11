import BlogPostLink from "@/components/client/BlogPostLink"
import { getPosts } from "@/helpers/blog"
import { NextPage } from "next"

const BlogPage: NextPage = async() => {
  const postsData = await getPosts()

  return (
    <div className="divide-y divide-slate-200 dark:divide-slate-600">
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

export default BlogPage
