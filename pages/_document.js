import Document, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import { theme } from "@config/theme";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="it">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Ciao, sono Andrea Lin, attualmente sono uno studente e aspriro a diventare un Full Stack Developer."
          />
          <meta
            name="keywords"
            content="portfolio, andrea zi liang lin, andrea ziliang lin, andrea zi liang, andrea ziliang, andrea, zi liang, ziliang, andrea lin, zi liang lin, lin, web-dev, mern"
          />
          <meta name="author" content="Andrea Lin" />
          <link rel="shurtcut icon" href="/favicon.ico" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
