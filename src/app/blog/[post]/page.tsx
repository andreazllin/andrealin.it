import { getPost } from "@/helpers/blog"
import { NextPage } from "next"

type Props = {
  params: {
    post: string
  }
}

const PostPage: NextPage<Props> = async({ params }) => {
  const { content } = await getPost(params.post)

  return (
    <div className="prose dark:prose-invert">
      {content}
    </div>
  )
}

export default PostPage
