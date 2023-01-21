import React, { FunctionComponent } from "react"
import NextHead from "next/head"

type Props = {
	title: string;
	description?: string;
	keywords?: string[];
}

const Head: FunctionComponent<Props> = ({ title, description, keywords }) => {
  return (
    <NextHead>
      <title>{title}</title>
      { description ? <meta name="description" content={description} /> : null }
      { keywords ? <meta name="keywords" content={keywords.toString()} /> : null }
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </NextHead>
  )
}

export default Head
