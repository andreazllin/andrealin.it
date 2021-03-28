import "@/styles/globals.css"
import type { AppProps, AppType } from "next/app"
import { Inter } from "@next/font/google"

const inter = Inter({ subsets: ["latin"] })

const App: AppType = ({ Component, pageProps }: AppProps) => (
  <main className={inter.className}>
    <Component {...pageProps} />
  </main>
)

export default App
