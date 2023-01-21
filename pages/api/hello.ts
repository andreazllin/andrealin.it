import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
  name: string
}

const handler = (_: NextApiRequest, res: NextApiResponse<Data>): void => {
  res.status(200).json({ name: "John Doe" })
  return
}

export default handler
