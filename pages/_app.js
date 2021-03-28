import "@styles/globals.css";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@config/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Andrea Lin</title>
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
