"use client"

import useDarkModeStore from "@/stores/useDarkModeStore"
import { FunctionComponent, useEffect } from "react"

const DarkMode: FunctionComponent = () => {
  const isDark = useDarkModeStore.use.isDark()

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  return null
}

export default DarkMode
