"use client"

import useDarkModeStore from "@/stores/useDarkModeStore"
import { FunctionComponent, useEffect } from "react"

const DarkMode: FunctionComponent = () => {
  const isDark = useDarkModeStore.use.isDark()

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)

    if (!document.querySelector("meta[name=\"color-scheme\"]")) {
      const colorScheme = document.createElement("meta")
      colorScheme.name = "color-scheme"
      document.head.append(colorScheme)
    }

    const colorSchemeMeta = document.querySelector("meta[name=\"color-scheme\"]")

    if (colorSchemeMeta) {
      colorSchemeMeta.setAttribute("content", isDark ? "dark" : "light")
    }


    if (!document.querySelector("meta[name=\"theme-color\"]")) {
      const themeColor = document.createElement("meta")
      themeColor.name = "theme-color"
      document.head.append(themeColor)
    }

    const themeColorMeta = document.querySelector("meta[name=\"theme-color\"]")

    if (themeColorMeta) {
      themeColorMeta.setAttribute("content", isDark ? "#121417" : "#F5F7F8")
    }
  }, [isDark])

  return null
}

export default DarkMode
