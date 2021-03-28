import React, { ReactElement } from "react"
import Document, { DocumentContext, DocumentInitialProps, Html, Head, Main, NextScript } from "next/document"

class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }

  render(): ReactElement {
    return (
      <Html lang="it">
        <Head>
          <meta charSet="utf-8" />
          <link rel="shurtcut icon" href="/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument
