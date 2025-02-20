"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { Button } from "./ui/button"
import { LoaderCircleIcon, MoonIcon, SunIcon } from "lucide-react"
import useTheme from "@/hooks/useTheme"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false)
  const { isDark, toggleTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <Button size="icon" disabled>
      <LoaderCircleIcon className="animate-spin"/>
    </Button>
  }

  return (
    <Button size="icon" onClick={toggleTheme}>
      {isDark ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}
