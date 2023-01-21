import "@/styles/globals.css"
import type { AppProps, AppType } from "next/app"
import Providers from "@/components/Providers"

const App: AppType = ({ Component, pageProps }: AppProps) => (
  <Providers>
    <Component {...pageProps} />
  </Providers>
)

export default App
