/* eslint-disable @typescript-eslint/no-explicit-any */
import { JSX } from "react"

declare module "*.mdx" {
  let MDXComponent: (props: any) => JSX.Element
  export default MDXComponent
}
