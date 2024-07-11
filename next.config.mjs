import createMDX from "@next/mdx"

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["next-mdx-remote"],
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"]
}


export default withMDX(nextConfig)
